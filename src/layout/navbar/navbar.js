import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'gatsby';
import css from './Navbar.module.css';

const Navbar = ({ cart }) => {

  const menu = [
    { name: 'Partlist', pageLink: '/partlist' },
    { name: "Complist", pageLink: '/complist' }
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
        Корзина ({cart.length})
      </Link>

    </nav>
  );
}

const mapStateToProps = cart => cart

export default connect(mapStateToProps)(Navbar);
