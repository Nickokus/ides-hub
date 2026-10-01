import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const deckDir = path.resolve(process.argv[2] ?? '.')
const sourceDir = path.join(deckDir, 'src', 'source')
const targetDir = path.join(deckDir, 'src')

async function materialize(prefix, target) {
  const files = (await readdir(sourceDir))
    .filter((name) => name.startsWith(`${prefix}.part-`) && name.endsWith('.txt'))
    .sort()

  if (!files.length) throw new Error(`No se encontraron partes para ${prefix} en ${sourceDir}`)

  const chunks = await Promise.all(files.map((name) => readFile(path.join(sourceDir, name), 'utf8')))
  await mkdir(targetDir, { recursive: true })
  await writeFile(path.join(targetDir, target), chunks.join(''), 'utf8')
}

await materialize('App', 'App.tsx')
await materialize('styles', 'styles.css')
console.log(`Fuentes materializadas: ${deckDir}`)
