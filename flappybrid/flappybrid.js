console.log("working");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

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
}

const brid = new Brid(80 , 450 , 30 , "pink");
brid.draw();










































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