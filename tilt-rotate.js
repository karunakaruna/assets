AFRAME.registerComponent('tilt-rotate',{
              schema : { speed : {default:1}},
              init : function(){
              window.addEventListener('deviceorientation', function(event){
                  
                    var x = event.beta;  // In degree in the range [-180,180]
                    var y = event.gamma; // In degree in the range [-90,90]
                    var z = event.alpha; // In degree in the range [-90,90]
                 // console.log(x,y,z);
                if (x >  90) { x =  90};
                    if (x < -90) { x = -90};
        
                    if(x>89)
                       x=89;
                     if(x<-89)
                     x=-89;
                
                    if(y>89)
                       y=89;
                     if(y<-89)
                     y=-89;
        
                    this.offsetx = 2;
                    this.offsety = 0;
                    this.offsetz = 0;
            
                    this.mult = -.4;
                    this.zmult = 0;
                
                    document.getElementById('x').setAttribute('rotation',{x:(x*this.mult)+this.offsetx,y:0,z:0});
                    document.getElementById('y').setAttribute('rotation',{x:0,y:(y*this.mult)+this.offsety,z:0});
                    document.getElementById('z').setAttribute('rotation',{x:0,y:(z*this.zmult)+this.offsetz,z:0});
                    // document.getElementById('text').innerHTML  = "beta : " + x + "<br>" + "gamma: " + y + "<br>";
                
                    console.log(x,y,z);
              });
              },
  
              onDeviceOrientation : function(event){
                    console.log('hello');
             
             },            
                                
});