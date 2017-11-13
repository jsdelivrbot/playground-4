/*global WebGLTools, WebGLDebugUtils, mat4*/
(function() {
  var gl;
  var canvas;
  var shaderProgram;
  var cubeVertexPositionBuffer;
  var cubeVertexIndexBuffer;

  var modelViewMatrix;
  var projectionMatrix;
  var modelViewMatrixStack;

  function loadShader(shaderType) {
    // If we don't find an element with the specified id
    // we do an early exit
    if (!shaderType) {
      return null;
    }

    // Loop through the children for the found DOM element and
    // build up the shader source code as a string
    var shaderSource = "";
    var shader;
    if (shaderType === "fragment") {
      shaderSource = "precision mediump float;" +
        "varying vec4 vColor;" +
        "void main() {" +
        "gl_FragColor = vColor;" +
        "}";
      shader = gl.createShader(gl.FRAGMENT_SHADER);
    } else if (shaderType === "vertex") {
      shaderSource = "attribute vec3 aVertexPosition;" +
        "attribute vec4 aVertexColor;" +
        "uniform mat4 uMVMatrix;" +
        "uniform mat4 uPMatrix;" +
        "varying vec4 vColor;" +
        "void main() {" +
        "gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition, 1.0);" +
        "vColor = aVertexColor;" +
        "}";
      shader = gl.createShader(gl.VERTEX_SHADER);
    } else {
      return null;
    }

    gl.shaderSource(shader, shaderSource);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      alert(gl.getShaderInfoLog(shader));
      return null;
    }
    return shader;
  }

  function setupShaders() {
    var vertexShader = loadShader("vertex");
    var fragmentShader = loadShader("fragment");

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
    shaderProgram.uniformMVMatrix = gl.getUniformLocation(shaderProgram, "uMVMatrix");
    shaderProgram.uniformProjMatrix = gl.getUniformLocation(shaderProgram, "uPMatrix");

    gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);

    modelViewMatrix = mat4.create();
    projectionMatrix = mat4.create();
    modelViewMatrixStack = [];
  }

  function pushModelViewMatrix() {
    var copyToPush = mat4.create(modelViewMatrix);
    modelViewMatrixStack.push(copyToPush);
  }

  function popModelViewMatrix() {
    if (modelViewMatrixStack.length == 0) {
      throw "Error popModelViewMatrix() - Stack was empty ";
    }
    modelViewMatrix = modelViewMatrixStack.pop();
  }

  function setupCubeBuffers() {
    cubeVertexPositionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);

    var cubeVertexPosition = [
      // Front face
      1.0, 1.0, 1.0, //v0
      -1.0, 1.0, 1.0, //v1
      -1.0, -1.0, 1.0, //v2
      1.0, -1.0, 1.0, //v3

      // Back face
      1.0, 1.0, -1.0, //v4
      -1.0, 1.0, -1.0, //v5
      -1.0, -1.0, -1.0, //v6
      1.0, -1.0, -1.0, //v7

      // Left face
      -1.0, 1.0, 1.0, //v8
      -1.0, 1.0, -1.0, //v9
      -1.0, -1.0, -1.0, //v10
      -1.0, -1.0, 1.0, //v11

      // Right face
      1.0, 1.0, 1.0, //12
      1.0, -1.0, 1.0, //13
      1.0, -1.0, -1.0, //14
      1.0, 1.0, -1.0, //15

      // Top face
      1.0, 1.0, 1.0, //v16
      1.0, 1.0, -1.0, //v17
      -1.0, 1.0, -1.0, //v18
      -1.0, 1.0, 1.0, //v19

      // Bottom face
      1.0, -1.0, 1.0, //v20
      1.0, -1.0, -1.0, //v21
      -1.0, -1.0, -1.0, //v22
      -1.0, -1.0, 1.0 //v23
    ];

    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cubeVertexPosition),
      gl.STATIC_DRAW);
    cubeVertexPositionBuffer.itemSize = 3;
    cubeVertexPositionBuffer.numberOfItems = 24;

    cubeVertexIndexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
    var cubeVertexIndices = [
      0, 1, 2, 0, 2, 3,    // Front face
      4, 6, 5, 4, 7, 6,    // Back face
      8, 9, 10, 8, 10, 11,  // Left face
      12, 13, 14, 12, 14, 15, // Right face
      16, 17, 18, 16, 18, 19, // Top face
      20, 22, 21, 20, 23, 22  // Bottom face
    ];
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(cubeVertexIndices),
      gl.STATIC_DRAW);
    cubeVertexIndexBuffer.itemSize = 1;
    cubeVertexIndexBuffer.numberOfItems = 36;
  }

  function setupBuffers() {
    setupCubeBuffers();
  }

  function uploadModelViewMatrixToShader() {
    gl.uniformMatrix4fv(shaderProgram.uniformMVMatrix, false, modelViewMatrix);
  }

  function uploadProjectionMatrixToShader() {
    gl.uniformMatrix4fv(shaderProgram.uniformProjMatrix,
      false, projectionMatrix);
  }

  function drawCube(r, g, b, a) {
    // Disable vertex attrib array and use constant color for the cube.
    gl.disableVertexAttribArray(shaderProgram.vertexColorAttribute);
    // Set color
    gl.vertexAttrib4f(shaderProgram.vertexColorAttribute, r, g, b, a);

    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute,
      cubeVertexPositionBuffer.itemSize,
      gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
    gl.drawElements(gl.TRIANGLES, cubeVertexIndexBuffer.numberOfItems,
      gl.UNSIGNED_SHORT, 0);
  }

  function drawCubeWire(r, g, b, a) {
    // Disable vertex attrib array and use constant color for the cube.
    gl.disableVertexAttribArray(shaderProgram.vertexColorAttribute);
    // Set color
    gl.vertexAttrib4f(shaderProgram.vertexColorAttribute, r, g, b, a);

    gl.bindBuffer(gl.ARRAY_BUFFER, cubeVertexPositionBuffer);
    gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute,
      cubeVertexPositionBuffer.itemSize,
      gl.FLOAT, false, 0, 0);

    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, cubeVertexIndexBuffer);
    gl.drawElements(gl.LINE_LOOP, cubeVertexIndexBuffer.numberOfItems,
      gl.UNSIGNED_SHORT, 0);
  }

  function draw() {
    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    mat4.perspective(60, gl.viewportWidth / gl.viewportHeight, 0.1, 100.0, projectionMatrix);
    mat4.identity(modelViewMatrix);
    mat4.lookAt([8, 5, -10], [0, 0, 0], [0, 1, 0], modelViewMatrix);

    uploadModelViewMatrixToShader();
    uploadProjectionMatrixToShader();

    // Draw box on top of the table
    pushModelViewMatrix();
    mat4.translate(modelViewMatrix, [0.0, 0.0, 0.0], modelViewMatrix);
    mat4.scale(modelViewMatrix, [1.0, 1.0, 1.0], modelViewMatrix);
    uploadModelViewMatrixToShader();
    drawCube(0.0, 0.0, 1.0, 1.0);
    drawCubeWire(1.0, 0.0, 0.0, 1.0);
    popModelViewMatrix();
  }

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function setupEvent() {
    canvas.addEventListener('mousedown', onMouseDown, false);
    canvas.addEventListener('mousemove', onMouseMove, false);
    canvas.addEventListener('mouseup', onMouseUp, false);
  }

  function onMouseDown(evt) {
    var lastX = evt.offsetX;
    var lastY = evt.offsetY;
    console.log(lastX, lastY);
  }

  function onMouseMove() {

  }

  function onMouseUp() {

  }

  function startup() {
    canvas = document.getElementById("myGLCanvas");
    resizeCanvas();

    gl = WebGLDebugUtils.makeDebugContext(WebGLTools.getGLContext(canvas));
    setupShaders();
    setupBuffers();
    gl.clearColor(1.0, 1.0, 1.0, 1.0);
    gl.enable(gl.DEPTH_TEST);

    draw();
    setupEvent();
  }

  window.addEventListener('load', function(){
    startup();
  });
})();