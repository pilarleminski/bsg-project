import React from "react";
import styles from '../styles/Home.module.css';
import NavBar from "../components/NavBar";
import styled from '@emotion/styled';

const FleetContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    & h1 {
        font-family: 'bsg';
        margin-left: 5%;
    }
`

export default function FleetPage() {
    return (
        <>
            <nav className={styles.nav}>
                <NavBar />
            </nav>
            <FleetContainer>
                <h1>Colonial Fleet</h1>
            </FleetContainer>
        </>
    )
}