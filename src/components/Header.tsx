import { useRef, useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';

type HeaderVariant = 'home' | 'inner';

interface HeaderProps {
  /** 0=Home,1=About,2=Services,3=Sectors,4=WhyChooseUs,5=Careers,6=Contact, -1=none active */
  activeIndex: number;
  variant?: HeaderVariant;
}

const SERVICES_ITEMS = [
  { name: 'Cleaning', href: ROUTES.cleaning },
  { name: 'Maintenance & Operations', href: ROUTES.maintenance },
  { name: 'Security', href: ROUTES.security },
  { name: 'Facilities Management', href: ROUTES.facilitiesManagement },
  { name: 'Integrated Solutions', href: ROUTES.integratedSolutions },
];

const SERVICES_ITEMS_HOME = [...SERVICES_ITEMS, { name: 'Specialty Floor Care', href: ROUTES.cleaning }];

const SECTORS_ITEMS = [
  { name: 'Healthcare & Medical', href: ROUTES.sectorHealthcare },
  { name: 'Hotels & Hospitality', href: ROUTES.sectorHospitality },
  { name: 'Schools & Universities', href: ROUTES.sectorEducation },
];

const INDUSTRIES_ITEMS_HOME = [
  { name: 'Healthcare & Medical Facilities', href: ROUTES.sectorHealthcare },
  { name: 'Hotels & Hospitality', href: ROUTES.sectorHospitality },
  { name: 'K-12 Schools', href: ROUTES.sectorEducation },
  { name: 'Universities', href: ROUTES.sectorEducation },
  { name: 'Commercial Property', href: ROUTES.sectors },
  { name: 'Mixed-Use Facilities', href: ROUTES.sectors },
];

const MOBILE_NAV = [
  { label: 'HOME', href: ROUTES.home, children: [] as { label: string; href: string }[] },
  { label: 'ABOUT US', href: ROUTES.aboutUs, children: [] },
  {
    label: 'SERVICES',
    href: '#',
    children: SERVICES_ITEMS.map((s) => ({ label: s.name, href: s.href })),
  },
  {
    label: 'SECTORS',
    href: '#',
    children: SECTORS_ITEMS.map((s) => ({ label: s.name, href: s.href })),
  },
  { label: 'WHY CHOOSE US', href: ROUTES.qualityAccountability, children: [] },
  { label: 'CAREERS', href: ROUTES.careers, children: [] },
  { label: 'CONTACT', href: ROUTES.contact, children: [] },
];

const navLinkStyle = (active: boolean): CSSProperties => ({
  color: active ? '#fff' : '#C9C9C9',
  fontFamily: "'Poppins',sans-serif",
  fontSize: 13,
  letterSpacing: 1,
  fontWeight: 500,
  whiteSpace: 'nowrap',
});

const dropdownLinkStyle: CSSProperties = {
  display: 'block',
  padding: '14px 22px',
  fontFamily: "'Poppins',sans-serif",
  fontSize: 12.5,
  letterSpacing: 1,
  fontWeight: 600,
  color: '#111412',
  borderBottom: '1px solid rgba(255,255,255,0.18)',
  transition: 'background 0.15s ease, color 0.15s ease',
};

function DropdownLink({ href, children }: { href: string; children: React.ReactNode }) {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={hover ? { ...dropdownLinkStyle, background: '#111412', color: '#8BC53F' } : dropdownLinkStyle}
    >
      {children}
    </Link>
  );
}

