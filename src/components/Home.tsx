// Co-Authored by Ashmeet Chhabra and Eric Chen 
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

function Home() {
    const targetNumber = 165;
    const [currentNumber, setCurrentNumber] = useState(0);

    useEffect(() => {
        if (currentNumber < targetNumber) {
            const intervalId = setInterval(() => {
                setCurrentNumber((prevNumber) => prevNumber + 1);
            }, 5);
            return () => clearInterval(intervalId);
        }
    }, [currentNumber, targetNumber]);

    return (
        <div id="home" className="h-screen w-screen flex justify-center items-center flex-col space-y-4">
            <div className='items-center justify-between'>
                <div className='flex flex-col justify-center lg:w-auto'>
                    <motion.div initial={{ width: 50, y : 50, opacity : 0}}
                        animate={{ width: "100%", y: 0, opacity: 1}}
                        transition={{ ease: "easeInOut", duration: 1 }} className="overflow-hidden text-center font-extrabold leading-normal tracking-normal lg:whitespace-nowrap">
                        <div>
                            <h1 className="text-7xl pb-10">Students Taught</h1>
                        </div>
                    </motion.div>
                </div>
            </div>
            <motion.div initial={{y : 60, opacity : 0}}
                animate={{y: 0, opacity: 1}}
                transition={{ ease: "easeInOut", duration: 1.2 }} className="items-center justify-center overflow-hidden text-center font-extrabold leading-normal tracking-normal lg:whitespace-nowrap">
                    <div className='bg-[#2f9fcf] rounded px-30 py-10 w-60 h-50 flex items-center justify-center'>
                        <p className="text-7xl font-bold">{currentNumber}</p>
                    </div>
            </motion.div>
            <motion.div initial={{y : 100, opacity : 0}}
                animate={{y: 0, opacity: 1}}
                transition={{ ease: "easeInOut", duration: 1.2 }}>
                    <div className='flex flex-col justify-center items-center translate-y-32'>
                        <svg
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="angles-down"
                            className="svg-inline--fa fa-angles-down fa-3x text-white"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            width={50}
                            height={50}
                            >
                            <path
                                fill="currentColor"
                                d="M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"
                            ></path>
                        </svg>
                </div>
            </motion.div>
        </div>
    );
}

export default Home;
