import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { getAllPosts } from "../lib/NotionAPI";

export const getStaticProps = async () => {
  const allPosts = await getAllPosts();

  return{
    props: {
      allPosts,
    },
    revalidate: 60,
  };
};

export default function Home( {allPosts = []} ) {
  console.log(allPosts)
  return (
    <div>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              pages/index.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>
      </main>

    </div>
  );
}
