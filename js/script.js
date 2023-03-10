const app = document.getElementById('app');

const ageBox = app.querySelector('input[name="age"]');
console.dir(ageBox);
const kmBox = app.querySelector('input[name="km"]');
console.dir(kmBox);

const buttonCalc = document.getElementById('btnCalc');
console.log(buttonCalc)
const buttonCanc = document.getElementById('btnCanc');
console.log(buttonCanc);

const ticket = document.querySelector('.ticket');
console.log(ticket);


buttonCalc.addEventListener('click', function() {
    let age = ageBox.value;
    let km = kmBox.value;
    let pricexKm = 0.21;
    let ticketPrice = km * pricexKm;
    const discountMinors = ticketPrice * 0.20;
    const discountOver = ticketPrice* 0.40;
    if (age < 18) {
        totalPrice = ticketPrice - discountMinors;
        
    } else if (age > 64) {
        totalPrice = ticketPrice - discountOver;
        
    }
    else {
        totalPrice = ticketPrice;
        
    };
    ticket.innerHTML += `<h6>${totalPrice.toFixed(2)} €</h6>`;
    ticket.classList.remove('d-none');

});
console.log(buttonCalc);


buttonCanc.addEventListener('click', function() {
    ageBox.value = '';
    kmBox.value = '';
    ticket.innerHTML = '';
    ticket.classList.add('d-none');

});
console.log(buttonCalc);




