# Chrome Web Application

🚀 &nbsp; 제작기간 : 24.6.17 - 24.6.26 <br>
🚀 &nbsp; HTML/CSS 와 JavaScript로 로그인 및 인사말, 투두리스트, 날씨 API 연동 기능을 구현한 웹 애플리케이션을 제작했습니다. <br>
🚀 &nbsp; 사용 라이브러리 : FontAwesome, BootStrap <br><br>

## 1. &nbsp; 로그인 및 인사말 기능

&nbsp; 📍 &nbsp; 로그인 폼, 인사말 표시, 모달 창을 통한 이름 수정 기능 등을 포함 <br><br>

### ⚡️ &nbsp; 사용된 기술

&nbsp; a. _Document Object Model (DOM) 조작_ <br><br>
&nbsp;&nbsp; - `getElementById`, `querySelector` 등을 사용하여 HTML 요소를 가져오고, `classList`를 사용하여 클래스 추가/제거. <br>
&nbsp;&nbsp; - 예: 
           ``` javascript
           const loginForm = document.getElementById("login-form"); 
           loginForm.classList.remove(HIDDEN_CLASSNAME);```
<br><br>                   

&nbsp; b. _로컬 저장소 (localStorage)_ <br><br>
&nbsp;&nbsp; - `localStorage`를 사용하여 사용자 이름을 브라우저에 저장하고, 페이지를 새로고침해도 사용자 이름을 기억. <br>
&nbsp;&nbsp; - 예: 
      ```javascript
      localStorage.getItem(USERNAME_KEY);
      localStorage.setItem(USERNAME_KEY, userName);
      ```
<br><br>

&nbsp; c. _이벤트 핸들링_ <br><br>
&nbsp;&nbsp; - 다양한 이벤트(`submit`, `click`)를 처리하여 사용자 인터랙션에 반응. <br>
&nbsp;&nbsp; - 예: 
      ```javascript
      loginForm.addEventListener('submit', onLoginSubmit);
      btnEdit.addEventListener("click", openModal);
      ```
<br><br>

&nbsp; d. _조건부 로직_
&nbsp;&nbsp; - 조건문(`if`, `else if`, `else`)을 사용하여 시간대에 따라 인사말을 다르게 표시. <br>
&nbsp;&nbsp; - 예: 
      ```javascript
      if (hour < 12) {
          return `Good Morning, ${userName}!`;
      } else if (hour < 18) {
          return `Good Afternoon, ${userName}!`;
      } else if (hour < 22) {
          return `Good Evening, ${userName}!`;
      } else {
          return `Good Night, ${userName}!`;
      }
      ```
<br><br>

&nbsp; e. _모달 처리_
&nbsp;&nbsp;- 모달 창을 열고 닫는 로직을 포함하여 사용자 이름을 수정할 수 있는 인터페이스 제공. <br>
&nbsp;&nbsp;- 예: 
      ```javascript
      modalChoice.classList.add('show');
      modalChoice.classList.remove('show');
      ```
