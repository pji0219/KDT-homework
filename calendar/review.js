const date = document.querySelector('#date');
const content = document.querySelector('#content');
const calendar = document.querySelector('table');

let target;

calendar.addEventListener('click', (e) => {
  if (e.target.tagName === 'P') {
    date.value = e.target.textContent;
    target = e.target.parentNode;
  } else if (e.target.tagName === 'TD') {
    date.value = e.target.querySelector('p').textContent;
    target = e.target;
  }
  // else if (e.target.tagName === 'DIV') {
  //   e.target.remove();
  // }
});

function writeSchedule() {
  let task = content.value;
  let divEl = document.createElement('div');
  divEl.textContent = task;

  divEl.addEventListener('click', () => {
    if (divEl.style.textDecoration === 'line-through') {
      divEl.remove();
    } else {
      divEl.style = 'text-decoration: line-through';
    }
  });

  target.append(divEl);

  content.value = '';
}

// function deleteTask(t) {
//   t.remove();
// }
