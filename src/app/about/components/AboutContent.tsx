'use client';

import Icon from '@/components/ui/AppIcon';

export default function AboutContent() {
  return (
    <main className="pb-24">

      {/* =========================
          HERO
      ========================== */}

      <section className="relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-6 py-24">

          <div className="max-w-4xl">

            <span className="tag-pill mb-6 inline-flex">
              About Padh AI
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight mb-6">

              Built by an AIML student,
              <br />

              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                for AIML students.
              </span>

            </h1>

            <p className="text-xl text-muted-foreground leading-8 max-w-3xl">

              Finding the right study material shouldn't be harder than
              studying itself.

              <br />
              <br />

              Padh AI brings together notes, previous question papers,
              syllabus and academic resources into one organized platform,
              helping students spend less time searching and more time
              learning.

            </p>

          </div>

        </div>

      </section>


      {/* =========================
          FOUNDER
      ========================== */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-24">

        <div className="gradient-border rounded-[32px] bg-card p-10">

          <span className="tag-pill mb-6 inline-flex">
            Meet the Founder
          </span>

          <div className="flex flex-col lg:flex-row gap-10 items-center">

            {/* Founder Image */}

            <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-primary/20 shrink-0">

              <img
                src="/assets/images/founder.jpg"
                alt="Siddhika Savant"
                className="w-full h-full object-cover object-top"
              />

            </div>


            {/* Founder Info */}

            <div>

              <h2 className="text-4xl font-bold">
                Siddhika Savant
              </h2>

              <p className="text-primary mt-2 mb-6 font-medium">
                Founder of Padh AI
              </p>

              <p className="text-muted-foreground leading-8">

                Hi! I'm Siddhika, the creator of Padh AI.

                <br />
                <br />

                During my diploma journey, I experienced how difficult
                it was for AIML students to find quality study
                resources. Instead of relying on scattered websites,
                I decided to build a centralized platform where
                students could easily access syllabus, notes and
                previous question papers.

                <br />
                <br />

                My goal is simple, help students spend less time
                searching and more time learning.

              </p>


              {/* Social Links */}

              <div className="flex flex-wrap gap-4 mt-8">

                <a
                  href="https://github.com/siddhikasavant"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 hover:bg-muted transition"
                >
                  <Icon
                    name="CodeBracketIcon"
                    size={18}
                  />
                  GitHub
                </a>


                <a
                  href="https://www.linkedin.com/in/siddhika-savant-b262352a9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 hover:bg-muted transition"
                >
                  <Icon
                    name="BriefcaseIcon"
                    size={18}
                  />
                  LinkedIn
                </a>


                <a
                  href="mailto:siddhikasavant00@gmail.com"
                  className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 hover:bg-muted transition"
                >
                  <Icon
                    name="EnvelopeIcon"
                    size={18}
                  />
                  Email
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          OUR STORY
      ========================== */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Story */}

          <div>

            <span className="tag-pill tag-white mb-5 inline-flex">
              Our Story
            </span>

            <h2 className="text-4xl font-bold mb-8">
              Why Padh AI Exists
            </h2>

            <div className="space-y-6 text-muted-foreground leading-8">

              <p>
                During my three years pursuing a Diploma in Artificial
                Intelligence & Machine Learning under MSBTE, I noticed one
                common problem every semester.
              </p>

              <p>
                Computer Engineering students had access to multiple
                websites for notes, previous question papers, important
                questions and exam resources.
              </p>

              <p>
                AIML students didn't have that luxury. Most resources
                either didn't exist or were scattered across different
                websites. Sometimes the only available material was for
                subjects common to Computer Engineering.
              </p>

              <p>
                Instead of studying, students spent valuable time
                searching for resources.
              </p>

              <p>
                That's why I created{' '}
                <span className="font-semibold text-primary">
                  Padh AI
                </span>{' '}
                — a single platform where AIML students can find syllabus,
                notes and previous question papers in one place.
              </p>

            </div>

          </div>


          {/* Problem / Solution */}

          <div className="gradient-border rounded-3xl bg-card p-8 h-fit">

            <div className="space-y-8">

              {/* Searching */}

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">

                  <Icon
                    name="MagnifyingGlassIcon"
                    size={24}
                    className="text-primary"
                  />

                </div>

                <div>

                  <h3 className="font-semibold text-lg mb-2">
                    Too Much Searching
                  </h3>

                  <p className="text-muted-foreground">
                    Students had to search across multiple websites before
                    they could even begin studying.
                  </p>

                </div>

              </div>


              {/* Scattered */}

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">

                  <Icon
                    name="DocumentTextIcon"
                    size={24}
                    className="text-accent"
                  />

                </div>

                <div>

                  <h3 className="font-semibold text-lg mb-2">
                    Scattered Resources
                  </h3>

                  <p className="text-muted-foreground">
                    Notes, syllabus and previous question papers were
                    never available together.
                  </p>

                </div>

              </div>


              {/* One Platform */}

              <div className="flex gap-5">

                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">

                  <Icon
                    name="LightBulbIcon"
                    size={24}
                    className="text-primary"
                  />

                </div>

                <div>

                  <h3 className="font-semibold text-lg mb-2">
                    One Platform
                  </h3>

                  <p className="text-muted-foreground">
                    Padh AI brings everything together so students can
                    focus on learning instead of searching.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          MISSION
      ========================== */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-10">

        <div className="gradient-border rounded-[32px] bg-card p-10">

          <span className="tag-pill mb-5 inline-flex">
            Our Mission
          </span>

          <h2 className="text-4xl font-bold mb-6">

            One Platform.
            <br />
            Every Essential Resource.

          </h2>

          <p className="text-lg text-muted-foreground leading-8 max-w-4xl">

            Padh AI was built to become the central learning hub for
            MSBTE Artificial Intelligence & Machine Learning students.

            <br />
            <br />

            Whether you're preparing for one subject or an entire
            semester, everything should be available in one place—
            without opening multiple tabs or wasting valuable study
            time searching for resources.

          </p>

        </div>

      </section>


      {/* =========================
          FEATURES
      ========================== */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-24">

        <div className="text-center max-w-3xl mx-auto mb-16">

          <span className="tag-pill mb-5 inline-flex">
            What You'll Find
          </span>

          <h2 className="text-4xl font-bold mb-5">

            Everything You Need,{' '}

            <span className="text-primary">
              All in One Place
            </span>

          </h2>

          <p className="text-muted-foreground text-lg leading-8">
            Everything required for your MSBTE AIML journey is available
            in one organized platform.
          </p>

        </div>


        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">

          {/* Syllabus */}

          <div className="gradient-border rounded-3xl bg-card p-8">

            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">

              <Icon
                name="BookOpenIcon"
                size={26}
                className="text-primary"
              />

            </div>

            <h3 className="text-xl font-semibold mb-3">
              Official Syllabus
            </h3>

            <p className="text-muted-foreground leading-7">
              Latest MSBTE syllabus for every AIML semester.
            </p>

          </div>


          {/* Notes */}

          <div className="gradient-border rounded-3xl bg-card p-8">

            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">

              <Icon
                name="DocumentTextIcon"
                size={26}
                className="text-accent"
              />

            </div>

            <h3 className="text-xl font-semibold mb-3">
              Quality Notes
            </h3>

            <p className="text-muted-foreground leading-7">
              Well-organized notes to simplify learning and revision.
            </p>

          </div>


          {/* PYQs */}

          <div className="gradient-border rounded-3xl bg-card p-8">

            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">

              <Icon
                name="ClipboardDocumentListIcon"
                size={26}
                className="text-primary"
              />

            </div>

            <h3 className="text-xl font-semibold mb-3">
              Previous Question Papers
            </h3>

            <p className="text-muted-foreground leading-7">
              Practice using previous MSBTE examination papers.
            </p>

          </div>


          {/* Search */}

          <div className="gradient-border rounded-3xl bg-card p-8">

            <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6">

              <Icon
                name="MagnifyingGlassIcon"
                size={26}
                className="text-accent"
              />

            </div>

            <h3 className="text-xl font-semibold mb-3">
              Fast Search
            </h3>

            <p className="text-muted-foreground leading-7">
              Find resources in seconds without visiting multiple
              websites.
            </p>

          </div>

        </div>

      </section>


      {/* =========================
          WHY PADH AI
      ========================== */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-20">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <span className="tag-pill mb-5 inline-flex">
              Why Padh AI?
            </span>

            <h2 className="text-4xl font-bold mb-8">

              Less Searching.
              <br />
              More Learning.

            </h2>

            <div className="space-y-6 text-muted-foreground leading-8">

              <p>
                During exam preparation, students often keep switching
                between multiple websites just to collect notes,
                syllabus and previous question papers.
              </p>

              <p>
                Every extra tab and every missing resource wastes
                valuable study time.
              </p>

              <p>
                Padh AI solves this by bringing everything together
                into one clean, organized platform specifically
                designed for AIML students.
              </p>

              <p>
                Instead of searching for resources, students can now
                focus on understanding concepts and performing better
                in examinations.
              </p>

            </div>

          </div>


          {/* Stats */}

          <div className="grid grid-cols-2 gap-6">

            <div className="gradient-border rounded-3xl bg-card p-8 text-center">

              <h3 className="text-5xl font-bold text-primary mb-2">
                1
              </h3>

              <p className="text-muted-foreground">
                Platform
              </p>

            </div>


            <div className="gradient-border rounded-3xl bg-card p-8 text-center">

              <h3 className="text-5xl font-bold text-accent mb-2">
                3
              </h3>

              <p className="text-muted-foreground">
                Core Resources
              </p>

            </div>


            <div className="gradient-border rounded-3xl bg-card p-8 text-center">

              <h3 className="text-5xl font-bold text-primary mb-2">
                0
              </h3>

              <p className="text-muted-foreground">
                Extra Websites
              </p>

            </div>


            <div className="gradient-border rounded-3xl bg-card p-8 text-center">

              <h3 className="text-5xl font-bold text-accent mb-2">
                ∞
              </h3>

              <p className="text-muted-foreground">
                Learning Potential
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          LOOKING AHEAD
      ========================== */}

      <section className="max-w-7xl mx-auto px-5 sm:px-6 py-24">

        <div className="gradient-border rounded-[32px] bg-card p-10 md:p-14">

          <span className="tag-pill mb-5 inline-flex">
            Looking Ahead
          </span>

          <h2 className="text-4xl font-bold mb-6">
            This is Just the Beginning.
          </h2>

          <p className="text-lg text-muted-foreground leading-8 max-w-4xl mb-8">

            Padh AI is continuously evolving with a vision to become the
            go-to learning platform for every MSBTE AIML student.

            <br />
            <br />

            More features are already planned to make studying easier,
            smarter and more efficient. Rather than rushing new
            additions, our focus is on building tools that genuinely help
            students learn better.

          </p>


          <div className="grid md:grid-cols-3 gap-6">

            {/* Improvements */}

            <div className="rounded-2xl border border-border/50 bg-background/40 p-6">

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">

                <Icon
                  name="SparklesIcon"
                  size={22}
                  className="text-primary"
                />

              </div>

              <h3 className="font-semibold text-lg mb-2">
                Continuous Improvements
              </h3>

              <p className="text-muted-foreground text-sm leading-7">
                Padh AI will continue growing with better resources and
                smarter features.
              </p>

            </div>


            {/* Smarter Learning */}

            <div className="rounded-2xl border border-border/50 bg-background/40 p-6">

              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">

                <Icon
                  name="RocketLaunchIcon"
                  size={22}
                  className="text-accent"
                />

              </div>

              <h3 className="font-semibold text-lg mb-2">
                Smarter Learning
              </h3>

              <p className="text-muted-foreground text-sm leading-7">
                Future updates will focus on helping students prepare
                faster with less effort.
              </p>

            </div>


            {/* Students */}

            <div className="rounded-2xl border border-border/50 bg-background/40 p-6">

              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">

                <Icon
                  name="AcademicCapIcon"
                  size={22}
                  className="text-primary"
                />

              </div>

              <h3 className="font-semibold text-lg mb-2">
                Built for Students
              </h3>

              <p className="text-muted-foreground text-sm leading-7">
                Every feature is designed with one priority—improving the
                learning experience.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          CTA
      ========================== */}

      <section className="max-w-6xl mx-auto px-5 sm:px-6 pb-24">

        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-r from-primary via-accent to-primary p-[1px]">

          <div className="rounded-[35px] bg-background px-8 py-16 text-center">

            <span className="tag-pill mb-6 inline-flex">
              Join the Journey
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">

              Learn Smarter.
              <br />

              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Search Less.
              </span>

            </h2>

            <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-8 mb-10">

              Padh AI was created with one mission:
              make studying easier for every AIML student.

              <br />
              <br />

              Whether you're preparing for internals,
              practicals or final exams, we're here to help
              you find the right resources—without wasting
              time searching.

            </p>


            <div className="flex flex-wrap justify-center gap-4">

              <a
                href="/notes"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-primary-foreground font-medium hover:scale-105 transition"
              >

                Explore Notes

                <Icon
                  name="ArrowRightIcon"
                  size={18}
                />

              </a>


              <a
                href="/pyqs"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 font-medium hover:bg-muted transition"
              >
                Browse PYQs
              </a>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}