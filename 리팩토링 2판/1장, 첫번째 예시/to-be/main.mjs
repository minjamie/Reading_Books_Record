import { readFile } from 'fs/promises';

const invoices = await readFile('./invoices.json', 'utf-8');
const plays = await readFile('./plays.json', 'utf-8');
const invoicesData = JSON.parse(invoices);
const playsData = JSON.parse(plays);

function amountFor(aPerformance, play) { // 값 바뀌지 않는 변수는 매개변수로 전달, 매개변수도 더 명확한 이름으로 변경
  let result = 0 // 변수 초기화,  명확한 이름으로 변경

    switch (play.type) {
    case "tragedy":
      thisAmount = 40000;
      if (aPerformance.audience > 30) {
        thisAmount += 1000 * (perf.audience - 30);
      }
      break;

    case "comedy":
      thisAmount = 30000;
      if (aPerformance.audience > 20) {
        thisAmount += 10000 + 500 * (perf.audience - 20);
      }
      thisAmount += 300 * perf.audience;
      break;
    default:
      throw new Error(`알 수 없는 장르: ${play.type}`);
    }
  return result // 함수 안에서 값이 바뀌는 변수 반환
}

function playFor(aPerformance) {
  return plays[aPerformance.playID]
}

function statement(invoice, plays) {
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구내역 (고객명: ${invoice.customer})\n`;
  const format = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format;

  for (let perf of invoice.performances) {
    // const play = playFor(perf)
    // 우변을 함수로 추출 후 인라인된 변수 제거
    let thisAmount = amountFor(perf, playFor(perf)) // 추출한 함수 이용

    // 포인트를 적립한다.
    volumeCredits += Math.max(perf.audience - 30, 0);
    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if ("comedy" === play.type) volumeCredits += Math.floor(perf.audience / 5);

    // 청구 내역을 출력한다.
    result += `${play.name}: ${format(thisAmount / 100)} (${
      perf.audience
    }석)\n`;
    totalAmount += thisAmount;
  }

  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;
  console.log(result)
  return result;
}
statement(invoicesData, playsData)