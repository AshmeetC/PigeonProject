// Credits: Eric Chen 
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

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
        <div id="home" className="h-screen w-screen flex items-center justify-center flex-col space-y-4">
            <div className='items-center justify-between'>
                <div className='flex flex-col justify-center lg:w-auto'>
                    <motion.div initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ ease: "easeInOut", duration: 0.7 }} className="overflow-hidden text-center font-extrabold  leading-normal tracking-normal lg:whitespace-nowrap">
                        <div>
                            <h1 className="text-7xl pb-10">Students Taught</h1>
                        </div>
                    </motion.div>
                </div>
            </div>
            <div className='bg-[#2f9fcf] rounded px-10 py-10 w-60 h-50 flex items-center justify-center'>
                <p className="text-7xl font-bold">{currentNumber}</p>
            </div>
            <div>
                <a href="">Learn More</a>
            </div>
        </div>
    );
}

export default Home;
