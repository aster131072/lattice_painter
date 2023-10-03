let red=0,green=0,blue=0;
document.addEventListener('DOMContentLoaded', function() {
    var cells = document.getElementsByTagName('td');
    
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener('touchstart', function() {
            this.style.backgroundColor="rgb(" + red + "," + green + ","+blue+")";
        });
        
        cells[i].addEventListener('touchend', function() {
            this.style.backgroundColor="rgb(" + red + "," + green + ","+blue+")";
        });
        
        cells[i].addEventListener('touchmove', function(event) {
            event.preventDefault();
            var touch = event.touches[0];
            var target = document.elementFromPoint(touch.clientX, touch.clientY);
            
            if (target.tagName === 'TD') {
                target.style.backgroundColor="rgb(" + red + "," + green + ","+blue+")";
            }
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    var cells = document.getElementsByTagName('td');
    var isMouseDown = false;
    for (var i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mousedown', function() {
            isMouseDown = true;
            this.style.backgroundColor="rgb(" + red + "," + green + ","+blue+")";
        });
        
        cells[i].addEventListener('mouseup', function() {
            isMouseDown = false;
        });
        
        cells[i].addEventListener('mouseover', function() {
            if (isMouseDown) {
                this.style.backgroundColor="rgb(" + red + "," + green + ","+blue+")";
            }
        });
    }
    
    document.addEventListener('mouseup', function() {
        isMouseDown = false;
    });
});
function choosecolor(r,g,b){
	red=r;
	green=g;
	blue=b;
}
function choosecolor_free(){
	red=document.getElementById("r").value;
	green=document.getElementById("g").value;
	blue=document.getElementById("b").value;
}