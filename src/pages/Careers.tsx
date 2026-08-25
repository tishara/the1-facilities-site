import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { PageFooter } from '../components/Footer';
import { useHover } from '../hooks/useHover';
import { ROUTES } from '../routes';

const WHY_WORK_HERE = [
  {
    title: 'Structured Training', titleAr: 'تدريب منظم',
    body: 'Every role starts with hands-on training and clear standards before the first shift.',
    icon: <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="#B9DE7C" strokeWidth={1.6}><path d="M6 12l10-5 10 5-10 5-10-5z" strokeLinejoin="round" /><path d="M10 15v6c0 2 3 3 6 3s6-1 6-3v-6" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
  {
    title: 'Uniformed & Equipped', titleAr: 'زي موحّد وتجهيزات كاملة',
    body: 'Uniforms, equipment and safety gear provided from day one.',
    icon: <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="#B9DE7C" strokeWidth={1.6}><path d="M11 6h10l3 5-8 15-8-15z" strokeLinejoin="round" /><path d="M11 6l5 6-2 4M21 6l-5 6 2 4" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
  {
    title: 'A Clear Path Forward', titleAr: 'مسار واضح للتقدم',
    body: 'Site supervisors and managers are promoted from within our own teams.',
    icon: <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="#B9DE7C" strokeWidth={1.6}><path d="M6 24l6-8 5 5 9-13" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 8h6v6" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
  {
    title: 'Stable, Full-Time Work', titleAr: 'عمل ثابت وبدوام كامل',
    body: 'Consistent schedules and long-term placements across our client sites.',
    icon: <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="#B9DE7C" strokeWidth={1.6}><circle cx={16} cy={16} r={10} /><path d="M16 10v6l5 3" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
];

const DEPARTMENTS = [
  {
    name: 'Cleaning', nameAr: 'النظافة',
    body: 'Daily and specialist cleaning technicians across commercial, healthcare and hospitality sites.',
    icon: <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="#B9DE7C" strokeWidth={1.6}><path d="M8 26h16" strokeLinecap="round" /><path d="M16 6v14" strokeLinecap="round" /><path d="M11 10c0-3 2-4 5-4s5 1 5 4" strokeLinecap="round" /></svg>,
  },
  {
    name: 'Maintenance & Operations', nameAr: 'الصيانة والعمليات',
    body: 'Planned and reactive maintenance technicians keeping every asset running.',
    icon: <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="#B9DE7C" strokeWidth={1.6}><circle cx={16} cy={16} r={4} /><path d="M16 6v3M16 23v3M6 16h3M23 16h3M9 9l2 2M21 21l2 2M23 9l-2 2M9 23l2-2" strokeLinecap="round" /></svg>,
  },
  {
    name: 'Security', nameAr: 'الأمن',
    body: 'Trained security officers protecting buildings, residences and events.',
    icon: <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="#B9DE7C" strokeWidth={1.6}><path d="M16 6l9 3v7c0 6-4 9-9 11-5-2-9-5-9-11V9z" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
  {
    name: 'Facilities Management', nameAr: 'إدارة المرافق',
    body: 'Site coordinators and supervisors overseeing daily facility operations.',
    icon: <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="#B9DE7C" strokeWidth={1.6}><path d="M8 26V12l8-5 8 5v14" strokeLinecap="round" strokeLinejoin="round" /><path d="M13 26v-6h6v6" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
  {
    name: 'Corporate & Support', nameAr: 'الدعم المؤسسي',
    body: 'Quality, training and client services roles supporting every team in the field.',
    icon: <svg width="24" height="24" viewBox="0 0 32 32" fill="none" stroke="#B9DE7C" strokeWidth={1.6}><circle cx={16} cy={12} r={5} /><path d="M6 27c0-5 4.5-9 10-9s10 4 10 9" strokeLinecap="round" /></svg>,
  },
];

const POSITION_NAMES = DEPARTMENTS.map((d) => d.name);

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  position: string;
}

interface Errors {
  name: boolean;
  email: boolean;
  position: boolean;
}

function useApplicationForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '', position: '' });
  const [errors, setErrors] = useState<Errors>({ name: false, email: false, position: false });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = () => {
    const nameError = !form.name.trim();
    const emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    const positionError = !form.position;
    if (nameError || emailError || positionError) {
      setErrors({ name: nameError, email: emailError, position: positionError });
      return;
    }
    setErrors({ name: false, email: false, position: false });
    setSubmitted(true);
  };

  return { form, setForm, errors, submitted, onSubmit };
}

function WhyCard({ w, mobile = false }: { w: typeof WHY_WORK_HERE[number]; mobile?: boolean }) {
  const { onMouseEnter, onMouseLeave, mergeStyle } = useHover();
  const base: React.CSSProperties = { border: '1px solid #E4E2DC', padding: mobile ? '24px 20px' : '32px 24px', transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease' };
  const hoverStyle: React.CSSProperties = { transform: 'translateY(-6px)', boxShadow: '0 16px 30px rgba(0,0,0,0.1)', borderColor: '#8BC53F' };
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={mobile ? base : mergeStyle(base, hoverStyle)}>
      <div style={{ width: mobile ? 44 : 52, height: mobile ? 44 : 52, borderRadius: '50%', background: '#111412', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: mobile ? 16 : 20 }}>
        {w.icon}
      </div>
      <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: mobile ? 14 : 15, fontWeight: 600, marginBottom: 4 }}>{w.title}</div>
      <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: mobile ? 13 : 14, fontWeight: 600, color: '#6E9E2E', marginBottom: 10 }}>{w.titleAr}</div>
      <p style={{ fontSize: mobile ? 12.5 : 13, color: '#3C403D', lineHeight: 1.65, margin: 0 }}>{w.body}</p>
    </div>
  );
}