const socialIcons = [
  <svg key="fb" width="15" height="15" viewBox="0 0 24 24" fill="#6E736F"><path d="M22 12a10 10 0 10-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z" /></svg>,
  <svg key="li" width="15" height="15" viewBox="0 0 24 24" fill="#6E736F"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4 0 4.7 2.6 4.7 6.1V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2.1 1.4-2.1 2.8V21H9z" /></svg>,
  <svg key="tw" width="15" height="15" viewBox="0 0 24 24" fill="#6E736F"><path d="M22.2 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.3 1.7-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 00-7 3.7A11.6 11.6 0 013 4.9a4.1 4.1 0 001.3 5.5c-.6 0-1.3-.2-1.8-.5v.1c0 2 1.4 3.6 3.3 4a4.2 4.2 0 01-1.9.1 4.1 4.1 0 003.9 2.9A8.3 8.3 0 012 18.6a11.6 11.6 0 006.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2.2-2.4z" /></svg>,
  <svg key="ig" width="15" height="15" viewBox="0 0 24 24" fill="#6E736F"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.4.5.6.2 1 .5 1.5 1 .4.4.7.9 1 1.5.2.4.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.4-.3.6-.6 1-1 1.5-.4.4-.9.7-1.5 1-.4.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.4-.5a4 4 0 01-1.5-1 4 4 0 01-1-1.5c-.2-.4-.4-1.2-.5-2.4-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-2 .5-2.4.2-.6.5-1 1-1.5.4-.4.9-.7 1.5-1 .4-.2 1.2-.4 2.4-.5 1.3-.1 1.7-.1 4.9-.1zM12 0C8.7 0 8.3 0 7 .1c-1.3.1-2.2.3-3 .6a6.3 6.3 0 00-2.2 1.5A6.3 6.3 0 00.6 4.4c-.3.8-.5 1.7-.6 3C0 8.7 0 9.1 0 12.4s0 3.7.1 5c.1 1.3.3 2.2.6 3 .3.9.7 1.6 1.5 2.3.7.7 1.4 1.2 2.2 1.5.8.3 1.7.5 3 .6 1.3.1 1.7.1 5 .1s3.7 0 5-.1c1.3-.1 2.2-.3 3-.6a6.3 6.3 0 002.2-1.5 6.3 6.3 0 001.5-2.2c.3-.8.5-1.7.6-3 .1-1.3.1-1.7.1-5s0-3.7-.1-5c-.1-1.3-.3-2.2-.6-3a6.3 6.3 0 00-1.5-2.2A6.3 6.3 0 0019.6.7c-.8-.3-1.7-.5-3-.6C15.3 0 14.9 0 12 0z" /><path d="M12 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zm0 10.2a4 4 0 110-8 4 4 0 010 8zM18.4 5.5a1.4 1.4 0 11-2.8 0 1.4 1.4 0 012.8 0z" /></svg>,
];

