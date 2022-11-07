import React from "react";
import styles from '../styles/Home.module.css';
import NavBar from "../components/NavBar";
import styled from '@emotion/styled';

const CylonsContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    & h1 {
        font-family: 'bsg';
        margin-left: 5%;
    }
`

export default function CylonsPage() {
    return (
        <>
            <nav className={styles.nav}>
                <NavBar />
            </nav>
            <CylonsContainer>
                <h1>Cylon Information</h1>
            </CylonsContainer>
        </>
    )
}