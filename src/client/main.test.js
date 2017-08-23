/* global expect, test */

import { greating } from './main'

test('has a greating', () => {
  expect(greating).toBe('Hey World. I’m the Client.')
})
