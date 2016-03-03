var template = function(text) {
  return '<p><input type="checkbox"><i class="glyphicon glyphicon-star"></i><span>' + text + '</span><i class="glyphicon glyphicon-remove"></i></p>';
};

var main = function() {
  $('form').submit(function() {
    var text = $('input:[name=input]').val();
    var html = template(text);
    $('.list').append(html);
    
    return false;  
  });
  $(document).on('click','.glyphicon-star',function(){
  	$(this).toggleClass('active');
  
  });  
  $(document).on('click','.glyphicon-remove',function(){
   $(this).parent().remove();
    
  
  });  
};

$(document).ready(main);