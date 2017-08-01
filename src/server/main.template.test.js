/* global describe, expect, it */

import template from './main.template'

describe('the main template', () => {
  it('should have a title', () => {
    const title = 'Title'
    const page = template({title: title})

    expect(page.indexOf(`<title>${title}</title>`) < 0).toBe(false)
  })

  it('should have a body', () => {
    const body = 'Body'
    const page = template({body: body})

    expect(page.indexOf(`<div>${body}</div>`) < 0).toBe(false)
  })
})
