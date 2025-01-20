// $(".carousel").carousel({ ride: false });

const animations = [
  { class: "bounce", type: "bounce", delay: 2, speed: "slow", repeat: 1 },
  { class: "fadeInDown", type: "fadeInDown", delay: 2, speed: "slow" },
  // { type: "fadeInDown", delay: 2, speed: "slow", repeat: 1 },
];

animations.forEach((animation) => {
  const observer = new IntersectionObserver(
    (entries) => {
      Array.from(entries).forEach((entry) => {
        if (entry.intersectionRatio >= 0.75) {
          entry.target.classList.add(
            "animate__animated",
            `animate__${animation.type}`,
            `animate__delay-${animation.delay}s`,
            `animate__${animation.speed}`,
            `animate__repeat-${animation.repeat}`,
            `${animation.infinite && "animate__infinite"}`
          );
        }
      });
    },
    {
      threshold: [0.25, 0.5, 0.75, 1],
    }
  );

  Array.from(document.querySelectorAll(`.${animation.class}`)).forEach(
    (element) => {
      observer.observe(element);
      console.log("achou");
    }
  );
});
