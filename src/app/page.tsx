import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const heroHeader = "Alex Chipangura";

const headerBlurb = `
I'm a Fullstack web and Mobile (React Native) developer
who's passionate about building applications users love.
`;

const socials = [
  {
    name: "twitter",
    href: "mailto:iamalexchip@gmail.com",
    icon: faAt,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/alex-chipangura-16b75b12b/",
    icon: faLinkedin,
  },
  {
    name: "twitter",
    href: "https://x.com/iamalexchip",
    icon: faTwitter,
  },
  {
    name: "github",
    href: "https://github.com/iamalexchip",
    icon: faGithub,
  },
  {
    name: "youtube",
    href: "https://www.youtube.com/@iamalexchip",
    icon: faYoutube,
  },
];

const Section = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => (
  <section className="mt-8">
    <h2 className="font-bold text-3xl sm:text-2xl text-primary mb-4">
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
          <ul className="flex justify-between sm:justify-start space-x-4 sm:space-x-8 my-6">
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  className="btn btn-primary btn-outline btn-square border-0"
                  target="_blank"
                  href={social.href}
                >
                  <FontAwesomeIcon icon={social.icon as IconProp} />
                </a>
              </li>
            ))}
          </ul>
          <div id="cta-buttons" className="flex space-x-4 mt-4">
            <button className="btn text-lg btn-primary flex-grow">
              Portfolio
            </button>
            <button className="btn text-lg btn-secondary flex-grow">
              Get in touch
            </button>
          </div>
        </div>
        <div className="w-full sm:max-w-80 mr-0 sm:ml-4">
          <img
            src="/images/mugshot.jpg"
            className="object-cover rounded-3xl border-yellow-500 border-4"
          />
        </div>
      </div>
      <div id="sections" className="w-full max-w-screen-lg">
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
              <img
                className="w-28 h-28 sm:w-40 sm:h-40 object-cover rounded-md border-yellow-500 border-2"
                src="/images/photo-1494232410401-ad00d5433cfa.jpg"
              />
            </div>
          ))}
          <div className="flex justify-center">
            <a href="/blog" className="btn btn-primary">
              View all articles
            </a>
          </div>
        </Section>
        {/* TODO: Add projects section,
        should alternate picture left and right
        Should show image on 
        top in responsive layout
        <Section title="Featured projects">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex pb-4 mb-4 border-b border-neutral">
              <div className="mr-2 sm:mr-4">
                <a href="#">
                  <h3 className="font-bold text-lg hover:text-primary sm:text-2xl mb-4">
                    Project title here
                  </h3>
                  <p className="">
                    And how to make your environment, tools, and setup work for
                    you, not against you.
                  </p>
                </a>
              </div>
              <img
                className="w-full sm:w-96 sm:h-60 object-cover rounded-md border-yellow-500 border-2"
                src="/images/photo-1494232410401-ad00d5433cfa.jpg"
              />
            </div>
          ))}
          <div className="flex justify-end">
            <a href="/projects" className="btn btn-primary">
              View all projects
            </a>
          </div>
        </Section>
        */}
      </div>
    </div>
  );
}
