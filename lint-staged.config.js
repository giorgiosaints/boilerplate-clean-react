module.exports = {
  '*.{ts,tsx}': (filenames) => [
    'yarn format:fix',
    'yarn format:check'
  ]
}