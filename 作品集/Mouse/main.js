let thisH1 = document.getElementsByTagName("h1")[0]
let thisp = document.getElementsByTagName("p")[0]
let thisdiv = document.getElementsByTagName("div")[0]

function mouseIn(){
    thisH1.innerHTML="你進來啦";
}
function mouseOut(){
    thisH1.innerHTML="你出去啦";
    thisp.innerHTML="";
}
function mouseMove(e){
    console.log(e);
    thisp.innerHTML="走來走去啦.位置:"+e.clientX+","+e.clientY;
}

thisdiv.addEventListener("mouseover",mouseIn);
thisdiv.addEventListener("mouseout",mouseOut);
thisdiv.addEventListener("mousemove",mouseMove);
