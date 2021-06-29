// From the exercise on this website: 
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals

const select = document.querySelector('select');
const list = document.querySelector('ul');
const h1 = document.querySelector('h1');

select.onchange = function() {
  const choice = select.value;

// My code below
let days = 31;
if (choice === 'February') {
days = 28;
} else if (choice === 'April' || choice === 'June' || choice === 'September' || choice === 'November'){
days = 30;
}
// My code above

  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'January');
