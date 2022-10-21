import React from "react";

import { 
  Paper,
  Box,
  Typography,
  Divider,
  Link
} from "@mui/material";

import { Navigation } from "../common/navigation";
import { HistoryTimeline } from "./historyTimeline";

export const History: React.FC = () => {
  return (
    <React.Fragment>
      <Navigation />
      <Box sx={{ m: 2 }}>
        <Paper elevation={3} sx={{ m: 2, p: 2}}>
          <Typography variant="h5">
            【工事中】おにんにん教の歴史
          </Typography>
          <Divider variant="middle" sx={{ m: 1 }}/>
          <Typography variant="body1" gutterBottom>
            このページではおにんにん教の歴史を振り返る。<br />
            おにんにん教の誕生した日から、主要な出来事や事件をまとめる。各出来事のより詳細を知りたい場合は、<Link style={{ textDecoration: "none" }} href="https://rev-schnabel.github.io/oninninkyo/archive">おにんにん教書庫</Link>から辿ると良い。
          </Typography>
        </Paper>
        <HistoryTimeline />
      </Box>
    </React.Fragment>
  );
};
