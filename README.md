# Chrome Web Application

🚀 &nbsp; 제작기간 : 24.6.17 - 24.6.26 <br>
🚀 &nbsp; HTML/CSS 와 JavaScript로 로그인 및 인사말, 투두리스트, 날씨 API 연동 기능을 구현한 웹 애플리케이션을 제작했습니다. <br>
🚀 &nbsp; 사용 라이브러리 : FontAwesome, BootStrap <br><br>

## 1. &nbsp; 로그인 및 인사말 기능

&nbsp; 📍 &nbsp; 로그인 폼, 인사말 표시, 모달 창을 통한 이름 수정 확인 등을 포함 <br>

### ⚡️ &nbsp; 사용된 기능

&nbsp; a. _Document Object Model (DOM) 조작_ <br><br>
&nbsp;&nbsp; - `getElementById`, `querySelector` 등을 사용하여 HTML 요소를 가져오고, `classList`를 사용하여 클래스 추가/제거. <br>
&nbsp;&nbsp; - 예: 
           ``` javascript
           const loginForm = document.getElementById("login-form"); 
           loginForm.classList.remove(HIDDEN_CLASSNAME);```
<br>                   

&nbsp; b. _로컬 저장소 (localStorage)_ <br><br>
&nbsp;&nbsp; - `localStorage`를 사용하여 사용자 이름을 브라우저에 저장하고, 페이지를 새로고침해도 사용자 이름을 기억. <br>
&nbsp;&nbsp; - 예: 
      ```javascript
      localStorage.getItem(USERNAME_KEY);
      localStorage.setItem(USERNAME_KEY, userName);
      ```
<br>

&nbsp; c. _이벤트 핸들링_ <br><br>
&nbsp;&nbsp; - 다양한 이벤트(`submit`, `click`)를 처리하여 사용자 인터랙션에 반응. <br>
&nbsp;&nbsp; - `preventDefault`를 사용하여 폼 기본 동작을 방지. <br>
&nbsp;&nbsp; - 예: 
      ```javascript
      loginForm.addEventListener('submit', onLoginSubmit); ```

      function onLoginSubmit(event) {
          event.preventDefault(); // 폼 기본 동작 방지
          const userName = loginInput.value; // 입력된 사용자 이름 가져오기
          loginForm.classList.add(HIDDEN_CLASSNAME); // 로그인 폼 숨기기
          localStorage.setItem(USERNAME_KEY, userName); // 사용자 이름 localStorage에 저장
          showGreetings(userName); // 환영 메시지 표시
      }
      
<br>
&nbsp; d. _조건부 로직_ <br><br>
&nbsp;&nbsp; - 조건문(`if`, `else if`, `else`)을 사용하여 시간대에 따라 인사말을 다르게 표시. <br>
&nbsp;&nbsp; - 예: 

      if (hour < 12) {
          return `Good Morning, ${userName}!`;
      } else if (hour < 18) {
          return `Good Afternoon, ${userName}!`;
      } else if (hour < 22) {
          return `Good Evening, ${userName}!`;
      } else {
          return `Good Night, ${userName}!`;
      } 
<br>

&nbsp; e. _모달 처리_ <br><br>
&nbsp;&nbsp;- 모달 창을 열고 닫는 로직을 통해 이름 수정할 지에 대한 확인. <br>
&nbsp;&nbsp;- 예: 
      ```javascript
      modalChoice.classList.add('show');
      modalChoice.classList.remove('show');
      ```

<br>

## 2. &nbsp; 배경 이미지, 시계, 인용구 구현

&nbsp; 📍 &nbsp; 페이지가 로드될 때마다 랜덤으로 배경 이미지와 인용구가 설정되며, 실시간으로 시간이 업데이트 <br>

### ⚡️ &nbsp; 사용된 기능

&nbsp; a. _랜덤 배경 이미지 설정_ <br><br>
&nbsp;&nbsp; - `images` 배열에서 랜덤으로 이미지를 선택하여 배경으로 설정 <br>
&nbsp;&nbsp; - `Math.random()`과 `Math.floor()` 함수를 사용하여 배열에서 임의의 요소를 선택 <br>
``` javascript
   const chosenImage = images[Math.floor(Math.random() * images.length)];
   document.body.style.backgroundImage = `url(img/${chosenImage})`;
   document.body.style.backgroundRepeat = "no-repeat";
   document.body.style.backgroundSize = "cover";
   document.body.style.backgroundAttachment = "fixed";
```
<br>

&nbsp; b. _인용구 랜덤 출력_ <br><br>
&nbsp; &nbsp; - quotes 배열에서 랜덤으로 인용구와 저자를 선택하여 화면에 출력 <br>
&nbsp; &nbsp; - Math.random()과 Math.floor() 함수를 사용하여 배열에서 임의의 요소를 선택 <br>
``` javascript
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
```
<br>

