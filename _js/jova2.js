var ns = (navigator.appName.indexOf("Netscape") != -1);
var d = document;
var elmnt = document.querySelector("nav#nav");
var flag;
function JSFX_FloatDiv(id, sx, sy,)
{
    var el=d.getElementById?d.getElementById(id):d.all?d.all[id]:d.layers[id];
    var px = document.layers ? "" : "px";
    window[id + "_obj"] = el;
    if(d.layers)el.style=el;
    el.cx = el.sx = sx;
    el.cy = el.sy = sy;
    el.sP=function(x,y){this.style.left=x+px;this.style.top=y+px;};
    el.floatIt=function()
    {
        var pX, pY;
        pX = (this.sx >= 0) ? 0 : ns ? innerWidth : 
        document.documentElement && document.documentElement.clientWidth ? 
        document.documentElement.clientWidth : document.body.clientWidth;
        pY = ns ? pageYOffset : document.documentElement && document.documentElement.scrollTop ? 
        document.documentElement.scrollTop : document.body.scrollTop;
        if(this.sy<0) 
        pY += ns ? innerHeight : document.documentElement && document.documentElement.clientHeight ? 
        document.documentElement.clientHeight : document.body.clientHeight;
        this.cx += (pX + this.sx - this.cx)/8;
        if(elmnt.getBoundingClientRect().top>=0)
        {
            this.cy += ((pY/2048) + this.sy - this.cy)/8;
        }
        if((elmnt.getBoundingClientRect().top<0)&&(elmnt.getBoundingClientRect().top>=-50))
        {
            this.cy += ((pY/64) + this.sy - this.cy)/8;
        }
        if((elmnt.getBoundingClientRect().top<-50)&&(elmnt.getBoundingClientRect().top>=-150))
        {
            this.cy += ((pY/4) + this.sy - this.cy)/8;
        }
        if((elmnt.getBoundingClientRect().top<-150))
        {
            this.cy += ((pY/1.8) + this.sy - this.cy)/8;
            flag=true;
        }
        this.sP(this.cx, this.cy);
        setTimeout(this.id + "_obj.floatIt()", 40);
    }
    return el;
}