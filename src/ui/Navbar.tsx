const LargeScreenOnly = ({ children }: { children: React.ReactNode }) => (
  <div className="hidden sm:block">{children}</div>
);

const SmallScreenOnly = ({ children }: { children: React.ReactNode }) => (
  <div className="sm:hidden">{children}</div>
);

const HomeLink = () => (
  <a className="btn btn-ghost text-xl" href="/">
    iamalexchip.com
  </a>
);

const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Blog",
    href: "/blog",
  },
  {
    name: "Portfolio",
    href: "/portfolio",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="navbar-start">
        <SmallScreenOnly>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                ></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </SmallScreenOnly>
        <LargeScreenOnly>
          <HomeLink />
        </LargeScreenOnly>
      </div>
      <div className="navbar-center">
        <SmallScreenOnly>
          <HomeLink />
        </SmallScreenOnly>
        <LargeScreenOnly>
          <ul>
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="btn btn-ghost normal-case text-xl"
              >
                {link.name}
              </a>
            ))}
          </ul>
        </LargeScreenOnly>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
}
