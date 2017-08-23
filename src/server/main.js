import path from 'path'
import express from 'express'

import strings from '../imports/strings.json'

const app = express()
const port = process.env.PORT || 3000

app.use('/assets', express.static(path.join(__dirname, '../assets')))
app.use('/assets', express.static(path.join(__dirname, '../../build/client')))

/* istanbul ignore next */
if (!module.parent) {
  /* istanbul ignore next */
  app.listen(port, () => {
    console.log(strings.main.listening, port)
  })
}

export default app
