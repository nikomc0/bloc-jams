var animatePoints = function() {

var points = document.getElementsByClassName('point');

var revealPoint = function() {

   for(var i = 0; i < points.length; i++){
     
     if(points[i] == points[1]){
       points[i].style.transitionDelay = ".4s";
     } else if (points[i] == points[2]){
       points[i].style.transitionDelay = ".6s"
     }
    
     points[i].style.opacity = 1;
     points[i].style.transform = "rotate(0) scaleX(1) translateY(0)";
     points[i].style.msTransform = "rotate(0) scaleX(1) translateY(0)";
     points[i].style.WebkitTransform = "rotate(0) scaleX(1) translateY(0)";
     
   }
 };

  revealPoint();
};
