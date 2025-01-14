import { supabase } from "@/db/supabaseClient";
import Image from "next/image";

export default async function Blog () {
    const { data, error } = await supabase
    .from("blog")
    .select("*");

  if (error) {
    console.error("Error get data", error);
    return <div>Error</div>;
  }
    return(
        <>
        <div className="blog-container">
            <h1 id="blog">Блог</h1>
            <div className="cards">
                {data.map((blog) => (
                    <div key={blog.id} className="card">
                        <a href={`/blog/${encodeURIComponent(blog.slug)}`} className="card-link">
                            <Image
                            src={blog.img_blog}
                            alt={blog.name}
                            width={748} 
                            height={508}
                            className="blog-image"  
                            />
                            <h2>{blog.title_blog}</h2>
                            <p>{blog.page}</p>
                            <p>{blog.date}</p>
                            <b><p>Читати далi</p></b>
                        </a>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
}