import React from "react";
import Image from 'next/image';
import SharedLayout from '../app/SharedLayout';

const Home: React.FC = () => {
    return (
        <SharedLayout>
            <Image
                className="relative dark:invert"
                src="/synaptiq.png"
                alt="Synaptiq Logo"
                width={500}
                height={150}
                priority
            />
        </SharedLayout>
    );
};

export default Home;
