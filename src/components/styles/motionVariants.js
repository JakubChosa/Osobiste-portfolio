export const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      when: "beforeChildren",
      staggerChildren: 0.3,
      stiffness: 70,
      mass: 0.85,
      damping: 10,
    },
  },
  exit: {
    x: "-100vw",
    transition: { duration: 0.3 },
  },
};

export const navbarVariants = {
  hidden: {
    y: -250,
    translateX: "-50%",
    width: 50,
  },
  visible: {
    y: 0,
    width: "100%",
    transition: {
      type: "tween",
      staggerChildren: 0.5,
      delay: 0.3,
      when: "beforeChildren",
      width: { delay: 0.6, duration: 0.4 },
    },
  },
};
export const aboutVariants = {
  hidden: {
    width: 10,
    height: 10,
    opacity: 0,
  },
  visible: {
    width: "auto",
    height: "auto",
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
      when: "beforeChildren",
      width: { delay: 0.5, duration: 0.5 },
    },
  },
};
export const projectTemplateVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    // transition: {
    //   type: 'spring',
    //   delay: 0.2,
    //   duration: 0.5
    // }
  },
};
export const projectTemplateBtnVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      delay: 0.3,
      duration: 0.3,
    },
  },
};
export const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      delay: 0.2,
      duration: 0.3,
    },
  },
};
export const imgVariants = {
  hidden: {
    scale: 0,
    y: 0,
    // rotate: 0
  },
  visible: {
    scale: 1,
    y: [-20, 40, -60, 0],
    // rotate: 360,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};
export const contactVariants = {
  hidden: {
    y: "100vh",
    scale: 0.5,
  },
  visible: {
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 13,
    },
  },
};
