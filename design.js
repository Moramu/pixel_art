var canvas = $('#pixelCanvas');
var color = $('#colorPicker');
var height = $('#inputHeight');
var width = $('#inputWidth');
var size = $('#sizePicker');

makeGrid();

sizePicker.onsubmit = function(event){
	canvas.children().remove();
    event.preventDefault();
    makeGrid();

};

function makeGrid() {
	for (var r = 0; r < height.val(); r++) {
		canvas.append('<tr></tr>');
		for (var c = 0; c < width.val(); c++) {
			$('tr:last').append('<td></td>');
		}
	}
 }

canvas.mouseover(function(e) {
$(this).css('cursor', 'pointer');
	});	

canvas.on('mousedown', function(e) { 
   if( (e.which == 1) ) {  
 	$(this).find('td').click(function() {	
 		$(this).css('background',color.val());
 	});
   }
   if( (e.which == 3) ) {
   	$(this).find('td').contextmenu(function() {
   		$(this).css('background','');
   	});
   }
   if( (e.which == 2) ) {
    $(this).find('td').css('background','');
   }
   e.preventDefault();
}).on('contextmenu', function(e){
   e.preventDefault();
});

$(function() {
	$('[data-popup-open]').on('click', function(e)  {
			var targeted_popup_class = jQuery(this).attr('data-popup-open');
				$('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
					e.preventDefault();
	});
	$('[data-popup-close]').on('click', function(e)  {
			var targeted_popup_class = jQuery(this).attr('data-popup-close');
				$('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
					e.preventDefault();
	});
});

 $('.hint').hover(function() {
        $(this).css('cursor','pointer').attr('title', 'Click for hint.');
    }, function() {
        $(this).css('cursor','auto');
    });




 


