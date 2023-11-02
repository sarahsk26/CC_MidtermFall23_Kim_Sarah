// Adjective: Dualism 

//aspects of the composition:

// gravity ball: indicates that that the plane illustrated in the composition is related to Earth (how gravity appears/ experienced on Earth)

// the grid creating by the cursor's location: represents the proximity/ scope of human perception (color of grid changes depending on location of mouse on window/ whether the eye is on the dark or bright side)
// (field of vision darkens as it approaches the end of the dark side and brightens as it appraoches the end of the bright side)

// the black and white background (night and day)/ represents the dualistic state (or perceieved duality of existence) 

// red blood cells: their movement resembles the cyclical pattern of life and visually connects the dark side to the light side. 

//Perception of a Manichean World: in unison, the layering of these concepts helps me illustrate human's tendency to think dualistically (found in a variety of global ideologies and traditions)~ to envision the concept of light and dark, good and evil, complementing and opposing forces that balance eachother rather than to comprehend a spectrum/ the grey areas

// the yin and yang symbol is an icon for duality so I included that in the second scene. 


//references: The Coding Train on Arrays and Object Oriented Programming https://www.youtube.com/watch?v=H4awPsyugS0&list=PLRqwX-V7Uu6aAEUqu96Newc-7qpuh-cxc 

// code from class(gravity ball in the middle)
// code from class on Working with Time 

// I used openai to produce the accuracy in form to the yin yang symbol (the arcs and curves)

// establishing global variables 

let rains= []; // arrays and variables for the classes 
let clouds=[];
let trees=[];
let waves=[];
let moon;
let sun;

let scene1_;
let scene2_;

let angle = 0;
let rotationSpeed = 0.005;




function setup(){ // SETUP FUNCTION
  createCanvas(800,800);
  
  scene1_ = true;
  scene2_ = false;
  
  
  for(let i=0; i<1000; i++){ // conditions for the rain instance 
      let x= random(width/2);
      let y= random(height);
      let r= random(3);
    let rp = new Rain(x,y,r); // creating a new instance of the Rain class
    rains.push(rp);   
  }   
  
  
   for(let i=0; i<700; i++){ // conditions for the rain instance 
      let x= random(width/2,width);
      let y= random(height*3/5);
      let w= random(90,210);
     let h= random(70,120);
    let c= new Cloud(x,y,w,h); // creating a new instance of the Cloud class
    clouds.push(c);   
  }   

for(let i=0; i<60; i++){ // instance of tree
let t= new Tree(width/2,height);
  trees.push(t);
} 
 
for(let i=0; i<500; i++){ // wave blood cell
 
  let x= random(5);
  let y= random(height/2-2,height/2+2);
  let www= new Wave(x,y);

  waves.push(www);

}
 
  mover= new Mover(); // vector instance 
  
  moon= new Moon(); // vector instance of the moon
  
  sun= new Sun();// vector instance of the sun
  
  
}
  

//DRAW 



function draw(){ //BEGINNING OF THE DRAW LOOP FUNCTION 
  
  background(0);

   if(frameCount < 470){ // scene 1 is up to framecount 470
     scene1(); 
  } else if (frameCount < 800){ // scene 2 is up to framcount 800
    scene2();
  } 
  if (frameCount>800){// once framecount exceeds 800, it returns to 0 and the sequence repeats
    frameCount= 0;
  }
 print(frameCount);  // printing the framecount for reference 
}

//end of draw loop!!!~!!!!!!!!@@@#$@$^




function scene1(){ // scene 1 code 
 
  let b= random(30); // background color (left half)
  background(b);
  
   // background color (right half)
  
  
  fill(179, 209, 252);
  noStroke();
  rect(width/2,0,width/2,height);
  
  
  
  for(let i=0; i<height; i+=10){ // stitching (dualism --> everything has an opposite --> needs an opposite to exist)
    stroke(255);
    strokeWeight(2);
    line(width/2-5, i,width/2+5, i);   // middle 
    line(0,i,5,i); // left 
    line(width-5,i,width,i);//right
    line(i,0,i,5);// top
    line(i,height,i,height-5);//bottom
    
  }
  
  
  
  for(var i=0; i<rains.length;i++){
  rains[i].exist(); // the functions of rain
  rains[i].fall();
  }
  
    for(var i=0; i<clouds.length;i++){
  clouds[i].exist(); // the functions of rain
  clouds[i].pass();
  clouds[i].fluctuate();
  }

  for(var i=0; i<trees.length;i++){
  trees[i].exist(); // functions of tree
  trees[i].treecells()// cells
  }
  
  
  ellipseMode(CENTER);

let gravity = createVector(0,0.1); // vector instance for the middle mover gravity ball and calling its functions 
  mover.applyForce(gravity);   
  mover.display(); 
  mover.checkEdges(); 
  mover.update(); 
  
// vector instance for the moon movement and calling its functions 
moon.applyForce(gravity);
moon.display();
moon.checkEdges();
moon.update();
  
//vector instance for the sun movement and calling its functions 
sun.applyForce(gravity);
sun.display();
sun.checkEdges();
sun.update();
 
  
 for(var i=0; i<waves.length;i++){ // calling the wave of bloodcells and its functions 
    waves[i].exist(); // functions waves exist 
    waves[i].move();
  }  
    
 eye();  // calling the function of the eye cursor 

}
 // end of scene 1 code 



