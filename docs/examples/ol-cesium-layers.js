(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{22:function(e,o){var t=new ol.layer.Tile({source:new ol.source.OSM}),l=new ol.layer.Tile({source:new ol.source.XYZ({attributions:'Tiles © <a href="https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer">ArcGIS</a>',url:"https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"})}),r=new ol.layer.VectorTile({source:new ol.source.VectorTile({format:new ol.format.MVT,url:"https://basemaps.arcgis.com/v1/arcgis/rest/services/World_Basemap/VectorTileServer/tile/{z}/{y}/{x}.pbf"})}),n=new ol.style.Circle({radius:5,fill:null,stroke:new ol.style.Stroke({color:"red",width:1})}),i={Point:new ol.style.Style({image:n}),LineString:new ol.style.Style({stroke:new ol.style.Stroke({color:"green",width:1})}),MultiLineString:new ol.style.Style({stroke:new ol.style.Stroke({color:"green",width:1})}),MultiPoint:new ol.style.Style({image:n}),MultiPolygon:new ol.style.Style({stroke:new ol.style.Stroke({color:"yellow",width:1}),fill:new ol.style.Fill({color:"rgba(255, 255, 0, 0.1)"})}),Polygon:new ol.style.Style({stroke:new ol.style.Stroke({color:"blue",lineDash:[4],width:3}),fill:new ol.style.Fill({color:"rgba(0, 0, 255, 0.1)"})}),GeometryCollection:new ol.style.Style({stroke:new ol.style.Stroke({color:"magenta",width:2}),fill:new ol.style.Fill({color:"magenta"}),image:new ol.style.Circle({radius:10,fill:null,stroke:new ol.style.Stroke({color:"magenta"})})}),Circle:new ol.style.Style({stroke:new ol.style.Stroke({color:"red",width:2}),fill:new ol.style.Fill({color:"rgba(255,0,0,0.2)"})})},s=new ol.source.Vector({features:(new ol.format.GeoJSON).readFeatures({type:"FeatureCollection",crs:{type:"name",properties:{name:"EPSG:3857"}},features:[{type:"Feature",geometry:{type:"Point",coordinates:[0,0]}},{type:"Feature",geometry:{type:"LineString",coordinates:[[4e6,-2e6],[8e6,2e6]]}},{type:"Feature",geometry:{type:"LineString",coordinates:[[4e6,2e6],[8e6,-2e6]]}},{type:"Feature",geometry:{type:"Polygon",coordinates:[[[-5e6,-1e6],[-4e6,1e6],[-3e6,-1e6]]]}},{type:"Feature",geometry:{type:"MultiLineString",coordinates:[[[-1e6,-75e4],[-1e6,75e4]],[[1e6,-75e4],[1e6,75e4]],[[-75e4,-1e6],[75e4,-1e6]],[[-75e4,1e6],[75e4,1e6]]]}},{type:"Feature",geometry:{type:"MultiPolygon",coordinates:[[[[-5e6,6e6],[-5e6,8e6],[-3e6,8e6],[-3e6,6e6]]],[[[-2e6,6e6],[-2e6,8e6],[0,8e6],[0,6e6]]],[[[1e6,6e6],[1e6,8e6],[3e6,8e6],[3e6,6e6]]]]}},{type:"Feature",geometry:{type:"GeometryCollection",geometries:[{type:"LineString",coordinates:[[-5e6,-5e6],[0,-5e6]]},{type:"Point",coordinates:[4e6,-5e6]},{type:"Polygon",coordinates:[[[1e6,-6e6],[2e6,-4e6],[3e6,-6e6]]]}]}}]})});s.addFeature(new ol.Feature(new ol.geom.Circle([5e6,7e6],1e6)));var a=[t,l,r,new ol.layer.Vector({source:s,style:function(e){return i[e.getGeometry().getType()]}})],y=a[0],c=new ol.Map({layers:[y],target:"map",view:new ol.View({center:[0,0],zoom:2})}),w=new olcs.OLCesium({map:c}),u=!0;w.setEnabled(u),document.querySelector("#toggle").addEventListener("click",function(){u=!u,w.setEnabled(u)});var p=document.querySelectorAll('input[type=radio][name="layer"]');Array.prototype.forEach.call(p,function(e){e.addEventListener("change",function(e){y&&c.removeLayer(y),(y=a[parseInt(e.target.value,10)])&&c.addLayer(y)})})}},[[22,0]]]);
//# sourceMappingURL=ol-cesium-layers.js.map