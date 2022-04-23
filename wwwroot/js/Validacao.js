const Validation = {

        validate: function (className) {
        try {
            arr = []
            $(className).bind("change", function () {
                    if (!$("#" + $(this).get(0).id).hasClass("invalid")) {
                        if ($(this).val() == '' || $(this).val() == null || $(this).val() == undefined) {
                            $("." + $(this).get(0).id).html($(this).attr('data-message-error'))
                            $("." + $(this).get(0).id).show();
                            $("#" + $(this).get(0).id).removeClass('is-valid').addClass('is-invalid');

                            error_free = false;
                        } else {
                            $("." + $(this).get(0).id).hide();
                            $("#" + $(this).get(0).id).removeClass('is-invalid invalid').addClass('is-valid');

                            error_free = true;
                        }
                    } else {
                        $("." + $(this).get(0).id).html("Um " + $(this).attr('name') + " válido é obrigatório.")
                        $("." + $(this).get(0).id).show();
                        $("#" + $(this).get(0).id).removeClass('is-valid').addClass('is-invalid invalid');

                        error_free = false;
                    }
                    arr.push(error_free);
                    n = arr.includes(false);
                }
                ).trigger('change');

                if (n)
                    Toast.fire({
                        icon: 'error',
                        title: 'Por favor, preencha os campos a vermelhor, são obrigatórios.'
                    })
            }
            catch (err) {
            console.log('')
            }
        },

        onChange: function () {
            $('input[type=email]').on('input', function () {
                let re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                let is_email = re.test($(this).val());
                if (is_email) {
                        $(this).removeClass("is-invalid invalid").addClass("is-valid");
                        $("." + $(this).get(0).id).hide();
                    
                } else {
                    if ($(this).val() == '') {
                        $(this).removeClass("is-invalid invalid isObrigatorio")
                        $("." + $(this).get(0).id).hide();
                    } else {
                        $(this).removeClass("is-valid").addClass("is-invalid invalid isObrigatorio");
                        $("." + $(this).get(0).id).show();
                        $("." + $(this).get(0).id).html("Um " + $(this).attr('name') + " válido é obrigatório.");
                    }
                }
            });

            $('input[type=url]').on('input', function () {
                if ($(this).val().substring(0, 4) == 'www.') 
                    $(this).val('http://www.' + input.val().substring(4));

                let re = /(http|ftp|https):\/\/[\w-]+(\.[\w-]+)+([\w.,@?^=%&amp;:\/~+#-]*[\w@?^=%&amp;\/~+#-])?/;
                let is_url = re.test(input.val());

                if (is_url) 
                    $(this).removeClass("is-invalid").addClass("is-valid");
                else 
                    $(this).removeClass("is-valid").addClass("is-invalid");
            });

            $('input[name=NUIT]').on('input', function () {
                let nuitLast = $(this).val()
                if (nuitLast.length < 9) {
                    $(this).removeClass("is-valid").addClass("is-invalid invalid");
                    $("." + $(this).get(0).id).show();
                    $("." + $(this).get(0).id).html("Um " + $(this).attr('name') + " válido é obrigatório.")
                } else {
                    $("." + $(this).get(0).id).hide();
                    $("#" + $(this).get(0).id).removeClass('is-invalid invalid').addClass('is-valid');
                }
            })

            $('input[name=Telefone]').on('input', function () {
                let telLast = $(this).val()
                if (telLast.length < 8) {
                    $(this).removeClass("is-valid").addClass("is-invalid invalid");
                    $("." + $(this).get(0).id).show();
                    $("." + $(this).get(0).id).html("Um " + $(this).attr('name') + " válido é obrigatório.")
                } else {
                    $("." + $(this).get(0).id).hide();
                    $("#" + $(this).get(0).id).removeClass('is-invalid invalid').addClass('is-valid');
                }

            })
        }
}