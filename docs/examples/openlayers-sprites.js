(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{20:function(e,t){for(var o=[{offset:[0,0],opacity:1,rotateWithView:!0,rotation:0,scale:1,size:[55,55]},{offset:[110,86],opacity:.75,rotateWithView:!1,rotation:Math.PI/2,scale:1.25,size:[55,55]},{offset:[55,0],opacity:.5,rotateWithView:!0,rotation:Math.PI/3,scale:1.5,size:[55,86]},{offset:[212,0],opacity:1,rotateWithView:!0,rotation:0,scale:1,size:[44,44]}],n=o.length,r=new Array(n),a=0;a<n;++a){var i=o[a];r[a]=new ol.style.Icon({offset:i.offset,opacity:i.opacity,rotateWithView:i.rotateWithView,rotation:i.rotation,scale:i.scale,size:i.size,crossOrigin:"anonymous",src:"data/img/butterfly.png"})}for(var l=new Array(500),s=25e6,c=0;c<500;++c){var f=new ol.geom.Point([5e7*Math.random()-s,5e7*Math.random()-s]),u=new ol.Feature(f);u.setStyle(new ol.style.Style({image:r[c%(n-1)]})),l[c]=u}for(var w=new ol.source.Vector({features:l}),y=new ol.layer.Vector({source:w}),h=new ol.Map({layers:[y],target:document.getElementById("map"),view:new ol.View({center:[0,0],zoom:5})}),g=[],p=0;p<500;p+=30){var m=l[p].clone();m.setStyle(null),g.push(m)}new ol.layer.Vector({map:h,source:new ol.source.Vector({features:g}),style:new ol.style.Style({image:r[n-1]})}),h.on("click",function(e){var t=document.getElementById("info");t.innerHTML="Hold on a second, while I catch those butterflies for you ...",window.setTimeout(function(){var o=[];h.forEachFeatureAtPixel(e.pixel,function(e){return o.push(e),!1}),1===o.length?t.innerHTML="Got one butterfly":o.length>1?t.innerHTML="Got "+o.length+" butterflies":t.innerHTML="Couldn't catch a single butterfly"},1)}),h.on("pointermove",function(e){if(!e.dragging){var t=h.getEventPixel(e.originalEvent),o=h.hasFeatureAtPixel(t);h.getTarget().style.cursor=o?"pointer":""}})}},[[20,0]]]);
//# sourceMappingURL=openlayers-sprites.js.map