gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText) 

ScrollSmoother.create({
    smooth: 2,
    effects: true
})


function animarpagina() {
    //animações da section hero 
gsap.from(".hero",{
    opacity: 0,
    duration: 1
})

gsap.from("picture:nth-child(2)",{
    y:200,
    duration:1.5
})
gsap.from("picture:nth-child(1)",{
    y:-200,
    duration:1.
})

// animações com os Cards. 

gsap.from(".card",{
    opacity:0,
    duration: 1,
    stagger:.3,
    filter: "blur(20px)", 
    scrollTrigger: {
        trigger: "#tri",
        start: "50% 100%",
        end: "100% 70%",
        scrub: true,
    }
})

gsap.from(".obg ul li",{
    opacity: 0,
    stagger:.2,
    x:40,
    filter:"blur(10px)",
    scrollTrigger: {
        trigger:".obg ul",
        start:"0% 80%",
        end:"100% 50%",
        scrub:true,
        
    }
})

//ANIMAÇÃO DO FOOTER

gsap.from("footer",{
    y: "-30%",
    immediateRender: false,
    scrollTrigger: {
        trigger: "footer",
        scrub:true,
        invalidateOnRefresh:true,
        end: "100% 100%"
    }

})


//ANIMAÇÃO DOS TEXTOS
const textoSplit = document.querySelectorAll(".animate");

textoSplit.forEach((textoUnicoSplit)=>{
    const split = SplitText.create(textoUnicoSplit,{
        type: "words, chars",
        mask: "lines",
    })

    gsap.from(split.chars,{
        y : 40,
        stagger:0.03,
        opacity:0,
        duration: 0.3,
        scrollTrigger: {
            trigger: textoUnicoSplit,            
        }
    }) 
})

}



//PRE-LOADER -VC PRECISAR CRIAR UMA TIMELINE PARA CADA ANIMAÇÃO. 


const tl = gsap.timeline({
    onComplete(){
        animarpagina()
        gsap.to("#prelod",{
            opacity:0,
            duration:2,
            onComplete(){
                gsap.to("#prelod",{
                    display:"none",
                })
            }
        })
    }
});

tl.to("#prelod, path",{
    strokeDashoffset: 0,
    duration: 3,

})
tl.to("#prelod, path",{
    fill: "red",
    strokeDashoffset:0,

})
