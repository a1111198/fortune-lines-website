import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        figtree_light: ["Figtree-Light", "sans-serif"],
        figtree_light_italic: ["Figtree-LightItalic", "sans-serif"],
        figtree_medium: ["Figtree-Medium", "sans-serif"],
        figtree_medium_italic: ["Figtree-MediumItalic", "sans-serif"],
        figtree_regular: ["Figtree-Regular", "sans-serif"],
        figtree_regular_italic: ["Figtree-RegularItalic", "sans-serif"],
        figtree_semi_bold: ["Figtree-SemiBold", "sans-serif"],
        figtree_semi_bold_italic: ["Figtree-SemiBoldItalic", "sans-serif"],
        figtree_bold: ["Figtree-Bold", "sans-serif"],
        figtree_bold_italic: ["Figtree-BoldItalic", "sans-serif"],
        figtree_extra_bold: ["Figtree-ExtraBold", "sans-serif"],
        figtree_extra_bold_italic: ["Figtree-ExtraBoldItalic", "sans-serif"],
        
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} satisfies Config;
