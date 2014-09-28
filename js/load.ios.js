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
    "http://cdn.mektuphane.com/js/main.ios.js"
],function(){
    console.info('LOADED');
});