'use client';

import React, { useEffect, useState } from 'react';

export default function SubjectsHero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setVisible(true); }, []);

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Blob */}
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
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
          }}
        >
          All Subjects
        </span>
        <h1
          className="section-headline text-foreground mb-5"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.2s',
          }}
        >
          Every subject.{' '}
          <span className="text-gradient">Every semester.</span>
        </h1>
        <p
          className="text-muted-foreground text-base max-w-lg mx-auto"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.6s ease 0.35s, transform 0.6s ease 0.35s',
          }}
        >
          6 semesters, 20+ subjects — all the MSBTE Diploma AIML curriculum in one place.
        </p>
      </div>
    </section>
  );
}