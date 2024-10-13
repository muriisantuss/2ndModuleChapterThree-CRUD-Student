$("#phone").mask("(99) 99999-9999");

let students = [
  {
    id: 1,
    name: "muri",
    email: "m@gmail.com",
    phone: "11 1111-1111",
    course: 1,
    manha: false,
    tarde: false,
    noite: true
  }
];
var courses = [
  {
    id: 1,
    name: "Jornalismo",
  },
  {
    id: 2,
    name: "Qualidade",
  },
  {
    id: 3,
    name: "Ecônomia",
  },
];

loadStudents();

function saveStudents() {
  console.log("certo");
  let getStudents = {
      id: students.length+1,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      course: document.getElementById("course").value,
      manha: document.getElementById("manha").checked,
      tarde: document.getElementById("tarde").checked,
      noite: document.getElementById("noite").checked,

    }
  addNewRow(getStudents);
  students.push(getStudents);
  document.getElementById("form").reset()
}

function loadStudents() {
  for (let get of students) {
    addNewRow(get);
  }
}

function addNewRow(s) {
  var table = document.getElementById("studentTable");
  const newRow = table.insertRow();

  let idNode = document.createTextNode(s.id);
  newRow.insertCell().appendChild(idNode);

  let nameNode = document.createTextNode(s.name);
  newRow.insertCell().appendChild(nameNode);

  let emailNode = document.createTextNode(s.email);
  cell = newRow.insertCell()
  cell.className = "d-none d-md-table-cell"
  cell.appendChild(emailNode);

  let phoneNode = document.createTextNode(s.phone);
  newRow.insertCell().appendChild(phoneNode);

  let courseNode = document.createTextNode(courses[s.course - 1].name);
  newRow.insertCell().appendChild(courseNode);

  var periods = ""
  if (s.manha) {
    periods = 'Manha';
  }
  if (s.tarde) {
    periods += 'Tarde';
  }
  if (s.noite) {
    periods += 'Noite';
  }

  cell = newRow.insertCell()
  cell.className = 'd-none d-md-table-cell'
  cell.innerHTML = periods;
}
