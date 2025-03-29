// const { default: gsap } = require("gsap");

const tl = gsap.timeline({ defaults: { duration: 1 } });
// tl.from(".list", {y: 10,  stagger: 0.2});

const list = gsap.utils.toArray(".list");
const object = gsap.utils.toArray(".icons");

tl.fromTo(
  list,
  { y: -100, opacity: 0, rotateY: 180 }, // Start above with a 180° Y rotation
  {
    y: 0,
    opacity: 1,
    rotateY: 0, // End at normal position and no rotation
    duration: 0.51,
    yoyo: true, // Yoyo back and forth
    ease: "back.out(1.7)",
    stagger: 0.2, // Each element animates sequentially
  }
)
  .from(".lft", {
    opacity: 0,
    xPercent: -100,
    ease: "back.out(1)",
  })
  .from(
    ".rgt",
    {
      opacity: 0,
      xPercent: 100,
      ease: "back.out(1)",
    },
    "<"
  )
  .from(
    ".phone",
    {
      opacity: 0.3,
      yPercent: 150,
      ease: Back,
    },
    "<0.3"
  )
  .from(
    object,
    {
      opacity: 0,
      stagger: 0.3,
      scale: 0.5,
      ease: Back,
    },
    "-=.5"
  )

  .from(
    ".header",
    {
      duration: 2,
      backgroundSize: 23000,
      // backgroundRepeat: true,
      backgroundPosition: top,
    },
    "<.6"
  );
