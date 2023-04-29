import styles from './Menu.module.scss';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import logout from '../../../redux/actions/auth/logout';
// import { Button } from 'react-bootstrap';
import { ImNewTab } from 'react-icons/im';
import { CgProfile } from 'react-icons/cg';
import { RiLogoutCircleRLine } from 'react-icons/ri';
const Menu = ({ isOpen, user }) => {
  const dispatch = useDispatch();
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <>
      <div className={isOpen ? styles.menu + ' ' + styles.open : styles.menu}>
        <div className={styles.menuHeader}>
          <p className={styles.profileName}>
            {user &&
              (user.profile ? user.profile.organizationName : user.fullName)}
          </p>
          <p className={styles.fullname}>{user && user.fullName}</p>
          <p className={styles.username}>@{user && user.username}</p>
        </div>
        <div className={styles.menuContainer}>
          <div className={styles.menuItems}>
            <div className={styles.linkWrapper}>
              <Link href="/user/profile">
                <div className={styles.linkContainer}>
                  <CgProfile />
                  <p className={styles.link}>Profile</p>
                </div>
              </Link>
            </div>
            {user && (
              <div className={styles.linkWrapper}>
                <a
                  target="_blank"
                  href={`https://studio.truthcasting.com/login?token=${user.token}`}
                  className={styles.linkContainer}
                >
                  <ImNewTab />
                  <p className={styles.link}>Studio</p>
                </a>
              </div>
            )}
            <div className={styles.linkWrapper}>
              <button onClick={logoutHandler} className={styles.logOutBtn}>
                <div className={styles.linkContainer}>
                  <RiLogoutCircleRLine />
                  <p className={styles.link}> Log Out</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
