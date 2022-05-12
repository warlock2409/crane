$(document).ready(function(){

      fetch('item.json')// json file linked
      .then(function (response) {
       return response.json();
   })
   .then(function(data){
        appendData(data);
   })
   .catch(function(err){
       console.log("error:"+ err);
   });


   console.log(data);
   function appendData(data){
    var content = document.getElementById("content");
    for(let i=0;i<data.length;i++){
        var block = document.createElement("div");
        block.classList.add("block")
        block.id=data[i].id;
        block.setAttribute("onclick","location.href='page1.html';"); // next page linked
        var h4 = document.createElement("h4");
        var button = document.createElement("span");
        if(data[i].status=="active"){
            block.classList.add("active");
            
          }else{
            
            block.classList.add("inActive");
            
          }
        button.innerText=data[i].status;
       

        h4.innerText=data[i].company;
        content.appendChild(block);
        block.appendChild(h4);
        block.appendChild(button);
    }
    // filter content
    $("#filter").on("keyup",function(){
      
      var value = $(this).val().toLowerCase();
      $("#content .block").filter(function(){
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
  
    });

    

    $("#icon").click(function(){
      $(".searchInput").slideToggle();
    });







   }




















})