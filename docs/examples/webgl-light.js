(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{47:function(n,i,t){"use strict";t.r(i);var e=function(n,i,t){void 0===n&&(n=0),void 0===i&&(i=0),void 0===t&&(t=0),this.x=n,this.y=i,this.z=t};e.prototype.divide=function(n){if("number"!=typeof n)throw new Error("invalid input: "+n);return this.x/=n,this.y/=n,this.z/=n,this},e.prototype.cross=function(n){var i=this.x,t=this.y,r=this.z;if(!(n instanceof e))throw new Error("invalid input: "+n);this.x=t*n.z-r*n.y,this.y=r*n.x-i*n.z,this.z=i*n.y-t*n.x},e.prototype.length=function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},e.prototype.normalize=function(){return this.divide(this.length())};var r=e;function o(n,i,t,e){for(var o=(e=Object.assign({},{color:[1,0,0,1],translation:[0,0,0],radius:1,division:30,smoothShading:!0,textured:!1},e)).color,a=e.translation,h=e.radius,l=e.division,g=e.smoothShading,v=e.textured,u=l,s=l,f=[],c=[],p=[],m=[],x=[],d=i.trianglesNormalBuffers,y=i.trianglesColorBuffers,M=i.trianglesVerticeBuffers,C=i.trianglesTexCoordBuffers,A=i.vertexIndexBuffers,P=0;P<=u;P++)for(var b=P*Math.PI/u,V=Math.sin(b),R=Math.cos(b),L=0;L<=s;L++){var S=2*L*Math.PI/s,N=Math.sin(S),B=Math.cos(S)*V,D=R,F=N*V;x.push(.5*(B+1)),x.push(.5*(D+1)),p.push(B),p.push(D),p.push(F),c.push(o[0]),c.push(o[1]),c.push(o[2]),c.push(o[3]),f.push(h*B+a[0]),f.push(h*D+a[1]),f.push(h*F+a[2])}for(var z=0;z<u;z++)for(var E=0;E<s;E++){var _=z*(s+1)+E,I=_+s+1;m.push(_),m.push(I),m.push(_+1),m.push(I),m.push(I+1),m.push(_+1)}if(!g){f=function(n,i){for(var t=[],e=0;e<i.length;++e){var r=3*i[e];t.push(n[r]),t.push(n[r+1]),t.push(n[r+2])}return t}(f,m),c=[];for(var T=0;T<m.length;++T)c.push(o[0]),c.push(o[1]),c.push(o[2]),c.push(o[3]);p=function(n,i){for(var t=[],e=0;e<i.length;e+=3){var o=3*i[e],a=3*i[e+1],h=3*i[e+2],l=new r(n[o],n[o+1],n[o+2]),g=new r(n[a],n[a+1],n[a+2]),v=new r(n[h],n[h+1],n[h+2]),u=(l.x+g.x+v.x)/3,s=(l.y+g.y+v.y)/3,f=(l.z+g.z+v.z)/3,c=new r(u,s,f);t.push(c.x),t.push(c.y),t.push(c.z),t.push(c.x),t.push(c.y),t.push(c.z),t.push(c.x),t.push(c.y),t.push(c.z)}return t}(p,m)}d[t]=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,d[t]),n.bufferData(n.ARRAY_BUFFER,new Float32Array(p),n.STATIC_DRAW),d[t].itemSize=3,d[t].numItems=p.length/3,y[t]=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,y[t]),n.bufferData(n.ARRAY_BUFFER,new Float32Array(c),n.STATIC_DRAW),y[t].itemSize=4,y[t].numItems=c.length/4,M[t]=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,M[t]),n.bufferData(n.ARRAY_BUFFER,new Float32Array(f),n.STATIC_DRAW),M[t].itemSize=3,M[t].numItems=f.length/3,v&&(C[t]=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,C[t]),n.bufferData(n.ARRAY_BUFFER,new Float32Array(x),n.STATIC_DRAW),C[t].itemSize=2,C[t].numItems=x.length/2),A[t]=n.createBuffer(),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,A[t]),n.bufferData(n.ELEMENT_ARRAY_BUFFER,new Uint16Array(m),n.STREAM_DRAW),A[t].itemSize=3,A[t].numItems=m.length}var a=null,h=null,l=null,g=null,v=null,u=null,s=null,f=null,c=null,p=[],m=[],x=[],d=[],y=mat4.create(),M=mat4.create(),C=mat3.create(),A=0,P=!1,b={flat:{vertexShader:"\n    attribute vec3 aVertexPosition;\n    attribute vec3 aVertexColor;\n    attribute vec3 aVertexNormal;\n\n    uniform mat4 uPMatrix;    \n    uniform mat4 uMVMatrix;\n    uniform mat3 uNormalMatrix;\n    \n    varying highp vec3 vColor;\n    varying highp vec3 L;\n    varying highp vec3 N;\n    \n    void main(void) {\n      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n      \n      vec3 pointLightPosition = vec3(1.0, 2.0, -1.0);\n      vec3 pointLightDirection = normalize(vec3(pointLightPosition.xyz - aVertexPosition.xyz));\n      vec3 ambientColor = vec3(0.1, 0.1, 0.1);\n      \n      L = vec3(uPMatrix * uMVMatrix * vec4(pointLightDirection, 1.0));\n      N = uNormalMatrix * aVertexNormal;\n      \n      vColor = aVertexColor;\n    }\n  ",fragmentShader:"\n    varying highp vec3 vColor;\n    varying highp vec3 N;\n    varying highp vec3 L;\n    \n    void main(void) {\n      highp float lambert = max(dot(normalize(N), normalize(L)), 0.0);\n      gl_FragColor = vec4(vColor * lambert, 1.0);\n    }\n  "},phong:{vertexShader:"\n    attribute vec3 aVertexPosition;\n    attribute vec3 aVertexColor;\n    attribute vec3 aVertexNormal;\n\n    uniform highp mat4 uPMatrix;    \n    uniform highp mat4 uMVMatrix;\n    uniform highp mat3 uNormalMatrix;\n    \n    varying highp vec3 vColor;\n    varying highp vec3 vPosition;\n    varying highp vec3 N;\n    \n    void main(void) {\n      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n      \n      vColor = aVertexColor;\n      vPosition = aVertexPosition;\n      N = aVertexNormal;\n    }\n  ",fragmentShader:"\n    uniform highp mat4 uPMatrix;\n    uniform highp mat4 uMVMatrix;\n    uniform highp mat3 uNormalMatrix;\n    \n    varying highp vec3 vColor;\n    varying highp vec3 vPosition;\n    varying highp vec3 N;\n    \n    void main(void) {\n      highp vec3 n = uNormalMatrix * N;\n      \n      highp vec3 pointLightPosition = vec3(1.0, 2.0, -1.0);\n      highp vec3 pointLightDirection = normalize(vec3(pointLightPosition.xyz - vPosition.xyz));\n      \n      highp vec3 L = vec3(uPMatrix * uMVMatrix * vec4(pointLightDirection, 1.0));\n      \n      highp float lambert = max(dot(normalize(n), normalize(L)), 0.0);\n      gl_FragColor = vec4(vColor * lambert, 1.0);\n    }\n  "},gouraud_phong:{vertexShader:"\n    attribute vec3 aVertexPosition;\n    attribute vec3 aVertexColor;\n    attribute vec3 aVertexNormal;\n\n    uniform highp mat4 uPMatrix;    \n    uniform highp mat4 uMVMatrix;\n    uniform highp mat3 uNormalMatrix;\n    \n    varying highp vec3 vColor;\n    varying highp float diffuseLambert;\n    varying highp float specular;\n    \n    void main(void) {\n      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n      vColor = aVertexColor;\n      \n      vec3 pointLightPosition = vec3(1.0, 2.0, -1.0);\n      vec3 pointLightDirection = vec3(pointLightPosition.xyz - aVertexPosition.xyz);\n      \n      vec3 L = vec3(uPMatrix * uMVMatrix * vec4(pointLightDirection, 1.0));\n      vec3 N = normalize(uNormalMatrix * aVertexNormal);\n      vec3 V = -vec3(uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0));\n      \n      L = normalize(L);\n      V = normalize(V); \n      \n      vec3 R = reflect(-L, N);\n      float shininess = 128.0;\n      \n      specular = pow(max(0.0, dot(R, V)), shininess);\n      diffuseLambert = dot(L, N);\n    }\n  ",fragmentShader:" \n    varying highp vec3 vColor;\n    varying highp float diffuseLambert;\n    varying highp float specular;\n    \n    void main(void) {\n      highp float AmbientIntensity = 0.3;\n      highp vec3 DiffuseLightIntensity = vec3(0.9, 0.9, 0.9);\n      highp float SpecularIntensity = 0.5;\n      \n      highp vec3 AmbientColour = vec3(0.1, 0.1, 0.1);\n      highp vec3 DiffuseMaterialColour = vColor;\n      highp vec3 SpecularColour = vec3(1.0, 1.0, 1.0);\n      \n      gl_FragColor = vec4(AmbientColour * AmbientIntensity +\n        diffuseLambert * DiffuseMaterialColour * DiffuseLightIntensity +\n        SpecularColour * specular * SpecularIntensity, 1.0);\n    }\n  "},phong_phong:{vertexShader:"\n    attribute vec3 aVertexPosition;\n    attribute vec3 aVertexColor;\n    attribute vec3 aVertexNormal;\n\n    uniform highp mat4 uPMatrix;    \n    uniform highp mat4 uMVMatrix;\n    \n    varying highp vec3 vColor;\n    varying highp vec3 vPosition;\n    varying highp vec3 N;\n    \n    void main(void) {\n      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n      \n      vColor = aVertexColor;\n      vPosition = aVertexPosition;\n      N = aVertexNormal;\n    }\n  ",fragmentShader:" \n    uniform highp mat4 uPMatrix;\n    uniform highp mat4 uMVMatrix;\n    uniform highp mat3 uNormalMatrix;\n\n    varying highp vec3 vColor;\n    varying highp vec3 vPosition;\n    varying highp vec3 N;\n\n    void main(void) {\n      highp vec3 pointLightPosition = vec3(5.0, 1.0, 5.0);\n\n      highp vec3 pointLightDirection = vec3(pointLightPosition.xyz - vPosition.xyz);\n      \n      highp mat4 mvp = uPMatrix * uMVMatrix;\n\n      highp vec3 L = vec3(mvp * vec4(pointLightDirection, 1.0));\n      highp vec3 V = -vec3(mvp * vec4(vPosition,1.0));\n\n      highp vec3 l = normalize(L);\n      highp vec3 n = normalize(uNormalMatrix * N);\n      highp vec3 v = normalize(V);\n      \n      highp vec3 R = reflect(l, n);\n\n      highp float diffuseLambert = dot(l,n);\n      highp float Roughness = 1.0;\n      highp float AmbientIntensity = 0.3;\n      highp vec3 DiffuseLightIntensity = vec3(0.9, 0.9, 0.9);\n      highp float SpecularIntensity = 0.5;\n      highp float shininess = 128.0;\n\n      highp float specular = pow( max(0.0,dot(R,v)), shininess);\n\n      highp vec3 AmbientColour = vec3(0.1, 0.1, 0.1);\n      highp vec3 DiffuseMaterialColour = vColor.xyz;\n      highp vec3 SpecularColour = vec3(1.0, 1.0, 1.0);\n    \n      gl_FragColor = vec4(AmbientColour*AmbientIntensity + \n        diffuseLambert * DiffuseMaterialColour*DiffuseLightIntensity +\n        SpecularColour * specular*SpecularIntensity, 1.0);\n    }\n  "},attenuation:{vertexShader:"\n    attribute vec3 aVertexPosition;\n    attribute vec3 aVertexColor;\n    attribute vec3 aVertexNormal;\n\n    uniform highp mat4 uPMatrix;    \n    uniform highp mat4 uMVMatrix;\n    \n    varying highp vec3 vColor;\n    varying highp vec3 vPosition;\n    varying highp vec3 N;\n    \n    void main(void) {\n      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n      \n      vColor = aVertexColor;\n      vPosition = aVertexPosition;\n      N = aVertexNormal;\n    }\n  ",fragmentShader:" \n    uniform highp mat4 uPMatrix;\n    uniform highp mat4 uMVMatrix;\n    uniform highp mat3 uNormalMatrix;\n\n    varying highp vec3 vColor;\n    varying highp vec3 vPosition;\n    varying highp vec3 N;\n\n    void main(void) {\n      highp vec3 pointLightPosition = vec3(5.0, 1.0, 5.0);\n\n      highp vec3 pointLightDirection = vec3(pointLightPosition.xyz - vPosition.xyz);\n      highp float d = length(pointLightDirection);\n      highp float attenuation = 1.0/(.01 + .01*d+.02*d*d);\n      \n      highp mat4 mvp = uPMatrix * uMVMatrix;\n\n      highp vec3 L = vec3(mvp * vec4(pointLightDirection, 1.0));\n      highp vec3 V = -vec3(mvp * vec4(vPosition,1.0));\n\n      highp vec3 l = normalize(L);\n      highp vec3 n = normalize(uNormalMatrix * N);\n      highp vec3 v = normalize(V);\n      \n      highp vec3 R = reflect(l, n);\n\n      highp float diffuseLambert = dot(l,n);\n      highp float Roughness = 1.0;\n      highp float AmbientIntensity = 0.3;\n      highp vec3 DiffuseLightIntensity = vec3(0.9, 0.9, 0.9);\n      highp float SpecularIntensity = 0.5;\n      highp float shininess = 128.0;\n\n      highp float specular = pow(max(0.0,dot(R,v)), shininess);\n\n      highp vec3 AmbientColour = vec3(0.1, 0.1, 0.1) * attenuation;\n      highp vec3 DiffuseMaterialColour = vColor.xyz * attenuation;\n      highp vec3 SpecularColour = vec3(1.0, 1.0, 1.0) * attenuation;\n    \n      gl_FragColor = vec4(AmbientColour*AmbientIntensity + \n        diffuseLambert * DiffuseMaterialColour*DiffuseLightIntensity +\n        SpecularColour * specular*SpecularIntensity, 1.0);\n    }\n  "},spotlight:{vertexShader:"\n    attribute vec3 aVertexPosition;\n    attribute vec3 aVertexColor;\n    attribute vec3 aVertexNormal;\n\n    uniform highp mat4 uPMatrix;    \n    uniform highp mat4 uMVMatrix;\n    \n    varying highp vec3 vColor;\n    varying highp vec3 vPosition;\n    varying highp vec3 N;\n    \n    void main(void) {\n      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n      \n      vColor = aVertexColor;\n      vPosition = aVertexPosition;\n      N = aVertexNormal;\n    }\n  ",fragmentShader:" \n    uniform highp mat4 uPMatrix;\n    uniform highp mat4 uMVMatrix;\n    uniform highp mat3 uNormalMatrix;\n\n    varying highp vec3 vColor;\n    varying highp vec3 vPosition;\n    varying highp vec3 N;\n\n    void main(void) {\n      highp vec3 pointLightPosition = vec3(5.0, 1.0, 5.0);\n\n      highp vec3 pointLightDirection = vec3(pointLightPosition.xyz - vPosition.xyz);\n      highp float d = length(pointLightDirection);\n      highp float attenuation = 1.0/(.01 + .01*d + .02*d*d);\n      \n      highp mat4 mvp = uPMatrix * uMVMatrix;\n\n      highp vec3 L = vec3(mvp * vec4(pointLightDirection, 1.0));\n      highp vec3 V = -vec3(mvp * vec4(vPosition,1.0));\n\n      highp vec3 l = normalize(L);\n      highp vec3 n = normalize(uNormalMatrix * N);\n      highp vec3 v = normalize(V);\n      \n      highp vec3 R = reflect(l, n);\n\n      highp float diffuseLambert = dot(l,n);\n      \n      // spotlight\n      highp float spotCosCutoff = 0.6;\n      highp float spotExponent = 2.0;\n      highp vec3 spotDirection = vec3(0.5, 0.5, 0.5);\n      highp float spotEffect = dot(normalize(spotDirection), l);\n      \n      if (diffuseLambert > 0.0) {\n        if(spotEffect > spotCosCutoff) {\n          highp float Roughness = 1.0;\n          highp float AmbientIntensity = 0.3;\n          highp vec3 DiffuseLightIntensity = vec3(0.9, 0.9, 0.9);\n          highp float SpecularIntensity = 0.5;\n          highp float shininess = 32.0;\n\n          highp float specular = pow(max(0.0,dot(R,v)), shininess);\n\n          highp vec3 AmbientColour = vec3(0.1, 0.1, 0.1) * attenuation;\n          highp vec3 DiffuseMaterialColour = vColor.xyz * attenuation;\n          highp vec3 SpecularColour = vec3(1.0, 1.0, 1.0) * attenuation;\n    \n          gl_FragColor = vec4(AmbientColour*AmbientIntensity + \n            diffuseLambert * DiffuseMaterialColour*DiffuseLightIntensity +\n            SpecularColour * specular*SpecularIntensity, 1.0);\n        } else {\n          gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n        }\n      } else {\n        gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);\n      }\n    } \n  "},fog:{vertexShader:"\n    attribute vec3 aVertexPosition;\n    attribute vec3 aVertexColor;\n    attribute vec3 aVertexNormal;\n\n    uniform highp mat4 uPMatrix;    \n    uniform highp mat4 uMVMatrix;\n    \n    varying highp vec3 vColor;\n    varying highp vec3 vPosition;\n    varying highp vec3 N;\n    varying highp float fogZ;\n    \n    void main(void) {\n      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n      \n      vColor = aVertexColor;\n      vPosition = aVertexPosition;\n      N = aVertexNormal;\n      fogZ = length(gl_Position.xyz);\n    }\n  ",fragmentShader:" \n    uniform highp mat4 uPMatrix;\n    uniform highp mat4 uMVMatrix;\n    uniform highp mat3 uNormalMatrix;\n\n    varying highp vec3 vColor;\n    varying highp vec3 vPosition;\n    varying highp vec3 N;\n    varying highp float fogZ;\n\n    void main(void) {\n      highp vec3 pointLightPosition = vec3(5.0, 1.0, 5.0);\n\n      highp vec3 pointLightDirection = vec3(pointLightPosition.xyz - vPosition.xyz);\n      highp float d = length(pointLightDirection);\n      highp float attenuation = 68.0/(.31 + .01*d+.22*d*d);\n      \n      highp mat4 mvp = uPMatrix * uMVMatrix;\n\n      highp vec3 L = vec3(mvp * vec4(pointLightDirection, 1.0));\n      highp vec3 V = -vec3(mvp * vec4(vPosition,1.0));\n\n      highp vec3 l = normalize(L);\n      highp vec3 n = normalize(uNormalMatrix * N);\n      highp vec3 v = normalize(V);\n      \n      highp vec3 R = reflect(l, n);\n\n      highp float diffuseLambert = dot(l,n);\n      highp float Roughness = 1.0;\n      highp float AmbientIntensity = 0.75;\n      highp vec3 DiffuseLightIntensity = vec3(0.9, 0.9, 0.9);\n      highp float SpecularIntensity = 0.8;\n      highp float shininess = 128.0;\n\n      highp float specular = pow(max(0.0,dot(R,v)), shininess);\n\n      highp vec3 AmbientColour = vec3(0.1, 0.1, 0.1) * attenuation;\n      highp vec3 DiffuseMaterialColour = vColor.xyz * attenuation;\n      highp vec3 SpecularColour = vec3(1.0, 1.0, 1.0) * attenuation;\n      \n      // calculate fog\n      highp float fogDensity = 0.25;\n      highp vec4 fogColor = vec4(0.1, 0.2, 0.1, 0.6);\n      \n      highp float fogFactor = exp(-fogDensity * fogDensity * fogZ * fogZ);\n      fogFactor = clamp(fogFactor, 0.0, 1.0);\n    \n      highp vec4 materialColor = vec4(AmbientColour*AmbientIntensity + \n        diffuseLambert * DiffuseMaterialColour*DiffuseLightIntensity +\n        SpecularColour * specular*SpecularIntensity, 1.0);\n      \n      gl_FragColor = mix(fogColor, materialColor, fogFactor);\n    }\n  "},fog_spotlight:{vertexShader:"\n    attribute vec3 aVertexPosition;\n    attribute vec3 aVertexColor;\n    attribute vec3 aVertexNormal;\n\n    uniform highp mat4 uPMatrix;    \n    uniform highp mat4 uMVMatrix;\n    \n    varying highp vec3 vColor;\n    varying highp vec3 vPosition;\n    varying highp vec3 N;\n    varying highp float fogZ;\n    \n    void main(void) {\n      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n      \n      vColor = aVertexColor;\n      vPosition = aVertexPosition;\n      N = aVertexNormal;\n      fogZ = length(gl_Position.xyz);\n    }\n  ",fragmentShader:" \n    uniform highp mat4 uPMatrix;\n    uniform highp mat4 uMVMatrix;\n    uniform highp mat3 uNormalMatrix;\n\n    varying highp vec3 vColor;\n    varying highp vec3 vPosition;\n    varying highp vec3 N;\n    varying highp float fogZ;\n\n    void main(void) {\n      highp vec3 pointLightPosition = vec3(5.0, 1.0, 5.0);\n\n      highp vec3 pointLightDirection = vec3(pointLightPosition.xyz - vPosition.xyz);\n      highp float d = length(pointLightDirection);\n      highp float attenuation = 1.0/(.01 + .01*d + .02*d*d);\n      \n      highp mat4 mvp = uPMatrix * uMVMatrix;\n\n      highp vec3 L = vec3(mvp * vec4(pointLightDirection, 1.0));\n      highp vec3 V = -vec3(mvp * vec4(vPosition,1.0));\n\n      highp vec3 l = normalize(L);\n      highp vec3 n = normalize(uNormalMatrix * N);\n      highp vec3 v = normalize(V);\n      \n      highp vec3 R = reflect(l, n);\n\n      highp float diffuseLambert = dot(l,n);\n      \n      // spotlight\n      highp float spotCosCutoff = 0.6;\n      highp float spotExponent = 2.0;\n      highp vec3 spotDirection = vec3(0.5, 0.5, 0.5);\n      highp float spotEffect = dot(normalize(spotDirection), l);\n      \n      // calculate fog\n      highp float fogDensity = 0.075;\n      highp vec4 fogColor = vec4(0.1, 0.2, 0.1, 0.6);\n      \n      highp float fogFactor = exp(-fogDensity * fogDensity * fogZ * fogZ);\n      fogFactor = clamp(fogFactor, 0.0, 1.0);\n      \n      highp vec4 materialColor = vec4(0.0, 0.0, 0.0, 1.0);\n      \n      if (diffuseLambert > 0.0) {\n        if(spotEffect > spotCosCutoff) {\n          highp float Roughness = 1.0;\n          highp float AmbientIntensity = 0.3;\n          highp vec3 DiffuseLightIntensity = vec3(0.9, 0.9, 0.9);\n          highp float SpecularIntensity = 0.5;\n          highp float shininess = 32.0;\n\n          highp float specular = pow( max(0.0,dot(R,v)), shininess);\n\n          highp vec3 AmbientColour = vec3(0.1, 0.1, 0.1) * attenuation;\n          highp vec3 DiffuseMaterialColour = vColor.xyz * attenuation;\n          highp vec3 SpecularColour = vec3(1.0, 1.0, 1.0) * attenuation;\n    \n          materialColor = vec4(AmbientColour*AmbientIntensity + \n            diffuseLambert * DiffuseMaterialColour*DiffuseLightIntensity +\n            SpecularColour * specular*SpecularIntensity, 1.0);\n        } \n      }\n      \n      gl_FragColor = mix(fogColor, materialColor, fogFactor); \n    } \n  "}},V=document.querySelectorAll('input[type=radio][name="light"]');function R(){a.deleteProgram(g),L(this.value)}function L(n){(function(n,i){var t=b[i].vertexShader,e=b[i].fragmentShader;u=S(t,a.VERTEX_SHADER),v=S(e,a.FRAGMENT_SHADER),a.attachShader(n,u),a.attachShader(n,v),a.linkProgram(n),a.getProgramParameter(n,a.LINK_STATUS)||alert("Unable to initialize the shader program.")})(g=a.createProgram(),n),a.useProgram(g),g.pMatrixUniform=a.getUniformLocation(g,"uPMatrix"),g.mvMatrixUniform=a.getUniformLocation(g,"uMVMatrix"),g.normalMatrixUniform=a.getUniformLocation(g,"uNormalMatrix")}function S(n,i){var t=a.createShader(i);return a.shaderSource(t,n),a.compileShader(t),a.getShaderParameter(t,a.COMPILE_STATUS)||alert("Error compiling shader: "+a.getShaderInfoLog(t)),t}window.addEventListener("load",function(){h=document.querySelector("#canvas"),l=document.querySelector("#container"),h.width=l.clientWidth,h.height=l.clientHeight;try{a=h.getContext("webgl")||h.getContext("experimental-webgl")}catch(n){console.error(n)}a&&(L("flat"),o(a,{trianglesNormalBuffers:m,trianglesColorBuffers:x,trianglesVerticeBuffers:p,vertexIndexBuffers:d},0,{translation:[-1,-.75,0],color:[1,0,0,1],division:20,smoothShading:!1}),o(a,{trianglesNormalBuffers:m,trianglesColorBuffers:x,trianglesVerticeBuffers:p,vertexIndexBuffers:d},1,{translation:[0,0,1],color:[0,1,0,1],division:10,smoothShading:!1}),o(a,{trianglesNormalBuffers:m,trianglesColorBuffers:x,trianglesVerticeBuffers:p,vertexIndexBuffers:d},2,{translation:[1,.25,-1],color:[1,1,0,1],division:5,smoothShading:!1}),o(a,{trianglesNormalBuffers:m,trianglesColorBuffers:x,trianglesVerticeBuffers:p,vertexIndexBuffers:d},3,{translation:[-1,1,-1],color:[1,0,1,1]}),o(a,{trianglesNormalBuffers:m,trianglesColorBuffers:x,trianglesVerticeBuffers:p,vertexIndexBuffers:d},4,{translation:[-0,1.75,-0],color:[0,1,1,1]}),function(n,i,t,e){for(var r,o,a,h=(e=Object.assign({},{size:10,color:[.5,.5,1,1],translation:[0,0,0],textured:!1},e)).size,l=e.color,g=e.translation,v=e.textured,u=[],s=[],f=i.trianglesNormalBuffers,c=i.trianglesColorBuffers,p=i.trianglesVerticeBuffers,m=i.trianglesTexCoordBuffers,x=i.vertexIndexBuffers,d=0;d<5;++d)u.push(0),u.push(1),u.push(0),s.push(l[0]),s.push(l[1]),s.push(l[2]),s.push(l[3]);r=[0,0,0,-h,0,-h,h,0,-h,h,0,h,-h,0,h],a=[0,0,-h,-h,h,-h,h,h,-h,h];for(var y=0;y<r.length;y+=3)r[y]+=g[0],r[y+1]+=g[1],r[y+2]+=g[2];o=[0,1,2,0,2,3,0,3,4,0,4,1],f[t]=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,f[t]),n.bufferData(n.ARRAY_BUFFER,new Float32Array(u),n.STATIC_DRAW),f[t].itemSize=3,f[t].numItems=u.length/3,c[t]=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,c[t]),n.bufferData(n.ARRAY_BUFFER,new Float32Array(s),n.STATIC_DRAW),c[t].itemSize=4,c[t].numItems=s.length/4,p[t]=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,p[t]),n.bufferData(n.ARRAY_BUFFER,new Float32Array(r),n.STATIC_DRAW),p[t].itemSize=3,p[t].numItems=r.length/3,v&&(m[t]=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,m[t]),n.bufferData(n.ARRAY_BUFFER,new Float32Array(a),n.STATIC_DRAW),m[t].itemSize=2,m[t].numItems=a.length/2),x[t]=n.createBuffer(),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,x[t]),n.bufferData(n.ELEMENT_ARRAY_BUFFER,new Uint16Array(o),n.STREAM_DRAW),x[t].itemSize=3,x[t].numItems=o.length}(a,{trianglesNormalBuffers:m,trianglesColorBuffers:x,trianglesVerticeBuffers:p,vertexIndexBuffers:d},5,{translation:[0,-1,0]}),s=a.getAttribLocation(g,"aVertexPosition"),c=a.getAttribLocation(g,"aVertexColor"),f=a.getAttribLocation(g,"aVertexNormal"),a.enableVertexAttribArray(s),a.enableVertexAttribArray(c),a.enableVertexAttribArray(f),function n(){P||(a.clearColor(.7,.7,.7,1),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),a.enable(a.DEPTH_TEST),a.viewport(0,0,h.width,h.height),mat4.perspective(y,45,h.width/h.height,.1,100),function(){mat4.identity(M),mat4.translate(M,M,[0,.4,-6.5]),mat4.rotate(M,M,-.3,[-.3,0,.2]),mat4.rotate(M,M,A,[0,1,0]);var n=mat3.create();mat3.fromMat4(n,M),mat3.invert(C,n),mat3.transpose(C,C),A+=.005,a.uniformMatrix4fv(g.pMatrixUniform,!1,y),a.uniformMatrix4fv(g.mvMatrixUniform,!1,M),a.uniformMatrix3fv(g.normalMatrixUniform,!1,C);for(var i=0;i<d.length;++i)a.bindBuffer(a.ARRAY_BUFFER,p[i]),a.vertexAttribPointer(s,3,a.FLOAT,!1,0,0),a.bindBuffer(a.ARRAY_BUFFER,x[i]),a.vertexAttribPointer(c,4,a.FLOAT,!1,0,0),a.bindBuffer(a.ARRAY_BUFFER,m[i]),a.vertexAttribPointer(f,3,a.FLOAT,!1,0,0),4===i?(a.disable(a.DEPTH_TEST),a.enable(a.BLEND),a.blendFunc(a.SRC_ALPHA,a.ONE),a.blendEquation(a.FUNC_ADD)):(a.disable(a.BLEND),a.enable(a.DEPTH_TEST)),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,d[i]),i>2?a.drawElements(a.TRIANGLES,d[i].numItems,a.UNSIGNED_SHORT,0):a.drawArrays(a.TRIANGLES,0,p[i].numItems)}()),requestAnimationFrame(n)}())}),document.addEventListener("keyup",function(n){switch(n.keyCode){case 80:P=!P}}),Array.prototype.forEach.call(V,function(n){n.addEventListener("change",R)})}},[[47,0]]]);
//# sourceMappingURL=webgl-light.js.map