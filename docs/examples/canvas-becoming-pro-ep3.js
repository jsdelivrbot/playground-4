(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{4:function(i,t){var n=document.querySelector("canvas");n.width=window.innerWidth,n.height=window.innerHeight;var h=n.getContext("2d"),r=function(i,t,n,h,r){this.x=i,this.y=t,this.dx=n,this.dy=h,this.radius=r};r.prototype.draw=function(){h.beginPath(),h.arc(this.x,this.y,this.radius,0,2*Math.PI,!1),h.strokeStyle="blue",h.stroke()},r.prototype.update=function(){(this.x+this.radius>window.innerWidth||this.x-this.radius<0)&&(this.dx*=-1),(this.y+this.radius>window.innerHeight||this.y-this.radius<0)&&(this.dy*=-1),this.x+=this.dx,this.y+=this.dy,this.draw()};for(var d=[],e=0;e<100;e++){var s=Math.random()*(window.innerWidth-60)+30,o=10*(Math.random()-.5),a=Math.random()*(window.innerHeight-60)+30,w=10*(Math.random()-.5);d.push(new r(s,a,o,w,30))}!function i(){h.clearRect(0,0,window.innerWidth,window.innerHeight),d.forEach(function(i){return i.update()}),requestAnimationFrame(i)}()}},[[4,0]]]);
//# sourceMappingURL=canvas-becoming-pro-ep3.js.map