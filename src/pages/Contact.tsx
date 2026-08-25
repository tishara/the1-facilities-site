import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { PageFooter } from '../components/Footer';
import { useHover } from '../hooks/useHover';
import { ROUTES } from '../routes';

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface Errors {
  name: boolean;
  email: boolean;
  message: boolean;
}

function useContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Errors>({ name: false, email: false, message: false });
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = () => {
    const nameError = !form.name.trim();
    const emailError = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
    const messageError = !form.message.trim();
    if (nameError || emailError || messageError) {
      setErrors({ name: nameError, email: emailError, message: messageError });
      return;
    }
    setErrors({ name: false, email: false, message: false });
    setSubmitted(true);
  };

  return { form, setForm, errors, submitted, onSubmit };
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
      SUBMIT REQUEST
    </button>
  );
}

function ContactDesktop() {
  const { form, setForm, errors, submitted, onSubmit } = useContactForm();

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: '#111412', overflowX: 'auto', minWidth: 1360 }}>
      <Header activeIndex={6} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '70px 64px 90px', clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)', textAlign: 'center' }}>
        <svg style={{ position: 'absolute', right: -60, top: -80, width: 400, height: 400, opacity: 0.5 }} viewBox="0 0 400 400"><circle cx="200" cy="200" r="200" fill="#1C201B" /></svg>
        <svg style={{ position: 'absolute', left: -80, bottom: -100, width: 300, height: 300, opacity: 0.5 }} viewBox="0 0 300 300"><circle cx="150" cy="150" r="150" fill="#1C201B" /></svg>
        <div style={{ position: 'relative', maxWidth: 700, margin: '0 auto', animation: 'std-rise 0.8s ease-out both' }}>
          <div style={{ fontSize: 12.5, color: '#C9C9C9', letterSpacing: 1, marginBottom: 22 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / Contact</div>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 16 }}>LET'S GET STARTED</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 46, fontWeight: 800, color: '#fff', lineHeight: 1.1, margin: '0 0 16px', textTransform: 'uppercase' }}>Your Facility. One Partner.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 24, fontWeight: 600, color: '#8BC53F', marginBottom: 22 }}>منشأتك. شريك واحد.</div>
          <p style={{ fontSize: 15, color: '#C9C9C9', lineHeight: 1.8, maxWidth: 520, margin: '0 auto' }}>Bring cleaning, maintenance, security, and facilities management together under one accountable team.</p>
          <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 14, color: '#B9DE7C', lineHeight: 1.9, maxWidth: 520, margin: '8px auto 0' }}>اجمع النظافة والصيانة والأمن وإدارة المرافق تحت مسؤولية فريق واحد.</p>
        </div>
      </div>

      {/* FORM + INFO */}
      <div style={{ background: '#FFFFFF', padding: '90px 64px' }}>
        <div style={{ maxWidth: 1140, margin: '0 auto', display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: 70 }}>
          <div style={{ animation: 'std-rise 0.7s ease-out both' }}>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 24 }}>START A CONVERSATION TODAY</div>
            <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 15, fontWeight: 600, color: '#6E9E2E', margin: '-16px 0 30px' }}>ابدأ المحادثة اليوم</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
              <div>
                <div style={{ fontSize: 12, letterSpacing: 1, color: '#6E736F', marginBottom: 6 }}>EMAIL</div>
                <a href="mailto:team@the1fm.com" style={{ fontSize: 16, fontWeight: 600, color: '#111412' }}>team@the1fm.com</a>
              </div>
              <div>
                <div style={{ fontSize: 12, letterSpacing: 1, color: '#6E736F', marginBottom: 6 }}>WEBSITE</div>
                <Link to={ROUTES.home} style={{ fontSize: 16, fontWeight: 600, color: '#111412' }}>www.the1fm.com</Link>
              </div>
              <div>
                <div style={{ fontSize: 12, letterSpacing: 1, color: '#6E736F', marginBottom: 6 }}>SERVICES</div>
                <div style={{ fontSize: 14, color: '#3C403D', lineHeight: 1.8 }}>Cleaning · Maintenance · Security · Facilities Management · Integrated Solutions</div>
              </div>
            </div>
          </div>

          <div style={{ animation: 'std-rise 0.8s ease-out 0.1s both', background: '#F5F4F0', padding: 44 }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '50px 10px' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: '#8BC53F', color: '#111412', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', fontSize: 24 }}>✓</div>
                <div style={{ fontFamily: "'Archivo',sans-serif", fontSize: 22, fontWeight: 800, color: '#111412', marginBottom: 8 }}>Thank you — we'll be in touch.</div>
                <p style={{ fontSize: 14, color: '#3C403D', margin: 0 }}>A member of our team will reach out to {form.email} shortly.</p>
              </div>
            ) : (
              <div>
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
                  <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" style={{ width: '100%', padding: '12px 14px', border: '1px solid #CFCFCA', fontSize: 14, fontFamily: "'Poppins',sans-serif", background: '#fff' }} />
                  {errors.email && <div style={{ color: '#C0392B', fontSize: 12, marginTop: 5 }}>A valid email is required</div>}
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontSize: 12, letterSpacing: 0.5, color: '#3C403D', marginBottom: 6 }}>How can we help?*</label>
                  <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your facility and needs..." style={{ width: '100%', minHeight: 110, padding: '12px 14px', border: '1px solid #CFCFCA', fontSize: 14, fontFamily: "'Poppins',sans-serif", background: '#fff', resize: 'vertical' }} />
                  {errors.message && <div style={{ color: '#C0392B', fontSize: 12, marginTop: 5 }}>Please tell us a bit about your needs</div>}
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

