import StoryTimeline from "./StoryTimeline";

// Credits: Eric Chen 
function About() {
    return (

        <div id="about" className="text-5xl w-screen bg-orange-200 flex justify-center text-center">
            
            <div>
                <h1 className="text-7xl my-16">Our Story</h1>
                <StoryTimeline/>
            </div>
        </div>
    );
}

export default About