import { equal } from "assert";

const { Client } = require("@notionhq/client")

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})


export const getAllPosts = async () => {
    const posts = await notion.databases.query({// HTTP request POST https://api.notion.com/v1/databases/<databaseId>/query
        database_id: process.env.NOTION_DATABASE_ID,
        page_size: 100,
    });

    const allPosts = posts.results;

    return allPosts.map((post: any) => {
      return getPageMetaData(post);//extract only usable data by getPageMetaData 
    });
}

const getPageMetaData = (post : any) => {
  console.log("post", post);

  const getTags = (tags : any) => {
    const allTags = tags.map((tag : any) => {
      return tag.name;
    });

    return allTags;
  };

  return {
    id: post.id,
    title: post.properties.Name.title[0].plain_text,
    description: post.properties.Description.rich_text[0].plain_text,
    date: post.properties.Date.date.start,
    slug: post.properties.Slug.rich_text[0].plain_text,
    tags: getTags(post.properties.Tag.multi_select),
  }
}

export const getSinglePost = async (slug) =>{
  const responce = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    filter: {
      property: "Slug",
      formula:{
        string:{
          equals: slug,
        },
      },
    },
  });

  const page = responce.results[0];
  const metadata = getPageMetaData(page);
  console.log("page metadata\n", metadata);

  return{
    page,
  };
}