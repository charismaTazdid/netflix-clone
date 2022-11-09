import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Navbar.module.css'
import { getAuth, signOut } from 'firebase/auth';

const Navbar = () => {
    const [showNavBg, setShowNavBg] = useState(false)
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    const loggedInUser = useSelector(state => state.auth.authData);
    useEffect(() => {
        setUser(loggedInUser);
    }, [loggedInUser]);

    const dispatch = useDispatch();

    const handleLogOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                dispatch({ type: 'LOGOUT' });
                setUser(null);
                navigate('/');
            }).catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowNavBg(true);
            }
            else setShowNavBg(false);
        })
        return () => {
            window.removeEventListener("scroll", null);
        };
    }, []);

    return (
        <div className={`${styles.nav} ${showNavBg && styles.navBlack}`}>
            <img
                className={styles.netflixLogo}
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="Nexflix logo"
                onClick={() => navigate('/')}
            />
            {
                user && <button onClick={handleLogOut} className={styles.logoutBtn}>LogOut </button>
            }
            <h5 className={styles.userName} onClick={() => navigate('/profile')}> {user?.user?.name}  </h5>
            {
                !user && <img
                    className={styles.netflixAvatar}
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix logo"
                    onClick={() => navigate('/auth')}

                />
            }
        </div>
    );
};

export default Navbar;