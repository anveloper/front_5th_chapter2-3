## 배포
- https://anveloper.github.io/front_5th_chapter2-3/

## 과제 체크포인트

### 기본과제

#### 목표 : 전역상태관리를 이용한 적절한 분리와 계층에 대한 이해를 통한 FSD 폴더 구조 적용하기
- 전역상태관리를 사용해서 상태를 분리하고 관리하는 방법에 대한 이해
- Context API, Jotai, Zustand 등 상태관리 라이브러리 사용하기
- FSD(Feature-Sliced Design)에 대한 이해
- FSD를 통한 관심사의 분리에 대한 이해
- 단일책임과 역할이란 무엇인가?
- 관심사를 하나만 가지고 있는가?
- 어디에 무엇을 넣어야 하는가?

#### 체크포인트
- [x] 전역상태관리를 사용해서 상태를 분리하고 관리했나요?
- [x] Props Drilling을 최소화했나요?
- [x] shared 공통 컴포넌트를 분리했나요?
- [x] shared 공통 로직을 분리했나요?
- [x] entities를 중심으로 type을 정의하고 model을 분리했나요?
- [x] entities를 중심으로 ui를 분리했나요?
- [x] entities를 중심으로 api를 분리했나요?
- [x] feature를 중심으로 사용자행동(이벤트 처리)를 분리했나요?
- [x] feature를 중심으로 ui를 분리했나요?
- [x] feature를 중심으로 api를 분리했나요?
- [x] widget을 중심으로 데이터를 재사용가능한 형태로 분리했나요?


### 심화과제

#### 목표: 서버상태관리 도구인 TanstackQuery를 이용하여 비동기코드를 선언적인 함수형 프로그래밍으로 작성하기 

- TanstackQuery의 사용법에 대한 이해
- TanstackQuery를 이용한 비동기 코드 작성에 대한 이해
- 비동기 코드를 선언적인 함수형 프로그래밍으로 작성하는 방법에 대한 이해

#### 체크포인트

- [x] 모든 API 호출이 TanStack Query의 useQuery와 useMutation으로 대체되었는가?
- [x] 쿼리 키가 적절히 설정되었는가?
- [x] fetch와 useState가 아닌 선언적인 함수형 프로그래밍이 적절히 적용되었는가?
  - data의 관리 포인트를 따로 두지 않는 부분의 어색함이 있어 명령형으로 대부분 사용하였습니다..
- [x] 캐싱과 리프레시 전략이 올바르게 구현되었는가?


## 과제 셀프회고

### 과제에서 좋았던 부분

- 테오는 FSD가 정설은 아니다, 완벽한 아키텍쳐가 아니다 라고, 혹시나 맹신을 하게 될까봐 걱정하는 말을 발제와 공통 세션, 멘토링에서 자주 언급을 하셨습니다만, 이 나누고 옮기는 과정을 경험하는 것 자체에 대한 의의가 너무 뛰어난 과제여서 좋았습니다.
- 마치 방 정리를 한번도 해보지 않은 이제 막 독립한 사회초년생에게 전문 청소 업체의 디테일한 청소의 예시를 설명하는 듯한 진행과정이 너무 좋았습니다.

- 실제 회사 솔루션 중 그나마 최근 솔루션은 Next.js와 같은 프레임워크 자체의 샘플 코드와 비슷한 디렉토리 구조로 진행하여, 어느정도 코드를 확인하는데 어려움이 없었으나,
- 08년도에 만들어진 솔루션은 단 하나의 /js 폴더에 십여개의 js 파일들이 있는 상태에, 한 개의 파일마다 기본 천줄씩은 되는 상황이라 이게 나 다음 사람이 있다면 무사히 운영이 될 수 있을까하는 걱정이 늘 들고 있었습니다. 

