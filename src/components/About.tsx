import { motion } from "framer-motion"

// Credits: Eric Chen 
function About() {
    return (
        
<div id="about" className="min-h-screen w-full items-center justify-between text-xl md:text-3xl flex flex-col justify-center text-center h-full py-48">  
                <div className='flex flex-col justify-center xl:w-auto'>
                    <motion.div initial={{ width: 50, y : 50, opacity : 0}}
                        whileInView={{ width: "100%", y: 0, opacity: 1}}
                        transition={{ ease: "easeInOut", duration: 1 }} className="overflow-hidden text-center font-extrabold leading-normal tracking-normal xl:whitespace-nowrap">
                        <div>
                            <h1 className="text-7xl pb-10">Our Journey</h1>
                        </div>
                    </motion.div>
                </div>
            <div className="flex flex-col justify-center items-center">
                <motion.div initial={{opacity : 0, y: 100}} whileInView={{opacity: 1, y: 0}}
  transition={{ ease: "easeInOut", duration: 0.8 }} className="flex flex-col xl:flex-row mb-10 gap-10 py-20 md:py-48 px-10 md:px-20 w-5/6 bg-[#2f9fcf] rounded-3xl">
                    <div className="w-full h-full text-left">
                        <h1 className="text-5xl font-bold mb-10">Title</h1>
                        <p>
                            In the Houston area, many children face the harsh reality of underprivileged circumstances, with those attending Title I schools often bearing a disproportionate burden. These children often come from families struggling with economic hardships, limited access to quality healthcare, and insufficient resources to support their educational journey. Within Title I schools specifically, these challenges are compounded by factors such as high student-to-teacher ratios, outdated facilities, and a lack of essential educational materials. As a result, these students are often denied the same opportunities afforded to their peers, hindering their academic progress and limiting their future prospects. This harsh cycle of poverty and inequality repeats itself as these children struggle to break free from the constraints imposed by their circumstances.
                        </p>
                    </div>
                    <div className="w-full h-full mt-10 md:mt-36 xl:mt-0">
                        <img className="w-full h-full" src="https://placehold.co/600x400" alt="" />
                    </div>
                </motion.div>
                <motion.div initial={{opacity : 0, y: 100 }} whileInView={{opacity : 1, y: 0}}
  transition={{ ease: "easeInOut", duration: 0.8 }} className="flex flex-col gap-10 xl:flex-row py-20 md:py-48 px-10 md:px-20 w-5/6 rounded-3xl bg-[#2f9fcf]">
                    <div className="w-full h-full mt-10 md:mt-36 xl:mt-0">
                        <img className="w-full h-full" src="https://placehold.co/600x400" alt="" />
                    </div>
                    <div className="w-full h-full md:text-right text-left">
                        <h1 className="text-5xl mb-10 font-bold">Title</h1>
                        <p>
                        Project Pigeon recognizes the potential within every child, regardless of their background. Through group tutoring sessions, personalized support, and enrichment programs, we are committed to leveling the playing field and empowering underprivileged children in Houston, particularly those attending Title I schools. By providing access to quality education, mentorship programs, and essential resources, we strive to take down barriers to success and create pathways for these children to thrive academically and beyond. Together, we can rewrite the narrative for underprivileged children in Houston, ensuring that they have the opportunities and support they need to reach their full potential.
                        </p>
                    </div>
                </motion.div>
            </div>
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

export default About