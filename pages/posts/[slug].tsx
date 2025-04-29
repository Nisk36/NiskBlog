import { getAllPosts, getSinglePost } from "@/lib/NotionAPI";
import { revalidatePath } from "next/cache";
import React from "react";

export const getStaticPaths = async () => {
    const allPosts = await getAllPosts();
    const paths = allPosts.map(({slug}) => ({params: {slug}}))
    return{
        paths: paths,
        fallback: "blocking",
    };
};

export const getStaticProps = async ({params}) => {
    const post = await getSinglePost(params.slug);

    return {
        props:{
            post,
        },
        revalidate: 60 * 60 * 6,
    }
}

const Post = ({ post }) => {
    return (
        <section className="container lg:px-2 px-5 h-screen lg:w-2/5 mx-auto mt-20">
            <h2 className="w-full text-2xl font-medium">3 回目の投稿です。</h2>
            <div className="border-b-2 w-1/3 mt-1 border-sky-600"></div>
            <span className="text-gray-500">2023..2.19</span>
            <br></br>
            <p className="text-white bg-sky-900 rounded-2xl font-medium mt-2 px-2 inline-block">
                Next.js
            </p>
            <div className="mt-10 font-medium">aaaaaaaaaaaaa</div>
        </section>
    )
};

export default Post;