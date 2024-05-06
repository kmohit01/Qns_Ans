const questions = document.querySelectorAll(".faq");
let currentBtn = null;

questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");

    btn.addEventListener("click", function () {
    questions.forEach(function (item) {
        if (item !== question) {
        item.classList.remove("show-text");
        const otherBtn = item.querySelector(".question-btn i");
        otherBtn.classList.remove("fa-minus-square");
        otherBtn.classList.add("fa-plus-square");
        }
    });

    question.classList.toggle("show-text");

    const icon = btn.querySelector("i");
    if (question.classList.contains("show-text")) {
        icon.classList.remove("fa-plus-square");
        icon.classList.add("fa-minus-square");
        currentBtn = btn;
    } else {
        icon.classList.remove("fa-minus-square");
        icon.classList.add("fa-plus-square");
        currentBtn = null;
    }
    });
});