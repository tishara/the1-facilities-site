import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { PageFooter } from '../components/Footer';
import { useHover } from '../hooks/useHover';
import { ROUTES } from '../routes';

const TEAM_GROUPS = [
  {
    title: 'Licensed Engineers', titleAr: 'مهندسون مرخّصون',
    body: 'Certified professionals responsible for your building’s critical mechanical systems.',
    bodyAr: 'محترفون معتمدون مسؤولون عن الأنظمة الميكانيكية الحيوية في مبناك.',
    roles: ['Boiler Operators', 'Stationary Engineers', 'Building Engineers'],
    icon: <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="#B9DE7C" strokeWidth={1.6}><path d="M16 4l3 5.5 6-1.5-1.5 6L29 17l-5.5 3 1.5 6-6-1.5L16 30l-3-5.5-6 1.5 1.5-6L3 17l5.5-3-1.5-6 6 1.5z" strokeLinejoin="round" /><circle cx={16} cy={17} r={4} /></svg>,
  },
  {
    title: 'Skilled Trades On Site', titleAr: 'حرفيون مهرة في الموقع',
    body: 'Hands-on technicians for every trade your facility relies on, day to day.',
    bodyAr: 'فنيون ميدانيون لكل حرفة يعتمد عليها مبناك يومياً.',
    roles: ['HVAC Technicians', 'Electricians', 'Plumbers', 'General Maintenance Technicians'],
    icon: <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="#B9DE7C" strokeWidth={1.6}><path d="M23 9a5.5 5.5 0 01-7.1 5.3L8 22.2l-2.2-2.2 7.9-7.9A5.5 5.5 0 0119 4.5l-3.5 3.5 2 2L21 6.5A5.5 5.5 0 0123 9z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
  {
    title: 'Proactive & Responsive Coverage', titleAr: 'تغطية استباقية وسريعة الاستجابة',
    body: 'Scheduled care and rapid response, so systems keep running without surprises.',
    bodyAr: 'عناية دورية واستجابة سريعة تضمن استمرار عمل الأنظمة دون مفاجآت.',
    roles: ['Preventive Maintenance', 'Mechanical Systems Support', 'Emergency Maintenance'],
    icon: <svg width="26" height="26" viewBox="0 0 32 32" fill="none" stroke="#B9DE7C" strokeWidth={1.6}><circle cx={16} cy={17} r={10} /><path d="M16 11v6l5 3" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 3h8" strokeLinecap="round" /></svg>,
  },
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

function RoleChip({ label, mobile = false }: { label: string; mobile?: boolean }) {
  return (
    <span style={{ display: 'inline-block', border: '1px solid #E4E2DC', borderRadius: 20, padding: mobile ? '6px 12px' : '7px 14px', fontSize: mobile ? 11.5 : 12.5, fontWeight: 500, color: '#3C403D' }}>
      {label}
    </span>
  );
}

function TeamGroupCard({ g, mobile = false }: { g: typeof TEAM_GROUPS[number]; mobile?: boolean }) {
  const { onMouseEnter, onMouseLeave, mergeStyle } = useHover();
  const base: React.CSSProperties = { border: '1px solid #E4E2DC', borderRadius: 10, padding: mobile ? '26px 22px' : '34px 30px', background: '#fff', transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease' };
  const hoverStyle: React.CSSProperties = { transform: 'translateY(-6px)', boxShadow: '0 16px 30px rgba(0,0,0,0.1)', borderColor: '#8BC53F' };
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={mobile ? base : mergeStyle(base, hoverStyle)}>
      <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#111412', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
        {g.icon}
      </div>
      <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: mobile ? 15.5 : 17, fontWeight: 600, marginBottom: 4 }}>{g.title}</div>
      <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: mobile ? 13 : 14, fontWeight: 600, color: '#6E9E2E', marginBottom: 12 }}>{g.titleAr}</div>
      <p style={{ fontSize: mobile ? 13 : 13.5, color: '#3C403D', lineHeight: 1.7, margin: '0 0 4px' }}>{g.body}</p>
      <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: mobile ? 11.5 : 12.5, color: '#6E9E2E', lineHeight: 1.9, margin: '0 0 18px' }}>{g.bodyAr}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
        {g.roles.map((r) => <RoleChip key={r} label={r} mobile={mobile} />)}
      </div>
    </div>
  );
}