- 그렇다고 완벽한 리팩토링을 진행할 시간을 회사에서 주는 것은 아니기 때문에, 제가 손을 대는 부분 부분을 블록화 하는 과정이 필요했는데, 
- 이번 과제를 통해 코드를 나누고, 규칙에 맞게 여기 저기 옮겨보면서, 실제로도 현업에 활용할 때 어떻게 해야겠다 하는 저만의 기준을 잡아 본것 같아 좋았습니다.

### 과제를 하면서 새롭게 알게된 점

- 일단 FSD와 같은 선배 개발자들의 고민이 많이 묻어있는 설계들을 알게된 점이 너무 좋았습니다. 
- 구분을 하는 기준을 Entities / Features / Widgets 으로 나누는 패턴처럼, 제가 일하는 환경에 맞는 패턴을 먼저 정하고 시작하는 것이 어느정도 흐름을 탄 프로젝트의 과정이나, 개발이 완료된 뒤 유지보수 과정에서 영향이 있는 지 예시 코드를 통해 알게 되었습니다.

- Tanstack Query의 필요성에 대하여 알게된 과제였습니다. 아마 코드상으로 올바른 패턴을 사용하진 못한것 같지만, 클라이언트 쪽의 캐싱의 필요성을 이번 과제 학습을 통해 배우게되었습니다. 
- Next.js에서 지원되는 서버 캐싱에 대하여는 이미 오랜 기간 사용하여 최적화를 어떻게 해야할 지 고민을 많이하고 적용도 했었는데, 클라이언트에서의 최적화 방식을 알게되어 좋았습니다. 
- 5월에 새로운 B2B 프로젝트의 어드민과 폐쇄몰의 FE 개발 스택을 제가 정하게 될 것 같은데, Tanstack Query는 추가로 사용을 하게 될 것 같습니다.

### 과제를 진행하면서 아직 애매하게 잘 모르겠다 하는 점, 혹은 뭔가 잘 안되서 아쉬운 것들

- 어느정도 폴더를 분리하고 파일을 배치하는 전략들은, 멘토링 이후에 시야가 생긴것 같습니다.
- 멘토링 이후에 진행한 심화과제에서 생성된 Tanstack Query와 연계된 파일들은 아직 헷갈리는 것 같습니다.
- 대부분이 사용자를 위한 기능이 포함되어 Feature이지 않을까? 하는 생각에 use- 들을 features/*/models 로 배치했는데, 조금 적절했을까? 하는 생각이 들었습니다.

## 리뷰 받고 싶은 내용이나 궁금한 것에 대한 질문

- 관심사 분리나 폴더 구조에 대해서는 공통 세션과 멘토링을 통해 어느 정도 감을 잡았다고 느끼고 있습니다.
- 다만, 라이브러리 활용 측면, 특히 TanStack Query와 같은 선언형 데이터 관리 방식에 대해서는 아직 익숙하지 않아 고민이 있습니다.
- 데이터를 다룰 때는 항상 변수에 담고, useState로 상태를 명시적으로 통제해야 한다는 관점에 익숙하다 보니, useQuery를 통해 데이터를 선언적으로 가져오고 자동으로 갱신하는 방식이 아직 어색하게 느껴집니다. 
- 결국에는 useEffect로 그 데이터를 별도 저장해버리는 어색한 패턴을 사용하게 되었습니다. 
- 진행하면서 다음과 같은 의문사항이 생겼습니다.
  - 데이터를 별도로 조작하거나 상태를 공유할 필요가 없는 경우에, useQuery로 받은 데이터를 저장소 없이 사용할 때만 유효한 것인 지?
  - 실무에서도 TanStack Query로 받아온 데이터를 별도의 저장소 없이 사용하는 패턴이 많은 지? 
  - 현재는 Next.js와 PHP Smarty를 회사에서 사용중인데, 서버에서 데이터를 완전히 정제해 클라이언트에 넘기는 방식이 TanStack Query의 선언형 데이터 패칭 방식과 목표가 비슷한 느낌인 것인 지?

감사합니다.😊
