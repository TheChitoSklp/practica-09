const ratings = document.querySelector(".rating");
const optionSelectedClass = "ratingClass";
const ratingOptions = [];
let value;

/* Add options for rating control */
for (let i = 0; i < 5; i++) {
  const ratingOption = document.createElement("div");
  const optionNum = document.createTextNode(i + 1);

  ratingOption.setAttribute("value", i + 1);
  ratingOption.appendChild(optionNum);
  ratingOption.classList.add("ratingSelect");
  ratingOption.addEventListener("click", handleOptionClick);

  ratings.appendChild(ratingOption);
}

/* Handle submit */
const submitBtn = document.querySelector(".buttonSumbit");
submitBtn.addEventListener("click", handleSubmit);

function handleSubmit(e) {
  if (!value) return;

  const card1 = document.querySelector(".container1");
  card1.style.cssText = "display: none;";

  const card2 = document.querySelector(".container2");
  card2.style.cssText = "display: flex";

  const ratingFeedback = document.querySelector(".text2");
  const feedback = document.createTextNode(`You selected ${value} out of 5`);
  ratingFeedback.innerHTML = "";
  ratingFeedback.appendChild(feedback);
}

function handleOptionClick(e) {
  const option = e.target;
  value = option.getAttribute("value");
  removeSelectedOption();

  option.classList.add(optionSelectedClass);
}

function removeSelectedOption() {
  const ratingOptions = document.querySelector(".rating").children;

  for (let option of ratingOptions) {
    option.classList.remove(optionSelectedClass);
  }
}