&nbsp; c. _시계 표시 및 실시간 업데이트_ <br><br>
&nbsp; &nbsp; - 현재 시간을 표시하는 시계를 구현 <br>
&nbsp; &nbsp; - setInterval 함수를 사용하여 매 분마다 시간을 업데이트하여 실시간으로 표시 <br>
``` javascript
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 60000); // 매 분마다 업데이트
```
<br>

&nbsp; d. _배경 이미지_ <br><br>
&nbsp; &nbsp; - 선택된 이미지를 페이지의 배경으로 설정하며, 반복 없이 cover로 설정하여 화면에 꽉 차게 표시 <br>
``` javascript
document.body.style.backgroundImage = `url(img/${chosenImage})`;
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundAttachment = "fixed";
```
<br>

&nbsp; e. _DOM 요소 선택 및 텍스트 삽입_ <br><br>
&nbsp; &nbsp; - querySelector를 사용하여 HTML 요소들을 선택하고, 선택된 요소들에 텍스트를 삽입 <br>
``` javascript
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
```
<br>

&nbsp; f. _문자열 패딩 처리_ <br><br>
&nbsp; &nbsp; - String.padStart() 메서드를 사용하여 시간을 두 자리 숫자로 표시하도록 처리 <br>
``` javascript
const hours = String(date.getHours()).padStart(2, "0");
const minutes = String(date.getMinutes()).padStart(2, "0");
```

<br>

## 3. &nbsp; Todo List 구현

&nbsp; 📍 &nbsp; 입력 창으로 할일을 추가 후 체크, 삭제 기능 구현 <br>

### ⚡️ &nbsp; 사용된 기능

&nbsp; a. _DOM 요소 선택_ <br><br>
&nbsp; &nbsp; - `document.getElementById()`, `document.querySelector()` 등을 사용하여 HTML 요소들을 선택 <br><br>

&nbsp; b. _로컬 스토리지 (localStorage) 활용_ <br><br>
&nbsp; &nbsp; - 할 일 목록을 로컬 스토리지에 저장하고 관리 <br>
&nbsp; &nbsp; - localStorage.setItem()으로 데이터를 저장하고, localStorage.getItem()으로 데이터를 불러옴 <br><br>

&nbsp; c. _할 일 목록 관리_ <br><br>
&nbsp; &nbsp; - 할 일 추가, 삭제 기능을 구현 <br>
&nbsp; &nbsp; - paintToDo() 함수로 새로운 할 일을 화면에 출력하고, deleteToDo() 함수로 선택한 할 일을 삭제 <br>
&nbsp; &nbsp; - filter 메소드를 사용하여 특정 조건을 만족하는 요소들을 걸러냄 -> 할 일 삭제 시 toDos 배열에서 해당 아이템을 제거하기 위해 사용 <br>
``` javascript
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
    // ...
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}
```
<br>

&nbsp; d. _할 일 추가 및 제출 처리_ <br><br>
&nbsp; &nbsp; - 할 일 입력 폼에서 제출을 처리하는 handleToDoSubmit() 함수를 구현 <br>
&nbsp; &nbsp; - 폼 제출 이벤트를 잡아서 새로운 할 일을 생성하고 화면에 출력 <br>
``` javascript
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    // ...
}
```
<br>

&nbsp; e. _화면 초기화 및 이벤트 처리_ <br><br>
&nbsp; &nbsp; - 페이지 로드 시 초기화 함수인 init()을 호출하여 오늘 날짜를 표시하고, 저장된 할 일 목록을 불러와 화면에 출력 <br>
&nbsp; &nbsp; - 이벤트 리스너를 등록하여 사용자 입력을 처리하고 화면을 업데이트 <br>
``` javascript
function init() {
    displayDate();
    // ...
    toDoForm.addEventListener("submit", handleToDoSubmit);
}

init();
```
<br>

&nbsp; f. _체크박스 상태 변화 처리_ <br><br>
&nbsp; &nbsp; - 체크박스의 상태 변화에 따라 할 일의 텍스트에 취소선을 추가하거나 제거하는 기능을 추가 <br>
``` javascript
checkBox.addEventListener('change', function() {
    span.style.textDecoration = checkBox.checked ? 'line-through' : 'none';
});
```
<br>

## 4. &nbsp; 날씨 APP

