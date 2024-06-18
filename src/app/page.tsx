import ArticleList from "@/ui/ArticleList";
import Socials from "@/ui/Socials";
import { Heading } from "@/ui/elements";
import Image from "next/image";

const heroHeader = "Alex Chipangura";

const headerBlurb = `
Fullstack web and Mobile developer
passionate about building applications users love.
`;

const aboutP1 = `
I am a Software Engineer with 8 years experience
working with organizations from around the world.
Currently I specialize in React/React Native on the frontend but I'm a polyglot backend web generalist.
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
          <p className="text-lg my-4">
            I write, make videos and stream about Software Engineering. I find
            joy in contributing to communities and open source{" "}
            <a href="/projects" className="link link-primary">
              projects
            </a>
            .
          </p>
        </section>
        {/*
        <section id="articles">
          <Heading>Recent articles</Heading>
          <ArticleList />
          <a href="/blog" className="btn btn-primary">
            See all articles
          </a>
        </section>
        */}
      </div>
    </div>
  );
}
