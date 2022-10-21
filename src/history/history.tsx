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
  Box,
  Typography,
  Divider,
  Link
} from "@mui/material";

import {
  AutoAwesome,
  Cake,
  FiberManualRecord,
  MilitaryTech
} from '@mui/icons-material';

import { Navigation } from "../common/navigation";

import { history } from "./data";

export const History: React.FC = () => {
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
    <React.Fragment>
      <Navigation />
      <Box sx={{ m: 2 }}>
        <Paper elevation={3} sx={{ m: 2, p: 2}}>
          <Typography variant="h5">
            おにんにん教の歴史
          </Typography>
          <Divider variant="middle" sx={{ m: 1 }}/>
          <Typography variant="body1" gutterBottom>
            このページではおにんにん教の歴史を振り返る。<br />
            おにんにん教の誕生した日から、主要な出来事や事件をまとめる。各出来事のより詳細を知りたい場合は、<Link style={{ textDecoration: "none" }} href="https://rev-schnabel.github.io/oninninkyo/archive">おにんにん教書庫</Link>から辿ると良い。
          </Typography>
        </Paper>
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
      </Box>
    </React.Fragment>
  );
};
