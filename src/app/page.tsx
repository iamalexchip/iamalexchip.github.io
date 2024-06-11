import ArticleList from "@/ui/ArticleList";
import Socials from "@/ui/Socials";
import { Heading } from "@/ui/elements";
import Image from "next/image";

const heroHeader = "Alex Chipangura";

const headerBlurb = `
I'm a Fullstack web and Mobile (React Native) developer
passionate about building applications users love.
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
            <a href="/blog" className="btn text-lg btn-secondary flex-grow">
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
        <section id="about" className="mb-16">
          <Heading>About me</Heading>
          <p className="text-lg">{aboutP1}</p>
          <p className="text-lg my-4">{aboutP2}</p>
          <p className="text-lg">{aboutP3}</p>
        </section>
        <section id="articles">
          <Heading>Recent articles</Heading>
          <ArticleList />
          <a href="/blog" className="btn btn-primary">
            See all articles
          </a>
        </section>
      </div>
    </div>
  );
}
