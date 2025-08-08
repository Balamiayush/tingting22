gsap.registerPlugin(ScrollTrigger, SplitText, TextPlugin);

// ✨ Enhanced Lenis for smoother scrolling
const lenis = new Lenis({
  lerp: 0.1, // Smoother scrolling
  smoothWheel: true,
  autoRaf: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

ScrollTrigger.matchMedia({
  // Desktop only
  "(min-width: 768px)": function () {
    // Main timeline with refined easing and timing
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page3",
        start: "top top",
        end: "+=200%",
        scrub: 1, // Smoother scrubbing
        pin: true,
        markers: false, // Disabled for production
        anticipatePin: 1 // Prevents jitter
      },
      defaults: {
        ease: "power2.inOut" // Consistent easing
      }
    });

    // Animate circles with staggered timing
    tl.from(".circle-1", { 
      scale: 0, 
      duration: 1.5,
      ease: "back.out(1.7)" // Nice bounce effect
    })
    .from(".line-1", { 
      scaleX: 0, 
      duration: 0.8,
      transformOrigin: "left center"
    }, "-=0.5")
    .from(".text-1", { 
      opacity: 0, 
      y: 20,
      duration: 0.8 
    }, "-=0.3")
    .from(".circle-2", { 
      scale: 0, 
      duration: 1.5,
      ease: "back.out(1.7)" 
    }, "+=0.3")
    .from(".line-2", { 
      scaleX: 0, 
      duration: 0.8,
      transformOrigin: "left center"
    }, "-=0.5")
    .from(".text-2", { 
      opacity: 0, 
      y: 20,
      duration: 0.8 
    }, "-=0.3")
    .from(".circle-3", { 
      scale: 0, 
      duration: 1.5,
      ease: "back.out(1.7)" 
    }, "+=0.3")
    .from(".line-3", { 
      scaleX: 0, 
      duration: 0.8,
      transformOrigin: "left center"
    }, "-=0.5")
    .from(".text-3", { 
      opacity: 0, 
      y: 20,
      duration: 0.8 
    }, "-=0.3")
    // Final animation with smoother transitions
    .to(".circle-1", { 
      scale: 8, 
      duration: 6,
      ease: "power2.in" 
    })
    .to([".circle-2", ".circle-3"], { 
      scale: 0, 
      duration: 1.5,
      ease: "power2.out" 
    }, "-=1.5")
    .to([".line", ".circle-text"], { 
      opacity: 0, 
      duration: 1,
      ease: "power1.out" 
    }, "-=1.5").to("body",{
      backgroundColor: "#2d2b31"
    })
  },

  // Mobile version with simplified but still smooth animation
  "(max-width: 767px)": function () {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".page3",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Smoother on mobile
        pin: true,
        anticipatePin: 1
      },
      defaults: {
        ease: "power2.inOut"
      }
    });

    tl.from(".circle-1", { 
      scale: 0, 
      duration: 1.5,
      ease: "back.out(1.7)" 
    })
    .from(".circle-2", { 
      scale: 0, 
      duration: 1.5,
      ease: "back.out(1.7)" 
    }, "+=0.5")
    .from(".circle-3", { 
      scale: 0, 
      duration: 1.5,
      ease: "back.out(1.7)" 
    }, "+=0.5")
    .to(".circle-1", { 
      scale: 8, 
      duration: 6,
      ease: "power2.in" 
    });
  }
});

// Enhanced text splitting animation

const splitTarget = document.getElementById("split-target");

    const split = new SplitText(splitTarget, { type: "words" });    
  
  gsap.to(split.words, {
    color: "#fff",
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".page4",
      start: "",
      // end: "bottom bottom",
      scrub: true,
      markers: true,
      pin: true
    
    }
  });

  
