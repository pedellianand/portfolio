window.addEventListener("load",()=>{
    document.getElementById("loader").style.display="none";
});

window.addEventListener("scroll",()=>{
    const winScroll=document.body.scrollTop||document.documentElement.scrollTop;
    const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;
    const scrolled=(winScroll/height)*100;
    document.getElementById("progressBar").style.width=scrolled+"%";
});

const faders=document.querySelectorAll(".fade");
const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{threshold:.2});
faders.forEach(el=>observer.observe(el));

document.getElementById("year").textContent=new Date().getFullYear();

document.getElementById("menuToggle").onclick=function(){
    document.getElementById("navLinks").classList.toggle("open");
};
