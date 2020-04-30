import React from 'react';
import css from './navbar.module.css';
import { Link } from 'gatsby';

const Navbar = () => {

  const menu = [
    { name: 'Радиодетали', pageLink: '/store/components' },
    { name: 'Киты', pageLink: '/store/kits' },
    { name: 'Test', pageLink: '/test-page' },
  ]

  const menuList = menu.map((item, index) => {
    return (

      <Link key={index} className={css.menuItem} to={item.pageLink}>
        {item.name}
      </Link>

    )
  });

  return (
    <nav className={css.navigation}>
      <div className={css.menu}>
        {menuList}
      </div>

      <Link className={css.menuItem} to='/store/cart'>
        Корзина
      </Link>

    </nav>
  );
}

export default Navbar;
