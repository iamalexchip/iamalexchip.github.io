import clsx from "clsx";
import { Metadata } from "next";
import { clients } from "../../data/clients";
import Socials from "@/ui/Socials";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects - Alex Chipangura",
  description: "Alex Chipangura's Portifolio",
};

/*
export default function Projects() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="max-w-screen-lg">
        <div>
          <h2 className="font-bold text-center text-3xl sm:text-2xl text-primary mt-4 mb-8">
            {"WHO I'VE WORKED WITH"}
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {clients.map((client, i) => (
              <div
                key={i}
                className="flex flex-col items-center pt-2 pb-6 border border-primary rounded-md px-2 text-center md:max-w-[calc(50%-16px)]"
              >
                <div
                  className={clsx(
                    "rounded-md w-full",
                    client.logoBg || "bg-white"
                  )}
                >
                  <div className="relative h-80">
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
                <p className="my-4">{client.summary}</p>
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {client.skills.map((skill, i) => (
                    <span
                      key={i}
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
*/

export default function Projects() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="max-w-screen-lg">
        <div>
          <h2 className="font-bold text-center text-3xl sm:text-2xl text-primary mt-4 mb-8">
            Coming soon ....
          </h2>
          <div className="relative w-80 h-80">
            <Image
              src={`/images/projects/construction.png`}
              alt="construction image"
              fill={true}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
