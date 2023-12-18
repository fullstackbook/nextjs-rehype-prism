import { getHtml } from "@/lib/data";

export default async function Home() {
  const html = await getHtml();

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}
