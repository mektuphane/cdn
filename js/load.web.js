function loadScripts(array,callback){
    var loader = function(src,handler){
        var script = document.createElement("script");
        script.src = src;
        script.onload = script.onreadystatechange = function(){
        script.onreadystatechange = script.onload = null;
        	handler();
        }
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(script, s);
        //(head || document.body).appendChild( script );
    };
    (function(){
        if(array.length!=0){
        	loader(array.shift(),arguments.callee);
        }else{
        	callback && callback();
        }
    })();
}

loadScripts([
	"http://cdn.mektuphane.com/js/jquery-1.11.1.min.js",
	"http://cdn.mektuphane.com/js/bootstrap.min.js",
    "http://cdn.mektuphane.com/js/jquery.Jcrop.min.js",
    "http://cdn.mektuphane.com/js/bootstrap-multiselect.js",
    "http://cdn.mektuphane.com/js/remoteNonStopPageScroll.js",
    "http://cdn.mektuphane.com/js/bootstrap-maxlength.min.js",
    "http://cdn.mektuphane.com/js/jquery.backstretch.min.js",
    "http://cdn.mektuphane.com/js/jquery.mCustomScrollbar.concat.min.js",
    "http://cdn.mektuphane.com/js/ion.sound.js",
    "http://cdn.mektuphane.com/js/attach.web.js",
    "http://cdn.mektuphane.com/js/main.web.js"
],function(){
    console.info('LOADED');
});