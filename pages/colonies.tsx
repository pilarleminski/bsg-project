import React from "react";
import styles from '../styles/Home.module.css';
import NavBar from "../components/NavBar";
import styled from '@emotion/styled';

const ColoniesContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
    & h1 {
        font-family: 'bsg';
        margin-left: 5%;
    }
`

export default function ColoniesPage() {
    return (
        <>
            <nav className={styles.nav}>
                <NavBar />
            </nav>
            <ColoniesContainer>
                <h1>The Twelve Colonies of Kobol</h1>
            </ColoniesContainer>
        </>
    )
}