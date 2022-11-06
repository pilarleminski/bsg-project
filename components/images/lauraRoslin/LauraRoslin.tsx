import Image from 'next/image';
import LauraRoslin from '../lauraRoslin/LauraRoslin.jpg';

export default function LauraRoslinImage() {
    return (
        <>
            <Image
            src = {LauraRoslin}
            alt = 'Laura Roslin, President fo the Twelve Colonies of Kobol'
            />
        </>
    )
}