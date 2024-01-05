let a = 5;

switch (a) {
  case 4:
    console.log('계산이 맞습니다!');
    break;

  case 3: // (*) 두 case문을 묶음
  case 5:
    console.log('계산이 틀립니다!');
    console.log("수학 수업을 다시 들어보는걸 권유 드립니다.");
    break;
  default:
    console.log('계산 결과가 이상하네요.');
}