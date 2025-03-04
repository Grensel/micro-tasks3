import React from 'react';
import styles from "./components/Site.module.css";
import { PageOne } from './components/pages/Adidas';
import { PageTwo } from './components/pages/Puma';
import { PageThree } from './components/pages/Abibas';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import { Error404 } from './components/pages/Error404';
import { S } from './components/Site.styles';
import { Model } from './components/pages/model';

export const PATH = {
    PAGE1: '/adidas',
    PAGE2: '/puma',
    PAGE3: '/abibas',
    ERROR: '/*'
} as const

export const App = () => {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <nav>
                        <S.NavWrapper>
                            <NavLink to={PATH.PAGE1} >{PATH.PAGE1}</NavLink>
                        </S.NavWrapper>
                        <S.NavWrapper>
                            <NavLink to={PATH.PAGE2} >{PATH.PAGE2}</NavLink>
                        </S.NavWrapper>
                        <S.NavWrapper>
                            <NavLink to={PATH.PAGE3} >{PATH.PAGE3}</NavLink>
                        </S.NavWrapper>
                    </nav>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path='/' element={<Navigate to={PATH.PAGE1} />} />
                        <Route path={PATH.PAGE1} element={<PageOne />} />
                        <Route path={PATH.PAGE2} element={<PageTwo />} />
                        <Route path={PATH.PAGE3} element={<PageThree />} />
                        <Route path={'/:model/:id'} element={<Model />} />
                        <Route path={'/:model/:id'} element={<Model />} />
                        <Route path={PATH.ERROR} element={<Error404 />} />
                    </Routes>
                </div>
            </div >
            <div className={styles.footer}>abibas 2023</div>
        </div >
    );
}
