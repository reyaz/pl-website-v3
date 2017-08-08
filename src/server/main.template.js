import strings from '../imports/strings'

function compileScriptTags (scriptSrcs) {
  function mapScriptTags (src) {
    return `<script src="${src}"></script>`
  }

  if (!Array.isArray(scriptSrcs)) {
    return ''
  }

  return scriptSrcs.map(mapScriptTags).join('\n')
}

function removeLeadingSpaces (markup) {
  return markup.replace(/^ +/gm, '')
}

function render ({ body, title, scriptSrcs }) {
  const markup = `
    <!DOCTYPE html>
    <html>
    <meta charset="utf-8"/>
    <title>${title || strings.main.title}</title>
    <div id="root">${body || ''}</div>
    ${compileScriptTags(scriptSrcs)}
  `

  return removeLeadingSpaces(markup)
}

export default render
