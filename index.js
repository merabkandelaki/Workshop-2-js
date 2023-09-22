// Task of array object
let infoPersons = [
  {
    fullname: "james smith",
    department: "Monitoring Department",
    position: "Division Head",
    telnumber: "555-1234",
  },
  {
    fullname: "mary anderson",
    department: "Department of hr management",
    position: "Head of department",
    telnumber: "555-9876",
  },
  {
    fullname: "robert johnson",
    department: "Audit Department",
    position: "leading specialist",
    telnumber: "555-3456",
  },
  {
    fullname: "michael williams",
    department: "Infrastructure management department",
    position: "leading specialist",
    telnumber: "555-9812",
  },
];

let personContact = document.querySelector(".person");
let personName = document.querySelector(".input");
let btn = document.querySelector(".btn");
let btnReset = document.querySelector(".btn_reset");

btn.addEventListener("click", () => {
  let searchName = personName.value;
  personName.value = "";
  personName.focus();
  personContact.textContent = "";

  for (let infoPerson of infoPersons) {
    if (infoPerson.fullname === searchName) {
      personContact.textContent = `${infoPerson.fullname} works as a ${infoPerson.position} in the ${infoPerson.department}, phone number is: ${infoPerson.telnumber}`;
      break;
    } else {
      personContact.textContent = "The full name is wrong!!!";
    }
  }
});

btnReset.addEventListener("click", () => {
  personContact.textContent = "";
});

// Task first
let btnFirst = document.querySelector(".btn_first");
btnFirst.addEventListener("click", () => {
  for (let i = 5; i < 100; i++) {
    console.log(i);
  }
});
let btnClear = document.querySelector(".console_clear");
btnClear.addEventListener("click", () => {
  console.clear();
});

// Task second
let array1 = [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
let btnSecond = document.querySelector(".btn_second");
btnSecond.addEventListener("click", () => {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] > 0 && array1[i] < 10) {
      console.log(array1[i]);
    }
  }
});

// Task third
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let btnThird = document.querySelector(".btn_third");
btnThird.addEventListener("click", () => {
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] == 5) {
      console.log("OK");
      break;
    }
  }
});

// Task fourth
let array3 = [1, 2, 3, 4, 5];
let btnFourth = document.querySelector(".btn_fourth");
btnFourth.addEventListener("click", () => {
  let sum = 0;
  for (let i = 0; i < array3.length; i += 1) {
    sum += array3[i];
  }
  console.log(sum);
});

// Task fifth
let array4 = [1, 2, 3, 7, 6, 9];
let btnFifth = document.querySelector(".btn_fifth");
btnFifth.addEventListener("click", () => {
  let sum = 0;
  for (let i = 0; i < array4.length; i += 1) {
    sum += array4[i];
  }
  let average = sum / array4.length;
  console.log(average);
});

// Task sixth
let users = [
  { username: "giorgi", status: false },
  { username: "levani", status: false },
  { username: "anna", status: true },
];
let btnSixth = document.querySelector(".btn_sixth");
btnSixth.addEventListener("click", () => {
  console.log(users[2]);
});