function EngineeringMaintenanceDesktop() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: '#111412', overflowX: 'auto', minWidth: 1360 }}>
      <Header activeIndex={2} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '60px 64px 100px', clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)' }}>
        <img src="/assets/engineering-hero.jpg" alt="Uniformed engineer inspecting a rooftop HVAC unit" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.68) 55%, rgba(6,10,8,0.42) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 760, animation: 'std-rise 0.8s ease-out both' }}>
          <div style={{ fontSize: 12.5, color: '#C9C9C9', letterSpacing: 1, marginBottom: 22 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / Services / Engineering &amp; Maintenance</div>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 16 }}>ENGINEERING &amp; MAINTENANCE</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 48, fontWeight: 800, color: '#fff', lineHeight: 1.1, margin: '0 0 18px', textTransform: 'uppercase' }}>The Engineers Behind Every System.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 26, fontWeight: 600, color: '#8BC53F', marginBottom: 22 }}>المهندسون وراء كل نظام.</div>
          <p style={{ fontSize: 15, color: '#C9C9C9', lineHeight: 1.8, maxWidth: 500, margin: '0 0 8px' }}>Licensed engineers and skilled trades keeping HVAC, electrical, plumbing and mechanical systems running — with the same accountability as everything else we do.</p>
          <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13.5, color: '#B9DE7C', lineHeight: 1.9, maxWidth: 500, margin: 0 }}>فريق من المهندسين المرخّصين والفنيين المهرة يحافظون على تشغيل أنظمة التكييف والكهرباء والسباكة والأنظمة الميكانيكية، بنفس معايير المساءلة في كل ما نقدمه.</p>
        </div>
      </div>

      {/* IMAGE + BADGE */}
      <div style={{ background: '#FFFFFF', padding: '90px 64px 60px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto 60px' }}>
            <img src="/assets/engineering-detail.jpg" alt="" style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block' }} />
            <div style={{ marginTop: -56, marginLeft: 24, position: 'relative', background: '#111412', color: '#fff', display: 'inline-flex', flexDirection: 'column', padding: '20px 26px' }}>
              <span style={{ fontFamily: "'Archivo',sans-serif", fontSize: 30, fontWeight: 800, color: '#8BC53F' }}>10+</span>
              <span style={{ fontSize: 11.5, letterSpacing: 1, color: '#C9C9C9' }}>LICENSED TRADES ON CALL</span>
            </div>
          </div>

          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 50px' }}>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 12 }}>WHO'S ON YOUR TEAM</div>
            <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 32, fontWeight: 800, margin: 0, color: '#111412', textTransform: 'uppercase' }}>Every Trade, One Accountable Team.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28 }}>
            {TEAM_GROUPS.map((g) => <TeamGroupCard key={g.title} g={g} />)}
          </div>
        </div>
      </div>

      {/* BAND */}
      <div style={{ background: '#8BC53F', padding: '44px 64px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 16, fontWeight: 700, letterSpacing: 1, color: '#111412', textTransform: 'uppercase', marginBottom: 8 }}>Consistent Quality. Visible Results. One Accountable Partner.</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 15, fontWeight: 600, color: '#111412' }}>جودة ثابتة. نتائج واضحة. شريك واحد مسؤول.</div>
      </div>

      {/* CTA */}
      <div style={{ background: '#2A2E2A', padding: '90px 64px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 28, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase', margin: '0 0 26px' }}>Ready to bring licensed engineers to your facility?</h2>
        <CtaButton />
      </div>

      <PageFooter />
    </div>
  );
}

