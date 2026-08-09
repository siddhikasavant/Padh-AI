'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const semesters = ['All', 'Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6'];

const allSubjects = [
  { name: 'Applied Mathematics', sem: 'Sem 1', resources: 22, icon: 'CalculatorIcon', type: 'Core' },
  { name: 'Basic Electronics', sem: 'Sem 1', resources: 18, icon: 'BoltIcon', type: 'Core' },
  { name: 'English Communication', sem: 'Sem 1', resources: 12, icon: 'ChatBubbleLeftRightIcon', type: 'Core' },
  { name: 'Engineering Physics', sem: 'Sem 2', resources: 20, icon: 'BeakerIcon', type: 'Core' },
  { name: 'Digital Techniques', sem: 'Sem 2', resources: 25, icon: 'CpuChipIcon', type: 'Core' },
  { name: 'Programming in C', sem: 'Sem 2', resources: 30, icon: 'CodeBracketIcon', type: 'Core' },
  { name: 'Python Programming', sem: 'Sem 3', resources: 38, icon: 'CommandLineIcon', type: 'AIML' },
  { name: 'AI Fundamentals', sem: 'Sem 3', resources: 35, icon: 'SparklesIcon', type: 'AIML' },
  { name: 'Data Structures', sem: 'Sem 3', resources: 28, icon: 'CircleStackIcon', type: 'Core' },
  { name: 'Machine Learning', sem: 'Sem 4', resources: 42, icon: 'CpuChipIcon', type: 'AIML' },
  { name: 'Statistics for AIML', sem: 'Sem 4', resources: 24, icon: 'ChartBarIcon', type: 'Core' },
  { name: 'Computer Vision', sem: 'Sem 4', resources: 19, icon: 'EyeIcon', type: 'AIML' },
  { name: 'Deep Learning', sem: 'Sem 5', resources: 24, icon: 'CpuChipIcon', type: 'AIML' },
  { name: 'Data Science', sem: 'Sem 5', resources: 29, icon: 'ChartBarIcon', type: 'AIML' },
  { name: 'NLP', sem: 'Sem 5', resources: 16, icon: 'ChatBubbleBottomCenterTextIcon', type: 'AIML' },
  { name: 'Neural Networks', sem: 'Sem 6', resources: 19, icon: 'BoltIcon', type: 'AIML' },
  { name: 'AI Project Work', sem: 'Sem 6', resources: 14, icon: 'RocketLaunchIcon', type: 'AIML' },
  { name: 'Robotics & IoT', sem: 'Sem 6', resources: 11, icon: 'WrenchScrewdriverIcon', type: 'Core' },
];

export default function SubjectsGrid() {
  const [activeSem, setActiveSem] = useState('All');
  const [search, setSearch] = useState('');
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = allSubjects.filter((s) => {
    const matchSem = activeSem === 'All' || s.sem === activeSem;
    const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
    return matchSem && matchSearch;
  });

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('.subject-card');
    cards.forEach((card, idx) => {
      (card as HTMLElement).style.opacity = '0';
      (card as HTMLElement).style.transform = 'translateY(16px)';
      setTimeout(() => {
        (card as HTMLElement).style.opacity = '1';
        (card as HTMLElement).style.transform = 'translateY(0)';
        (card as HTMLElement).style.transition = 'opacity 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1)';
      }, idx * 40);
    });
  }, [activeSem, search]);

  return (
    <section className="pb-24 max-w-7xl mx-auto px-5 sm:px-6">
      {/* Filters */}
      <div className="mb-10 space-y-5">
        {/* Search */}
        <div className="search-glow glass-light rounded-xl p-1 flex items-center gap-2 border border-border max-w-md">
          <div className="flex items-center justify-center w-9 h-9 shrink-0">
            <Icon name="MagnifyingGlassIcon" size={16} className="text-muted-foreground" />
          </div>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search subjects..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none py-2"
          />
        </div>

        {/* Semester tabs */}
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">
          {semesters.map((sem) => (
            <button
              key={sem}
              onClick={() => setActiveSem(sem)}
              className={`tag-pill text-xs shrink-0 cursor-pointer transition-all duration-200 ${
                activeSem === sem ? 'active-filter' : 'inactive-filter'
              }`}
              style={{ padding: '6px 14px' }}
            >
              {sem}
            </button>
          ))}
        </div>
      </div>

      {/* Count */}
      <p className="text-sm text-muted-foreground mb-8">
        {filtered.length} subject{filtered.length !== 1 ? 's' : ''} found
      </p>

      {/* Grid */}
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((subject) => (
          <Link
            key={subject.name}
            href="/notes"
            className="subject-card gradient-border card-hover rounded-2xl p-6 group flex flex-col gap-5"
            style={{ background: 'var(--card)' }}
          >
            {/* Top */}
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl subject-icon-bg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon
                  name={subject.icon as Parameters<typeof Icon>[0]['name']}
                  size={22}
                  className="text-primary"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className={`tag-pill ${subject.type === 'AIML' ? 'tag-purple' : 'tag-white'}`}>
                  {subject.type}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="card-title text-foreground mb-1">{subject.name}</h3>
              <p className="text-xs text-muted-foreground">{subject.sem}</p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-border">
              <span className="text-xs text-muted-foreground">
                {subject.resources} resources
              </span>
              <div className="flex items-center gap-1 text-primary text-xs font-medium group-hover:gap-2 transition-all">
                View
                <Icon name="ArrowRightIcon" size={12} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-24">
          <p className="text-muted-foreground text-sm">No subjects found. Try a different search.</p>
        </div>
      )}
    </section>
  );
}