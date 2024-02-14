import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function StoryTimeline() {
  return (
    <Timeline position="alternate" className='text-cyan-600'>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          December 2023
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ 
            backgroundColor: 'rgb(234 88 12)'
          }} />
          <TimelineConnector sx={{ 
            backgroundColor: 'rgb(234 88 12)'
          }}/>
        </TimelineSeparator>
        <TimelineContent>We did something on this date</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          January 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot  sx={{ 
            backgroundColor: 'rgb(234 88 12)'
          }}/>
          <TimelineConnector sx={{ 
            backgroundColor: 'rgb(234 88 12)'
          }}/>
        </TimelineSeparator>
        <TimelineContent>We did something on this date</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          February 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot  sx={{ 
            backgroundColor: 'rgb(234 88 12)'
          }}/>
          <TimelineConnector sx={{ 
            backgroundColor: 'rgb(234 88 12)'
          }} />
        </TimelineSeparator>
        <TimelineContent>We did something on this date</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
          February 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot  sx={{ 
            backgroundColor: 'rgb(234 88 12)'
          }}/>
          <TimelineConnector sx={{ 
            backgroundColor: 'rgb(234 88 12)'
          }} />
        </TimelineSeparator>
        <TimelineContent>We did something on this date</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}