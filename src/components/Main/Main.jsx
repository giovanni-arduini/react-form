import Card from "../posts/Card";
import { posts } from "../../posts";
import style from "./Main.module.css";
import { useState } from "react";

export default function Main() {
  const publishedPost = posts.filter((post) => post.published === true);

  const tags = [];

  posts.forEach((post) => {
    const postTags = post.tags;
    postTags.forEach((tag) => !tags.includes(tag) && tags.push(tag));
    // console.log(`tags is ${tags}`);
  });

  const [postName, setPostName] = useState("Nuovo post");

  function addPost(e) {
    e.preventDefault();
    console.log("Aggiungo post!");
  }

  return (
    <main className="page-main">
      <section>
        <div className="container">
          <form action="">
            <input
              type="text"
              placeholder="Inserisci il titolo del nuovo post"
              value={postName}
            />
            <input type="submit" value="Aggiungi un nuovo post" />
          </form>
        </div>

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
