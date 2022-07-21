let target;
let currentTarget;

$('td').on('click', (e) => {
  target = e.target;
  currentTarget = e.currentTarget;

  if ($(target).prop('tagName') === 'DIV') {
    $(target).remove();
  } else {
  }

  $('#date').val($(currentTarget).text());
});

function writeSchedule() {
  let task = $('content').val();

  $(currentTarget).append(`<div>${task}</div>`);
  $('content').val('');
}
