import Socials from "@/ui/Socials";
import Image from "next/image";

const heroHeader = "Alex Chipangura";

const headerBlurb = `
I'm a Fullstack web and Mobile (React Native) developer
who's passionate about building applications users love.
`;

const aboutP1 = `
I am a mobile and full-stack web developer with 8 years experience with organizations]() based in different countries and on continents.
Currently I specialize with React/React Native on the frontend but I'm a polyglot web generalist on the backend. [AWS, GCC, etc]
`;

const aboutP2 = `
I write about Software Engineering things on blog, [dev.to], [medium] and [hashnode].
I also make videos on youtube and stream on twitch from time to time.
I find joy in contributing to various communities like [insert community]
and maintain open source projects like timetrail and [insert project] to name a few.
`;
const aboutP3 = `
I’ve been programming since I was 12 but have been engineering software professionally for 8 years.
Before formally venturing into the industry
I mostly did platform applications while dabbling in 3D modeling/animation and indie game development.
`;

const Section = ({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
}) => (
  <section className={className}>
    <h2 className={"font-bold text-3xl sm:text-2xl text-primary mb-4"}>
      {title}
    </h2>
    {children}
  </section>
);

export default function Home() {
  return (
    <div className="flex flex-col items-center p-4">
      <div
        id="hero"
        className="flex flex-col-reverse sm:flex-row items-center w-full max-w-screen-lg pb-6 mb-4 border-b-2 border-neutral"
      >
        <div className="mt-8">
          <h1 className="text-4xl mb-4">{heroHeader}</h1>
          <p className="text-xl">{headerBlurb}</p>
          <Socials />
          <div id="cta-buttons" className="flex space-x-4 mt-4">
            <a href="/portfolio" className="btn text-lg btn-primary flex-grow">
              Portfolio
            </a>
            <a
              href="#contact-modal"
              className="btn text-lg btn-secondary flex-grow"
            >
              Blog
            </a>
          </div>
        </div>
        <div className="w-full sm:max-w-80 mr-0 sm:ml-4">
          <Image
            src="/images/mugshot.jpg"
            className="object-cover rounded-3xl border-yellow-500 border-4"
            alt="Alex Chipangura"
            width={600}
            height={600}
          />
        </div>
      </div>
      <div id="sections" className="w-full max-w-screen-lg">
        <Section title="About me" className="mb-16">
          <p className="text-lg">{aboutP1}</p>
          <p className="text-lg my-4">{aboutP2}</p>
          <p className="text-lg">{aboutP3}</p>
        </Section>
        <Section title="Featured articles">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex pb-4 mb-4 border-b border-neutral">
              <div className="mr-2 sm:mr-4">
                <a href="#">
                  <h3 className="font-bold text-lg hover:text-primary sm:text-xl mb-4">
                    6 tools that made my life much easier as a Software Engineer
                  </h3>
                  <p className="">
                    And how to make your environment, tools, and setup work for
                    you, not against you.
                  </p>
                </a>
              </div>
              <Image
                className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-md border-yellow-500 border-2"
                src="/images/photo-1494232410401-ad00d5433cfa.jpg"
                alt="post image"
                width={600}
                height={600}
              />
            </div>
          ))}
          <div className="flex justify-center">
            <a href="/blog" className="btn btn-primary">
              View all articles
            </a>
          </div>
        </Section>
      </div>
    </div>
  );
}
