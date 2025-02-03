// pages/catalog.tsx
import React from "react";
import Layout from "../components/Layout";

const CatalogScreen = () => {
  return (
    <Layout>
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Our Catalog</h1>
        <p className="mt-4 text-xl">Explore our wide range of shoes.</p>
      </div>
    </Layout>
  );
};

export default CatalogScreen;
