import strings from '../imports/strings'

const mainScriptSrc = '/assets/main.bundle.js'

export default ({ body, title, initialState = {}, scriptSrcs = [mainScriptSrc] }) => {
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
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
        <title>${title || strings.main.title}</title>
      </head>
      <body>
        <div id="root">${body}</div>
        ${compileScriptTags(scriptSrcs)}
      </body>
    </html>
  `
}
