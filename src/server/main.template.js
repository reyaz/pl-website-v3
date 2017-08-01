import strings from '../imports/strings'

const mainScriptSrc = '/assets/main.bundle.js'

export default ({ body, title, scriptSrcs = [mainScriptSrc] }) => {
  const compileScriptTags = (scriptSrcs) => {
    const mapScriptTags = (src) => {
      return `<script src="${src}"></script>`
    }

    return scriptSrcs.map(mapScriptTags).join('\n')
  }

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title || strings.main.title}</title>
      </head>
      <body>
        <div>${body}</div>
        ${compileScriptTags(scriptSrcs)}
      </body>
    </html>
  `
}
