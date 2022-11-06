import React from 'react';
import Image from 'next/image';
import colonialSymbol from '../colonialSymbol/colonialSymbol100x100.png';
import styled from '@emotion/styled';

const ColonialSymbolImage = styled.div`
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

