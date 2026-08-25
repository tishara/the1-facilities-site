import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { PageFooter } from '../components/Footer';
import { useHover } from '../hooks/useHover';
import { ROUTES } from '../routes';

const TAGS = ['Hospitals', 'Clinics', 'Medical Offices', 'Specialty Care'];
const TAGS_AR = 'المستشفيات • العيادات • المكاتب الطبية • الرعاية المتخصصة';

const DELIVERABLES = [
  { num: '01', title: 'Infection Prevention & Cleaning', titleAr: null, body: 'Hospital-grade disinfection protocols across patient rooms, waiting areas and clinical spaces.', bodyAr: 'بروتوكولات تعقيم بمستوى المستشفيات في غرف المرضى ومناطق الانتظار والمساحات الطبية.' },
  { num: '02', title: 'Compliance-Ready Records', titleAr: null, body: 'Digital inspections and reporting that support regulatory and accreditation reviews.', bodyAr: 'فحوصات وتقارير رقمية تدعم مراجعات الجهات التنظيمية وهيئات الاعتماد.' },
  { num: '03', title: 'Round-The-Clock Coverage', titleAr: null, body: 'Teams ready for the pace of a medical environment, any hour, any shift.', bodyAr: 'فرق جاهزة لوتيرة البيئة الطبية في أي ساعة وأي دوام.' },
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

function SectorHealthcareDesktop() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: '#111412', overflowX: 'auto', minWidth: 1360 }}>
      <Header activeIndex={3} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '60px 64px 100px', clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)' }}>
        <img src="/assets/sectors-healthcare.jpg" alt="Healthcare facility corridor" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.65) 55%, rgba(6,10,8,0.4) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 760, animation: 'std-rise 0.8s ease-out both' }}>
          <div style={{ fontSize: 12.5, color: '#C9C9C9', letterSpacing: 1, marginBottom: 22 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / <Link to={ROUTES.sectors} style={{ color: '#C9C9C9' }}>Sectors</Link> / Healthcare &amp; Medical</div>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 16 }}>SECTORS WE SERVE</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 46, fontWeight: 800, color: '#fff', lineHeight: 1.1, margin: '0 0 14px', textTransform: 'uppercase' }}>Healthcare &amp; Medical Facilities</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 24, fontWeight: 600, color: '#8BC53F', marginBottom: 24 }}>مرافق الرعاية الصحية والمنشآت الطبية</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
            {TAGS.map((t) => (
              <span key={t} style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontSize: 12.5, padding: '8px 16px', borderRadius: 20 }}>{t}</span>
            ))}
          </div>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13, color: '#B9DE7C', marginTop: 12 }}>{TAGS_AR}</div>
        </div>
      </div>

      {/* WHAT WE DELIVER */}
      <div style={{ background: '#FFFFFF', padding: '90px 64px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 70, alignItems: 'center' }}>
          <div style={{ animation: 'std-rise 0.8s ease-out both' }}>
            <img src="/assets/sectors-healthcare.jpg" alt="" style={{ width: '100%', height: 400, objectFit: 'cover', display: 'block' }} />
            <div style={{ marginTop: -56, marginLeft: 24, position: 'relative', background: '#111412', color: '#fff', display: 'inline-flex', flexDirection: 'column', padding: '20px 26px' }}>
              <span style={{ fontFamily: "'Archivo',sans-serif", fontSize: 30, fontWeight: 800, color: '#8BC53F' }}>24/7</span>
              <span style={{ fontSize: 11.5, letterSpacing: 1, color: '#C9C9C9' }}>COVERAGE-READY TEAMS</span>
            </div>
          </div>
          <div style={{ animation: 'std-rise 0.7s ease-out 0.1s both' }}>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 28 }}>WHAT WE DELIVER</div>
            {DELIVERABLES.map((d, i) => (
              <div key={d.num} style={{ borderTop: '1px solid #E4E2DC', borderBottom: i === DELIVERABLES.length - 1 ? '1px solid #E4E2DC' : undefined, padding: '20px 0' }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 14 }}>
                  <span style={{ fontFamily: "'Archivo',sans-serif", fontSize: 14, fontWeight: 800, color: '#8BC53F' }}>{d.num}</span>
                  <span style={{ fontSize: 15, color: '#111412', fontWeight: 600 }}>{d.title}</span>
                </div>
                <p style={{ fontSize: 13.5, color: '#3C403D', lineHeight: 1.7, margin: '8px 0 0 28px' }}>{d.body}</p>
                <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13, color: '#6E9E2E', margin: '8px 0 0 28px' }}>{d.bodyAr}</div>
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
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 28, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase', margin: '0 0 26px' }}>Ready to bring one accountable team to your facility?</h2>
        <CtaButton />
      </div>

      <PageFooter />
    </div>
  );
}