function ContactMobile() {
  const { form, setForm, errors, submitted, onSubmit } = useContactForm();

  return (
    <div style={{ width: '100%', maxWidth: 560, margin: '0 auto', background: '#FFFFFF', fontFamily: "'Poppins',sans-serif", color: '#111412', overflowX: 'hidden', position: 'relative' }}>
      <Header activeIndex={6} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '48px 20px 52px', clipPath: 'polygon(0 0, 100% 0, 100% 97%, 0 100%)', textAlign: 'center' }}>
        <svg style={{ position: 'absolute', right: -60, top: -70, width: 220, height: 220, opacity: 0.5 }} viewBox="0 0 400 400"><circle cx="200" cy="200" r="200" fill="#1C201B" /></svg>
        <svg style={{ position: 'absolute', left: -70, bottom: -70, width: 180, height: 180, opacity: 0.5 }} viewBox="0 0 300 300"><circle cx="150" cy="150" r="150" fill="#1C201B" /></svg>
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 11.5, color: '#C9C9C9', letterSpacing: 0.5, marginBottom: 16 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / Contact</div>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 12 }}>LET'S GET STARTED</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 28, fontWeight: 800, color: '#fff', lineHeight: 1.15, margin: '0 0 14px', textTransform: 'uppercase' }}>Your Facility. One Partner.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 19, fontWeight: 600, color: '#8BC53F', marginBottom: 18 }}>منشأتك. شريك واحد.</div>
          <p style={{ fontSize: 14, color: '#C9C9C9', lineHeight: 1.8, margin: 0 }}>Bring cleaning, maintenance, security, and facilities management together under one accountable team.</p>
        </div>
      </div>

      {/* INFO */}
      <div style={{ background: '#FFFFFF', padding: '44px 20px 8px', textAlign: 'center' }}>
        <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 6 }}>START A CONVERSATION TODAY</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13, fontWeight: 600, color: '#6E9E2E', marginBottom: 24 }}>ابدأ المحادثة اليوم</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 8 }}>
          <div>
            <div style={{ fontSize: 11, letterSpacing: 1, color: '#6E736F', marginBottom: 5 }}>EMAIL</div>
            <a href="mailto:team@the1fm.com" style={{ fontSize: 15, fontWeight: 600, color: '#111412' }}>team@the1fm.com</a>
          </div>
          <div>
            <div style={{ fontSize: 11, letterSpacing: 1, color: '#6E736F', marginBottom: 5 }}>SERVICES</div>
            <div style={{ fontSize: 13, color: '#3C403D', lineHeight: 1.8 }}>Cleaning · Maintenance · Security · Facilities Management · Integrated Solutions</div>
          </div>
        </div>
      </div>

      {/* FORM */}
      <div style={{ background: '#FFFFFF', padding: '28px 20px 44px' }}>
        <div style={{ background: '#F5F4F0', padding: '26px 20px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '36px 6px' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#8BC53F', color: '#111412', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 20 }}>✓</div>
              <div style={{ fontFamily: "'Archivo',sans-serif", fontSize: 19, fontWeight: 800, color: '#111412', marginBottom: 8 }}>Thank you — we'll be in touch.</div>
              <p style={{ fontSize: 13.5, color: '#3C403D', margin: 0 }}>A member of our team will reach out to {form.email} shortly.</p>
            </div>
          ) : (
            <div>
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
                <input value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" style={{ width: '100%', padding: '12px 14px', border: '1px solid #CFCFCA', fontSize: 14, fontFamily: "'Poppins',sans-serif", background: '#fff' }} />
                {errors.email && <div style={{ color: '#C0392B', fontSize: 12, marginTop: 5 }}>A valid email is required</div>}
              </div>
              <div style={{ marginBottom: 22 }}>
                <label style={{ display: 'block', fontSize: 12, letterSpacing: 0.5, color: '#3C403D', marginBottom: 6 }}>How can we help?*</label>
                <textarea value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your facility and needs..." style={{ width: '100%', minHeight: 100, padding: '12px 14px', border: '1px solid #CFCFCA', fontSize: 14, fontFamily: "'Poppins',sans-serif", background: '#fff', resize: 'vertical' }} />
                {errors.message && <div style={{ color: '#C0392B', fontSize: 12, marginTop: 5 }}>Please tell us a bit about your needs</div>}
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

export default function Contact() {
  return (
    <>
      <div className="desktop-only"><ContactDesktop /></div>
      <div className="mobile-only"><ContactMobile /></div>
    </>
  );
}
