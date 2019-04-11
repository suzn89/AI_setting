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

  // 채널목록 그리드
  $('.btn__add').on('click',function(){
    $('#popup__wrap').fadeIn();
  });

  // 채널 그룹 관리 수정,삭제
  $('.box__list--hover').hide();
  $('.infotbl').hover(function () {
      // over
      $('.box__list--hover').show();
    }, function () {
      // out
      $('.box__list--hover').hide();
    }
  );

  // 좌측 사이드 패널
  
  panelOpen = true;
  $('.btn__panel').click(function (e) { 
    e.preventDefault();
    if (panelOpen) {
      $(this).addClass('open');
      $('#search__area').stop(true,true).animate({'margin-left':'-350px'},500,function(){panelOpen=false;});      
    } else {      
      $(this).removeClass('open');
      $('#search__area').stop(true,true).animate({'margin-left':'0px'},500,function(){panelOpen=true;});
    }
  });
  
});