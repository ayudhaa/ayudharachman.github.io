function success(position) {
    console.log(position);
}

function error() {
    alert('Sorry');
}

function userLocation() {
    if (!navigator.geolocation) {
        alert('Geolocation tidak didukung pada browser Anda, silahkan gunakan browser lain :)');
    } else {
        navigator.geolocation.getCurrentPosition(success, error);
    }
}

function index() {
    let app         = document.getElementById('typedtext');
    let h3          = document.createElement('h3');
    h3.innerHTML    = 'Prayer times';

    app.appendChild(h3);
    userLocation();
}

index();