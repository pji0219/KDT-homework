const calendar = document.querySelector('table');
const dateInput = document.getElementById('date');
const contentInput = document.getElementById('content');
const writeBtn = document.querySelector('button');

// 클릭된 날짜의 요소를 저장하기 위한 변수
let ElPosition;

// input에 날짜 넣기
calendar.addEventListener('click', (e) => {
  // 클릭 된 태그가 p태그면
  if (e.target.tagName === 'P') {
    // 해당 p태그의 텍스트 내용을 가져와서
    const day = e.target.textContent;

    // input에 값으로 넣음
    dateInput.value = day;

    // 추후에 스케줄 작성을 위해 태그 위치를 저장
    ElPosition = e.target.parentNode;

    // 혹시 p태그에 인접한 p태그의 부모 요소인 td태그가 클릭 됫을 시를 위해
  } else if (e.target.tagName === 'TD') {
    // td태그의 자식 태그p 안에 있는 날짜 텍스트를 가져옴
    const day = e.target.firstChild.textContent;

    // input에 값으로 넣음
    dateInput.value = day;

    // 추후에 스케줄 작성을 위해 태그 위치를 저장
    ElPosition = e.target;
  }
});

// 일정 추가
writeBtn.addEventListener('click', () => {
  // div 태그 생성
  const schedule = document.createElement('div');

  // 추후에 삭제 기능에서 다른 div태그는 안지우고 추가된 일정만 지우기 위해서 클래스 추가
  schedule.classList.add('schedule');

  // div태그에 input창의 값을 텍스트로 넣어줌
  const value = contentInput.value;
  schedule.textContent = value;

  // 클릭한 날짜에 div태그를 자식 태그로 추가
  ElPosition.append(schedule);

  // input창 비우기
  contentInput.value = '';
});

// 일정 삭제
calendar.addEventListener('click', (e) => {
  if (e.target.className === 'schedule') {
    $('.schedule').remove();
  }
});
