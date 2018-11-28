            AFRAME.registerComponent('mouse-rotate',{
              schema : { 
                rspeed : {default:1},
                pspeed : {default:0},
                       
                       },
              init : function(){

                //█> initialize variables for mouse Delta animation
                        this.xPos = 0;
                        this.yPos = 0;
                        this.dX = 0;
                        this.dY = 0;

                //█> screen width
                        var width = window.innerWidth
                          || document.documentElement.clientWidth
                          || document.body.clientWidth;

                //█> screen height
                        var height = window.innerHeight
                          || document.documentElement.clientHeight
                          || document.body.clientHeight;

                //█> set centerpoint point to half screen w/h
                        this.x_cord = (width/2);
                        this.y_cord = (height/2);
                
              document.addEventListener('mousemove',this.OnDocumentMouseMove.bind(this));
              
                var counter = 0;
                                },
   
//           ═════ Mouse Tick / position of mouse 
      tick: function () {
          if (this.mouseX)
          {
              // TEMP_# center point (-) mouse position - distance from screen center
                this.temp_x = this.x_cord-this.mouseX;
                this.temp_y = this.y_cord-this.mouseY;
              // distance between 
                this.dX = this.temp_x - this.xPos;
                this.dY = this.temp_y - this.yPos;

                this.xPos += (this.dX / 30);
                this.yPos += (this.dY / 30);
            
                let q = new THREE.Quaternion();
                let quaternion = this.el.object3D.getWorldQuaternion(q);
            
                let eulerOrder = 'YXZ';
                var rotation = new THREE.Euler().setFromQuaternion( quaternion, eulerOrder );          
                var z = rotation.z;         
            
                this.el.object3D.rotateY(this.dX*this.data.rspeed/-10000);
                this.el.object3D.rotateX(this.dY*this.data.rspeed/-10000); 
                this.el.object3D.rotateZ(-z);
                
                // const mesh = new THREE.Mesh();
                let vec = new THREE.Vector3();
                var position = this.el.object3D.getWorldPosition(vec);
                var z = position.z;
                var y = position.y;
                this.el.object3D.translateX(this.dX*this.data.pspeed/-500);
                this.el.object3D.translateY(this.dY*this.data.pspeed/500); 
                // this.el.object3D.rotateZ(-z);
    
                this.counter += 1;
            
          }},
            
                
                                OnDocumentMouseMove : function(event)
                {
                  this.mouseX = event.clientX;
                  this.mouseY = event.clientY; 
                  this.counter = 0;
                }
    });