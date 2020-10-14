var preloader = $('#preloader');
var content_box = $('#content-box');

$('#preloader').hide();

let menu_item = $('.side-menu #collapsibleNavbar ul li.nav-item a');

$(menu_item).on('click', function (e) {

    $(menu_item).removeClass('active');
    $(e.target).addClass('active');

    let targetController = ($(e.target).attr('data-controller'))

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }


    });
    $.ajax({
        url: 'new-panel',
        type: 'POST',
        data: {
            '_token': $('input[name="_token"]').val(),
            'target': targetController,
        },
        beforeSend: () => {
            //content_box.html($(preloader).html());
            $(preloader).show();
        },
        complete: () => {
            //console.log('completed');
            $(preloader).hide();
        },
        success: function (d) {
            //console.log('success');
            content_box.html(d);
        }

    })
})

if ($('#dashboard-btn'))
    $('#dashboard-btn').triggerHandler('click');