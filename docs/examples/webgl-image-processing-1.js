(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{51:function(e,t){var r=null,n=null,i=null,o=null,a=null,l=null,E=null,u=null,h=null,f=null,c=null,T=0,g=1,R=2,_=3,m=null;function d(e,t){var n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),r.getShaderParameter(n,r.COMPILE_STATUS)||alert("Error compiling shader: "+r.getShaderInfoLog(n)),n}function A(){r.bindBuffer(r.ARRAY_BUFFER,u),r.vertexAttribPointer(E,3,r.FLOAT,!1,0,0),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,h),r.drawElements(r.TRIANGLES,h.numItems,r.UNSIGNED_SHORT,0)}window.addEventListener("load",function(){n=document.querySelector("#canvas"),i=document.querySelector("#container"),n.width=i.clientWidth,n.height=i.clientHeight;try{r=n.getContext("webgl")||n.getContext("experimental-webgl")}catch(e){console.error(e)}r&&(!function(){var e="\n    attribute vec3 aVertexPosition;\n    \n    varying vec2 position;\n    void main(void) {\n      position = vec2(aVertexPosition.xy);\n      gl_Position = vec4(position, 0.0, 1.0);\n    }\n  ",t="\n    varying highp vec2 position;\n    uniform sampler2D uSampler;\n    uniform int uEffect;\n    \n    void main(void) {\n      //convert texture coordinates from [-1, 1] to [0, 1]\n      highp vec2 texCoords = position * 0.5 + .5;\n      \n      highp vec4 texColor = texture2D( uSampler, vec2(texCoords.s, texCoords.t) );\n      highp vec4 finalColor;\n      \n      if(uEffect == 0){\n        finalColor = texColor;\n      }else if(uEffect == 1){\n        finalColor = vec4( vec3(1.0, 1.0, 1.0) - texColor.rgb, 1.0 );\n      }else if(uEffect == 2){\n        highp float gray = (texColor.r  + texColor.g + texColor.b)/3.0;\n        finalColor = vec4( gray, gray, gray, 1.0);\n      }else if(uEffect == 3){\n        texColor.rb *= 0.8;\n        finalColor = texColor;\n      }\n      \n      gl_FragColor = finalColor;  \n    }\n  ";l=d(e,r.VERTEX_SHADER),a=d(t,r.FRAGMENT_SHADER),o=r.createProgram(),r.attachShader(o,l),r.attachShader(o,a),r.linkProgram(o),r.getProgramParameter(o,r.LINK_STATUS)||alert("Unable to initialize the shader program.");r.useProgram(o)}(),function(e){void 0===e&&(e=2);var t=[0,0,0,.5*-e,.5*-e,0,.5*e,.5*-e,0,.5*e,.5*e,0,.5*-e,.5*e,0],n=[0,1,2,0,2,3,0,3,4,0,4,1];u=r.createBuffer(),r.bindBuffer(r.ARRAY_BUFFER,u),r.bufferData(r.ARRAY_BUFFER,new Float32Array(t),r.STATIC_DRAW),u.itemSize=3,u.numItems=t.length/3,h=r.createBuffer(),r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,h),r.bufferData(r.ELEMENT_ARRAY_BUFFER,new Uint16Array(n),r.STREAM_DRAW),h.itemSize=3,h.numItems=n.length}(),(c=new Image).src="data/img/iu/iu01.jpg",E=r.getAttribLocation(o,"aVertexPosition"),r.enableVertexAttribArray(E),m=r.getUniformLocation(o,"uEffect"),c.onload=function(){f=r.createTexture(),r.bindTexture(r.TEXTURE_2D,f),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!0),r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,c),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.uniform1i(o.samplerUniform,0),r.isTexture(f)||console.error("Error: Texture is invalid"),r.clearColor(.1,.1,.1,.1),r.clear(r.COLOR_BUFFER_BIT|r.DEPTH_BUFFER_BIT),r.enable(r.DEPTH_TEST),r.uniform1i(m,T),r.viewport(.5*n.width-.5*n.height,.5*n.height,.5*n.height,.5*n.height),A(),r.uniform1i(m,_),r.viewport(.5*n.width-.5*n.height,0,.5*n.height,.5*n.height),A(),r.uniform1i(m,g),r.viewport(.5*n.width,0,.5*n.height,.5*n.height),A(),r.uniform1i(m,R),r.viewport(.5*n.width,.5*n.height,.5*n.height,.5*n.height),A()})})}},[[51,0]]]);
//# sourceMappingURL=webgl-image-processing-1.js.map