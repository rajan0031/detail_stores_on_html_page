document
  .getElementById("userForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var rollNo = document.getElementById("rollNo").value;
    var department = document.getElementById("department").value;
    var contact = document.getElementById("contact").value;
    var address = document.getElementById("address").value;

    var skills = [];
    var skillsInputs = document.querySelectorAll('input[type="checkbox"]');
    skillsInputs.forEach(function (input) {
      if (input.checked) {
        skills.push(input.value);
      }
    });

    var gender = document.querySelector('input[name="gender"]:checked').value;

    var details = document.getElementById("details").value;

    // Create a new table row for the submitted data
    var table = document.getElementById("submittedData");
    var row = table.insertRow(-1);

    var nameCell = row.insertCell(0);
    var rollNoCell = row.insertCell(1);
    var departmentCell = row.insertCell(2);
    var contactcell = row.insertCell(3);
    var addresscell = row.insertCell(4);
    var skillsCell = row.insertCell(5);
    var genderCell = row.insertCell(6);
    var detailsCell = row.insertCell(7);

    nameCell.textContent = name;
    rollNoCell.textContent = rollNo;
    departmentCell.textContent = department;
    contactcell.textContent = contact;
    addresscell.textContent = address;
    skillsCell.textContent = skills.join(", ");
    genderCell.textContent = gender;
    detailsCell.textContent = details;

    // Clear form inputs
    document.getElementById("userForm").reset();
  });
