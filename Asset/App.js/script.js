function locoScroll() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

locoScroll();

var tl = gsap.timeline();

tl.from("#fst h1 , #snd h1 , #trd ", {
  y: -100,
  duration: 0.5,
  stagger: 0.1,
});

tl.from(".glass ,.sglass", {
  x: -500,
  duration: 0.6,
});
tl.from(".descrp ,.btn", {
  x: 500,
  duration: 0.6,
});


tl.from(".heading h1, .heading h2" ,{
  y: 500, 
  opacity: 0, 
  duration: 0.6,
  ease: "power2.out"
})

tl.from(".imgd img" ,{
  rotate:50,
  scale:0,
})

