'use client';

import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const semesters = [
  'All',
  'Sem 1',
  'Sem 2',
  'Sem 3',
  'Sem 4',
  'Sem 5',
  'Sem 6',
];

const subjects = [
  'All Subjects',
  'BMS',
  'ENG',
  'AMS',
  'PIC',
  'DMS',
  'DTE',
  'ADM',
  'AMA',
  'OSY',
  'AAM',
  'BDA',
];

const pyqs = [
  // =========================
  // SEMESTER 1
  // =========================

  {
    id: 1,
    title: 'BMS Winter 2023',
    subject: 'BMS',
    sem: 'Sem 1',
    year: '2023',
    season: 'Winter',
    type: 'Question Paper',
    pdf: '/pdfs/sem1/pyqs/BMS/311302-Question-Paper-Winter-2023.pdf',
  },

  {
    id: 2,
    title: 'ENG Winter 2023',
    subject: 'ENG',
    sem: 'Sem 1',
    year: '2023',
    season: 'Winter',
    type: 'Question Paper',
    pdf: '/pdfs/sem1/pyqs/ENG/311303-Question-Paper-Winter-2023.pdf',
  },

  // =========================
  // SEMESTER 2
  // =========================

  {
    id: 3,
    title: 'AMS Summer 2018',
    subject: 'AMS',
    sem: 'Sem 2',
    year: '2018',
    season: 'Summer',
    type: 'Question Paper',
    pdf: '/pdfs/sem2/pyqs/AMS/22201-Question-Paper-Summer-2018.pdf',
  },

  {
    id: 4,
    title: 'AMS Summer 2019',
    subject: 'AMS',
    sem: 'Sem 2',
    year: '2019',
    season: 'Summer',
    type: 'Question Paper',
    pdf: '/pdfs/sem2/pyqs/AMS/22201-Question-Paper-Summer-2019.pdf',
  },

  {
    id: 5,
    title: 'PIC Summer 2024',
    subject: 'PIC',
    sem: 'Sem 2',
    year: '2024',
    season: 'Summer',
    type: 'Question Paper',
    pdf: '/pdfs/sem2/pyqs/PIC/312303-Question-Paper-Summer-2024.pdf',
  },

  {
    id: 6,
    title: 'PIC Summer 2025',
    subject: 'PIC',
    sem: 'Sem 2',
    year: '2025',
    season: 'Summer',
    type: 'Question Paper',
    pdf: '/pdfs/sem2/pyqs/PIC/312303-Question-Paper-Summer-2025.pdf',
  },

  {
    id: 7,
    title: 'PIC Winter 2024',
    subject: 'PIC',
    sem: 'Sem 2',
    year: '2024',
    season: 'Winter',
    type: 'Question Paper',
    pdf: '/pdfs/sem2/pyqs/PIC/312303-Question-Paper-Winter-2024.pdf',
  },

  {
    id: 8,
    title: 'PIC Winter 2025',
    subject: 'PIC',
    sem: 'Sem 2',
    year: '2025',
    season: 'Winter',
    type: 'Question Paper',
    pdf: '/pdfs/sem2/pyqs/PIC/312303-Question-Paper-Winter-2025.pdf',
  },

  // =========================
  // SEMESTER 3
  // =========================

  {
    id: 9,
    title: 'DMS Summer 2019',
    subject: 'DMS',
    sem: 'Sem 3',
    year: '2019',
    season: 'Summer',
    type: 'Question Paper',
    pdf: '/pdfs/sem3/pyqs/DMS/22319-Question-Paper-Summer-2019.pdf',
  },

  {
    id: 10,
    title: 'DMS Winter 2018',
    subject: 'DMS',
    sem: 'Sem 3',
    year: '2018',
    season: 'Winter',
    type: 'Question Paper',
    pdf: '/pdfs/sem3/pyqs/DMS/22319-Question-Paper-Winter-2018.pdf',
  },

  {
    id: 11,
    title: 'DTE Summer 2019',
    subject: 'DTE',
    sem: 'Sem 3',
    year: '2019',
    season: 'Summer',
    type: 'Question Paper',
    pdf: '/pdfs/sem3/pyqs/DTE/22320-Quesiton-Paper-Summer-2019.pdf',
  },

  {
    id: 12,
    title: 'DTE Winter 2018',
    subject: 'DTE',
    sem: 'Sem 3',
    year: '2018',
    season: 'Winter',
    type: 'Question Paper',
    pdf: '/pdfs/sem3/pyqs/DTE/22320-Quesiton-Paper-Winter-2018.pdf',
  },

  // =========================
  // SEMESTER 5 - ADM
  // =========================

  {
    id: 13,
    title: 'ADM Question Paper 01',
    subject: 'ADM',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem5/pyqs/ADM/22521 (1).pdf',
  },

  {
    id: 14,
    title: 'ADM Question Paper 02',
    subject: 'ADM',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem5/pyqs/ADM/22521 (2).pdf',
  },

  {
    id: 15,
    title: 'ADM Question Paper 03',
    subject: 'ADM',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem5/pyqs/ADM/22521 (3).pdf',
  },

  {
    id: 16,
    title: 'ADM Question Paper 04',
    subject: 'ADM',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem5/pyqs/ADM/22521 (4).pdf',
  },

  {
    id: 17,
    title: 'ADM Question Paper 05',
    subject: 'ADM',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem5/pyqs/ADM/22521 (5).pdf',
  },

  {
    id: 18,
    title: 'ADM Question Paper 06',
    subject: 'ADM',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem5/pyqs/ADM/22521 (6).pdf',
  },

  {
    id: 19,
    title: 'ADM Winter 2019 Model Answer',
    subject: 'ADM',
    sem: 'Sem 5',
    year: '2019',
    season: 'Winter',
    type: 'Model Answer',
    pdf: '/pdfs/sem5/pyqs/ADM/22521-2019-Winter-model-answer-paper[Msbte study resources] (1).pdf',
  },

  {
    id: 20,
    title: 'ADM Winter 2022 Model Answer',
    subject: 'ADM',
    sem: 'Sem 5',
    year: '2022',
    season: 'Winter',
    type: 'Model Answer',
    pdf: '/pdfs/sem5/pyqs/ADM/ADM 22521 Winter 2022 Model Answer Paper (2).PDF',
  },

  {
    id: 21,
    title: 'ADM Paper',
    subject: 'ADM',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem5/pyqs/ADM/3830fb8c-5db8-49ba-a8c6-6ff7a3b0ec89.pdf',
  },

  {
    id: 22,
    title: 'ADM Paper',
    subject: 'ADM',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem5/pyqs/ADM/d87dc596-77fd-4224-9c26-c66dbe2f040a.pdf',
  },

  // =========================
  // SEMESTER 5 - AMA
  // =========================

  {
    id: 23,
    title: 'AMA Question Paper 01',
    subject: 'AMA',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem5/pyqs/AMA/22593 (1).pdf',
  },

  {
    id: 24,
    title: 'AMA Question Paper 02',
    subject: 'AMA',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem5/pyqs/AMA/22593 (2).pdf',
  },

  {
    id: 25,
    title: 'AMA Question Paper 03',
    subject: 'AMA',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem5/pyqs/AMA/22593 (3).pdf',
  },

  {
    id: 26,
    title: 'AMA Question Paper 04',
    subject: 'AMA',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem5/pyqs/AMA/22593 (4).pdf',
  },

  // =========================
  // SEMESTER 5 - OSY
  // =========================

  {
    id: 27,
    title: 'OSY Question Paper 01',
    subject: 'OSY',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem5/pyqs/OSY/22516 (1).pdf',
  },

  {
    id: 28,
    title: 'OSY Question Paper 02',
    subject: 'OSY',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem5/pyqs/OSY/22516 (2).pdf',
  },

  {
    id: 29,
    title: 'OSY Question Paper 03',
    subject: 'OSY',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem5/pyqs/OSY/22516 (3).pdf',
  },

  {
    id: 30,
    title: 'OSY Question Paper 04',
    subject: 'OSY',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem5/pyqs/OSY/22516 (4).pdf',
  },

  {
    id: 31,
    title: 'OSY Question Paper 05',
    subject: 'OSY',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem5/pyqs/OSY/22516 (5).pdf',
  },

  {
    id: 32,
    title: 'OSY 2019 Winter Model Answer',
    subject: 'OSY',
    sem: 'Sem 5',
    year: '2019',
    season: 'Winter',
    type: 'Model Answer',
    pdf: '/pdfs/sem5/pyqs/OSY/22516-2019-Winter-model-answer-paper[Msbte study resources].pdf',
  },

  {
    id: 33,
    title: 'OSY 2022 Winter Model Answer',
    subject: 'OSY',
    sem: 'Sem 5',
    year: '2022',
    season: 'Winter',
    type: 'Model Answer',
    pdf: '/pdfs/sem5/pyqs/OSY/22516-2022-Winter-model-answer-paper[Msbte study resources].pdf',
  },

  {
    id: 34,
    title: 'OSY Question Paper',
    subject: 'OSY',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem5/pyqs/OSY/22516.pdf',
  },

  {
    id: 35,
    title: 'OSY Paper 01',
    subject: 'OSY',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem5/pyqs/OSY/22593 (1).pdf',
  },

  {
    id: 36,
    title: 'OSY Paper 02',
    subject: 'OSY',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem5/pyqs/OSY/22593 (2).pdf',
  },

  {
    id: 37,
    title: 'OSY Paper 03',
    subject: 'OSY',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem5/pyqs/OSY/22593 (3).pdf',
  },

  {
    id: 38,
    title: 'OSY Paper 04',
    subject: 'OSY',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem5/pyqs/OSY/22593 (4).pdf',
  },

  {
    id: 39,
    title: '30 Important OSY Questions',
    subject: 'OSY',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Important Questions',
    pdf: '/pdfs/sem5/pyqs/OSY/30-important-questions-tyco.pdf',
  },

  {
    id: 40,
    title: 'OSY Summer 2023 Model Answer',
    subject: 'OSY',
    sem: 'Sem 5',
    year: '2023',
    season: 'Summer',
    type: 'Model Answer',
    pdf: '/pdfs/sem5/pyqs/OSY/879201000-OSY-Summer-2023-Model-Answer-Paper.pdf',
  },

  {
    id: 41,
    title: 'OSY Summer 2024 Model Answer',
    subject: 'OSY',
    sem: 'Sem 5',
    year: '2024',
    season: 'Summer',
    type: 'Model Answer',
    pdf: '/pdfs/sem5/pyqs/OSY/879202076-OSY-Summer-2024-Model-Answer-Paper.pdf',
  },

  {
    id: 42,
    title: 'OSY Differences and Numericals',
    subject: 'OSY',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Important Questions',
    pdf: '/pdfs/sem5/pyqs/OSY/Diff And Numericals.pdf',
  },

  {
    id: 43,
    title: 'OSY All Papers',
    subject: 'OSY',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Question Papers',
    pdf: '/pdfs/sem5/pyqs/OSY/OSY ALL.pdf',
  },

  {
    id: 44,
    title: 'OSY Winter 2022 Model Answer',
    subject: 'OSY',
    sem: 'Sem 5',
    year: '2022',
    season: 'Winter',
    type: 'Model Answer',
    pdf: '/pdfs/sem5/pyqs/OSY/osy-model-answer-w22-yes.pdf',
  },

  {
    id: 45,
    title: 'OSY Summer 2024 Model Answer',
    subject: 'OSY',
    sem: 'Sem 5',
    year: '2024',
    season: 'Summer',
    type: 'Model Answer',
    pdf: '/pdfs/sem5/pyqs/OSY/osy-summer-2024-model-answer-paper.pdf',
  },

  {
    id: 46,
    title: 'OSY Winter 2023 Model Answer',
    subject: 'OSY',
    sem: 'Sem 5',
    year: '2023',
    season: 'Winter',
    type: 'Model Answer',
    pdf: '/pdfs/sem5/pyqs/OSY/osy-w-23-osy-22516-winter-2023-model-answer-paper-osy-model-answer-paper-winter-2023.pdf',
  },

  {
    id: 47,
    title: 'VIMP OSY Board Questions',
    subject: 'OSY',
    sem: 'Sem 5',
    year: '—',
    season: '—',
    type: 'Important Questions',
    pdf: '/pdfs/sem5/pyqs/OSY/vimp-osy-board-questions-v2v.pdf',
  },

  // =========================
  // SEMESTER 6 - AAM
  // =========================

  {
    id: 48,
    title: 'AAM Question Paper 01',
    subject: 'AAM',
    sem: 'Sem 6',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem6/pyqs/AAM/22683 (1).pdf',
  },

  {
    id: 49,
    title: 'AAM Question Paper 02',
    subject: 'AAM',
    sem: 'Sem 6',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem6/pyqs/AAM/22683 (2).pdf',
  },

  {
    id: 50,
    title: 'AAM Question Paper',
    subject: 'AAM',
    sem: 'Sem 6',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem6/pyqs/AAM/22683.pdf',
  },

  // =========================
  // SEMESTER 6 - BDA
  // =========================

  {
    id: 51,
    title: 'BDA Question Paper 01',
    subject: 'BDA',
    sem: 'Sem 6',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem6/pyqs/BDA/22684 (1).pdf',
  },

  {
    id: 52,
    title: 'BDA Question Paper 02',
    subject: 'BDA',
    sem: 'Sem 6',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem6/pyqs/BDA/22684 (2).pdf',
  },

  {
    id: 53,
    title: 'BDA Question Paper',
    subject: 'BDA',
    sem: 'Sem 6',
    year: '—',
    season: '—',
    type: 'Question Paper',
    pdf: '/pdfs/sem6/pyqs/BDA/22684.pdf',
  },
];

