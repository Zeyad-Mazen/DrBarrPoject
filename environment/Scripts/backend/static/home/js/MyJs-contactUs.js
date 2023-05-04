const inputs = document.querySelectorAll("input");
const textareas = document.querySelectorAll("textarea");

const formElements = [...inputs,...textareas];

for (const Element in formElements) {
    formElements[Element].addEventListener("change", function () {
        formElements[Element].classList.toggle("invalid", true);
    });
};

function invalidINPUT() {
    for (const Element in formElements) {
        formElements[Element].classList.toggle("invalid", true);
    }
};