module.exports = {
  theme: {
    extend: {
      keyframes: {
        floatDown: {
          from: { opacity: 0, transform: "translateY(-20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        floatDown: "floatDown 0.5s ease-in-out",
      },
    },
  },
};
