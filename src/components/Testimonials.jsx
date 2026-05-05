import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Kwame Asante',
    role: 'Property Investor, Accra',
    text: 'Osei Property Solutions made my first commercial property purchase seamless. Their market analysis was spot-on and their team guided me through every step with professionalism I hadn\'t experienced before in Ghana.',
    rating: 5,
  },
  {
    name: 'Abena Mensah-Owusu',
    role: 'Homeowner, Kumasi',
    text: 'The valuation team produced a thorough report that helped me secure the right mortgage terms. I was impressed by how accurate and detailed the assessment was — it gave the bank full confidence.',
    rating: 5,
  },
  {
    name: 'Yaw Boateng',
    role: 'Developer, Tema',
    text: 'Their quantity surveyors saved us significantly on our residential development project. Accurate cost planning from the start meant we finished on budget. Outstanding service from start to finish.',
    rating: 5,
  },
  {
    name: 'Akosua Darko',
    role: 'Land Owner, Takoradi',
    text: 'After a boundary dispute threatened my land, Osei\'s survey team came in with precision and resolved everything with proper documentation. I finally have peace of mind about my property.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % testimonials.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      {/* Testimonials */}
      <section
        ref={ref}
        className="testimonials-section"
        style={{
          background: 'var(--cream)',
          padding: '120px 0',
          overflow: 'hidden',
        }}
      >
        <div className="testimonials-container" style={{ maxWidth: 1280, margin: '0 auto', padding: '0 64px' }}>
          <div className="testimonials-grid" style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: 80,
            alignItems: 'center',
          }}>
            {/* Left header */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="section-tag"
              >
                Client Stories
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 'clamp(36px, 4vw, 52px)',
                  fontWeight: 700,
                  color: 'var(--navy)',
                  lineHeight: 1.1,
                  marginBottom: 20,
                }}
              >
                What Our Clients Say About Us
              </motion.h2>

              <div className="gold-line" />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 15,
                  color: 'var(--text-muted)',
                  lineHeight: 1.8,
                  marginBottom: 40,
                }}
              >
                Real results, real people. Our reputation is built on the outcomes we deliver for every client, every time.
              </motion.p>

              {/* Indicators */}
              <div style={{ display: 'flex', gap: 10 }}>
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    style={{
                      width: i === current ? 36 : 10,
                      height: 10,
                      borderRadius: 5,
                      background: i === current ? 'var(--gold)' : 'rgba(10,22,40,0.15)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.4s',
                      padding: 0,
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Right testimonial */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              style={{ position: 'relative', minHeight: 280 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    background: 'var(--navy)',
                    padding: '48px 44px',
                    position: 'relative',
                    borderLeft: '4px solid var(--gold)',
                  }}
                >
                  {/* Quote icon */}
                  <Quote
                    size={40}
                    style={{
                      position: 'absolute',
                      top: 28,
                      right: 32,
                      color: 'rgba(201,168,76,0.15)',
                    }}
                  />

                  {/* Stars */}
                  <div style={{ display: 'flex', gap: 4, marginBottom: 24 }}>
                    {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                      <Star key={i} size={14} color="var(--gold)" fill="var(--gold)" />
                    ))}
                  </div>

                  <p style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 20,
                    fontStyle: 'italic',
                    color: 'rgba(255,255,255,0.88)',
                    lineHeight: 1.75,
                    marginBottom: 32,
                  }}>
                    "{testimonials[current].text}"
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <div style={{
                      width: 44,
                      height: 44,
                      background: 'var(--gold)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: 18,
                      fontWeight: 700,
                      color: 'var(--navy)',
                      borderRadius: '50%',
                    }}>
                      {testimonials[current].name.charAt(0)}
                    </div>
                    <div>
                      <div style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: 14,
                        fontWeight: 600,
                        color: '#ffffff',
                      }}>
                        {testimonials[current].name}
                      </div>
                      <div style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: 12,
                        color: 'rgba(255,255,255,0.45)',
                      }}>
                        {testimonials[current].role}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Decorative offset card */}
              <div style={{
                position: 'absolute',
                bottom: -12,
                right: -12,
                width: '100%',
                height: '100%',
                border: '1px solid rgba(201,168,76,0.2)',
                zIndex: -1,
                pointerEvents: 'none',
              }} />
            </motion.div>
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .testimonials-section { padding: 80px 0 !important; }
            .testimonials-container { padding: 0 24px !important; }
            .testimonials-grid {
              grid-template-columns: 1fr !important;
              gap: 48px !important;
            }
          }
        `}</style>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner" style={{
        background: 'var(--gold)',
        padding: '72px 64px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 32,
      }}>
        <div>
          <h2 style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(28px, 4vw, 44px)',
            fontWeight: 700,
            color: 'var(--navy)',
            lineHeight: 1.15,
            marginBottom: 8,
          }}>
            Ready to Make Your Next Property Move?
          </h2>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 14,
            color: 'rgba(10,22,40,0.65)',
            lineHeight: 1.6,
          }}>
            Talk to our experts today — free initial consultation, no obligation.
          </p>
        </div>

        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'var(--navy)',
              color: '#ffffff',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: 2,
              textTransform: 'uppercase',
              padding: '16px 36px',
              textDecoration: 'none',
              transition: 'background 0.3s, transform 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--navy-light)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--navy)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Get Free Consultation
          </a>
          <a
            href="tel:+233000000000"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'transparent',
              color: 'var(--navy)',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: 2,
              textTransform: 'uppercase',
              padding: '15px 35px',
              border: '1px solid rgba(10,22,40,0.3)',
              textDecoration: 'none',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(10,22,40,0.08)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
          >
            Call Now
          </a>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .cta-banner {
              padding: 48px 24px !important;
              flex-direction: column !important;
            }
          }
        `}</style>
      </section>
    </>
  );
}
