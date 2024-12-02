import Card from "./posts/Card";
import { posts } from "../posts";

export default function Main() {
  const publishedPost = posts.filter((post) => post.published === true);

  const tags = [];

  posts.forEach((post) => {
    const postTags = post.tags;
    postTags.forEach((tag) => !tags.includes(tag) && tags.push(tag));
    // console.log(`tags is ${tags}`);
  });

  return (
    <main className="page-main">
      <section>
        <div className="container">
          <div className="row">
            {publishedPost.map((post) => (
              <div key={post.id} className="col-6">
                <Card
                  id={post.id}
                  title={post.title}
                  description={post.content}
                  image={post.image}
                  tags={post.tags}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
