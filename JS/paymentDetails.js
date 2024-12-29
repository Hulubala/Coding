document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.querySelector('.paymentTable tbody');
    const totalElement = document.querySelector('.totalLabel + td');
    const proceedPaymentModal = document.getElementById('proceedPaymentModal');
    const payButton = document.getElementById('proceedPaymentButton');
    const yesButton = document.querySelector('.yesButton');
    const noButton = document.querySelector('.noButton');
    const backButton = document.getElementById('backButton');

    const itemImages = {
        'Badminton Racket': 'Image/Badminton Racket.png',
        'Shuttlecock': 'Image/Shuttlecock.png',
        'Basketball': 'Image/Basketball.png',
        'Volleyball': 'Image/Volleyball.png',
        'Handball': 'Image/Handball.png',
        'Futsal': 'Image/Futsal.png',
        'Hockey': 'Image/Hockey.png',
        'Golf Iron': 'Image/Golf Iron.png',
        'Golf Ball': 'Image/Golf Ball.png',
        'Swimming Cap': 'Image/Swimming Cap.png',
        'Tennis': 'Image/Tennis.png',
        'Takraw': 'Image/Takraw.png',
    };

    function loadSelectedEquipment() {
        const selectedEquipment = JSON.parse(localStorage.getItem('selectedEquipment')) || [];

        if (selectedEquipment.length === 0) {
            alert('No equipment selected. Redirecting to equipment booking page.');
            window.location.href = 'bookEquipment.html';
            return;
        }

        let totalAmount = 0;

        selectedEquipment.forEach(item => {
            const row = document.createElement('tr');
          
            const itemImage = itemImages[item.name] 
                ? `<img src="${itemImages[item.name]}" alt="${item.name}" style="width: 70px; height: 70px;">` 
                : item.name;

            row.innerHTML = `
                <td>${itemImage}</td>
                <td>RM ${item.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>RM ${(item.price * item.quantity).toFixed(2)}</td>
            `;
            tableBody.appendChild(row);
            totalAmount += item.price * item.quantity;
        });

        totalElement.textContent = `RM ${totalAmount.toFixed(2)}`;
    }

    payButton.addEventListener('click', function () {
        proceedPaymentModal.style.display = 'flex';
    });

    yesButton.addEventListener('click', function () {
        window.location.href = 'paymentSuccessful.html';
    });

    noButton.addEventListener('click', function () {
        proceedPaymentModal.style.display = 'none';
    });

    backButton.addEventListener('click', function () {
        window.location.href = 'bookEquipment.html';
    });

    window.addEventListener('click', function (event) {
        if (event.target === proceedPaymentModal) {
            proceedPaymentModal.style.display = 'none';
        }
    });

    loadSelectedEquipment();
});

function selectPaymentMethod(element) {
    const methods = document.querySelectorAll(".method");
    methods.forEach(method => method.classList.remove("selected"));
    element.classList.add("selected");
}