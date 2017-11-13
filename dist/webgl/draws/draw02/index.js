/*global WebGLTools, WebGLDebugUtils, mat4*/
(function() {
  var gl;
  var canvas;
  var shaderProgram;
  var hexagonVertexBuffer;
  var triangleVertexBuffer;
  var triangleVertexColorBuffer;
  var stripVertexBuffer;
  var stripElementBuffer;

  function setupShaders() {
    var vertexShader = WebGLTools.loadShaderFromDOM(gl, "shader-vs");
    var fragmentShader = WebGLTools.loadShaderFromDOM(gl, "shader-fs");
    
    shaderProgram = gl.createProgram();
    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);
  
    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      alert("Failed to setup shaders");
    }
  
    gl.useProgram(shaderProgram);
    
    shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition"); 
    shaderProgram.vertexColorAttribute = gl.getAttribLocation(shaderProgram, "aVertexColor");
    
    gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
  }
  
  function setupBuffers() {
    hexagonVertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, hexagonVertexBuffer);
    var hexagonVertices = [
          -0.3,  0.6,  0.0, //v0
          -0.4,  0.8,  0.0, //v1
          -0.6,  0.8,  0.0, //v2
          -0.7,  0.6,  0.0, //v3
          -0.6,  0.4,  0.0, //v4
          -0.4,  0.4,  0.0, //v5
          -0.3,  0.6,  0.0, //v6
    ];
    
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(hexagonVertices), gl.STATIC_DRAW);
    hexagonVertexBuffer.itemSize = 3;
    hexagonVertexBuffer.numberOfItems = 7;
    
    triangleVertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBuffer);
    var triangleVertices = [
          0.3,  0.4,  0.0, //v0
          0.7,  0.4,  0.0, //v1
          0.5,  0.8,  0.0, //v2
    ];
    
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);
    triangleVertexBuffer.itemSize = 3;
    triangleVertexBuffer.numberOfItems = 3;
    
    triangleVertexColorBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexColorBuffer);
    var colors = [
              1.0, 0.0, 0.0, 1.0, //v0
              0.0, 1.0, 0.0, 1.0, //v1
              0.0, 0.0, 1.0, 1.0  //v2
          ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
    triangleVertexColorBuffer.itemSize = 4;
    triangleVertexColorBuffer.numberOfItems = 3;
    
    
    stripVertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, stripVertexBuffer);
    var stripVertices = [
          -0.5,  0.2,  0.0, //v0
          -0.4,  0.0,  0.0, //v1
          -0.3,  0.2,  0.0, //v2
          -0.2,  0.0,  0.0, //v3
          -0.1,  0.2,  0.0, //v4
           0.0,  0.0,  0.0, //v5
           0.1,  0.2,  0.0, //v6
           0.2,  0.0,  0.0, //v7
           0.3,  0.2,  0.0, //v8
           0.4,  0.0,  0.0, //v9
           0.5,  0.2,  0.0, //v10
           // start second strip
          -0.5, -0.3,  0.0, //v11
          -0.4, -0.5,  0.0, //v12
          -0.3, -0.3,  0.0, //v13
          -0.2, -0.5,  0.0, //v14
          -0.1, -0.3,  0.0, //v15
           0.0, -0.5,  0.0, //v16
           0.1, -0.3,  0.0, //v17
           0.2, -0.5,  0.0, //v18
           0.3, -0.3,  0.0, //v19
           0.4, -0.5,  0.0, //v20
           0.5, -0.3,  0.0  //v21
    ];
    
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(stripVertices), gl.STATIC_DRAW);
    stripVertexBuffer.itemSize = 3;
    stripVertexBuffer.numberOfItems = 22;
    
    stripElementBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, stripElementBuffer);
    var indices = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                    // 10, 10, 11, // 3 extra indices for the degenerate triangles
                    10, 11,
                   11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
                   
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);
    
    // stripElementBuffer.numberOfItems = 25;
    stripElementBuffer.numberOfItems = 24;
  }
  
  function draw() { 
    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
    gl.clear(gl.COLOR_BUFFER_BIT);
    
    // Draw the hexagon
    // We disable the vertex attrib array since we want to use a
    // constant color for all vertices in the hexagon
    gl.disableVertexAttribArray(shaderProgram.vertexColorAttribute);                     
    gl.vertexAttrib4f(shaderProgram.vertexColorAttribute, 0.0, 0.0, 0.0, 1.0);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, hexagonVertexBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 
                           hexagonVertexBuffer.itemSize, gl.FLOAT, false, 0, 0);
   
    gl.drawArrays(gl.LINE_STRIP, 0, hexagonVertexBuffer.numberOfItems);
     
    // Draw the independent triangle
    // For the triangle we want to use per-vertex color so
    // we enable the vertexColorAttribute again
    gl.enableVertexAttribArray(shaderProgram.vertexColorAttribute);
    
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 
                           triangleVertexBuffer.itemSize, gl.FLOAT, false, 0, 0);
                           
    gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexColorBuffer);  
    gl.vertexAttribPointer(shaderProgram.vertexColorAttribute, 
                           triangleVertexColorBuffer.itemSize, gl.FLOAT, false, 0, 0);
                                                   
    gl.drawArrays(gl.TRIANGLES, 0, triangleVertexBuffer.numberOfItems);
     
    // draw triangle-strip   
    // We disable the vertex attribute array for the vertexColorAttribute
    // and use a constant color again.
    gl.disableVertexAttribArray(shaderProgram.vertexColorAttribute);          
    gl.bindBuffer(gl.ARRAY_BUFFER, stripVertexBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 
                           stripVertexBuffer.itemSize, gl.FLOAT, false, 0, 0);
                           
    gl.vertexAttrib4f(shaderProgram.vertexColorAttribute, 1.0, 1.0, 0.0, 1.0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, stripElementBuffer);
    
    gl.drawElements(gl.TRIANGLE_STRIP, stripElementBuffer.numberOfItems, gl.UNSIGNED_SHORT, 0);
    gl.vertexAttrib4f(shaderProgram.vertexColorAttribute, 0.0, 0.0, 0.0, 1.0);
    
    // Draw help lines to easier see the triangles
    // that build up the triangle-strip
    gl.drawArrays(gl.LINE_STRIP, 0, 11);
    gl.drawArrays(gl.LINE_STRIP, 11, 11);
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  function startup() {
    canvas = document.getElementById("myGLCanvas");
    resizeCanvas();

    gl = WebGLDebugUtils.makeDebugContext(WebGLTools.getGLContext(canvas));
    setupShaders(); 
    setupBuffers();
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    
    // gl.frontFace(gl.CCW);
    gl.frontFace(gl.CW);
    gl.enable(gl.CULL_FACE);
    gl.cullFace(gl.BACK);
  
    draw();  
  }

  window.addEventListener('load', function(){
    startup();
  });
})();