(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{45:function(e,r){var t=null,n=null,a=null,i=null,o=null,l=null,u=null,c=null,A=null,f=null,m=mat4.create(),R=mat4.create(),d=0;function E(e,r){var n=t.createShader(r);return t.shaderSource(n,e),t.compileShader(n),t.getShaderParameter(n,t.COMPILE_STATUS)||alert("Error compiling shader: "+t.getShaderInfoLog(n)),n}window.addEventListener("load",function(){n=document.querySelector("#canvas"),container=document.querySelector("#container"),n.width=container.clientWidth,n.height=container.clientHeight;try{t=n.getContext("webgl")||n.getContext("experimental-webgl")}catch(e){}t&&(!function(){var e="\n    attribute vec3 aVertexPosition;\n    attribute vec3 aVertexColor;\n\n    uniform mat4 uPMatrix;    \n    uniform mat4 uMVMatrix;\n    \n    varying highp vec4 vColor;\n    \n    void main(void) {\n      gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);\n      vColor = vec4(aVertexColor, 1.0);\n    }\n  ",r="\n    varying highp vec4 vColor;\n    \n    void main(void) {\n      gl_FragColor = vColor;\n    }\n  ";o=E(e,t.VERTEX_SHADER),i=E(r,t.FRAGMENT_SHADER),a=t.createProgram(),t.attachShader(a,o),t.attachShader(a,i),t.linkProgram(a),t.getProgramParameter(a,t.LINK_STATUS)||alert("Unable to initialize the shader program.");t.useProgram(a)}(),function(){A=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,A),t.bufferData(t.ARRAY_BUFFER,new Float32Array([0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1]),t.STATIC_DRAW);u=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,u),t.bufferData(t.ARRAY_BUFFER,new Float32Array([0,0,0,1,0,0,2,0,0,.5,1,0,1.5,1,0,1,2,0,0,0,-2,1,0,-2,2,0,-2,.5,1,-2,1.5,1,-2,1,2,-2]),t.STATIC_DRAW);var e=[0,1,3,1,3,4,1,2,4,3,4,5,6,7,9,7,9,10,7,8,10,9,10,11,0,3,6,3,6,9,3,5,9,5,9,11,2,4,8,4,8,10,4,5,10,5,10,11,0,6,8,8,2,0];(f=t.createBuffer()).numberVertexPoints=e.length,t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,f),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array(e),t.STATIC_DRAW)}(),a.pMatrixUniform=t.getUniformLocation(a,"uPMatrix"),a.mvMatrixUniform=t.getUniformLocation(a,"uMVMatrix"),function e(){t.clearColor(.1,.5,.1,1),t.clear(t.COLOR_BUFFER_BIT),t.enable(t.DEPTH_TEST),t.viewport(0,0,n.width,n.height),mat4.perspective(m,45,n.width/n.height,.1,100),mat4.identity(R),mat4.translate(R,R,[-1,-1,-7]),mat4.rotate(R,R,d,[0,1,0]),d+=.01,t.uniformMatrix4fv(a.pMatrixUniform,!1,m),t.uniformMatrix4fv(a.mvMatrixUniform,!1,R),l=t.getAttribLocation(a,"aVertexPosition"),t.enableVertexAttribArray(l),t.bindBuffer(t.ARRAY_BUFFER,u),t.vertexAttribPointer(l,3,t.FLOAT,!1,0,0),c=t.getAttribLocation(a,"aVertexColor"),t.enableVertexAttribArray(c),t.bindBuffer(t.ARRAY_BUFFER,A),t.vertexAttribPointer(c,3,t.FLOAT,!1,0,0),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,f),t.drawElements(t.TRIANGLES,f.numberVertexPoints,t.UNSIGNED_SHORT,0),requestAnimationFrame(e)}())})}},[[45,0]]]);
//# sourceMappingURL=webgl-triangular-prism.js.map