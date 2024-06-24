const date = document.getElementById("date");
const toDoForm = document.getElementById("todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo_list");

const TODOS_KEY = "todos"
let toDos = [];

// 오늘 날짜 설정
function displayDate() {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    date.innerText = `${month}.${day}`;
}

// 할 일 목록을 로컬 스토리지에 저장
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// 할 일 삭제
function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();

    // 삭제하고픈 목록 아이디랑 같지 않으면 배열에 그대로 유지
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

// 할 일 화면에 출력
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('form-check-input');

    checkBox.addEventListener('change', function() {
        span.style.textDecoration = checkBox.checked ? 'line-through' : 'none';
    });

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);

    li.append(checkBox, span, button);
    toDoList.appendChild(li);
}

// 할 일 폼 제출 처리
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };

    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

// 초기화 함수
function init() {
    displayDate();

    const savedToDos = localStorage.getItem(TODOS_KEY);
    if (savedToDos !== null) {
        const parsedToDos = JSON.parse(savedToDos);
        toDos = parsedToDos;
        parsedToDos.forEach(paintToDo);
    }

    toDoForm.addEventListener("submit", handleToDoSubmit);
}

// 초기화 함수 호출
init();