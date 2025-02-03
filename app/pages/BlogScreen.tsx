// pages/blog.tsx
import React from "react";
import Layout from "../components/Layout";

const BlogScreen = () => {
  return (
    <Layout>
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="mt-4 text-xl">Read our latest articles.</p>
      </div>
    </Layout>
  );
};

export default BlogScreen;
