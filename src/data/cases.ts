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
    image: DesignImage;
  };

  typography: {
    name: string;
    description: string;
    image: DesignImage;
  };

  images:
    | [DesignImage, DesignImage, DesignImage]
    | [DesignImage, DesignImage, DesignImage, DesignImage];
};

export const cases: DesignCase[] = [
  {
    slug: "email-marketing",
    title: "Email Marketing Design",
    category: "Branding",
    description: "Email communication system for educational program on development platform 1C: Enterprise",
    cover: "/images/ecover.webp",

    goal: {
      name: "Build brand recognition",
      description: "Create a single letter system that accompanies the teacher at different stages of interaction with the educational program: from the first acquaintance to the beginning of the course."
    },

    users: {
      name: "Young professionals",
      description: "The target audience includes educators who are new to 1C:Enterprise development, as well as experienced teachers looking to enhance their skills and update their knowledge. They aim to gain structured, practical training that will help them confidently teach 1C development to their students."
    },

    colorPalette: {
      name: "Modern & Minimal",
      description: "A balanced mix of deep blue and green, warm neutrals, and coral accents creates a modern, professional, and welcoming educational identity.",
      image: {
        src: "/images/email-c1.png",
        alt: "Brand color palette"
      }
    },

    typography: {
      name: "Golos Text",
      description: "It is a modern sans-serif typeface with clean geometric forms and balanced proportions, combining excellent readability with a confident, contemporary, and technological feel.",
      image: {
        src: "/images/email-tp.png",
        alt: "Brand typodraphy"
      }
    },

    images: [
      {
        src: "/images/email-phone-mockup.webp",
        alt: "Brand identity overview"
      },
      {
        src: "/images/email-laptop-mockup.webp",
        alt: "Brand identity overview"
      },
      {
        src: "/images/email-tablet-mockup.webp",
        alt: "Brand applications"
      },
      {
        src: "/images/email-ph2-mockup.webp",
        alt: "Brand applications"
      }
    ]
  },

  {
    slug: "social-media",
    title: "Social Media Design",
    category: "Digital Design",
    description: "Visual content for social media.",
    cover: "/images/cool.jpg",

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
      description: "Bright accent colors combined with darker backgrounds to create contrast.",
      image: {
        src: "/images/email-cp.png",
        alt: "Brand color palette"
      }
    },

    typography: {
      name: "Manrope",
      description: "A geometric sans-serif typeface with a contemporary appearance.",
      image: {
        src: "/images/email-tp.png",
        alt: "Brand typodraphy"
      }
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
      description: "Expressive colors and contrasting shades that attract attention.",
      image: {
        src: "/images/email-cp.png",
        alt: "Brand color palette"
      }
    },

    typography: {
      name: "Montserrat",
      description: "A geometric sans-serif typeface with distinctive headlines.",
      image: {
        src: "/images/email-tp.png",
        alt: "Brand typodraphy"
      }
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
