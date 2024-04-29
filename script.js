const menu = document.querySelector("#nav i")
const cross = document.querySelector("#full i")


//gsap-code
const tl = gsap.timeline()


tl.to("#full",{
    right:0,
    duration:0.2
})

tl.from("#full h4",{
    opacity:0,
    x:50,
    duration:0.3,
    stagger:0.3
})
tl.pause()

// event listner 
menu.addEventListener("click",function(){
    tl.play()
})

cross.addEventListener("click",function(){
    tl.reverse()
})



