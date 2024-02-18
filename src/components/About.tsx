import { motion } from "framer-motion"

// Credits: Eric Chen 
function About() {
    return (
        
<div id="about" className="min-h-screen w-full items-center justify-between text-3xl flex flex-col justify-center text-center h-full py-48">  
            <div className="flex w-full flex-col justify-center lg:w-auto">
                <motion.div initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ ease: "easeInOut", duration: 0.7 }} className="overflow-hidden text-center font-extrabold  leading-normal tracking-normal lg:whitespace-nowrap lg:text-left lg:text-[3.6875rem] ">
                    <div>
                        <h1 className="text-7xl pb-10">Our Story</h1>
                    </div>
                </motion.div>
            </div>
            <div className="flex flex-col justify-center items-center">
                <motion.div initial={{ x: -100, opacity : 0, y: 50}} whileInView={{ x: 0, opacity: 1, y: 0}}
  transition={{ ease: "easeInOut", duration: 0.5 }} className="flex flex-col lg:flex-row mb-10 gap-10 py-48 px-20 w-5/6 bg-[#2f9fcf] rounded-3xl">
                    <div className="w-full h-full text-left">
                        <h1 className="text-5xl font-bold mb-10">Title</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum nam distinctio quibusdam nisi? Nesciunt sunt aut quam corporis ipsum earum alias provident. Est veritatis id temporibus fuga aliquid qui. Impedit quis nisi numquam fugiat ipsum eveniet necessitatibus tenetur. Quaerat, necessitatibus.
                        </p>
                    </div>
                    <div className="w-full  h-full mt-36 lg:mt-0">
                        <img className="w-full h-full" src="https://placehold.co/600x400" alt="" />
                    </div>
                </motion.div>
                <motion.div initial={{ x: 100, opacity : 0, y: 50 }} whileInView={{ x: 0, opacity : 1, y: 0}}
  transition={{ ease: "easeInOut", duration: 0.5 }} className="flex flex-col gap-10 lg:flex-row py-48 px-20 w-5/6 rounded-3xl bg-[#2f9fcf]">
                    <div className="w-full h-full mt-36 lg:mt-0">
                        <img className="w-full h-full" src="https://placehold.co/600x400" alt="" />
                    </div>
                    <div className="w-full h-full text-right">
                        <h1 className=" text-5xl mb-10 font-bold">Title</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum nam distinctio quibusdam nisi? Nesciunt sunt aut quam corporis ipsum earum alias provident. Est veritatis id temporibus fuga aliquid qui. Impedit quis nisi numquam fugiat ipsum eveniet necessitatibus tenetur. Quaerat, necessitatibus.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}

export default About