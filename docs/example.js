!function(){"use strict";var r=0;function o(){for(var t="#",r=0;r<6;r++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t}var t=window.pg={};t.util={},t.utils={},t.utils.image={},t.util.getUid=function(t){return t._uid||(t._uid=++r)},t.utils.image.getRandomDummyImages=function(t,r,e){if("number"!=typeof t||"number"!=typeof r||"number"!=typeof e)throw new TypeError("Must be params number");for(var u="https://dummyimage.com/"+t+"x"+r+"/",i=[],n=0;n<e;n++)i.push(u+o().slice(1));return i},t.utils.image.getRandomHexColor=o}();
//# sourceMappingURL=example.js.map
