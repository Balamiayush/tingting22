gsap.registerPlugin(ScrollTrigger, SplitText, TextPlugin);

// ✨ Enhanced Lenis for smoother scrolling
const lenis = new Lenis({
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

ScrollTrigger.matchMedia({
  "(min-width: 768px)": function () {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page3",
        start: "top top",
        end: "+=200%",
        scrub: 1,
        pin: true,
        anticipatePin: 1
      },
      defaults: { ease: "power2.out" }
    });

    tl.from(".circle-1", { 
      scale: 0, 
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)"
    })
    .from(".line-1", { 
      scaleX: 0,
      duration: 0.7,
      transformOrigin: "center center"
    }, "-=0.6")
    .from(".text-1", { 
      opacity: 0, 
      y: 20,
      duration: 0.7 
    }, "-=0.4")

    .from(".circle-2", { 
      scale: 0,
      y: 50,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.7)"
    }, "+=0.2")
    .from(".line-2", { 
      scaleX: 0,
      duration: 0.7,
      transformOrigin: "left center"
    }, "-=0.6")
    .from(".text-2", { 
      opacity: 0, 
      y: 20,
      duration: 0.7 
    }, "-=0.4")

    .from(".circle-3", { 
      scale: 0, 
      y: 50,
      opacity: 0,

      duration: 1.2,
      ease: "back.out(1.7)"
    }, "+=0.2")
    .from(".line-3", { 
      scaleX: 0, 
      duration: 0.7,
      transformOrigin: "center center"
    }, "-=0.6")
    .from(".text-3", { 
      opacity: 0, 
      y: 20,
      duration: 0.7 
    }, "-=0.4")

    // Final sequence
    .to(".circle-1", { 
      scale: 7.2, 
      duration: 6,
      ease: "power1.inOut"
    })
    .to([".circle-2", ".circle-3"], { 
      scale: 0,
      opacity: 0,
      duration: 1.2,
      ease: "power2.in"
    }, "-=1.2")
    .to([".line", ".circle-text"], { 
      opacity: 0,
      duration: 1,
      ease: "power1.out"
    }, "-=1")
    .to("body", {
      backgroundColor: "#2d2b31",
      duration: 1.5
    }, "-=1")
    .to(".circle p", {
      color: "#fff",
      duration: 1.2
    }, "-=1");
  },

"(max-width: 767px)": function () { 
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".page3",
      start: "top top",
      end: "+=230%", // extra scroll for smoother pacing
      scrub: 2.5,
      pin: true
    },
  });

  // Appear animations
  tl.from(".circle-1", { 
      scale: 0, 
      opacity: 0, 
      duration: 3, 
      ease: "power2.out"
    })
    .from(".circle-2", { 
      scale: 0, 
      opacity: 0, 
      duration: 3, 
      ease: "power2.out"
    }, "+=0.8") // delay between appearances
    .from(".circle-3", { 
      scale: 0, 
      opacity: 0, 
      duration: 3, 
      ease: "power2.out"
    }, "+=0.8")

    // Disappear animations
    .to(".circle-3", {
      scale: 0,
      opacity: 0,
      duration: 3,
      ease: "power2.in"
    }, "+=1")
    .to(".circle-2", {
      scale: 0,
      opacity: 0,
      duration: 3,
      ease: "power2.in"
    }, "+=0.8")

    // Final expansion of circle-1
    .to(".circle-1", { 
      scale: 5, 
      duration: 10,
      ease: "power1.inOut" 
    }, "+=1")

    // Fade out all text
    .to(".circle p", {
      opacity: 0,
      duration: 1
    }, "<");
}

});

// ✨ Text Animation
const splitTarget = document.getElementById("split-target");

ScrollTrigger.matchMedia({
  "(min-width: 768px)": function () {
    const split = new SplitText(splitTarget, { type: "words" });

    gsap.to(split.words, {
      color: "#fff",
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".page4",
        start: "-10% top",
        scrub: true,
        pin: true,
        // markers: 1
      }
    });
  }
});
