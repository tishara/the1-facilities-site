import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { PageFooter } from '../components/Footer';
import { useHover } from '../hooks/useHover';
import { ROUTES } from '../routes';

const TAGS = ['K-12 Schools', 'Universities', 'Commercial', 'Mixed-Use'];
const TAGS_AR = 'مدارس من الروضة حتى الثانوية • الجامعات • التجاري • متعدد الاستخدام';

const SERVICES = [
  { num: '01', title: 'Daily Campus Care', titleAr: 'العناية اليومية بالحرم', body: 'Classrooms, corridors, restrooms, offices, and shared spaces.', bodyAr: 'الفصول والممرات ودورات المياه والمكاتب والمساحات المشتركة.' },
  { num: '02', title: 'Specialty Floor Care', titleAr: 'العناية المتخصصة بالأرضيات', body: 'Scrubbing, stripping, waxing, and scheduled restorative care.', bodyAr: 'الغسيل العميق وإزالة الطبقات والتشميع والعناية الدورية.' },
  { num: '03', title: 'Measurable Quality', titleAr: 'جودة قابلة للقياس', body: 'Digital inspections, transparent reporting, and rapid follow-up.', bodyAr: 'فحوصات رقمية وتقارير شفافة ومتابعة سريعة.' },
];

function CtaButton({ mobile = false }: { mobile?: boolean }) {
  const { onMouseEnter, onMouseLeave, mergeStyle } = useHover();
  const base: React.CSSProperties = mobile
    ? { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#8BC53F', color: '#111412', padding: '15px 26px', fontWeight: 600, fontSize: 14, transition: 'gap 0.25s ease, background 0.25s ease' }
    : { display: 'inline-flex', alignItems: 'center', gap: 10, background: '#8BC53F', color: '#111412', padding: '16px 32px', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 14, transition: 'background 0.25s ease' };
  const hoverStyle: React.CSSProperties = mobile ? { gap: 14, background: '#9ED84A' } : { background: '#9ED84A' };
  return (
    <Link to={ROUTES.contact} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={mergeStyle(base, hoverStyle)}>
      {mobile ? <>Request A Proposal <span>→</span></> : <>Request A Proposal &nbsp;→</>}
    </Link>
  );
}

function SectorEducationDesktop() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: '#111412', overflowX: 'auto', minWidth: 1360 }}>
      <Header activeIndex={3} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '60px 64px 100px', clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)' }}>
        <img src="/assets/sectors-education.jpg" alt="Uniformed staff cleaning a school corridor" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.65) 55%, rgba(6,10,8,0.4) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 760, animation: 'std-rise 0.8s ease-out both' }}>
          <div style={{ fontSize: 12.5, color: '#C9C9C9', letterSpacing: 1, marginBottom: 22 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / <Link to={ROUTES.sectors} style={{ color: '#C9C9C9' }}>Sectors</Link> / Schools &amp; Universities</div>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 16 }}>SECTORS WE SERVE</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 46, fontWeight: 800, color: '#fff', lineHeight: 1.1, margin: '0 0 14px', textTransform: 'uppercase' }}>Clean, Safe Spaces Built For Learning.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 24, fontWeight: 600, color: '#8BC53F', marginBottom: 24 }}>بيئات نظيفة وآمنة تدعم التعلّم.</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {TAGS.map((t) => (
              <span key={t} style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontSize: 12.5, padding: '8px 16px', borderRadius: 20 }}>{t}</span>
            ))}
          </div>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13, color: '#B9DE7C', marginTop: 12 }}>{TAGS_AR}</div>
        </div>
      </div>

      {/* EDUCATION FACILITY SERVICES */}
      <div style={{ background: '#FFFFFF', padding: '90px 64px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 50 }}>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 12 }}>EDUCATION FACILITY SERVICES</div>
            <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 34, fontWeight: 800, margin: 0, color: '#111412' }}>حلول المرافق التعليمية</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {SERVICES.map((s) => (
              <div key={s.num} style={{ border: '1px solid #E4E2DC', borderRadius: 10, padding: '30px 36px', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 24, alignItems: 'start' }}>
                <span style={{ fontFamily: "'Archivo',sans-serif", fontSize: 22, fontWeight: 800, color: '#8BC53F' }}>{s.num}</span>
                <div>
                  <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 17, fontWeight: 600, marginBottom: 6 }}>{s.title}</div>
                  <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 14, fontWeight: 600, color: '#6E9E2E', marginBottom: 10 }}>{s.titleAr}</div>
                  <p style={{ fontSize: 14, color: '#3C403D', lineHeight: 1.7, margin: '0 0 6px' }}>{s.body}</p>
                  <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13, color: '#6E9E2E', lineHeight: 1.9, margin: 0 }}>{s.bodyAr}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BAND */}
      <div style={{ background: '#8BC53F', padding: '44px 64px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 16, fontWeight: 700, letterSpacing: 1, color: '#111412', textTransform: 'uppercase', marginBottom: 8 }}>Service Plans Tailored To Each Sector's Needs</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 15, fontWeight: 600, color: '#111412' }}>خطط خدمة مصممة وفق احتياجات كل قطاع</div>
      </div>

      {/* CTA */}
      <div style={{ background: '#2A2E2A', padding: '90px 64px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 28, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase', margin: '0 0 26px' }}>Ready to bring one accountable team to your campus?</h2>
        <CtaButton />
      </div>

      <PageFooter />
    </div>
  );
}

