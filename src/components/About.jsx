import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { Shield, Award, Users, MapPin } from 'lucide-react';

const stats = [
  { number: 10, suffix: '+', label: 'Years of Experience', icon: Award },
  { number: 500, suffix: '+', label: 'Properties Handled', icon: MapPin },
  { number: 98, suffix: '%', label: 'Client Satisfaction', icon: Users },
  { number: 3, suffix: '', label: 'Licensed Expert Teams', icon: Shield },
];

const values = [
  {
    title: 'Integrity',
    desc: 'We operate with full transparency in every transaction, ensuring clients always have accurate, unbiased information.',
  },
  {
    title: 'Precision',
    desc: 'From valuations to boundary surveys, our work is meticulous and grounded in certified professional standards.',
  },
  {
    title: 'Trust',
    desc: 'We build long-term relationships based on reliability, confidentiality, and consistently delivering on our word.',
  },
  {
    title: 'Local Expertise',
    desc: 'Deep knowledge of Ghana\'s real estate landscape, legal frameworks, and market dynamics sets us apart.',
  },
];

export default function About() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <>
      {/* Stats Band */}
      <section
        ref={statsRef}
        style={{
          background: 'var(--gold)',
          padding: '60px 0',
          overflow: 'hidden',
        }}
      >
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 64px',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 0,
          divide: true,
        }}>
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                style={{
                  textAlign: 'center',
                  padding: '20px 24px',
                  borderRight: i < 3 ? '1px solid rgba(10,22,40,0.15)' : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                <Icon size={20} color="rgba(10,22,40,0.5)" />
                <div style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 52,
                  fontWeight: 700,
                  color: 'var(--navy)',
                  lineHeight: 1,
                }}>
                  {statsInView ? (
                    <CountUp end={s.number} duration={2.5} separator="," />
                  ) : 0}
                  {s.suffix}
                </div>
                <div style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  color: 'rgba(10,22,40,0.6)',
                }}>
                  {s.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        <style>{`
          @media (max-width: 900px) {
            section > div[style*="grid-template-columns: repeat(4"] {
              grid-template-columns: repeat(2, 1fr) !important;
              padding: 0 24px !important;
            }
          }
        `}</style>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '120px 0', background: 'var(--cream)', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 64px' }}>
          <div
            ref={aboutRef}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 80,
              alignItems: 'center',
            }}
          >
            {/* Left: Image stack */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: 'relative' }}
            >
              <div style={{
                position: 'relative',
                height: 500,
              }}>
                <img
                  src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80"
                  alt="About Osei Property"
                  style={{
                    width: '80%',
                    height: 420,
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                  }}
                />
                <img
                  src="https://images.unsplash.com/photo-1637932133484-457cf7b15807?w=600&q=80"
                  alt="Ghana Property"
                  style={{
                    width: '55%',
                    height: 260,
                    objectFit: 'cover',
                    position: 'absolute',
                    bottom: 0,
                    right: 0,
                    border: '6px solid var(--cream)',
                  }}
                />

                {/* Experience badge */}
                <div style={{
                  position: 'absolute',
                  top: 30,
                  right: 10,
                  background: 'var(--navy)',
                  padding: '24px 28px',
                  textAlign: 'center',
                  zIndex: 2,
                  borderLeft: '3px solid var(--gold)',
                }}>
                  <div style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 48,
                    fontWeight: 700,
                    color: 'var(--gold)',
                    lineHeight: 1,
                  }}>10+</div>
                  <div style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 9,
                    fontWeight: 600,
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.6)',
                    marginTop: 6,
                  }}>Years of<br/>Excellence</div>
                </div>
              </div>
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="section-tag">About Us</div>

              <h2 style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(36px, 4vw, 52px)',
                fontWeight: 700,
                color: 'var(--navy)',
                lineHeight: 1.1,
                marginBottom: 8,
              }}>
                Ghana's Trusted Property Solutions Partner
              </h2>

              <div className="gold-line" />

              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 15,
                color: 'var(--text-muted)',
                lineHeight: 1.9,
                marginBottom: 20,
              }}>
                Osei Property Solutions is a full-service real estate firm headquartered in Ghana, built on a foundation of professional integrity and deep local market knowledge. We serve individuals, investors, corporations, and developers navigating Ghana's property landscape.
              </p>

              <p style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 15,
                color: 'var(--text-muted)',
                lineHeight: 1.9,
                marginBottom: 40,
              }}>
                Whether you're buying your first home, developing a commercial portfolio, or resolving a land boundary issue — our three specialist teams bring certified expertise and unwavering commitment to every engagement.
              </p>

              {/* Values */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 20,
              }}>
                {values.map((v, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={aboutInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                    style={{
                      padding: '20px',
                      borderLeft: '2px solid var(--gold)',
                      background: '#ffffff',
                    }}
                  >
                    <div style={{
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: 17,
                      fontWeight: 700,
                      color: 'var(--navy)',
                      marginBottom: 6,
                    }}>
                      {v.title}
                    </div>
                    <div style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 12,
                      color: 'var(--text-muted)',
                      lineHeight: 1.7,
                    }}>
                      {v.desc}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            #about > div { padding: 0 24px !important; }
            #about { padding: 80px 0 !important; }
            #about > div > div[style*="grid-template-columns: 1fr 1fr"] {
              grid-template-columns: 1fr !important;
              gap: 48px !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
