/*jshint esversion:6 */


const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector('#stack-container .warning-bottom');
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new Stack();

const clearStackInput = () => {
  stackInput.value = "";
};



// FIX THE RENDER THAT IS ADDIND THE ALL ARRAY AGAIN
const renderListStack = () => {

  newStack.display().forEach(element => {

    let newLi = document.createElement('li');
    newLi.innerHTML = element;
    stackList.appendChild(newLi);
    
  });
};

renderListStack();

const generateWarningStack = (type) => {
  if (type === 'STACK_UNDERFLOW') {
    
    
  } else if (type === 'STACK_OVERFLOW') {
    warningTopStack.textContent = type;
  }
};

const addToStack = () => {
  try {

    if (!stackInput.value) {
      return;
    }

    newStack.stackControl.push(stackInput.value);

    clearStackInput();
    renderListStack();

  } catch (error) {
    
    error.type = 'STACK_OVERFLOW';
    generateWarningStack(error.type);
    
  }
  
};

const removeFromStack = () => {
  try {

    newStack.stackControl.pop();
  } catch (error) {

    error.type = 'STACK_OVERFLOW';
    generateWarningStack(error.type);
  }
};

addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
