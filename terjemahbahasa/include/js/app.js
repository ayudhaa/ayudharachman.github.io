$("#form").on("submit", function(e){
    e.preventDefault();
    var teks = $('[name="enterteks"]').val();
    var tolang = $('[name="tolang"]').val();
    if (teks.length > 0) {
        var settings = {
            "url": 'https://api-translate.azharimm.site/translate?engine=google&text='+teks+'&to='+tolang+'',
            "method": "GET",
            "timeout": 0,
        };
        // console.log(settings);
        $.ajax({
            beforeSend: function() {$("#submit").attr({value: 'Tunggu...', disabled: 'true'});}
        })
        $.ajax(settings).done(function (response) {
            $("#result").html(response.data.result);
            $('[name="enterteks"]').val('');
            $("#submit").prop("disabled", false);
            $("#submit").attr("value", 'Terjemahin!');
        });
    } else {
        Swal.fire({
            title: 'Hai,',
            text: 'Ketik yang ingin ditranslate ya :)'
        });
    }
});