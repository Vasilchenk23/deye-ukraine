"use client";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

export default function BlogTabble({ data }) {
  return (
    <div className="blog-container">
      <div className="blog-image">
        <Image
          src={data.img_blog}
          alt={data.name}
          width={1920}
          height={1080}
          className="image"
        />
      </div>
      <div className="blog-content">
        <h2>{data.title_blog}</h2>
        <p>{data.page}</p>
        <ReactMarkdown>{data.description_blog}</ReactMarkdown>
      </div>
    </div>
    
  );
}