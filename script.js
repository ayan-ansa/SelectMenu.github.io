const selectText = document.getElementById("selectText");
const options = document.getElementsByClassName("option");
const optionSection = document.getElementById("option-section");
const arrow = document.getElementById("arrow");

for (const option of options) {
  option.onclick = function () {
    selectText.innerHTML = option.outerText;
    optionSection.classList.toggle("hide");
    arrow.classList.toggle("rotate");
  };
}
selectText.onclick = function () {
  optionSection.classList.toggle("hide");
  arrow.classList.toggle("rotate");
};

arrow.onclick = function () {
    optionSection.classList.toggle("hide");
  arrow.classList.toggle("rotate");
};
