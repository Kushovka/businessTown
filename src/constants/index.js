// HOME
import icon1 from "/images/homeSub/icon1.svg";
import icon2 from "/images/homeSub/icon2.svg";
import icon3 from "/images/homeSub/icon3.svg";
import icon4 from "/images/homeSub/icon4.svg";

import img1 from "/images/homeFeatured/img1.png";
import img2 from "/images/homeFeatured/img2.png";
import img3 from "/images/homeFeatured/img3.png";

import Icon1 from "/images/homeFeatured/container/icon1.svg";
import Icon2 from "/images/homeFeatured/container/icon2.svg";
import Icon3 from "/images/homeFeatured/container/icon3.svg";

// ABOUT
import icon1AboutValues from "/images/aboutValues/icon1.svg";
import icon2AboutValues from "/images/aboutValues/icon2.svg";
import icon3AboutValues from "/images/aboutValues/icon3.svg";

import img1AboutTeam from "/images/aboutTeam/img1.png";
import img2AboutTeam from "/images/aboutTeam/img2.png";
import img3AboutTeam from "/images/aboutTeam/img3.png";
import img4AboutTeam from "/images/aboutTeam/img4.png";

// PROPERTIES
import icon1PropertySearch from "/images/propertiesSearch/icon1.svg";
import icon2PropertySearch from "/images/propertiesSearch/icon2.svg";
import icon3PropertySearch from "/images/propertiesSearch/icon3.svg";
import icon4PropertySearch from "/images/propertiesSearch/icon4.svg";
import icon5PropertySearch from "/images/propertiesSearch/icon5.svg";

// SERVICES
import icon1Unlock from "/images/servicesUnlock/icon1.svg";
import icon2Unlock from "/images/servicesUnlock/icon2.svg";
import icon3Unlock from "/images/servicesUnlock/icon3.svg";
import icon4Unlock from "/images/servicesUnlock/icon4.svg";

import icon1Effortless from "/images/servicesEffortless/icon1.svg";
import icon2Effortless from "/images/servicesEffortless/icon2.svg";
import icon3Effortless from "/images/servicesEffortless/icon3.svg";
import icon4Effortless from "/images/servicesEffortless/icon4.svg";

import icon1Smart from "/images/servicesSmart/icon1.svg";
import icon2Smart from "/images/servicesSmart/icon2.svg";
import icon3Smart from "/images/servicesSmart/icon3.svg";
import icon4Smart from "/images/servicesSmart/icon4.svg";

// CONTACT
import icon1Get from "/images/contactGet/icon1.svg";
import icon2Get from "/images/contactGet/icon2.svg";
import icon3Get from "/images/contactGet/icon3.svg";
import icon4Get from "/images/contactGet/icon4.svg";

import icon1Discover from "/images/contactDiscover/icon1.svg";
import icon2Discover from "/images/contactDiscover/icon2.svg";
import icon3Discover from "/images/contactDiscover/icon3.svg";

// FOOTER
import profile1 from "/images/homeReviews/Profile1.png";
import profile2 from "/images/homeReviews/Profile2.png";
import profile3 from "/images/homeReviews/Profile3.png";

import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

// navigation
const navItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About Us",
    path: "/about",
  },
  {
    name: "Properties",
    path: "/properties",
  },
  {
    name: "Services",
    path: "/services",
  },
];