function scene2(){
  
 let diameter = 400;
  let centerX = width / 2;
  let centerY = height / 2;

  let r =random(30,200);
  background(r);

  
  push(); // translating and rotating the yin yang 
  translate(centerX, centerY);
  rotate(angle);

  
  fill(255);// drawing the white part of the circle 
noStroke();
  ellipse(0, 0, diameter, diameter);

  // drawing the black part of the circle 
  fill(0);
  arc(0, 0, diameter, diameter, PI / 2, 3 * PI / 2);

  //drawigng the small white circle
  fill(255);
  ellipse(0, -diameter / 4, diameter / 2, diameter / 2);

  // drawing the small black circle
  fill(0);
  ellipse(0, diameter / 4, diameter / 2, diameter / 2);

  pop();// pop!
 
  angle += rotationSpeed; // adding rotation 
}

function mousePressed(){
  currentTime = millis(); // returns the millis seconds that the code has been running

}




function eye(){ // eye function (circular grid lines center is the mouse) 
let w=20
let h =11
noFill();

 stroke(mouseX,100);
  
ellipseMode(CENTER);

  strokeWeight(1); 
for(let i=0; i<width; i++){
ellipse(mouseX, mouseY,w+i*i/10,h+i*i/10);//eye shape/ edge
w=w+random(3);
h=h+random(3);
}

  noFill();
  stroke(mouseX,255);
ellipse(mouseX,mouseY,3,3); //ceterpoint mouse x,y ellipse 1 by1
  
}




class Rain { // RAIN CLASS AND QUALITIES 
  
  constructor(x,y,r){ //rain constructor: need x,y,r parameters 
    this.x=x;
    this.y=y;
    this.r=r;
    this.brightness= 160;

  }
  
  exist(){ // calls for the rain moelcules to be drawn(static)
    
      noStroke();
      let a= random(100,255);
      fill(this.brightness,a); // fill orginal 100 and random alpha (20,225)
      ellipse(this.x,this.y,this.r); // the rain molecules 
      
    }

  fall(){ // this is the movement path of the rain molecules 
    let w= random(-3,3); 
    let e= random(9,11);
    this.x=this.x+w; //x movement random(-10,10)
    this.y=this.y+e; // y movement --> increases 10 through each loop
    
    if(this.x>width/2){
      this.x=random(width/2); // if x becomes greater than the width it has random location set 
      this.y=0;
    }
    if(this.y>height){
  this.y=0; // if y exceeds the height of page, it starts from 0 
  this.x=random(width/2)
    }
  }

}

class Cloud { // CLOUD CLASS AND QUALITIES 
  
  constructor(x,y,w,h){ // constructor for the cloud
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;   
  }
  
  
  exist(){ // for the cloud to exist 

  let a= random(2,11);
   fill(255,a);
    noStroke();
    ellipseMode(CORNER);
    ellipse(this.x,this.y,this.w,this.h);
  }

  
  pass(){ // movement of the cloud (left to right)
    this.x=this.x+random(-2,4);
    this.y= this.y+random(-2,2);
     
    if(this.x>width){ // containing clouds within the frame
      this.x=width/2
      this.y= this.y 
    }
    
    if(this.y>height*2/3){
      this.y= random(200);    
      this.x= width/2
    }
  }
   
  
fluctuate(){ // function that controls the fluctuation of cloud size 
  this.w= this.w+random(-1,1);
  this.h= this.h+random(-1,1);
  
  if(this.w>200){ // controls the limit/ reset of the cloud size
  this.w= 120; // for w
  }
  
  if(this.h>120){ // for h
    this.h=100;   
 }
}
}




class Tree{ // TREE CLASS AND QUALITIES 
  