function EngineeringMaintenanceMobile() {
  return (
    <div style={{ width: '100%', maxWidth: 560, margin: '0 auto', background: '#FFFFFF', fontFamily: "'Poppins',sans-serif", color: '#111412', overflowX: 'hidden', position: 'relative' }}>
      <Header activeIndex={2} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '44px 20px 52px', clipPath: 'polygon(0 0, 100% 0, 100% 97%, 0 100%)' }}>
        <img src="/assets/engineering-hero.jpg" alt="Uniformed engineer inspecting a rooftop HVAC unit" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.68) 55%, rgba(6,10,8,0.45) 100%)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 11.5, color: '#C9C9C9', letterSpacing: 0.5, marginBottom: 16 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / Services / Engineering</div>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 12 }}>ENGINEERING &amp; MAINTENANCE</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 27, fontWeight: 800, color: '#fff', lineHeight: 1.18, margin: '0 0 14px', textTransform: 'uppercase' }}>The Engineers Behind Every System.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 18, fontWeight: 600, color: '#8BC53F', marginBottom: 16 }}>المهندسون وراء كل نظام.</div>
          <p style={{ fontSize: 13.5, color: '#C9C9C9', lineHeight: 1.8, margin: '0 0 8px' }}>Licensed engineers and skilled trades keeping HVAC, electrical, plumbing and mechanical systems running — with the same accountability as everything else we do.</p>
          <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 12, color: '#B9DE7C', lineHeight: 1.9, margin: 0 }}>فريق من المهندسين المرخّصين والفنيين المهرة يحافظون على تشغيل أنظمة التكييف والكهرباء والسباكة والأنظمة الميكانيكية.</p>
        </div>
      </div>

      {/* IMAGE + BADGE */}
      <div style={{ background: '#FFFFFF', padding: '44px 20px 0' }}>
        <img src="/assets/engineering-detail.jpg" alt="" style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} />
        <div style={{ marginTop: -36, marginLeft: 14, position: 'relative', background: '#111412', color: '#fff', display: 'inline-flex', flexDirection: 'column', padding: '14px 20px' }}>
          <span style={{ fontFamily: "'Archivo',sans-serif", fontSize: 24, fontWeight: 800, color: '#8BC53F' }}>10+</span>
          <span style={{ fontSize: 9.5, letterSpacing: 0.8, color: '#C9C9C9' }}>LICENSED TRADES ON CALL</span>
        </div>
      </div>

      {/* TEAM GROUPS */}
      <div style={{ background: '#FFFFFF', padding: '30px 20px 44px' }}>
        <div style={{ textAlign: 'center', marginBottom: 26 }}>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 10 }}>WHO'S ON YOUR TEAM</div>
          <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 22, fontWeight: 800, margin: 0, color: '#111412', textTransform: 'uppercase', lineHeight: 1.3 }}>Every Trade, One Accountable Team.</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {TEAM_GROUPS.map((g) => <TeamGroupCard key={g.title} g={g} mobile />)}
        </div>
      </div>

      {/* BAND */}
      <div style={{ background: '#8BC53F', padding: '32px 20px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: 0.5, color: '#111412', textTransform: 'uppercase', marginBottom: 8, lineHeight: 1.4 }}>Consistent Quality. Visible Results. One Accountable Partner.</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13, fontWeight: 600, color: '#111412' }}>جودة ثابتة. نتائج واضحة. شريك واحد مسؤول.</div>
      </div>

      {/* CTA */}
      <div style={{ background: '#2A2E2A', padding: '52px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 20, fontWeight: 700, color: '#fff', letterSpacing: 0.3, textTransform: 'uppercase', margin: '0 0 22px', lineHeight: 1.35 }}>Ready to bring licensed engineers to your facility?</h2>
        <CtaButton mobile />
      </div>

      <PageFooter />
    </div>
  );
}

export default function EngineeringMaintenance() {
  return (
    <>
      <div className="desktop-only"><EngineeringMaintenanceDesktop /></div>
      <div className="mobile-only"><EngineeringMaintenanceMobile /></div>
    </>
  );
}
