import clsx from "clsx";

type Props = {
  children: React.ReactNode;
  center?: boolean;
};

export const Heading = ({ children, center }: Props) => (
  <h2
    className={clsx("font-bold text-3xl sm:text-2xl text-primary mt-4 mb-8", {
      "text-center": center,
    })}
  >
    {children}
  </h2>
);
