import StoryTimeline from "./StoryTimeline";

// Credits: Eric Chen 
function About() {
    return (
        <div id="about" className="text-3xl w-screen bg-orange-200 flex flex-col justify-center text-center h-full py-48">  
            <div>
                <h1 className="text-7xl pb-10">Our Story</h1>
            </div>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col lg:flex-row mb-10 gap-10 py-48 px-20 w-5/6 border-8 border-emerald-800 rounded bg-emerald-600">
                    <div className="w-full h-full text-left">
                        <h1 className="text-5xl font-bold mb-10">Title</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum nam distinctio quibusdam nisi? Nesciunt sunt aut quam corporis ipsum earum alias provident. Est veritatis id temporibus fuga aliquid qui. Impedit quis nisi numquam fugiat ipsum eveniet necessitatibus tenetur. Quaerat, necessitatibus.
                        </p>
                    </div>
                    <div className="w-full  h-full mt-36 lg:mt-0">
                        <img className="w-full h-full" src="https://placehold.co/600x400" alt="" />
                    </div>
                </div>
                <div className="flex flex-col gap-10 lg:flex-row py-48 px-20 w-5/6 border-8 border-emerald-800 rounded bg-emerald-600">
                    <div className="w-full h-full mt-36 lg:mt-0">
                        <img className="w-full h-full" src="https://placehold.co/600x400" alt="" />
                    </div>
                    <div className="w-full h-full text-right">
                        <h1 className=" text-5xl mb-10 font-bold">Title</h1>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum nam distinctio quibusdam nisi? Nesciunt sunt aut quam corporis ipsum earum alias provident. Est veritatis id temporibus fuga aliquid qui. Impedit quis nisi numquam fugiat ipsum eveniet necessitatibus tenetur. Quaerat, necessitatibus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About