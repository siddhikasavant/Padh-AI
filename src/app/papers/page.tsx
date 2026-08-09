'use client';

import React, { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

const semesters = ['All', 'Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'];
const subjects = ['All Subjects', 'Machine Learning', 'Python Programming', 'Deep Learning', 'Data Science', 'AI Fundamentals', 'Neural Networks', 'Computer Vision', 'NLP'];

const papers = [
  {
    id: 1,
    title: 'Machine Learning — Summer 2025',
    subject: 'Machine Learning',
    sem: 'Sem 4',
    year: '2025',
    session: 'Summer',
    pages: 4,
    downloads: 512,
    color: 'primary',
  },
  {
    id: 2,
    title: 'Machine Learning — Winter 2024',
    subject: 'Machine Learning',
    sem: 'Sem 4',
    year: '2024',
    session: 'Winter',
    pages: 4,
    downloads: 634,
    color: 'primary',
  },
  {
    id: 3,
    title: 'Python Programming — Summer 2025',
    subject: 'Python Programming',
    sem: 'Sem 3',
    year: '2025',
    session: 'Summer',
    pages: 4,
    downloads: 389,
    color: 'accent',
  },
  {
    id: 4,
    title: 'Python Programming — Winter 2024',
    subject: 'Python Programming',
    sem: 'Sem 3',
    year: '2024',
    session: 'Winter',
    pages: 4,
    downloads: 421,
    color: 'accent',
  },
  {
    id: 5,
    title: 'Deep Learning — Summer 2025',
    subject: 'Deep Learning',
    sem: 'Sem 5',
    year: '2025',
    session: 'Summer',
    pages: 4,
    downloads: 298,
    color: 'primary',
  },
  {
    id: 6,
    title: 'Data Science — Winter 2024',
    subject: 'Data Science',
    sem: 'Sem 5',
    year: '2024',
    session: 'Winter',
    pages: 4,
    downloads: 276,
    color: 'accent',
  },
  {
    id: 7,
    title: 'AI Fundamentals — Summer 2024',
    subject: 'AI Fundamentals',
    sem: 'Sem 3',
    year: '2024',
    session: 'Summer',
    pages: 4,
    downloads: 345,
    color: 'primary',
  },
  {
    id: 8,
    title: 'Computer Vision — Winter 2023',
    subject: 'Computer Vision',
    sem: 'Sem 4',
    year: '2023',
    session: 'Winter',
    pages: 4,
    downloads: 187,
    color: 'accent',
  },
  {
    id: 9,
    title: 'NLP — Summer 2025',
    subject: 'NLP',
    sem: 'Sem 5',
    year: '2025',
    session: 'Summer',
    pages: 4,
    downloads: 214,
    color: 'primary',
  },
  {
    id: 10,
    title: 'Neural Networks — Winter 2024',
    subject: 'Neural Networks',
    sem: 'Sem 6',
    year: '2024',
    session: 'Winter',
    pages: 4,
    downloads: 163,
    color: 'accent',
  },
];

interface Paper {
  id: number;
  title: string;
  subject: string;
  sem: string;
  year: string;
  session: string;
  pages: number;
  downloads: number;
  color: string;
}

interface PaperCardProps {
  paper: Paper;
  index: number;
  visible: boolean;
}

function PaperCard({ paper, index, visible }: PaperCardProps) {
  const isBlue = paper.color === 'primary';
  return (
    <div
      className="group relative rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-500 overflow-hidden"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.07}s, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 0.07}s, background 0.3s, border-color 0.3s`,
      }}
    >
      {/* Top accent bar */}
      <div
        className="h-0.5 w-full"
        style={{
          background: isBlue
            ? 'linear-gradient(90deg, #3B82F6, transparent)'
            : 'linear-gradient(90deg, #8B5CF6, transparent)',
        }}
      />

      <div className="p-6">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{
              background: isBlue
                ? 'rgba(59,130,246,0.12)'
                : 'rgba(139,92,246,0.12)',
            }}
          >
            <Icon
              name="DocumentTextIcon"
              size={18}
              className={isBlue ? 'text-blue-400' : 'text-purple-400'}
            />
          </div>
          <span
            className="text-xs font-medium px-2.5 py-1 rounded-full"
            style={{
              background: paper.session === 'Summer' ?'rgba(59,130,246,0.1)' :'rgba(139,92,246,0.1)',
              color: paper.session === 'Summer' ? '#93C5FD' : '#C4B5FD',
            }}
          >
            {paper.session} {paper.year}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-sm font-semibold text-foreground leading-snug mb-3 group-hover:text-gradient transition-all duration-300">
          {paper.title}
        </h3>

        {/* Meta */}
        <div className="flex flex-wrap gap-2 mb-5">
          <span className="text-xs text-muted-foreground bg-white/5 px-2.5 py-1 rounded-full">
            {paper.sem}
          </span>
          <span className="text-xs text-muted-foreground bg-white/5 px-2.5 py-1 rounded-full">
            {paper.pages} pages
          </span>
          <span className="text-xs text-muted-foreground bg-white/5 px-2.5 py-1 rounded-full flex items-center gap-1">
            <Icon name="ArrowDownTrayIcon" size={11} />
            {paper.downloads}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-medium text-muted-foreground bg-white/5 hover:bg-white/10 hover:text-foreground transition-all duration-200">
            <Icon name="EyeIcon" size={13} />
            Preview
          </button>
          <button
            className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-medium transition-all duration-200"
            style={{
              background: isBlue
                ? 'rgba(59,130,246,0.15)'
                : 'rgba(139,92,246,0.15)',
              color: isBlue ? '#93C5FD' : '#C4B5FD',
            }}
          >
            <Icon name="ArrowDownTrayIcon" size={13} />
            Download
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PapersPage() {
  const [activeSem, setActiveSem] = useState('All');
  const [activeSubject, setActiveSubject] = useState('All Subjects');
  const [search, setSearch] = useState('');
  const [heroVisible, setHeroVisible] = useState(false);
  const [gridVisible, setGridVisible] = useState(false);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setHeroVisible(true), 80);
    return () => clearTimeout(t1);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setGridVisible(true); },
      { threshold: 0.05 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = papers.filter((p) => {
    const matchSem = activeSem === 'All' || p.sem === activeSem;
    const matchSubject = activeSubject === 'All Subjects' || p.subject === activeSubject;
    const matchSearch = search === '' || p.title.toLowerCase().includes(search.toLowerCase()) || p.subject.toLowerCase().includes(search.toLowerCase());
    return matchSem && matchSubject && matchSearch;
  });

  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen">
        {/* Hero */}
        <section className="relative py-24 sm:py-28 overflow-hidden">
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(59,130,246,0.08) 0%, transparent 70%)',
              filter: 'blur(20px)',
            }}
          />
          <div className="max-w-7xl mx-auto px-5 sm:px-6 text-center relative z-10">
            <span
              className="section-label block mb-5"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)',
              }}
            >
              Previous Year Papers
            </span>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.1s',
              }}
            >
              Ace Your{' '}
              <span className="text-gradient">Exams</span>
            </h1>
            <p
              className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s',
              }}
            >
              MSBTE question papers from past Summer and Winter exams — organized by semester and subject.
            </p>

            {/* Search */}
            <div
              className="max-w-lg mx-auto relative"
              style={{
                opacity: heroVisible ? 1 : 0,
                transform: heroVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s',
              }}
            >
              <Icon
                name="MagnifyingGlassIcon"
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search papers by subject or year..."
                className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-blue-500/40 transition-colors"
              />
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="max-w-7xl mx-auto px-5 sm:px-6 pb-6">
          {/* Semester tabs */}
          <div className="flex flex-wrap gap-2 mb-4">
            {semesters.map((sem) => (
              <button
                key={sem}
                onClick={() => setActiveSem(sem)}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                style={{
                  background: activeSem === sem
                    ? 'linear-gradient(135deg, #3B82F6, #8B5CF6)'
                    : 'rgba(255,255,255,0.05)',
                  color: activeSem === sem ? '#fff' : 'rgba(255,255,255,0.5)',
                  border: activeSem === sem ? 'none' : '1px solid rgba(255,255,255,0.08)',
                }}
              >
                {sem}
              </button>
            ))}
          </div>

          {/* Subject filter */}
          <div className="flex flex-wrap gap-2">
            {subjects.map((sub) => (
              <button
                key={sub}
                onClick={() => setActiveSubject(sub)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200"
                style={{
                  background: activeSubject === sub
                    ? 'rgba(139,92,246,0.2)'
                    : 'rgba(255,255,255,0.04)',
                  color: activeSubject === sub ? '#C4B5FD' : 'rgba(255,255,255,0.4)',
                  border: activeSubject === sub
                    ? '1px solid rgba(139,92,246,0.3)'
                    : '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {sub}
              </button>
            ))}
          </div>
        </section>

        {/* Grid */}
        <section ref={gridRef} className="max-w-7xl mx-auto px-5 sm:px-6 pb-24">
          {filtered.length > 0 ? (
            <>
              <p className="text-xs text-muted-foreground mb-6">
                {filtered.length} paper{filtered.length !== 1 ? 's' : ''} found
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filtered.map((paper, i) => (
                  <PaperCard key={paper.id} paper={paper} index={i} visible={gridVisible} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-24">
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4">
                <Icon name="DocumentTextIcon" size={24} className="text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">No papers found</h3>
              <p className="text-sm text-muted-foreground mb-6">Try adjusting your filters or search query.</p>
              <button
                onClick={() => { setActiveSem('All'); setActiveSubject('All Subjects'); setSearch(''); }}
                className="px-5 py-2.5 rounded-xl text-sm font-medium bg-white/5 hover:bg-white/10 text-foreground transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
