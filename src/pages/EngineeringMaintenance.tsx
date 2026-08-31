import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { PageFooter } from '../components/Footer';
import { useHover } from '../hooks/useHover';
import { ROUTES } from '../routes';

const SERVICES_LIST = [
  {
    num: '01', title: 'Boiler Operations', titleAr: 'تشغيل الغلايات',
    body: 'Certified operation and monitoring of boiler systems, keeping heating and hot-water supply running safely and efficiently.',
    bodyAr: 'تشغيل ومراقبة معتمدة لأنظمة الغلايات لضمان تشغيل آمن وفعّال لإمدادات التدفئة والمياه الساخنة.',
  },
  {
    num: '02', title: 'Stationary Engineering', titleAr: 'الهندسة الثابتة',
    body: "Round-the-clock oversight of your building's core mechanical plant, from central systems to critical equipment.",
    bodyAr: 'إشراف مستمر على المنظومة الميكانيكية الأساسية للمبنى، من الأنظمة المركزية إلى المعدات الحيوية.',
  },
  {
    num: '03', title: 'HVAC Services', titleAr: 'خدمات التكييف والتهوية',
    body: 'Installation, servicing and repair of heating, ventilation and air conditioning systems that keep every space comfortable.',
    bodyAr: 'تركيب وصيانة وإصلاح أنظمة التدفئة والتهوية وتكييف الهواء للحفاظ على راحة كل مساحة.',
  },
  {
    num: '04', title: 'Electrical Services', titleAr: 'الخدمات الكهربائية',
    body: 'Licensed electrical maintenance, repairs and inspections that keep power systems safe and code-compliant.',
    bodyAr: 'صيانة وإصلاحات وفحوصات كهربائية مرخّصة تحافظ على سلامة أنظمة الطاقة ومطابقتها للأنظمة.',
  },
  {
    num: '05', title: 'Plumbing Services', titleAr: 'خدمات السباكة',
    body: 'Repair and maintenance of water, drainage and fixture systems, preventing leaks and unplanned downtime.',
    bodyAr: 'إصلاح وصيانة أنظمة المياه والصرف والتجهيزات لمنع التسريبات وتعطل الخدمة.',
  },
  {
    num: '06', title: 'Building Engineering', titleAr: 'هندسة المباني',
    body: 'Engineering oversight that keeps every core building system — mechanical, electrical and structural — working as one.',
    bodyAr: 'إشراف هندسي يحافظ على عمل جميع أنظمة المبنى الأساسية معًا بكفاءة.',
  },
  {
    num: '07', title: 'General Maintenance', titleAr: 'الصيانة العامة',
    body: 'Day-to-day repairs and upkeep across every space, handled by technicians who know your facility.',
    bodyAr: 'إصلاحات وصيانة يومية في جميع المساحات، ينفذها فنيون على دراية كاملة بمنشأتك.',
  },
  {
    num: '08', title: 'Preventive Maintenance', titleAr: 'الصيانة الوقائية',
    body: 'Scheduled inspections and servicing that catch issues before they become costly failures.',
    bodyAr: 'فحوصات وصيانة دورية مجدولة تكتشف المشكلات قبل أن تتحول إلى أعطال مكلفة.',
  },
  {
    num: '09', title: 'Mechanical Systems Support', titleAr: 'دعم الأنظمة الميكانيكية',
    body: 'Ongoing servicing of pumps, motors and mechanical equipment, keeping operations running smoothly.',
    bodyAr: 'صيانة مستمرة للمضخات والمحركات والمعدات الميكانيكية لضمان سير العمليات بسلاسة.',
  },
  {
    num: '10', title: 'Emergency Maintenance', titleAr: 'الصيانة الطارئة',
    body: 'Rapid-response repair teams on call around the clock for urgent system failures.',
    bodyAr: 'فرق إصلاح سريعة الاستجابة جاهزة على مدار الساعة لمعالجة الأعطال الطارئة.',
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

function ServiceItem({ s, mobile = false }: { s: typeof SERVICES_LIST[number]; mobile?: boolean }) {
  return (
    <div style={{ borderTop: '1px solid #E4E2DC', padding: mobile ? '18px 0' : '20px 0' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: mobile ? 12 : 14 }}>
        <span style={{ fontFamily: "'Archivo',sans-serif", fontSize: mobile ? 13 : 14, fontWeight: 800, color: '#8BC53F', flexShrink: 0 }}>{s.num}</span>
        <span style={{ fontSize: mobile ? 14.5 : 15.5, color: '#111412', fontWeight: 600 }}>{s.title}</span>
      </div>
      <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', textAlign: 'right', fontSize: mobile ? 12.5 : 13, fontWeight: 600, color: '#6E9E2E', margin: mobile ? '6px 0 6px' : '8px 0 8px' }}>{s.titleAr}</div>
      <p style={{ fontSize: mobile ? 12.5 : 13.5, color: '#3C403D', lineHeight: 1.7, margin: `0 0 ${mobile ? 4 : 6}px ${mobile ? 24 : 28}px` }}>{s.body}</p>
      <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', textAlign: 'right', fontSize: mobile ? 11.5 : 12, color: '#6E9E2E', lineHeight: 1.9, margin: `0 0 0 ${mobile ? 24 : 28}px` }}>{s.bodyAr}</p>
    </div>
  );
}

function EngineeringMaintenanceDesktop() {
  const leftCol = SERVICES_LIST.slice(0, 5);
  const rightCol = SERVICES_LIST.slice(5);

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

      {/* IMAGE + BADGE */}
      <div style={{ background: '#FFFFFF', padding: '90px 64px 70px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div style={{ position: 'relative', maxWidth: 900, margin: '0 auto 60px' }}>
            <img src="/assets/engineering-detail.jpg" alt="" style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block' }} />
            <div style={{ marginTop: -56, marginLeft: 24, position: 'relative', background: '#111412', color: '#fff', display: 'inline-flex', flexDirection: 'column', padding: '20px 26px' }}>
              <span style={{ fontFamily: "'Archivo',sans-serif", fontSize: 30, fontWeight: 800, color: '#8BC53F' }}>10</span>
              <span style={{ fontSize: 11.5, letterSpacing: 1, color: '#C9C9C9' }}>SPECIALIZED SERVICES</span>
            </div>
          </div>

          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 50px' }}>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 12 }}>WHAT WE DELIVER</div>
            <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 32, fontWeight: 800, margin: 0, color: '#111412', textTransform: 'uppercase' }}>Ten Services. One Accountable Partner.</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0 60px', maxWidth: 1040, margin: '0 auto' }}>
            <div>{leftCol.map((s) => <ServiceItem key={s.num} s={s} />)}</div>
            <div>{rightCol.map((s) => <ServiceItem key={s.num} s={s} />)}</div>
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
        <h2 style={{ fontFamily: "'Poppins',sans-serif", fontSize: 28, fontWeight: 700, color: '#fff', letterSpacing: 0.5, textTransform: 'uppercase', margin: '0 0 26px' }}>Ready for one partner across every system?</h2>
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
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 27, fontWeight: 800, color: '#fff', lineHeight: 1.18, margin: '0 0 14px', textTransform: 'uppercase' }}>Every System. Fully Covered.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 18, fontWeight: 600, color: '#8BC53F', marginBottom: 16 }}>تغطية كاملة لكل نظام.</div>
          <p style={{ fontSize: 13.5, color: '#C9C9C9', lineHeight: 1.8, margin: '0 0 8px' }}>From boiler operations to emergency repairs, one specialized service line covers every mechanical, electrical and structural system in your facility.</p>
          <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 12, color: '#B9DE7C', lineHeight: 1.9, margin: 0 }}>من تشغيل الغلايات إلى الإصلاحات الطارئة، تغطي خدماتنا المتخصصة كل نظام في منشأتك.</p>
        </div>
      </div>

      {/* IMAGE + BADGE */}
      <div style={{ background: '#FFFFFF', padding: '44px 20px 0' }}>
        <img src="/assets/engineering-detail.jpg" alt="" style={{ width: '100%', height: 200, objectFit: 'cover', display: 'block' }} />
        <div style={{ marginTop: -36, marginLeft: 14, position: 'relative', background: '#111412', color: '#fff', display: 'inline-flex', flexDirection: 'column', padding: '14px 20px' }}>
          <span style={{ fontFamily: "'Archivo',sans-serif", fontSize: 24, fontWeight: 800, color: '#8BC53F' }}>10</span>
          <span style={{ fontSize: 9.5, letterSpacing: 0.8, color: '#C9C9C9' }}>SPECIALIZED SERVICES</span>
        </div>
      </div>

      {/* SERVICES LIST */}
      <div style={{ background: '#FFFFFF', padding: '30px 20px 44px' }}>
        <div style={{ textAlign: 'center', marginBottom: 20 }}>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 10 }}>WHAT WE DELIVER</div>
          <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 21, fontWeight: 800, margin: 0, color: '#111412', textTransform: 'uppercase', lineHeight: 1.3 }}>Ten Services. One Accountable Partner.</h2>
        </div>
        <div>
          {SERVICES_LIST.map((s) => <ServiceItem key={s.num} s={s} mobile />)}
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
