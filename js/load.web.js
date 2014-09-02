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
	// "http://localhost:8888/cdn/js/bootstrap.min.js",
    "//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js",
    "http://cdnjs.cloudflare.com/ajax/libs/jquery-jcrop/0.9.12/js/jquery.Jcrop.min.js",
    // "//cdnjs.cloudflare.com/ajax/libs/jasny-bootstrap/3.1.3/js/jasny-bootstrap.min.js",
    // "http://localhost:8888/cdn/js/bootstrap-formhelpers.min.js",
    // "//cdnjs.cloudflare.com/ajax/libs/bootcards/0.1.0/js/bootcards.min.js",
    "http://cdn.mektuphane.com/js/bootstrap-multiselect.js",
    // "http://davidstutz.github.io/bootstrap-multiselect/js/bootstrap-multiselect.js",
    "http://cdn.mektuphane.com/js/remoteNonStopPageScroll.js",
    "http://cdn.mektuphane.com/js/bootstrap-maxlength.min.js",
    "http://cdn.mektuphane.com/js/holder.js",
    "http://cdn.mektuphane.com/js/attach.web.js",
    "http://cdn.mektuphane.com/js/main.web.js"
],function(){
    console.info('loaded.');
});