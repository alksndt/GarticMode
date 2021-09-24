const VERSION = "0.0.0.1";


const UNDO = "jsx-4206980828 tool undo";
const REDO = "jsx-4206980828 tool redo";
const TOOL = "jsx-4206980828";
const UDC = "core";
const TBAR = "jsx-4206980828";
const UPPER = "header";
const CORE = "core";
const DCANV = "jsx-1116305971";
const CCANV = "";
const PCANV = "jsx-150592943";
const MINP = "jsx-46098086";
const SLL = "jsx-1927447174 scrollElements";
const NICK = "jsx-4216852870 jsx-1594390208 nick";


//Функционал иструмент сглаживания
var x = 0,
    y = 0,
    px = 0,
    py = 0,
    easing = 0.3;
function addSmoothingTool(){
    mapArray = [];
    if (!Q("jsx-4206980828 tool smooth").length){
        var toolBar = Q(TBAR)[0].firstChild;
        function mousePressed() {
          x = mouseX;
          y = mouseY;
          px = mouseX;
          py = mouseY;
          return false;
        }
        function mouseDragged() {
          var targetX = mouseX,
              targetY = mouseY;
          x += (targetX - x) * easing;
          y += (targetY - y) * easing;
          line(x,y,px,py);
          px = x;
          py = y;
          return false;
        }
}
