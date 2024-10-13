let students  = [
  {
  id: 1,
  name: "muri",
  email: "m@gmail.com",
  phone: "11 1111-1111",
  course: 1,
  period: 1,
  }
]
let courses = [
  {
    id: 1,
    name: "Línguas",
  }
];
var periods = [
  {
    id: 1,
    name: "Tarde",
  }
];

loadStudents()

function loadStudents(){
  for(let get of students){
    addNewRow(get)
  }
}

function addNewRow(s){
  var table = document.getElementById("studentTable")
  const newRow = table.insertRow()

  let idNode = document.createTextNode(s.id)
  newRow.insertCell().appendChild(idNode)

  let nameNode = document.createTextNode(s.name)
  newRow.insertCell().appendChild(nameNode)

  let emailNode = document.createTextNode(s.email)
  newRow.insertCell().appendChild(emailNode)

  let phoneNode = document.createTextNode(s.phone)
  newRow.insertCell().appendChild(phoneNode)

  let courseNode = document.createTextNode(courses[s.course - 1].name)
  newRow.insertCell().appendChild(courseNode)

  let periodNode = document.createTextNode(periods[s.period - 1].name)
  newRow.insertCell().appendChild(periodNode).name
}