// let firstvar=document.querySelector("h1");
// firstvar.textContent="hello world";
// document.querySelector("html").onclick=()=>{alert("please don't touch me!")};
// alert("hi! how about this home page? if you like it i will be very happy");
let myimage=document.querySelector("img");
myimage.onclick=()=>{
    let imageattr=myimage.getAttribute("src");
    if(imageattr==="images/OIP-C.jfif"){
        myimage.setAttribute('src',"images/OIP-C2.jfif");
    }else{
        myimage.setAttribute('src',"images/OIP-C.jfif");
    }
}

function setname(){
    let myname;
    while(!myname){
        myname=prompt('please input your name');
    }
    localStorage.setItem('name',myname);
    mytitle.textContent='welcome to this page '+myname;
}

let mybutton=document.querySelector("button");
let mytitle=document.querySelector('h1');

if(!localStorage.getItem('name')){
    setname();
}else{
    mytitle.textContent='welcome to this page '+localStorage.getItem('name');
}

mybutton.onclick=()=>{
    setname();
}