// 다음 요구 사항 받았을 시

/**
    표준 카드 52장에서 5장 카드 집합(Q-H 하트 퀸 뜻하는 문자열 구성)을 부여
    해당 집합 이름 출력하는 프로그램 제작(스트레이트, 플러시, 페어 등
 **/

// 함수 선언식 보단 화살표 함수로 정의, 함수 정의 순서 중요
// const checkHand = (hand) => {
//      if (isTwoPair(hand)) {
//     return 'two pair';
//   } else if (isPair(hand)) {
//     return 'pair';
//   } else if (isFullHouse(hand)) {
//     return 'full house';
//   } else if (isTriple(hand)) {
//     return 'three of a kind';
//   } else if (isQuadruple(hand)) {
//     return 'four of a kind';
//   } else if (isStraightFlush(hand)) {
//     return 'straight flush';
//   } else if (isFlush(hand)) {
//     return 'flush';
//   } else if (isStraight(hand)) {
//     return 'straight';
//   } else {
//     return 'high card';
//   }
// }
// checkHand(['2-H', '3-C', '4-D', '5-H', '2-C'])
// 이러한 방식은 단순 콘솔 로그 테스트로 테스트를 계속 진행하면 8-10개 출멱문 사용되었을 때 의미 추적이 어려움

// 2. 짝이 되는 조건 추적 위해 모든 검사 함수에 false 반환
// checkStraightFlush = function(){
//   return false;
// };
// checkFullHouse = function(){
//   return false;
// };
// checkFlush = function(){
//   return false;
// };
// checkStraight = function(){
//   return false;
// };
// checkStraightFlush = function(){
//   return false;
// };
// checkTwoPair = function(){
//   return false;
// };

// checkFourOfKind = function(){
//   return false;
// };
// checkThreeOfKind = function(){
//   return false;
// };
// checkPair = function(){
//   return false;
// };

// // 3. 카드 값을 가지고 중복을 계산하는 함수 도입
// var getValues = function(hand){
//   var values = [];
//   for(var i=0;i<hand.length;i++){
//     values.push(hand[i][0]);
//   }
//   return values;
// };

// var countDuplicates = function(values){
//   var numberOfDuplicates = 0;
//   var duplicatesOfThisCard;
//   for(var i=0;i<values.length;i++){
//     duplicatesOfThisCard = 0;
//     if(values[i] == values[0]){
//       duplicatesOfThisCard += 1;
//     }
//     if(values[i] == values[1]){
//       duplicatesOfThisCard += 1;
//     }
//     if(values[i] == values[2]){
//       duplicatesOfThisCard += 1;
//     }
//     if(values[i] == values[3]){
//       duplicatesOfThisCard += 1;
//     }
//     if(values[i] == values[4]){
//       duplicatesOfThisCard += 1;
//     }
//     if(duplicatesOfThisCard > numberOfDuplicates){
//       numberOfDuplicates = duplicatesOfThisCard;
//     }
//   }
//   return numberOfDuplicates;
// };
// // 1. 카드에 짝 맞추는 코드 제대로 동작하는지 확인
// var checkHand = function(hand){
//   var values = getValues(hand);
//   var number = countDuplicates(values);

//   if (checkStraightFlush(hand)){
//     return 'straight flush';
//   }
//   else if (number==4){
//     return 'four of a kind';
//   }
//   else if (checkFullHouse(hand)){
//     return 'full house';
//   }
//   else if (checkFlush(hand)){
//     return 'flush';
//   }
//   else if (checkStraight(hand)){
//     return 'straight';
//   }
//   else if (number==3){
//     return 'three of a kind';
//   }
//   else if (checkTwoPair(hand)){
//     return 'two pair';
//   }
//   else if (number==2){
//     return 'pair';
//   }
//   else{
//     return 'high card';
//   }
// };
var checkHand = function () { 
    return "pair"
}
const assert = require('assert');
const wish = require('wish');
wish(checkHand(['2-H', '3-C', '4-D', '5-H', '2-C']) === 'pair');
wish(checkHand(['3-H', '3-C', '3-D', '5-H', '2-H'])==='three of a kind');