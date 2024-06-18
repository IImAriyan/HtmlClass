$(document).ready(function(){
  images= [
    'assets/1.png',
    'assets/2.png',
    'assets/3.png'
  ]  


  $('.right').click(function(){
        if($('.one').attr('src') == images[0]){
            $('.one').attr('src',images[1])
            $('.two').attr('src',images[2])
            $('.three').attr('src',images[0])
        } 
        else if ($('.one').attr('src') == images[1]){
            $('.one').attr('src',images[2])
            $('.two').attr('src',images[0])
            $('.three').attr('src',images[1])
        } 
        else if ($('.one').attr('src') == images[2]){
            $('.one').attr('src',images[0])
            $('.two').attr('src',images[1])
            $('.three').attr('src',images[2])
        }
  })
  $('.left').click(function(){
    if($('.one').attr('src') == images[0]){
        $('.one').attr('src',images[1])
        $('.two').attr('src',images[2])
        $('.three').attr('src',images[0])
    } 
    else if ($('.one').attr('src') == images[1]){
        $('.one').attr('src',images[2])
        $('.two').attr('src',images[0])
        $('.three').attr('src',images[1])
    } 
    else if ($('.one').attr('src') == images[2]){
        $('.one').attr('src',images[0])
        $('.two').attr('src',images[1])
        $('.three').attr('src',images[2])
    }
})
})