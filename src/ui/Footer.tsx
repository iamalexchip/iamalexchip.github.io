import { navLinks } from "@/data/nav";
import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="footer p-10 bg-base-200 text-base-content">
      <nav>
        <h6 className="footer-title">About</h6>
        {navLinks.map((link, i) => (
          <a key={i} className="link link-hover" href={link.href}>
            {link.name}
          </a>
        ))}
      </nav>
      <nav>
        <h6 className="footer-title">Socials</h6>
        <Socials />
      </nav>
    </footer>
  );
}
