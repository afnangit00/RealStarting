"use client";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  ExternalLink,
  Instagram,
  Layers3,
  Linkedin,
  Menu,
  MessageCircle,
  MoveUpRight,
  Sparkles,
  X,
} from "lucide-react";

const profileImage =
  "https://instagram.fcai21-3.fna.fbcdn.net/v/t51.82787-19/868349552_17979272028136701_7109446824108885878_n.jpg?_nc_cat=100&ig_cache_key=GHD2wTP9pI56DeA-AHYHihQ41KlibmNDAQAB0j-ccb7-5&ccb=7-5&_nc_sid=669407&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLnd3dy4xMDgwLkMzIn0%3D&_nc_ohc=ZRQbOZneUsoQ7kNvwFGxghH&_nc_oc=Adqb2soAfzsvNIgeVaDps8I-7ie1SsYhP07RpcvUZHySgDwx5NxoODIrjFrVB_O_sHU&_nc_zt=24&_nc_ht=instagram.fcai21-3.fna&_nc_gid=v_KH3U6CVw-64PGXkSQ9uQ&_nc_ss=7b6a8&oh=00_AQTFIdJBrKMRIqYvG8ZpS-mwllutGl769j9-uUMeS_HjgA&oe=6AE81EFA";
const projects = [
  {
    number: "01",
    title: "Photographer Portfolio",
    category: "CREATIVE PORTFOLIO",
    description:
      "A warm, editorial portfolio that puts the photographer’s work first, with an elegant gallery, services and a clear booking journey.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1500&q=88",
    label: "Photography",
    link: "https://photographer.vercel.app/",
  },
  {
    number: "02",
    title: "Cinematic Videographer",
    category: "FILM & STORYTELLING",
    description:
      "A cinematic showcase for wedding films, brand stories and event filmmakers, designed around atmosphere and visual storytelling.",
    tags: ["Next.js", "Motion", "Responsive UI"],
    image:
      "https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?auto=format&fit=crop&w=1500&q=88",
    label: "Videography",
    link: "https://cinematic-videographer-portfolio.vercel.app/",
  },
  {
    number: "03",
    title: "Independent Designer",
    category: "DESIGN & IDENTITY",
    description:
      "A bold creative portfolio for brand designers, art directors and digital creatives to present their best work with confidence.",
    tags: ["TypeScript", "Tailwind CSS", "Lucide"],
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=1500&q=88",
    label: "Design",
    link: "https://independent-designer-portfolio.vercel.app/",
  },
  {
    number: "04",
    title: "Interior Design Portfolio",
    category: "Interior & DESIGN",
    description:
      "A modern portfolio for architects and designers to showcase their projects and design philosophy.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    label: "Interior Design",
    link: "https://builders-omega-vert.vercel.app/",
  },
  {
    number: "05",
    title: "Car Detailing Portfolio",
    category: "CAR DETAILING & MAINTENANCE",
    description:
      "A sleek portfolio for car detailing services, showcasing before and after transformations.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image:
      "https://images.unsplash.com/photo-1694678505383-676d78ea3b96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
    label: "Car detailing",
    link: "https://service-for-you.vercel.app/",
  },
];
const skills = [
  "Next.js",
  "React",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Express.js",
  "Tailwind CSS",
  "Framer Motion",
  "REST APIs",
  "Git & GitHub",
  "Responsive UI",
];
const process = [
  {
    n: "01",
    title: "Understand",
    body: "We define your audience, goals, content and the feeling your website should communicate.",
  },
  {
    n: "02",
    title: "Design & build",
    body: "I shape the layout, polish the details and build a responsive experience around your work.",
  },
  {
    n: "03",
    title: "Launch",
    body: "We review the final details, connect your links and prepare your website to go live.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  const filters = ["All", "Photography", "Videography", "Design","Interior Design","Car detailing"];
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.label === activeFilter);
  return (
    <main className="overflow-hidden bg-night text-[#f4f4ed]">
      <div className="noise pointer-events-none fixed inset-0 z-0 opacity-[0.035]" />
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
        <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-night/85 px-4 py-3 backdrop-blur-2xl sm:rounded-full sm:px-6">
          <button
            onClick={() => scrollTo("home")}
            className="font-display text-xl font-bold tracking-[-.06em]"
          >
            afnan<span className="text-lime">.</span>
          </button>
          <div className="hidden items-center gap-7 text-xs text-white/65 lg:flex">
            {[
              ["Work", "work"],
              ["Services", "services"],
              ["About", "about"],
              ["Process", "process"],
            ].map(([l, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="transition-colors hover:text-lime"
              >
                {l}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollTo("contact")}
            className="hidden items-center gap-2 rounded-full bg-lime px-5 py-2.5 text-xs font-semibold text-night transition hover:bg-white sm:flex"
          >
            Let&apos;s talk <ArrowUpRight size={14} />
          </button>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/15 lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-panel p-3 shadow-2xl lg:hidden"
            >
              {[
                ["Work", "work"],
                ["Services", "services"],
                ["About", "about"],
                ["Process", "process"],
                ["Contact", "contact"],
              ].map(([l, id]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="block w-full rounded-xl px-4 py-3 text-left text-sm text-white/75 hover:bg-white/5 hover:text-lime"
                >
                  {l}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section
        id="home"
        className="relative z-10 px-4 pb-16 pt-32 sm:px-6 sm:pt-40 lg:pb-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr] lg:gap-8">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55 }}
                className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.035] px-3.5 py-2 text-[10px] uppercase tracking-[.18em] text-white/65 sm:text-xs"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-lime" />
                </span>
                Available for select projects
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08 }}
                className="max-w-4xl font-display text-[16vw] font-medium leading-[.88] tracking-[-.075em] sm:text-[12vw] lg:text-[7.7rem]"
              >
                I build
                <br />
                <span className="text-lime">digital</span> things
                <br />
                that matter<span className="text-lime">.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-7 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8"
              >
                I&apos;m Afnan Cheranthodika — a full-stack developer creating
                premium, responsive websites for creatives and ambitious
                businesses. Thoughtful design. Solid code. No unnecessary noise.
              </motion.p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => scrollTo("work")}
                  className="group inline-flex items-center gap-3 rounded-full bg-lime px-5 py-3.5 text-xs font-semibold text-night transition hover:bg-white sm:text-sm"
                >
                  Explore selected work{" "}
                  <ArrowDownRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                  />
                </button>
                <button
                  onClick={() => scrollTo("contact")}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3.5 text-xs text-white/80 transition hover:border-lime hover:text-lime sm:text-sm"
                >
                  Get in touch <ArrowUpRight size={15} />
                </button>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] uppercase tracking-[.15em] text-white/35 sm:text-xs">
                <span>Next.js</span>
                <span className="text-lime">/</span>
                <span>TypeScript</span>
                <span className="text-lime">/</span>
                <span>MERN Stack</span>
                <span className="text-lime">/</span>
                <span>Creative UI</span>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96, rotate: 1.5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.85, delay: 0.15 }}
              className="relative mx-auto w-full max-w-[460px] lg:ml-auto"
            >
              <div className="absolute -inset-5 rounded-[2.5rem] bg-lime/[.06] blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-panel p-3 sm:rounded-[2.5rem] sm:p-4">
                <div className="relative aspect-[4/4.7] overflow-hidden rounded-[1.5rem] bg-[#282a24] sm:rounded-[2rem]">
                  <Image
                    src={profileImage}
                    alt="Afnan Cheranthodika profile portrait"
                    fill
                    priority
                    unoptimized
                    sizes="(max-width: 1024px) 90vw, 38vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-night/5" />
                  <div className="absolute inset-x-4 bottom-4 flex items-end justify-between sm:inset-x-6 sm:bottom-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-[.2em] text-white/60">
                        Developer / Builder
                      </p>
                      <p className="mt-1 font-display text-2xl sm:text-3xl">
                        Afnan C.
                      </p>
                    </div>
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-lime text-night">
                      <Code2 size={20} />
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3 px-2 pb-1 pt-4 sm:px-3">
                  <div>
                    <p className="text-xs text-white/80">Kerala, India</p>
                    <p className="mt-1 text-[10px] text-white/40">
                      Working worldwide
                    </p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-[10px] text-white/60">
                    <Sparkles size={12} className="text-lime" />
                    Creative engineering
                  </div>
                </div>
              </div>
              <div className="absolute -left-5 top-12 hidden rounded-2xl border border-white/10 bg-panel/95 p-4 shadow-glow backdrop-blur sm:block">
                <p className="text-[10px] uppercase tracking-widest text-white/40">
                  Focus
                </p>
                <p className="mt-1 text-sm font-medium">Design + Development</p>
              </div>
            </motion.div>
          </div>
          <div className="mt-20 border-y border-white/10 py-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-[10px] uppercase tracking-[.2em] text-white/35">
                What I bring to the table
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Clear communication",
                  "Responsive by default",
                  "Detail-oriented",
                  "Built for real users",
                ].map((x) => (
                  <span
                    key={x}
                    className="inline-flex items-center gap-2 rounded-full bg-white/[.04] px-3 py-2 text-[10px] text-white/65 sm:text-xs"
                  >
                    <Check size={12} className="text-lime" />
                    {x}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    
      {/* work section */}


      <section id="work" className="relative z-10 px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[.25em] text-lime sm:text-xs">
                Selected work / 2026
              </p>
              <h2 className="font-display text-4xl tracking-[-.06em] sm:text-6xl lg:text-7xl">
                Three creative worlds<span className="text-lime">.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/50">
              Three focused portfolio experiences built around the people behind
              the work — photographers, filmmakers and designers.
            </p>
          </div>
          <div className="mb-7 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`rounded-full border px-4 py-2 text-xs transition ${activeFilter === f ? "border-lime bg-lime text-night" : "border-white/10 text-white/55 hover:border-white/30 hover:text-white"}`}
              >
                {f}
              </button>
            ))}
          </div>
          <motion.div layout className="grid gap-5 md:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((p) => (
                <motion.article
                  layout
                  key={p.number}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.35 }}
                  className="group overflow-hidden rounded-[1.7rem] border border-white/10 bg-panel"
                >
                  <div className="relative m-2 aspect-[1.35/1] overflow-hidden rounded-[1.25rem] bg-[#292b25] sm:m-3">
                    <Image
                      src={p.image}
                      alt={`${p.title} website concept preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.045]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-night/60 via-transparent to-transparent" />
                    <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-night/40 px-3 py-1.5 text-[9px] uppercase tracking-[.16em] text-white/80 backdrop-blur-md">
                      {p.category}
                    </span>
                    <span className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-lime text-night transition-transform group-hover:rotate-45">
                      
                      <a href={p.link} target="_blank" rel="noopener noreferrer">
                        <MoveUpRight size={17} />
                      </a>
                    </span>
                  </div>
                  <div className="px-5 pb-6 pt-3 sm:px-6 sm:pb-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="mb-2 text-[10px] uppercase tracking-[.18em] text-white/35">
                          Project {p.number}
                        </p>
                        <h3 className="font-display text-2xl tracking-tight sm:text-3xl">
                          {p.title}
                        </h3>
                      </div>
                      <ArrowUpRight
                        className="mt-2 shrink-0 text-white/35 transition group-hover:text-lime"
                        size={20}
                      />
                    </div>
                    <p className="mt-3 max-w-xl text-xs leading-6 text-white/50 sm:text-sm">
                      {p.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/10 px-3 py-1.5 text-[9px] text-white/50 sm:text-[10px]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
          <p className="mt-5 text-[10px] leading-5 text-white/30">
            These showcase the three portfolio template categories. Replace with
            final live project links when deployed.
          </p>
        </div>
      </section>

      <section
        id="services"
        className="relative z-10 border-y border-white/10 bg-[#151612] px-4 py-20 sm:px-6 sm:py-28"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[.25em] text-lime sm:text-xs">
                What I do
              </p>
              <h2 className="max-w-lg font-display text-4xl tracking-[-.06em] sm:text-6xl">
                Small details.
                <br />
                <span className="text-white/40">Big picture.</span>
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">
                From a polished single-page portfolio to a more complex web
                application, I focus on the right solution for the goal.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: Layers3,
                  n: "01",
                  title: "Creative portfolio sites",
                  text: "Premium single-page websites for photographers, videographers, editors and designers.",
                },
                {
                  icon: Code2,
                  n: "02",
                  title: "Frontend development",
                  text: "Responsive interfaces using Next.js, React, TypeScript and Tailwind CSS.",
                },
                {
                  icon: Sparkles,
                  n: "03",
                  title: "UI polish & motion",
                  text: "Thoughtful layouts, subtle animations and details that make a site feel considered.",
                },
                {
                  icon: ExternalLink,
                  n: "04",
                  title: "Launch-ready setup",
                  text: "Metadata, responsive checks and deployment-ready project structure.",
                },
              ].map(({ icon: Icon, n, title, text }) => (
                <motion.div
                  key={n}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-white/[.025] p-5 sm:p-6"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-white/30">{n}</span>
                    <Icon size={19} className="text-lime" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-8 font-display text-xl tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-2 text-xs leading-6 text-white/45">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      <section id="about" className="relative z-10 px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-3 text-[10px] uppercase tracking-[.25em] text-lime sm:text-xs">
              A little about me
            </p>
            <h2 className="font-display text-4xl leading-[1.03] tracking-[-.06em] sm:text-6xl">
              I care about how it works —{" "}
              <span className="text-white/40">and how it feels.</span>
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-white/65">
              I&apos;m Afnan, a self-taught Full Stack Developer from Kerala,
              India. I work with the MERN stack and Next.js to create useful,
              modern digital experiences — from e-commerce and SaaS concepts to
              expressive portfolio websites for creative professionals.
            </p>
            <p className="mt-5 text-sm leading-7 text-white/45">
              My approach combines practical development with an eye for
              hierarchy, typography, motion and responsive detail. The goal is
              always a website that looks intentional and is easy to use.
            </p>
            <a
              href="https://afnancheranthodika.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex items-center gap-2 border-b border-lime/50 pb-2 text-sm text-lime transition hover:border-lime"
            >
              Visit my previous portfolio <ArrowUpRight size={15} />
            </a>
            <div className="mt-9 border-t border-white/10 pt-6">
              <p className="mb-4 text-[10px] uppercase tracking-[.2em] text-white/35">
                Tools & technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-white/10 bg-white/[.025] px-3 py-2 text-[10px] text-white/65 sm:text-xs"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="process"
        className="relative z-10 px-4 pb-20 sm:px-6 sm:pb-28"
      >
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-panel p-6 sm:p-10 lg:p-14">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[.25em] text-lime sm:text-xs">
                How we work
              </p>
              <h2 className="font-display text-4xl tracking-[-.06em] sm:text-6xl">
                Simple by design.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/45">
              A clear process from the first conversation to the final launch.
            </p>
          </div>
          <div className="grid gap-7 md:grid-cols-3 md:gap-5">
            {process.map((s) => (
              <div key={s.n} className="border-t border-white/15 pt-5">
                <p className="text-xs text-lime">{s.n} / 03</p>
                <h3 className="mt-5 font-display text-2xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/45">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-4 pb-6 sm:px-6 sm:pb-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-lime px-6 py-12 text-night sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="mb-4 text-[10px] uppercase tracking-[.22em] text-night/60 sm:text-xs">
                Have something in mind?
              </p>
              <h2 className="max-w-4xl font-display text-5xl leading-[.93] tracking-[-.07em] sm:text-7xl lg:text-8xl">
                Let&apos;s build
                <br />
                something good<span className="text-white">.</span>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-night/65">
                Tell me about your idea, your work and what you want your
                website to do. Let&apos;s make a plan.
              </p>
            </div>
            <a
              href="mailto:afnancheranthodika@gmail.com?subject=Website%20project%20enquiry"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-night px-6 py-4 text-sm text-white transition hover:bg-white hover:text-night"
            >
              Start a conversation{" "}
              <ArrowRight
                size={17}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
          <div className="mt-12 flex flex-wrap gap-3 border-t border-night/15 pt-6">
            <a
              href="https://wa.me/+917902452718"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-night/20 px-4 py-2.5 text-xs transition hover:bg-night hover:text-white"
            >
              <MessageCircle size={15} />
              WhatsApp
            </a>
            <a
              href="https://www.instagram.com/afnan.dev/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-night/20 px-4 py-2.5 text-xs transition hover:bg-night hover:text-white"
            >
              <Instagram size={15} />
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/afnan-lux-32397431b/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-night/20 px-4 py-2.5 text-xs transition hover:bg-night hover:text-white"
            >
              <Linkedin  size={15} />
              LinkedIn
            </a>
            <a
              href="mailto:afnancheranthodika@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-night/20 px-4 py-2.5 text-xs transition hover:bg-night hover:text-white"
            >
              <ArrowUpRight size={15} />
              Email
            </a>
          </div>
        </div>
      </section>
      <footer className="relative z-10 px-4 py-7 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-[10px] text-white/35 sm:flex-row sm:items-center sm:justify-between sm:text-xs">
          <p>
            © {new Date().getFullYear()} Afnan Cheranthodika. Designed & built
            with care.
          </p>
          <button
            onClick={() => scrollTo("home")}
            className="flex w-fit items-center gap-2 transition hover:text-lime"
          >
            Back to top <ArrowUpRight size={13} />
          </button>
        </div>
      </footer>
    </main>
  );
}
