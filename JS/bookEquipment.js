document.addEventListener('DOMContentLoaded', function () {
    const equipmentSelectIds = [
        'badmintonRacketQuantity',
        'shuttlecockQuantity',
        'basketballQuantity',
        'volleyballQuantity',
        'handballQuantity',
        'futsalQuantity',
        'hockeyQuantity',
        'golfIronQuantity',
        'golfBallQuantity',
        'swimmingCapQuantity',
        'tennisQuantity',
        'takrawQuantity',
    ];

    equipmentSelectIds.forEach(selectId => {
        const selectElement = document.getElementById(selectId);
        if (selectElement) {
            for (let i = 1; i <= 10; i++) { 
                const option = document.createElement('option');
                option.value = i;
                option.textContent = i;
                selectElement.appendChild(option);
            }
        }   
     });

    document.getElementById('checkoutButton').addEventListener('click', function () {
        const equipmentData = [
        {
            name: 'Badminton Racket',
            price: 3,
            quantity: parseInt(document.getElementById('badmintonRacketQuantity').value) || 0
        },
        {
            name: 'Shuttlecock',
            price: 3,
            quantity: parseInt(document.getElementById('shuttlecockQuantity').value) || 0
        },
        {
            name: 'Basketball',
            price: 3,
            quantity: parseInt(document.getElementById('basketballQuantity').value) || 0
        },
        {
            name: 'Volleyball',
            price: 3,
            quantity: parseInt(document.getElementById('volleyballQuantity').value) || 0
        },
        {
            name: 'Handball',
            price: 3,
            quantity: parseInt(document.getElementById('handballQuantity').value) || 0
        },
        {
            name: 'Futsal',
            price: 3,
            quantity: parseInt(document.getElementById('futsalQuantity').value) || 0
        },
        {
            name: 'Hockey',
            price: 3,
            quantity: parseInt(document.getElementById('hockeyQuantity').value) || 0
        },
        {
            name: 'Golf Iron',
            price: 2,
            quantity: parseInt(document.getElementById('golfIronQuantity').value) || 0
        },
        {
            name: 'Golf Ball',
            price: 1,
            quantity: parseInt(document.getElementById('golfBallQuantity').value) || 0
        },
        {
            name: 'Swimming Cap',
            price: 2,
            quantity: parseInt(document.getElementById('swimmingCapQuantity').value) || 0
        },
        {
            name: 'Tennis',
            price: 2,
            quantity: parseInt(document.getElementById('tennisQuantity').value) || 0
        },
        {
            name: 'Takraw',
            price: 2,
            quantity: parseInt(document.getElementById('takrawQuantity').value) || 0
        },
        ];

        const selectedEquipment = equipmentData.filter(item => item.quantity > 0);

        if (selectedEquipment.length === 0) {
            alert('Please select at least one item to proceed to checkout.');
            return;
        }

        localStorage.setItem('selectedEquipment', JSON.stringify(selectedEquipment));

        window.location.href = 'paymentDetails.html';
    });

    const cancelEquipmentModal = document.getElementById('cancelEquipmentModal');
    const cancelButton = document.getElementById('cancelButton');
    const yesButton = document.querySelector('.yesButton');
    const noButton = document.querySelector('.noButton');

    cancelButton.addEventListener('click', function () {
        cancelEquipmentModal.style.display = 'flex';
    });

    yesButton.addEventListener('click', function () {
        window.location.href = 'cancelSuccessful.html'; 
    });

    noButton.addEventListener('click', function () {
        cancelEquipmentModal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === cancelEquipmentModal) {
            cancelEquipmentModal.style.display = 'none';
        }
    });
});
