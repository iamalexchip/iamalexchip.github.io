export async function generateStaticParams() {
  return [{ slug: "placeholder" }];
}

export default function Page() {
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-4xl font-bold">Blog Post Placeholder</h1>
      <p className="mt-4">This is a placeholder page for a blog post.</p>
    </div>
  );
}
