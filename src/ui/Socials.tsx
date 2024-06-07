import { socials } from "@/data/socials";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";

type Props = {
  messaging?: boolean;
};

export default function Socials({ messaging }: Props) {
  return (
    <ul className="flex justify-between sm:justify-start space-x-4 sm:space-x-8 my-6">
      {socials
        .filter((s) => (messaging ? s.messaging === messaging : true))
        .map((social) => (
          <li key={social.name}>
            <a
              className={clsx(
                "btn btn-primary btn-outline btn-square border-0",
                messaging ? "btn-secondary" : "btn-primary"
              )}
              target="_blank"
              href={social.href}
            >
              <FontAwesomeIcon icon={social.icon as IconProp} />
            </a>
          </li>
        ))}
    </ul>
  );
}
