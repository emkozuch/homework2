function checkPesel() {
    var pesel = prompt("Podaj numer PESEL");
    var controlSum = pesel[0] * 1 + pesel[1] * 3 + pesel[2] * 7 + pesel[3] * 9 + pesel[4] * 1 + pesel[5] * 3 + pesel[6] * 7 + pesel[7] * 9 + pesel[8] * 1 + pesel[9] * 3;
    controlSum = controlSum % 10;
    controlSum = 10 - controlSum;
    var controlNumber = controlSum % 10;

    if (pesel !== null && pesel.length === 11 && pesel[10] == controlNumber) {
        alert("PESEL poprawny");

    } else if (isNaN(pesel)) {
        alert("Nieprawidłowa wartość");
        checkPesel();

    } else if (pesel.length > 11) {
        alert("PESEL za długi");
        checkPesel();

    } else if (pesel.length < 11) {
        alert("PESEL za krótki");
        checkPesel();

    } else if (pesel[10] !== controlNumber) {
        alert("Błędny numer PESEL");
        checkPesel();

    }
}
checkPesel();








