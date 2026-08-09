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

const notes = [
  // =========================
  // SEMESTER 1
  // =========================

  {
    id: 1,
    title: 'BSC Notes 01',
    subject: 'BSC',
    sem: 'Sem 1',
    contributor: 'Padh AI',
    pages: 1,
    color: 'primary',
    pdf: '/pdfs/sem1/notes/BSC/BSC1.pdf',
  },
  {
    id: 2,
    title: 'BSC Notes 02',
    subject: 'BSC',
    sem: 'Sem 1',
    contributor: 'Padh AI',
    pages: 1,
    color: 'accent',
    pdf: '/pdfs/sem1/notes/BSC/BSC2.pdf',
  },
  {
    id: 3,
    title: 'BSC Notes 03',
    subject: 'BSC',
    sem: 'Sem 1',
    contributor: 'Padh AI',
    pages: 1,
    color: 'primary',
    pdf: '/pdfs/sem1/notes/BSC/BSC3.pdf',
  },

  // =========================
  // SEMESTER 2
  // =========================

  {
    id: 4,
    title: 'PIC Notes 01',
    subject: 'PIC',
    sem: 'Sem 2',
    contributor: 'Padh AI',
    pages: 1,
    color: 'primary',
    pdf: '/pdfs/sem2/notes/PIC/PIC1.pdf',
  },
  {
    id: 5,
    title: 'PIC Notes 02',
    subject: 'PIC',
    sem: 'Sem 2',
    contributor: 'Padh AI',
    pages: 1,
    color: 'accent',
    pdf: '/pdfs/sem2/notes/PIC/PIC2.pdf',
  },

  // =========================
  // SEMESTER 3
  // =========================

  {
    id: 6,
    title: 'DMS Notes 01',
    subject: 'DMS',
    sem: 'Sem 3',
    contributor: 'Padh AI',
    pages: 1,
    color: 'primary',
    pdf: '/pdfs/sem3/notes/DMS/DMS1.pdf',
  },
  {
    id: 7,
    title: 'DMS Notes 02',
    subject: 'DMS',
    sem: 'Sem 3',
    contributor: 'Padh AI',
    pages: 1,
    color: 'accent',
    pdf: '/pdfs/sem3/notes/DMS/DMS2.pdf',
  },
  {
    id: 8,
    title: 'DMS Notes 03',
    subject: 'DMS',
    sem: 'Sem 3',
    contributor: 'Padh AI',
    pages: 1,
    color: 'primary',
    pdf: '/pdfs/sem3/notes/DMS/DMS3.pdf',
  },
  {
    id: 9,
    title: 'DSP Notes 01',
    subject: 'DSP',
    sem: 'Sem 3',
    contributor: 'Padh AI',
    pages: 1,
    color: 'accent',
    pdf: '/pdfs/sem3/notes/DSP/DSP1.pdf',
  },
  {
    id: 10,
    title: 'DSP Notes 02',
    subject: 'DSP',
    sem: 'Sem 3',
    contributor: 'Padh AI',
    pages: 1,
    color: 'primary',
    pdf: '/pdfs/sem3/notes/DSP/DSP2.pdf',
  },
  {
    id: 11,
    title: 'DTE Notes 01',
    subject: 'DTE',
    sem: 'Sem 3',
    contributor: 'Padh AI',
    pages: 1,
    color: 'accent',
    pdf: '/pdfs/sem3/notes/DTE/DTE1.pdf',
  },
  {
    id: 12,
    title: 'SML Notes 01',
    subject: 'SML',
    sem: 'Sem 3',
    contributor: 'Padh AI',
    pages: 1,
    color: 'primary',
    pdf: '/pdfs/sem3/notes/SML/SML1.pdf',
  },

  // =========================
  // SEMESTER 4
  // =========================

  {
    id: 13,
    title: 'DCN Notes 01',
    subject: 'DCN',
    sem: 'Sem 4',
    contributor: 'Padh AI',
    pages: 1,
    color: 'primary',
    pdf: '/pdfs/sem4/notes/DCN/DCN1.pdf',
  },
  {
    id: 14,
    title: 'EES Notes 01',
    subject: 'EES',
    sem: 'Sem 4',
    contributor: 'Padh AI',
    pages: 1,
    color: 'accent',
    pdf: '/pdfs/sem4/notes/EES/EES1.pdf',
  },
  {
    id: 15,
    title: 'EES Notes 02',
    subject: 'EES',
    sem: 'Sem 4',
    contributor: 'Padh AI',
    pages: 1,
    color: 'primary',
    pdf: '/pdfs/sem4/notes/EES/EES2.pdf',
  },
  {
    id: 16,
    title: 'JPR Notes 01',
    subject: 'JPR',
    sem: 'Sem 4',
    contributor: 'Padh AI',
    pages: 1,
    color: 'accent',
    pdf: '/pdfs/sem4/notes/JPR/JPR1.pdf',
  },
  {
    id: 17,
    title: 'JPR Notes 02',
    subject: 'JPR',
    sem: 'Sem 4',
    contributor: 'Padh AI',
    pages: 1,
    color: 'primary',
    pdf: '/pdfs/sem4/notes/JPR/JPR2.pdf',
  },
  {
    id: 18,
    title: 'MIC Notes 01',
    subject: 'MIC',
    sem: 'Sem 4',
    contributor: 'Padh AI',
    pages: 1,
    color: 'accent',
    pdf: '/pdfs/sem4/notes/MIC/MIC1.pdf',
  },

  // =========================
  // SEMESTER 5
  // =========================

  {
    id: 19,
    title: 'ADM Notes 01',
    subject: 'ADM',
    sem: 'Sem 5',
    contributor: 'Padh AI',
    pages: 41,
    color: 'primary',
    pdf: '/pdfs/sem5/notes/ADM/ADM 41.pdf',
  },
  {
    id: 20,
    title: 'AMA Notes 01',
    subject: 'AMA',
    sem: 'Sem 5',
    contributor: 'Padh AI',
    pages: 1,
    color: 'accent',
    pdf: '/pdfs/sem5/notes/AMA/AMA1.pdf',
  },
  {
    id: 21,
    title: 'OSY Notes 01',
    subject: 'OSY',
    sem: 'Sem 5',
    contributor: 'Padh AI',
    pages: 1,
    color: 'accent',
    pdf: '/pdfs/sem5/notes/OSY/OSY 1.pdf',
  },
  {
    id: 22,
    title: 'OSY Notes 02',
    subject: 'OSY',
    sem: 'Sem 5',
    contributor: 'Padh AI',
    pages: 1,
    color: 'primary',
    pdf: '/pdfs/sem5/notes/OSY/OSY 2.pdf',
  },

  // =========================
  // SEMESTER 6
  // =========================

  {
    id: 23,
    title: 'AAM Notes 01',
    subject: 'AAM',
    sem: 'Sem 6',
    contributor: 'Padh AI',
    pages: 1,
    color: 'primary',
    pdf: '/pdfs/sem6/notes/AAM/AAM 1.pdf',
  },
  {
    id: 24,
    title: 'AAM Notes 02',
    subject: 'AAM',
    sem: 'Sem 6',
    contributor: 'Padh AI',
    pages: 1,
    color: 'accent',
    pdf: '/pdfs/sem6/notes/AAM/AAM2.pdf',
  },
  {
    id: 25,
    title: 'AAM Notes 03',
    subject: 'AAM',
    sem: 'Sem 6',
    contributor: 'Padh AI',
    pages: 1,
    color: 'primary',
    pdf: '/pdfs/sem6/notes/AAM/AAM3.pdf',
  },

  {
    id: 26,
    title: 'BDA Notes 01',
    subject: 'BDA',
    sem: 'Sem 6',
    contributor: 'Padh AI',
    pages: 1,
    color: 'accent',
    pdf: '/pdfs/sem6/notes/BDA/BDA 1.pdf',
  },
  {
    id: 27,
    title: 'BDA Notes 02',
    subject: 'BDA',
    sem: 'Sem 6',
    contributor: 'Padh AI',
    pages: 1,
    color: 'accent',
    pdf: '/pdfs/sem6/notes/BDA/BDA2.pdf',
  },
  {
    id: 28,
    title: 'BDA Notes 03',
    subject: 'BDA',
    sem: 'Sem 6',
    contributor: 'Padh AI',
    pages: 1,
    color: 'primary',
    pdf: '/pdfs/sem6/notes/BDA/BDA3.pdf',
  },
  {
    id: 29,
    title: 'BDA Notes 04',
    subject: 'BDA',
    sem: 'Sem 6',
    contributor: 'Padh AI',
    pages: 1,
    color: 'accent',
    pdf: '/pdfs/sem6/notes/BDA/BDA4.pdf',
  },
  {
    id: 30,
    title: 'BDA Notes 05',
    subject: 'BDA',
    sem: 'Sem 6',
    contributor: 'Padh AI',
    pages: 1,
    color: 'primary',
    pdf: '/pdfs/sem6/notes/BDA/BDA5.pdf',
  },
  {
    id: 31,
    title: 'BDA Notes 06',
    subject: 'BDA',
    sem: 'Sem 6',
    contributor: 'Padh AI',
    pages: 1,
    color: 'accent',
    pdf: '/pdfs/sem6/notes/BDA/BDA6.pdf',
  },
  {
    id: 32,
    title: 'BDA Notes 07',
    subject: 'BDA',
    sem: 'Sem 6',
    contributor: 'Padh AI',
    pages: 1,
    color: 'primary',
    pdf: '/pdfs/sem6/notes/BDA/BDA7.pdf',
  },

  {
    id: 33,
    title: 'MAN Notes 01',
    subject: 'MAN',
    sem: 'Sem 6',
    contributor: 'Padh AI',
    pages: 1,
    color: 'primary',
    pdf: '/pdfs/sem6/notes/MAN/MAN 1.pdf',
  },
  {
    id: 34,
    title: 'MAN Notes 02',
    subject: 'MAN',
    sem: 'Sem 6',
    contributor: 'Padh AI',
    pages: 1,
    color: 'accent',
    pdf: '/pdfs/sem6/notes/MAN/MAN 2.pdf',
  },
  {
    id: 35,
    title: 'MAN Notes 03',
    subject: 'MAN',
    sem: 'Sem 6',
    contributor: 'Padh AI',
    pages: 1,
    color: 'primary',
    pdf: '/pdfs/sem6/notes/MAN/MAN 3.pdf',
  },

  {
    id: 36,
    title: 'PIP Notes 01',
    subject: 'PIP',
    sem: 'Sem 6',
    contributor: 'Padh AI',
    pages: 1,
    color: 'accent',
    pdf: '/pdfs/sem6/notes/PIP/PIP 1.pdf',
  },
  {
    id: 37,
    title: 'PIP Notes 02',
    subject: 'PIP',
    sem: 'Sem 6',
    contributor: 'Padh AI',
    pages: 1,
    color: 'primary',
    pdf: '/pdfs/sem6/notes/PIP/PIP 2.pdf',
  },
];
console.log('TOTAL NOTES:', notes.length); 

