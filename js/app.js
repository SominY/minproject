// DOM 요소 가져오기
const loginForm = document.getElementById("login-form");
const loginInput = document.getElementById("inputName");
const greetingBox = document.getElementById("greeting__box");
const greeting = document.getElementById("greeting");
const modalChoice = document.getElementById("modalChoice");
const btnEditName = document.getElementById("btnEditName");
const btnCloseModal = document.getElementById("btnCloseModal");

// 클래스 및 저장 키 정의
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = 'userName';

// localStorage에서 저장된 사용자 이름 가져오기
const savedUsername = localStorage.getItem(USERNAME_KEY);

// 초기 실행 함수
function initialize() {
    if (savedUsername === null) {
        showLoginForm(); // 저장된 사용자 이름이 없으면 로그인 폼 보이기
    } else {
        showGreetings(savedUsername); // 저장된 사용자 이름이 있으면 환영 메시지 보이기
    }
}

// 로그인 폼 보이기 함수
function showLoginForm() {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
}

// 환영 메시지 보이기 함수
function showGreetings(userName) {
    greeting.innerText = generateGreetings(userName);
    greetingBox.classList.remove(HIDDEN_CLASSNAME);

    // 이름 수정 아이콘 클릭 시 모달 열기
    const btnEdit = document.querySelector(".fa-solid");
    btnEdit.addEventListener("click", openModal);
}

// 로그인 폼 제출 시 동작 함수
function onLoginSubmit(event) {
    event.preventDefault(); // 폼 기본 동작 방지 (새로고침)
    const userName = loginInput.value; // 입력된 사용자 이름 가져오기
    loginForm.classList.add(HIDDEN_CLASSNAME); // 로그인 폼 숨기기
    localStorage.setItem(USERNAME_KEY, userName); // 사용자 이름 localStorage에 저장
    showGreetings(userName); // 환영 메시지 표시
}

// 시간에 따른 인사말 생성 함수
function generateGreetings(userName) {
    const date = new Date();
    const hour = date.getHours();

    if (hour < 12) {
        return `Good Morning, ${userName}!`;
    } else if (hour < 18) {
        return `Good Afternoon, ${userName}!`;
    } else if (hour < 22) {
        return `Good Evening, ${userName}!`;
    } else {
        return `Good Night, ${userName}!`;
    }
}

// 모달 열기 함수
function openModal() {
    modalChoice.classList.add('show');
    btnCloseModal.addEventListener("click", closeModal);
    btnEditName.addEventListener("click", editName);
}

// 모달 닫기 함수
function closeModal() {
    modalChoice.classList.remove('show');
    btnCloseModal.removeEventListener("click", closeModal);
    btnEditName.removeEventListener("click", editName);
}

// 이름 수정 함수
function editName() {
    closeModal(); // 모달 닫기
    localStorage.removeItem(USERNAME_KEY); // localStorage에서 사용자 이름 제거
    loginInput.value = ''; // 입력 필드 초기화
    loginForm.classList.remove(HIDDEN_CLASSNAME); // 로그인 폼 보이기
    greetingBox.classList.add(HIDDEN_CLASSNAME); // 환영 메시지 박스 숨기기
}

// 초기화 함수 호출
initialize();