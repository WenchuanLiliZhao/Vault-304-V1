import { Page } from "../../_types/PageShapes";
import { Tags } from "../../_types/Tags";
import { AllAuthors } from "../../AllAuthors";

const Post_7: Page = {
  info: {
    slug: "post_7",
    title: "Post 7",
    summary: "Etiam vulputate condimentum leo. Praesent scelerisque ante ac sem cursus dignissim.",
    pageType: "post",
  },
  
  postInfo: {
    update: [2019, 11, 25],
    cover: "https://i.pinimg.com/1200x/ba/17/0c/ba170c426da5f295cafaeab1c44e9658.jpg",
    author: AllAuthors.Wenchuan,
    tags: [Tags.UIUXDesigns]
  },

  content: ["hahaha"],
};

export default Post_7;
