import { useMemo } from 'react';
import { motion } from 'motion/react';
import { BookOpen, PlayCircle, Star, Users, WandSparkles, ShieldCheck, LayoutDashboard } from 'lucide-react';

const featuredCourses = [
  {
    title: 'Advanced React + Next.js 2026',
    mentor: 'Ava Brooks',
    students: '48.2k',
    rating: 4.9,
    duration: '22h',
    level: 'Intermediate'
  },
  {
    title: 'AI Product Engineering Bootcamp',
    mentor: 'Noah Patel',
    students: '31.7k',
    rating: 4.8,
    duration: '18h',
    level: 'Beginner'
  },
  {
    title: 'System Design Interview Mastery',
    mentor: 'Mia Carter',
    students: '66.4k',
    rating: 4.9,
    duration: '14h',
    level: 'Advanced'
  }
];

const features = [
  {
    icon: WandSparkles,
    title: 'AI Learning Assistant',
    description: 'Every lesson includes AI help for summaries, examples, and instant doubt solving.'
  },
  {
    icon: LayoutDashboard,
    title: 'Skill Roadmaps',
    description: 'Structured paths turn random courses into a clear journey from zero to job-ready.'
  },
  {
    icon: ShieldCheck,
    title: 'Verified Certificates',
    description: 'Shareable certificates with verification links for recruiters and hiring teams.'
  }
];

export default function App() {
  const stats = useMemo(
    () => [
      { label: 'Active learners', value: '1.2M+' },
      { label: 'Expert instructors', value: '3,400+' },
      { label: 'Courses & projects', value: '12,000+' }
    ],
    []
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-xl font-bold">
            <BookOpen className="text-cyan-400" />
            LearnForge
          </div>
          <div className="hidden gap-8 md:flex text-sm text-slate-300">
            <a href="#courses">Courses</a>
            <a href="#features">Features</a>
            <a href="#instructors">Instructors</a>
          </div>
          <button className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950">Start Learning</button>
        </nav>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/40 px-4 py-2 text-sm text-cyan-300">
              <WandSparkles size={16} /> Next-gen learning platform
            </p>
            <h1 className="mb-6 text-5xl font-black leading-tight md:text-6xl">
              Build your <span className="text-cyan-400">future skills</span> with a modern Udemy-style academy
            </h1>
            <p className="mb-8 max-w-xl text-lg text-slate-300">
              LearnForge combines premium video courses, AI tutoring, cohort challenges, and portfolio projects in one clean experience.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-cyan-500 px-6 py-3 font-semibold text-slate-950">Explore Courses</button>
              <button className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white">Become an Instructor</button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-2xl shadow-cyan-900/30">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-xl font-semibold">Live classroom</h3>
              <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-300">Live now</span>
            </div>
            <div className="mb-6 rounded-2xl bg-slate-800 p-6">
              <div className="mb-3 flex items-center gap-2 text-sm text-slate-300">
                <PlayCircle className="text-cyan-400" size={18} />
                Product Design Sprint: Capstone Review
              </div>
              <div className="h-40 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20" />
            </div>
            <div className="grid grid-cols-3 gap-3 text-center text-sm">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 p-3">
                  <div className="font-bold text-cyan-300">{s.value}</div>
                  <div className="text-slate-400">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="courses" className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="mb-8 text-3xl font-bold">Featured Courses</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {featuredCourses.map((course) => (
              <article key={course.title} className="rounded-2xl border border-white/10 bg-slate-900 p-5">
                <p className="mb-3 text-sm text-cyan-300">{course.level} • {course.duration}</p>
                <h3 className="mb-3 text-xl font-semibold">{course.title}</h3>
                <p className="mb-4 text-sm text-slate-300">By {course.mentor}</p>
                <div className="flex items-center justify-between text-sm text-slate-300">
                  <span className="flex items-center gap-1"><Users size={15} /> {course.students}</span>
                  <span className="flex items-center gap-1"><Star size={15} className="text-amber-300" /> {course.rating}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-16">
          <h2 className="mb-8 text-3xl font-bold">Why this platform is different</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="rounded-2xl border border-white/10 bg-slate-900 p-6">
                  <Icon className="mb-4 text-cyan-400" />
                  <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                  <p className="text-slate-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