function DeptCard({ d, onApply, mobile = false }: { d: typeof DEPARTMENTS[number]; onApply: (name: string) => void; mobile?: boolean }) {
  const { onMouseEnter, onMouseLeave, mergeStyle } = useHover();
  const base: React.CSSProperties = { background: '#1C201B', padding: mobile ? '24px 20px' : '30px 26px', transition: 'transform 0.25s ease, box-shadow 0.25s ease' };
  const hoverStyle: React.CSSProperties = { transform: 'translateY(-6px)', boxShadow: '0 16px 30px rgba(0,0,0,0.4)' };
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={mobile ? base : mergeStyle(base, hoverStyle)}>
      <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#0A0F0B', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
        {d.icon}
      </div>
      <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 15, fontWeight: 600, color: '#fff', textTransform: 'uppercase', letterSpacing: 0.3, marginBottom: 4 }}>{d.name}</div>
      <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 14, fontWeight: 600, color: '#8BC53F', marginBottom: 12 }}>{d.nameAr}</div>
      <p style={{ fontSize: 13, color: '#C9C9C9', lineHeight: 1.65, margin: '0 0 18px' }}>{d.body}</p>
      <a href="#apply" onClick={(e) => { e.preventDefault(); onApply(d.name); document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ fontSize: 12.5, fontWeight: 600, color: '#8BC53F', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
        Apply for this team &nbsp;→
      </a>
    </div>
  );
}

function PositionPill({ name, selected, onClick }: { name: string; selected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{ padding: '11px 18px', border: '1.5px solid #8BC53F', background: selected ? '#8BC53F' : '#fff', color: '#111412', fontFamily: "'Poppins',sans-serif", fontSize: 12.5, fontWeight: 600, cursor: 'pointer', transition: 'background 0.2s ease, color 0.2s ease' }}
    >
      {name}
    </button>
  );
}

