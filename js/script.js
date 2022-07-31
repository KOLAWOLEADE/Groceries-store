$(document).ready(function(){
    $(".Groceries").submit(function(event){
        const item1Input = $("#item1").val();
        const item2Input = $("#item2").val();
        const item3Input = $("#item3").val();
        const item4Input = $("#item4").val();
        const item5Input = $("#item5").val();


        $(".item1").text(item1Input.toUpperCase());
        $(".item2").text(item2Input.toUpperCase());
        $(".item3").text(item3Input.toUpperCase());
        $(".item4").text(item4Input.toUpperCase());
        $(".item5").text(item5Input.toUpperCase());


        $(".items").show();
      

        event.preventDefault();      

  });
});