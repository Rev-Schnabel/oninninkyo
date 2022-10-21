import React from "react";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/lab';

import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';

import { 
  Paper,
  Typography,
  Link
} from "@mui/material";

import {
  AutoAwesome,
  Cake,
  FiberManualRecord,
  MilitaryTech
} from '@mui/icons-material';

import { history } from "./data";

export const HistoryTimeline: React.FC = () => {
  const icons = (icon: string | undefined) => {
    switch(icon) {
      case 'autoAwesome':
        return (
          <TimelineDot color="warning">
            <AutoAwesome />
          </TimelineDot>
        );
      case 'cake':
        return (
          <TimelineDot color="primary">
            <Cake />
          </TimelineDot>
        );
      case 'militaryTech':
        return (
          <TimelineDot color="success">
            <MilitaryTech />
          </TimelineDot>
        );
      default:
        return (
          <TimelineDot color="grey">
            <FiberManualRecord />
          </TimelineDot>
        );
    }
  }

  return (
    <Paper elevation={3} sx={{ m: 2, p: 2}}>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        {history.sort((a, b) => +new Date(a.date) - +new Date(b.date)).map(h => (
          <TimelineItem key={h.date}>
            <TimelineOppositeContent color="textSecondary">
              {h.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
              {icons(h.icon)}
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                <Link style={{ textDecoration: "none" }} href={h.url}>{h.event}</Link>
              </Typography>
              <Typography>{h.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Paper>
  );
};