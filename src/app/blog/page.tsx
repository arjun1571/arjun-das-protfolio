import Image from "next/image";
import Link from "next/link";
import { blogData } from "@/@data/blogData";

const BlogPage = () => {
    return (
        <main className="min-h-screen overflow-hidden bg-[#070b14] text-white">
            <section className="relative px-4 py-24">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1d4ed840,transparent_35%),radial-gradient(circle_at_bottom_right,#0ea5e940,transparent_30%)]" />

                <div className="relative mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-blue-300">
                            My Blog
                        </span>

                        <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
                            Latest Articles
                        </h1>

                        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
                            Explore frontend development, clean code, UI design and modern web
                            technologies with practical and professional insights.
                        </p>
                    </div>

                    <div className="grid items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
                        {blogData.map((blog) => (
                            <article
                                key={blog.id}
                                className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl shadow-black/30 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-blue-400/50"
                            >
                                <div className="relative h-60 overflow-hidden">
                                    <Image
                                        src={blog.image}
                                        alt={blog.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                                        className="object-cover transition duration-700 group-hover:scale-110"
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                                    <span className="absolute left-5 top-5 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold text-white shadow-lg shadow-blue-600/30">
                                        {blog.category}
                                    </span>
                                </div>

                                <div className="flex flex-1 flex-col p-7">
                                    <div className="mb-4 flex items-center gap-3 text-sm text-slate-400">
                                        <span>{blog.date}</span>
                                        <span className="h-1 w-1 rounded-full bg-slate-500" />
                                        <span>{blog.readTime}</span>
                                    </div>

                                    <h2 className="text-2xl font-extrabold leading-snug transition group-hover:text-blue-300">
                                        {blog.title}
                                    </h2>

                                    <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-300">
                                        {blog.excerpt}
                                    </p>

                                    <div className="mt-auto pt-7">
                                        <Link
                                            href={`/blog/${blog.slug}`}
                                            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-blue-500 hover:text-white"
                                        >
                                            Read More →
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BlogPage;