$(() => {

    const sucess = (resData)=>{
        $('#ask').val(resData);
    };

    $('#ask').on('keyup', function(e){
        console.log(e);
        if(e.keyCode === 13) {
            $.get( '/8ball',null, sucess);
        };
    });

    $("#btn").click(() => {
        
        console.log(data);
        $.get({
            url: "/8ball",
            data: JSON.stringify(data),
            contentType: "application/json; charset=utf-8"
        }).done(sucess)
            .fail();
        return false;
    });
});