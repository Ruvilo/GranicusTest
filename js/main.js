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
    // Update mailing fields with the corresponding residential data
    fields.forEach(field => {
        $("#mailing" + field).val($("#residential" + field).val())
    })
}

const checkRequired = () => {
    // Parse IDs to JQuery references
    const ids = $('.check').map(function () {
        return "#" + this.id
    }).get() //-> returns an array

    // Check if each inputs fields contains data
    ids.forEach(inputId => {
        $(inputId).val() ? $(inputId).removeClass("error") : $(inputId).addClass("error")
    })
    
    if ($(':input', '#form').hasClass("error")) {
        Swal.fire("Fill all required fields", "Please check all fields was filled", "error")
    }
    else if (!checkEmail()) {
        $("#email-address").addClass("error")
        Swal.fire("Invalid email", "Please check your email address", "error")

    }
    else {
        Swal.fire("Success!","Submitted", "success")
    }
}

const cleanAll = () => {
    // Reset all input fields
    $(':input', '#form')
        .not(':button, :submit, :reset, :hidden')
        .val('')
        .removeAttr('checked')
        .removeAttr('selected')
    // change checked status
    $("#mailing-checkbox").prop("checked", false)
}

const checkEmail = () => {
    // check valid email
    const email = $("#email-address").val()
    const regex = /\S+@\S+\.\S+/

    return email.match(regex)
}