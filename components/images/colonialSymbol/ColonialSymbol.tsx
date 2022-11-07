import React from 'react';
import Image from 'next/image';
import colonialSymbol from '../colonialSymbol/colonialSymbol50x50.png';
import styled from '@emotion/styled';

const ColonialSymbolImage = styled.div`
    line-height: 0;
    margin-top: -20px;

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

