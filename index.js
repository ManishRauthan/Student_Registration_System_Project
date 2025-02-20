// Selecting elements
const studentname = document.getElementById("studentname");
const studentmail = document.getElementById("studentmail");
const studentclass = document.getElementById("class"); // Fixed ID reference
const rollnumber = document.getElementById("rollnumber");
const addbtn = document.getElementById("add");
const result = document.getElementById("result");

let editonclick = null;

// Function to add new student data
function onClick() {
  let studentvalue = studentname.value.trim();
  let mailvalue = studentmail.value.trim();
  let classsvalue = studentclass.value.trim();
  let rollvalue = rollnumber.value.trim();

  if (!studentvalue || !mailvalue || !classsvalue || !rollvalue) {
    alert("Please fill in all fields.");
    return;
  }

  if (addbtn.innerHTML == "Update") {
    editonclick.children[0].textContent = studentvalue;
    editonclick.children[1].textContent = mailvalue;
    editonclick.children[2].textContent = classsvalue;
    editonclick.children[3].textContent = rollvalue;

    addbtn.innerHTML = "Add";
    editonclick = null;
  } else {
    const row = document.createElement("tr");

    row.innerHTML = `
    <td class="studentname">${studentvalue}</td>
    <td class="studentmail">${mailvalue}</td>
    <td class="studentclass">${classsvalue}</td>
    <td class="rollnumber">${rollvalue}</td>
  `;

    const actionCell = document.createElement("td"); // Create a new <td> for buttons

    // Create Edit Button
    const editbtn = document.createElement("button");
    editbtn.innerHTML = "Edit";
    actionCell.appendChild(editbtn); // Append Edit button to <td>

    // Create Delete Button
    const deletebtn = document.createElement("button");
    deletebtn.innerHTML = "Delete";
    actionCell.appendChild(deletebtn); // Append Delete button to <td>

    // Append the <td> to the row
    row.appendChild(actionCell);

    // Append row to table
    result.appendChild(row);

    // localStorage.setItem(
    //   "key",
    //   `${studentvalue} ${mailvalue}${classsvalue}${rollvalue}`
    // );
  }
  // Clear input fields
  studentname.value = "";
  studentmail.value = "";
  studentclass.value = "";
  rollnumber.value = "";
}

//Function to edit/delete student data
function updateonClick(e) {
  // console.log(e.target.innerHTML);
  //delete button function
  if (e.target.innerHTML == "Delete") {
    e.target.closest("tr").remove();
  }
  //edit button
  if (e.target.innerHTML == "Edit") {
    const selectedrow = e.target.closest("tr");

    studentname.value = selectedrow.children[0].textContent;
    studentmail.value = selectedrow.children[1].textContent;
    studentclass.value = selectedrow.children[2].textContent;
    rollnumber.value = selectedrow.children[3].textContent;

    studentname.focus();
    addbtn.innerHTML = "Update";
    editonclick = selectedrow;
  }
}

// Attach event listener to the add button
addbtn.addEventListener("click", onClick);
result.addEventListener("click", updateonClick);
