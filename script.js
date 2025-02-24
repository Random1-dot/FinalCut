document.addEventListener('DOMContentLoaded', function () {
    const bookingForm = document.getElementById('bookingForm');
    const popup = document.getElementById('popup');
    const closeBtn = document.getElementById('closeBtn');

    // Mostra il popup quando viene cliccato "Prenota"
    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Impedisce che il form venga inviato
        popup.style.display = 'block'; // Mostra il popup
    });

    // Chiudi il popup quando si clicca sulla X
    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none'; // Nasconde il popup
    });

    // Chiudi il popup se si clicca fuori dalla finestra del popup
    window.addEventListener('click', function (event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
