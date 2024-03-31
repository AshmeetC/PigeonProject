import { motion } from "framer-motion"

function Events() {
    return (
        <div id="events" className="text-xl w-screen flex flex-col items-center text-center min-h-screen">
            <div className='flex flex-col justify-center lg:w-auto min-h-screen'>
                <motion.div initial={{ width: 50 }}
                    animate={{ width: "100%" }}
                    transition={{ ease: "easeInOut", duration: 0.7 }} className="overflow-hidden text-center font-extrabold  leading-normal tracking-normal lg:whitespace-nowrap lg:text-left lg:text-[3.6875rem] ">
                    <div>
                        <h1 className="text-7xl pb-10">Cirriculum</h1>
                    </div>
                </motion.div>
                <motion.div initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 1 }}>
                        <div className='flex flex-col justify-center items-center translate-y-24'>
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
            <div className="items-center gap-10 pb-10 text-left px-10">
                <div className="">
                    <p>Project Pigeon's tutoring services are currently centered around preparing
                        elementary level students for the upcoming State of Texas Assessment of Academic
                        Readiness (STAAR) by focusing on Texas Essential Knowledge and Skills (TEKS). This
                        will consist of mentorship surrounding basic subjects such as Math, English, Writing,
                        and Science.</p><br />
                    <p>We also include programs for ESL children to receive individual attention from our
                        volunteers.</p><br />
                </div>
                    <header className="font-extrabold text-3xl">
                        <h2 className="">Grades 1, 2 & 3 Focus</h2>
                    </header>
                    <ul className="list-disc mb-10 pl-10">
                        <li>Developing foundational language skills- understanding vocabulary, thinking
                            critically, and becoming familiar with various types of texts</li>
                        <li>Learning to form ideas using multiple texts</li>
                        <li>Understanding author's purpose and craft</li>
                        <li>Using elements of writing to compose text around personal experiences,
                            informational subjects, and persuasive topics</li>
                        <li>Familiarizing with numerical operations, numbers up to 100,000, fractions, two-
                            dimensional figures, and basic financial literacy</li>
                    </ul>
                    <header className="font-extrabold text-3xl">
                        <h2>Grade 4 Focus</h2>
                    </header>
                    <ul className="list-disc mb-10 pl-10">
                        <li>Recognizing and analyzing literary elements across traditional, contemporary,
                            classical, and diverse literary texts</li>
                        <li>Understanding how author's choices influence meaning within texts</li>
                        <li>Revising and editing text</li>
                        <li>Composing written text with a claim, organization, and development</li>
                        <li>Getting comfortable with numerical representations, computations, geometry
                            and measurement, data analysis, and personal financial literacy</li>
                    </ul>
                    <header className="font-extrabold text-3xl">
                        <h2>Grade 5 Focus</h2>
                    </header>
                    <ul className="list-disc mb-10 pl-10">
                        <li>Explaining structure of ideas within texts</li>
                        <li>Recognizing characteristics of different styles of text</li>
                        <li>Creating and developing a logical flow of ideas in writing</li>
                        <li>Using operations with decimals, representing equations with graphs & tables,
                            simplifying expressions, and geometry</li>
                        <li>Exploring science concepts related to matter and energy, organisms, and
                            scientific investigation</li>
                    </ul>
            </div>
        </div>
    );
}

export default Events