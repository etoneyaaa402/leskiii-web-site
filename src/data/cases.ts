
export type DesignImage = {
  src: string;
  alt: string;
};

export type DesignCase = {
  slug: string;
  title: string;
  category: string;
  description: string;
  cover: string;

  goal: {
    name: string;
    description: string;
  };

  users: {
    name: string;
    description: string;
  };

  colorPalette: {
    name: string;
    description: string;
  };

  typography: {
    name: string;
    description: string;
  };

  images:
    | [DesignImage, DesignImage, DesignImage]
    | [DesignImage, DesignImage, DesignImage, DesignImage];
};

export const cases: DesignCase[] = [
  {
    slug: "brand-identity",
    title: "Brand Identity",
    category: "Branding",
    description: "A visual identity for a new brand.",
    cover: "/images/cat.jpg",

    goal: {
      name: "Build brand recognition",
      description: "Create a consistent visual identity that communicates the brand's values."
    },

    users: {
      name: "Young professionals",
      description: "People looking for modern, recognizable and trustworthy brands."
    },

    colorPalette: {
      name: "Modern & Minimal",
      description: "Neutral tones combined with accent colors to create a clean visual identity."
    },

    typography: {
      name: "Inter",
      description: "A modern sans-serif typeface that provides readability and a minimal visual style."
    },

    images: [
      {
        src: "/images/brand-1.jpg",
        alt: "Brand identity overview"
      },
      {
        src: "/images/brand-2.jpg",
        alt: "Brand color palette"
      },
      {
        src: "/images/brand-3.jpg",
        alt: "Brand applications"
      }
    ]
  },

  {
    slug: "social-media",
    title: "Social Media Design",
    category: "Digital Design",
    description: "Visual content for social media.",
    cover: "/images/smoke.jpg",

    goal: {
      name: "Increase audience engagement",
      description: "Develop a recognizable visual system for social media content."
    },

    users: {
      name: "Social media audience",
      description: "Users who interact with the brand through social media platforms."
    },

    colorPalette: {
      name: "Bold & Expressive",
      description: "Bright accent colors combined with darker backgrounds to create contrast."
    },

    typography: {
      name: "Manrope",
      description: "A geometric sans-serif typeface with a contemporary appearance."
    },

    images: [
      {
        src: "/images/social-1.jpg",
        alt: "Social media post design"
      },
      {
        src: "/images/social-2.jpg",
        alt: "Social media stories"
      },
      {
        src: "/images/social-3.jpg",
        alt: "Social media content"
      }
    ]
  },

  {
    slug: "campaign",
    title: "Advertising Campaign",
    category: "Advertising",
    description: "A visual concept for an advertising campaign.",
    cover: "/images/monkey.jpg",

    goal: {
      name: "Promote a new product",
      description: "Create an engaging advertising concept that attracts potential customers."
    },

    users: {
      name: "Potential customers",
      description: "People interested in discovering new products and solutions."
    },

    colorPalette: {
      name: "Dynamic & Contrast",
      description: "Expressive colors and contrasting shades that attract attention."
    },

    typography: {
      name: "Montserrat",
      description: "A geometric sans-serif typeface with distinctive headlines."
    },

    images: [
      {
        src: "/images/campaign-1.jpg",
        alt: "Advertising campaign concept"
      },
      {
        src: "/images/campaign-2.jpg",
        alt: "Advertising poster"
      },
      {
        src: "/images/campaign-3.jpg",
        alt: "Advertising campaign materials"
      }
    ]
  }
];
