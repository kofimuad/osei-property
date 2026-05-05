import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Teams', href: '#teams' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'services', 'teams', 'about', 'contact'];
    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight * 0.4;
      let current = 'home';
      sectionIds.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= mid) current = id;
      });
      setActiveSection(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '14px 48px' : '24px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled
            ? 'rgba(10, 22, 40, 0.97)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.15)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <span style={{
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 22,
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: 1,
            lineHeight: 1,
          }}>
            OSEI
          </span>
          <span style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 9,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: 'var(--gold)',
          }}>
            Property Solutions
          </span>
        </div>

        {/* Desktop links */}
        <div style={{ display: 'flex', gap: 36, alignItems: 'center' }} className="nav-links">
          {navLinks.map((link) => {
            const isActive = link.href === '#' + activeSection;
            return (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 12,
                  fontWeight: isActive ? 600 : 500,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  color: isActive ? 'var(--gold)' : 'rgba(255,255,255,0.75)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  position: 'relative',
                  paddingBottom: 4,
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                onMouseLeave={e => e.currentTarget.style.color = isActive ? 'var(--gold)' : 'rgba(255,255,255,0.75)'}
              >
                {link.label}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 1,
                    background: 'var(--gold)',
                  }} />
                )}
              </a>
            );
          })}
        </div>

        {/* CTA */}
        <a
          href="tel:+233000000000"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            background: 'var(--gold)',
            color: 'var(--navy)',
            fontFamily: 'DM Sans, sans-serif',
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: 1.5,
            textTransform: 'uppercase',
            padding: '10px 22px',
            textDecoration: 'none',
            transition: 'background 0.3s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'var(--gold-light)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--gold)'}
          className="nav-cta"
        >
          <Phone size={13} />
          Call Us
        </a>

        {/* Mobile menu btn */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#fff',
            cursor: 'pointer',
          }}
          className="mobile-menu-btn"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'var(--navy)',
              zIndex: 999,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 40,
            }}
          >
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                position: 'absolute',
                top: 24,
                right: 24,
                background: 'none',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
              }}
            >
              <X size={28} />
            </button>

            <div style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 26,
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: 20,
            }}>
              OSEI <span style={{ color: 'var(--gold)' }}>Property Solutions</span>
            </div>

            {navLinks.map((link, i) => {
              const isActive = link.href === '#' + activeSection;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    fontSize: 36,
                    fontWeight: 600,
                    color: isActive ? 'var(--gold)' : 'rgba(255,255,255,0.8)',
                    textDecoration: 'none',
                    letterSpacing: 2,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--gold)'}
                  onMouseLeave={e => e.currentTarget.style.color = isActive ? 'var(--gold)' : 'rgba(255,255,255,0.8)'}
                >
                  {link.label}
                </motion.a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .nav-links, .nav-cta { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          nav { padding: 18px 24px !important; }
        }
      `}</style>
    </>
  );
}
