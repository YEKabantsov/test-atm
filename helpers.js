function expect(value, name) {
  return {
    toBe: expectation => {
      if (value === expectation) {
        console.log(`✓ Успешно: ${name}`)
      } else {
        console.error(`Получено: ${value}, ожидалось: ${expectation}`)
      }
    }
  }
}

module.exports = { expect }