import styles from './NavBar.module.css'

import { ActiveLink } from "./ActiveLink";

interface Menu {
  text: string;
  href: string
}

const menuItems: Menu[] = [
  { text: 'Home', href: '/' },
  { text: 'About', href: '/about' },
  { text: 'Contact', href: '/contact' },
]

const NavBar = () => {
  return (
    <nav className={styles.menu_links}>
      {menuItems.map((item: Menu) => (
        <ActiveLink {...item} key={item.text} />
      ))}
    </nav>
  );
};

export default NavBar
