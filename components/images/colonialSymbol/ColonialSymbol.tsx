import React from 'react';
import Image from 'next/image';
import colonialSymbol from '../colonialSymbol/colonialSymbol.webp';
import styled from '@emotion/styled';

const ColonialSymbolImage = styled.div`
    display: flex;
    background-color: white;
`

export default function colonialSymbolImage() {
    return (
        <ColonialSymbolImage>
            <Image
            src = {colonialSymbol}
            alt = 'Colonial Symbol'
            />
        </ColonialSymbolImage>
    )
}

