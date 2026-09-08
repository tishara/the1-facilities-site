import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { PageFooter } from '../components/Footer';
import { useHover } from '../hooks/useHover';
import { ROUTES } from '../routes';

const iconProps = { width: 26, height: 26, viewBox: '0 0 32 32', fill: 'none', stroke: '#B9DE7C', strokeWidth: 1.6 } as const;

const SERVICES: { num: string; title: string; titleAr: string; body: string; bodyAr: string; icon: React.ReactNode }[] = [
  {
    num: '01', title: 'Boiler Operations', titleAr: 'تشغيل الغلايات',
    body: 'Certified operation and monitoring of boiler systems, keeping heating and hot-water supply running safely.',
    bodyAr: 'تشغيل ومراقبة معتمدة لأنظمة الغلايات لضمان تشغيل آمن لإمدادات التدفئة والمياه الساخنة.',
    icon: <svg {...iconProps}><path d="M16 4c-3 5-6 8-6 13a6 6 0 0012 0c0-2-1-3-2-4 0 2-1 3-2 3 1-4-1-6-2-12z" strokeLinejoin="round" /></svg>,
  },
  {
    num: '02', title: 'Stationary Engineering', titleAr: 'الهندسة الثابتة',
    body: "Round-the-clock oversight of your building's core mechanical plant and critical equipment.",
    bodyAr: 'إشراف مستمر على المنظومة الميكانيكية الأساسية للمبنى والمعدات الحيوية.',
    icon: <svg {...iconProps}><circle cx={16} cy={16} r={9} /><path d="M16 9v3M16 20v3M9 16h3M20 16h3" strokeLinecap="round" /><circle cx={16} cy={16} r={3} /></svg>,
  },
  {
    num: '03', title: 'HVAC Services', titleAr: 'خدمات التكييف والتهوية',
    body: 'Installation, servicing and repair of heating, ventilation and air conditioning systems.',
    bodyAr: 'تركيب وصيانة وإصلاح أنظمة التدفئة والتهوية وتكييف الهواء.',
    icon: <svg {...iconProps}><path d="M16 4v24M16 4l-4 4M16 4l4 4M6 10l20 12M6 10l1 5M6 10l5-1M26 10L6 22M26 10l-1 5M26 10l-5-1" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
  {
    num: '04', title: 'Electrical Services', titleAr: 'الخدمات الكهربائية',
    body: 'Licensed electrical maintenance, repairs and inspections that keep power systems safe and compliant.',
    bodyAr: 'صيانة وإصلاحات وفحوصات كهربائية مرخّصة تحافظ على سلامة أنظمة الطاقة.',
    icon: <svg {...iconProps}><path d="M17 3L7 18h7l-2 11 12-17h-8l1-9z" strokeLinejoin="round" /></svg>,
  },
  {
    num: '05', title: 'Plumbing Services', titleAr: 'خدمات السباكة',
    body: 'Repair and maintenance of water, drainage and fixture systems that prevent leaks and downtime.',
    bodyAr: 'إصلاح وصيانة أنظمة المياه والصرف والتجهيزات لمنع التسريبات وتعطل الخدمة.',
    icon: <svg {...iconProps}><path d="M16 6c4 5 7 9 7 13a7 7 0 01-14 0c0-4 3-8 7-13z" strokeLinejoin="round" /></svg>,
  },
  {
    num: '06', title: 'Building Engineering', titleAr: 'هندسة المباني',
    body: 'Engineering oversight that keeps every core building system working together as one.',
    bodyAr: 'إشراف هندسي يحافظ على عمل جميع أنظمة المبنى الأساسية معًا بكفاءة.',
    icon: <svg {...iconProps}><path d="M8 27V10l8-5 8 5v17" strokeLinecap="round" strokeLinejoin="round" /><path d="M12 27v-6h8v6M12 14h.01M16 14h.01M20 14h.01M12 18h.01M16 18h.01M20 18h.01" strokeLinecap="round" /></svg>,
  },
  {
    num: '07', title: 'General Maintenance', titleAr: 'الصيانة العامة',
    body: 'Day-to-day repairs and upkeep across every space, handled by technicians who know your facility.',
    bodyAr: 'إصلاحات وصيانة يومية في جميع المساحات، ينفذها فنيون على دراية بمنشأتك.',
    icon: <svg {...iconProps}><path d="M23 9a5.5 5.5 0 01-7.1 5.3L8 22.2l-2.2-2.2 7.9-7.9A5.5 5.5 0 0119 4.5l-3.5 3.5 2 2L21 6.5A5.5 5.5 0 0123 9z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
  {
    num: '08', title: 'Preventive Maintenance', titleAr: 'الصيانة الوقائية',
    body: 'Scheduled inspections and servicing that catch issues before they become costly failures.',
    bodyAr: 'فحوصات وصيانة دورية مجدولة تكتشف المشكلات قبل أن تتحول إلى أعطال مكلفة.',
    icon: <svg {...iconProps}><rect x={8} y={5} width={16} height={22} rx={2} /><path d="M12 12h8M12 16h8M12 20h5" strokeLinecap="round" /><path d="M12 4h8v3h-8z" /></svg>,
  },
  {
    num: '09', title: 'Mechanical Systems Support', titleAr: 'دعم الأنظمة الميكانيكية',
    body: 'Ongoing servicing of pumps, motors and mechanical equipment that keeps operations running smoothly.',
    bodyAr: 'صيانة مستمرة للمضخات والمحركات والمعدات الميكانيكية لضمان سير العمليات بسلاسة.',
    icon: <svg {...iconProps}><path d="M16 4a4 4 0 014 4v2.2a8 8 0 012.8 1.6l2-1 2 3.4-1.8 1.4a8 8 0 010 3.2l1.8 1.4-2 3.4-2-1a8 8 0 01-2.8 1.6V26a4 4 0 01-8 0v-2.2a8 8 0 01-2.8-1.6l-2 1-2-3.4 1.8-1.4a8 8 0 010-3.2L5.4 13l2-3.4 2 1A8 8 0 0112 8.2V6a4 4 0 014-4z" strokeLinejoin="round" /><circle cx={16} cy={16} r={3.5} /></svg>,
  },
  {
    num: '10', title: 'Emergency Maintenance', titleAr: 'الصيانة الطارئة',
    body: 'Rapid-response repair teams on call around the clock for urgent system failures.',
    bodyAr: 'فرق إصلاح سريعة الاستجابة جاهزة على مدار الساعة لمعالجة الأعطال الطارئة.',
    icon: <svg {...iconProps}><path d="M16 4l3 8h8l-6.5 5 2.5 8-7-5-7 5 2.5-8L5 12h8z" strokeLinejoin="round" /></svg>,
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

function ServiceCard({ s, mobile = false, spanFull = false }: { s: typeof SERVICES[number]; mobile?: boolean; spanFull?: boolean }) {
  const { onMouseEnter, onMouseLeave, mergeStyle } = useHover();
  const base: React.CSSProperties = {
    background: '#fff', padding: mobile ? '22px 16px' : '28px 20px', textAlign: 'center',
    boxShadow: '0 10px 24px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', alignItems: 'center',
    transition: 'transform 0.25s ease, box-shadow 0.25s ease',
    ...(spanFull ? { gridColumn: '1 / -1', flexDirection: 'row', textAlign: 'left', alignItems: 'flex-start', gap: 16 } : {}),
  };
  const hoverStyle: React.CSSProperties = { transform: 'translateY(-6px)', boxShadow: '0 16px 30px rgba(0,0,0,0.18)' };
  const iconWrap: React.CSSProperties = { width: mobile ? 46 : 52, height: mobile ? 46 : 52, borderRadius: '50%', background: '#111412', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, ...(spanFull ? {} : { marginBottom: mobile ? 12 : 14 }) };
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={mobile ? base : mergeStyle(base, hoverStyle)}>
      <div style={iconWrap}>{s.icon}</div>
      <div>
        {!spanFull && <span style={{ display: 'block', fontFamily: "'Archivo',sans-serif", fontSize: mobile ? 10.5 : 11, fontWeight: 800, color: '#8BC53F', letterSpacing: 1, marginBottom: mobile ? 8 : 10 }}>{s.num}</span>}
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: mobile ? 12.5 : 13.5, fontWeight: 600, letterSpacing: 0.2, marginBottom: 3, minHeight: !spanFull && mobile ? 30 : undefined }}>{s.title}</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', textAlign: spanFull ? 'right' : undefined, fontSize: mobile ? 11.5 : 12.5, fontWeight: 600, color: '#6E9E2E', marginBottom: mobile ? 8 : 10 }}>{s.titleAr}</div>
        <p style={{ fontSize: mobile ? 11 : 11.5, color: '#3C403D', lineHeight: 1.6, margin: '0 0 6px' }}>{s.body}</p>
        <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', textAlign: spanFull ? 'right' : undefined, fontSize: mobile ? 10 : 10.5, color: '#6E9E2E', lineHeight: 1.8, margin: 0 }}>{s.bodyAr}</p>
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, mobile = false }: { eyebrow: string; title: string; mobile?: boolean }) {
  return (
    <div style={{ textAlign: 'center', maxWidth: 680, margin: mobile ? '0 auto 24px' : '0 auto 40px' }}>
      <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: mobile ? 11 : 12, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: mobile ? 8 : 12 }}>{eyebrow}</div>
      <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: mobile ? 20 : 30, fontWeight: 800, margin: 0, color: '#111412', textTransform: 'uppercase', lineHeight: 1.25 }}>{title}</h2>
    </div>
  );
}