  constructor(x,y){ // tree constructor (x,y)
    this.x=x;
    this.y=y; 

  }
  
exist(){ // tree exist function 
  
  let s= random(245,255);
  strokeWeight(1);
  
  for(let i=0; i<15; i+=2){
 
  let peanuts= this.y-150;
  let walnuts= this.y-this.y+150;
  
    
//Bottom
    
  stroke(s-100,25);
  line(this.x-i,this.y,this.x-i,peanuts); // left side
  line(this.x-3*i,this.y,this.x+i,peanuts);
  line(this.x-i,this.y-150,this.x,peanuts-100);
  line(this.x-80*i,this.y,this.x,peanuts); // wide spread lines
     stroke(mouseX*2/5,5);
  line(this.x-30*i,this.y,mouseX,mouseY);
  

    stroke(s,25);
  line(this.x+i,this.y,this.x+i,peanuts); // right side 
  line(this.x+3*i,this.y,this.x-i,peanuts);
  line(this.x+i,this.y-150,this.x,peanuts-100);
  line(this.x+80*i,this.y,this.x,peanuts);
  stroke(mouseX*2/5,5);
   line(this.x+30*i,this.y,mouseX,mouseY);  
    
    stroke(s-100,25);
//Top
  line(this.x-i,this.y-this.y,this.x-i,walnuts);  
  line(this.x-3*i,this.y-this.y,this.x+i,walnuts);
  line(this.x-i,walnuts,this.x,walnuts+100);
  line(this.x-80*i,this.y-this.y,this.x,walnuts);
  stroke(mouseX*2/5,5);
  line(this.x-30*i,this.y-this.y,mouseX,mouseY);  
    
  stroke(s,25);   
  line(this.x+i,this.y-this.y,this.x+i,walnuts); // right side 
  line(this.x+3*i,this.y-this.y,this.x-i,walnuts);
  line(this.x+i,walnuts,this.x,walnuts+100);
  line(this.x+80*i,this.y-this.y,this.x,walnuts); 
  stroke(mouseX*2/5,5);  
  line(this.x+30*i,this.y-this.y,mouseX,mouseY);
  
  }
  
  for(let i=0; i<30; i+=2) {//lines from the sides to the mouse 
    
 stroke(mouseX*2/5,5);
  line(0,this.y-30*i, mouseX,mouseY);
stroke(mouseX*2/5,5);
  line(width,this.y-30*i,mouseX,mouseY);
 

  } 
}

  

  

  
  
 
  treecells(){ // Tree Cell/ Red Cell Function

    noStroke();
  let o= random(-20,20);
  let t =random(height/3-50,height*2/3+50);

  
  if(this.y==height/2){ // parameters of the location of the red cells/ limits of the movement to witin the frame 
    this.x==width/2;
  }
    if (this.y>=height){ // limiting the middle section of red cells 
    this.y=height-2;  
    }
    
  if(this.y==height/4){
    this.x==width/2;
  }
    
  if(this.y== height*3/4){
    this.x==width/2
  }
    
  if(this.y<0 && this.y>height){  // once red cells hit max height, goes to middle 
    this.y=height/2;

  }
    
  
    //movement and location of the red cells 

    if( this.x>this.x-50 && width/3-100<this.y<width*2/3+100 ){ //left side MIDDLE SECT
       fill(210, 41, 41,200);
    ellipse(this.x+o,this.y-t,3,6);  
      fill(255, 122, 102);
     ellipse(this.x+o,this.y-t,2,2);   
  }
    if(this.x<this.x+15&& width/3-50<this.y<width*2/3+50 ){ // right side MIDDLE SECT
       fill(255,20);
  ellipse(this.x+o,this.y-t,3,6); 
      fill(255, 102, 102,100);
     ellipse(this.x+o,this.y-t,2,2);  
    } 

    
   // TOP AND BOTTOM NARROW SECTIONS 
    let s= random(-5,5);
    let k =random(-200,200);
    
    if( this.x-5<this.x<this.x+5 && this.y>height*2/3+50 ){ // bottom narrow stream
  fill(232, 44, 44,200);
    ellipse(this.x+s,this.y-k,3,6);  
      fill(255, 122, 102);
     ellipse(this.x+s,this.y-k,2,2);   
    }
    
   let tabby=this.y-this.y// variable for y location of cells 
 if( this.x-5<=this.x<= this.x+5 && tabby<height/3-50 ){// top narrow stream
   
 fill(232, 44, 44,200);
    ellipse(this.x+s,this.y-this.y+k,3,6);  
      fill(255, 122, 102);
     ellipse(this.x+s,this.y-this.y+k,2,2);   
}     
}
}








class Wave{ // WAVE CLASS AND QUALITIES
  
  constructor(x,y){
    this.x=x;
    this.y=y;
    
  }
  
exist(){
let r= random(135,150);
  let g =random(25,35);
  let b= random(15,30);
  let f= random(200,240);
  let fa= random(70,100);
  fill(r,g,b,f);
  noStroke();
    ellipse(this.x,this.y,3,6);  
      fill(255, 122, 102);
     ellipse(this.x,this.y,2,2);
}
  
