const readline = require('linebyline')
const fs = require('fs')
const translator = require('@parvineyvazov/json-translator');
const path = require('path')
const LANGUAGES = require('./config')

const INPUT_PATH = 'input.txt'

const sleep = async (ms) => await new Promise(r => setTimeout(r, ms));

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
    console.log('translating...');

    const maxLength = Object.values(finalJSON).length


      if (!fs.existsSync(path.resolve(__dirname, 'translates'))) {
          fs.mkdirSync(path.resolve(__dirname, 'translates'))
      }

    for (language of LANGUAGES){
        const translated = {}
        let count = 0

        for await ([key,value] of Object.entries(finalJSON)){
            await sleep(2000)
            const translatedWord = await translator.translateWord(value,
                translator.languages.English,
                language.translator
            )
            translated[key] = translatedWord
            console.log(`language: ${language.name}, ${count++}/${maxLength} words`)
            console.log(`translated: ${translatedWord}`)
        }
        console.log(`JSON TRANSLATED. LANGUAGE: ${language.name}`)

        const dirPath = path.resolve(__dirname, 'translates', language.name)
          if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath)
          }
        fs.writeFile(
              path.resolve(dirPath, 'translation.json'),
              JSON.stringify(translated, false, 4),
              'utf-8',
              onError)
    }
    console.log('done.')
  })
})
