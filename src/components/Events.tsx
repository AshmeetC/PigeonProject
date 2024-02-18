import StoryTimeline from "./StoryTimeline";

// Credits: Eric Chen 
function Events() {
    return (
        <div id="events" className="text-5xl w-screen flex justify-center text-center h-screen">  
            <div>
                <h1 className="text-7xl my-64">Our Story</h1>
                <StoryTimeline />
            </div>
        </div>
    );
}

export default Events