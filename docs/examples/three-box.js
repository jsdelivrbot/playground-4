(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{2:function(t,i,e){"use strict";var h=function(t,i){t&&(i=Object.assign({width:300,height:300,ratio:1,images:[]},i),this.container=t,this.width=i.width,this.height=i.height,this.ratio=i.ratio,this.images=i.images,this.init(),this.animate())};h.prototype.init=function(){this.container.width===this.width&&this.container.width===this.height||(this.container.width=this.width,this.container.height=this.height),this.camera=new THREE.PerspectiveCamera(45,this.width/this.height,.1,1e3),this.camera.position.x=0,this.camera.position.y=12,this.camera.position.z=28,this.camera.lookAt(new THREE.Vector3(0,0,0)),this.scene=new THREE.Scene;var t=new THREE.AmbientLight(1315860);this.scene.add(t);var i=new THREE.DirectionalLight;i.position.set(0,30,20),this.scene.add(i),this.cube=this.createMesh(new THREE.BoxGeometry(10,10,10),this.images),this.scene.add(this.cube),console.log(this.cube.geometry.faceVertexUvs),this.renderer=new THREE.WebGLRenderer({canvas:this.container,alpha:!0}),this.renderer.setClearColor(new THREE.Color(268435455,0)),this.renderer.setPixelRatio(this.ratio),this.renderer.shadowMapEnabled=!0},h.prototype.createMesh=function(t,i){var e,h=this;return e=6===i.length?new THREE.MeshFaceMaterial(i.map(function(t){return h.createMaterial(t)})):this.createMaterial(i[0]),new THREE.Mesh(t,e)},h.prototype.createMaterial=function(t){var i;i="string"==typeof t?(new THREE.TextureLoader).load(t):new THREE.CanvasTexture(t);var e=new THREE.MeshPhongMaterial;return e.map=i,e},h.prototype.animate=function(){requestAnimationFrame(this.animate.bind(this)),this.render()},h.prototype.render=function(){var t=.001*Date.now();this.cube.rotation.x=.25*t,this.cube.rotation.y=.5*t,this.renderer.render(this.scene,this.camera)},h.prototype.resize=function(t,i){this.width=t,this.height=i,this.container.width===this.width&&this.container.width===this.height||(this.container.width=this.width,this.container.height=this.height),this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height)},i.a=h},34:function(t,i,e){"use strict";e.r(i);var h=e(2),a=document.getElementById("container"),n=a.clientWidth,s=a.clientHeight,r=document.getElementById("canvas");new h.a(r,{width:n,height:s,ratio:window.devicePixelRatio,images:["data/img/iu/iu01.jpg","data/img/iu/iu02.jpg","data/img/iu/iu03.jpg","data/img/iu/iu04.jpg","data/img/iu/iu05.jpg","data/img/iu/iu06.jpg"]})}},[[34,0]]]);
//# sourceMappingURL=three-box.js.map