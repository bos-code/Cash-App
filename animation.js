

const tl = gsap.timeline({defaults: {duration: 1}});
// tl.from(".list", {y: 10,  stagger: 0.2});



const list = gsap.utils.toArray(".list");

gsap.fromTo(
  list,
  { y: -100, opacity: 0, rotateY: 180 }, // Start above with a 180° Y rotation
  { 
    y: 0, opacity: 1, rotateY: 0, // End at normal position and no rotation
    duration: .51,
    yoyo: true, // Yoyo back and forth 
    ease: "back.out(1.7)", 
    stagger: 0.2 // Each element animates sequentially
  }
);
