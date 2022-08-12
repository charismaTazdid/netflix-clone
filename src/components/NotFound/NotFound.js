import React from 'react';
import styles from './NotFound.module.css'

const NotFound = () => {
    return (
        <div className={styles.notfound}>
            <div>
            <h2 style={{color: 'red'}}>404: Page Not Found</h2>
            <h2 style={{backgroundColor: ' rgba(4, 163, 163, 0.48'}}>Dude! Why are you searching this path!😜  Huh?? </h2>
            </div>
        </div>
    );
};

export default NotFound;