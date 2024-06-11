import { Tag } from "@/data/tags";
import clsx from "clsx";

type HeadingProps = {
  children: React.ReactNode;
  center?: boolean;
};

export const Heading = ({ children, center }: HeadingProps) => (
  <h2
    className={clsx("font-bold text-3xl sm:text-2xl text-primary mt-4 mb-8", {
      "text-center": center,
    })}
  >
    {children}
  </h2>
);

export const TagPill = ({ tag }: { tag: Tag }) => (
  <span
    className={clsx("border rounded-full px-2 py-1 text-sm", tag.className)}
  >
    {tag.name}
  </span>
);