function SubmitButton({ onClick, mobile = false }: { onClick: () => void; mobile?: boolean }) {
  const { onMouseEnter, onMouseLeave, mergeStyle } = useHover();
  const base: React.CSSProperties = {
    width: '100%', background: '#8BC53F', color: '#111412', border: 'none',
    padding: mobile ? 15 : 16, fontFamily: "'Poppins',sans-serif", fontWeight: 700,
    fontSize: mobile ? 13.5 : 14, letterSpacing: 0.5, cursor: 'pointer', transition: 'background 0.25s ease',
  };
  return (
    <button onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={mergeStyle(base, { background: '#9ED84A' })}>
      SUBMIT APPLICATION
    </button>
  );
}

function HeroCta({ mobile = false }: { mobile?: boolean }) {
  const { onMouseEnter, onMouseLeave, mergeStyle } = useHover();
  const base: React.CSSProperties = mobile
    ? { display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, background: '#8BC53F', color: '#111412', padding: '12px 24px 12px 12px', borderRadius: 50, fontSize: 14, fontWeight: 600, width: 'max-content', margin: '0 auto', transition: 'gap 0.25s ease, background 0.25s ease' }
    : { display: 'inline-flex', alignItems: 'center', gap: 14, background: '#8BC53F', color: '#111412', padding: '14px 28px 14px 14px', borderRadius: 50, fontFamily: "'Poppins',sans-serif", fontSize: 15, fontWeight: 600, transition: 'gap 0.3s ease, background 0.3s ease' };
  const hoverStyle: React.CSSProperties = { gap: mobile ? 18 : 22, background: '#9ED84A' };
  return (
    <a href="#apply" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={mergeStyle(base, hoverStyle)}>
      <span style={{ width: mobile ? 28 : 32, height: mobile ? 28 : 32, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: '#111412' }}>
        <svg width={mobile ? 14 : 16} height={mobile ? 14 : 16} viewBox="0 0 24 24" fill="none" stroke="#8BC53F" strokeWidth={2}><path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </span>
      Start Your Application
    </a>
  );
}