function SectorHealthcareMobile() {
  return (
    <div style={{ width: '100%', maxWidth: 560, margin: '0 auto', background: '#FFFFFF', fontFamily: "'Poppins',sans-serif", color: '#111412', overflowX: 'hidden', position: 'relative' }}>
      <Header activeIndex={3} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '44px 20px 52px', clipPath: 'polygon(0 0, 100% 0, 100% 97%, 0 100%)' }}>
        <img src="/assets/sectors-healthcare.jpg" alt="Healthcare facility corridor" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.68) 55%, rgba(6,10,8,0.45) 100%)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 11.5, color: '#C9C9C9', letterSpacing: 0.5, marginBottom: 16 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / <Link to={ROUTES.sectors} style={{ color: '#C9C9C9' }}>Sectors</Link> / Healthcare</div>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 12 }}>SECTORS WE SERVE</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 28, fontWeight: 800, color: '#fff', lineHeight: 1.15, margin: '0 0 12px', textTransform: 'uppercase' }}>Healthcare &amp; Medical Facilities</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 18, fontWeight: 600, color: '#8BC53F', marginBottom: 18 }}>مرافق الرعاية الصحية والمنشآت الطبية</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {TAGS.map((t) => (
              <span key={t} style={{ border: '1px solid rgba(255,255,255,0.3)', color: '#fff', fontSize: 11.5, padding: '7px 14px', borderRadius: 20 }}>{t}</span>
            ))}
          </div>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 12, color: '#B9DE7C', marginTop: 12 }}>{TAGS_AR}</div>
        </div>
      </div>

      {/* WHAT WE DELIVER */}
      <div style={{ background: '#FFFFFF', padding: '44px 20px' }}>
        <img src="/assets/sectors-healthcare.jpg" alt="" style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block', marginBottom: 24 }} />
        <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 20, textAlign: 'center' }}>WHAT WE DELIVER</div>
        {DELIVERABLES.map((d, i) => (
          <div key={d.num} style={{ borderTop: '1px solid #E4E2DC', borderBottom: i === DELIVERABLES.length - 1 ? '1px solid #E4E2DC' : undefined, padding: '18px 0' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
              <span style={{ fontFamily: "'Archivo',sans-serif", fontSize: 13, fontWeight: 800, color: '#8BC53F' }}>{d.num}</span>
              <span style={{ fontSize: 14, color: '#111412', fontWeight: 600 }}>{d.title}</span>
            </div>
            <p style={{ fontSize: 13, color: '#3C403D', lineHeight: 1.7, margin: '8px 0 0 25px' }}>{d.body}</p>
            <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 12, color: '#6E9E2E', margin: '8px 0 0 25px' }}>{d.bodyAr}</div>
          </div>
        ))}
      </div>

      {/* BAND */}
      <div style={{ background: '#8BC53F', padding: '32px 20px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: 0.5, color: '#111412', textTransform: 'uppercase', marginBottom: 8, lineHeight: 1.4 }}>Service Plans Tailored To Each Sector's Needs</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13, fontWeight: 600, color: '#111412' }}>خطط خدمة مصممة وفق احتياجات كل قطاع</div>
      </div>

      {/* CTA */}
      <div style={{ background: '#2A2E2A', padding: '52px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 20, fontWeight: 700, color: '#fff', letterSpacing: 0.3, textTransform: 'uppercase', margin: '0 0 22px', lineHeight: 1.35 }}>Ready to bring one accountable team to your facility?</h2>
        <CtaButton mobile />
      </div>

      <PageFooter />
    </div>
  );
}

export default function SectorHealthcare() {
  return (
    <>
      <div className="desktop-only"><SectorHealthcareDesktop /></div>
      <div className="mobile-only"><SectorHealthcareMobile /></div>
    </>
  );
}