export default function NotesGrid() {
  const [activeSem, setActiveSem] = useState('All');
  const [search, setSearch] = useState('');

  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = notes.filter((note) => {
    const matchSem =
      activeSem === 'All' || note.sem === activeSem;

    const matchSearch =
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.subject.toLowerCase().includes(search.toLowerCase());

    return matchSem && matchSearch;
  });

  useEffect(() => {
    const el = gridRef.current;

    if (!el) return;

    const cards = el.querySelectorAll('.note-card');

    cards.forEach((card, index) => {
      const element = card as HTMLElement;

      element.style.opacity = '0';
      element.style.transform = 'translateY(16px)';

      setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        element.style.transition =
          'opacity .4s ease, transform .4s cubic-bezier(.16,1,.3,1)';
      }, index * 50);
    });
  }, [activeSem, search]);

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
            placeholder="Search notes..."
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

      </div>

      {/* Count */}

      <p className="text-sm text-muted-foreground mb-8">

        {filtered.length} note
        {filtered.length !== 1 ? 's' : ''} found

      </p>

      {/* Notes */}

      <div
        ref={gridRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >

        {filtered.map((note) => (

          <div
            key={note.id}
            onClick={() => window.open(note.pdf, '_blank')}
            className="note-card gradient-border card-hover rounded-3xl overflow-hidden flex flex-col group cursor-pointer"
            style={{
              background: 'var(--card)',
            }}
          >

            {/* Preview */}

            <div
              className="note-card-img h-36 flex items-center justify-center relative overflow-hidden"
              style={{
                background:
                  note.color === 'primary'
                    ? 'linear-gradient(135deg, rgba(59,130,246,.12), rgba(59,130,246,.04))'
                    : 'linear-gradient(135deg, rgba(139,92,246,.12), rgba(139,92,246,.04))',
              }}
            >

              {[0, 1, 2, 3, 4].map((line) => (

                <div
                  key={line}
                  className="absolute left-8 right-8 h-px"
                  style={{
                    top: `${28 + line * 18}px`,
                    background:
                      note.color === 'primary'
                        ? `rgba(59,130,246,${0.15 - line * 0.02})`
                        : `rgba(139,92,246,${0.15 - line * 0.02})`,
                    width: line % 2 === 0 ? '70%' : '50%',
                  }}
                />

              ))}

              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    note.color === 'primary'
                      ? 'rgba(59,130,246,.15)'
                      : 'rgba(139,92,246,.15)',
                }}
              >

                <Icon
                  name="DocumentIcon"
                  size={22}
                  className={
                    note.color === 'primary'
                      ? 'text-primary'
                      : 'text-accent'
                  }
                />

              </div>

              <span
                className="absolute top-3 right-3 tag-pill text-xs"
                style={{
                  background:
                    note.color === 'primary'
                      ? 'rgba(59,130,246,.15)'
                      : 'rgba(139,92,246,.15)',
                }}
              >
                PDF
              </span>

            </div>

            {/* Card Content */}

            <div className="p-5 flex flex-col flex-1 gap-3">

              <div>

                <div className="flex items-center gap-2 mb-2">

                  <span className="tag-pill tag-white text-xs">
                    {note.sem}
                  </span>

                  <span className="text-xs text-muted-foreground">
                    {note.subject}
                  </span>

                </div>

                <h3 className="card-title text-foreground leading-snug line-clamp-2">
                  {note.title}
                </h3>

              </div>

              {/* Contributor + Pages */}

              <div className="flex items-center gap-3 text-xs text-muted-foreground mt-auto">

                <div className="flex items-center gap-1">

                  <Icon
                    name="UserIcon"
                    size={12}
                  />

                  <span>
                    {note.contributor}
                  </span>

                </div>

                <span>·</span>

                <span>
                  {note.pages}p
                </span>

              </div>

              {/* Buttons */}

              <div className="flex items-center gap-2 pt-3 border-t border-border">

                <a
                  href={note.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="btn-primary flex-1 py-2.5 text-xs flex items-center justify-center gap-1.5"
                >

                  <Icon
                    name="ArrowDownTrayIcon"
                    size={14}
                  />

                  Download

                </a>

                <a
                  href={note.pdf}
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

      {/* Empty State */}

      {filtered.length === 0 && (

        <div className="text-center py-24">

          <p className="text-muted-foreground text-sm">
            No notes found.
          </p>

        </div>

      )}

    </section>
  );
}