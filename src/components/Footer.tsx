import { Link } from 'react-router-dom';
import { ROUTES } from '../routes';

const colHeader = (color = '#8BC53F'): React.CSSProperties => ({
  fontFamily: "'Poppins',sans-serif",
  fontSize: 13,
  fontWeight: 600,
  letterSpacing: 1,
  color,
  marginBottom: 14,
});

const linkCol: React.CSSProperties = { display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13.5, color: '#fff' };

/** The 5-column footer shared by every inner page (About Us, Contact, Cleaning, ...). */
export function PageFooter() {
  return (
    <>
      <div className="desktop-only">
        <div style={{ background: '#111412', padding: '64px 64px 32px' }}>
          <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.3fr 1fr 1fr 1fr 1fr', gap: 32, paddingBottom: 40, borderBottom: '1px solid #24281f' }}>
            <div>
              <img src="/assets/the1-wordmark.png" alt="The 1 Facilities Management" style={{ height: 30, width: 'auto', marginBottom: 16 }} />
              <p style={{ fontSize: 13.5, color: '#fff', lineHeight: 1.7, margin: 0, maxWidth: 260 }}>One partner for cleaning, maintenance, security and facilities management across every space you operate.</p>
            </div>
            <div>
              <div style={colHeader()}>SERVICES</div>
              <div style={linkCol}>
                <Link to={ROUTES.cleaning} style={{ color: 'inherit' }}>Cleaning</Link>
                <Link to={ROUTES.maintenance} style={{ color: 'inherit' }}>Maintenance &amp; Operations</Link>
                <Link to={ROUTES.engineeringMaintenance} style={{ color: 'inherit' }}>Engineering &amp; Maintenance</Link>
                <Link to={ROUTES.security} style={{ color: 'inherit' }}>Security</Link>
                <Link to={ROUTES.facilitiesManagement} style={{ color: 'inherit' }}>Facilities Management</Link>
                <Link to={ROUTES.integratedSolutions} style={{ color: 'inherit' }}>Integrated Solutions</Link>
              </div>
            </div>
            <div>
              <div style={colHeader()}>SECTORS &amp; REACH</div>
              <div style={linkCol}>
                <Link to={ROUTES.sectorHealthcare} style={{ color: 'inherit' }}>Healthcare &amp; Medical</Link>
                <Link to={ROUTES.sectorHospitality} style={{ color: 'inherit' }}>Hotels &amp; Hospitality</Link>
                <Link to={ROUTES.sectorEducation} style={{ color: 'inherit' }}>Schools &amp; Universities</Link>
                <Link to={ROUTES.technology} style={{ color: 'inherit' }}>Technology</Link>
                <Link to={ROUTES.expansionMarkets} style={{ color: 'inherit' }}>Expansion Markets</Link>
              </div>
            </div>
            <div>
              <div style={colHeader()}>COMPANY</div>
              <div style={linkCol}>
                <Link to={ROUTES.aboutUs} style={{ color: 'inherit' }}>About Us</Link>
                <Link to={ROUTES.ourPeople} style={{ color: 'inherit' }}>Our People</Link>
                <Link to={ROUTES.qualityAccountability} style={{ color: 'inherit' }}>Quality &amp; Accountability</Link>
                <Link to={ROUTES.careers} style={{ color: 'inherit' }}>Careers</Link>
              </div>
            </div>
            <div>
              <div style={colHeader()}>CONTACT</div>
              <div style={linkCol}>
                <a href="mailto:team@the1fm.com" style={{ color: 'inherit' }}>team@the1fm.com</a>
                <a href="tel:+962791688100" style={{ color: 'inherit' }}>+962 79 168 8100</a>
                <Link to={ROUTES.contact} style={{ color: 'inherit' }}>Contact Us</Link>
              </div>
            </div>
          </div>
          <div style={{ maxWidth: 1280, margin: '0 auto', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff', fontSize: 12.5 }}>
            <div>© 2026 The 1 Facilities Management. All rights reserved.</div>
            <div style={{ display: 'flex', gap: 20 }}>
              <a href="#" style={{ color: 'inherit' }}>Privacy Policy</a>
              <a href="#" style={{ color: 'inherit' }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-only">
        <div style={{ background: '#111412', padding: '44px 20px 24px', textAlign: 'center' }}>
          <img src="/assets/the1-wordmark.png" alt="The 1 Facilities Management" style={{ height: 28, width: 'auto', marginBottom: 14 }} />
          <p style={{ fontSize: 13.5, color: '#fff', lineHeight: 1.7, margin: '0 0 28px' }}>One partner for cleaning, maintenance, security and facilities management across every space you operate.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '26px 18px', paddingBottom: 26 }}>
            <div>
              <div style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: 1, color: '#8BC53F', marginBottom: 12 }}>SERVICES</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13.5, color: '#fff' }}>
                <Link to={ROUTES.cleaning} style={{ color: 'inherit' }}>Cleaning</Link>
                <Link to={ROUTES.maintenance} style={{ color: 'inherit' }}>Maintenance</Link>
                <Link to={ROUTES.engineeringMaintenance} style={{ color: 'inherit' }}>Engineering</Link>
                <Link to={ROUTES.security} style={{ color: 'inherit' }}>Security</Link>
                <Link to={ROUTES.facilitiesManagement} style={{ color: 'inherit' }}>Facility Management</Link>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: 1, color: '#8BC53F', marginBottom: 12 }}>COMPANY</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13.5, color: '#fff' }}>
                <Link to={ROUTES.aboutUs} style={{ color: 'inherit' }}>About Us</Link>
                <Link to={ROUTES.ourPeople} style={{ color: 'inherit' }}>Our People</Link>
                <Link to={ROUTES.careers} style={{ color: 'inherit' }}>Careers</Link>
                <Link to={ROUTES.contact} style={{ color: 'inherit' }}>Contact</Link>
              </div>
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <div style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: 1, color: '#8BC53F', marginBottom: 12 }}>CONTACT</div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, fontSize: 13.5, color: '#fff' }}>
                <a href="mailto:team@the1fm.com" style={{ color: 'inherit' }}>team@the1fm.com</a>
                <a href="tel:+962791688100" style={{ color: 'inherit' }}>+962 79 168 8100</a>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #22271F', paddingTop: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, color: '#fff', fontSize: 12 }}>
            <div style={{ display: 'flex', gap: 18 }}>
              <a href="#" style={{ color: 'inherit' }}>Privacy Policy</a>
              <a href="#" style={{ color: 'inherit' }}>Terms of Service</a>
            </div>
            <div>© 2026 The 1 Facilities Management. All rights reserved.</div>
          </div>
        </div>
      </div>
    </>
  );
}

