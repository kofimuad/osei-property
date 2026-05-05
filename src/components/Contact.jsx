import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const services = [
  'Residential & Commercial Brokerage',
  'Property Management & Leasing',
  'Investment Consulting & Market Analysis',
  'Property Valuation & Pricing Strategy',
  'Property Registration (Title & Deed)',
  'Other / General Enquiry',
];

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = (e) => {
    setFormData(p => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.12)',
    padding: '14px 18px',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 14,
    color: '#ffffff',
    outline: 'none',
    transition: 'border-color 0.3s',
    borderRadius: 0,
  };

  const labelStyle = {
    display: 'block',
    fontFamily: 'DM Sans, sans-serif',
    fontSize: 10,
    fontWeight: 600,
    letterSpacing: 2,
    textTransform: 'uppercase',
    color: 'var(--gold)',
    marginBottom: 8,
  };

  return (
    <section
      id="contact"
      style={{
        background: 'var(--navy-mid)',
        padding: '120px 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background accent */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 3,
        background: 'linear-gradient(90deg, transparent, var(--gold) 50%, transparent)',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(201,168,76,0.05) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />

      <div ref={ref} style={{ maxWidth: 1280, margin: '0 auto', padding: '0 64px', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.5fr',
          gap: 80,
        }}>
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div style={{
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
            }}>
              <span style={{ display: 'block', width: 24, height: 1, background: 'var(--gold)' }} />
              Get In Touch
            </div>

            <h2 style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(36px, 4vw, 52px)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: 20,
            }}>
              Let's Discuss Your Property Goals
            </h2>

            <div style={{ height: 2, width: 60, background: 'var(--gold)', marginBottom: 24 }} />

            <p style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 15,
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.9,
              marginBottom: 48,
            }}>
              Our team is ready to answer your questions, provide expert advice, and guide you through any property transaction or assessment.
            </p>

            {/* Contact details */}
            {[
              { icon: Phone, label: 'Call Us', value: '+233 (0) 00 000 0000', href: 'tel:+233000000000' },
              { icon: Mail, label: 'Email Us', value: 'info@oseiproperty.com', href: 'mailto:info@oseiproperty.com' },
              { icon: MapPin, label: 'Our Location', value: 'Accra / Kumasi, Ghana', href: '#' },
            ].map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.a
                  key={i}
                  href={c.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 20,
                    padding: '20px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                    textDecoration: 'none',
                    transition: 'padding-left 0.3s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.paddingLeft = '8px'}
                  onMouseLeave={e => e.currentTarget.style.paddingLeft = '0'}
                >
                  <div style={{
                    width: 44,
                    height: 44,
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Icon size={18} color="var(--gold)" />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: 2,
                      textTransform: 'uppercase',
                      color: 'var(--gold)',
                      marginBottom: 2,
                    }}>{c.label}</div>
                    <div style={{
                      fontFamily: 'DM Sans, sans-serif',
                      fontSize: 15,
                      color: 'rgba(255,255,255,0.8)',
                    }}>{c.value}</div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '48px 40px',
            }}
          >
            {status === 'success' ? (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
                minHeight: 400,
                textAlign: 'center',
                gap: 20,
              }}>
                <CheckCircle size={64} color="var(--gold)" />
                <h3 style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: 34,
                  fontWeight: 700,
                  color: '#ffffff',
                }}>
                  Message Received!
                </h3>
                <p style={{
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: 15,
                  color: 'rgba(255,255,255,0.6)',
                  lineHeight: 1.8,
                  maxWidth: 340,
                }}>
                  Thank you for reaching out. A member of our team will be in touch with you shortly.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  style={{
                    marginTop: 10,
                    background: 'var(--gold)',
                    color: 'var(--navy)',
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 600,
                    fontSize: 12,
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                    padding: '14px 32px',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Mensah"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone Number</label>
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+233 XX XXX XXXX"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    style={inputStyle}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Service Interested In</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                  >
                    <option value="" style={{ background: 'var(--navy)' }}>Select a service...</option>
                    {services.map(s => (
                      <option key={s} value={s} style={{ background: 'var(--navy)' }}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your property needs..."
                    style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                    onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
                  />
                </div>

                {status === 'error' && (
                  <div style={{
                    background: 'rgba(220,50,50,0.1)',
                    border: '1px solid rgba(220,50,50,0.3)',
                    padding: '12px 16px',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: 13,
                    color: '#ff6b6b',
                  }}>
                    Something went wrong. Please try again or contact us directly.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 12,
                    background: status === 'loading' ? 'rgba(201,168,76,0.5)' : 'var(--gold)',
                    color: 'var(--navy)',
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 700,
                    fontSize: 13,
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                    padding: '18px 0',
                    border: 'none',
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                    transition: 'background 0.3s, transform 0.2s',
                  }}
                  onMouseEnter={e => { if (status !== 'loading') e.currentTarget.style.background = 'var(--gold-light)'; }}
                  onMouseLeave={e => { if (status !== 'loading') e.currentTarget.style.background = 'var(--gold)'; }}
                >
                  {status === 'loading' ? 'Sending...' : (
                    <><Send size={15} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #contact > div { padding: 0 24px !important; }
          #contact { padding: 80px 0 !important; }
          #contact > div > div[style*="grid-template-columns: 1fr 1.5fr"] {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
          form > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
