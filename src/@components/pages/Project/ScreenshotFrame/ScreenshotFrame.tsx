import Image from "next/image";

type ScreenshotFrameProps = {
  src: string;
  alt: string;
  route?: string;
  badge?: string;
  priority?: boolean;
  variant?: "card" | "hero" | "showcase";
  sizes?: string;
  className?: string;
};

const BrowserChrome = ({ route }: { route?: string }) => (
  <div className="flex items-center gap-3 border-b border-white/10 bg-[#121826] px-4 py-3">
    <div className="flex items-center gap-1.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
    </div>
    <div className="flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-1.5">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-3.5 w-3.5 shrink-0 text-emerald-400"
      >
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
      <span className="truncate text-xs font-medium text-slate-400">
        {route || "live preview"}
      </span>
    </div>
  </div>
);

const ScreenshotFrame = ({
  src,
  alt,
  route,
  badge,
  priority = false,
  variant = "showcase",
  sizes = "(max-width: 1024px) 100vw, 800px",
  className = "",
}: ScreenshotFrameProps) => {
  const heights = {
    card: "h-52 sm:h-56",
    hero: "min-h-[300px] md:min-h-[400px]",
    showcase: "min-h-[240px] sm:min-h-[340px] md:min-h-[460px]",
  };

  const glow =
    variant === "card"
      ? "from-blue-500/10 via-cyan-400/5 to-transparent"
      : "from-blue-500/20 via-cyan-400/10 to-purple-500/10";

  return (
    <div className={`relative ${className}`}>
      <div
        className={`pointer-events-none absolute -inset-1 rounded-[1.75rem] bg-gradient-to-br ${glow} blur-xl`}
      />

      <div className="relative overflow-hidden rounded-[1.25rem] border border-white/15 bg-[#0a101c] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)] ring-1 ring-white/10">
        {variant !== "card" && <BrowserChrome route={route} />}

        <div
          className={`relative w-full overflow-hidden bg-[linear-gradient(180deg,#111827_0%,#0b1220_100%)] ${heights[variant]}`}
        >
          {badge && (
            <div className="absolute left-4 top-4 z-10 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
              {badge}
            </div>
          )}

          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-contain object-top p-3 sm:p-4"
          />

          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0b1220] to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default ScreenshotFrame;
