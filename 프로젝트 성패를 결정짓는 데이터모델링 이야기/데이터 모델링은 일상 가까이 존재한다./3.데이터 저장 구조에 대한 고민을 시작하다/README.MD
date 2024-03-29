# Chapter 3: 데이터 저장 구조에 대한 고민을 시작한다.

## 📌 어플리케이션 화면과 RDB의 테이블은 다르다.

> 데이터 모델링에 대한 이해와 경험이 부족할 수록 어플리케이션 화면 단위로 데이터 베이스의 데이블을 만들려는 경향이 있다.

- 데이터 모델링은 최종 사용자에게 보이는 하나의 집합체에서 데이터의 구조적인 '부분'을 분리하는 작업이다.

* 하나의 뷰에 포함된 데이터를 여러 테이블로, 다시 여러 행으로 분리하느 이유는 데이터 관리(저장, 수정, 조회)에 유리하기 때문이다.
* 중요한 건 각 부분을 왜 분리해야 하는지 그 이유를 정확히 알아야 한다는 것이다. 그래야 전체 뷰에서 부분을 분리하는 기준과 방법론으로 나아갈 수 있다.

#### 📚 데이터 모델링에 대한 이론적인 학습

> 1.  하나의 집합체로 보이는 뷰에서 데이터 구조로서의 부분을 분리해야하는 이유
> 2.  부분으로서 테이블(릴레이션)을 분리하는 기준과 규칙 등 방법론
>     즉, 집합체에서 각 부분과 그 저장 구조(분리한 테이블)를 고민하는 과정이 결국 관계형 데이터 모델링이다.

## 📌 설문 데이터 모델링, 데이터의 본질을 읽어 모델링하다.

- 데이터 이해에 집중하여 업무 데이터를 어떻게 읽고 분석해야 하는지에 초점을 맞추자.

> 섧문문항과 응답 결과를 정보시스템으로 관리하려면 설문지에 담긴 텍스트를 **데이터의 성격과 주제 등의 유사함을 중심으로 구조화**해야한다. 즉 **텍스트 데이터의 유형을 기준으로 관련된 것들을 묶어내는 과정**이 필요하댜.

설문에서 텍스트 유형을 살펴보자.

1. **질문**이라는 데이터 개체 집합을 도출

- 객관적 질문을 위해서는 **보기**또 필요
- **설문 제목**과 **설문 개요**등의 정보도 필요 => 질문이나 보기와는 다른 수주에서 관리하는 것이 논리적으로 자연스러움

설문제목? 설문을 기획하고 생성하는 입장에서의 메타정보로 설문지라는 상위 개체 수준에서 관리해야한다.

참고) 개체? 어떤 집합에서 서로 구별이 가능한 개별 요소, 즉 단위 객체이다.
집합이 관계형 데이터베이스의 테이블이라면 개체는 하나의 행으로 이해하자.

- 이렇게 설문지 한 장에서 질문과 보기라는 유형을, 나아가 여러 질문과 보기로 구성된 완성된 문제지로서의 설문지라는 상위 유형을 찾아 낼 수 있다.
- 여기서 말하는 설문지는 정보시스템에서 관리할 데이터 모델로서 설문 제목, 개요, 시작 일시 등의 속성을 관리하는 메타적 설문 문제지를 말한다,
- 설문지는 설문에 참여하는 행위나 그 결과로 만들어지는 다수의 응답 데이터 집합과 다르므로 별도의 구조로 관리해야한다.

=> 정보는 이처럼 정확한 위치에 유형별로 저장되어야 하며, 이를 위해 무엇보다 **데이터를 이해**해야한다.

평면적인 설문지 한 장에 숨어있는 데이터를 관찰하여 입체적으로 분석하고 이해햐아한다. 이를 통해 메타적 설문 문제지와 이를 구성하는 하위 질문 보기 그리고 응답 데이터를 담아 낼 수 있는 구조를 분리하여 모델로 표현해볼 수 있다.

EX1> 설문 ERD 1.0 - <설문 보기>는 <설문 질문>에, <설문 질문>은 <설문지>에 종속된다

만약 <설문 질문>과 <설문 보기>에 개체를 기준 정보 성격으로 코드처럼 관리해, 보기는 질문에 종속되지 않고 질문
역시 설문지에 종속되지 않은 독립 개체로 정의하고 관리한다면?

- 동일한 텍스트의 같은 데이터지만 완전히 다른 것으로 취급해 각각의 질문과 보기를 주변 맥락에서 분리하여 독립된 개체로 관리한다면 다시 2.0으로 ERD를 그린다.

EX2> 설문 ERD 2.0 - <설문 질문>과 <설문 보기>를 독립적으로 관리한다.

#### 📚 설문 데이터 모델링, 데이터의 본질을 읽어 모델링하다

> 앞서 살펴본 설문 예제를 통해 2가지 중요한 아이디어를 얻는다.

> 첫 째, 데이터 집합(엔터티)과 개체를 발견하는 힘
> 둘 째, 업무 요건을 보면 데이터가 보여야 하고, 업무에서 흘러 다니는 데이터의 성격과 고유한 근본 성질을 이해할 있어야 그에 맞는 구조를 도출해 낼 수 있다.

=> 즉, 데이터의 종속성이 업무적으로 어떻게 관리되고 있는지 혹은 관리 하려 하는지 정확히 알아야한다는 것
왜냐면 설문 ERD 1.0과 설문 ERD 2.0 처럼 주요 데이터 사이의 종속성에 따라 모델의 골격이 달라지기 때문에

#### 올바른 데잍터 모델링을 위한 기본기

> 1.  데이터의 근본 성격 파악 -> 데이터 집합과 개체 식별
> 2.  데이터의 종속성 분석 -> 데이터의 독립성 확인과 모델 골격 조망

### \*💡conclusion

업무를 데이터 중심으로 바라볼 수 있는 시선을 소개하며 데이터 모델링을 위해 데이터를 이해하는 것의 의미 이해
