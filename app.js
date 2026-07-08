
const words=["AI Projects","RaspberryPi Devices.","cyber projects.","Websites","Video Games"];
let i=0;
setInterval(()=>{
i=(i+1)%words.length;
document.getElementById("word").textContent=words[i];
},1800);

document.querySelectorAll(".card").forEach(card=>{
card.addEventListener("mousemove",e=>{
const r=card.getBoundingClientRect();
const x=(e.clientX-r.left-r.width/2)/18;
const y=(e.clientY-r.top-r.height/2)/18;
card.style.transform=`perspective(800px) rotateY(${x}deg) rotateX(${-y}deg) translateY(-8px)`;
});
card.addEventListener("mouseleave",()=>card.style.transform="");
});
