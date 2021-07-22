const quizs = document.getElementsByClassName("quiz-collapse");

function toggleCollapse({target}){
  const icon = ("I" === target.nodeName) ? target : target.children[0];
  icon.classList.toggle("fa-chevron-down");
  icon.classList.toggle("fa-chevron-up");

  const isOpen = icon.classList.contains("fa-chevron-up");
  const collapsetitle = icon.parentNode.parentNode;
  const collapseBody = collapsetitle.nextElementSibling;
  collapsetitle.classList.toggle("open");
  collapseBody.classList.toggle("open");
}

for(let i = 0 ; i < quizs.length ; ++i){
  const titleBtn = quizs[i].querySelector(".quiz-collapse__title button");
  titleBtn.addEventListener("click", toggleCollapse);
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];


