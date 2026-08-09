'use client';

import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Icon from '@/components/ui/AppIcon';

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

const resourceTypes = [
  { id: 'notes', label: 'Handwritten Notes', icon: 'DocumentTextIcon', desc: 'Scanned or photographed notes from class', color: 'blue' },
  { id: 'practical', label: 'Practical File', icon: 'BeakerIcon', desc: 'Lab practicals, experiments, observations', color: 'purple' },
  { id: 'pyq', label: 'Previous Year Paper', icon: 'ClipboardDocumentListIcon', desc: 'Question papers from past exams', color: 'blue' },
  { id: 'project', label: 'Project Report', icon: 'FolderOpenIcon', desc: 'Final year or mini project documentation', color: 'purple' },
];

const semesters = ['Semester 1', 'Semester 2', 'Semester 3', 'Semester 4', 'Semester 5', 'Semester 6'];

const subjects: Record<string, string[]> = {
  'Semester 1': ['Applied Mathematics', 'Applied Science', 'Communication Skills', 'Engineering Drawing', 'Workshop Technology'],
  'Semester 2': ['Applied Mathematics II', 'Applied Science II', 'Python Programming', 'Digital Techniques', 'Environmental Studies'],
  'Semester 3': ['Data Structures', 'Database Management', 'Statistics', 'Object Oriented Programming', 'Linux Administration'],
  'Semester 4': ['Machine Learning', 'Computer Vision', 'Web Technology', 'Data Warehousing', 'Soft Skills'],
  'Semester 5': ['Deep Learning', 'Natural Language Processing', 'Cloud Computing', 'IoT', 'Mini Project'],
  'Semester 6': ['AI Project', 'Entrepreneurship', 'Advanced ML', 'Elective I', 'Elective II'],
};

const guidelines = [
  { icon: 'CheckCircleIcon', text: 'Upload only MSBTE AIML syllabus-aligned content' },
  { icon: 'CheckCircleIcon', text: 'Ensure files are clear, readable, and complete' },
  { icon: 'CheckCircleIcon', text: 'PDF format preferred; max file size 50MB' },
  { icon: 'CheckCircleIcon', text: 'Do not upload copyrighted textbooks or paid content' },
  { icon: 'CheckCircleIcon', text: 'Add accurate subject and semester information' },
  { icon: 'CheckCircleIcon', text: 'Your name will be credited as contributor' },
];

