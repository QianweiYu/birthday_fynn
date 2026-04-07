function startSurprise(){

document.getElementById("surprise").style.display="block";

confetti();

}

function createHeart(){

const heart=document.createElement("div");

heart.classList.add("heart");

heart.innerHTML="💖";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(3+Math.random()*2)+"s";

document.querySelector(".hearts").appendChild(heart);

setTimeout(()=>{
heart.remove();
},5000);

}

setInterval(createHeart,300);


function confetti(){

for(let i=0;i<100;i++){

let conf=document.createElement("div");

conf.innerHTML="🎉";

conf.style.position="fixed";

conf.style.left=Math.random()*100+"vw";

conf.style.top="-10px";

conf.style.fontSize="25px";

conf.style.animation="fall 3s linear";

document.body.appendChild(conf);

setTimeout(()=>conf.remove(),3000);

}

}

const style=document.createElement("style");

style.innerHTML=`

@keyframes fall{
0%{transform:translateY(-10px)}
100%{transform:translateY(100vh)}
}

`;

document.head.appendChild(style);
