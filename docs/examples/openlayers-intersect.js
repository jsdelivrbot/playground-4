(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{23:function(e,t){for(var o=new ol.style.Stroke({color:"black",width:2}),n=new ol.style.Fill({color:"red"}),r={square:new ol.style.Style({image:new ol.style.RegularShape({fill:n,stroke:o,points:4,radius:10,angle:Math.PI/4})}),triangle:new ol.style.Style({image:new ol.style.RegularShape({fill:n,stroke:o,points:3,radius:10,rotation:Math.PI/4,angle:0})}),star:new ol.style.Style({image:new ol.style.RegularShape({fill:n,stroke:o,points:5,radius:10,radius2:4,angle:0})}),cross:new ol.style.Style({image:new ol.style.RegularShape({fill:n,stroke:o,points:4,radius:10,radius2:0,angle:0})}),x:new ol.style.Style({image:new ol.style.RegularShape({fill:n,stroke:o,points:4,radius:10,radius2:0,angle:Math.PI/4})})},l=["x","cross","star","triangle","square"],a=new Array(250),i=45e5,s=0;s<250;++s){var p=l[Math.floor(5*Math.random())],c=[9e6*Math.random()-i,9e6*Math.random()-i];a[s]=new ol.Feature(new ol.geom.Point(c)),a[s].setStyle(r[p]),a[s].setProperties({key:p})}var g=new ol.source.Vector({features:a}),h=new ol.layer.Vector({source:g}),m=new ol.Map({layers:[h],target:"map",view:new ol.View({center:[0,0],zoom:2})});function u(){var e=document.querySelector("#container"),t=document.querySelector("#feature-box");t&&e.removeChild(t);var o=document.createDocumentFragment(),n=d(e),r=n.topRect,l=n.leftRect,a=n.bottomRect,i=n.rightRect,s=document.createElement("DIV");s.id="feature-box",s.className="feature-box",o.appendChild(s);var p=document.createElement("DIV");p.style.cssText="\n      position: absolute;\n      top: "+r.top+"px;\n      left: "+r.left+"px;\n      right: "+r.right+"px;\n      bottom: "+r.bottom+"px;\n    ",p.className="feature-box-edge",s.appendChild(p);var c=document.createElement("DIV");c.style.cssText="\n      position: absolute;\n      top: "+l.top+"px;\n      left: "+l.left+"px;\n      right: "+l.right+"px;\n      bottom: "+l.bottom+"px;\n    ",c.className="feature-box-edge",s.appendChild(c);var g=document.createElement("DIV");g.style.cssText="\n      position: absolute;\n      top: "+a.top+"px;\n      left: "+a.left+"px;\n      right: "+a.right+"px;\n      bottom: "+a.bottom+"px;\n    ",g.className="feature-box-edge",s.appendChild(g);var h=document.createElement("DIV");h.style.cssText="\n      position: absolute;\n      top: "+i.top+"px;\n      left: "+i.left+"px;\n      right: "+i.right+"px;\n      bottom: "+i.bottom+"px;\n    ",h.className="feature-box-edge",s.appendChild(h),e.appendChild(o)}function d(e){var t=e.getBoundingClientRect(),o=.5*t.width,n=.5*t.height,r={top:n-100,left:o-100,bottom:n+100,right:o+100},l={top:r.top,left:r.left,bottom:t.height-r.top-2,right:t.width-r.right},a={top:r.top,left:r.left,bottom:t.height-r.bottom,right:t.width-r.left-2},i={top:r.bottom-2,left:r.left,bottom:t.height-r.bottom,right:t.width-r.right};return{boxRect:r,topRect:l,leftRect:a,rightRect:{top:r.top,left:r.right-2,bottom:t.height-r.bottom,right:t.width-r.right},bottomRect:i}}m.on("postcompose",function(){var e=d(document.querySelector("#container")).boxRect,t=m.getCoordinateFromPixel([e.left,e.bottom]),o=m.getCoordinateFromPixel([e.right,e.top]),n=ol.extent.boundingExtent([t,o]),r=g.getFeatures().filter(function(e){return ol.extent.intersects(n,e.getGeometry().getExtent())}),l=r.length,a=new Map;r.forEach(function(e){var t=e.getProperties().key;a.has(t)?a.set(t,a.get(t)+1):a.set(t,1)});for(var i=[],s=a.entries(),p=s.next();!p.done;){var c=p.value;i.push(c[0]+": "+c[1]),p=s.next()}document.getElementById("info").innerHTML="Total: "+l+(i.length>0?", "+i.join(", "):"")}),u(),window.addEventListener("resize",function(){u()})}},[[23,0]]]);
//# sourceMappingURL=openlayers-intersect.js.map