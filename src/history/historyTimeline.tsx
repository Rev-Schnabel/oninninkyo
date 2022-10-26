import React from "react";

import {
  Timeline,
  TimelineItem,
  timelineItemClasses,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot
} from '@mui/lab';

import { 
  Paper,
  Typography,
  Link
} from "@mui/material";

import {
  AutoAwesome,
  Cake,
  FiberManualRecord,
  MilitaryTech,
  AccountBalance,
  Restaurant
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
          <TimelineDot color="info">
            <Cake />
          </TimelineDot>
        );
      case 'militaryTech':
        return (
          <TimelineDot color="success">
            <MilitaryTech />
          </TimelineDot>
        );
        case 'accountBalance':
          return (
            <TimelineDot color="warning">
              <AccountBalance />
            </TimelineDot>
          );
        case 'restaurant':
          return (
            <TimelineDot color="primary">
              <Restaurant />
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
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {history.sort((a, b) => +new Date(a.date) - +new Date(b.date)).map(h => (
          <TimelineItem key={h.date}>
            <TimelineSeparator>
              {icons(h.icon)}
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
              <Typography>{h.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Paper>
  );
};