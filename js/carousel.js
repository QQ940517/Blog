  $(function(){

    var t=$("#myCarousel");
    

    t.hammer().on("swipeleft",function(){
         t.carousel('prev');
    })

    t.hammer().on("swiperight",function(){
         t.carousel('next');
    })
   
  });
 