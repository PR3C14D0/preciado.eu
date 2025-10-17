import { GetServerSideProps } from 'next';
import React from 'react';
import fs from 'fs';
import { EnvConf } from '../lib/env';

const Sitemap = () => {}

export const getServerSideProps: GetServerSideProps = async ({ res }: { res: any }) => {
  const baseUrl = "https://preciado.eu";
  const staticPages: Array<string> = fs
    .readdirSync("./src/pages")
    .filter((staticPage) => {
      return ![
        "_app.tsx",
        "404.tsx",
        "sitemap.xml.tsx",
        "_document.tsx",
        "blog",
        "index.tsx",
        "portfolio.tsx"
      ].includes(staticPage);
    })
    .map((staticPagePath) => {
      return `${baseUrl}/${staticPagePath.replace('.tsx', '')}`;
    });

  const blogPosts = await fetch(`${EnvConf().api}/blog`);
  const blogData = await blogPosts.json();
  const blogPages = blogData.posts.map((post: { _id: string }) => {
    return `${baseUrl}/blog/${post._id}`;
  });

  const lastmod = new Date().toISOString();

  const urls = [
    ...staticPages.map(
      (url) => `
    <url>
      <loc>${url}</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`
    ),
    ...blogPages.map(
      (url: string) => `
    <url>
      <loc>${url}</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`
    ),
  ].join('');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default Sitemap;