function ImageBanner({ mobile = false }: { mobile?: boolean }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', height: mobile ? 260 : 380 }}>
      <img src="/assets/engineering-detail.jpg" alt="Technician servicing a mechanical control panel" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(6,10,8,0.9) 0%, rgba(6,10,8,0.55) 55%, rgba(6,10,8,0.25) 100%)' }} />
      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: mobile ? '0 20px' : '0 64px', maxWidth: mobile ? '100%' : 560 }}>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: mobile ? 10.5 : 11.5, letterSpacing: 2.2, color: '#B9DE7C', marginBottom: mobile ? 8 : 12 }}>ONE RECORD, EVERY VISIT</div>
        <div style={{ fontFamily: "'Archivo',sans-serif", fontSize: mobile ? 21 : 30, fontWeight: 800, color: '#fff', lineHeight: 1.2, marginBottom: mobile ? 8 : 12 }}>Every repair logged. Every system accounted for.</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', textAlign: 'right', fontSize: mobile ? 12.5 : 14.5, fontWeight: 600, color: '#8BC53F' }}>كل إصلاح موثّق. وكل نظام تحت المراقبة.</div>
      </div>
    </div>
  );
}

function EngineeringMaintenanceDesktop() {
  const firstFive = SERVICES.slice(0, 5);
  const lastFive = SERVICES.slice(5);

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
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 48, fontWeight: 800, color: '#fff', lineHeight: 1.1, margin: '0 0 18px', textTransform: 'uppercase' }}>Every System. Fully Covered.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 26, fontWeight: 600, color: '#8BC53F', marginBottom: 22 }}>تغطية كاملة لكل نظام.</div>
          <p style={{ fontSize: 15, color: '#C9C9C9', lineHeight: 1.8, maxWidth: 520, margin: '0 0 8px' }}>From boiler operations to emergency repairs, one specialized service line covers every mechanical, electrical and structural system in your facility.</p>
          <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13.5, color: '#B9DE7C', lineHeight: 1.9, maxWidth: 520, margin: 0 }}>من تشغيل الغلايات إلى الإصلاحات الطارئة، تغطي خدماتنا المتخصصة كل نظام ميكانيكي وكهربائي وإنشائي في منشأتك.</p>
        </div>
      </div>

      {/* SERVICES GRID — PART 1 */}
      <div style={{ background: '#F5F4F0', padding: '80px 64px 60px' }}>
        <SectionHeading eyebrow="WHAT WE DELIVER" title="Ten Services. One Accountable Partner." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 20, maxWidth: 1240, margin: '0 auto' }}>
          {firstFive.map((s) => <ServiceCard key={s.num} s={s} />)}
        </div>
      </div>

      {/* IMAGE BANNER */}
      <ImageBanner />

      {/* SERVICES GRID — PART 2 */}
      <div style={{ background: '#F5F4F0', padding: '60px 64px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 20, maxWidth: 1240, margin: '0 auto' }}>
          {lastFive.map((s) => <ServiceCard key={s.num} s={s} />)}
        </div>
      </div>

      {/* BAND */}
      <div style={{ background: '#8BC53F', padding: '44px 64px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 16, fontWeight: 700, letterSpacing: 1, color: '#111412', textTransform: 'uppercase', marginBottom: 8 }}>Consistent Quality. Visible Results. One Accountable Partner.</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 15, fontWeight: 600, color: '#111412' }}>جودة ثابتة. نتائج واضحة. شريك واحد مسؤول.</div>
      </div>

      {/* CTA */}
      <div style={{ background: '#2A2E2A', padding: '90px 64px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 28, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase', margin: '0 0 26px' }}>Ready for one partner across every system?</h2>
        <CtaButton />
      </div>

      <PageFooter />
    </div>
  );
}

function EngineeringMaintenanceMobile() {
  const firstFive = SERVICES.slice(0, 5);
  const lastFive = SERVICES.slice(5);

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
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 27, fontWeight: 800, color: '#fff', lineHeight: 1.18, margin: '0 0 14px', textTransform: 'uppercase' }}>Every System. Fully Covered.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 18, fontWeight: 600, color: '#8BC53F', marginBottom: 16 }}>تغطية كاملة لكل نظام.</div>
          <p style={{ fontSize: 13.5, color: '#C9C9C9', lineHeight: 1.8, margin: '0 0 8px' }}>From boiler operations to emergency repairs, one specialized service line covers every mechanical, electrical and structural system in your facility.</p>
          <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 12, color: '#B9DE7C', lineHeight: 1.9, margin: 0 }}>من تشغيل الغلايات إلى الإصلاحات الطارئة، تغطي خدماتنا المتخصصة كل نظام في منشأتك.</p>
        </div>
      </div>

      {/* SERVICES GRID — PART 1 */}
      <div style={{ background: '#F5F4F0', padding: '36px 16px 28px' }}>
        <SectionHeading eyebrow="WHAT WE DELIVER" title="Ten Services. One Partner." mobile />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {firstFive.map((s, i) => <ServiceCard key={s.num} s={s} mobile spanFull={i === firstFive.length - 1} />)}
        </div>
      </div>

      {/* IMAGE BANNER */}
      <ImageBanner mobile />

      {/* SERVICES GRID — PART 2 */}
      <div style={{ background: '#F5F4F0', padding: '28px 16px 36px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {lastFive.map((s, i) => <ServiceCard key={s.num} s={s} mobile spanFull={i === lastFive.length - 1} />)}
        </div>
      </div>

      {/* BAND */}
      <div style={{ background: '#8BC53F', padding: '32px 20px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: 0.5, color: '#111412', textTransform: 'uppercase', marginBottom: 8, lineHeight: 1.4 }}>Consistent Quality. Visible Results. One Accountable Partner.</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13, fontWeight: 600, color: '#111412' }}>جودة ثابتة. نتائج واضحة. شريك واحد مسؤول.</div>
      </div>

      {/* CTA */}
      <div style={{ background: '#2A2E2A', padding: '52px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 19, fontWeight: 700, color: '#fff', letterSpacing: 0.3, textTransform: 'uppercase', margin: '0 0 22px', lineHeight: 1.35 }}>Ready for one partner across every system?</h2>
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
