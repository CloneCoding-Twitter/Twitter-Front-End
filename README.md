# 🔥 Twitter

<img src="./README/twitter.png" alt="twitter" width="100%" />
> 항해99 트위터 클론코딩 주차 결과물 입니다.

<br />   
  
- [\[시연영상 구경하기\]](https://youtu.be/epw5pc5Fpnw)

<br />

### 🖥️ Twitter Page View!

<p>
  <img src="./README/1.png"  width="47%" />
  <img src="./README/2.png" width="47%" />
  <img src="./README/3.png"  width="47%" />
  <img src="./README/4.png" width="47%" />
  <img src="./README/5.png"  width="47%" />
</p>

# 👥 멤버

- Back-end: [김주영](https://github.com/JooYoung2274), [이상협](https://github.com/23hh)
- Front-end: [전용태](https://github.com/yong313), [정민수](https://github.com/Chungune)
- [\[Back-End Github\]](https://github.com/CloneCoding-Twitter/Twitter-Back-End)
  <br />

# 🗓 프로젝트 기간

- 2021년 12월 13일 ~ 2021년 12월 18일 (6일 간)

<br />

# ⚙️ 기술 스택

### Back-End

<div>
  <img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
  <img src="https://img.shields.io/badge/mongoDB-47A248?style=for-the-badge&logo=MongoDB&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/amazonaws-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white">

</div>

### Front-End

<div>
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/html-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=black">
  <img src="https://img.shields.io/badge/aws-232F3E?style=for-the-badge&logo=AmazonAWS&logoColor=white">
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">  
  <br />
  <br />
  
  - Styled-Component
    * CSS-in-JS 라이브러리
    * CSS 파일을 밖에 두지 않고, 컴포넌트 내부에 넣기 때문에, CSS가 전역으로 중첩되지 않도록 만들어주는 장점이 있다.
  
  <br />
  
  - Redux, redux-actions, immer, redux-thunk / redux-logger
    * state 관리를 전역으로 할 수 있고, 무분별한 prop-drilling을 방지한다.
    * 데이터가 집중화 되어있어 예측가능하며 데이터 흐름이 단방향이라서 디버깅하기 쉽다는 장점이 있다.
    * 미들웨어로 서버와의 비동기 액션보다 편하게 다루기 위해 redux-thunk, 개발환경에서 state / action 등 쉽게 추적하고 관리하기 위해 redux-logger사용
  
  <br />
  
  - axios
    * 서버와 통신을 위한 라이브러리
  
</div>

<br />

# 📌 API 명세서

[API 명세서 바로가기](https://www.notion.so/23h/Starting-Assignment-6-077c6d26c2824e2c8fbdfa20ac371a7e)

<br />

# 🔑 페이지 설명

- 로그인 페이지  
  \- 가입된 회원의 정보와 일치하는지 확인 후, 일치할 경우 로그인 성공
- 회원가입 페이지  
  \- 아이디 : 중복확인 / 영어 소문자 필수, 영어 대문자, 숫자 선택 3글자 이상  
  \- 닉네임 : 중복확인 / 영어 소문자 필수, 영어 대문자, 숫자 선택 3글자 이상  
  \- 비밀번호 : 영어 소문자 필수, 영어 대문자, 숫자 선택 3글자 이상  
  \- 비밀번호 확인 : 위 비밀번호와 일치하는지 확인
- 메인 페이지  
  \- 전체 게시글 조회 기능
  \- 로그인 유저 정보 보여주기
  \- 글 + 이미지 작성
- 게시글 상세 페이지  
  \- 클릭한 게시글 조회 정보
  \- 게시글 삭제 기능
  \- 해당 게시글에 달린 전체 댓글 조회 기능
  \- 댓글 삭제 기능

<br />
