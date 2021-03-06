$('.cropme').simpleCropper();
$(document).ready(function() {

    ion.sound({
            sounds: [
                {name: "glass"},
                {name: "tap"}
            ],
            path: "http://cdn.mektuphane.com/sounds/",
            preload: true,
            volume: 1.0
        });

    $('.multiselect').multiselect({
        enableFiltering: true,
        numberDisplayed: 0,
        nSelectedText: 'adrese kart gönderilecek.',
        nonSelectedText: 'Defterden seçim yapılmadı. Adres ekleyiniz!',
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

//$("#headerCarousel").backstretch("http://cdn.mektuphane.com/img/test/img_banner_header.png");
//$("#footerCarousel").backstretch("http://cdn.mektuphane.com/img/test/img_banner_goggles.png");

//$("#headerCarousel").backstretch("https://farm4.staticflickr.com/3859/15174866990_6d4129cb35_o.png");
//$("#footerCarousel").backstretch("https://farm3.staticflickr.com/2944/15361248622_60c345dc09_o.png");

//$("#headerCarousel").backstretch("https://farm4.staticflickr.com/3859/15174866990_13c724415b_b.jpg");
//$("#footerCarousel").backstretch("https://farm3.staticflickr.com/2944/15361248622_6373a30509_b.jpg");

$("#headerCarousel").backstretch("https://farm4.staticflickr.com/3945/15518028326_b7da58a47e_o.jpg");
$("#footerCarousel").backstretch("https://farm4.staticflickr.com/3942/15355112189_cb664c9d74_o.jpg");

$("[id^='collapse-']").on('shown.bs.collapse', function () {
    jQuery("[id^='list-group_']").mCustomScrollbar("scrollTo","bottom")
})

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
    var obj = jQuery.parseJSON(evt.data);
    if(obj.w == '1'){
        ion.sound.play("glass");
        if(document.getElementById("panel-heading_"+obj.i)){
            jQuery.ajax({type:'GET', url:'/support/message/'+obj.i,success:function(data,textStatus){jQuery('#message_'+obj.i).html(data);},error:function(XMLHttpRequest,textStatus,errorThrown){},complete:function(XMLHttpRequest,textStatus){  jQuery("#list-group_"+obj.i).mCustomScrollbar("scrollTo","bottom") }});
            document.getElementById("panel-heading_"+obj.i).style.background = "#A6FFB1";
        }
    }
    if(obj.w == '0'){
        if(document.getElementById("panel-heading_"+obj.i)){
            jQuery.ajax({type:'GET', url:'/support/message/'+obj.i,success:function(data,textStatus){jQuery('#message_'+obj.i).html(data);},error:function(XMLHttpRequest,textStatus,errorThrown){},complete:function(XMLHttpRequest,textStatus){  jQuery("#list-group_"+obj.i).mCustomScrollbar("scrollTo","bottom") }});
        }
    }
    if(obj.o == '0'){
        document.getElementById("panel-heading_"+obj.i).style.background = "#fefefe";
        document.getElementById("content_"+obj.i).style.display = 'none';
        document.getElementById("button_"+obj.i).style.display = 'none';
        document.getElementById("loading_"+obj.i).innerHTML = 'Destek konusu kapatıldı.';
    }
} 
function onError(evt) { 
    console.log(evt.data); 
}  
window.addEventListener("load", init, false);

$(window).on('resize', function(){
    $("#upload").css("height", $("#upload").width()/1.48);
    $(".upload-photo").css("height", $(".upload-photo").width()/1.48);
}).trigger('resize');