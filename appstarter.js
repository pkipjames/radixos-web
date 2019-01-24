function elt(name, attributes) {
  var node = document.createElement(name);
  if (attributes) {
    for (var attr in attributes)
      if (attributes.hasOwnProperty(attr))
        node.setAttribute(attr, attributes[attr]);
  }
  for (var i = 2; i < arguments.length; i++) {
    var child = arguments[i];
    if (typeof child == "string")
      child = document.createTextNode(child);
    node.appendChild(child);
  }
  return node;
}

function showScreen(id){try{

var screens=document.getElementsByClassName("screen");

for (var i=0;i<screens.length;i++){

screens[i].style.display="none";

}

document.getElementById(id).style.display="block";

}catch(err){alert("ERROR\n\nshowScreen:\n"+err);}

}
function makeWindowsInactive(){
var wins=document.getElementsByClassName("active");
for( var i=0;i<wins.length;i++){
  wins[i].classList.remove("active");
}
  
  
}
function appOpen(parent,name,content,height,width,icon){
var win=elt("div",{class:"appwindow"});
if(icon){var ico=elt("img",{src:icon,height:"18px",alt:"icon"});}else{var ico=elt("span",{style:"border:1px solid #ffffff;"},(new String(name)).substring(0,1));}

var nav1=elt("nav",{class:"titlebar",moving:"false"},ico,name);
win.appendChild(nav1);

win.appendChild(elt("div",{class:"content"},content));
win.onclick=function (event){
  if(!(win.classList.indexOf("active")!=-1)){makeWindowsInactive();win.classList.add("active");}
};
nav1.ontouchmove=function (event){
  var x=event.pageX;
  var y=event.pageY;
  event.preventDefault();
  win.style.top=y+"px";
  win.style.left=x+"px";
  win.style.height=height+"px";
  win.style.width=width+"px";
  
  
  
  
};
  nav1.onmousedown=function (event){nav1.setAttribute("moving","true");};
  nav1.onmouseup=function (event){nav1.setAttribute("moving","false");};

  nav1.onmousemove=function (event){if(nav1.getAttribute("moving")=="true"){
  var x=event.pageX;
  var y=event.pageY;
  
  win.style.top=y+"px";
  win.style.left=x+"px";
  win.style.height=height+"px";
  win.style.width=width+"px";
  
  
  
                                       }
};

parent.appendChild(win);
  nav1.appendChild(elt("span",{onclick:function (){win.parentNode.removeChild(win);},style:"font-family:Ubuntu,'helvetica neue',verdana,sans-serif;font-weight:100;color:#ff0000;"},"x"));
return win;
}
