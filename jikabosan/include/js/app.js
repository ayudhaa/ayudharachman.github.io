$(document).ready(function(){
    $("#form").on("submit", function(e){
        e.preventDefault();
        Swal.fire({
            title: 'Lakukan sesuatu!',
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Okay',
            cancelButtonText: 'Batal',
        }).then((result) => {
            if (result.isConfirmed) {
                var xname = document.getElementById("name").value;
                $.ajax({
                    method: 'get',
                    url: 'https://www.boredapi.com/api/activity/',
                    success: function (val) {
                        Swal.fire({
                            title: 'Hi '+xname+' do something!',
                            text: val.activity
                        }).then(function(){window.location.reload(true);});
                    },error: function (err) {
                        console.log(err);
                    }
                });
            }
        });
    });
});

var lang_en = document.getElementById("switch_en");
var lang_id = document.getElementById("switch_id");

lang_en.onclick = function() {
    document.getElementById('title-a').text = 'If you`re bored';
    document.getElementById('title-b').text = 'Bored';
    document.getElementById('title-c').text = 'If you`re bored';
    document.getElementById('title-d').text = 'Let`s find you something to do';
    document.getElementById('name').setAttribute('placeholder', 'Your name');
    document.getElementById('submit').setAttribute('value', 'Click!');
}

lang_id.onclick = function() {
    document.getElementById('title-a').text = 'Jika kamu bosan';
    document.getElementById('title-b').text = 'Bosan';
    document.getElementById('title-c').text = 'Jika bosan';
    document.getElementById('title-d').text = 'Mari temukan sesuatu untuk Anda';
    document.getElementById('name').setAttribute('placeholder', 'Nama kamu');
    document.getElementById('submit').setAttribute('value', 'Klik!');
}