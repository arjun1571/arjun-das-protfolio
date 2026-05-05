/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogData } from "@/@data/blogData";

const BlogDetailsPage = async ({ params }: any) => {
    const { slug } = await params;

    const blog = blogData.find(
        (item) => item.slug.toLowerCase() === slug.toLowerCase()
    );

    if (!blog) return notFound();

    const relatedPosts = blogData
        .filter((item) => item.slug !== blog.slug)
        .slice(0, 3);

    return (
        <main className="min-h-screen overflow-hidden bg-[#080c14] text-white">
            <section className="relative px-4 pb-16 pt-24">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#2563eb35,transparent_32%),radial-gradient(circle_at_bottom_right,#38bdf835,transparent_35%)]" />

                <div className="relative mx-auto max-w-7xl">
                    <Link
                        href="/blog"
                        className="mb-10 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-blue-400/50 hover:bg-blue-500/10 hover:text-white"
                    >
                        ← Back to Articles
                    </Link>

                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <div>
                            <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-bold text-blue-300">
                                {blog.category}
                            </span>

                            <h1 className="mt-7 text-4xl font-black leading-tight tracking-tight md:text-6xl">
                                {blog.title}
                            </h1>

                            <p className="mt-6 text-lg leading-8 text-slate-300">
                                {blog.excerpt}
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-400">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 text-lg font-black text-white shadow-lg shadow-blue-600/30">
                                        A
                                    </div>

                                    <div>
                                        <p className="font-bold text-white">Arjun Chandra Das</p>
                                        <p>
                                            {blog.date} • {blog.readTime}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[330px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] shadow-2xl shadow-black/40 md:h-[440px]">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-4 pb-24">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
                        {/* Article Content */}
                        <article className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#0d1424] p-6 shadow-2xl shadow-black/40 md:p-10">
                            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
                            <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />

                            <div className="relative">
                                <div className="mb-8 flex flex-wrap items-center gap-3">
                                    <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm font-bold text-blue-300">
                                        {blog.category}
                                    </span>

                                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                                        {blog.date}
                                    </span>

                                    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300">
                                        {blog.readTime}
                                    </span>
                                </div>

                                <p className="text-lg leading-9 text-slate-300 md:text-xl md:leading-10 first-letter:float-left first-letter:mr-4 first-letter:text-7xl first-letter:font-black first-letter:leading-[0.85] first-letter:text-blue-300">
                                    {blog.content}
                                </p>

                                <div className="my-12 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                                <div className="grid gap-5 md:grid-cols-2">
                                    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6">
                                        <h3 className="text-xl font-black text-white">
                                            Why It Matters
                                        </h3>
                                        <p className="mt-3 text-sm leading-7 text-slate-300">
                                            A clean interface helps readers focus on the content and builds
                                            trust with a professional visual experience.
                                        </p>
                                    </div>

                                    <div className="rounded-[2rem] border border-blue-400/20 bg-blue-500/10 p-6">
                                        <h3 className="text-xl font-black text-white">
                                            Key Takeaway
                                        </h3>
                                        <p className="mt-3 text-sm leading-7 text-slate-300">
                                            Good design means better readability, faster understanding and a
                                            stronger impression on visitors.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>

                        {/* Right Sidebar */}
                        <aside className="space-y-6">
                            <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl shadow-black/30 backdrop-blur-xl">
                                <h3 className="text-2xl font-black">Article Overview</h3>

                                <div className="mt-6 space-y-4">
                                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                            Category
                                        </p>
                                        <p className="mt-1 font-bold text-white">{blog.category}</p>
                                    </div>

                                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                            Published
                                        </p>
                                        <p className="mt-1 font-bold text-white">{blog.date}</p>
                                    </div>

                                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                            Read Time
                                        </p>
                                        <p className="mt-1 font-bold text-white">{blog.readTime}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-[2.5rem] border border-blue-400/20 bg-gradient-to-br from-blue-600/20 to-cyan-400/10 p-6 shadow-2xl shadow-blue-950/30">
                                <h3 className="text-2xl font-black">Build Your Website</h3>

                                <p className="mt-3 text-sm leading-7 text-slate-300">
                                    Need a clean and premium portfolio, landing page or business
                                    website? Let&apos;s build something professional.
                                </p>

                                <Link
                                    href="/#contact"
                                    className="mt-6 inline-flex w-full justify-center rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-blue-500 hover:text-white"
                                >
                                    Contact Me
                                </Link>
                            </div>
                        </aside>
                    </div>

                    {/* Related Articles */}
                    <div className="mt-16">
                        <div className="mb-8 flex items-end justify-between gap-4">
                            <div>
                                <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-300">
                                    Continue Reading
                                </p>
                                <h2 className="mt-3 text-3xl font-black">Related Articles</h2>
                            </div>

                            <Link
                                href="/blog"
                                className="hidden rounded-full border border-white/10 px-5 py-2.5 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white md:inline-flex"
                            >
                                View All
                            </Link>
                        </div>

                        <div className="grid gap-6 md:grid-cols-3">
                            {relatedPosts.map((item) => (
                                <Link
                                    key={item.id}
                                    href={`/blog/${item.slug}`}
                                    className="group overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.05] shadow-xl shadow-black/25 transition hover:-translate-y-1 hover:border-blue-400/50"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover transition duration-700 group-hover:scale-110"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                    </div>

                                    <div className="p-6">
                                        <p className="text-sm font-bold text-blue-300">
                                            {item.category}
                                        </p>

                                        <h3 className="mt-3 line-clamp-2 text-xl font-black leading-snug transition group-hover:text-blue-300">
                                            {item.title}
                                        </h3>

                                        <p className="mt-4 text-sm text-slate-400">
                                            {item.date} • {item.readTime}
                                        </p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BlogDetailsPage;