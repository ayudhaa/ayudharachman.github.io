$("#form").on("submit", function(e){
    e.preventDefault();
    var teks = $('[name="enterteks"]').val();
    var tolang = $('[name="tolang"]').val();
    if (teks.length > 0) {
        if (tolang == 1) {var convertto = 'id';} else {var convertto = 'en';}
        var settings = {
            "url": 'https://amm-api-translate.herokuapp.com/translate?engine=google&text='+teks+'&to='+convertto+'',
            "method": "GET",
            "timeout": 0,
        };
        // console.log(settings);
        $.ajax({
            beforeSend: function() {$("#submit").attr({value: 'Tunggu...', disabled: 'true'});}
        })
        $.ajax(settings).done(function (response) {
            $("#result").html(response.data.result);
            $("#form")[0].reset();
            $("#submit").prop("disabled", false);
            $("#submit").attr("value", 'Terjemahin!');
        });
    } else {
        Swal.fire({
            title: 'Hai,',
            text: 'Tulis yang ingin di translate ya :)'
        });
    }
});