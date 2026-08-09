'use client';

import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';
import Link from 'next/link';

function useInView(threshold = 0.15) {
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

const mockDownloads = [
  { title: 'Unit 3 – Neural Networks Notes', subject: 'Deep Learning', semester: 'Sem 5', date: '2 days ago', type: 'Notes' },
  { title: 'Python Lab Manual Complete', subject: 'Python Programming', semester: 'Sem 2', date: '5 days ago', type: 'Practical' },
  { title: 'ML Winter 2024 Question Paper', subject: 'Machine Learning', semester: 'Sem 4', date: '1 week ago', type: 'PYQ' },
  { title: 'Data Structures Unit 1-2 Notes', subject: 'Data Structures', semester: 'Sem 3', date: '2 weeks ago', type: 'Notes' },
];

const mockBookmarks = [
  { title: 'NLP Complete Notes – All Units', subject: 'Natural Language Processing', semester: 'Sem 5', type: 'Notes' },
  { title: 'Computer Vision Practicals', subject: 'Computer Vision', semester: 'Sem 4', type: 'Practical' },
  { title: 'Deep Learning Summer 2023 Paper', subject: 'Deep Learning', semester: 'Sem 5', type: 'PYQ' },
];

const mockContributions = [
  { title: 'Applied Mathematics Unit 4 Notes', subject: 'Applied Mathematics', semester: 'Sem 1', status: 'Published', downloads: 234, date: '3 months ago' },
  { title: 'Python Lab Experiments 1-10', subject: 'Python Programming', semester: 'Sem 2', status: 'Published', downloads: 189, date: '4 months ago' },
  { title: 'Statistics Formula Sheet', subject: 'Statistics', semester: 'Sem 3', status: 'Under Review', downloads: 0, date: '1 week ago' },
];

const typeColors: Record<string, string> = {
  Notes: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  Practical: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  PYQ: 'text-blue-300 bg-blue-400/10 border-blue-400/20',
};

const statusColors: Record<string, string> = {
  Published: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
  'Under Review': 'text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
};

type TabType = 'downloads' | 'bookmarks' | 'contributions';

export default function ProfilePage() {
  const [heroAnim, setHeroAnim] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('downloads');
  const statsSection = useInView();
  const contentSection = useInView();

  useEffect(() => {
    setTimeout(() => setHeroAnim(true), 100);
  }, []);

  const tabs: { id: TabType; label: string; icon: string; count: number }[] = [
    { id: 'downloads', label: 'Downloads', icon: 'ArrowDownTrayIcon', count: mockDownloads.length },
    { id: 'bookmarks', label: 'Bookmarks', icon: 'BookmarkIcon', count: mockBookmarks.length },
    { id: 'contributions', label: 'Contributions', icon: 'ArrowUpTrayIcon', count: mockContributions.length },
  ];

  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen">
        {/* Hero / Profile Header */}
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
          <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6">
            <div
              className={`flex flex-col sm:flex-row items-start sm:items-center gap-6 transition-all duration-700 ${heroAnim ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              {/* Avatar */}
              <div className="relative">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-3xl font-bold text-white">
                  A
                </div>
                <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-2 border-background flex items-center justify-center">
                  <Icon name="StarIcon" size={10} className="text-white" />
                </div>
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Arjun Sharma</h1>
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300">
                    Contributor
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-3">MSBTE AIML · Semester 5 · Mumbai</p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Icon name="CalendarIcon" size={13} />
                    Joined January 2025
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="DocumentTextIcon" size={13} />
                    3 resources uploaded
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Icon name="ArrowDownTrayIcon" size={13} />
                    423 total downloads
                  </span>
                </div>
              </div>

              {/* Edit Profile */}
              <button className="btn-secondary px-5 py-2.5 text-sm flex items-center gap-2 shrink-0">
                <Icon name="PencilIcon" size={14} />
                Edit Profile
              </button>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="max-w-7xl mx-auto px-5 sm:px-6 pb-12">
          <div
            ref={statsSection.ref}
            className={`grid grid-cols-2 sm:grid-cols-4 gap-4 transition-all duration-700 ${statsSection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {[
              { label: 'Downloads', value: '47', icon: 'ArrowDownTrayIcon', color: 'blue' },
              { label: 'Bookmarks', value: '12', icon: 'BookmarkIcon', color: 'purple' },
              { label: 'Contributions', value: '3', icon: 'ArrowUpTrayIcon', color: 'blue' },
              { label: 'Total Reach', value: '423', icon: 'UsersIcon', color: 'purple' },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="gradient-border p-5 text-center"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className={`w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center ${stat.color === 'blue' ? 'bg-blue-500/10 border border-blue-500/20' : 'bg-purple-500/10 border border-purple-500/20'}`}>
                  <Icon name={stat.icon} size={18} className={stat.color === 'blue' ? 'text-blue-400' : 'text-purple-400'} />
                </div>
                <p className="text-2xl font-bold text-foreground mb-0.5">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tabs + Content */}
        <section className="max-w-7xl mx-auto px-5 sm:px-6 pb-24">
          {/* Tab Bar */}
          <div className="flex items-center gap-1 mb-8 border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 text-sm font-semibold transition-all duration-200 border-b-2 -mb-px ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-foreground'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                <Icon name={tab.icon} size={15} />
                {tab.label}
                <span className={`px-1.5 py-0.5 rounded-full text-xs ${activeTab === tab.id ? 'bg-blue-500/20 text-blue-300' : 'bg-white/5 text-muted-foreground'}`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div
            ref={contentSection.ref}
            className={`transition-all duration-500 ${contentSection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {/* Downloads */}
            {activeTab === 'downloads' && (
              <div className="space-y-3">
                {mockDownloads.map((item, i) => (
                  <div
                    key={i}
                    className="gradient-border p-5 flex items-center gap-4 card-hover cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Icon name="DocumentTextIcon" size={18} className="text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">{item.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.subject} · {item.semester}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${typeColors[item.type]}`}>
                        {item.type}
                      </span>
                      <span className="text-xs text-muted-foreground hidden sm:block">{item.date}</span>
                      <button className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-foreground transition-colors">
                        <Icon name="ArrowDownTrayIcon" size={15} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Bookmarks */}
            {activeTab === 'bookmarks' && (
              <div className="space-y-3">
                {mockBookmarks.map((item, i) => (
                  <div
                    key={i}
                    className="gradient-border p-5 flex items-center gap-4 card-hover cursor-pointer"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Icon name="BookmarkIcon" size={18} className="text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground truncate">{item.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.subject} · {item.semester}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${typeColors[item.type]}`}>
                        {item.type}
                      </span>
                      <button className="p-2 rounded-lg hover:bg-white/5 text-muted-foreground hover:text-red-400 transition-colors">
                        <Icon name="TrashIcon" size={15} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Contributions */}
            {activeTab === 'contributions' && (
              <div className="space-y-3">
                {mockContributions.map((item, i) => (
                  <div
                    key={i}
                    className="gradient-border p-5 flex flex-col sm:flex-row sm:items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                      <Icon name="ArrowUpTrayIcon" size={18} className="text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-foreground">{item.title}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.subject} · {item.semester} · {item.date}</p>
                    </div>
                    <div className="flex items-center gap-3 shrink-0">
                      {item.downloads > 0 && (
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Icon name="ArrowDownTrayIcon" size={12} />
                          {item.downloads}
                        </span>
                      )}
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${statusColors[item.status]}`}>
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
                <div className="pt-4">
                  <Link href="/upload" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm">
                    <Icon name="PlusIcon" size={15} />
                    Upload New Resource
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
