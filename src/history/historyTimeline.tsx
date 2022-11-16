import React from "react";

import {
  Timeline,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent
} from '@mui/lab';

import { 
  Paper,
  Typography,
  Link
} from "@mui/material";

import { history } from "./data";
import { IconCatering } from "./iconCatering";

export const HistoryTimeline: React.FC = () => {
  return (
    <Paper elevation={3} sx={{ m: 2, p: 2}}>
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {history.sort((a, b) => +new Date(a.date) - +new Date(b.date)).map(h => (
          <TimelineItem key={h.date}>
            <TimelineSeparator>
              <IconCatering iconName={h.icon} />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                <Link style={{ textDecoration: "none" }} href={h.url}>{h.event}</Link>
              </Typography>
              <Typography color="textSecondary">{h.date}</Typography>
              {/*
              Allow scroll only the AA part but it does not work...
              {h.artwork && <Typography sx={{ p: 0, whiteSpace: 'pre',  overflow: 'auto' }}>{h.artwork}</Typography>}
              */}
              <Typography sx={{ whiteSpace: 'pre-wrap' }}>{h.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Paper>
  );
};