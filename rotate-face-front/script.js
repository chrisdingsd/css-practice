$().ready(function(){

  var time = 0;

  $('#my').click(function(){
    time++;
    $('#carousel figure').each(function(index){
      $(this).css({
        'transform': `rotateY(   ${(index+time)*40}deg ) translateZ( 288px )  rotateY(  -${(index+time)*40}deg )`
      })
    })


  })


})