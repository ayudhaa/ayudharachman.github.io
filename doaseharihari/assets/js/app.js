function sendRequest() {
    var input_ = $('[name="text_"]').val();
    var settings = {
        "mode": "no-cors",
        "url": "https://doa-doa-api-ahmadramadhan.fly.dev/api/doa/pergi",
        "method": "GET",
        "mode": "no-cors",
        "timeout": 0,
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}