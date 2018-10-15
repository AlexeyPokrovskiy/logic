$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $('#phone').inputmask("+38(099) 999-99-99");
    $('#register').validate({
        rules: {
            phone: {
                required: true,
                regex: /^\+38\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/
            },
            name:{
                required: true,
                minlength: 3,
            },
            lastname:{
                required: true,
                minlength: 6,
            }
        },
        messages: {
            phone: {
                required: "",
            }
        },
        success: function (element) {
            element.addClass('valid')
                .closest('.form-group').removeClass('error');
        },
        submitHandler: function () {
            return true;
        }
    });
});