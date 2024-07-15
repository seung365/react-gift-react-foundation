# react-gift-react-foundation
FE 카카오 선물하기 1주차 과제: React 기초

📝 Requirements
본인만의 기준으로 일관된 코드를 작성해주세요.
기능 단위로 나누어 커밋을 해주세요.
- Stroybook을 추가해요.
공통 컴포넌트에 아래와 같은 컴포넌트를 구현하고, Storybook에서 확인 할 수 있게 해요. (자세한 내용은 스토리북 링크 참고)
- Button 컴포넌트를 구현해요.
Theme Props에 따라 버튼의 컬러와 디자인이 다르게 보여져요.
Size Props에 따라 버튼의 Size가 다르게 보여져요. (value가 responsive 인 경우 미디어 쿼리에 따라 사이즈가 달라지게 만들어요.)
- Button Element의 기본 속성들을 모두 사용할 수 있게 해요.
- Input 컴포넌트를 구현해요.
disabled Props에 따라 Input이 비활성화 되고, UI에서도 비활성화 됨을 인지할 수 있게 해요.
invalid Props 에 따라 Input의 값이 잘 못되었음을 UI에서 인지할 수 있게 해요.
Size Props에 따라 버튼의 Size가 다르게 보여져요. (value가 responsive 인 경우 미디어 쿼리에 따라 사이즈가 달라지게 만들어요.)
Input Element의 기본 속성들을 모두 사용할 수 있게 해요.
- Image 컴포넌트를 구현해요.
ratio Props에 따라 이미지 비율을 설정할 수 있게 해요. (value가 number로 16/9로 넘겨진 경우 16:9비율로 보여짐, square을 설정한 경우 정사각형으로 보여짐)
radius Props에 따라 모서리가 둥글게 해요. (value가 number인 경우 number만큼 모서리가 둥글게 적용, circle인 경우 원형으로 보여짐)
Img Element의 기본 속성들을 모두 사용할 수 있게 해요.
- GoodsItem 컴포넌트를 구현해요.
Default 형태와 Ranking 형태의 컴포넌트를 각각 구현해요. (자세한 디자인은 스토리북 참고)
공통으로 imageSrc, subtitle, title, amount Props를 넘겨받아요.
- Ranking 컴포넌트의 경우 rankingIndex Props를 추가로 넘겨받아요. 1~3까지는 분홍색, 나머지 숫자에는 회색의 랭킹 뱃지가 보여져요
- Grid, Container 컴포넌트를 구현해요.


- 질문 1. webpack은 무엇이고 어떤 역할을 하고 있나요?
> 웹팩의 경우 모듈 번들러 입니다. 프로젝트의 자원들을 처리하고 하나 이상의 번들로 패키징하는 도구를 말합니다.<br>
  자바스크립트 파일과 관련 자원을 하나의 번들 파일로 결합하여 브라우저가 효율적으로 로드할 수 있도록 합니다.
  자바스크립트 모듈 시스템(CommonJS, AMD, ES6)을 지원하여 모듈 간의 종속성을 관리합니다.
  개발 과정에서 빠른 피드백을 제공하고 빌드 프로세스를 자동화하여 개발 생산성을 높입니다.

- 질문 2. 브라우저는 어떻게 JSX 파일을 읽을 수 있나요?
> 브라우저는 기본적으로 JSX 파일을 직접 읽거나 실행할 수 없습니다. JSX는 자바스크립트의 확장 문법으로, 브라우저에서 실행하기 전에 일반 자바스크립트로 변환되어야 합니다.</br>
  변환 과정의 경우는 아래와 같습니다.</br>
  Babel:
  JSX를 자바스크립트로 변환하는 가장 일반적인 도구는 Babel입니다. Babel은 자바스크립트 컴파일러로, 최신 자바스크립트 문법과 JSX를 브라우저가 이해할 수 있는 자바스크립트로 변환합니다.
  Webpack:
  Webpack과 같은 모듈 번들러는 Babel과 함께 사용되어 JSX 파일을 처리하고 번들링합니다. Webpack은 babel-loader를 사용하여 자바스크립트와 JSX 파일을 Babel을 통해 변환합니다.

- 질문 3. React에서 상태 변화가 생겼을 때 어떻게 변화를 알아챌 수 있나요?
> 1. 상태(State)와 setState:
  React 클래스 컴포넌트에서 this.setState 메서드를 사용하여 상태를 변경합니다. 상태가 변경되면 React는 컴포넌트의 render 메서드를 다시 호출하여 UI를 업데이트합니다.
  함수형 컴포넌트에서는 useState 훅을 사용하여 상태를 관리하고, 상태를 변경하는 setState 함수를 호출합니다. </br> 2. Virtual DOM:
  React는 상태가 변경되면 Virtual DOM을 사용하여 변경 사항을 감지합니다. Virtual DOM은 실제 DOM의 가벼운 사본입니다.
  상태가 변경되면 새로운 Virtual DOM 트리를 생성하고, 이전 Virtual DOM과 비교(diffing)하여 변경된 부분만 실제 DOM에 적용(patching)합니다. 이 과정을 통해 성능을 최적화합니다.</br> 3. 훅(Hooks):
  함수형 컴포넌트에서 상태와 생명주기 기능을 제공하는 다양한 훅을 사용합니다.
  예: useEffect 훅을 사용하여 컴포넌트가 마운트, 업데이트, 언마운트될 때 특정 작업을 수행할 수 있습니다.