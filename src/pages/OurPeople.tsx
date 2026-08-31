import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { PageFooter } from '../components/Footer';
import { useHover } from '../hooks/useHover';
import { ROUTES } from '../routes';

function CtaButton({ mobile = false }: { mobile?: boolean }) {
  const { onMouseEnter, onMouseLeave, mergeStyle } = useHover();
  const base: React.CSSProperties = mobile
    ? { display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#8BC53F', color: '#111412', padding: '15px 26px', fontWeight: 600, fontSize: 14, transition: 'gap 0.25s ease, background 0.25s ease' }
    : { display: 'inline-flex', alignItems: 'center', gap: 10, background: '#8BC53F', color: '#111412', padding: '16px 32px', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 14, transition: 'background 0.25s ease' };
  const hoverStyle: React.CSSProperties = mobile ? { gap: 14, background: '#9ED84A' } : { background: '#9ED84A' };
  return (
    <Link to={ROUTES.contact} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={mergeStyle(base, hoverStyle)}>
      {mobile ? <>Start A Conversation Today <span>→</span></> : <>Start A Conversation Today &nbsp;→</>}
    </Link>
  );
}

function OurPeopleDesktop() {
  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", color: '#111412', overflowX: 'auto', minWidth: 1360 }}>
      <Header activeIndex={-1} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '60px 64px 100px', clipPath: 'polygon(0 0, 100% 0, 100% 94%, 0 100%)' }}>
        <img src="/assets/about-hero.jpg" alt="The 1 team of professionals" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.65) 55%, rgba(6,10,8,0.4) 100%)' }} />
        <div style={{ position: 'relative', maxWidth: 760, animation: 'std-rise 0.8s ease-out both' }}>
          <div style={{ fontSize: 12.5, color: '#C9C9C9', letterSpacing: 1, marginBottom: 22 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / Our People</div>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 16 }}>OUR PEOPLE</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 52, fontWeight: 800, color: '#fff', lineHeight: 1.1, margin: '0 0 18px', textTransform: 'uppercase' }}>Professionals You Can Trust.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 26, fontWeight: 600, color: '#8BC53F', marginBottom: 26 }}>محترفون جديرون بالثقة.</div>
          <p style={{ fontSize: 15, color: '#C9C9C9', lineHeight: 1.8, maxWidth: 480, margin: 0 }}>Trained teams. Clear standards. A consistent, professional presence in every facility we serve.</p>
          <p style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 14, color: '#B9DE7C', lineHeight: 1.9, maxWidth: 480, margin: '8px 0 0' }}>فرق مدرّبة. معايير واضحة. حضور مهني ثابت في كل منشأة نخدمها.</p>
        </div>
      </div>

      {/* BAND */}
      <div style={{ background: '#8BC53F', padding: '36px 64px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 15, fontWeight: 700, letterSpacing: 2, color: '#111412' }}>UNIFORMED • TRAINED • ACCOUNTABLE</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 14, fontWeight: 600, color: '#111412', marginTop: 6 }}>زي موحّد • تدريب • مساءلة</div>
      </div>

      {/* ORG CHART */}
      <div style={{ background: '#FFFFFF', padding: '100px 64px' }}>
        <div style={{ textAlign: 'center', maxWidth: 680, margin: '0 auto 70px' }}>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 10 }}>OPERATIONS TEAM</div>
          <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 36, fontWeight: 800, color: '#111412', margin: '0 0 14px' }}>Meet Our Operations Leadership</h2>
          <p style={{ fontSize: 14.5, color: '#3C403D', margin: '0 0 6px' }}>A leadership team built around accountability and performance.</p>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 13.5, color: '#6E9E2E' }}>فريق قيادة يرتكز على المساءلة والأداء.</div>
        </div>

        <div style={{ maxWidth: 280, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ width: 140, height: 170, margin: '0 auto 14px', overflow: 'hidden' }}>
            <img src="/assets/lead-rebhi.jpg" alt="Rebhi Zuhika" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
          </div>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 15, fontWeight: 600 }}>Rebhi Zuhika</div>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", fontSize: 15, fontWeight: 600, color: '#6E9E2E', marginTop: 4 }}>ربحي زهيكة</div>
          <div style={{ fontSize: 11.5, color: '#6E9E2E', letterSpacing: 0.5, marginTop: 6 }}>PRESIDENT</div>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", fontSize: 11, color: '#6E9E2E' }}>الرئيس</div>
        </div>

        <div style={{ maxWidth: 600, height: 40, margin: '0 auto', position: 'relative' }}>
          <div style={{ position: 'absolute', left: '50%', top: 0, width: 1, height: 40, background: '#CFCFCA' }} />
        </div>

        <div style={{ maxWidth: 280, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ width: 140, height: 170, margin: '0 auto 14px', overflow: 'hidden' }}>
            <img src="/assets/team-portrait-1.jpg" alt="Faris Al-Khatib" style={{ width: '200%', height: '100%', objectFit: 'cover', objectPosition: 'left top' }} />
          </div>
          <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 15, fontWeight: 600 }}>Faris Al-Khatib</div>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", fontSize: 15, fontWeight: 600, color: '#6E9E2E', marginTop: 4 }}>فارس الخطيب</div>
        </div>

        <div style={{ maxWidth: 600, height: 40, margin: '0 auto', position: 'relative' }}>
          <div style={{ position: 'absolute', left: '50%', top: 0, width: 1, height: 20, background: '#CFCFCA' }} />
          <div style={{ position: 'absolute', left: '16.6%', right: '16.6%', top: 20, height: 1, background: '#CFCFCA' }} />
          <div style={{ position: 'absolute', left: '16.6%', top: 20, width: 1, height: 20, background: '#CFCFCA' }} />
          <div style={{ position: 'absolute', left: '50%', top: 20, width: 1, height: 20, background: '#CFCFCA' }} />
          <div style={{ position: 'absolute', right: '16.6%', top: 20, width: 1, height: 20, background: '#CFCFCA' }} />
        </div>

        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24, textAlign: 'center' }}>
          <div>
            <div style={{ width: 120, height: 150, margin: '0 auto 14px', overflow: 'hidden' }}>
              <img src="/assets/team-portrait-1.jpg" alt="Hassan Al-Sayegh" style={{ width: '200%', height: '100%', objectFit: 'cover', objectPosition: 'right top' }} />
            </div>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 14, fontWeight: 600 }}>Hassan Al-Sayegh</div>
            <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", fontSize: 14, fontWeight: 600, color: '#6E9E2E', marginTop: 4 }}>حسن الصايغ</div>
          </div>
          <div>
            <div style={{ width: 120, height: 150, margin: '0 auto 14px', overflow: 'hidden' }}>
              <img src="/assets/team-portrait-2.jpg" alt="Omar Al-Rashid" style={{ width: '200%', height: '100%', objectFit: 'cover', objectPosition: 'left top' }} />
            </div>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 14, fontWeight: 600 }}>Omar Al-Rashid</div>
            <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", fontSize: 14, fontWeight: 600, color: '#6E9E2E', marginTop: 4 }}>عمر الراشد</div>
          </div>
          <div>
            <div style={{ width: 120, height: 150, margin: '0 auto 14px', overflow: 'hidden' }}>
              <img src="/assets/team-portrait-2.jpg" alt="Sami Al-Najjar" style={{ width: '200%', height: '100%', objectFit: 'cover', objectPosition: 'right top' }} />
            </div>
            <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 14, fontWeight: 600 }}>Sami Al-Najjar</div>
            <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", fontSize: 14, fontWeight: 600, color: '#6E9E2E', marginTop: 4 }}>سامي النجار</div>
          </div>
        </div>
      </div>

      {/* BAND 2 */}
      <div style={{ background: '#111412', padding: '44px 64px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 15, fontWeight: 700, letterSpacing: 2, color: '#8BC53F' }}>ONE TEAM • CLEAR OWNERSHIP • CONSISTENT EXECUTION</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 14, fontWeight: 600, color: '#B9DE7C', marginTop: 6 }}>فريق واحد • مسؤولية واضحة • تنفيذ ثابت</div>
      </div>

      {/* CTA */}
      <div style={{ background: '#F5F4F0', padding: '90px 64px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 30, fontWeight: 800, color: '#111412', margin: '0 0 26px' }}>Want to meet the team behind your facility?</h2>
        <CtaButton />
      </div>

      <PageFooter />
    </div>
  );
}

function OurPeopleMobile() {
  const leaders = [
    { img: 'lead-faris.jpg', name: 'Faris Al-Khatib', nameAr: 'فارس الخطيب', role: 'VP OF OPERATIONS', roleAr: 'نائب الرئيس للعمليات' },
    { img: 'lead-hassan.jpg', name: 'Hassan Al-Sayegh', nameAr: 'حسن الصايغ', role: 'GENERAL MANAGER', roleAr: 'المدير العام' },
    { img: 'lead-omar.jpg', name: 'Omar Al-Rashid', nameAr: 'عمر الراشد', role: 'QUALITY & TRAINING', roleAr: 'مدير الجودة والتدريب' },
    { img: 'lead-sami.jpg', name: 'Sami Al-Najjar', nameAr: 'سامي النجار', role: 'CLIENT SERVICES', roleAr: 'مدير خدمات العملاء' },
  ];

  return (
    <div style={{ width: '100%', maxWidth: 560, margin: '0 auto', background: '#FFFFFF', fontFamily: "'Poppins',sans-serif", color: '#111412', overflowX: 'hidden', position: 'relative' }}>
      <Header activeIndex={-1} variant="inner" />

      {/* HERO */}
      <div style={{ position: 'relative', background: '#111412', overflow: 'hidden', padding: '44px 20px 52px', clipPath: 'polygon(0 0, 100% 0, 100% 97%, 0 100%)' }}>
        <img src="/assets/about-hero.jpg" alt="The 1 team of professionals" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.55 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(6,10,8,0.92) 0%, rgba(6,10,8,0.68) 55%, rgba(6,10,8,0.45) 100%)' }} />
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 11.5, color: '#C9C9C9', letterSpacing: 0.5, marginBottom: 16 }}><Link to={ROUTES.home} style={{ color: '#C9C9C9' }}>Home</Link> / Our People</div>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#8BC53F', marginBottom: 12 }}>OUR PEOPLE</div>
          <h1 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 32, fontWeight: 800, color: '#fff', lineHeight: 1.1, margin: '0 0 14px', textTransform: 'uppercase' }}>Professionals You Can Trust.</h1>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 19, fontWeight: 600, color: '#8BC53F', marginBottom: 16 }}>محترفون جديرون بالثقة.</div>
          <p style={{ fontSize: 14, color: '#C9C9C9', lineHeight: 1.8, margin: 0 }}>Trained teams. Clear standards. A consistent, professional presence in every facility we serve.</p>
        </div>
      </div>

      {/* BAND */}
      <div style={{ background: '#8BC53F', padding: '28px 20px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: 1.5, color: '#111412' }}>UNIFORMED • TRAINED • ACCOUNTABLE</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 12.5, fontWeight: 600, color: '#111412', marginTop: 6 }}>زي موحّد • تدريب • مساءلة</div>
      </div>

      {/* LEADERSHIP */}
      <div style={{ background: '#FFFFFF', padding: '48px 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: 28 }}>
          <div style={{ fontSize: 11.5, letterSpacing: 3, fontWeight: 600, color: '#6E9E2E', marginBottom: 8 }}>OPERATIONS TEAM</div>
          <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 24, fontWeight: 800, color: '#111412', margin: '0 0 10px' }}>Meet Our Operations Leadership</h2>
          <p style={{ fontSize: 13.5, color: '#3C403D', margin: '0 0 4px' }}>A leadership team built around accountability and performance.</p>
          <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 12.5, color: '#6E9E2E' }}>فريق قيادة يرتكز على المساءلة والأداء.</div>
        </div>
        <div className="hscroll" style={{ overflowX: 'auto', overflowY: 'hidden', padding: '0 20px 6px', margin: '0 -20px' }}>
          <div style={{ display: 'flex', gap: 14, width: 'max-content' }}>
            {[{ img: 'lead-rebhi.jpg', name: 'Rebhi Zuhika', nameAr: 'ربحي زهيكة', role: 'PRESIDENT', roleAr: 'الرئيس' }, ...leaders].map((l) => (
              <div key={l.name} style={{ flex: '0 0 150px', textAlign: 'center' }}>
                <img src={`/assets/${l.img}`} alt={l.name} style={{ width: 150, height: 188, objectFit: 'cover', objectPosition: 'center top', border: '2px solid #8BC53F', borderRadius: 8, display: 'block', marginBottom: 12 }} />
                <div style={{ fontSize: 13, fontWeight: 600, color: '#111412' }}>{l.name}</div>
                <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", fontSize: 13, fontWeight: 600, color: '#6E9E2E', marginTop: 5 }}>{l.nameAr}</div>
                {l.role === 'PRESIDENT' && (
                  <>
                    <div style={{ fontSize: 9.5, color: '#6E9E2E', letterSpacing: 0.5, marginTop: 4 }}>{l.role}</div>
                    <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", fontSize: 10, color: '#6E9E2E', marginTop: 2 }}>{l.roleAr}</div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BAND 2 */}
      <div style={{ background: '#111412', padding: '32px 20px', textAlign: 'center' }}>
        <div style={{ fontFamily: "'Poppins',sans-serif", fontSize: 12.5, fontWeight: 700, letterSpacing: 1.2, color: '#8BC53F', lineHeight: 1.6 }}>ONE TEAM • CLEAR OWNERSHIP • CONSISTENT EXECUTION</div>
        <div style={{ fontFamily: "'Noto Kufi Arabic',sans-serif", direction: 'rtl', fontSize: 12.5, fontWeight: 600, color: '#B9DE7C', marginTop: 6 }}>فريق واحد • مسؤولية واضحة • تنفيذ ثابت</div>
      </div>

      {/* CTA */}
      <div style={{ background: '#F5F4F0', padding: '52px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Archivo',sans-serif", fontSize: 22, fontWeight: 800, color: '#111412', margin: '0 0 22px', lineHeight: 1.35 }}>Want to meet the team behind your facility?</h2>
        <CtaButton mobile />
      </div>

      <PageFooter />
    </div>
  );
}

export default function OurPeople() {
  return (
    <>
      <div className="desktop-only"><OurPeopleDesktop /></div>
      <div className="mobile-only"><OurPeopleMobile /></div>
    </>
  );
}
