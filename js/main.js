$(
    () => {

        //$("#checker").on('change', '#mailing-checkbox', populateData());
        $('#mailing-checkbox').change(
            function () {
                if ($(this).is(':checked')) {
                    populateData()
                }
            })

        $('#btn-submit').click(() => {
            checkRequired()
        });
        $('#btn-cancel').click(() => {
            cleanAll()
        });
    }
)

const populateData = () => {
    const fields = ["-street-1", "-street-2", "-city", "-zip"]
    fields.map(field => {
        console.log("#mailing" + field);
        $("#mailing" + field).val($("#residential" + field).val())
    })
}

const checkRequired = () => {
    const ids = $('.check').map(function () {
        return "#" + this.id;
    }).get()

    ids.forEach(input => {
        $(input).val() ? $(input).removeClass("error") :  $(input).addClass("error")
    })
    if($(':input','#form').hasClass("error")){
        alert("Fill all required fields")
    }
    console.log("submited")
}

const cleanAll=()=>{
    $(':input','#form')
    .not(':button, :submit, :reset, :hidden')
    .val('')
    .removeAttr('checked')
    .removeAttr('selected');
}