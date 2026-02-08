import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllSlugs } from '@/lib/blog';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: 'Not Found' };
  return { title: `${post.title} — Oriel Savir` };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <Link href="/blog" className="text-xs text-[var(--text-muted)] hover:text-[var(--accent)]">
          &larr; blog
        </Link>
        {post.image && (
          <Image
            src={post.image}
            alt={post.title}
            width={720}
            height={400}
            className="w-full h-auto rounded-lg"
          />
        )}
        <div>
          <h1 className="text-2xl font-bold text-[var(--text)]">{post.title}</h1>
          <p className="text-xs text-[var(--text-muted)] mt-1">{post.date}</p>
        </div>
      </header>

      <article className="prose-custom">
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            img: ({ src, alt }) => (
              <Image
                src={typeof src === 'string' ? src : ''}
                alt={alt ?? ''}
                width={720}
                height={400}
                className="w-full h-auto rounded-lg my-6"
              />
            ),
          }}
        >
          {post.content}
        </Markdown>
      </article>
    </div>
  );
}
