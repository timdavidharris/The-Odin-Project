// From the exercise on this website:
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals

const select = document.querySelector('select');
const html = document.querySelector('.output');

select.onchange = function() {
  const choice = select.value;

// ADD SWITCH STATEMENT
// My code below
  switch (choice) {
    case 'white':
      update('black','white');
      break;
    case 'black':
      update('white','black');
      break;
    case 'purple':
      update('purple','white');
      break;
    case 'yellow':
      update('yellow','grey');
      break;
    case 'psychedelic':
      update('psychedelic','white');
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}
