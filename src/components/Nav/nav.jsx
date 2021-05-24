import React from "react";
import { Link } from "react-router-dom";
import styles from "./nav.module.css";
import { AiOutlineSearch, AiOutlineTeam, AiOutlineInbox } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
function Nav() {
  return (
    <nav>
      <Link className={styles.logo} to="/">
        NETFLIX
      </Link>
      <div className={styles.listContainer}>
        <Link to="/about">About</Link>
        <Link to="/search">Search</Link>
        <Link to="/option">Option</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <div className={styles.iconContainer}>
        <Link to="search">
          <AiOutlineSearch />
        </Link>
        <Link to="/">
          <AiOutlineTeam />
        </Link>
        <Link to="/">
          <AiOutlineInbox />
        </Link>
        <Link to="/">
          <CgProfile />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
