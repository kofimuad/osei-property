import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, TrendingUp, BarChart3, ClipboardList, FileText, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Building2,
    number: '01',
    title: 'Residential & Commercial Brokerage',
    desc: 'We connect buyers, sellers, and tenants with the right properties across Ghana. Our brokers handle every detail — from listing to closing — with expertise and discretion.',
    highlights: ['Property Search & Matching', 'Negotiation Support', 'Transaction Management'],
  },
  {
    icon: ClipboardList,
    number: '02',
    title: 'Property Management & Leasing',
    desc: 'We manage your property like it\'s our own. From tenant sourcing and screening to maintenance coordination and rent collection, we keep your investment performing.',
    highlights: ['Tenant Sourcing', 'Rent Collection', 'Maintenance Oversight'],
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'Investment Consulting & Market Analysis',
    desc: 'Data-driven insights to help you invest wisely. We analyze market trends, assess risk profiles, and identify high-yield opportunities across Ghana\'s real estate landscape.',
    highlights: ['Market Research', 'ROI Analysis', 'Portfolio Strategy'],
  },
  {
    icon: BarChart3,
    number: '04',
    title: 'Property Valuation & Pricing Strategy',
    desc: 'Accurate, credible valuations grounded in current market data. Our certified valuers produce reports trusted by banks, courts, and private investors alike.',
    highlights: ['Certified Valuations', 'Pricing Consultation', 'Financial Reporting'],
  },
  {
    icon: FileText,
    number: '05',
    title: 'Property Registration (Title & Deed)',
    desc: 'We guide you through Ghana\'s property registration process from start to finish — title searches, documentation, Lands Commission liaison, and deed registration.',
    highlights: ['Title Searches', 'Lands Commission Liaison', 'Deed Documentation'],
  },
];

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        background: hovered ? 'var(--navy)' : '#ffffff',
        border: '1px solid',
        borderColor: hovered ? 'var(--gold)' : 'rgba(10,22,40,0.08)',
        padding: '48px 40px',
        cursor: 'pointer',
        transition: 'all 0.4s ease',
        overflow: 'hidden',
        boxShadow: hovered ? '0 24px 60px rgba(10,22,40,0.15)' : '0 2px 20px rgba(10,22,40,0.05)',
        transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
      }}
    >
      {/* Number watermark */}
      <span style={{
        position: 'absolute',
        top: -10,
        right: 20,
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 100,
        fontWeight: 700,
        color: hovered ? 'rgba(201,168,76,0.08)' : 'rgba(10,22,40,0.04)',
        lineHeight: 1,
        transition: 'color 0.4s',
        userSelect: 'none',
      }}>
        {service.number}
      </span>

      {/* Icon */}
      <div style={{
        width: 52,
        height: 52,
        background: hovered ? 'var(--gold)' : 'rgba(10,22,40,0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 28,
        transition: 'background 0.4s',
        clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
      }}>
        <Icon size={22} color={hovered ? 'var(--navy)' : 'var(--navy)'} />
      </div>

      <h3 style={{
        fontFamily: 'Cormorant Garamond, serif',
        fontSize: 22,
        fontWeight: 600,
        color: hovered ? '#ffffff' : 'var(--navy)',
        lineHeight: 1.3,
        marginBottom: 16,
        transition: 'color 0.4s',
      }}>
        {service.title}
      </h3>

      <p style={{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 14,
        color: hovered ? 'rgba(255,255,255,0.65)' : 'var(--text-muted)',
        lineHeight: 1.8,
        marginBottom: 28,
        transition: 'color 0.4s',
      }}>
        {service.desc}
      </p>

      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32 }}>
        {service.highlights.map((h, i) => (
          <li key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 12,
            fontWeight: 500,
            color: hovered ? 'rgba(255,255,255,0.6)' : 'var(--text-muted)',
            letterSpacing: 0.5,
            transition: 'color 0.4s',
          }}>
            <span style={{
              width: 4,
              height: 4,
              borderRadius: '50%',
              background: 'var(--gold)',
              flexShrink: 0,
            }} />
            {h}
          </li>
        ))}
      </ul>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: 'DM Sans, sans-serif',
        fontSize: 11,
        fontWeight: 600,
        letterSpacing: 2,
        textTransform: 'uppercase',
        color: 'var(--gold)',
        transition: 'gap 0.3s',
      }}>
        Learn More
        <ArrowRight size={13} style={{ transition: 'transform 0.3s', transform: hovered ? 'translateX(6px)' : 'translateX(0)' }} />
      </div>

      {/* Bottom border accent */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        height: 2,
        width: hovered ? '100%' : '0%',
        background: 'var(--gold)',
        transition: 'width 0.4s ease',
      }} />
    </motion.div>
  );
}

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" style={{ padding: '120px 0', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 64px' }}>

        {/* Header */}
        <div ref={ref} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 72, flexWrap: 'wrap', gap: 24 }}>
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-tag"
            >
              What We Offer
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(38px, 5vw, 58px)',
                fontWeight: 700,
                color: 'var(--navy)',
                lineHeight: 1.1,
                maxWidth: 480,
              }}
            >
              Comprehensive Real Estate Services
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 15,
              color: 'var(--text-muted)',
              lineHeight: 1.8,
              maxWidth: 380,
            }}
          >
            From brokerage to valuation, we cover every dimension of real estate to help you buy, sell, invest, and register with confidence.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
        }}>
          {services.map((s, i) => (
            <ServiceCard key={i} service={s} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #services > div { padding: 0 24px !important; }
          #services { padding: 80px 0 !important; }
        }
      `}</style>
    </section>
  );
}