&nbsp; 📍 &nbsp;  **사용자의 현재 위치를 자동으로 감지하여 날씨를 보여주는 지오로케이션 기능과 다양한 도시의 날씨를 검색할 수 있는 검색 기능 구현** <br>
&nbsp;&nbsp;&nbsp;&nbsp; • _사용자 편의성을 높이기 위해 지오로케이션 API와 Fetch API를 활용하여 날씨 데이터를 동적으로 받아오고, JavaScript로 DOM을 조작하여 실시간으로 날씨 정보를 사용자에게 제공_ <br>
&nbsp;&nbsp;&nbsp;&nbsp; • _또한, 이벤트 리스너를 사용하여 사용자 인터랙션을 처리하고, 에러 처리를 통해 사용자에게 친절한 메시지를 제공_ <br>

### ⚡️ &nbsp; 사용된 기능
&nbsp; a. _Geolocation API_ <br><br>
&nbsp; &nbsp; -  navigator.geolocation.getCurrentPosition을 사용하여 사용자의 현재 위치(위도, 경도)를 가져옴 <br>
``` javascript
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
```
&nbsp; &nbsp; - 위치 성공 콜백 함수: onGeoOk 함수는 위치 정보를 성공적으로 가져왔을 때 호출 <br>
``` javascript
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then((response) => response.json())
        .then(json => {
            // 날씨 데이터 처리 로직
        });
}
```
&nbsp; &nbsp; - 위치 실패 콜백 함수: onGeoError 함수는 위치 정보를 가져오지 못했을 때 호출 <br>
``` javascript
function onGeoError() {
    alert("Can't find you. No weather for you.");
}
```
<br>

&nbsp; b. _Fetch API_ <br><br>
&nbsp; &nbsp; -  API 호출: OpenWeatherMap API를 사용하여 날씨 데이터를 가져오고, fetch 메서드를 사용하여 URL로부터 데이터를 받아옴 <br>
``` javascript
fetch(url)
    .then((response) => response.json())
    .then(json => {
        // 받아온 날씨 데이터 처리
    });
```
<br>
&nbsp; c. _DOM 조작_ <br><br>
&nbsp; &nbsp; -  데이터 표시: 받아온 데이터를 HTML 요소에 표시 <br>
``` javascript
const city = document.getElementById("city");
const weather = document.getElementById("temp");
city.innerText = json.name;
weather.innerText = `${Math.round(json.main.temp)} °C`;
```

&nbsp; &nbsp; - 날씨 아이콘 변경: 날씨 상태에 따라 아이콘을 변경 <br>
``` javascript
const weatherIcon = document.querySelector("#weather img");
switch(json.weather[0].main) {
    case 'Clear':
        weatherIcon.src = 'weather_img/clear.png';
        break;
    // 다른 날씨 상태들 처리
}
```
<br>

&nbsp; d. _Event Listeners_ <br><br>
&nbsp; &nbsp; - 클릭 이벤트: 특정 요소에 대한 클릭 이벤트를 처리 <br>
``` javascript
weather.addEventListener('click', () => {
    openWeatherPopup();
});
```
<br>

&nbsp; e. _Popup 기능_ <br><br>
&nbsp; &nbsp; - 팝업 열기/닫기: 날씨 정보를 보여주는 팝업을 열고 닫는 기능 <br>
``` javascript
function openWeatherPopup() {
    resetWeatherPopup();
    weatherPopup.classList.add('active');
}

function closeWeatherPopup() {
    weatherPopup.classList.remove('active');
}
```
<br>

&nbsp; f. _사용자 입력 처리_ <br><br>
&nbsp; &nbsp; - 검색 기능: 사용자가 입력한 도시 이름을 바탕으로 날씨 정보를 검색 <br>
``` javascript
const search = document.querySelector('.search-box button');
search.addEventListener('click', () => {
    searchWeather();
});

function searchWeather() {
    const city = inputField.value.trim();
    if (city === '') return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(json => {
            if (json.cod == '404') {
                handleNotFoundError(city);
            } else {
                handleWeatherData(json, city);
            }
        });
}
```
<br>

&nbsp; g. _에러 처리_ <br><br>
&nbsp; &nbsp; - 에러 메시지 표시: 검색된 도시가 없을 경우 에러 메시지를 표시 <br>
``` javascript
function handleNotFoundError(city) {
    cityHide.textContent = city;
    error404.classList.add('active');
}
```
<br>

### &nbsp; 💫 &nbsp; OpenWeatherMap API <br>
&nbsp; &nbsp; ✓ &nbsp; 날씨 데이터 제공: OpenWeatherMap API를 사용하여 날씨 정보를 제공 <br>
&nbsp; &nbsp; &nbsp; &nbsp; • 현재 위치 날씨: 사용자의 위도와 경도를 바탕으로 날씨 정보를 가져옴 <br>
&nbsp; &nbsp; &nbsp; &nbsp; • 도시 이름 검색: 사용자가 입력한 도시 이름을 바탕으로 날씨 정보를 가져옴 <br>
``` javascript
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
const searchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
```






