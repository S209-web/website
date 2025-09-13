export interface ServiceDetail {
  id: string;
  title: string;
  tagline: string;
  image: string;
  intro: string;
  description: string;
  sections: {
    title: string;
    content: string[];
  }[];
  cta: string;
}

export const serviceDetailData: ServiceDetail[] = [
  {
    id: 'graphic-designing',
    title: 'Graphic Designing',
    tagline: 'Designs so bold that your brand never whispers, it SHOUTS.',
    image: '/assets/img/Graphic design.png',
    intro: 'We don\'t just create content, we craft experiences that make your brand unforgettable.',
    description: 'Our graphic design services build a strong visual identity that not only looks great but also makes your brand instantly recognizable and trustworthy. We don\'t just create assets; we craft a visual language that speaks directly to your audience, turning first glances into lasting connections.',
    sections: [
      {
        title: 'Core Brand Assets',
        content: [
          'We design the foundation of your brand, from unique logos and full brand kits',
          'Professional business cards, presentations, brochures, flyers, and banners',
          'Complete visual identity systems with consistent styling'
        ]
      },
      {
        title: 'Social & Digital Creatives',
        content: [
          'Stunning, on-brand graphics and animations for all social platforms',
          'Content optimized to drive engagement, clicks, and shares',
          'Short looping animations and scalable vector graphics',
          'Designs that look perfect on any screen size'
        ]
      },
      {
        title: 'Specialized Design',
        content: [
          'Custom design services that give your brand a unique touch',
          'Product packaging and merchandise design',
          'Custom iconography & illustration for websites or apps',
          'Print and digital advertising creatives'
        ]
      }
    ],
    cta: 'Let\'s Make Your Brand Unforgettable.'
  },
  {
    id: 'video-editing',
    title: 'Video Editing & Motion Graphics',
    tagline: 'Stories that move your audience.',
    image: '/assets/img/Video editing.png',
    intro: 'You have a story to tell but need to bring it to life in a way that truly engages people.',
    description: 'We bring your stories to life with professional video content that captivates and moves your audience. From quick social clips to in-depth corporate videos, we make sure your message is seen and heard. We don\'t just edit videos; we craft stories that move, persuade, and inspire.',
    sections: [
      {
        title: 'Corporate & Commercial Videos',
        content: [
          'High-impact videos designed to elevate your brand',
          'Promotional brand films and corporate videos',
          'Product showcases and social media advertisements',
          'Professional post-production for polished content'
        ]
      },
      {
        title: 'Documentaries & Explainer Videos',
        content: [
          'Turn complex topics into compelling narratives',
          'Long-form content and educational videos',
          'Animated explainers that simplify your message',
          'Narrative flow that guides audience from start to finish',
          'Research & B-roll integration for immersive experience'
        ]
      },
      {
        title: 'Animation & Visual Effects (VFX)',
        content: [
          'Stunning animated content and special effects',
          '2D & 3D modeling with custom characters and environments',
          'Keyframe animation for smooth, professional motion graphics',
          'Visual effects including green screen compositing',
          'Dynamic on-screen effects and enhancements'
        ]
      }
    ],
    cta: 'Let\'s Bring Your Story to Life.'
  },
  {
    id: 'copywriting',
    title: 'Copywriting',
    tagline: 'Words are powerful, but the right words turn visitors into customers.',
    image: '/assets/img/copywriter1.png',
    intro: 'In the digital world, words are your most valuable asset.',
    description: 'We craft compelling copy that doesn\'t just inform—it connects, sells, and inspires. From the headline of your homepage to the final line of an email, we write with a purpose: to build your brand and drive your business forward.',
    sections: [
      {
        title: 'Website & Authority Content',
        content: [
          'Strategic, SEO-optimized copy that turns visitors into customers',
          'Core website pages and compelling product descriptions',
          'High-value blogs and case studies that build authority',
          'Content that establishes your brand as industry leader'
        ]
      },
      {
        title: 'Ad & Sales Copy',
        content: [
          'Every word designed to grab attention and drive action',
          'Powerful, persuasive copy for ad campaigns',
          'Sales funnel copy and video scripts',
          'Copy that gets the click and makes the sale'
        ]
      },
      {
        title: 'Email & Social Marketing',
        content: [
          'Engaging email newsletters and automated campaigns',
          'Short, memorable copy for social media posts',
          'Captions and scripts designed to go viral',
          'Content that builds a loyal following'
        ]
      },
      {
        title: 'Specialized Content & Technical Writing',
        content: [
          'Case studies that tell customer success stories',
          'White papers & eBooks for lead generation',
          'Video scripts for corporate and brand content',
          'Product descriptions that boost sales and reduce returns'
        ]
      }
    ],
    cta: 'Let\'s Turn Your Words into Profit.'
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    tagline: 'Social media is the face of your brand & we make sure it shines.',
    image: '/assets/img/Social media manager.png',
    intro: 'We manage, you grow. We handle every aspect of your social presence, so you can focus on your business while we build your brand\'s authority.',
    description: 'This is about more than just posting; it\'s about strategic growth, audience engagement, and consistent results. We create a purpose-driven content plan and craft scroll-stopping visuals and captions that connect with your audience.',
    sections: [
      {
        title: 'Strategic Planning & Content',
        content: [
          'Purpose-driven content plans tailored to your goals',
          'Scroll-stopping visuals and engaging captions',
          'Content that connects with your target audience',
          'Complete scheduling and posting management'
        ]
      },
      {
        title: 'Optimization & Engagement',
        content: [
          'Data-driven research to expand your reach',
          'Content optimized for discovery by the right people',
          'Active community management and engagement',
          'Turning followers into a loyal community'
        ]
      },
      {
        title: 'Proactive Brand Protection',
        content: [
          'Crisis management before issues escalate',
          'Custom strategies for LinkedIn, TikTok, Pinterest',
          'Platform-specific optimization for maximum impact',
          'Keeping your brand ahead of the curve'
        ]
      }
    ],
    cta: 'Let\'s Make Your Brand Shine on Social.'
  },
  {
    id: 'influencer-marketing-pr',
    title: 'Influencer Marketing & PR',
    tagline: 'Collaborations that click. PR that puts you on the map.',
    image: '/assets/img/Influencer Marketer.png',
    intro: 'In a world full of advertising noise, we help you build trust and credibility by partnering with the right voices.',
    description: 'We go beyond simple collaborations to create authentic partnerships and secure media placements that put your brand on the map and in front of the right audience. We connect you with authentic creators and secure valuable media coverage.',
    sections: [
      {
        title: 'Micro & Nano Influencer Partnerships',
        content: [
          'Connect with authentic creators with dedicated followings',
          'Leverage their trust for genuine brand impact',
          'Higher engagement through authentic partnerships',
          'Targeted reach to your ideal audience'
        ]
      },
      {
        title: 'PR Placements',
        content: [
          'Featured placement in relevant publications and podcasts',
          'Powerful social proof and credibility building',
          'External endorsements as valuable marketing assets',
          'Strategic media coverage for brand authority'
        ]
      },
      {
        title: 'Media Outreach',
        content: [
          'Relationship building with journalists and editors',
          'Securing features, interviews, and brand mentions',
          'Expanding reach and authority in your industry',
          'Strategic media placement for maximum impact'
        ]
      }
    ],
    cta: 'Let\'s Put Your Brand on the Map.'
  },
  {
    id: 'ugc-creator-commerce',
    title: 'UGC & Creator Commerce',
    tagline: 'Real voices, real growth. Turn customers into brand creators.',
    image: '/assets/img/content creation.png',
    intro: 'In the age of social media, authenticity wins.',
    description: 'We help you turn your most loyal customers and passionate creators into your best brand advocates. By leveraging authentic, user-generated content, we build trust and drive real-world growth that traditional marketing messages can\'t achieve.',
    sections: [
      {
        title: 'UGC-style Testimonials',
        content: [
          'Find and feature authentic customer content',
          'Turn positive experiences into powerful social proof',
          'Build trust with new audiences through real reviews',
          'Authentic content that feels like recommendations'
        ]
      },
      {
        title: 'Product Seeding with Creators',
        content: [
          'Get products into hands of micro-creators',
          'Generate genuine, unscripted content',
          'Organic brand showcasing that builds trust',
          'Content that feels less like ads, more like recommendations'
        ]
      },
      {
        title: 'Affiliate Programs',
        content: [
          'Set up and manage affiliate partnerships',
          'Turn passionate customers into sales force',
          'Performance-based growth through referrals',
          'Scale your business with every recommendation'
        ]
      },
      {
        title: 'Live Shopping Campaigns',
        content: [
          'Tap into high-conversion live commerce',
          'Manage and produce live shopping events',
          'Turn viewers into buyers in real time',
          'Interactive shopping experiences that convert'
        ]
      }
    ],
    cta: 'Let\'s Turn Your Customers into Advocates.'
  },
  {
    id: 'performance-marketing',
    title: 'Performance Marketing',
    tagline: 'Where every click counts.',
    image: '/assets/img/performancemarketing.png',
    intro: 'Every click, every ad, and every penny matters.',
    description: 'We use data-driven strategies to maximize your ROI, so you can stop guessing and start growing. Our team turns traffic into profit and helps you achieve your business goals with precision. We put your brand in front of the right audience and drive them to take action.',
    sections: [
      {
        title: 'Targeted Ad Campaigns',
        content: [
          'Manage and optimize campaigns across Google, Meta, LinkedIn',
          'Data-driven ad strategies for maximum ROI',
          'Precise audience targeting for qualified traffic',
          'YouTube advertising for video-first engagement'
        ]
      },
      {
        title: 'Optimization & Strategy',
        content: [
          'Continuous A/B testing for performance improvement',
          'Powerful retargeting strategies to recapture interest',
          'Campaign optimization for peak performance',
          'Strategic budget allocation across channels'
        ]
      },
      {
        title: 'Budget Management',
        content: [
          'Clear reporting and transparent budget management',
          'Efficient spend allocation for maximum returns',
          'ROI tracking and performance analytics',
          'Cost-effective scaling strategies'
        ]
      }
    ],
    cta: 'Let\'s Turn Every Click into Profit.'
  },
  {
    id: 'cro-analytics-hub',
    title: 'CRO & Analytics Hub',
    tagline: 'Conversions aren\'t luck—they\'re strategy.',
    image: '/assets/img/seo.png',
    intro: 'Getting traffic isn\'t enough, you need conversions.',
    description: 'We take a structured, data-driven approach to turn your website visitors into customers by identifying and fixing the leaks in your sales funnel. A structured approach to turn traffic into sales through optimization and insights.',
    sections: [
      {
        title: 'Funnel Optimization',
        content: [
          'Analyze your user journey to streamline conversion path',
          'Identify and fix leaks in your sales funnel',
          'Optimize the path from visitor to sale',
          'Strategic improvements for higher conversion rates'
        ]
      },
      {
        title: 'A/B & Multivariate Testing',
        content: [
          'Test different versions of pages to find what works',
          'Data-driven decisions for conversion improvements',
          'Systematic testing for measurable results',
          'Continuous optimization for peak performance'
        ]
      },
      {
        title: 'Insights & Reporting',
        content: [
          'Clear, visual dashboards with actionable insights',
          'GA4, heatmaps, and user journey analysis',
          'Complete picture of traffic and user behavior',
          'Custom attribution models for channel performance',
          'Clear path to growth with data-backed recommendations'
        ]
      }
    ],
    cta: 'Let\'s Turn Your Traffic into Sales.'
  },
  {
    id: 'whatsapp-marketing',
    title: 'WhatsApp Marketing',
    tagline: 'The fastest way to your customers\' hearts.',
    image: '/assets/img/Whatsapp marketer (2).png',
    intro: 'Connect with your customers on a personal level and turn conversations into conversions.',
    description: 'We build automated, high-impact marketing campaigns on WhatsApp to help you engage with your audience and drive sales directly. Personal connection that drives real business results.',
    sections: [
      {
        title: 'Automated Chatbots',
        content: [
          'Create chatbots for customer support and FAQ handling',
          'Guide users through your sales funnel automatically',
          'Provide instant responses and personalized service',
          '24/7 customer engagement without manual effort'
        ]
      },
      {
        title: 'Broadcasts & Ads',
        content: [
          'Run targeted click-to-chat ad campaigns',
          'Broadcast timely promotions to your customer base',
          'Personalized messaging for higher engagement',
          'Direct-to-customer communication channel'
        ]
      },
      {
        title: 'WhatsApp Funnels & CRM Integration',
        content: [
          'Build automated funnels that nurture leads to sale',
          'Integrate with your CRM for complete conversation tracking',
          'Turn WhatsApp channel into powerful sales engine',
          'Manage and track every customer interaction'
        ]
      }
    ],
    cta: 'Let\'s Connect You Directly to Your Customers.'
  }
];

export const getServiceBySlug = (slug: string): ServiceDetail | undefined => {
  return serviceDetailData.find(service => service.id === slug);
};