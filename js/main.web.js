$('.cropme').simpleCropper();
ion.sound({
    path: "../sounds/",
    preload: true
});

$(document).ready(function() {
    $('.multiselect').multiselect({
        enableFiltering: true,
        numberDisplayed: 0,
        nSelectedText: 'adrese kart gönderilecek.',
        nonSelectedText: 'Defterden seçim yapılmadı. Adress ekleyiniz!',
        buttonWidth: '100%',
        filterPlaceholder: 'Ara',
        onChange: function(option, checked) {
	        var selected = 0;
	        $('option', $('#addresses')).each(function() {
	            if ($(this).prop('selected')) {
	                selected++;
	            }
	        });
	        if (selected == 1) {
	        	$('#new_address').hide();
	        }
	        if (selected == 0) {
	        	$('#new_address').show();
	        }
   		}
    });

    $('textarea[id^="textarea"]').maxlength({
		alwaysShow: true,
     	warningClass: 'label label-warning',
     	limitReachedClass: 'label label-success'
    });

});

(function($){ 
    $(window).load(function(){
        $("[id^='list-group_']").mCustomScrollbar({setHeight:329,scrollbarPosition:"outside",autoHideScrollbar:true});
    });
 })(jQuery);

$("#myCarousel").backstretch("http://cdn.mektuphane.com/img/test/img_banner_goggles.png");

function init() { initWebSocket(); }  
function initWebSocket() { 
    websocket = new WebSocket(wsUri); 
    websocket.onopen = function(evt) { onOpen(evt) }; 
    websocket.onclose = function(evt) { onClose(evt) }; 
    websocket.onmessage = function(evt) { onMessage(evt) }; 
    websocket.onerror = function(evt) { onError(evt) }; 
}
function onOpen(evt) { 
    console.log("CONNECTED");
}  
function onClose(evt) { 
    console.log("DISCONNECTED"); 
}  
function onMessage(evt) {
    evt_counter = evt_counter + 1;
    console.log(evt.data); 
    var obj = jQuery.parseJSON(evt.data);
    if(obj.w == '1'){
        jQuery('#message_counter').html("<span class='label label-default'>!</span>")
        jQuery.ajax({type:'GET', url:'/support/message/'+obj.i,success:function(data,textStatus){jQuery('#message_'+obj.i).html(data);},error:function(XMLHttpRequest,textStatus,errorThrown){},complete:function(XMLHttpRequest,textStatus){  jQuery("#list-group_"+obj.i).mCustomScrollbar("scrollTo","bottom") }});
        document.getElementById("panel-heading_"+obj.i).style.background = "#A6FFB1";
        document.title = "(!) Mektuphane";
        ion.sound.play("tap");
    }
} 
function onError(evt) { 
    console.log(evt.data); 
}  
window.addEventListener("load", init, false);
