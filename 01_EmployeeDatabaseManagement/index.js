let employeeData = null;

(async function () {
  const data = await fetch("./data.json");
  const response = await data.json();
  employeeData = response;
  renderEmployeeList(employeeData);
})();

const listContainer = document.querySelector(".list");
const informantionSection = document.querySelector(".informantionSection");

// render list of employee

function renderEmployeeList() {
  listContainer.innerHTML = ''
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

  const allDeleteButtons = document.querySelectorAll('.deleteBtn')

  allDeleteButtons.forEach((element) => {
    element.addEventListener('click' , (e) => {
      e.stopPropagation()
      e.preventDefault()

      deleteEmployee(element.id)
    })
  })
}

// render single employee information
function singleEmployeeInformation(id) {
  const [employee] = employeeData.filter((employee) => employee.id == id);
  informantionSection.innerHTML = ''

  informantionSection.classList.add('informationSectionStyle')
  const fullName = document.createElement('h1')
  fullName.textContent = employee.firstName + ' ' + employee.lastName
  
  
  const picture = document.createElement('img')
  picture.src = employee.imageUrl
  picture.style.width = '200px'
  picture.style.borderRadius = '50%'

  const age = document.createElement("p")
  age.textContent = 'age: ' + employee.age

  const contactNumber = document.createElement('p')
  contactNumber.textContent = 'Mobile Number: ' +  employee.contactNumber

  const dob = document.createElement('p')
  dob.textContent = 'Date of Birth: ' +  employee.dob

  const salary = document.createElement("p")
  salary.textContent = 'Salary: ' +  employee.salary

  const address = document.createElement('p')
  address.textContent = 'Address: ' + employee.address

  informantionSection.append(picture)
  informantionSection.append(fullName)
  informantionSection.append(age)
  informantionSection.append(contactNumber)
  informantionSection.append(contactNumber)
  informantionSection.append(dob)
  informantionSection.append(salary)
  informantionSection.append(address)
}


// delete function for employee
function deleteEmployee(id) {
  const data = employeeData.filter((employee) => employee.id != id)
  employeeData = data
  console.log()
  renderEmployeeList(data)
  informantionSection.innerHTML = ''
}


const addEmployee = document.querySelector('.addEmployeeBtn')
const submitEmployee = document.querySelector(".submitBtn")
const addEmployeeContainer = document.querySelector(".addEmployee")
const cancelEmployeeBtn = document.querySelector('.cancelBtn')
const firstName = document.querySelector('.firstName')
const lastName = document.querySelector('.lastName')
const age = document.querySelector('.age')
const email = document.querySelector('.email')
const contact = document.querySelector('.contact')
const dob = document.querySelector('.contact')
const salary = document.querySelector('.salary')
const address = document.querySelector('.address')
const image = document.querySelector('.image')
console.log(image)

addEmployee.addEventListener('click', (e) => {
  console.log('clicked')
  addEmployeeContainer.classList.add('open')
})

cancelEmployeeBtn.addEventListener('click', () => {
  addEmployeeContainer.classList.remove('open')
})

submitEmployee.addEventListener('click', (e) => {
  addNewEmployee()
  addEmployeeContainer.classList.remove('open')
  
})

// function add new employee
function addNewEmployee() {
  const newEmployee = {
    id: Math.floor(Math.random() * 10000),
    imageUrl: image.value || "https://cdn-icons-png.flaticon.com/256/149/149071.png" ,
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    age: age.value,
    contactNumber: contact.value,
    dob: dob.value,
    salary: salary.value,
    address: address.value
  }

  employeeData.push(newEmployee)

  renderEmployeeList()

  console.log(newEmployee)
}