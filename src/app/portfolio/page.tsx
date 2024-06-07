import clsx from "clsx";
import { Metadata } from "next";
import { clients } from "../../data/projects";
import Socials from "@/ui/Socials";

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
        <div className="mb-16">
          <h2 className="font-bold text-center text-3xl sm:text-2xl text-primary mt-4 mb-8">
            EXPERIENCE
          </h2>
          <p className="text-lg mb-4">{coverLetterP1}</p>
          <p className="text-lg">{coverLetterP2}</p>
        </div>
        <div>
          <h2 className="font-bold text-center text-3xl sm:text-2xl text-primary mt-4 mb-8">
            MY WORK
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {clients.map((client, i) => (
              <div
                key={i}
                className="flex flex-col items-center py-8 border border-primary rounded-md px-2 sm:px-4 text-center w-full md:max-w-[calc(50%-16px)]"
              >
                <div
                  className={clsx("rounded-md", client.logoBg || "bg-white", {
                    "p-3": client.logoBg !== "bg-transparent",
                  })}
                >
                  <img
                    className="max-h-16"
                    src={`/images/projects/${client.logo}`}
                  />
                </div>
                <h3 className="font-bold text-2xl text-primary sm:text-4xl mt-4">
                  {client.name}
                </h3>
                {client.country && (
                  <span className="text-secondary">{client.country}</span>
                )}
                <p className="my-4">{client.summary}</p>
                <h4 className="font-bold text-xl text-primary">
                  {client.role}
                </h4>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {client.skills.map((skill) => (
                    <span
                      className={clsx(
                        "border rounded-full px-2 py-1 text-sm",
                        skill.className
                      )}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="w-full divider divider-secondary my-8">
              and drum roll
            </div>
            <div className="flex flex-col items-center border border-secondary rounded-md w-full px-4 py-20">
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
