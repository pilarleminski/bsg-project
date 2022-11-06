import React from 'react';
import Image from 'next/image';
import colonies from '../colonies/colonies.png';
import styled from '@emotion/styled';

const ColoniesImage = styled.div`
    background-color: white;
    

`

export default function coloniesImage() {
    return (
        <ColoniesImage>
            <Image
            src = {colonies}
            alt = 'Flags of the Twelve Colonies of Kobol'
            />
        </ColoniesImage>
    )
}
