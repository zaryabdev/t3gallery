import Link from "next/link";
import { db } from "~/server/db";

const mockUrls = [
  "https://utfs.io/f/DNGbObC5IVvPqAnS91NcAC85jNuv9omGLTdMW3RShatp2rZg",
  "https://utfs.io/f/DNGbObC5IVvPMD1JnBShiP8arlwInMtmNFxTGqHv6AKEWDUo",
  "https://utfs.io/f/DNGbObC5IVvPJK6DqcjesOWkaZP3HTn7FhupelgmyVI5UjMo",
  "https://utfs.io/f/DNGbObC5IVvPttDlOLBU69yqBOLIitZHhkWfMD0u2j1e8N5v"
]

const mockImages = mockUrls.map((url, index) => {
  return {
    id: index + 1,
    url
  }
})

export default async function HomePage() {
  const posts = await db.query.posts.findMany()
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">

        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={`${image.id}-${index}`} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
