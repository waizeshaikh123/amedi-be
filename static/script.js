let tl = gsap.timeline()

tl.from(".header-section, .TopBar, .nav",{
    duration:2,
    x:-500,
    opacity:0,
    stagger:1,
})

gsap.from(".hero-section",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:".hero-section",
        scroller:"body",
        start:"top 100%",
        end:"top 10%"
    }
})

gsap.from(".self-section",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:".self-section",
        scroller:"body",
        start:"top 100%",
        end:"top 10%"
    }
})

gsap.from(".our-courses",{
    duration:2,
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:".our-courses",
        scroller:"body",
        start:"top 100%",
        end:"top 10%"
    }
})

gsap.from(".online-course, .main-card",{
    x:-500,
    opacity:0,
    stagger:0.4,
    scrollTrigger:{
        trigger:".online-course",
        scroller:"body",
        start:"top 100%",
        end:"top 10%",
    }
})