// HOME
const homeHeroItems = [
  {
    num: "200+",
    text: "Happy Customers",
  },
  {
    num: "10k+",
    text: "Properties For Clients",
  },
  {
    num: "16+",
    text: "Years of Experience",
  },
];
const homeSubItems = [
  {
    text: "Find Your Dream Home",
    imgPath: icon1,
  },
  {
    text: "Unlock Property Value",
    imgPath: icon2,
  },
  {
    text: "Effortless Property Management",
    imgPath: icon3,
  },
  {
    text: "Smart Investments, Informed Decisions",
    imgPath: icon4,
  },
];
const homeFeatureds = [
  {
    imgPath: img1,
    title: "Seaside Serenity Villa",
    mark: "Coastal Escapes - Where Waves Beckon",
    description:
      "A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood",
    containers: [
      {
        imgPath: Icon1,
        text: "4-Bedroom",
      },
      {
        imgPath: Icon2,
        text: "3-Bathroom",
      },
      {
        imgPath: Icon3,
        text: "Villa",
      },
    ],
    price: "$1,250,000",
  },
  {
    imgPath: img2,
    title: "Metropolitan Haven",
    mark: "Urban Oasis - Life in the Heart of the City",
    description:
      "A chic and fully-furnished 2-bedroom apartment with panoramic city views",
    containers: [
      {
        imgPath: Icon1,
        text: "2-Bedroom",
      },
      {
        imgPath: Icon2,
        text: "2-Bathroom",
      },
      {
        imgPath: Icon3,
        text: "Villa",
      },
    ],
    price: "$650,000",
  },
  {
    imgPath: img3,
    title: "Rustic Retreat Cottage",
    mark: "Countryside Charm - Escape to Nature's Embrace",
    description:
      "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community",
    containers: [
      {
        imgPath: Icon1,
        text: "3-Bedroom",
      },
      {
        imgPath: Icon2,
        text: "3-Bathroom",
      },
      {
        imgPath: Icon3,
        text: "Villa",
      },
    ],
    price: "$350,000",
  },
];
const homeReviewsItems = [
  {
    title: "Exceptional Service!",
    text: "Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!",
    profiles: [
      {
        imgPath: profile1,
        name: "Wade Warren",
        desc: "USA, California",
      },
    ],
  },
  {
    title: "Efficient and Reliable",
    text: "Estatein provided us with top-notch service. They helped us sell our property quickly and at a great price. We couldn't be happier with the results.",
    profiles: [
      {
        imgPath: profile2,
        name: "Emelie Thomson",
        desc: "USA, Florida",
      },
    ],
  },
  {
    title: "Trusted Advisors",
    text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    profiles: [
      {
        imgPath: profile3,
        name: "John Mans",
        desc: "USA, Nevada",
      },
    ],
  },
  {
    title: "Trusted Advisors",
    text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    profiles: [
      {
        imgPath: profile3,
        name: "John Mans",
        desc: "USA, Nevada",
      },
    ],
  },
  {
    title: "Trusted Advisors",
    text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    profiles: [
      {
        imgPath: profile3,
        name: "John Mans",
        desc: "USA, Nevada",
      },
    ],
  },
  {
    title: "Trusted Advisors",
    text: "The Estatein team guided us through the entire buying process. Their knowledge and commitment to our needs were impressive. Thank you for your support!",
    profiles: [
      {
        imgPath: profile3,
        name: "John Mans",
        desc: "USA, Nevada",
      },
    ],
  },
];
const homeQuestionsItems = [
  {
    title: "How do I search for properties on Estatein?",
    text: "Learn how to use our user-friendly search tools to find properties that match your criteria.",
  },
  {
    title: "What documents do I need to sell my property through Estatein?",
    text: "Find out about the necessary documentation for listing your property with us.",
  },
  {
    title: "How can I contact an Estatein agent?",
    text: "Discover the different ways you can get in touch with our experienced agents.",
  },
];

