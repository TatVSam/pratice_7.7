var initPerson = personGenerator.getPerson();

function fillinEverything () {
    document.querySelector('#firstNameOutput').textContent = initPerson.firstName;
    document.querySelector('#surnameOutput').textContent = initPerson.surname;
    document.querySelector('#genderOutput').textContent = initPerson.gender;
    document.querySelector('#patronymicOutput').textContent = initPerson.patronymic;
    document.querySelector('#birthDateOutput').textContent = initPerson.birthDate;
    document.querySelector('#birthYearOutput').textContent = initPerson.birthYear;
    document.querySelector('#yearLetter').textContent = " г.";
    document.querySelector('#professionOutput').textContent = initPerson.profession;
}

window.onload = function()
{
   fillinEverything(); 

};

document.querySelector("#btnActivate").addEventListener('click', function () {
    initPerson = personGenerator.getPerson();
    fillinEverything();
})

document.querySelector("#btnClear").addEventListener('click', function () {
    initPerson = {};
    
    fillinEverything();
    document.querySelector('#yearLetter').textContent = "";
})