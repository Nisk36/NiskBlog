const { Client } = require("@notionhq/client")

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})


export const getAllPosts = async () => {
    const posts = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID,
        page_size: 100,
    });

    const allPosts = posts.results;

    return allPosts.map((post : any) => {
      return getPageMetaData(post);
    });
}

const getPageMetaData = (post : any) => {
  console.log("post", post);

  return {
    id: post.id,
    title: post.properties.Name.title[0].plain_text,//日本語入ってんの気持ちわりぃ～
    description: post.properties.Description.rich_text[0].plain_text,
    data: post.properties.Date.date.start,
    slug: post.properties.Slug.rich_text[0].plain_text,
  }
}

