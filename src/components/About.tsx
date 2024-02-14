import StoryTimeline from "./StoryTimeline";

// Credits: Eric Chen 
function About() {
    return (
        <div id="about" className="text-5xl h-screen w-screen bg-orange-200 flex justify-center text-center">
            
            <div>
                <h1 className="text-7xl py-32">Our Story</h1>
                <StoryTimeline/>
                <h1>Something Here</h1>
            </div>
        </div>
    );
}

export default About