const tests = [
  {
    data: { "100": 5, "200": 5, "1000": 5, "5000": 5},
    amount: 4790,
    result: 'Пожалуйста, введите сумму кратную 100.',
    testName: 'Cумма кратна 100.'
  },
  {
    data: { "100": 0, "200": 0, "1000": 0, "5000": 1},
    amount: 9000,
    result: 'Запрашиваемая сумма недоступна. Введите меньшую сумму.',
    testName: 'Нехватка купюр в банкомате.'
  },
  {
    data: { "100": 5, "200": 5, "1000": 5, "5000": 5},
    amount: 'asaafd',
    result: 'Введите корректную сумму.',
    testName: 'Невалидная сумма.'
  },
  {
    data: { "100": 5, "200": 5, "1000": 5, "5000": 5},
    amount: 0,
    result: 'Введите корректную сумму.',
    testName: 'Сумма равна нулю.'
  },
  {
    data: { "100": 1, "200": 0, "1000": 5, "5000": 5},
    amount: 5200,
    result: 'Невозможно выдать запрошенную сумму.',
    testName: 'Нет нужных купюр в банкомате.'
  },
  {
    data: { "100": 5, "200": 5, "1000": 5, "5000": 5},
    amount: 700,
    result: '5000*0+1000*0+200*3+100*1',
    testName: 'Выдача 700 рублей.'
  },
  {
    data: { "100": 5, "200": 5, "1000": 5, "5000": 5},
    amount: 19400,
    result: '5000*3+1000*4+200*2+100*0',
    testName: 'Выдача 19400 рублей.'
  }
]

module.exports = { tests }