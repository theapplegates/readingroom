import { getCollection, render } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const posts = await getCollection('post');
  const documents = await Promise.all(posts.map(async (post) => ({
    id: post.id,
    title: post.data.title,
    description: post.data.description,
    category: post.data.tags?.join(', ') || 'Post',
    href: `/blog/${post.id}`,
    headings: (await render(post)).headings.filter((heading) => heading.depth <= 3).map((heading) => heading.text),
    content: (post.body || '').replace(/<[^>]*>/g, ' ').replace(/[#*_`\[\]()]/g, ' ').replace(/\s+/g, ' ').trim(),
  })));
  return new Response(JSON.stringify(documents), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
