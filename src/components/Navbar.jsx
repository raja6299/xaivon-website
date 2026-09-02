import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { XAIVON_DATA } from '../data/xaivonData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openMobileGroup, setOpenMobileGroup] = useState(null);
  const location = useLocation();

  const toggleDropdown = (index, e) => {
    e.stopPropagation();
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    const handleOutsideClick = () => setOpenDropdown(null);
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [mobileMenuOpen]);

  const navItems = XAIVON_DATA.navigation.primary;

  return (
    <header className="site-header">
      <nav className="navbar container">
        <Link className="brand" to="/" aria-label="XAIVON home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true"></span>
          <span>XAIVON</span>
        </Link>
        <div className="nav-links">
          {navItems.map((item, i) => (
            item.dropdown ? (
              <div className={`nav-item ${openDropdown === i ? 'is-open' : ''}`} key={i}>
                <button
                  className="nav-trigger"
                  type="button"
                  aria-expanded={openDropdown === i}
                  onClick={(e) => toggleDropdown(i, e)}
                >
                  {item.name} <span className="chevron">⌄</span>
                </button>
                <div className={`dropdown ${item.dropdown.groups.length > 1 ? 'wide' : ''}`}>
                  <div className={item.dropdown.groups.length > 1 ? 'dropdown-grid' : ''}>
                    {item.dropdown.groups.map((group, j) => (
                      <div className="dropdown-group" key={j}>
                        {group.label && <div className="dropdown-label">{group.label}</div>}
                        {group.links.map((link, k) => {
                          const isHash = link.path.startsWith('#') || link.path.includes('#');
                          return isHash && !link.path.startsWith('/') ? (
                            <a href={link.path} key={k} onClick={closeMenu}>{link.name}</a>
                          ) : (
                            <Link to={link.path} key={k} onClick={closeMenu}>{link.name}</Link>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link className="nav-link" to={item.path} key={i} onClick={closeMenu}>
                {item.name}
              </Link>
            )
          ))}
        </div>
        <Link className="nav-cta" to="/contact" onClick={closeMenu}>
          Book an Assessment <span>↗</span>
        </Link>
        <button
          className="mobile-trigger"
          type="button"
          aria-expanded={mobileMenuOpen}
          aria-label="Open mobile navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          ☰
        </button>
      </nav>
      <div className={`mobile-panel ${mobileMenuOpen ? 'open' : ''}`}>
        {navItems.map((item, i) => (
          item.dropdown ? (
            <div className="mobile-group" key={i}>
              <button
                className="mobile-group-title"
                type="button"
                aria-expanded={openMobileGroup === i}
                onClick={() => setOpenMobileGroup(openMobileGroup === i ? null : i)}
              >
                {item.name} <span>⌄</span>
              </button>
              <div className="mobile-group-items" hidden={openMobileGroup !== i}>
                {item.dropdown.groups.flatMap(g => g.links).map((link, j) => {
                  const isHash = link.path.startsWith('#') || link.path.includes('#');
                  return isHash && !link.path.startsWith('/') ? (
                    <a className="mobile-link" href={link.path} key={j} onClick={closeMenu}>{link.name}</a>
                  ) : (
                    <Link className="mobile-link" to={link.path} key={j} onClick={closeMenu}>{link.name}</Link>
                  );
                })}
              </div>
            </div>
          ) : (
            <Link className="mobile-link" to={item.path} key={i} onClick={closeMenu}>
              {item.name}
            </Link>
          )
        ))}
        <div className="mobile-group">
          <Link className="btn btn-primary" style={{ width: '100%' }} to="/contact" onClick={closeMenu}>
            Book an Assessment ↗
          </Link>
        </div>
      </div>
    </header>
  );
}