export default function PYQGrid() {
  const [activeSem, setActiveSem] = useState('All');
  const [activeSubject, setActiveSubject] = useState('All Subjects');
  const [search, setSearch] = useState('');

  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = pyqs.filter((pyq) => {
    const matchSem =
      activeSem === 'All' || pyq.sem === activeSem;

    const matchSubject =
      activeSubject === 'All Subjects' ||
      pyq.subject === activeSubject;

    const searchText = search.toLowerCase();

    const matchSearch =
      pyq.title.toLowerCase().includes(searchText) ||
      pyq.subject.toLowerCase().includes(searchText) ||
      pyq.type.toLowerCase().includes(searchText) ||
      pyq.year.toLowerCase().includes(searchText);

    return matchSem && matchSubject && matchSearch;
  });

  useEffect(() => {
    const el = gridRef.current;

    if (!el) return;

    const cards = el.querySelectorAll('.pyq-card');

    cards.forEach((card, index) => {
      const element = card as HTMLElement;

      element.style.opacity = '0';
      element.style.transform = 'translateY(16px)';

      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        element.style.transition =
          'opacity .4s ease, transform .4s cubic-bezier(.16,1,.3,1)';
      }, index * 40);
    });
  }, [activeSem, activeSubject, search]);

  return (
    <section className="pb-24 max-w-7xl mx-auto px-5 sm:px-6">

      {/* Filters */}

      <div className="mb-10 space-y-4">

        {/* Search */}

        <div className="search-glow glass-light rounded-xl p-1 flex items-center gap-2 border border-border max-w-md">

          <div className="flex items-center justify-center w-9 h-9 shrink-0">

            <Icon
              name="MagnifyingGlassIcon"
              size={16}
              className="text-muted-foreground"
            />

          </div>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search question papers..."
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none py-2"
          />

        </div>

        {/* Semester */}

        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">

          {semesters.map((sem) => (

            <button
              key={sem}
              onClick={() => setActiveSem(sem)}
              className={`tag-pill text-xs shrink-0 cursor-pointer transition-all duration-200 ${
                activeSem === sem
                  ? 'active-filter'
                  : 'inactive-filter'
              }`}
              style={{ padding: '6px 14px' }}
            >
              {sem}
            </button>

          ))}

        </div>

        {/* Subjects */}

        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide pb-1">

          {subjects.map((subject) => (

            <button
              key={subject}
              onClick={() => setActiveSubject(subject)}
              className={`tag-pill text-xs shrink-0 cursor-pointer transition-all duration-200 ${
                activeSubject === subject
                  ? 'active-filter'
                  : 'inactive-filter'
              }`}
              style={{ padding: '6px 14px' }}
            >
              {subject}
            </button>

          ))}

        </div>

      </div>

      {/* Count */}

      <p className="text-sm text-muted-foreground mb-8">

        {filtered.length} paper
        {filtered.length !== 1 ? 's' : ''} found

      </p>

      {/* Cards */}

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >

        {filtered.map((pyq) => (

          <div
            key={pyq.id}
            onClick={() => window.open(pyq.pdf, '_blank')}
            className="pyq-card gradient-border card-hover rounded-3xl overflow-hidden flex flex-col group cursor-pointer"
            style={{
              background: 'var(--card)',
            }}
          >

            {/* Preview */}

            <div
              className="h-36 flex items-center justify-center relative overflow-hidden"
              style={{
                background:
                  pyq.type === 'Model Answer'
                    ? 'linear-gradient(135deg, rgba(139,92,246,.12), rgba(139,92,246,.04))'
                    : 'linear-gradient(135deg, rgba(59,130,246,.12), rgba(59,130,246,.04))',
              }}
            >

              {[0, 1, 2, 3, 4].map((line) => (

                <div
                  key={line}
                  className="absolute left-8 right-8 h-px"
                  style={{
                    top: `${28 + line * 18}px`,
                    background:
                      pyq.type === 'Model Answer'
                        ? `rgba(139,92,246,${0.15 - line * 0.02})`
                        : `rgba(59,130,246,${0.15 - line * 0.02})`,
                    width: line % 2 === 0 ? '70%' : '50%',
                  }}
                />

              ))}

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    pyq.type === 'Model Answer'
                      ? 'rgba(139,92,246,.15)'
                      : 'rgba(59,130,246,.15)',
                }}
              >

                <Icon
                  name="DocumentTextIcon"
                  size={22}
                  className={
                    pyq.type === 'Model Answer'
                      ? 'text-accent'
                      : 'text-primary'
                  }
                />

              </div>

              <span
                className="absolute top-3 right-3 tag-pill text-xs"
                style={{
                  background:
                    pyq.type === 'Model Answer'
                      ? 'rgba(139,92,246,.15)'
                      : 'rgba(59,130,246,.15)',
                }}
              >
                PDF
              </span>

            </div>

            {/* Content */}

            <div className="p-5 flex flex-col flex-1 gap-3">

              <div>

                <div className="flex items-center gap-2 mb-2 flex-wrap">

                  <span className="tag-pill tag-white text-xs">
                    {pyq.sem}
                  </span>

                  <span className="text-xs text-muted-foreground">
                    {pyq.subject}
                  </span>

                </div>

                <h3 className="card-title text-foreground leading-snug line-clamp-2">
                  {pyq.title}
                </h3>

              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-auto">

                <span>
                  {pyq.type}
                </span>

                {pyq.year !== '—' && (
                  <>
                    <span>·</span>
                    <span>{pyq.year}</span>
                  </>
                )}

                {pyq.season !== '—' && (
                  <>
                    <span>·</span>
                    <span>{pyq.season}</span>
                  </>
                )}

              </div>

              {/* Buttons */}

              <div className="flex items-center gap-2 pt-3 border-t border-border">

                <a
                  href={pyq.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="btn-primary flex-1 py-2.5 text-xs flex items-center justify-center gap-1.5"
                >

                  <Icon
                    name="ArrowDownTrayIcon"
                    size={14}
                  />

                  Open PDF

                </a>

                <a
                  href={pyq.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="btn-secondary w-10 h-10 flex items-center justify-center rounded-xl shrink-0"
                >

                  <Icon
                    name="EyeIcon"
                    size={14}
                  />

                </a>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Empty */}

      {filtered.length === 0 && (

        <div className="text-center py-24">

          <p className="text-muted-foreground text-sm">
            No question papers found.
          </p>

        </div>

      )}

    </section>
  );
}