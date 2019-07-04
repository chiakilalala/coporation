// $(function(){
//   var $ul   =   $('.main_page > ul');
  
//   $ul.find('li a').click(function(e){
//     var $li = $(this).parent();
    
//     if($li.find('ul').length > 0){
//       e.preventDefault();
      
//       if($li.hasClass('selected')){
//         $li.removeClass('selected').find('li').removeClass('selected');
//         $li.find('ul').slideUp(400);
//         $li.find('a>em').removeClass('mdi-flip-v');
//       }else{
        
//         if($li.parents('li.selected').length == 0){
//           $ul.find('li').removeClass('selected');
//           $ul.find('ul').slideUp(400);
//           $ul.find('li a em').removeClass('mdi-flip-v');
//         }else{
//           $li.parent().find('li').removeClass('selected');
//           $li.parent().find('> li ul').slideUp(400);
//           $li.parent().find('> li a em').removeClass('mdi-flip-v');
//         }
        
//         $li.addClass('selected');
//         $li.find('>ul').slideDown(400);
//         $li.find('>a>em').addClass('mdi-flip-v');
//       }
//     }
//   });
  
  
//   $('.main_page > ul ul').each(function(i){
//     if($(this).find('>li>ul').length > 0){
//       var paddingLeft = $(this).parent().parent().find('>li').css('padding-left');
//       var pIntPLeft   = parseInt(paddingLeft);
//       var result      = pIntPLeft + 20;
      
//       $(this).find('>li>a').css('padding-left',result);
//     }else{
//       var paddingLeft = $(this).parent().parent().find('>li').css('padding-left');
//       var pIntPLeft   = parseInt(paddingLeft);
//       var result      = pIntPLeft + 20;
      
//       $(this).find('>li').css('padding-left',result).parent().addClass('selected--last');
//     }
//   });
  
//   var t = ' li > ul ';
//   for(var i=1;i<=10;i++){
//     $('.main_page > ul > ' + t.repeat(i)).addClass('subMenuColor' + i);
//   }
  
//   var activeLi = $('li.selected');
//   if(activeLi.length){
//     opener(activeLi);
//   }
  
//   function opener(li){
//     var ul = li.closest('ul');
//     if(ul.length){
      
//         li.addClass('selected');
//         ul.addClass('open');
//         li.find('>a>em').addClass('mdi-flip-v');
      
//       if(ul.closest('li').length){
//         opener(ul.closest('li'));
//       }else{
//         return false;
//       }
      
//     }
//   }
  
// });





var $len = 20;
$(function () {
  $('#target_list').hide();
  $('#list').click(function () {
    
      $('#target_list').toggle();
    
  });

//利用【字數限制判斷】
// 超過20個字以"..."取代
$(".short_title>span").each(function () {

  if ($(this).text().length > $len) {
    var $text = $(this).text().substring(0, $len - 1) + "...";
    $(this).text($text);
  }
});

//選單  變色
// $('.left_menu li a').click(function (e) {
//   e.preventDefault();
//   $('.left_menu li a.active').removeClass('active');
//   $(this).addClass('active');
// });
//摺疊選單
$('#icon').click(function (e) {
  e.preventDefault();
  $('#icon').toggleClass('rotate');

  var $this = $('.left_menu li .submenu');
  if ($this.hasClass('open')) {
    $this.removeClass('open');
    $this.slideUp(350);
  } else {
    $this.removeClass('open');
    $this.slideUp(350);
    $this.toggleClass('open');
    $this.next().slideToggle(350);
  }

});


	  $(' #target_list ul li').click(
	    function (e) {
	      e.preventDefault(); // prevent the default action
	      e.stopPropagation; // stop the click from bubbling
	      // $(this).closest('li').find('.selected').removeClass('selected');
         $('#target_list ul li.selected').removeClass('selected');
         $(this).addClass('selected');
	    });


});



