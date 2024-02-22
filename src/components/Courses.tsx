import { motion } from "framer-motion"

function Events() {
    return (
        <div id="events" className="text-5xl w-screen flex justify-center text-center min-h-screen">  
            <div className='flex flex-col justify-center lg:w-auto'>
                <motion.div initial={{ width: 50 }}
                    animate={{ width: "100%" }}
                    transition={{ ease: "easeInOut", duration: 0.7 }} className="overflow-hidden text-center font-extrabold  leading-normal tracking-normal lg:whitespace-nowrap lg:text-left lg:text-[3.6875rem] ">
                        <div>
                            <h1 className="text-7xl pb-10">Cirriculum</h1>
                        </div>
                </motion.div>
            </div>
            
        </div>
    );
}

export default Events