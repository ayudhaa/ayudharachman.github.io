$("#form").on("submit", function(e){
    e.preventDefault();
    var teks = $('[name="enterteks"]').val();
    var tolang = $('[name="tolang"]').val();
    if (tolang == 1) {var convertto = 'id';} else {var convertto = 'en';}
    var settings = {
        "url": 'https://amm-api-translate.herokuapp.com/translate?engine=google&text='+teks+'&to='+convertto+'',
        "method": "GET",
        "timeout": 0,
    };
    // console.log(settings);
    $.ajax(settings).done(function (response) {
        $("#result").html(response.data.result);
        $("#form")[0].reset();
    });
});