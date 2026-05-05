import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2, PhoneCall, Clock, BadgeCheck } from 'lucide-react';

const reasons = [
  {
    icon: BadgeCheck,
    title: 'Licensed & Certified',
    desc: 'All our valuers, surveyors, and quantity surveyors hold valid professional certifications recognised in Ghana.',
  },
  {
    icon: CheckCircle2,
    title: 'Full-Service Coverage',
    desc: 'From buying and selling to registration and surveying — we handle every stage of your property journey under one roof.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    desc: 'We respect your time. Our streamlined processes ensure reports, agreements, and valuations are delivered on schedule.',
  },
  {
    icon: PhoneCall,
    title: 'Dedicated Client Support',
    desc: 'Your assigned consultant stays with you throughout the process, keeping you informed and confident at every step.',
  },
];

export default function WhyUs() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      style={{
        position: 'relative',
        background: 'var(--navy)',
        padding: '120px 0',
        overflow: 'hidden',
      }}
    >
      {/* Decorative diagonal */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 4,
        background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
      }} />

      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(201,168,76,0.06) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div ref={ref} style={{ maxWidth: 1280, margin: '0 auto', padding: '0 64px', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
        }}>
          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: 16,
              }}
            >
              <span style={{ display: 'block', width: 24, height: 1, background: 'var(--gold)' }} />
              Why Choose Us
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(38px, 4.5vw, 54px)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.1,
                marginBottom: 24,
              }}
            >
              The Standard of Excellence You Deserve
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 15,
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.9,
                marginBottom: 40,
                maxWidth: 440,
              }}
            >
              We combine professional rigour with genuine care for our clients. Every project, large or small, receives the same level of attention and commitment.
            </motion.p>

            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.3 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: 'var(--gold)',
                color: 'var(--navy)',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 600,
                fontSize: 12,
                letterSpacing: 2,
                textTransform: 'uppercase',
                padding: '16px 36px',
                textDecoration: 'none',
                transition: 'background 0.3s, transform 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold-light)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Work With Us
            </motion.a>
          </div>

          {/* Right: Reasons grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 2,
          }}>
            {reasons.map((r, i) => {
              const Icon = r.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                  style={{
                    padding: '36px 32px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(201,168,76,0.12)',
                    transition: 'background 0.3s, border-color 0.3s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = 'rgba(201,168,76,0.08)';
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.12)';
                  }}
                >
                  <div style={{
                    width: 42,
                    height: 42,
                    background: 'rgba(201,168,76,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 18,
                    borderRadius: 2,
                  }}>
                    <Icon size={20} color="var(--gold)" />
                  </div>

                  <h4 style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 19,
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: 10,
                  }}>
                    {r.title}
                  </h4>

                  <p style={{
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.75,
                  }}>
                    {r.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          section { padding: 80px 0 !important; }
          section > div { padding: 0 24px !important; }
        }
      `}</style>
    </section>
  );
}
