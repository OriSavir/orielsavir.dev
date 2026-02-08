import Link from 'next/link';
import { getAllPosts } from '@/lib/blog';

export const metadata = {
  title: 'Blog — Oriel Savir',
  description: 'Random thoughts, updates on projects, and more from me.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="space-y-12">
      <header className="space-y-2">
        <Link href="/" className="text-xs text-[var(--text-muted)] hover:text-[var(--accent)]">
          &larr; home
        </Link>
        <br/>
        <h1 className="text-2xl font-bold text-[var(--text)]">Blog</h1>
      </header>
      {posts.length === 0 ? (
        <p className="text-sm text-[var(--text-muted)]">Blogging soon!</p>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group no-underline"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-sm text-[var(--text)] group-hover:text-[var(--accent)]">
                  {post.title}
                </span>
                <span className="text-xs text-[var(--text-muted)] shrink-0">
                  {post.date}
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