function SectorEducationMobile() {
  return (
    <div style={{ width: '100%', maxWidth: 560, margin: '0 auto', background: '#FFFFFF', fontFamily: "'Poppins',sans-serif", color: '#111412', overflowX: 'hidden', position: 'relative' }}>
      <Header activeIndex={3} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '44px 20px 52px', clipPath: 'polygon(0 0, 100% 0, 100% 97%, 0 100%)' }}>
        <img src="/assets/sectors-education.jpg" alt="Uniformed staff cleaning a school corridor" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.68) 55%, rgba(6,10,8,0.45) 100%)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 11.5, color: '#C9C9C9', letterSpacing: 0.5, marginBottom: 16 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / <Link to={ROUTES.sectors} style={{ color: '#C9C9C9' }}>Sectors</Link> / Education</div>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 12 }}>SECTORS WE SERVE</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 26, fontWeight: 800, color: '#fff', lineHeight: 1.2, margin: '0 0 12px', textTransform: 'uppercase' }}>Clean, Safe Spaces Built For Learning.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 18, fontWeight: 600, color: '#8BC53F', marginBottom: 18 }}>بيئات نظيفة وآمنة تدعم التعلّم.</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {TAGS.map((t) => (
              <span key={t} style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontSize: 11.5, padding: '7px 14px', borderRadius: 20 }}>{t}</span>
            ))}
          </div>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 12, color: '#B9DE7C', marginTop: 12 }}>{TAGS_AR}</div>
        </div>
      </div>

      {/* EDUCATION FACILITY SERVICES */}
      <div style={{ background: '#FFFFFF', padding: '44px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 10 }}>EDUCATION FACILITY SERVICES</div>
          <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 24, fontWeight: 800, margin: 0, color: '#111412' }}>حلول المرافق التعليمية</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {SERVICES.map((s) => (
            <div key={s.num} style={{ border: '1px solid #E4E2DC', borderRadius: 10, padding: '22px 20px' }}>
              <span style={{ fontFamily: "'Archivo',sans-serif", fontSize: 18, fontWeight: 800, color: '#8BC53F' }}>{s.num}</span>
              <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 15, fontWeight: 600, margin: '8px 0 4px' }}>{s.title}</div>
              <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13, fontWeight: 600, color: '#6E9E2E', marginBottom: 10 }}>{s.titleAr}</div>
              <p style={{ fontSize: 13, color: '#3C403D', lineHeight: 1.7, margin: '0 0 6px' }}>{s.body}</p>
              <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 12, color: '#6E9E2E', lineHeight: 1.9, margin: 0 }}>{s.bodyAr}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BAND */}
      <div style={{ background: '#8BC53F', padding: '32px 20px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: 0.5, color: '#111412', textTransform: 'uppercase', marginBottom: 8, lineHeight: 1.4 }}>Service Plans Tailored To Each Sector's Needs</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13, fontWeight: 600, color: '#111412' }}>خطط خدمة مصممة وفق احتياجات كل قطاع</div>
      </div>

      {/* CTA */}
      <div style={{ background: '#2A2E2A', padding: '52px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 19, fontWeight: 700, color: '#fff', letterSpacing: 0.3, textTransform: 'uppercase', margin: '0 0 22px', lineHeight: 1.35 }}>Ready to bring one accountable team to your campus?</h2>
        <CtaButton mobile />
      </div>

      <PageFooter />
    </div>
  );
}

export default function SectorEducation() {
  return (
    <>
      <div className="desktop-only"><SectorEducationDesktop /></div>
      <div className="mobile-only"><SectorEducationMobile /></div>
    </>
  );
}