// ABOUT
const ourValuesItems = [
  {
    title: "Trust",
    text: "Trust is the cornerstone of every successful real estate transaction.",
    imgPath: icon1AboutValues,
  },
  {
    title: "Excellence",
    text: "We set the bar high for ourselves. From the properties we list to the services we provide.",
    imgPath: icon2AboutValues,
  },
  {
    title: "Client-Centric",
    text: "Your dreams and needs are at the center of our universe. We listen, understand.",
    imgPath: icon3AboutValues,
  },
  {
    title: "Our Commitment",
    text: "We are dedicated to providing you with the highest level of service, professionalism, and support.",
    imgPath: icon1AboutValues,
  },
];
const ourAchievItems = [
  {
    title: "3+ Years of Excellence",
    text: "With over 3 years in the industry, we've amassed a wealth of knowledge and experience, becoming a go-to resource for all things real estate.",
  },
  {
    title: "Happy Clients",
    text: "Our greatest achievement is the satisfaction of our clients. Their success stories fuel our passion for what we do.",
  },
  {
    title: "Industry Recognition",
    text: "We've earned the respect of our peers and industry leaders, with accolades and awards that reflect our commitment to excellence.",
  },
];
const navExpItems = [
  {
    num: "Step 01",
    title: "Discover a World of Possibilities",
    text: "Your journey begins with exploring our carefully curated property listings. Use our intuitive search tools to filter properties based on your preferences, including location, type, size, and budget.",
  },
  {
    num: "Step 02",
    title: "Narrowing Down Your Choices",
    text: "Once you've found properties that catch your eye, save them to your account or make a shortlist. This allows you to compare and revisit your favorites as you make your decision.",
  },
  {
    num: "Step 03",
    title: "Personalized Guidance",
    text: "Have questions about a property or need more information? Our dedicated team of real estate experts is just a call or message away.",
  },
  {
    num: "Step 04",
    title: "See It for Yourself",
    text: "Arrange viewings of the properties you're interested in. We'll coordinate with the property owners and accompany you to ensure you get a firsthand look at your potential new home.",
  },
  {
    num: "Step 05",
    title: "Making Informed Decisions",
    text: "Before making an offer, our team will assist you with due diligence, including property inspections, legal checks, and market analysis. We want you to be fully informed and confident in your choice.",
  },
  {
    num: "Step 06",
    title: "Getting the Best Deal",
    text: "We'll help you negotiate the best terms and prepare your offer. Our goal is to secure the property at the right price and on favorable terms.",
  },
];
const meetTeamItems = [
  {
    name: "Max Mitchell",
    post: "Founder",
    imgPath: img1AboutTeam,
  },
  {
    name: "Sarah Johnson",
    post: "Chief Real Estate Officer",
    imgPath: img2AboutTeam,
  },
  {
    name: "David Brown",
    post: "Head of Property Management",
    imgPath: img3AboutTeam,
  },
  {
    name: "Michael Turner",
    post: "Legal Counsel",
    imgPath: img4AboutTeam,
  },
];
const ourClientsItems = [
  {
    since: "Since 2019",
    name: "ABC Corporation",
    domain: "Commercial Real Estate",
    category: "Luxury Home Development",
    questions:
      "Estatein's expertise in finding the perfect office space for our expanding operations was invaluable. They truly understand our business needs.",
  },
  {
    since: "Since 2018",
    name: "GreenTech Enterprises",
    domain: "Commercial Real Estate",
    category: "Retail Space",
    questions:
      "Estatein's ability to identify prime retail locations helped us expand our brand presence. They are a trusted partner in our growth.",
  },
];

// PROPERTIES
const propertySearchItems = [
  {
    title: "Location",
    imgPath: icon1PropertySearch,
  },
  {
    title: "Property Type",
    imgPath: icon2PropertySearch,
  },
  {
    title: "Pricing Range",
    imgPath: icon3PropertySearch,
  },
  {
    title: "Property Size",
    imgPath: icon4PropertySearch,
  },
  {
    title: "Build Year",
    imgPath: icon5PropertySearch,
  },
];

// SERVICES
const unlockItems = [
  {
    imgPath: icon1Unlock,
    title: "Valuation Mastery",
    text: "Discover the true worth of your property with our expert valuation services.",
  },
  {
    imgPath: icon2Unlock,
    title: "Strategic Marketing",
    text: "Selling a property requires more than just a listing; it demands a strategic marketing approach.",
  },
  {
    imgPath: icon3Unlock,
    title: "Negotiation Wizardry",
    text: "Negotiating the best deal is an art, and our negotiation experts are masters of it.",
  },
  {
    imgPath: icon4Unlock,
    title: "Closing Success",
    text: "A successful sale is not complete until the closing. We guide you through the intricate closing process.",
  },
];
const effortlessItems = [
  {
    imgPath: icon1Effortless,
    title: "Tenant Harmony",
    text: "Our Tenant Management services ensure that your tenants have a smooth and reducing vacancies.",
  },
  {
    imgPath: icon2Effortless,
    title: "Maintenance Ease",
    text: "Say goodbye to property maintenance headaches. We handle all aspects of property upkeep.",
  },
  {
    imgPath: icon3Effortless,
    title: "Financial Peace of Mind",
    text: "Managing property finances can be complex. Our financial experts take care of rent collection",
  },
  {
    imgPath: icon4Effortless,
    title: "Legal Guardian",
    text: "Stay compliant with property laws and regulations effortlessly.",
  },
];
const smartItems = [
  {
    imgPath: icon1Smart,
    title: "Market Insight",
    text: "Stay ahead of market trends with our expert Market Analysis. We provide in-depth insights into real estate market conditions",
  },
  {
    imgPath: icon2Smart,
    title: "ROI Assessment",
    text: "Make investment decisions with confidence. Our ROI Assessment services evaluate the potential returns on your investments",
  },
  {
    imgPath: icon3Smart,
    title: "Customized Strategies",
    text: "Every investor is unique, and so are their goals. We develop Customized Investment Strategies tailored to your specific needs",
  },
  {
    imgPath: icon4Smart,
    title: "Diversification Mastery",
    text: "Diversify your real estate portfolio effectively. Our experts guide you in spreading your investments across various property types and locations",
  },
];