export default function UploadPage() {
  const [heroAnim, setHeroAnim] = useState(false);
  const [selectedType, setSelectedType] = useState('notes');
  const [selectedSemester, setSelectedSemester] = useState('Semester 1');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [contributorName, setContributorName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formSection = useInView();
  const guidelinesSection = useInView();

  useEffect(() => {
    setTimeout(() => setHeroAnim(true), 100);
  }, []);

  const currentSubjects = subjects[selectedSemester] || [];

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    if (file) setUploadedFile(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setUploadedFile(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadedFile || !title || !selectedSubject) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1800);
  };

  const resetForm = () => {
    setSubmitted(false);
    setUploadedFile(null);
    setTitle('');
    setDescription('');
    setContributorName('');
    setSelectedSubject('');
  };

  return (
    <>
      <Header />
      <main className="pt-16 min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden py-24 sm:py-32">
          <div className="blob-1 opacity-50" style={{ top: '-15%', left: '-5%' }} />
          <div className="blob-2 opacity-30" style={{ bottom: '-10%', right: '-5%' }} />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)`,
              backgroundSize: '60px 60px',
            }}
          />
          <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-6 text-center">
            <div
              className={`inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full glass-light border border-white/10 transition-all duration-700 ${heroAnim ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
              <span className="section-label">Contribute to the Community</span>
            </div>
            <h1
              className={`hero-headline mb-6 transition-all duration-700 delay-100 ${heroAnim ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              Upload your{' '}
              <span className="text-gradient">resources</span>
            </h1>
            <p
              className={`text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${heroAnim ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              Share your notes, practicals, and papers. Help the next batch of AIML students learn smarter. Every upload earns you a contributor badge.
            </p>
          </div>
        </section>

        {/* Main Form + Guidelines */}
        <section className="py-12 max-w-7xl mx-auto px-5 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div
              ref={formSection.ref}
              className={`lg:col-span-2 transition-all duration-700 ${formSection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {submitted ? (
                <div className="gradient-border p-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center mx-auto mb-6">
                    <Icon name="CheckCircleIcon" size={36} className="text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-3">Upload Submitted!</h2>
                  <p className="text-muted-foreground text-sm mb-8 max-w-sm mx-auto">
                    Thank you for contributing. Your resource will be reviewed and published shortly. You&apos;ll be credited as a contributor.
                  </p>
                  <button onClick={resetForm} className="btn-primary px-8 py-3 text-sm">
                    Upload Another Resource
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="gradient-border p-8 sm:p-10 space-y-8">
                  <div>
                    <h2 className="text-xl font-bold text-foreground mb-1">Resource Details</h2>
                    <p className="text-sm text-muted-foreground">Fill in the details about your resource</p>
                  </div>

                  {/* Resource Type */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-3">Resource Type</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {resourceTypes.map((type) => (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setSelectedType(type.id)}
                          className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                            selectedType === type.id
                              ? 'border-blue-500/60 bg-blue-500/10' :'border-white/10 bg-white/3 hover:border-white/20 hover:bg-white/5'
                          }`}
                        >
                          <Icon
                            name={type.icon}
                            size={20}
                            className={selectedType === type.id ? 'text-blue-400 mb-2' : 'text-muted-foreground mb-2'}
                          />
                          <p className={`text-xs font-semibold leading-tight ${selectedType === type.id ? 'text-foreground' : 'text-muted-foreground'}`}>
                            {type.label}
                          </p>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Semester + Subject */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Semester</label>
                      <select
                        value={selectedSemester}
                        onChange={(e) => { setSelectedSemester(e.target.value); setSelectedSubject(''); }}
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm focus:outline-none focus:border-blue-500/60 transition-colors"
                      >
                        {semesters.map((s) => (
                          <option key={s} value={s} className="bg-[#0d0d0d]">{s}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-2">Subject <span className="text-blue-400">*</span></label>
                      <select
                        value={selectedSubject}
                        onChange={(e) => setSelectedSubject(e.target.value)}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm focus:outline-none focus:border-blue-500/60 transition-colors"
                      >
                        <option value="" className="bg-[#0d0d0d]">Select subject...</option>
                        {currentSubjects.map((s) => (
                          <option key={s} value={s} className="bg-[#0d0d0d]">{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Title */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Resource Title <span className="text-blue-400">*</span></label>
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                      placeholder="e.g. Unit 3 – Neural Networks Complete Notes"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-blue-500/60 transition-colors"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Description <span className="text-muted-foreground font-normal">(optional)</span></label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={3}
                      placeholder="Brief description of what's covered in this resource..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-blue-500/60 transition-colors resize-none"
                    />
                  </div>

                  {/* File Upload */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">File <span className="text-blue-400">*</span></label>
                    <div
                      onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                      onDragLeave={() => setDragOver(false)}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`relative border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-all duration-200 ${
                        dragOver
                          ? 'border-blue-500/60 bg-blue-500/5'
                          : uploadedFile
                          ? 'border-purple-500/40 bg-purple-500/5' :'border-white/10 hover:border-white/20 hover:bg-white/3'
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                        onChange={handleFileChange}
                        className="hidden"
                      />
                      {uploadedFile ? (
                        <div className="flex items-center justify-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                            <Icon name="DocumentCheckIcon" size={20} className="text-purple-400" />
                          </div>
                          <div className="text-left">
                            <p className="text-sm font-semibold text-foreground">{uploadedFile.name}</p>
                            <p className="text-xs text-muted-foreground">{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                          </div>
                          <button
                            type="button"
                            onClick={(e) => { e.stopPropagation(); setUploadedFile(null); }}
                            className="ml-auto p-1.5 rounded-lg hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Icon name="XMarkIcon" size={16} />
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4">
                            <Icon name="ArrowUpTrayIcon" size={22} className="text-muted-foreground" />
                          </div>
                          <p className="text-sm font-semibold text-foreground mb-1">Drop your file here or click to browse</p>
                          <p className="text-xs text-muted-foreground">PDF, JPG, PNG, DOC up to 50MB</p>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Contributor Name */}
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">Your Name <span className="text-muted-foreground font-normal">(for credit)</span></label>
                    <input
                      type="text"
                      value={contributorName}
                      onChange={(e) => setContributorName(e.target.value)}
                      placeholder="e.g. Arjun Sharma"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-blue-500/60 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting || !uploadedFile || !title || !selectedSubject}
                    className="btn-primary w-full py-4 text-sm font-semibold disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Uploading...
                      </>
                    ) : (
                      <>
                        <Icon name="ArrowUpTrayIcon" size={16} />
                        Submit Resource
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar: Guidelines */}
            <div
              ref={guidelinesSection.ref}
              className={`space-y-6 transition-all duration-700 delay-150 ${guidelinesSection.visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              {/* Guidelines Card */}
              <div className="gradient-border p-6">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20 flex items-center justify-center">
                    <Icon name="ShieldCheckIcon" size={18} className="text-blue-400" />
                  </div>
                  <h3 className="text-sm font-bold text-foreground">Contributor Guidelines</h3>
                </div>
                <ul className="space-y-3">
                  {guidelines.map((g, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Icon name={g.icon} size={15} className="text-blue-400 mt-0.5 shrink-0" />
                      <span className="text-xs text-muted-foreground leading-relaxed">{g.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats Card */}
              <div className="gradient-border p-6">
                <h3 className="text-sm font-bold text-foreground mb-5">Community Impact</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Resources Uploaded', value: '1,200+', icon: 'DocumentTextIcon' },
                    { label: 'Active Contributors', value: '85+', icon: 'UsersIcon' },
                    { label: 'Downloads This Month', value: '4,300+', icon: 'ArrowDownTrayIcon' },
                  ].map((stat) => (
                    <div key={stat.label} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                        <Icon name={stat.icon} size={14} className="text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-foreground">{stat.value}</p>
                        <p className="text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Badge Preview */}
              <div className="gradient-border gradient-border-bright p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <Icon name="StarIcon" size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-foreground">Earn Contributor Badge</p>
                    <p className="text-xs text-muted-foreground">Displayed on your profile</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Every approved upload earns you recognition. Top contributors get featured on the Contributors page.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
