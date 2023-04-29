import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import logout from '../../redux/actions/auth/logout';
import styles from './Navbar.module.scss';
import { BiSearchAlt } from 'react-icons/bi';
import Menu from './menu/Menu.component';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowBack } from 'react-icons/io';
import { BsPersonCircle } from 'react-icons/bs';

const Navbar = () => {
  const navigate = useRouter();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const [showMenu, setShowMenu] = React.useState(false);
  const [showSearch, setShowSearch] = React.useState(false);

  return (
    // <div fluid className={styles.navContainerParent}>
    <>
      <Menu isOpen={showMenu} user={user} />
      <div className={styles.navbarContainer}>
        <div className={styles.linksContainer}>
          {user ? (
            <div
              className={styles.profileContainer}
              onClick={() => setShowMenu(!showMenu)}
            >
              <div className={styles.imageContainer}>
                <Image
                  src={user.profileImageUrl}
                  width={50}
                  height={50}
                  alt="profile image"
                />
              </div>
              <IoIosArrowDown
                className={
                  showMenu ? styles.open + ' ' + styles.arrow : styles.arrow
                }
              />
            </div>
          ) : (
            <>
              <Link href={'/'}>
                <div className={styles.navItem}>
                  <BsPersonCircle />
                  <p>Login</p>
                </div>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
    // </div>
  );
};

export default Navbar;
