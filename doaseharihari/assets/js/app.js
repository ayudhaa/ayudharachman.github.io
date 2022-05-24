function sendRequest() {
    var input_ = $('[name="text_"]').val();
    var settings = {
        "url": "https://doa-doa-api-ahmadramadhan.fly.dev/api/doa/pergi",
        "method": "GET",
        "timeout": 0,
        "Access-Control-Allow-Origin": "https://ayudharachman.github.io/doaseharihari",
        "Content-Type": "application/json"
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}