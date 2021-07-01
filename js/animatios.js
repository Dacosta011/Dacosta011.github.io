gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();


gsap.from(".transition2", {
    scrollTrigger: {
        trigger: '.transition2',
        start: "top center"
    },
    x: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.3
})

gsap.from(".transition3", {
    scrollTrigger: {
        trigger: '.transition3',
        start: "top center"
    },
    y: 100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.4
})

gsap.from(".transition4", {
    scrollTrigger: {
        trigger: '.transition4',
        start: "top center"
    },
    x: -100,
    opacity: 0,
    duration: 1.2,
    stagger: 0.6
})

gsap.from(".io",{
    scrollTrigger:{
        trigger:".io",
        start:"top center"
    },
    y: 100,
    opacity: 0,
    duration: 1.2
})

gsap.from(".about-info",{
    scrollTrigger:{
        trigger:".io",
        start:"top center"
    },
    x: 100,
    opacity: 0,
    duration: 1.5,
})

gsap.from(".sml",{
    scrollTrigger:{
        trigger:".io",
        start:"top center"
    },
    y: -20,
    opacity: 0,
    duration: 1.5,
    stagger:0.5
})