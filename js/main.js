$(
    () => {

        $('#mailing-checkbox').change(
            function () {
                if ($(this).is(':checked')) {
                    populateData()
                }
            })

        $('#btn-submit').click(() => {
            checkEmail()
            checkRequired()
        })
        $('#btn-cancel').click(() => {
            cleanAll()
        })
    }
)

const populateData = () => {
    const fields = ["-street-1", "-street-2", "-city", "-zip"]
    fields.map(field => {
        console.log("#mailing" + field)
        $("#mailing" + field).val($("#residential" + field).val())
    })
}

const checkRequired = () => {
    const ids = $('.check').map(function () {
        return "#" + this.id
    }).get()

    ids.forEach(input => {
        $(input).val() ? $(input).removeClass("error") : $(input).addClass("error")
    })
    if ($(':input', '#form').hasClass("error")) {
        Swal.fire("Fill all required fields", "Please check all fields was filled")
    }
    else if (!checkEmail()) {
        $("#email-address").addClass("error")
        Swal.fire("Invalid email", "Please check your email address")

    }
    else {
        Swal.success("Submitted");
    }
}

const cleanAll = () => {
    $(':input', '#form')
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected')

    $("#mailing-checkbox").prop("checked", false)
}

const checkEmail = () => {
    const email = $("#email-address").val()
    const regex = /\S+@\S+\.\S+/

    return email.match(regex)
}