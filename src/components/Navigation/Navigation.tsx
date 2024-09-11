// Navigation.tsx
import React, { Fragment } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { IconMenu, IconX } from "@tabler/icons-react";
import styles from "./Navigation.module.scss";

interface Link {
  href: string;
  label: string;
}

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

interface NavigationProps {
  links: Link[];
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a href={href} className={styles.navLink}>
    {children}
  </a>
);

const Navigation: React.FC<NavigationProps> = ({ links }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.navContent}>
          <div className={styles.desktopLinks}>
            {links.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className={styles.icons}>
            {isOpen ? (
              <button
                onClick={() => setIsOpen(false)}
                className={styles.menuButton}
                aria-label="Close menu"
              >
                <IconX size={24} />
              </button>
            ) : (
              <button
                onClick={() => setIsOpen(true)}
                className={styles.menuButton}
                aria-label="Open menu"
              >
                <IconMenu size={24} />
              </button>
            )}
          </div>
        </div>
      </div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className={styles.dialog}
      >
        <div className={styles.overlay} onClick={() => setIsOpen(false)} />

        <div className={styles.dialogContainer}>
          <div className={styles.dialogContent}>
            <DialogPanel className={`${styles.mobileMenu} ${styles.isOpen}`}>
              <div className={styles.mobileMenuContent}>
                {links.map((link) => (
                  <NavLink key={link.href} href={link.href}>
                    {link.label}
                  </NavLink>
                ))}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </nav>
  );
};

export default Navigation;