/** The 4-column footer used only by the homepage. */
export function HomeFooter() {
  return (
    <>
      <div className="desktop-only">
        <div style={{ background: '#111412', padding: '64px 64px 32px' }}>
          <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: 40, paddingBottom: 40, borderBottom: '1px solid #111412' }}>
            <div>
              <img src="/assets/the1-wordmark.png" alt="The 1 Facilities Management" style={{ height: 30, width: 'auto', marginBottom: 16 }} />
              <p style={{ fontSize: 13.5, color: '#fff', lineHeight: 1.7, margin: 0, maxWidth: 280 }}>One partner for cleaning, maintenance, security and facilities management across every space you operate.</p>
            </div>
            <div>
              <div style={colHeader()}>SERVICES</div>
              <div style={linkCol}>
                <Link to={ROUTES.cleaning} style={{ color: 'inherit' }}>Cleaning</Link>
                <Link to={ROUTES.maintenance} style={{ color: 'inherit' }}>Maintenance</Link>
                <Link to={ROUTES.engineeringMaintenance} style={{ color: 'inherit' }}>Engineering</Link>
                <Link to={ROUTES.security} style={{ color: 'inherit' }}>Security</Link>
                <Link to={ROUTES.facilitiesManagement} style={{ color: 'inherit' }}>Facility Management</Link>
              </div>
            </div>
            <div>
              <div style={colHeader()}>COMPANY</div>
              <div style={linkCol}>
                <Link to={ROUTES.aboutUs} style={{ color: 'inherit' }}>About Us</Link>
                <Link to={ROUTES.aboutUs} style={{ color: 'inherit' }}>Our Story</Link>
                <Link to={ROUTES.careers} style={{ color: 'inherit' }}>Careers</Link>
                <Link to={ROUTES.contact} style={{ color: 'inherit' }}>Contact</Link>
              </div>
            </div>
            <div>
              <div style={colHeader()}>CONTACT</div>
              <div style={linkCol}>
                <a href="mailto:team@the1fm.com" style={{ color: 'inherit' }}>team@the1fm.com</a>
                <a href="tel:+962791688100" style={{ color: 'inherit' }}>+962 79 168 8100</a>
              </div>
            </div>
          </div>
          <div style={{ maxWidth: 1200, margin: '0 auto', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff', fontSize: 12.5 }}>
            <div>© 2026 The 1 Facilities Management. All rights reserved.</div>
            <div style={{ display: 'flex', gap: 20 }}>
              <a href="#" style={{ color: 'inherit' }}>Privacy Policy</a>
              <a href="#" style={{ color: 'inherit' }}>Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      <div className="mobile-only">
        <div style={{ background: '#111412', padding: '44px 20px 24px', textAlign: 'center' }}>
          <img src="/assets/the1-wordmark.png" alt="The 1 Facilities Management" style={{ height: 28, width: 'auto', marginBottom: 14 }} />
          <p style={{ fontSize: 13.5, color: '#fff', lineHeight: 1.7, margin: '0 0 28px' }}>One partner for cleaning, maintenance, security and facilities management across every space you operate.</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '26px 18px', paddingBottom: 26 }}>
            <div>
              <div style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: 1, color: '#8BC53F', marginBottom: 12 }}>SERVICES</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13.5, color: '#fff' }}>
                <Link to={ROUTES.cleaning} style={{ color: 'inherit' }}>Cleaning</Link>
                <Link to={ROUTES.maintenance} style={{ color: 'inherit' }}>Maintenance</Link>
                <Link to={ROUTES.engineeringMaintenance} style={{ color: 'inherit' }}>Engineering</Link>
                <Link to={ROUTES.security} style={{ color: 'inherit' }}>Security</Link>
                <Link to={ROUTES.facilitiesManagement} style={{ color: 'inherit' }}>Facility Management</Link>
              </div>
            </div>
            <div>
              <div style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: 1, color: '#8BC53F', marginBottom: 12 }}>COMPANY</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 13.5, color: '#fff' }}>
                <Link to={ROUTES.aboutUs} style={{ color: 'inherit' }}>About Us</Link>
                <Link to={ROUTES.aboutUs} style={{ color: 'inherit' }}>Our Story</Link>
                <Link to={ROUTES.careers} style={{ color: 'inherit' }}>Careers</Link>
                <Link to={ROUTES.contact} style={{ color: 'inherit' }}>Contact</Link>
              </div>
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <div style={{ fontSize: 12.5, fontWeight: 600, letterSpacing: 1, color: '#8BC53F', marginBottom: 12 }}>CONTACT</div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, fontSize: 13.5, color: '#fff' }}>
                <a href="mailto:team@the1fm.com" style={{ color: 'inherit' }}>team@the1fm.com</a>
                <a href="tel:+962791688100" style={{ color: 'inherit' }}>+962 79 168 8100</a>
              </div>
            </div>
          </div>
          <div style={{ borderTop: '1px solid #22271F', paddingTop: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, color: '#fff', fontSize: 12 }}>
            <div style={{ display: 'flex', gap: 18 }}>
              <a href="#" style={{ color: 'inherit' }}>Privacy Policy</a>
              <a href="#" style={{ color: 'inherit' }}>Terms of Service</a>
            </div>
            <div>© 2026 The 1 Facilities Management. All rights reserved.</div>
          </div>
        </div>
      </div>
    </>
  );
}