  move(){ // ellipses moving to create wave/ water/ flow illusion 
    
   this.x= this.x+random(-10,17);
    this.y= this.y+random(-15,15);
    
  if(this.x>width){ // framing for the red wave blood cells 
    this.x= 0;
    this.y= random(-20,height+20);
  }
    if(this.y>height+200){
      this.x=0;
      this.y=random(-20,height+20);
    }
  if(this.y<-200){
    this.y=random(-20,height+20);
    this.x=0;
  }
    if (this.x<-40){
      this.x=0;
      this.y=random(-20,height+20);
       
    }
    

    
    
    
  }
  
}



class Mover{  // MOVER CLASS AND QUALITIES (BALL)--> GRAVITY 
  
  constructor(){ //ball 
    
    
    this.position= new createVector(width/2,30); // spefici coordinates
    this.velocity= new createVector(0,0);
    this.acceleration= new createVector(0,0);
    this.mass= 2;
  }
  
  
update (){ // key to movement (adding speed/ velocity to position of vector )
  this.velocity.add(this.acceleration); // slowly adding accerlation to the velocty
  this.position.add(this.velocity);   // and velocity gets added to the position 
  this.acceleration.mult(0); //cancels the velocity out--> to 0.
}
  
  applyForce (force){ // pass in a vector
    let f = p5.Vector.div(force,this.mass); //new vector 
    this.acceleration.add(f);// add the new vector to the acceleration 
    
    
  }

  
display(){
  
 let r= random(105,120);
  let g =random(5,15);
  let b= random(5,10);

 stroke(r-10,g-10,b-10);
  fill(r,g,b,this.position.y/2.8);

ellipse(this.position.x,this.position.y,4000,4000);
  
  fill(0,this.position.y/2);
  noStroke();
  ellipse(this.position.x,this.position.y,30,30);
  
}
  
  
checkEdges(){ // keeps ball on the screen
  
if(this.position.y> width){
  this.position.y=width;
    this.velocity.y *=-1;
} else if(this.position.x<0){
  this.position.y=0;// stop at ground
 this.velocity.y*=-1;
} 
} // end of check edges method
  
}// end of class 






class Moon{ 
  
  constructor(){ //ball 
    
    this.position= new createVector(width/4,30); // spefici coordinates
    this.velocity= new createVector(0,0);
    this.acceleration= new createVector(0,0);
    this.mass= 1;
  }
  
  
update (){ // key to movement (adding speed/ velocity to position of vector )
  this.velocity.add(this.acceleration); // slowly adding accerlation to the velocty
  this.position.add(this.velocity);   // and velocity gets added to the position 
  this.acceleration.mult(0); //cancels the velocity out--> to 0.
}
  
  applyForce (force){ // pass in a vector
    let f = p5.Vector.div(force,this.mass); //new vector 
    this.acceleration.add(f);// add the new vector to the acceleration 
    
    
  }

  
display(){
  noStroke();
  let d= random(220,230); // this is the moon (night)
fill(d+10,d+5,d-10,d); 
  ellipse(this.position.x,this.position.y, 50,50 );
fill(d-50,d-55,d-60,d-170);  
  ellipse(this.position.x,this.position.y, 15,15); // crators 
  ellipse(this.position.x,this.position.y, 7,7);
  ellipse(this.position.x,this.position.y, 12,12);
  ellipse(this.position.x,this.position.y, 10,10);
  ellipse(this.position.x,this.position.y, 5,5);
  ellipse(this.position.x,this.position.y, 6,6);
}
  
  
checkEdges(){ // keeps ball on the screen
  
if(this.position.y> width){
  this.position.y=0;
    this.velocity.y /=2;
} 
} // end of check edges method
  
}// end of class 








class Sun{ 
  
  constructor(){ //ball 
    
    this.position= new createVector(width*3/4,height-30); // spefici coordinates
    this.velocity= new createVector(0,0);
    this.acceleration= new createVector(0,0);
    this.mass= -1;
  }
  
  
update (){ // key to movement (adding speed/ velocity to position of vector )
  this.velocity.add(this.acceleration); // slowly adding accerlation to the velocty
  this.position.add(this.velocity);   // and velocity gets added to the position 
  this.acceleration.mult(0); //cancels the velocity out--> to 0.
}
  
  applyForce (force){ // pass in a vector
    let f = p5.Vector.div(force,this.mass); //new vector 
    this.acceleration.add(f);// add the new vector to the acceleration 
    
    
  }

  
display(){
 let u= random(250,255); // this is the sun (day)
  fill(u)
  let a= random(5,10);  // glow around sun 
  stroke(255,a);
  strokeWeight(8);
  ellipse(this.position.x,this.position.y,50,50);
}  
  
checkEdges(){ // keeps ball on the screen
  
if(this.position.y<0){
  this.position.y=height;
    this.velocity.y /=2;
} 
} // end of check edges method
  
}// end of class 