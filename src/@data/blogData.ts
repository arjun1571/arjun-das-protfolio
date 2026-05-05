export const blogData = [
  {
    id: 1,
    slug: "why-typescript-is-important",
    title: "TypeScript কেন এত গুরুত্বপূর্ণ",
    category: "Programming",
    date: "Dec 05, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200",
    excerpt:
      "TypeScript ব্যবহার করলে কোড হয় আরও নিরাপদ, structured এবং বড় প্রজেক্টে maintain করা অনেক সহজ হয়ে যায়।",
    content: `
বর্তমান সময়ে ওয়েব ডেভেলপমেন্টের জগতে TypeScript একটি অত্যন্ত গুরুত্বপূর্ণ টুল হিসেবে প্রতিষ্ঠিত হয়েছে। আগে শুধুমাত্র JavaScript ব্যবহার করেই আমরা সব ধরনের কাজ করতাম, কিন্তু যখন প্রজেক্ট বড় হতে শুরু করে, তখন কোড ম্যানেজ করা, bug খুঁজে বের করা এবং maintain করা অনেক কঠিন হয়ে যায়।

TypeScript মূলত JavaScript-এর একটি superset, যেখানে static typing যুক্ত করা হয়েছে। এর মাধ্যমে আমরা আগে থেকেই নির্ধারণ করতে পারি কোন ভ্যারিয়েবল কী ধরনের ডাটা ধারণ করবে। যেমন: string, number, boolean বা custom object। এর ফলে development এর সময়ই অনেক ভুল ধরা পড়ে, যেগুলো আগে runtime-এ গিয়ে সমস্যা তৈরি করতো।

ধরো তুমি একটি বড় e-commerce application তৈরি করছো, যেখানে user authentication, product management, order system, payment integration — সবকিছু একসাথে কাজ করছে। এখানে যদি data structure পরিষ্কারভাবে define না করা থাকে, তাহলে সামান্য ভুল থেকেও বড় bug তৈরি হতে পারে। TypeScript এই সমস্যাগুলো অনেকটাই কমিয়ে আনে।

এছাড়াও TypeScript ব্যবহার করলে code readability অনেক উন্নত হয়। অন্য কোনো developer যখন তোমার code পড়বে, তখন খুব সহজেই বুঝতে পারবে কোন variable কী কাজ করছে। এটা team collaboration এর জন্য অনেক বড় একটি সুবিধা।

আরেকটি বড় সুবিধা হলো IDE support। VS Code-এর মতো modern editor-এ TypeScript ব্যবহার করলে powerful auto-completion, inline error detection, smart refactoring — এই সব সুবিধা পাওয়া যায়, যা developer-এর কাজকে অনেক দ্রুত এবং efficient করে তোলে।

সবশেষে বলা যায়, যদি তুমি long-term scalable এবং professional মানের application তৈরি করতে চাও, তাহলে TypeScript শেখা এখন প্রায় অপরিহার্য। এটি শুধু তোমার code-এর quality বাড়াবে না, বরং development process-কে আরও smooth এবং reliable করে তুলবে।
`,
  },
  {
    id: 2,
    slug: "modern-frontend-development",
    title: "Modern Frontend Development কিভাবে বদলে যাচ্ছে",
    category: "Frontend",
    date: "Feb 06, 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200",
    excerpt:
      "React, Next.js, performance optimization এবং clean architecture এখন modern frontend development-এর মূল ভিত্তি।",
    content: `
একসময় frontend development বলতে আমরা শুধু HTML, CSS এবং কিছু JavaScript বুঝতাম। কিন্তু বর্তমান সময়ে এই ধারণা পুরোপুরি বদলে গেছে। এখন frontend development একটি পূর্ণাঙ্গ engineering discipline, যেখানে performance, scalability, maintainability এবং user experience — সবকিছু সমানভাবে গুরুত্বপূর্ণ।

বর্তমানে React সবচেয়ে জনপ্রিয় frontend library হিসেবে ব্যবহৃত হচ্ছে। এর component-based architecture আমাদেরকে reusable UI component তৈরি করতে সাহায্য করে, যা বড় application গুলোকে manageable করে তোলে। একই component বারবার ব্যবহার করা যায়, ফলে development time কমে এবং consistency বজায় থাকে।

Next.js এই ecosystem-কে আরও উন্নত করে। এটি server-side rendering (SSR), static site generation (SSG), SEO optimization এবং fast loading experience প্রদান করে। এর ফলে একটি website শুধু সুন্দরই না, বরং search engine-এও ভালো perform করে।

Modern frontend development-এ clean architecture একটি গুরুত্বপূর্ণ বিষয়। আগে আমরা অনেক সময় সব logic এক জায়গায় লিখে ফেলতাম, কিন্তু এখন components, hooks, services, utils — এইভাবে আলাদা করে structure করা হয়। এতে code maintain করা অনেক সহজ হয় এবং নতুন feature add করাও সহজ হয়ে যায়।

Performance optimization এখন একটি বড় challenge। Lazy loading, code splitting, image optimization, caching — এই সব technique ব্যবহার না করলে application ধীরে চলবে এবং user experience খারাপ হবে। বিশেষ করে mobile user-এর জন্য fast loading খুবই গুরুত্বপূর্ণ।

সবশেষে বলা যায়, modern frontend development এখন শুধুমাত্র design তৈরি করার মধ্যে সীমাবদ্ধ নেই। এটি একটি সম্পূর্ণ system design process, যেখানে UI, performance, scalability এবং user experience — সবকিছু একসাথে বিবেচনা করতে হয়।
`,
  },
  {
    id: 3,
    slug: "building-clean-ui",
    title: "Clean এবং Professional UI কিভাবে বানাবেন",
    category: "UI Design",
    date: "April 28, 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&w=1200",
    excerpt:
      "একটি clean এবং professional UI user trust বাড়ায়, usability উন্নত করে এবং application-এর overall quality বৃদ্ধি করে।",
    content: `
একটি website বা application-এর প্রথম impression নির্ভর করে তার UI design-এর উপর। যদি UI cluttered, অসংগঠিত বা confusing হয়, তাহলে user খুব দ্রুত interest হারিয়ে ফেলে। তাই clean এবং professional UI তৈরি করা অত্যন্ত গুরুত্বপূর্ণ।

Clean UI তৈরির সবচেয়ে গুরুত্বপূর্ণ উপাদান হলো spacing। অনেক সময় আমরা বেশি content বা element একসাথে বসিয়ে দিই, যার ফলে design ভারী এবং অগোছালো লাগে। Proper padding, margin এবং white space ব্যবহার করলে UI অনেক বেশি readable এবং clean দেখায়।

Typography একটি বড় ভূমিকা রাখে। খুব বেশি font ব্যবহার করলে design inconsistent হয়ে যায়। তাই সাধারণত ২-৩টি font family ব্যবহার করাই ভালো। Heading, subheading এবং body text-এর মধ্যে একটি পরিষ্কার hierarchy থাকা উচিত, যাতে user সহজে content scan করতে পারে।

Color selection-এ balance রাখা খুব জরুরি। খুব বেশি color ব্যবহার করলে UI confusing হয়ে যায়। সাধারণত একটি primary color, একটি secondary color এবং কিছু neutral color (যেমন: white, gray, black) ব্যবহার করলে design professional দেখায়।

Visual hierarchy-ও গুরুত্বপূর্ণ। কোন element বেশি গুরুত্বপূর্ণ, সেটা size, color এবং position দিয়ে বোঝাতে হয়। এতে user সহজেই বুঝতে পারে কোথায় focus দিতে হবে।

Responsive design এখন একটি বাধ্যতামূলক বিষয়। Mobile, tablet এবং desktop — সব ধরনের device-এ UI ঠিকভাবে কাজ করতে হবে। Flexible layout, media query এবং responsive unit ব্যবহার করে এটি নিশ্চিত করা যায়।

সবশেষে, একটি ভালো UI শুধু দেখতে সুন্দর হলেই হবে না — সেটি ব্যবহার করা সহজ হতে হবে। User যেন কোনো confusion ছাড়াই তার প্রয়োজনীয় কাজ সম্পন্ন করতে পারে, সেটাই একটি সফল UI design-এর মূল লক্ষ্য।
`,
  },
];
