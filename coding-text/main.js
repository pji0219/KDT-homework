// 1. 자릿수 더하기
function solution(n) {
  let answer = 0;

  // 배열에 넣기 위해 문자열로 바꿔줌
  const numToStr = n.toString();

  // 전개 연산자로 배열에 문자열 요소를 넣어주고 reduce함수를 이용하고 문자로 바꿔준 숫자는 parseInt로 다시 숫자로 바꿔가며 더해줌
  answer = [...numToStr].reduce((acc, crr) => acc + parseInt(crr), 0);

  return answer;
}

const num = 123;

console.log(solution(num)); // 1 + 2+ 3 = 6

// 2. 없는 숫자 더하기
function solution2(numbers) {
  let answer = 0;

  // for문을 통해서 0 ~9까지의 숫자를 돌려줌
  for (let i = 0; i <= 9; i++) {
    /* 
      not연산자와 includes()를 활용해서 숫자가 포함되어 있으면 false가 되게 하고 숫자가 포함되어 있지 않으면 true가 되게 해서
      0~9까지 중 포함되지 않은 숫자를 더해줌
    */
    if (!numbers.includes(i)) answer += i;
  }

  return answer;
}

const numbers = [1, 2, 3, 4, 6, 7, 8, 0];

console.log(solution2(numbers)); // 5 + 9 = 14

// 3. 나누어 떨어지는 숫자 배열
function solution3(arr, divisor) {
  let answer = [];

  // forEach로 배열에 있는 숫자를 돌려서
  arr.forEach((num) => {
    // 그 숫자가 divisor로 받아온 수로 나눴을 때 나누어 떨어지면 배열에 넣어줌
    if (num % divisor === 0) answer.push(num);
  });

  /* 
    만약 나누어 떨어지는 아예 없는 경우에는 answer배열의 길이가 0이므로 
    그것을 통해 나누어 떨어지는 수가 없다는 것을 판별 한 뒤 -1을 배열에 넣어줌
  */
  if (answer.length === 0) answer.push(-1);

  // 오름차순으로 정렬해줌
  /*
    a - b를 해서 크기를 비교한 뒤 
    a가 b보다 크면 양수
    a가 b보다 작으면 음수
    a와 b가 같으면 0을 return
    이것을 이용해서 내부적으로 a가 작으면 앞으로, 둘이 같으면 그대로, a가 크면 b가 작은 것이므로 b를 앞으로 해서 오름차순으로 정렬됨
  */
  answer.sort((a, b) => a - b);

  return answer;
}

const arr = [5, 9, 7, 10];

console.log(solution3(arr, 5)); // [5, 10]
