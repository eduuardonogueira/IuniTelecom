const menuNav = document.getElementsByClassName("navbar-nav");

const menuOptions = [
  {
    classObserver: ".openMenu",
    show: true,
    intersectionRatio: 0.75,
  },
  {
    classObserver: ".closeMenu",
    show: false,
    intersectionRatio: 0.75,
  },
];

menuOptions.forEach((options) => {
  const menuObserver = new IntersectionObserver(
    (entries) => {
      Array.from(entries).forEach((entry) => {
        if (entry.intersectionRatio >= options.intersectionRatio) {
          options.show
            ? $(".navbar-nav").addClass("show")
            : $(".navbar-nav").removeClass("show");
        }
      });
    },
    {
      threshold: [0.25, 0.5, 0.75, 1],
    }
  );

  Array.from(document.querySelectorAll(options.classObserver)).forEach(
    (element) => {
      menuObserver.observe(element);
    }
  );
});

const animations = [
  { class: "bounce", type: "bounce", delay: 2, speed: "slow", repeat: 1 },
  { class: "fadeInDown", type: "fadeInDown", delay: 0, speed: "slow" },
  {
    class: "fadeInLeft",
    type: "fadeInLeft",
    delay: 0,
    speed: "slow",
    repeat: 1,
  },
  {
    class: "fadeInRight",
    type: "fadeInRight",
    delay: 0,
    speed: "slow",
    repeat: 1,
  },
  {
    class: "fadeInUp",
    type: "fadeInUp",
    delay: 0,
    speed: "slow",
    repeat: 1,
  },
  {
    class: "appsAnimation-1",
    type: "fadeInUp",
    delay: 0,
    speed: "slow",
    repeat: 1,
  },
  {
    class: "appsAnimation-2",
    type: "fadeInUp",
    delay: 0,
    speed: "slower",
    repeat: 1,
  },
  {
    class: "appsAnimation-3",
    type: "fadeInUp",
    delay: 1,
    speed: "slow",
    repeat: 1,
  },
  {
    class: "slowIn",
    type: "slowIn",
    delay: 1,
    speed: "slow",
    repeat: 1,
  },
];

animations.forEach((animation) => {
  const observer = new IntersectionObserver(
    (entries) => {
      Array.from(entries).forEach((entry) => {
        if (entry.intersectionRatio >= 0.5) {
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
    }
  );
});
