let employeeData = null;

(async function () {
  const data = await fetch("./data.json");
  const response = await data.json();
  employeeData = response;
  renderEmployeeList();
})();

const listContainer = document.querySelector(".list");
const informantionSection = document.querySelector(".informantionSection");

// render list of employee

function renderEmployeeList() {
  employeeData.forEach((element) => {
    const span = document.createElement("span");
    span.textContent = element.id;
    const div = document.createElement("div");
    div.classList.add("singleList");
    const para = document.createElement("p");
    para.textContent = element.firstName + element.lastName;
    const button = document.createElement("button");
    button.id = element.id
    button.classList.add('deleteBtn')
    button.textContent = "Delete";
    div.append(span);
    div.append(para);
    div.append(button);
    div.id = element.id;
    div.style.cursor = "pointer";
    listContainer.append(div);
  });

  const allEmployeeList = document.querySelectorAll(".singleList");

  allEmployeeList.forEach((element) => {
    element.addEventListener("click", (e) => {


      allEmployeeList.forEach((element) => {
        element.classList.remove('selected')
      })
      element.classList.add("selected");
      singleEmployeeInformation(element.id);
    });
  });
}

// render single employee information
function singleEmployeeInformation(id) {
  const [employee] = employeeData.filter((employee) => employee.id == id);
  informantionSection.innerHTML = ''
  const para = document.createElement('p')
  para.textContent = employee.firstName

  informantionSection.append(para)
}

