import { GetServerSideProps, NextApiResponse } from 'next';
import React from 'react';
import fs from 'fs';
import { EnvConf } from '../lib/env';

const Sitemap = () => {

}

export const getServerSideProps: GetServerSideProps = async ({res}: {res: any}) => {
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
    })

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <?xml-stylesheet type="text/xsl" href="/xsl/linked.xslt"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${staticPages
                .map((url) => {
                    return `
                        <url>
                            <loc>${url}</loc>
                            <lastmod>${new Date().toISOString()}</lastmod>
                            <changefreq>monthly</changefreq>
                            <priority>0.8</priority>
                        </url>
                    `;
                })
                .join('')}
            ${blogPages
                .map((url: string) => {
                    return `
                        <url>
                            <loc>${url}</loc>
                            <lastmod>${new Date().toISOString()}</lastmod>
                            <changefreq>monthly</changefreq>
                            <priority>0.8</priority>
                        </url>
                    `;
                })
                .join('')}
        </urlset>
    `;
    res.setHeader('Content-Type', 'application/xml');
    res.write(sitemap);
    res.end();

    return {props: {}}
}

export default Sitemap;