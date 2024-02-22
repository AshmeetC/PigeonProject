import { motion } from "framer-motion"
function Team() {

    return (
        <div id="team" className="items-center min-h-screen w-screen flex-col space-y-4 flex justify-center">
            <div className='items-center justify-between'>
                <div className='flex flex-col justify-center lg:w-auto min-h-screen'>
                    <motion.div initial={{ width: 50 }}
                    animate={{ width: "100%" }}
                    transition={{ ease: "easeInOut", duration: 0.7 }} className="overflow-hidden text-center font-extrabold  leading-normal tracking-normal lg:whitespace-nowrap lg:text-left lg:text-[3.6875rem] ">
                        <div>
                            <h1 className="text-7xl pb-10">Our Leadership Team</h1>
                     </div>
                    </motion.div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 px-16 flex">
            <motion.div initial={{ y: 50, opacity : 0}} animate={{ y: 0, opacity: 1}} transition={{ ease: "easeInOut", duration: 0.5 }} className="flex flex-col lg:flex-row mb-10 gap-10  bg-[#2f9fcf] rounded-3xl">
                <div className="py-8 px-8 bg-[#7494a0] rounded-2xl flex flex-col items-center justify-center opacity-75">
                    <img className="w-64 h-64 object-cover" src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" alt="Description of the image" />
                    <p className="mt-4 text-center">Some text underneath the image Some text underneath the image Some text underneath the image Some text underneath the image</p>
                </div>
            </motion.div>

            <motion.div initial={{ y: 50, opacity : 0}} animate={{ y: 0, opacity: 1}} transition={{ ease: "easeInOut", duration: 0.5 }} className="flex flex-col lg:flex-row mb-10 gap-10  bg-[#2f9fcf] rounded-3xl">
                <div className="py-8 px-8 bg-[#7494a0] rounded-2xl flex flex-col items-center justify-center opacity-75">
                    <img className="w-64 h-64 object-cover" src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" alt="Description of the image" />
                    <p className="mt-4 text-center">Some text underneath the image Some text underneath the image Some text underneath the image Some text underneath the image</p>
                </div>
            </motion.div>

            <motion.div initial={{ y: 50, opacity : 0}} animate={{ y: 0, opacity: 1}} transition={{ ease: "easeInOut", duration: 0.5 }} className="flex flex-col lg:flex-row mb-10 gap-10  bg-[#2f9fcf] rounded-3xl">
                <div className="py-8 px-8 bg-[#7494a0] rounded-2xl flex flex-col items-center justify-center opacity-75">
                    <img className="w-64 h-64 object-cover" src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" alt="Description of the image" />
                    <p className="mt-4 text-center">Some text underneath the image Some text underneath the image Some text underneath the image Some text underneath the image</p>
                </div>
            </motion.div>

            <motion.div initial={{ y: 50, opacity : 0}} animate={{ y: 0, opacity: 1}} transition={{ ease: "easeInOut", duration: 0.5 }} className="flex flex-col lg:flex-row mb-10 gap-10  bg-[#2f9fcf] rounded-3xl">
                <div className="py-8 px-8 bg-[#7494a0] rounded-2xl flex flex-col items-center justify-center opacity-75">
                    <img className="w-64 h-64 object-cover" src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" alt="Description of the image" />
                    <p className="mt-4 text-center">Some text underneath the image Some text underneath the image Some text underneath the image Some text underneath the image</p>
                </div>
            </motion.div>

            <motion.div initial={{ y: 50, opacity : 0}} animate={{ y: 0, opacity: 1}} transition={{ ease: "easeInOut", duration: 0.5 }} className="flex flex-col lg:flex-row mb-10 gap-10  bg-[#2f9fcf] rounded-3xl">
                <div className="py-8 px-8 bg-[#7494a0] rounded-2xl flex flex-col items-center justify-center opacity-75">
                    <img className="w-64 h-64 object-cover" src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" alt="Description of the image" />
                    <p className="mt-4 text-center">Some text underneath the image Some text underneath the image Some text underneath the image Some text underneath the image</p>
                </div>
            </motion.div>

            <motion.div initial={{ y: 50, opacity : 0}} animate={{ y: 0, opacity: 1}} transition={{ ease: "easeInOut", duration: 0.5 }} className="flex flex-col lg:flex-row mb-10 gap-10  bg-[#2f9fcf] rounded-3xl">
                <div className="py-8 px-8 bg-[#7494a0] rounded-2xl flex flex-col items-center justify-center opacity-75">
                    <img className="w-64 h-64 object-cover" src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" alt="Description of the image" />
                    <p className="mt-4 text-center">Some text underneath the image Some text underneath the image Some text underneath the image Some text underneath the image</p>
                </div>
            </motion.div>

            </div>
        </div>
    );
}

export default Team;
