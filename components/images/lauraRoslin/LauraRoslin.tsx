import Image from 'next/image';
import LauraRoslin from '../lauraRoslin/LauraRoslin.jpg';
import styled from '@emotion/styled';

const RoslinImage = styled.div`
    margin-right: 5%;
`

export default function LauraRoslinImage() {
    return (
        <RoslinImage>
            <Image
            src = {LauraRoslin}
            alt = 'Laura Roslin, President fo the Twelve Colonies of Kobol'
            />
        </RoslinImage>
    )
}