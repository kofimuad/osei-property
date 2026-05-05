import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Building2, MapPin } from 'lucide-react';

const slides = [
  {
    bg: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1800&q=80',
    title: 'Premium Real Estate',
    subtitle: 'Solutions in Ghana',
    tag: 'Residential & Commercial',
  },
  {
    bg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1800&q=80',
    title: 'Expert Property',
    subtitle: 'Valuation & Consulting',
    tag: 'Investment Intelligence',
  },
  {
    bg: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1800&q=80',
    title: 'Trusted Land',
    subtitle: 'Survey & Registration',
    tag: 'Legal & Secure',
  },
];

export default function Hero() {
  const [current, setCurrent] = React.useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5500);
    return () => clearInterval(t);
  }, []);

  const slide = slides[current];

  return (
    <section
      id="home"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: 700,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end',
      }}
    >
      {/* Background */}
      {slides.map((s, i) => (
        <motion.div
          key={i}
          initial={{ opacity: i === 0 ? 1 : 0 }}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1.2 }}
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${s.bg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 0,
          }}
        />
      ))}

      {/* Overlays */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.5) 60%, rgba(10,22,40,0.2) 100%)',
        zIndex: 1,
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(10,22,40,0.8) 0%, transparent 50%)',
        zIndex: 1,
      }} />

      {/* Decorative line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 60,
        width: 1,
        height: '100%',
        background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.3), transparent)',
        zIndex: 2,
      }} />

      {/* Content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        padding: '0 64px 80px',
        maxWidth: 700,
      }}>
        <motion.div
          key={current + '-tag'}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="section-tag"
          style={{ color: 'var(--gold)' }}
        >
          {slide.tag}
        </motion.div>

        <motion.h1
          key={current + '-h1'}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 'clamp(52px, 7vw, 88px)',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.05,
            letterSpacing: -1,
          }}
        >
          {slide.title}
          <br />
          <span style={{ color: 'var(--gold)' }}>{slide.subtitle}</span>
        </motion.h1>

        <motion.div
          key={current + '-line'}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            height: 2,
            width: 80,
            background: 'var(--gold)',
            transformOrigin: 'left',
            margin: '28px 0',
          }}
        />

        <motion.p
          key={current + '-p'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 16,
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.8,
            maxWidth: 480,
            marginBottom: 40,
          }}
        >
          Ghana's premier property firm offering brokerage, valuation, land surveying, and investment consulting services across the country.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
        >
          <a
            href="#contact"
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
            Get Free Consultation
          </a>
          <a
            href="#services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'transparent',
              color: '#ffffff',
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: 2,
              textTransform: 'uppercase',
              padding: '15px 35px',
              border: '1px solid rgba(255,255,255,0.3)',
              textDecoration: 'none',
              transition: 'border-color 0.3s, color 0.3s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = '#ffffff'; }}
          >
            Our Services
          </a>
        </motion.div>
      </div>

      {/* Slide indicators */}
      <div style={{
        position: 'absolute',
        bottom: 40,
        right: 64,
        zIndex: 10,
        display: 'flex',
        gap: 10,
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            style={{
              width: i === current ? 40 : 20,
              height: 2,
              background: i === current ? 'var(--gold)' : 'rgba(255,255,255,0.3)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.4s',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Stats bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        zIndex: 10,
        display: 'flex',
        gap: 0,
      }} className="hero-stats">
        {[
          { n: '10+', label: 'Years Experience' },
          { n: '500+', label: 'Properties Handled' },
          { n: '98%', label: 'Client Satisfaction' },
        ].map((s, i) => (
          <div
            key={i}
            style={{
              padding: '20px 32px',
              background: i % 2 === 0 ? 'rgba(10,22,40,0.9)' : 'rgba(201,168,76,0.9)',
              borderTop: '2px solid ' + (i % 2 === 0 ? 'var(--gold)' : 'transparent'),
              textAlign: 'center',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 28,
              fontWeight: 700,
              color: i % 2 === 0 ? 'var(--gold)' : 'var(--navy)',
              lineHeight: 1,
            }}>{s.n}</div>
            <div style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 10,
              letterSpacing: 1.5,
              textTransform: 'uppercase',
              color: i % 2 === 0 ? 'rgba(255,255,255,0.6)' : 'rgba(10,22,40,0.7)',
              marginTop: 4,
            }}>{s.label}</div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          #home > div[style*="padding"] {
            padding: 0 24px 120px !important;
          }
          .hero-stats {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