function CareersDesktop() {
  const { form, setForm, errors, submitted, onSubmit } = useApplicationForm();

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: '#111412', overflowX: 'auto', minWidth: 1360 }}>
      <Header activeIndex={5} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '60px 64px 100px', clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)' }}>
        <img src="/assets/team-maintenance-lobby.jpg" alt="The 1 uniformed team member in a client lobby" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.65) 55%, rgba(6,10,8,0.4) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 720, animation: 'std-rise 0.8s ease-out both' }}>
          <div style={{ fontSize: 12.5, color: '#C9C9C9', letterSpacing: 1, marginBottom: 22 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / Careers</div>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 16 }}>CAREERS</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 50, fontWeight: 800, color: '#fff', lineHeight: 1.08, margin: '0 0 18px', textTransform: 'uppercase' }}>Build Your Career With <span style={{ color: '#8BC53F' }}>One</span> Team.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 24, fontWeight: 600, color: '#8BC53F', margin: '0 0 22px' }}>ابنِ مسيرتك المهنية مع فريق واحد.</div>
          <p style={{ fontSize: 15.5, color: '#C9C9C9', lineHeight: 1.8, maxWidth: 480, margin: '0 0 8px' }}>Join uniformed, trained teams delivering cleaning, maintenance, security and facilities management across every site we serve.</p>
          <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 14, color: '#B9DE7C', lineHeight: 1.9, maxWidth: 480, margin: '0 0 30px' }}>انضم إلى فرق مدرّبة وموحدة الزي تقدم خدمات النظافة والصيانة والأمن وإدارة المرافق في كل موقع نخدمه.</p>
          <HeroCta />
        </div>
      </div>

      {/* WHY WORK HERE */}
      <div style={{ background: '#FFFFFF', padding: '90px 64px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 12 }}>WHY WORK WITH US</div>
            <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 40, fontWeight: 800, lineHeight: 1.1, margin: '0 0 10px', color: '#111412', textTransform: 'uppercase' }}>Where Training Meets Accountability.</h2>
            <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 20, fontWeight: 600, color: '#6E9E2E' }}>حيث يلتقي التدريب بالمساءلة.</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 28 }}>
            {WHY_WORK_HERE.map((w) => <WhyCard key={w.title} w={w} />)}
          </div>
        </div>
      </div>

      {/* TEAMS WE'RE GROWING */}
      <div style={{ background: '#111412', padding: '100px 64px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 56px' }}>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12.5, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 12 }}>OPEN ROLES</div>
            <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 40, fontWeight: 800, color: '#fff', lineHeight: 1.1, margin: '0 0 10px', textTransform: 'uppercase' }}>Teams We're Growing.</h2>
            <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 20, fontWeight: 600, color: '#B9DE7C' }}>الفرق التي ننمّيها.</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
            {DEPARTMENTS.map((d) => (
              <DeptCard key={d.name} d={d} onApply={(name) => setForm((f) => ({ ...f, position: name }))} />
            ))}
          </div>
        </div>
      </div>

      {/* APPLICATION FORM */}
      <div id="apply" style={{ background: '#FFFFFF', padding: '90px 64px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 70 }}>
          <div style={{ animation: 'std-rise 0.7s ease-out both' }}>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 24 }}>START YOUR APPLICATION</div>
            <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 15, fontWeight: 600, color: '#6E9E2E', margin: '-16px 0 30px' }}>ابدأ طلبك</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
              <div>
                <div style={{ fontSize: 12, letterSpacing: 1, color: '#6E736F', marginBottom: 6 }}>EMAIL</div>
                <a href="mailto:team@the1fm.com" style={{ fontSize: 16, fontWeight: 600, color: '#111412' }}>team@the1fm.com</a>
              </div>
              <div>
                <div style={{ fontSize: 12, letterSpacing: 1, color: '#6E736F', marginBottom: 6 }}>TEAMS HIRING</div>
                <div style={{ fontSize: 14, color: '#3C403D', lineHeight: 1.8 }}>Cleaning · Maintenance &amp; Operations · Security · Facilities Management · Corporate &amp; Support</div>
              </div>
            </div>
          </div>

          <div style={{ animation: 'std-rise 0.8s ease-out 0.1s both', background: '#F5F4F0', padding: 44 }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '50px 10px' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#8BC53F', color: '#111412', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 24 }}>✓</div>
                <div style={{ fontFamily: "'Archivo',sans-serif", fontSize: 22, fontWeight: 800, color: '#111412', marginBottom: 8 }}>Application received.</div>
                <p style={{ fontSize: 14, color: '#3C403D', margin: 0 }}>Our recruiting team will contact {form.email} about the {form.position} team.</p>
              </div>
            ) : (
              <div>
                <label style={{ display: 'block', fontSize: 12, letterSpacing: 0.5, color: '#3C403D', marginBottom: 10 }}>Which team interests you?*</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginBottom: 22 }}>
                  {POSITION_NAMES.map((n) => (
                    <PositionPill key={n} name={n} selected={form.position === n} onClick={() => setForm({ ...form, position: n })} />
                  ))}
                </div>
                {errors.position && <div style={{ color: '#C0392B', fontSize: 12, margin: '-14px 0 18px' }}>Please choose a team</div>}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginBottom: 18 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, letterSpacing: 0.5, color: '#3C403D', marginBottom: 6 }}>Full Name*</label>
                    <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" style={{ width: '100%', padding: '12px 14px', border: '1px solid #CFCFCA', fontSize: 14, fontFamily: "'Poppins',sans-serif", background: '#fff' }} />
                    {errors.name && <div style={{ color: '#C0392B', fontSize: 12, marginTop: 5 }}>Name is required</div>}
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, letterSpacing: 0.5, color: '#3C403D', marginBottom: 6 }}>Phone</label>
                    <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+962 6 000 0000" style={{ width: '100%', padding: '12px 14px', border: '1px solid #CFCFCA', fontSize: 14, fontFamily: "'Poppins',sans-serif", background: '#fff' }} />
                  </div>
                </div>
                <div style={{ marginBottom: 18 }}>
                  <label style={{ display: 'block', fontSize: 12, letterSpacing: 0.5, color: '#3C403D', marginBottom: 6 }}>Email*</label>
                  <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" style={{ width: '100%', padding: '12px 14px', border: '1px solid #CFCFCA', fontSize: 14, fontFamily: "'Poppins',sans-serif", background: '#fff' }} />
                  {errors.email && <div style={{ color: '#C0392B', fontSize: 12, marginTop: 5 }}>A valid email is required</div>}
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontSize: 12, letterSpacing: 0.5, color: '#3C403D', marginBottom: 6 }}>Tell us about your experience</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Relevant experience, availability, or anything else we should know..." style={{ width: '100%', minHeight: 110, padding: '12px 14px', border: '1px solid #CFCFCA', fontSize: 14, fontFamily: "'Poppins',sans-serif", background: '#fff', resize: 'vertical' }} />
                </div>
                <SubmitButton onClick={onSubmit} />
              </div>
            )}
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
}

