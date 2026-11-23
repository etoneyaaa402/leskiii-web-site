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

  icons: {
    name: string;
    description: string;
    image: DesignImage;
  };

  typography: {
    name: string;
    description: string;
    image: DesignImage;
  };

  logo?: {
    name: string;
    description: string;
    image: DesignImage;
  };

  result: string;

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
        src: '/images/email-cp-2.webp',
        alt: "Brand color palette"
      }
    },

    icons: {
      name: "Business & Technology",
      description: "This set features a collection of blue, flat-design icons representing core business and technology concepts such as microchips, documentation, and organizational structures.",
      image: {
        src: "/images/email-icons-3.webp",
        alt: "Brand color palette"
      }
    },

    typography: {
      name: "Golos Text",
      description: "It is a modern sans-serif typeface with clean geometric forms and balanced proportions, combining excellent readability with a confident, contemporary, and technological feel.",
      image: {
        src: "/images/email-tp.webp",
        alt: "Brand typodraphy"
      }
    },

    result: "The email campaign successfully utilized responsive design to deliver the Academy 1C content seamlessly across mobile and desktop platforms, ensuring high readability. This strategic approach resulted in effective audience engagement and drove conversions by making the training materials easily accessible on any device.",

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
    slug: "interview-ai-dashboard",
      title: "Interview AI: Automated Candidate Evaluation",
      category: "SaaS / HR Tech",
      description:
        "A commercial AI-powered recruitment platform developed to automate candidate evaluation. The system analyzes resumes and interview transcripts, assesses candidate fit against job requirements, and generates structured insights to support data-driven hiring decisions.",
    
      cover: "/images/iMac_on_Table_Mockup_2.png",
    
      goal: {
        name: "Objective",
        description:
          "To simplify and accelerate candidate evaluation by transforming unstructured recruitment data into clear, actionable insights. The platform helps hiring teams assess candidate qualifications, identify potential inconsistencies between resumes and interviews, and make more informed hiring decisions."
      },
    
      users: {
        name: "Target Audience",
        description:
          "Technical Recruiters, HR Managers, and Hiring Managers who need to evaluate multiple candidates efficiently, compare their qualifications against job requirements, and reduce the time spent on manual resume and interview screening."
      },
    
      colorPalette: {
        name: "Color Palette",
        description:
          "A professional and modern palette combining Cerulean Blue for primary actions and interactive elements, Dark Emerald for positive indicators, Eggshell for subtle backgrounds, Onyx for typography, and Red for alerts and negative states.",
        image: { src: "/images/ai-cp.webp", alt: "Color Palette" }
      },
    
      icons: {
        name: "Iconography",
        description:
          "A minimalist icon system designed for clarity and consistency. Icons are placed inside soft, rounded containers and use contextual color accents to distinguish interface elements and make key information easier to scan.",
        image: { src: "/images/ai-icons.webp", alt: "Icon Set" }
      },
    
      typography: {
        name: "Typography",
        description:
          "A clean sans-serif typeface selected for readability and clarity in data-intensive interfaces. A combination of ExtraBold, Medium, and Regular weights creates a clear visual hierarchy across headings, metrics, labels, and supporting information.",
        image: { src: "/images/ai-tp.webp", alt: "Typography" }
    },

    logo: {
      name: "Logo Identity",
      description:
        "A modern, abstract logo mark constructed with two mirrored, rounded geometric shapes. The design emphasizes symmetry, precision, and a clean tech-focused aesthetic, perfectly aligning with the platform's structured and data-driven nature.",
      image: { src: "/images/logo-prtp-2.png", alt: "logo Set" }
    },
    
      result:
        "The completed commercial product brings resume analysis, interview evaluation, and candidate scoring together in a centralized interface. Integrated into a real recruitment workflow, the system processes candidate data and generates comprehensive evaluation reports in approximately 30–60 seconds. By combining AI-powered insights, consistency checks, and structured reporting, it helps hiring teams reduce manual screening efforts and make more informed decisions. The responsive interface also provides convenient access to candidate data and evaluation results across desktop and mobile devices.",
    
      images: [
        { src: "/images/iMac_on_Table_Mockup_3 1.png", alt: "AI Candidate Evaluation Dashboard" },
        { src: "/images/iPhone_Mockup_3 1.png", alt: "Candidate Analysis and AI-Generated Insights" },
        { src: "/images/Smartphone_on_the_Ground 1.png", alt: "Mobile User Settings" },
        { src: "/images/MacBook_Mockup_2 1.png", alt: "Mobile Candidate List" }
      ],
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

    icons: {
      name: "Modern & Minimal",
      description: "A balanced mix of deep blue and green, warm neutrals, and coral accents creates a modern, professional, and welcoming educational identity.",
      image: {
        src: "/images/email-c1.webp",
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

    result: "The email campaign successfully utilized responsive design to deliver the Academy 1C content seamlessly across mobile and desktop platforms, ensuring high readability. This strategic approach resulted in effective audience engagement and drove conversions by making the training materials easily accessible on any device.",

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

    icons: {
      name: "Modern & Minimal",
      description: "A balanced mix of deep blue and green, warm neutrals, and coral accents creates a modern, professional, and welcoming educational identity.",
      image: {
        src: "/images/email-c1.webp",
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

    result: "The email campaign successfully utilized responsive design to deliver the Academy 1C content seamlessly across mobile and desktop platforms, ensuring high readability. This strategic approach resulted in effective audience engagement and drove conversions by making the training materials easily accessible on any device.",

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
