import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Ruler, Calculator, Star, ChevronRight } from 'lucide-react';

const teams = [
  {
    icon: Star,
    name: 'Team of Valuers',
    role: 'Property Valuation Specialists',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
    description:
      'Our certified valuers determine the fair and accurate market value of any property at any given point in time. Valuation reports presented by this team help clients make informed financial, legal, and investment decisions.',
    expertise: ['Market Value Assessments', 'Financial Reporting', 'Legal Valuation', 'Insurance Valuations', 'Investment Appraisals'],
  },
  {
    icon: Ruler,
    name: 'Team of Land Surveyors',
    role: 'Boundary & Topographic Experts',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    description:
      'Our land surveyors determine and document property boundaries, topography — including land features and elevations — and other site details using fieldwork, historical research, legal records, and advanced technology. We ensure accurate descriptions that prevent disputes and support safe, legal development.',
    expertise: ['Boundary Determination', 'Topographic Surveys', 'Site Documentation', 'Historical Research', 'Dispute Prevention'],
  },
  {
    icon: Calculator,
    name: 'Team of Quantity Surveyors',
    role: 'Cost & Contract Management',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80',
    description:
      'This team controls the financial and contractual aspects of construction projects — from initial feasibility through to completion and final account settlement. They provide accurate cost information, minimize financial risks, and help balance quality, cost, and timelines. We serve developers, property owners, and contractors.',
    expertise: ['Feasibility Studies', 'Cost Planning', 'Contract Administration', 'Risk Management', 'Final Account Settlement'],
  },
];

function TeamCard({ team, index }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const Icon = team.icon;
  const isMiddle = index === 1;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'relative',
        background: isMiddle ? 'var(--navy)' : '#ffffff',
        border: '1px solid',
        borderColor: isMiddle ? 'transparent' : 'rgba(10,22,40,0.08)',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: isMiddle ? '0 32px 80px rgba(10,22,40,0.25)' : '0 4px 30px rgba(10,22,40,0.06)',
        transform: isMiddle ? 'translateY(-16px)' : 'translateY(0)',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: 240, overflow: 'hidden' }}>
        <img
          src={team.image}
          alt={team.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
          onMouseEnter={e => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={e => e.target.style.transform = 'scale(1)'}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: isMiddle
            ? 'linear-gradient(to bottom, rgba(10,22,40,0.2), rgba(10,22,40,0.6))'
            : 'linear-gradient(to bottom, transparent, rgba(10,22,40,0.4))',
        }} />

        {/* Icon badge */}
        <div style={{
          position: 'absolute',
          bottom: -20,
          left: 32,
          width: 48,
          height: 48,
          background: 'var(--gold)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))',
          zIndex: 2,
        }}>
          <Icon size={20} color="var(--navy)" />
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '44px 32px 40px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 10,
          fontWeight: 600,
          letterSpacing: 3,
          textTransform: 'uppercase',
          color: 'var(--gold)',
          marginBottom: 8,
        }}>
          {team.role}
        </div>

        <h3 style={{
          fontFamily: 'Cormorant Garamond, serif',
          fontSize: 26,
          fontWeight: 700,
          color: isMiddle ? '#ffffff' : 'var(--navy)',
          marginBottom: 16,
          lineHeight: 1.2,
        }}>
          {team.name}
        </h3>

        <div style={{ height: 1, background: 'rgba(201,168,76,0.2)', marginBottom: 20 }} />

        <p style={{
          fontFamily: 'DM Sans, sans-serif',
          fontSize: 14,
          color: isMiddle ? 'rgba(255,255,255,0.65)' : 'var(--text-muted)',
          lineHeight: 1.85,
          marginBottom: 28,
          flex: 1,
        }}>
          {team.description}
        </p>

        {/* Expertise list */}
        <div>
          <div style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: 10,
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: 14,
          }}>
            Areas of Expertise
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {team.expertise.map((e, i) => (
              <li key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                fontFamily: 'DM Sans, sans-serif',
                fontSize: 13,
                color: isMiddle ? 'rgba(255,255,255,0.7)' : 'var(--text-muted)',
              }}>
                <ChevronRight size={12} color="var(--gold)" style={{ flexShrink: 0 }} />
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Gold top line for middle card */}
      {isMiddle && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: 'var(--gold)',
        }} />
      )}
    </motion.div>
  );
}

export default function Teams() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="teams"
      style={{
        padding: '120px 0 160px',
        background: 'var(--navy-mid)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: -200,
        right: -200,
        width: 600,
        height: 600,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: -100,
        left: -100,
        width: 400,
        height: 400,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,168,76,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 64px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div ref={ref} style={{ textAlign: 'center', marginBottom: 80 }}>
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
            Expert Professionals
            <span style={{ display: 'block', width: 24, height: 1, background: 'var(--gold)' }} />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(38px, 5vw, 58px)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.1,
              maxWidth: 600,
              margin: '0 auto 24px',
            }}
          >
            Our Specialist Teams at Your Service
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontSize: 15,
              color: 'rgba(255,255,255,0.55)',
              lineHeight: 1.8,
              maxWidth: 520,
              margin: '0 auto',
            }}
          >
            Three dedicated teams of licensed professionals working together to provide you with accurate, reliable, and legally sound property expertise.
          </motion.p>
        </div>

        {/* Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 28,
          alignItems: 'start',
        }}>
          {teams.map((t, i) => (
            <TeamCard key={i} team={t} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #teams > div { padding: 0 24px !important; }
          #teams { padding: 80px 0 100px !important; }
          #teams > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
          #teams > div > div:last-child > div:nth-child(2) {
            transform: translateY(0) !important;
          }
        }
      `}</style>
    </section>
  );
}
