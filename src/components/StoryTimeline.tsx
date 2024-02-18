import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function StoryTimeline() {
  return (
    <Timeline position="alternate" className='text-cyan-600 mb-20'>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          <span className='text-2xl'>
            December 2023
          </span>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ 
            backgroundColor: 'rgb(234 88 12)'
          }} />
          <TimelineConnector sx={{ 
            backgroundColor: 'rgb(234 88 12)'
          }}/>
        </TimelineSeparator>
        <TimelineContent>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non laboriosam, sit enim eum autem hic ratione omnis voluptatem atque exercitationem temporibus, nam quasi magnam, repellendus quam! Tempore esse vel enim!
          </span>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          <span className='text-2xl'>
            January 2024
          </span>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot  sx={{ 
            backgroundColor: 'rgb(234 88 12)'
          }}/>
          <TimelineConnector sx={{ 
            backgroundColor: 'rgb(234 88 12)'
          }}/>
        </TimelineSeparator>
        <TimelineContent>
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, fuga quia. Voluptate ex optio omnis repellat quasi quod ratione tempore reprehenderit. Reprehenderit, ipsam nesciunt? Incidunt autem quos vero velit vel!
          </span>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          <span className='text-2xl'>
            February 2024
          </span>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot  sx={{ 
            backgroundColor: 'rgb(234 88 12)'
          }}/>
          <TimelineConnector sx={{ 
            backgroundColor: 'rgb(234 88 12)'
          }} />
        </TimelineSeparator>
        <TimelineContent>
          <span>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore dolor culpa, eligendi perferendis aliquam minima itaque aliquid soluta, architecto mollitia molestias accusantium harum unde ad temporibus facere vel porro officia.
          </span>
          </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          <span className='text-2xl'>
            February 2024
          </span>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot  sx={{ 
            backgroundColor: 'rgb(234 88 12)'
          }}/>
          <TimelineConnector sx={{ 
            backgroundColor: 'rgb(234 88 12)'
          }} />
        </TimelineSeparator>
        <TimelineContent>
          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas neque, porro enim eligendi corrupti pariatur? Blanditiis cum laudantium hic quia laboriosam explicabo cupiditate quasi officia! Debitis, accusantium amet. Veniam, dolore!
          </span>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}