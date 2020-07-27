const { tests } = require('./testData.js')
const { expect } = require('./helpers.js')

function getMoney(data, amount) {
  if (amount === 0 || typeof amount !== 'number' || isNaN(amount)) {
    return 'Введите корректную сумму.'
  }

  if (amount % 100) {
    return 'Пожалуйста, введите сумму кратную 100.'
  }

  const casets = Object.entries(data)
  const availableAmount = casets.reduce((res, [denomination, count]) => res += denomination * count, 0);
  if (availableAmount < amount) {
    return 'Запрашиваемая сумма недоступна. Введите меньшую сумму.'
  }

  let result = ''
  let curAmount = amount
  for (let i = casets.length - 1; i >= 0; i--) {
    let [denomination, count] = casets[i]

    while (count > 0 && curAmount >= denomination) {
      count--
      curAmount -= denomination
    }
    result += `${denomination}*${casets[i][1] - count}${i ? '+' : ''}`
  }

  if (curAmount !== 0) {
    return 'Невозможно выдать запрошенную сумму.'
  }

  return result
}

tests.forEach(({data, amount, result, testName}) => expect(getMoney(data, amount), testName).toBe(result))
