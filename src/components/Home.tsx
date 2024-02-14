// Credits: Eric Chen 
import React, { useState, useEffect } from 'react';

function Home() {
    const targetNumber = 138;
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
        if (currentNumber < targetNumber) {
            const intervalId = setInterval(() => {
                setCurrentNumber((prevNumber) => prevNumber + 1);
            }, 3);
            return () => clearInterval(intervalId);
        }
    }, [currentNumber, targetNumber]);

    return (
        <div id="home" className="h-screen w-screen bg-orange-100 flex items-center justify-center flex-col space-y-4">
            <h1 className="text-7xl text-center">Students Taught</h1>
            <div className='bg-orange-300 rounded px-10 py-10 w-60 h-50 flex items-center justify-center'>
                <p className="text-7xl font-bold">{currentNumber}</p>
            </div>
        </div>
    );
}

export default Home;
