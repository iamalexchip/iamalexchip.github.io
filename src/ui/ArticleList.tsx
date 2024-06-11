import clsx from "clsx";
import Image from "next/image";

export default function ArticleList() {
  const articles = [...Array(3)];
  return (
    <div>
      {articles.map((_, i) => (
        <div
          key={i}
          className={clsx(
            "flex pb-4 mb-4 border-primary border-opacity-70",
            i === articles.length - 1 ? "border-0" : "border-b"
          )}
        >
          <div className="mr-2 sm:mr-4">
            <a href="#">
              <h3 className="font-bold text-lg hover:text-primary sm:text-xl mb-4">
                6 tools that made my life much easier as a Software Engineer
              </h3>
              <p className="">
                And how to make your environment, tools, and setup work for you,
                not against you.
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
    </div>
  );
}
