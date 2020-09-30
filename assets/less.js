function prayerTimes(latitude, longitude) {
    fetch('https://api.aladhan.com/v1/calendar?latitude='+latitude+'&longitude='+longitude+'&method=4')
    .then(response => response.json())
    .then(function(response){
        let tanggal         = new Date();
        let sekarang        = tanggal.getDate() -1 ;
        let data            = response.data[sekarang].timings;

        let apps            = document.getElementById('typedtext');
        let table           = document.createElement('table');
        let tableBody       = document.createElement('tbody');

        for (i in data) {
            let row                             = tableBody.insertRow();
            let name                            = row.insertCell(0);
            let time                            = row.insertCell(1);
                name.innerHTML                  = i;
                time.innerHTML                  = data[i];
                tableBody.appendChild(row);
                
        }

        table.append(tableBody);
        apps.appendChild(table); 
        // console.log(data);
        // console.log(sekarang);
        // console.log(response.data[sekarang]);
    });
}

function success(position) {
    prayerTimes(position.coords.latitude, position.coords.longitude);
}

function error() {
    // alert('Sorry');
    prayerTimes('-6.200000', '106.816666');
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