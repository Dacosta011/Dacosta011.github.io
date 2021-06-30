gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from('.fist', {
    y: '-30%',
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut
})
tl.from('.content', {
    y: '-30%',
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut
},"-=1.5")
tl.from('.stagger1', {
    opacity: 0,
    y: -50,
    stagger: .3,
    ease: Power4.easeOut,
    duration: 2
}, "-=2.0")
tl.from('.hero-json', {
    opacity: 0, y: 150, ease: Power4.easeOut, duration: 2
}, "-=2.0")


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