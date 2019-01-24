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

function appOpen(parent,name,content,height,width,icon){
var win=elt("div",{class:"appwindow"});
if(icon){var ico=elt("img",{src:icon,height:"18px",alt:"icon"});}else{var ico=elt("span",{style:"border:1px solid #ffffff;"},(new String(name)).substring(0,1));}

win.appendChild(elt("nav",{class:"titlebar"},icon,name));




parent.appendChild(win);
return win
}
