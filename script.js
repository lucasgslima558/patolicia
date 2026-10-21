// Simple calculator with support for + - * /, power and n-th root
const displayEl = document.getElementById('display');
let current = '';
let previous = null;
let operator = null;
let waitingForSecond = false;
let mode = null; // null | 'power' | 'root'

function updateDisplay(text){
  displayEl.textContent = (text ?? '0');
}

function appendDigit(d){
  if (waitingForSecond) {
    current = '';
    waitingForSecond = false;
  }
  if (d === '.' && current.includes('.')) return;
  if (d !== '.' && current === '0') current = d;
  else current = current + d;
  updateDisplay(current);
}

function clearAll(){
  current = '';
  previous = null;
  operator = null;
  mode = null;
  waitingForSecond = false;
  updateDisplay('0');
}

function backspace(){
  if (current.length > 0) {
    current = current.slice(0, -1);
    updateDisplay(current || '0');
  }
}

function applyPercent(){
  if (!current) return;
  const num = parseFloat(current);
  current = String(num / 100);
  updateDisplay(current);
}

function chooseOperator(op){
  if (mode) return;
  if (current === '' && previous === null) return;
  if (previous === null) {
    previous = parseFloat(current || '0');
  } else if (!waitingForSecond) {
    evaluate();
    previous = parseFloat(displayEl.textContent);
  }
  operator = op;
  waitingForSecond = true;
}

document.getElementById('power').addEventListener('click', () => {
  if (!current) return;
  mode = 'power';
  previous = parseFloat(current);
  waitingForSecond = true;
  updateDisplay(previous + ' ^');
});

document.getElementById('root').addEventListener('click', () => {
  mode = 'root';
  current = '';
  waitingForSecond = false;
  updateDisplay('√ n →');
});

function evaluate(){
  if (mode === 'power') {
    const exponent = parseFloat(current || '0');
    const result = Math.pow(previous, exponent);
    resetAfterEval(result);
    return;
  } else if (mode === 'root') {
    if (previous === null) {
      previous = parseFloat(current || '0');
      current = '';
      updateDisplay('index: ' + previous);
      waitingForSecond = true;
      return;
    } else {
      const n = previous;
      const value = parseFloat(current || '0');
      if (n === 0) {
        updateDisplay('Erro: índice 0');
        resetStateButKeepDisplay();
        return;
      }
      const result = Math.pow(value, 1 / n);
      resetAfterEval(result);
      return;
    }
  }

  if (!operator) return;
  const a = previous;
  const b = parseFloat(current || '0');
  let res;
  switch (operator) {
    case '+': res = a + b; break;
    case '-': res = a - b; break;
    case '*': res = a * b; break;
    case '/':
      if (b === 0) {
        updateDisplay('Erro: divisão por 0');
        resetStateButKeepDisplay();
        return;
      }
      res = a / b; break;
    default: return;
  }
  resetAfterEval(res);
}

function resetAfterEval(value){
  current = String(trimTrailingZeros(value));
  previous = null;
  operator = null;
  mode = null;
  waitingForSecond = false;
  updateDisplay(current);
}

function resetStateButKeepDisplay(){
  current = '';
  previous = null;
  operator = null;
  mode = null;
  waitingForSecond = false;
}

function trimTrailingZeros(num){
  if (!isFinite(num)) return num;
  let s = String(num);
  if (s.indexOf('.') === -1) return num;
  s = parseFloat(s).toString();
  return s;
}

document.querySelectorAll('[data-num]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    appendDigit(btn.getAttribute('data-num'));
  });
});

document.querySelectorAll('.operator').forEach(btn => {
  btn.addEventListener('click', () => {
    chooseOperator(btn.getAttribute('data-op'));
  });
});

document.getElementById('clear').addEventListener('click', clearAll);
document.querySelector('[data-action="back"]').addEventListener('click', backspace);
document.querySelector('[data-action="percent"]').addEventListener('click', applyPercent);
document.getElementById('equals').addEventListener('click', evaluate);

clearAll();
