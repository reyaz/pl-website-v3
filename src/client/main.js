import strings from '../imports/strings.json'

const introduction = 'I’m the Client.'
const greating = [strings.main.greating, introduction].join(' ')

/* istanbul ignore next */
if (!module.parent) {
  console.log(greating)
}

export { greating }
