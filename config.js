function toggleMenu(buttonId, menuId) {
    document.getElementById(buttonId).addEventListener('click', function () {
        const menu = document.getElementById(menuId);
        menu.classList.toggle('hidden');
    });
}

// Toggle for Menu and Profile
toggleMenu('menuButton', 'menuNavbar');
toggleMenu('profileButton', 'profileMenu');
