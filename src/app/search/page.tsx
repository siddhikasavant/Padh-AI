'use client';

import React, { useEffect, useRef, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

interface Result {
  id: number;
  title: string;
  subject: string;
  semester: string;
  type: 'Notes' | 'Practical' | 'PYQ' | 'Project';
  contributor: string;
  downloads: number;
  date: string;
  description: string;
}

const allResults: Result[] = [
  { id: 1, title: 'Neural Networks – Complete Unit Notes', subject: 'Deep Learning', semester: 'Sem 5', type: 'Notes', contributor: 'Arjun Sharma', downloads: 412, date: '2 weeks ago', description: 'Comprehensive notes covering perceptrons, backpropagation, activation functions, and CNN architectures.' },
  { id: 2, title: 'Machine Learning Lab Manual', subject: 'Machine Learning', semester: 'Sem 4', type: 'Practical', contributor: 'Priya Desai', downloads: 287, date: '1 month ago', description: 'Complete lab manual with 10 experiments including linear regression, KNN, and decision trees.' },
  { id: 3, title: 'NLP Winter 2024 Question Paper', subject: 'Natural Language Processing', semester: 'Sem 5', type: 'PYQ', contributor: 'Rahul Patil', downloads: 534, date: '3 months ago', description: 'Official MSBTE question paper for NLP subject, Winter 2024 examination.' },
  { id: 4, title: 'Python Programming Notes – All Units', subject: 'Python Programming', semester: 'Sem 2', type: 'Notes', contributor: 'Sneha Kulkarni', downloads: 891, date: '5 months ago', description: 'Full semester notes covering Python basics, OOP, file handling, and libraries.' },
  { id: 5, title: 'Computer Vision Practicals 1–8', subject: 'Computer Vision', semester: 'Sem 4', type: 'Practical', contributor: 'Arjun Sharma', downloads: 198, date: '3 weeks ago', description: 'OpenCV-based practicals covering image processing, edge detection, and object recognition.' },
  { id: 6, title: 'Data Structures Summer 2023 Paper', subject: 'Data Structures', semester: 'Sem 3', type: 'PYQ', contributor: 'Vikram Joshi', downloads: 345, date: '6 months ago', description: 'MSBTE Summer 2023 examination paper for Data Structures and Algorithms.' },
  { id: 7, title: 'Applied Mathematics Unit 3–4 Notes', subject: 'Applied Mathematics', semester: 'Sem 1', type: 'Notes', contributor: 'Meera Nair', downloads: 623, date: '4 months ago', description: 'Detailed notes on integration, differential equations, and Laplace transforms.' },
  { id: 8, title: 'AI Chatbot Final Year Project', subject: 'AI Project', semester: 'Sem 6', type: 'Project', contributor: 'Rohan Mehta', downloads: 156, date: '1 week ago', description: 'Complete project report for an AI-powered chatbot using NLP and transformer models.' },
];

const typeColors: Record<string, string> = {
  Notes: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  Practical: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  PYQ: 'text-blue-300 bg-blue-400/10 border-blue-400/20',
  Project: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
};

const typeIcons: Record<string, string> = {
  Notes: 'DocumentTextIcon',
  Practical: 'BeakerIcon',
  PYQ: 'ClipboardDocumentListIcon',
  Project: 'FolderOpenIcon',
};

const filterTypes = ['All', 'Notes', 'Practical', 'PYQ', 'Project'];
const filterSemesters = ['All Semesters', 'Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'];
const sortOptions = ['Most Relevant', 'Most Downloaded', 'Newest First', 'Oldest First'];

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams?.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [inputValue, setInputValue] = useState(initialQuery);
  const [activeType, setActiveType] = useState('All');
  const [activeSemester, setActiveSemester] = useState('All Semesters');
  const [sortBy, setSortBy] = useState('Most Relevant');
  const [heroAnim, setHeroAnim] = useState(false);
  const resultsSection = useInView();

  useEffect(() => {
    setTimeout(() => setHeroAnim(true), 80);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setQuery(inputValue);
    router.push(`/search?q=${encodeURIComponent(inputValue)}`);
  };

  const filtered = allResults.filter((r) => {
    const matchesQuery = !query || r.title.toLowerCase().includes(query.toLowerCase()) || r.subject.toLowerCase().includes(query.toLowerCase()) || r.description.toLowerCase().includes(query.toLowerCase());
    const matchesType = activeType === 'All' || r.type === activeType;
    const matchesSemester = activeSemester === 'All Semesters' || r.semester === activeSemester;
    return matchesQuery && matchesType && matchesSemester;
  }).sort((a, b) => {
    if (sortBy === 'Most Downloaded') return b.downloads - a.downloads;
    if (sortBy === 'Newest First') return b.id - a.id;
    if (sortBy === 'Oldest First') return a.id - b.id;
    return 0;
  });

  return (
    <main className="pt-16 min-h-screen">
      {/* Search Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <div className="blob-1 opacity-40" style={{ top: '-20%', left: '-10%' }} />
        <div className="blob-2 opacity-25" style={{ bottom: '-15%', right: '-5%' }} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-6 text-center">
          <div
            className={`inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass-light border border-white/10 transition-all duration-700 ${heroAnim ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            <span className="section-label">Search Results</span>
          </div>
          <h1
            className={`text-3xl sm:text-5xl font-bold text-foreground mb-8 tracking-tight transition-all duration-700 delay-100 ${heroAnim ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {query ? (
              <>Results for <span className="text-gradient">&ldquo;{query}&rdquo;</span></>
            ) : (
              <>Search <span className="text-gradient">everything</span></>
            )}
          </h1>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            className={`transition-all duration-700 delay-200 ${heroAnim ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <div className="relative flex items-center">
              <Icon name="MagnifyingGlassIcon" size={18} className="absolute left-5 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Search notes, subjects, papers..."
                className="w-full pl-12 pr-32 py-4 rounded-2xl bg-white/5 border border-white/10 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-blue-500/50 transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2 btn-primary px-5 py-2.5 text-sm"
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Filters + Results */}
      <section className="max-w-7xl mx-auto px-5 sm:px-6 pb-24">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64 shrink-0 space-y-6">
            {/* Type Filter */}
            <div className="gradient-border p-5">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-4">Resource Type</h3>
              <div className="space-y-1">
                {filterTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setActiveType(type)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                      activeType === type
                        ? 'bg-blue-500/15 text-blue-300 font-semibold' :'text-muted-foreground hover:text-foreground hover:bg-white/5'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Semester Filter */}
            <div className="gradient-border p-5">
              <h3 className="text-xs font-bold text-foreground uppercase tracking-widest mb-4">Semester</h3>
              <div className="space-y-1">
                {filterSemesters.map((sem) => (
                  <button
                    key={sem}
                    onClick={() => setActiveSemester(sem)}
                    className={`w-full text-left px-3 py-2.5 rounded-xl text-sm transition-all duration-200 ${
                      activeSemester === sem
                        ? 'bg-purple-500/15 text-purple-300 font-semibold' :'text-muted-foreground hover:text-foreground hover:bg-white/5'
                    }`}
                  >
                    {sem}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="flex-1 min-w-0">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6 gap-4 flex-wrap">
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">{filtered.length}</span> result{filtered.length !== 1 ? 's' : ''} found
              </p>
              <div className="flex items-center gap-2">
                <Icon name="AdjustmentsHorizontalIcon" size={15} className="text-muted-foreground" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white/5 border border-white/10 text-foreground text-sm px-3 py-2 rounded-xl focus:outline-none focus:border-blue-500/50 transition-colors"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#0d0d0d]">{opt}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Result Cards */}
            <div
              ref={resultsSection.ref}
              className={`space-y-3 transition-all duration-700 ${resultsSection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {filtered.length === 0 ? (
                <div className="gradient-border p-16 text-center">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-5">
                    <Icon name="MagnifyingGlassIcon" size={28} className="text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">No results found</h3>
                  <p className="text-sm text-muted-foreground mb-6 max-w-xs mx-auto">
                    Try different keywords or adjust your filters to find what you&apos;re looking for.
                  </p>
                  <button
                    onClick={() => { setActiveType('All'); setActiveSemester('All Semesters'); setQuery(''); setInputValue(''); }}
                    className="btn-secondary px-6 py-2.5 text-sm"
                  >
                    Clear Filters
                  </button>
                </div>
              ) : (
                filtered.map((result, i) => (
                  <div
                    key={result.id}
                    className="gradient-border p-5 sm:p-6 card-hover cursor-pointer"
                    style={{ transitionDelay: `${i * 50}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Icon name={typeIcons[result.type]} size={20} className="text-muted-foreground" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3 mb-2 flex-wrap">
                          <h3 className="text-sm sm:text-base font-semibold text-foreground leading-snug">{result.title}</h3>
                          <span className={`px-2.5 py-1 rounded-full text-xs font-medium border shrink-0 ${typeColors[result.type]}`}>
                            {result.type}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mb-3 leading-relaxed line-clamp-2">{result.description}</p>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="BookOpenIcon" size={11} />
                            {result.subject}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="AcademicCapIcon" size={11} />
                            {result.semester}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="UserIcon" size={11} />
                            {result.contributor}
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="ArrowDownTrayIcon" size={11} />
                            {result.downloads} downloads
                          </span>
                          <span>{result.date}</span>
                        </div>
                      </div>
                      <button className="btn-primary px-4 py-2 text-xs shrink-0 hidden sm:flex items-center gap-1.5">
                        <Icon name="ArrowDownTrayIcon" size={13} />
                        Download
                      </button>
                    </div>
                    <div className="mt-3 sm:hidden">
                      <button className="btn-primary w-full py-2.5 text-xs flex items-center justify-center gap-1.5">
                        <Icon name="ArrowDownTrayIcon" size={13} />
                        Download
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Browse More */}
            {filtered.length > 0 && (
              <div className="mt-10 text-center">
                <p className="text-sm text-muted-foreground mb-4">Looking for something specific?</p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link href="/notes" className="btn-secondary px-5 py-2.5 text-sm flex items-center gap-2">
                    <Icon name="DocumentTextIcon" size={14} />
                    Browse Notes
                  </Link>
                  <Link href="/subjects" className="btn-secondary px-5 py-2.5 text-sm flex items-center gap-2">
                    <Icon name="BookOpenIcon" size={14} />
                    Browse Subjects
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function SearchPage() {
  return (
    <>
      <Header />
      <Suspense fallback={
        <main className="pt-16 min-h-screen flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
        </main>
      }>
        <SearchContent />
      </Suspense>
      <Footer />
    </>
  );
}
