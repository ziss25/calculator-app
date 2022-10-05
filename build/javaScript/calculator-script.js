// selection
const numbers = document.querySelectorAll('[number]');
const operands = document.querySelectorAll('[operand]');
const current = document.querySelector('.current');
const previos = document.querySelector('.previos');
const result = document.querySelector('[samaDengan]');
const reset = document.querySelector('[reset]');
const delet = document.querySelector('[deleted]');
// class
class Calculator {
  constructor() {
    // get property / assigment
    this.curr = '';
    this.prev = '';
    this.operand = '';
  }
  clear() {
    this.curr = '';
    this.prev = '';
    this.operand = '';
    this.#showDisplay();
  }
  delete() {
    this.curr = this.curr.slice(0, -1);
    this.#showDisplay();
  }
  append(number) {
    // get input number from user
    this.curr += number;
    this.#showDisplay();
  }
  operation(operand) {
    // jika user udah values pertama udah fix maka kita pindahkan ke change
    // condition
    if (this.curr == '') {
      console.log('return');
      return;
    }
    if (this.prev !== '') {
      console.log('okee data aman silahkan di kalkulasikan ...');
      this.calculation();
    } else {
      console.log('prev nya kosong maka dari itu harus di isi dlu...change cur -> prev');
    }
    this.operand = operand;
    this.prev = this.curr;
    this.curr = '';
    this.#showDisplay();
  }
  calculation() {
    if (this.prev == '' || this.curr == '') {
      alert('maaf data tidak valid');
      return;
    }
    let hasil;
    switch (this.operand) {
      case '+':
        hasil = parseFloat(this.prev) + parseFloat(this.curr);
        break;
      case '-':
        hasil = parseFloat(this.prev) - parseFloat(this.curr);
        break;
      case '/':
        hasil = parseFloat(this.prev) / parseFloat(this.curr);
        break;
      case 'x':
        hasil = parseFloat(this.prev) * parseFloat(this.curr);
        break;
      default:
        return;
    }
    this.curr = hasil;
    this.prev = '';
    this.operand = '';
    this.#showDisplay();
  }
  //   #getNumberDisplay(numberCurr) {
  //     if (isNaN(numberCurr)) {
  //       return;
  //     }
  //     console.log(numberCurr);
  //   }
  #showDisplay() {
    // let results = this.#getNumberDisplay(this.curr);
    current.innerText = this.curr;
    previos.innerText = `${this.prev} ${this.operand}`;
  }
}
// object instence
const calculator = new Calculator();
// event
numbers.forEach((number) => {
  number.addEventListener('click', () => {
    calculator.append(number.innerText);
  });
});
operands.forEach((operand) => {
  operand.addEventListener('click', () => {
    calculator.operation(operand.innerText);
  });
});
result.addEventListener('click', () => {
  calculator.calculation();
});
reset.addEventListener('click', () => {
  calculator.clear();
});
delet.addEventListener('click', () => {
  calculator.delete();
});

function cek() {
  console.info(previos);
  console.info(current);
}
function testingMethod() {
  let values1 = '2.517';
  let pisah1 = values1.split('.')[0];
  let pisah2 = values1.split('.')[1];
  let hasilValus1 = `${pisah1}${pisah2}`;
  // console.log(hasilValus1);
  let values2 = '2.517';
  console.log(parseFloat(hasilValus1));
  console.log(parseFloat(values2));
}

// intinya dah selesai
// paling tinggal
// include number ribuan & validasi belakang layar nya aja selebihnya udah
