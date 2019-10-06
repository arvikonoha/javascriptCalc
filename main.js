let res = ''
let temp = ''
let opr = ''

function calc(e) {
  let item = e.target
  if (item.classList.contains('opr')) {
    console.log('oper')
    opr = item.innerHTML
    if (temp)
      res = parseInt(temp)
    temp = ''
  } else if (item.classList.contains('fin')) {
    console.log('fin')
    switch (opr) {
      case '+':
        res += parseInt(temp)
        temp = ''
        opr = ' '
        break;
      case '-':
        res -= parseInt(temp)
        temp = ''
        opr = ' '
        break
      case 'x':
        res *= parseInt(temp)
        temp = ''
        opr = ' '
        break
      case '/':
        if (temp == 0) {
          alert('invlid input')
          temp = ''
          opr = ' '
        } else {
          res /= parseInt(temp)
          temp = ''
          opr = ' '
        }
        break

      default:
        break;
    }
  } else if (item.classList.contains('clear-btn')) {
    console.log('clear')
    temp = ''
    res = 0
    opr = ''
  } else {
    console.log(item.innerHTML)
    if (opr !== ' ') {
      temp += item.innerHTML
    } else {
      temp = item.innerHTML
      opr = ''
    }
  }

  document.querySelector('.calc-display').innerHTML = res + opr + temp
}

Array.from(document.querySelectorAll('.calc-btn')).forEach(item => {
  item.addEventListener('click', calc)
})

document.querySelector('.fin').addEventListener('click', (e) => {

})