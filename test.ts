


backgroundImage: {
    dot: "url('/assets/dots.svg')",
    
  },


  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    [require("tailwindcss-animate")]
  ],
} satisfies Config
export default config;