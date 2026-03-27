import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { blogPosts } from "@/lib/data";
import { ChevronLeft, Clock, Calendar } from "lucide-react";

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-extrabold">Artikel tidak ditemukan</h1>
          <Link to="/blog" className="text-primary font-bold mt-4 inline-block hover:underline">Kembali ke Blog</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-6">
          <ChevronLeft className="h-4 w-4" /> Kembali ke Blog
        </Link>
        <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full capitalize mb-3">{post.category}</span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-foreground leading-tight">{post.title}</h1>
        <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {post.date}</span>
          <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
        </div>
        <img src={post.image} alt={post.title} className="w-full h-64 md:h-96 object-cover rounded-2xl mt-6" loading="lazy" />
        <div className="mt-8 prose prose-sm max-w-none">
          {post.content.split("\n\n").map((p, i) => (
            <p key={i} className="text-muted-foreground leading-relaxed mb-4">{p}</p>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetail;
