import { Tag, tags } from "./tags";

type Client = {
  name: string;
  link?: string;
  country?: string;
  summary: string;
  logo: string;
  logoBg?: string;
  role: string;
  skills: Tag[];
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
      tags.mobile,
      tags.js,
      tags.ts,
      tags.node,
      tags.rn,
      tags.android,
      tags.kt,
      tags.ios,
      tags.react,
      tags.styledComponents,
      tags.gql,
      tags.apollo,
      tags.aws,
      tags.awsLambda,
      tags.devops,
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
      tags.js,
      tags.ts,
      tags.react,
      tags.redux,
      tags.tailwind,
      tags.rn,
      tags.android,
      tags.ios,
      tags.kt,
      tags.ddd,
      tags.tdd,
      tags.cypress,
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
      tags.js,
      tags.ts,
      tags.react,
      tags.next,
      tags.redux,
      tags.rn,
      tags.android,
      tags.java,
      tags.dotnet,
    ],
  },
  {
    name: "Lekker Commerce",
    summary:
      "Specialised fullstack software development services for the enterprise",
    logo: "lekker.jpg",
    role: "Fullstack Developer",
    skills: [
      tags.py,
      tags.js,
      tags.ts,
      tags.react,
      tags.rn,
      tags.android,
      tags.ios,
      tags.php,
      tags.laravel,
      tags.wp,
      tags.woo,
      tags.fastapi,
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
      tags.vue,
      tags.react,
      tags.next,
      tags.tailwind,
      tags.styledComponents,
      tags.storybook,
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
    skills: [tags.mysql, tags.oop, tags.js, tags.ts, tags.redux, tags.devops],
  },
  {
    name: "MADE Agency",
    country: "South Africa",
    summary:
      "MADE is a full service integrated agency based in Cape Town, South Africa geared to help businesses reach digitally savvy, socially driven consumers",
    role: "Fullstack Developer",
    logo: "made.png",
    logoBg: "bg-black",
    skills: [tags.php, tags.mysql, tags.oop, tags.wp, tags.woo, tags.js],
  },
  {
    name: "Attendize",
    summary:
      "Attendize is an Open-source ticket selling and event management platform and is everything you need for a successful event",
    skills: [tags.php, tags.laravel, tags.mysql, tags.oop],
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
      tags.php,
      tags.laravel,
      tags.mysql,
      tags.oop,
      tags.wp,
      tags.woo,
      tags.js,
      tags.react,
      tags.redux,
      tags.rn,
      tags.devops,
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
      tags.php,
      tags.laravel,
      tags.mysql,
      tags.js,
      tags.payfast,
      tags.material,
      tags.devops,
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
      tags.php,
      tags.laravel,
      tags.mysql,
      tags.oop,
      tags.vue,
      tags.js,
      tags.devops,
    ],
  },
];
