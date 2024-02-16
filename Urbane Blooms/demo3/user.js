
document.addEventListener('DOMContentLoaded', function () {

    let favoritesCount = 0;

    document.getElementById('toPayBtn').addEventListener('click', function () {
        alert('To Pay button clicked');
    });

    document.getElementById('toReceiveBtn').addEventListener('click', function () {
        alert('To Receive button clicked');
    });

    document.getElementById('deliveredBtn').addEventListener('click', function () {
        alert('Delivered button clicked');
    });

    document.getElementById('favoritesCount').innerText = favoritesCount;

    document.getElementById('favorites').addEventListener('click', function () {
        favoritesCount++;
        document.getElementById('favoritesCount').innerText = favoritesCount;
    });

    document.getElementById('settingsBtn').addEventListener('click', function () {
        alert('Settings button clicked');
    });

    document.getElementById('logoutBtn').addEventListener('click', function () {
        alert('Logout button clicked');
    });
});
