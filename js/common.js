$(function(){
  $('#popup__wrap').hide();
  $('#view_popup').on('click',function(){
    $('#popup__wrap').fadeIn();
  });
  $('#popup__wrap .popup_close').on('click',function(){
    $('#popup__wrap').hide();
  });  
  $('.popup__bottom .close').on('click',function(){
    $('#popup__wrap').hide();
  });  
  $('#view_roi').on('click',function(){
    $('#popup__wrap').fadeIn();
  });
});