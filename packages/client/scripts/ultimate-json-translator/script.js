const readline = require('linebyline')
const fs = require('fs')
const translator = require('@parvineyvazov/json-translator')
const path = require('path')

const INPUT_PATH = 'input.txt'

const LANGUAGE = {
    translator: translator.languages.Russian,
    name: 'russian'
}

const LANGUAGES = ['russian', 'chinese',
'spanish', 'hindi', 'french',
'italian', 'arabic', 'canada',
'english', 'kazakh']


fs.readFile(path.resolve(__dirname, INPUT_PATH), async (err, data) => {
  const removeDoubles = data.toString()
      .split('\n')
      .filter((item, i, allItems) => {
        return i === allItems.indexOf(item)
      })
      .join('\n')

  await fs.writeFile(INPUT_PATH, removeDoubles, () => {})

  const reader = readline(INPUT_PATH)

  const onError = (error) => {
    if (error) {
      console.log('An error has occurred.')
      console.log(error)
    }
  }

  const finalJSON = {}

  console.log('process...')

  reader.on('line', (line, count) => {
    if (!line.replace(' ', '')) {
      return
    }

    const word = line.trim().split(' ').slice(0, 2).join('_')
        .replace(' ', '_').slice(0, 13).replace(/[^\w ]/, '')

    finalJSON[word] = line
  })

  reader.on('end', async () => {
    console.log('process finished.')
    console.log('translating...')

    const TRANSLATED = (await translator.translateObject(
        finalJSON,
        translator.languages.English,
        LANGUAGE.translator
    ))

    if (!fs.existsSync(path.resolve(__dirname, 'translates'))) {
      fs.mkdirSync(path.resolve(__dirname, 'translates'))
    }

  const dirPath = path.resolve(__dirname, 'translates', LANGUAGE.name)
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath)
  }

  fs.writeFile(
      path.resolve(dirPath, `translation.json`),
      JSON.stringify(TRANSLATED, false, 4),
      'utf-8',
      onError)
    console.log('done.')
  })
})
