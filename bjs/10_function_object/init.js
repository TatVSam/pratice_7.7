
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').textContent = initPerson.firstName;
    document.querySelector('#surnameOutput').textContent = initPerson.surname;
    document.querySelector('#genderOutput').textContent = initPerson.gender;
    document.querySelector('#patronymicOutput').textContent = initPerson.patronymic;
    document.querySelector('#birthDateOutput').textContent = initPerson.birthDate;
    document.querySelector('#birthYearOutput').textContent = initPerson.birthYear;
};

document.querySelector("#btnActivate").addEventListener('click', function () {
    const initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').textContent = initPerson.firstName;
    document.querySelector('#surnameOutput').textContent = initPerson.surname;
    document.querySelector('#genderOutput').textContent = initPerson.gender;
    document.querySelector('#patronymicOutput').textContent = initPerson.patronymic;
    document.querySelector('#birthDateOutput').textContent = initPerson.birthDate;
    document.querySelector('#birthYearOutput').textContent = initPerson.birthYear;
})

document.querySelector("#btnClear").addEventListener('click', function () {
    document.querySelector('#firstNameOutput').textContent = "";
    document.querySelector('#surnameOutput').textContent = "";
    document.querySelector('#genderOutput').textContent = "";
    document.querySelector('#patronymicOutput').textContent = "";
    document.querySelector('#birthDateOutput').textContent = "";
    document.querySelector('#birthYearOutput').textContent = "";
})