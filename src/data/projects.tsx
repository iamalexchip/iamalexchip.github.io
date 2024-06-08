import { Skill, skills } from "./skills";

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
      skills.js,
      skills.ts,
      skills.node,
      skills.rn,
      skills.android,
      skills.kt,
      skills.ios,
      skills.react,
      skills.styledComponents,
      skills.gql,
      skills.apollo,
      skills.aws,
      skills.awsLambda,
      skills.devops,
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
      skills.js,
      skills.ts,
      skills.react,
      skills.redux,
      skills.tailwind,
      skills.mobile,
      skills.rn,
      skills.android,
      skills.ios,
      skills.kt,
      skills.ddd,
      skills.tdd,
      skills.cypress,
    ],
  },
  {
    name: "Redbear Studios",
    country: "South Africa",
    summary: ` 
    We help companies deliver high value software solutions.
    We're a fully remote team operating from across Africa
    `,
    role: "Mobile & Fullstack Developer",
    logo: "redbear.png",
    skills: [
      skills.js,
      skills.ts,
      skills.react,
      skills.next,
      skills.redux,
      skills.rn,
      skills.android,
      skills.java,
      skills.dotnet,
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
      skills.vue,
      skills.react,
      skills.next,
      skills.tailwind,
      skills.styledComponents,
      skills.storybook,
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
    logoBg: "bg-[#242f5e]",
    role: "Fullstack Developer",
    skills: [
      skills.mysql,
      skills.oop,
      skills.js,
      skills.ts,
      skills.redux,
      skills.devops,
    ],
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
      skills.php,
      skills.mysql,
      skills.oop,
      skills.wp,
      skills.woo,
      skills.js,
    ],
  },
  {
    name: "Attendize",
    summary:
      "Attendize is an Open-source ticket selling and event management platform and is everything you need for a successful event",
    skills: [skills.php, skills.laravel, skills.mysql, skills.oop],
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
      skills.php,
      skills.laravel,
      skills.mysql,
      skills.oop,
      skills.wp,
      skills.woo,
      skills.js,
      skills.react,
      skills.redux,
      skills.rn,
      skills.devops,
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
      skills.php,
      skills.laravel,
      skills.mysql,
      skills.js,
      skills.payfast,
      skills.material,
      skills.devops,
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
      skills.php,
      skills.laravel,
      skills.mysql,
      skills.oop,
      skills.vue,
      skills.js,
      skills.devops,
    ],
  },
];
