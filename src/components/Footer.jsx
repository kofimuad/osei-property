import React from 'react';
import { Phone, Mail, MapPin, Share2, MessageCircle, Globe, Link, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Our Teams', href: '#teams' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  'Residential & Commercial Brokerage',
  'Property Management & Leasing',
  'Investment Consulting',
  'Property Valuation',
  'Property Registration',
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: '#060f1e', borderTop: '1px solid rgba(201,168,76,0.15)' }}>
      {/* Main footer */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '72px 64px 48px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1.2fr',
          gap: 48,
          marginBottom: 56,
        }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: 24 }}>
              <div style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 28,
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: 1,
                lineHeight: 1,
              }}>OSEI</div>
              <div style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 9,
                fontWeight: 600,
                letterSpacing: 4,
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginTop: 4,
              }}>Property Solutions</div>
            </div>

            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 13,
              color: 'rgba(255,255,255,0.45)',
              lineHeight: 1.85,
              marginBottom: 28,
              maxWidth: 280,
            }}>
              Ghana's trusted partner for real estate brokerage, valuation, land surveying, and property registration. Professional. Precise. Reliable.
            </p>

            {/* Socials */}
            <div style={{ display: 'flex', gap: 12 }}>
              {[Share2, MessageCircle, Globe, Link].map((Icon, i) => (
                <button
                  key={i}
                  type="button"
                  style={{
                    width: 36,
                    height: 36,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.1)',
                    background: 'transparent',
                    color: 'rgba(255,255,255,0.4)',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = 'var(--gold)';
                    e.currentTarget.style.color = 'var(--gold)';
                    e.currentTarget.style.background = 'rgba(201,168,76,0.1)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <Icon size={15} />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: 24,
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {quickLinks.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.href}
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 13,
                      color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none',
                      transition: 'color 0.2s, padding-left 0.2s',
                      display: 'inline-block',
                    }}
                    onMouseEnter={e => { e.target.style.color = '#ffffff'; e.target.style.paddingLeft = '6px'; }}
                    onMouseLeave={e => { e.target.style.color = 'rgba(255,255,255,0.5)'; e.target.style.paddingLeft = '0'; }}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: 24,
            }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 }}>
              {serviceLinks.map((s, i) => (
                <li key={i}>
                  <a
                    href="#services"
                    style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 13,
                      color: 'rgba(255,255,255,0.5)',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                    }}
                    onMouseEnter={e => e.currentTarget.style.color = '#ffffff'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  >
                    <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0 }} />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: 24,
            }}>
              Contact Info
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              {[
                { icon: Phone, text: '+233 (0) 00 000 0000', href: 'tel:+233000000000' },
                { icon: Mail, text: 'info@oseiproperty.com', href: 'mailto:info@oseiproperty.com' },
                { icon: MapPin, text: 'Accra / Kumasi, Ghana', href: '#' },
              ].map((c, i) => {
                const Icon = c.icon;
                return (
                  <a
                    key={i}
                    href={c.href}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 12,
                      textDecoration: 'none',
                    }}
                  >
                    <Icon size={14} color="var(--gold)" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 13,
                      color: 'rgba(255,255,255,0.5)',
                      lineHeight: 1.6,
                      transition: 'color 0.2s',
                    }}
                      onMouseEnter={e => e.target.style.color = '#ffffff'}
                      onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.5)'}
                    >
                      {c.text}
                    </span>
                  </a>
                );
              })}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              style={{
                marginTop: 28,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: 'rgba(201,168,76,0.1)',
                border: '1px solid rgba(201,168,76,0.3)',
                color: 'var(--gold)',
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: 2,
                textTransform: 'uppercase',
                padding: '12px 20px',
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.color = 'var(--navy)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)'; e.currentTarget.style.color = 'var(--gold)'; }}
            >
              Free Consultation <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: 28,
          borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 12,
        }}>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 12,
            color: 'rgba(255,255,255,0.3)',
          }}>
            © {year} Osei Property Solutions. All rights reserved.
          </p>
          <p style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 12,
            color: 'rgba(255,255,255,0.3)',
          }}>
            Licensed Real Estate Professionals · Ghana
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer > div {
            padding: 48px 24px 32px !important;
          }
          footer > div > div:first-child {
            grid-template-columns: 1fr 1fr !important;
            gap: 36px !important;
          }
        }
        @media (max-width: 600px) {
          footer > div > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
