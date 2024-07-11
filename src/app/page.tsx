import Link from "next/link";
import { db } from "~/server/db";

const imgUrls = [
  "https://utfs.io/f/b5f44566-bbec-4663-b8dd-6040aa5471bd-p0mozu.svg.png",
  "https://utfs.io/f/026918d0-9478-4188-9f39-70dec74d90f5-si6tki.jpg",
  "https://utfs.io/f/d75f4915-b331-4c4c-b957-6c094ea6afa6-69v4qu.png",
  "https://utfs.io/f/16b4931e-69c9-4a18-bdd9-809d1eb7d3b4-megljp.png",
  "https://utfs.io/f/28ad9989-f5e0-4d8a-a3e6-75bece2efaa7-57hvtm.png",
];

const mockImgs = imgUrls.map((url, i) => ({
  id: i + 1,
  url,
  name: `Image ${i + 1}`,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {mockImgs.map((image) => (
          <div key={image.id} className="flex h-48 w-48 flex-col">
            <Link href={`/img/${image.id}`}>
              <img src={image.url} alt={image.name} />
            </Link>
            <div>{image.name}</div>
          </div>
        ))}
      </div>

      {posts.map((post) => (
        <div key={post.id}>{post.name}</div>
      ))}
    </main>
  );
}