function CareersMobile() {
  const { form, setForm, errors, submitted, onSubmit } = useApplicationForm();

  return (
    <div style={{ width: '100%', maxWidth: 560, margin: '0 auto', background: '#FFFFFF', fontFamily: "'Poppins',sans-serif", color: '#111412', overflowX: 'hidden', position: 'relative' }}>
      <Header activeIndex={5} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '44px 20px 52px', clipPath: 'polygon(0 0, 100% 0, 100% 97%, 0 100%)' }}>
        <img src="/assets/team-maintenance-lobby.jpg" alt="The 1 uniformed team member in a client lobby" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.68) 55%, rgba(6,10,8,0.45) 100%)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 11.5, color: '#C9C9C9', letterSpacing: 0.5, marginBottom: 16 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / Careers</div>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 12 }}>CAREERS</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 28, fontWeight: 800, color: '#fff', lineHeight: 1.15, margin: '0 0 12px', textTransform: 'uppercase' }}>Build Your Career With <span style={{ color: '#8BC53F' }}>One</span> Team.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 18, fontWeight: 600, color: '#8BC53F', marginBottom: 18 }}>ابنِ مسيرتك المهنية مع فريق واحد.</div>
          <p style={{ fontSize: 14, color: '#C9C9C9', lineHeight: 1.8, margin: '0 0 6px' }}>Join uniformed, trained teams delivering cleaning, maintenance, security and facilities management across every site we serve.</p>
          <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 12.5, color: '#B9DE7C', lineHeight: 1.9, margin: '0 0 22px' }}>انضم إلى فرق مدرّبة وموحدة الزي تقدم خدمات النظافة والصيانة والأمن وإدارة المرافق في كل موقع نخدمه.</p>
          <HeroCta mobile />
        </div>
      </div>

      {/* WHY WORK HERE */}
      <div style={{ background: '#FFFFFF', padding: '44px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 10 }}>WHY WORK WITH US</div>
          <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 24, fontWeight: 800, lineHeight: 1.15, margin: '0 0 8px', color: '#111412', textTransform: 'uppercase' }}>Where Training Meets Accountability.</h2>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 15, fontWeight: 600, color: '#6E9E2E' }}>حيث يلتقي التدريب بالمساءلة.</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
          {WHY_WORK_HERE.map((w) => <WhyCard key={w.title} w={w} mobile />)}
        </div>
      </div>

      {/* TEAMS WE'RE GROWING */}
      <div style={{ background: '#111412', padding: '48px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 10 }}>OPEN ROLES</div>
          <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 24, fontWeight: 800, color: '#fff', lineHeight: 1.15, margin: '0 0 8px', textTransform: 'uppercase' }}>Teams We're Growing.</h2>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 15, fontWeight: 600, color: '#B9DE7C' }}>الفرق التي ننمّيها.</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {DEPARTMENTS.map((d) => (
            <DeptCard key={d.name} d={d} onApply={(name) => setForm((f) => ({ ...f, position: name }))} mobile />
          ))}
        </div>
      </div>

      {/* APPLICATION FORM */}
      <div id="apply" style={{ background: '#FFFFFF', padding: '44px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 6 }}>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 6 }}>START YOUR APPLICATION</div>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13, fontWeight: 600, color: '#6E9E2E', marginBottom: 20 }}>ابدأ طلبك</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 24, textAlign: 'center' }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: 1, color: '#6E736F', marginBottom: 5 }}>EMAIL</div>
            <a href="mailto:team@the1fm.com" style={{ fontSize: 15, fontWeight: 600, color: '#111412' }}>team@the1fm.com</a>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: 1, color: '#6E736F', marginBottom: 5 }}>TEAMS HIRING</div>
            <div style={{ fontSize: 13, color: '#3C403D', lineHeight: 1.8 }}>Cleaning · Maintenance &amp; Operations · Security · Facilities Management · Corporate &amp; Support</div>
          </div>
        </div>

        <div style={{ background: '#F5F4F0', padding: '26px 20px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '36px 6px' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#8BC53F', color: '#111412', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 20 }}>✓</div>
              <div style={{ fontFamily: "'Archivo',sans-serif", fontSize: 19, fontWeight: 800, color: '#111412', marginBottom: 8 }}>Application received.</div>
              <p style={{ fontSize: 13.5, color: '#3C403D', margin: 0 }}>Our recruiting team will contact {form.email} about the {form.position} team.</p>
            </div>
          ) : (
            <div>
              <label style={{ display: 'block', fontSize: 12, letterSpacing: 0.5, color: '#3C403D', marginBottom: 10 }}>Which team interests you?*</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 18 }}>
                {POSITION_NAMES.map((n) => (
                  <PositionPill key={n} name={n} selected={form.position === n} onClick={() => setForm({ ...form, position: n })} />
                ))}
              </div>
              {errors.position && <div style={{ color: '#C0392B', fontSize: 12, margin: '-10px 0 16px' }}>Please choose a team</div>}
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 12, letterSpacing: 0.5, color: '#3C403D', marginBottom: 6 }}>Full Name*</label>
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" style={{ width: '100%', padding: '12px 14px', border: '1px solid #CFCFCA', fontSize: 14, fontFamily: "'Poppins',sans-serif", background: '#fff' }} />
                {errors.name && <div style={{ color: '#C0392B', fontSize: 12, marginTop: 5 }}>Name is required</div>}
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 12, letterSpacing: 0.5, color: '#3C403D', marginBottom: 6 }}>Phone</label>
                <input value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+962 6 000 0000" style={{ width: '100%', padding: '12px 14px', border: '1px solid #CFCFCA', fontSize: 14, fontFamily: "'Poppins',sans-serif", background: '#fff' }} />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 12, letterSpacing: 0.5, color: '#3C403D', marginBottom: 6 }}>Email*</label>
                <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@email.com" style={{ width: '100%', padding: '12px 14px', border: '1px solid #CFCFCA', fontSize: 14, fontFamily: "'Poppins',sans-serif", background: '#fff' }} />
                {errors.email && <div style={{ color: '#C0392B', fontSize: 12, marginTop: 5 }}>A valid email is required</div>}
              </div>
              <div style={{ marginBottom: 22 }}>
                <label style={{ display: 'block', fontSize: 12, letterSpacing: 0.5, color: '#3C403D', marginBottom: 6 }}>Tell us about your experience</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Relevant experience, availability, or anything else we should know..." style={{ width: '100%', minHeight: 100, padding: '12px 14px', border: '1px solid #CFCFCA', fontSize: 14, fontFamily: "'Poppins',sans-serif", background: '#fff', resize: 'vertical' }} />
              </div>
              <SubmitButton onClick={onSubmit} mobile />
            </div>
          )}
        </div>
      </div>

      <PageFooter />
    </div>
  );
}

export default function Careers() {
  return (
    <>
      <div className="desktop-only"><CareersDesktop /></div>
      <div className="mobile-only"><CareersMobile /></div>
    </>
  );
}
