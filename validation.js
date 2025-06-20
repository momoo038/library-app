const formEle = document.querySelector("form");
const inputEle = document.querySelector("input");
const yearInputEle = document.querySelector("#year");

function checkValidity() {
    const year = Number(yearInputEle.value)
  if (year > 2025 || year < 1 || yearInputEle.value === "") {
    yearInputEle.setCustomValidity(
      "The year range is greater than that of a current year or smaller than 1"
    );
    yearInputEle.reportValidity();
    return;
  } else {
    yearInputEle.setCustomValidity("");
  }

  if (inputEle.value === "") {
    inputEle.setCustomValidity("Fill out the required field, dumbass!");
    inputEle.reportValidity();
    return;
  } else {
    inputEle.setCustomValidity("");
  }
}

yearInputEle.addEventListener("input", checkValidity);
inputEle.addEventListener("input", checkValidity)

formEle.addEventListener("submit", (event) => {
  checkValidity();
  if (!formEle.checkValidity()) {
    event.preventDefault();
  }
});

console.log(inputEle)
