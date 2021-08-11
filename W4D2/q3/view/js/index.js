$(() => {
    var addedProduct=[];
    const sucess = (resData)=>{
        $('#message').html = "Product added";
        addedProduct = resData;
        console.log(resData);
    };
    function addProduct (id){
    // $("#productAdd").click((e) => {
        console.log("clicked "+ id);
        $.post("/addToCart",{id: id },sucess)
        .fail();
        return false;
    };
});