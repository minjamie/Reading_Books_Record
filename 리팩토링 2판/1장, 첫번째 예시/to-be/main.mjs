import { readFile } from 'fs/promises';

const invoices = await readFile('./invoices.json', 'utf-8');
const plays = await readFile('./plays.json', 'utf-8');
const invoicesData = JSON.parse(invoices);
const playsData = JSON.parse(plays);


function playFor(aPerformance) {
  return plays[aPerformance.playID]
}

// 1. thisAmount 값 설정 시 사용 >
function amountFor(aPerformance) { // 값 바뀌지 않는 변수는 매개변수로 전달, 매개변수도 더 명확한 이름으로 변경
  let result = 0 // 변수 초기화,  명확한 이름으로 변경

  // play를 playFor() 호출로 변경
    switch (playFor(aPerformance).type) {
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
      throw new Error(`알 수 없는 장르: ${playFor(aPerformance).type}`);
    }
  return result // 함수 안에서 값이 바뀌는 변수 반환
}

function volumeCreditsFor(aPerformance) {
  let result = 0;
  result += Math.max(aPerformance.audience - 30, 0)
  if ("comedy" == playFor(aPerformance).type) 
    result += Math.floor(aPerformance.audience / 5)
  return result;
}

function usd(aNumber) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(aNumber / 100)
}

function totalVolumeCredits() {
  let volumeCredits = 0; // 변수 선언을 반복문 앞으로 이동
  for (let perf of invoice.performances) {
    // 값 누적 로직 별도로 for문으로 분리
    volumeCredits += volumeCreditsFor(perf) // 추출한 함수 이용해 값 누적
  }
  return volumeCredits
}

function statement(invoice, plays) {
  let totalAmount = 0;
  let result = `청구내역 (고객명: ${invoice.customer})\n`;

  for (let perf of invoice.performances) {
    // const play = playFor(perf)
    // 우변을 함수로 추출 후 인라인된 변수 제거
    // let thisAmount = amountFor(perf) // 추출한 함수 이용 // 변수 인라인 > 필요 없어진 매개변수 제거

    // 포인트를 적립한다.
    // volumeCreditㅠs += Math.max(perf.audience - 30, 0);
    result += `${playFor(perf).name}: ${usd(amountFor(perf))} (${
      perf.audience
    }석)\n`;

    totalAmount += amountFor(perf);
    // thisAmount 변수 인라인
  }


  result += `총액: ${usd(totalAmount)}\n`; // 임시 변수였던 format 함수 호출로 대체, 단위 변환 로직도 함수 안으로 이동
  result += `적립 포인트: ${totalVolumeCredits()}점\n`;
 // 값 계산 로직 함수로 추출 , 변수 인라인
  console.log(result)
  return result;
}
statement(invoicesData, playsData)