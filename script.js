const info=document.querySelector(".info");
const sketch=document.querySelector(".sketch")
const reset=document.getElementById("reset");
const gen=document.getElementById("generate")
let number=20;

function generatePad(num){
    let size=(960-5)/num;
    
    for(let i=1;i<=num;i++){
        
        for(let j=1;j<=num;j++){
            const square=document.createElement("div");
            square.classList.add("square");
            square.style.width=`${size}px`;
            square.style.height=`${size}px`;
            sketch.appendChild(square);
            
        }
        drawing();
    }
}
generatePad(number);

function drawing(){
const squares=document.querySelectorAll(".square");
squares.forEach((square)=>{
    square.addEventListener("mouseover",()=>{
        square.style.backgroundColor="black";
    })
})
}

function restart(){
    const squares=document.querySelectorAll(".square");
    squares.forEach((square)=>{
            square.style.backgroundColor="white";
    })
    console.log("Restartovano")
}

reset.addEventListener("click",restart);

function generate(){
    const number=document.getElementById("size").value;
    if(number>0 && number<100){
    sketch.innerHTML=""
    generatePad(number)
    }else alert("Number muste be in raneg 1 to 99!")

}
gen.addEventListener("click",generate)