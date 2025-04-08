import clsx from "clsx";
import { Metadata } from "next";
import { clients } from "../../data/clients";
import Socials from "@/ui/Socials";
import Image from "next/image";
import { Heading, TagPill } from "@/ui/elements";
import { tags } from "@/data/tags";

const coverLetterP1 = `
In my previous roles as a React Native and web developer
I have had the opportunity to work on a diverse range of projects,
from portfolio apps to compliance management platforms and fintech solutions.
This and other experiences have honed my skills in
React Native, React JS, Vue JS, and PHP, particularly within Laravel environments.
My involvement in both frontend and backend development has equipped me with a holistic understanding
of software development processes, enabling me to contribute to projects at every stage of the development lifecycle.
`;

const coverLetterP2 = ` Furthermore I have exposure to different continuous integration systems and platforms
like Vercel, Netlify, Microsoft AppCenter to name a few.
I'm also comfortable working with languages like Java, Kotlin and Python which I've worked with to some capacity in the past.
`;

export const metadata: Metadata = {
  title: "Portifolio - Alex Chipangura",
  description: "Alex Chipangura's Portifolio",
};

export default function Portifolio() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="max-w-screen-lg">
        <div className="mb-8">
          <Heading center>EXPERIENCE</Heading>
          <p className="text-lg mb-4">{coverLetterP1}</p>
          <p className="text-lg">{coverLetterP2}</p>
        </div>
        <div className="mb-8">
          <Heading center>MY SKILLS</Heading>
          <h3 className="font-bold text-secondary">Languages</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <TagPill tag={tags.js} />
            <TagPill tag={tags.ts} />
            <TagPill tag={tags.php} />
            <TagPill tag={tags.kt} />
            <TagPill tag={tags.java} />
            <TagPill tag={tags.py} />
          </div>
          <h3 className="font-bold text-secondary mt-4">Frameworks</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <TagPill tag={tags.react} />
            <TagPill tag={tags.rn} />
            <TagPill tag={tags.next} />
            <TagPill tag={tags.vue} />
            <TagPill tag={tags.tailwind} />
            <TagPill tag={tags.material} />
            <TagPill tag={tags.laravel} />
            <TagPill tag={tags.fastapi} />
          </div>
          <h3 className="font-bold text-secondary mt-4">Platforms</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <TagPill tag={tags.node} />
            <TagPill tag={tags.android} />
            <TagPill tag={tags.ios} />
            <TagPill tag={tags.linux} />
            <TagPill tag={tags.aws} />
            <TagPill tag={tags.gcc} />
            <TagPill tag={tags.vercel} />
            <TagPill tag={tags.netlify} />
          </div>
          <h3 className="font-bold text-secondary mt-4">Tools</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <TagPill tag={tags.redux} />
            <TagPill tag={tags.gql} />
            <TagPill tag={tags.apollo} />
            <TagPill tag={tags.docker} />
            <TagPill tag={tags.awsLambda} />
            <TagPill tag={tags.mysql} />
            <TagPill tag={tags.postgres} />
            <TagPill tag={tags.cypress} />
            <TagPill tag={tags.wp} />
            <TagPill tag={tags.woo} />
            <TagPill tag={tags.styledComponents} />
          </div>
          <h3 className="font-bold text-secondary mt-4">Other</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <TagPill tag={tags.scrum} />
            <TagPill tag={tags.responsive} />
            <TagPill tag={tags.oop} />
            <TagPill tag={tags.rest} />
            <TagPill tag={tags.tdd} />
            <TagPill tag={tags.ddd} />
          </div>
        </div>
        <div>
          <Heading center>{"WHO I'VE WORKED WITH"}</Heading>
          <div className="flex flex-wrap justify-center gap-8">
            {clients.map((client, i) => (
              <div
                key={i}
                className="flex flex-col items-center pt-5 pb-6 border border-primary rounded-md px-2 sm:px-4 text-center w-full md:max-w-[calc(50%-16px)]"
              >
                <div
                  className={clsx(
                    "rounded-md w-2/3 sm:w-1/2 p-2",
                    client.logoBg || "bg-white"
                  )}
                >
                  <div className="relative h-12">
                    <Image
                      src={`/images/projects/logos/${client.logo}`}
                      alt={client.name}
                      fill={true}
                      objectFit="contain"
                    />
                  </div>
                </div>
                <h3 className="font-bold text-2xl text-primary sm:text-4xl mt-4">
                  {client.name}
                </h3>
                {client.country && (
                  <span className="text-secondary">{client.country}</span>
                )}
                <p className="my-4">{client.summary}</p>
                <h4 className="font-bold text-xl text-primary">
                  Role: {client.role}
                </h4>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {client.skills.map((tag, i) => (
                    <TagPill key={i} tag={tag} />
                  ))}
                </div>
              </div>
            ))}
            <div className="w-full divider divider-secondary my-8">
              and drum roll
            </div>
            <div className="flex flex-col items-center border border-secondary rounded-md w-full px-4 py-28 sm:py-32">
              <h3 className="font-bold text-2xl text-secondary sm:text-4xl">
                Your project here
              </h3>
              <p className="text-2xl text-center mt-4">
                Wanna work together on something?
                <br /> Get in touch
              </p>
              <Socials messaging />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
