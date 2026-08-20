'use client';

import Image from 'next/image';

const contributors = [
  {
    name: 'Siddhika Savant',
    image: '/assets/images/contributors/founder.jpg',
    position: '50% 15%',
  },
  {
    name: 'Taniya Katigar',
    image: '/assets/images/contributors/taniyakatigar.jpeg',
    position: '50% 20%',
  },
  {
  name: 'Anushka Otari',
  image: '/assets/images/contributors/anushkaotari.jpeg',
  position: '50% 40%',
  },
  {
    name: 'Yashraj Lohar',
    image: '/assets/images/contributors/yashrajlohar.jpeg',
    position: '50% 20%',
  },
  {
    name: 'Diksha Sid',
    image: '/assets/images/contributors/dikshasid.jpeg',
    position: '50% 15%',
    zoom: 1.15,
  },
  {
    name: 'Arslaan Nadaph',
    image: '/assets/images/contributors/arslaannadaf.jpeg',
    position: '50% 20%',
  },
  {
    name: 'Farzeen Pathan',
    image: '/assets/images/contributors/farzeenpathan.jpg',
    position: '50% 20%',
  },
  {
    name: 'Yogita Sachdev',
    image: '/assets/images/contributors/yogitasachdev.jpeg',
    position: '50% 20%',
  },
  {
    name: 'Tanishka Patole',
    image: '/assets/images/contributors/tanishkapatole.jpeg',
    position: '50% 10%',
  },
  {
    name: 'Harshada Chopade',
    image: '/assets/images/contributors/harshadachopade.jpeg',
    position: '50% 20%',
  },
];

export default function ContributorsPage() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">

      {/* =========================
          HERO
      ========================== */}

      <section className="relative py-28 px-6">

        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />

        <div className="relative max-w-6xl mx-auto text-center">

          <span className="tag-pill inline-flex mb-6">
            Contributors
          </span>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">

            The Faces Behind

            <br />

            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Padh AI
            </span>

          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-lg text-muted-foreground leading-8">
            Every contributor has helped make learning easier for
            thousands of AIML students by sharing valuable notes
            and academic resources.
          </p>

        </div>

      </section>


      {/* =========================
          CONTRIBUTORS
      ========================== */}

      <section className="max-w-7xl mx-auto px-6 pb-28">

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {contributors.map((contributor, index) => (

            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] border border-border/60 bg-card/60 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/40 hover:shadow-[0_0_50px_rgba(99,102,241,0.18)]"
            >

              {/* Glow */}

              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">

                <div className="absolute -top-20 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />

              </div>


              {/* Card Content */}

              <div className="relative flex flex-col items-center px-8 py-10">


                {/* =========================
                    PHOTO
                ========================== */}

                <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-primary/20 transition-all duration-500 group-hover:scale-105 group-hover:border-primary">

                  <Image
                    src={contributor.image}
                    alt={contributor.name}
                    fill
                    sizes="160px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    style={{
                      objectPosition: contributor.position,
                    }}
                  />

                </div>


                {/* =========================
                    NAME
                ========================== */}

                <h2 className="mt-8 text-2xl font-bold text-center">
                  {contributor.name}
                </h2>


                {/* =========================
                    DIVIDER
                ========================== */}

                <div className="mt-5 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-20" />

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =========================
          FOOTER / THANK YOU
      ========================== */}

      <section className="pb-24 px-6">

        <div className="max-w-4xl mx-auto">

          <div className="rounded-[32px] border border-border/60 bg-card/60 backdrop-blur-xl p-10 text-center">

            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10" />

            <h2 className="text-3xl font-bold mb-4">
              Thank You
            </h2>

            <p className="text-lg text-muted-foreground leading-8 max-w-2xl mx-auto">

              Every shared note, question paper and learning resource
              helps another student learn better.

              <br />
              <br />

              Thank you for being a part of Padh AI and helping build
              a stronger learning community.

            </p>

          </div>

        </div>

      </section>

    </main>
  );
}