// CONTACT
const getItems = [
  {
    imgPath: icon1Get,
    text: "info@estatein.com",
  },
  {
    imgPath: icon2Get,
    text: "+1 (123) 456-7890",
  },
  {
    imgPath: icon3Get,
    text: "Main Headquarters",
  },
  {
    imgPath: icon4Get,
    text: "Instagram",
  },
];
const discoverItems = [
  {
    title: "Main Headquarters",
    loc: "123 Estatein Plaza, City Center, Metropolis",
    text: "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
    containers: [
      {
        imgPath: icon1Discover,
        name: "info@estatein.com",
      },
      {
        imgPath: icon2Discover,
        name: "+1 (123) 456-7890",
      },
      {
        imgPath: icon3Discover,
        name: "Metropolis",
      },
    ],
  },
  {
    title: "Regional Offices",
    loc: "456 Urban Avenue, Downtown District, Metropolis",
    text: "Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
    containers: [
      {
        imgPath: icon1Discover,
        name: "info@estatein.com",
      },
      {
        imgPath: icon2Discover,
        name: "+1 (123) 456-7890",
      },
      {
        imgPath: icon3Discover,
        name: "Metropolis",
      },
    ],
  },
];

// FOOTER
const footerItems = [
  {
    title: "Home",
    path: "/",
    items: [
      { title: "Hero Section", href: "#hero" },
      { title: "Features", href: "#features" },
      { title: "Properties", href: "#properties" },
      { title: "Testimonials", href: "#testimonial" },
      { title: "FAQ’s", href: "#faqs" },
    ],
  },
  {
    title: "About Us",
    path: "/about",
    items: [
      { title: "Our Story", href: "#ourStory" },
      { title: "Our Works", href: "#ourWorks" },
      { title: "How It Works", href: "#ourItWorks" },
      { title: "Our Team", href: "#ourTeam" },
      { title: "Our Clients", href: "#ourClients" },
    ],
  },
  {
    title: "Properties",
    path: "/properties",
    items: [
      { title: "Portfolio", href: "#portfolio" },
      { title: "Categories", href: "#categories" },
    ],
  },
  {
    title: "Services",
    path: "/services",
    items: [
      { title: "Valuation Mastery", href: "#valuation" },
      { title: "Strategic Marketing", href: "#strategic" },
      { title: "Negotiation Wizardry", href: "#negotiation" },
      { title: "Closing Success", href: "#closing" },
      { title: "Property Management", href: "#property" },
    ],
  },
  {
    title: "Contact Us",
    path: "/contact",
    items: [
      { title: "Contact Form", href: "#contact" },
      { title: "Our Offices", href: "#offices" },
    ],
  },
];
const subLinkItems = [
  {
    title: "facebook",
    icon: FaFacebookF,
  },
  {
    title: "twitter",
    icon: FaLinkedin,
  },
  {
    title: "linkedin",
    icon: FaTwitter,
  },
  {
    title: "youtube",
    icon: FaYoutube,
  },
];
export {
  navItems,
  footerItems,
  homeHeroItems,
  homeSubItems,
  homeFeatureds,
  homeReviewsItems,
  homeQuestionsItems,
  subLinkItems,
  ourValuesItems,
  ourAchievItems,
  navExpItems,
  meetTeamItems,
  ourClientsItems,
  propertySearchItems,
  unlockItems,
  effortlessItems,
  smartItems,
  getItems,
  discoverItems,
};
