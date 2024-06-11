import Image from "next/image";

export async function generateStaticParams() {
  return [{ slug: "placeholder" }];
}

export default function BlogPage() {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="max-w-screen-lg">
        <div>
          <h1 className="font-bold text-3xl mt-4 mb-8">Blog</h1>
          <h2 className="font-bold text-center text-3xl sm:text-2xl text-primary mt-4 mb-8">
            Coming soon ....
          </h2>
          <div className="relative w-80 h-80">
            <Image
              src={`/images/projects/construction.png`}
              alt="construction image"
              fill={true}
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
