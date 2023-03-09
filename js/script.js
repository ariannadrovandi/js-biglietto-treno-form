const ageBox = app.querySelector('input[name="age"]');
console.dir(ageBox);
const kmBox = app.querySelector('input[name="km"]');
console.dir(kmBox);

const buttonCalc = document.getElementById('btnCalc');
console.log(buttonCalc)
const buttonCanc = document.getElementById('btnCanc');
console.log(buttonCanc);

const ticket = document.querySelector('ticket');
console.log(ticket);


buttonCalc.addEventListener('click', function() {
    let age = ageBox.value;
    let km = kmBox.value;
    let pricexKm = 0.21;
    let price = km * pricexKm;
    ticket.innerHTML += `<h3>${price}€</h3>`;
    ticket.classList.remove('d-none');

});

buttonCalc.addEventListener('click', function() {
    ageBox.value = '';
    kmBox.value = '';
    ticket.innerHTML = '';
    ticket.classList.add('d-none');

});