function DesktopHeader({ activeIndex, variant = 'inner' }: HeaderProps) {
  const navRef = useRef<HTMLDivElement>(null);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [sectorsOpen, setSectorsOpen] = useState(false);
  const [indicator, setIndicator] = useState({ left: 12, opacity: variant === 'home' ? 1 : 0 });

  const services = variant === 'home' ? SERVICES_ITEMS_HOME : SERVICES_ITEMS;
  const sectors = variant === 'home' ? INDUSTRIES_ITEMS_HOME : SECTORS_ITEMS;

  const moveTo = (e: React.MouseEvent<HTMLElement>) => {
    if (variant !== 'home' || !navRef.current) return;
    const link = e.currentTarget.querySelector('a') || e.currentTarget;
    const itemRect = (link as HTMLElement).getBoundingClientRect();
    const containerRect = navRef.current.getBoundingClientRect();
    const center = itemRect.left - containerRect.left + itemRect.width / 2 - 3;
    setIndicator({ left: center, opacity: 1 });
  };

  const resetIndicator = () => setIndicator({ left: 12, opacity: variant === 'home' ? 1 : 0 });

  return (
    <div
      ref={navRef}
      onMouseLeave={() => {
        setServicesOpen(false);
        setSectorsOpen(false);
        resetIndicator();
      }}
      style={{ position: 'relative', background: '#111412', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px 0 64px', gap: 20 }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 34, position: 'relative', flexShrink: 0 }}>
        <Link to={ROUTES.home} style={{ display: 'flex', alignItems: 'center', flexShrink: 0, padding: '16px 0' }} onMouseEnter={moveTo}>
          <img src="/assets/the1-wordmark.png" alt="The 1 Facilities Management" style={{ height: 32, width: 'auto' }} />
        </Link>
        <div onMouseEnter={(e) => { moveTo(e); setServicesOpen(false); setSectorsOpen(false); }} style={{ position: 'relative', padding: '20px 0', whiteSpace: 'nowrap', flexShrink: 0 }}>
          <Link to={ROUTES.home} style={navLinkStyle(activeIndex === 0)}>HOME</Link>
        </div>
        <div onMouseEnter={(e) => { moveTo(e); setServicesOpen(false); setSectorsOpen(false); }} style={{ position: 'relative', padding: '20px 0', whiteSpace: 'nowrap', flexShrink: 0 }}>
          <Link to={ROUTES.aboutUs} style={navLinkStyle(activeIndex === 1)}>ABOUT US</Link>
        </div>
        <div
          onMouseEnter={(e) => { moveTo(e); setServicesOpen(true); setSectorsOpen(false); }}
          onMouseLeave={() => {}}
          style={{ position: 'relative', padding: '20px 0', whiteSpace: 'nowrap', flexShrink: 0 }}
        >
          <Link to={ROUTES.cleaning} style={navLinkStyle(activeIndex === 2)}>SERVICES ▾</Link>
          {servicesOpen && (
            <div style={{ position: 'absolute', top: '100%', left: 0, minWidth: 280, maxHeight: 340, overflowY: 'auto', background: '#8BC53F', boxShadow: '0 18px 30px rgba(0,0,0,0.25)', zIndex: 20 }}>
              {services.map((s) => (
                <DropdownLink key={s.name} href={s.href}>{s.name}</DropdownLink>
              ))}
            </div>
          )}
        </div>
        <div
          onMouseEnter={(e) => { moveTo(e); setServicesOpen(false); setSectorsOpen(true); }}
          onMouseLeave={() => {}}
          style={{ position: 'relative', padding: '20px 0', whiteSpace: 'nowrap', flexShrink: 0 }}
        >
          <Link to={ROUTES.sectors} style={navLinkStyle(activeIndex === 3)}>SECTORS ▾</Link>
          {sectorsOpen && (
            <div style={{ position: 'absolute', top: '100%', left: 0, minWidth: 280, maxHeight: 340, overflowY: 'auto', background: '#8BC53F', boxShadow: '0 18px 30px rgba(0,0,0,0.25)', zIndex: 20 }}>
              {sectors.map((s) => (
                <DropdownLink key={s.name} href={s.href}>{s.name}</DropdownLink>
              ))}
            </div>
          )}
        </div>
        <div onMouseEnter={(e) => { moveTo(e); setServicesOpen(false); setSectorsOpen(false); }} style={{ position: 'relative', padding: '20px 0', whiteSpace: 'nowrap', flexShrink: 0 }}>
          <Link to={ROUTES.qualityAccountability} style={navLinkStyle(activeIndex === 4)}>WHY CHOOSE US</Link>
        </div>
        <div onMouseEnter={(e) => { moveTo(e); setServicesOpen(false); setSectorsOpen(false); }} style={{ position: 'relative', padding: '20px 0', whiteSpace: 'nowrap', flexShrink: 0 }}>
          <Link to={ROUTES.careers} style={navLinkStyle(activeIndex === 5)}>CAREERS</Link>
        </div>
        <div onMouseEnter={(e) => { moveTo(e); setServicesOpen(false); setSectorsOpen(false); }} style={{ position: 'relative', padding: '20px 0', whiteSpace: 'nowrap', flexShrink: 0 }}>
          <Link to={ROUTES.contact} style={navLinkStyle(activeIndex === 6)}>CONTACT</Link>
        </div>
        {variant === 'home' && (
          <div style={{ position: 'absolute', bottom: 10, width: 6, height: 6, borderRadius: '50%', background: '#8BC53F', transition: 'left 0.28s ease, opacity 0.2s ease', left: indicator.left, opacity: indicator.opacity }} />
        )}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>{socialIcons}</div>
        <Link to={ROUTES.contact} style={{ background: '#8BC53F', color: '#111412', padding: '16px 22px', fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: 13, letterSpacing: 0.5, whiteSpace: 'nowrap', flexShrink: 0 }}>
          Get In Touch
        </Link>
      </div>
    </div>
  );
}

function MobileHeader({ activeIndex }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openNav, setOpenNav] = useState(-1);
  const [ctaHover, setCtaHover] = useState(false);

  return (
    <>
      <div style={{ position: 'sticky', top: 0, zIndex: 40, background: '#111412', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 16px' }}>
        <Link to={ROUTES.home} style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/assets/the1-wordmark.png" alt="The 1 Facilities Management" style={{ height: 26, width: 'auto' }} />
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Link
            to={ROUTES.contact}
            onMouseEnter={() => setCtaHover(true)}
            onMouseLeave={() => setCtaHover(false)}
            style={{ background: ctaHover ? '#9ED84A' : '#8BC53F', color: '#111412', padding: '10px 14px', fontSize: 12, fontWeight: 600, letterSpacing: 0.3, transition: 'background 0.2s ease' }}
          >
            Get In Touch
          </Link>
          <div
            onClick={() => setMenuOpen((v) => !v)}
            style={{ width: 40, height: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 5, cursor: 'pointer', border: '1px solid #2C312D' }}
          >
            <span style={{ width: 18, height: 2, background: '#fff', display: 'block' }} />
            <span style={{ width: 18, height: 2, background: '#8BC53F', display: 'block' }} />
            <span style={{ width: 18, height: 2, background: '#fff', display: 'block' }} />
          </div>
        </div>
      </div>

      {menuOpen && (
        <div style={{ position: 'sticky', top: 64, zIndex: 39, background: '#111412', borderTop: '1px solid #22271F', padding: '8px 0 18px' }}>
          {MOBILE_NAV.map((n, i) => {
            const isOpen = openNav === i && n.children.length > 0;
            const color = i === activeIndex ? '#FFFFFF' : '#C9C9C9';
            return (
              <div key={n.label}>
                {n.children.length > 0 ? (
                  <div
                    onClick={() => setOpenNav((v) => (v === i ? -1 : i))}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #1E231F', cursor: 'pointer' }}
                  >
                    <span style={{ fontSize: 13, letterSpacing: 1.4, fontWeight: 500, color }}>{n.label}</span>
                    <span style={{ fontSize: 16, fontWeight: 400, color: '#8BC53F' }}>{isOpen ? '−' : '+'}</span>
                  </div>
                ) : (
                  <Link
                    to={n.href}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 20px', borderBottom: '1px solid #1E231F' }}
                  >
                    <span style={{ fontSize: 13, letterSpacing: 1.4, fontWeight: 500, color }}>{n.label}</span>
                    <span style={{ fontSize: 16, fontWeight: 400, color: '#8BC53F' }}>→</span>
                  </Link>
                )}
                {isOpen && (
                  <div style={{ background: '#8BC53F' }}>
                    {n.children.map((c) => (
                      <Link key={c.label} to={c.href} style={{ display: 'block', padding: '13px 26px', fontSize: 12.5, letterSpacing: 1, fontWeight: 600, color: '#111412', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
          <div style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '20px 20px 0' }}>{socialIcons}</div>
        </div>
      )}
    </>
  );
}

export default function Header(props: HeaderProps) {
  return (
    <>
      <div className="desktop-only">
        <DesktopHeader {...props} />
      </div>
      <div className="mobile-only">
        <MobileHeader {...props} />
      </div>
    </>
  );
}
