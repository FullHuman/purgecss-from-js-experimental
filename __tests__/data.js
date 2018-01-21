export const TEST_1_CONTENT = `
const block = 'input'
const modifiers = ['invalid', 'valid', 'focus']
window.classNames = modifiers.map(modifier => block + '--' + modifier)
`

export const TEST_1_CLASSNAMES = ['input--invalid', 'input--valid', 'input--focus']
