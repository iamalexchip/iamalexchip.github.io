type Skill = { name: string; className: string };
type Client = {
  name: string;
  link?: string;
  country?: string;
  summary: string;
  logo: string;
  logoBg?: string;
  role: string;
  skills: Skill[];
};

export const skills = {
  php: { name: "PHP", className: "text-purple-600 border-purple-600" },
  laravel: { name: "Laravel", className: "text-red-600 border-red-600" },
  material: {
    name: "Material",
    className: "text-blue-600 border-blue-600",
  },
  mobile: {
    name: "Mobile Application Development",
    className: "text-blue-500 border-blue-500",
  },
  iOS: { name: "iOS", className: "text-gray-500 border-gray-500" },
  oop: {
    name: "Object-Oriented Programming (OOP)",
    className: "text-green-600 border-green-600",
  },
  awsLambda: {
    name: "AWS Lambda",
    className: "text-orange-600 border-orange-600",
  },
  apollo: {
    name: "Apollo GraphQL",
    className: "text-pink-600 border-pink-600",
  },
  js: {
    name: "JavaScript",
    className: "text-yellow-500 border-yellow-500",
  },
  aws: {
    name: "Amazon Web Services (AWS)",
    className: "text-orange-600 border-orange-600",
  },
  kt: { name: "Kotlin", className: "text-purple-600 border-purple-600" },
  gql: { name: "GraphQL", className: "text-pink-600 border-pink-600" },
  node: { name: "Node.js", className: "text-green-600 border-green-600" },
  rn: { name: "React Native", className: "text-blue-600 border-blue-600" },
  ts: { name: "TypeScript", className: "text-blue-500 border-blue-500" },
  mysql: { name: "MySQL", className: "text-blue-700 border-blue-700" },
  tdd: {
    name: "Test-Driven Development",
    className: "text-green-600 border-green-600",
  },
  redux: { name: "Redux", className: "text-purple-600 border-purple-600" },
  ddd: {
    name: "Domain-Driven Design (DDD)",
    className: "text-blue-600 border-blue-600",
  },
  cypress: {
    name: "Cypress",
    className: "text-green-600 border-green-600",
  },
  tailwind: {
    name: "Tailwind CSS",
    className: "text-teal-500 border-teal-500",
  },
  react: { name: "React.js", className: "text-blue-500 border-blue-500" },
  vue: { name: "Vue.js", className: "text-green-600 border-green-600" },
  storybook: {
    name: "Storybook",
    className: "text-pink-600 border-pink-600",
  },
  rest: { name: "REST APIs", className: "text-blue-600 border-blue-600" },
  next: { name: "Next.js", className: "" },
  styledComponents: {
    name: "styled-components",
    className: "text-pink-600 border-pink-600",
  },
  woo: { name: "WooCommerce", className: "text-red-600 border-red-600" },
  payfast: {
    name: "PayFast",
    className: "text-green-500 border-green-500",
  },
};

export const clients: Client[] = [
  {
    name: "Santam Switch",
    country: "South Africa",
    summary:
      "Switch on and off your insurance only when you need it. On-demand. Online. On your terms.",
    role: "Mobile engineer",
    logo: "santam_switch.svg",
    skills: [
      skills.mobile,
      skills.iOS,
      skills.oop,
      skills.awsLambda,
      skills.apollo,
      skills.js,
      skills.aws,
      skills.kt,
      skills.gql,
      skills.node,
      skills.react,
      skills.rn,
      skills.ts,
      skills.styledComponents,
    ],
  },
  {
    name: "Decode Development",
    country: "South Africa",
    summary:
      "Decode; a boutique South African software development company driven by the vision to craft impactful technology that enhances a business - no matter the industry.",
    role: "Frontend Developer (web and mobile)",
    logo: "decode.png",
    logoBg: "bg-black",
    skills: [
      skills.mysql,
      skills.mobile,
      skills.js,
      skills.tdd,
      skills.redux,
      skills.rn,
      skills.ts,
      skills.ddd,
      skills.cypress,
      skills.tailwind,
      skills.react,
      skills.storybook,
      skills.rest,
    ],
  },
  {
    name: "Dado Agency",
    country: "South Africa",
    summary:
      "A major software agency that focused on building software for American and British companies.",
    role: "Frontend Developer",
    logo: "dado.jpeg",
    skills: [
      skills.react,
      skills.vue,
      skills.storybook,
      skills.rest,
      skills.next,
      skills.styledComponents,
      skills.tailwind,
    ],
  },
  {
    name: "Auditoos",
    country: "Malta",
    summary: `
      Auditoos is the turn-key compliance management system built specifically for iGaming.
      Helps handle thousands of regulatory requirements associated with multiple jurisdictions.
    `,
    logo: "auditoos.png",
    logoBg: "bg-transparent",
    role: "Fullstack Developer",
    skills: [skills.mysql, skills.oop, skills.js, skills.ts, skills.redux],
  },
  {
    name: "MADE Agency",
    country: "South Africa",
    summary:
      "MADE is a full service integrated agency based in Cape Town, South Africa geared to help businesses reach digitally savvy, socially driven consumers",
    role: "Fullstack Developer",
    logo: "made.png",
    logoBg: "bg-black",
    skills: [
      skills.mysql,
      skills.oop,
      skills.woo,
      skills.redux,
      skills.js,
      skills.ts,
      skills.php,
    ],
  },
  {
    name: "Attendize",
    summary:
      "Attendize is an Open-source ticket selling and event management platform and is everything you need for a successful event",
    skills: [skills.mysql, skills.oop, skills.laravel],
    role: "Fullstack Contributor",
    logo: "attendize.png",
    logoBg: "bg-gray-800",
  },
  {
    name: "SovTech",
    country: "South Africa",
    summary:
      "The leading software development company from Africa with over a decade of experience. Specialising in providing subscription-based access to world-class engineering teams and software development professionals, we help businesses scale, by building world-class software, on flexible subscriptions.",
    role: "Full-tack Developer",
    logo: "sovtech.svg",
    logoBg: "bg-blue-700",
    skills: [
      skills.mysql,
      skills.oop,
      skills.react,
      skills.redux,
      skills.js,
      skills.ts,
      skills.woo,
      skills.rn,
      skills.php,
      skills.laravel,
    ],
  },
  {
    name: "DigsConnect.com",
    country: "South Africa",
    summary: `
      The largest student accommodation marketplace on the African continent.
      We pair up registered students and young professionals looking for a place to stay with homeowners across South Africa that are looking to rent out their properties on a long term basis.
    `,
    role: "Fullstack Developer",
    logo: "digs.svg",
    skills: [
      skills.mysql,
      skills.js,
      skills.laravel,
      skills.payfast,
      skills.material,
    ],
  },
  {
    name: "Commercial Fire Protected",
    country: "United States",
    summary:
      "Commercial Fire Protection specializes in inspections and repairs of fire life safety equipment. In addition, we have developed an online, real-time portal, where our customers can view, track, sort, receive alerts, and essentially monitor every step of the fire life safety program",
    role: "Fullstack Developer",
    logo: "cfp.png",
    skills: [
      skills.mysql,
      skills.oop,
      skills.vue,
      skills.js,
      skills.ts,
      skills.php,
      skills.laravel,
    ],
  },
];
