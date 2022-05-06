console.log("working");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const start = document.getElementsByTagName("button")[0];

function Brid(x , y , r , color){
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color

    this.draw = function(){
        ctx.beginPath()
        ctx.fillStyle = this.color;
        ctx.arc(this.x , this.y , this.r , 0,2*Math.PI)
        ctx.fill();
    }

    this.move =  function(x , y){
        this.x = this.x+x;
        this.y = this.y+y;
        ctx.clearRect(0,0, 700 , 800);
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x , this.y , this.r , 0,2*Math.PI);
        ctx.fill();
    }

    this.down = (x , y) =>{
        this.x = this.x-x;
        this.y = this.y+y;
        ctx.clearRect(0,0, 700 , 800);
        ctx.beginPath(); 
        ctx.fillStyle = this.color;
        ctx.arc(this.x , this.y , this.r , 0,2*Math.PI);
        ctx.fill();
    }
}
function Way() {
    t
}
const brid = new Brid(70 , 350 , 30 , "pink");
brid.draw();


window.addEventListener("click" , (ev) =>{
    start.style.display ="none"
    canvas.style.opacity  = "1"
        setInterval(() =>{
            brid.down(0 , 10)
        },40) 
        if(ev.keyCode == 80){
            brid.down(0 , 0)
        }
        window.addEventListener('keydown' , (e)=> {
            if(e.keyCode === 32){
                brid.move(0, -100);
            }
        })
})

let x = Math.floor(Math.random()*4+1); 
ctx.strokeRect( 550 , 0 ,100, [`${x}00`])
ctx.beginPath();

ctx.strokeRect( 550 , 500 ,100, [`${x}00`])
ctx.beginPath();







































// function Bird(x, y, r, color = "blue") {
//     this.x = x;
//     this.y = y;
//     this.r = r;
//     this.color = color;
  
//     this.draw = function () {
//       ctx.beginPath();
//       ctx.fillStyle = this.color;
//       ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
//       ctx.fill();
//     };
  
//     this.move = function (x, y) {
//       this.x = this.x + x;
//       this.y = this.y + y;
//       ctx.clearRect(0, 0, 400, 300);
//       ctx.beginPath();
//       ctx.fillStyle = this.color;
//       ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
//       ctx.fill();
//     };
// }

// const bird1 = new Bird(100,100, 30);
// bird1.draw();
// ctx.strokeRect = "blue"


// const  brid = document.getElementById("brid");

// window.addEventListener('keydown', (event) =>{
//     console.log(event);
//     if(event.keyCode ===32) {
//         canvas.style.backgroundColor = "red"
//     }
//     else {
//         brid.style.backgroundColor = "black"
//     }
// }); 