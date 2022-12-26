// network select start

const networkSelect = document.getElementById("networkSelect");
const networkContent = document.getElementById("networkContent");

const selectBtn = networkSelect.querySelector(".networkSelect__button");
const selectContent = networkSelect.querySelector(".networkSelect__content");
const selectSelected = networkSelect.querySelector(".networkSelect__selected");
const selectItems = networkSelect.querySelectorAll(".networkSelect__item");
const networkItems = networkContent.querySelectorAll(".networkItem");
const networkCol = networkContent.querySelector(".network__inner-col");

const selectCodes = networkSelect.querySelectorAll(
  ".networkSelect__selected-item"
);

const hidden = document.getElementById("hidden");

selectBtn.onclick = () => {
  selectBtn.classList.toggle("active");
  selectContent.classList.toggle("active");
  hidden.classList.add("active");
};

selectItems.forEach((e) => {
  onNetClick(selectItems, networkItems, e);
});

function onNetClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-select");
    let currentTab = document.querySelector(tabId);

    if (currentBtn.classList.contains("active")) {
      const faq = currentBtn.parentElement.querySelector(".networkItem");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
        item.classList.add("delete");
      });

      currentBtn.classList.add("active");
      currentTab.classList.add("active");
      selectBtn.classList.remove("active");
      selectBtn.classList.add("selected");
      selectBtn.innerHTML = currentBtn.innerHTML;
      selectContent.classList.remove("active");
      selectContent.classList.add("selected");
      selectSelected.classList.add("active");

      selectCodes.forEach((selectCode) => {
        if (selectCode.classList.contains(tabId)) {
          selectCode.classList.add("active");
        } else {
          selectCode.classList.remove("active");
        }
      });

      if (currentTab === document.getElementById("select-1")) {
        networkCol.classList.add("delete");
      } else {
        networkCol.classList.add("active");
        networkCol.classList.remove("delete");
      }
    }
  });
}

// network select end
