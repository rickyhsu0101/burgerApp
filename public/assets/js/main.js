$(".devour").on("click", function(){
    var info = {
        id: $(this).data("id")
    };
    console.log(info);
    $.ajax("/api",{
        type: "PUT",
        data: info
    }).then(function(){
        location.reload();
    });
});
$("#submit").on("click", function(event){
    event.preventDefault();
    var desc = $("#burgerDescInput").val();
    var info = {
        burgerDesc: desc
    };
    $.ajax("/api",{
        type: "POST",
        data: info
    }).then(function(){
        location.reload();
    });
});