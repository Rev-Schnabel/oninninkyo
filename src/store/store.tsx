import React from "react";

import {
  Paper,
  Box,
  Typography,
  Divider,
  Link
} from "@mui/material";

import { Navigation } from "../common/navigation";

export const Store: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Box sx={{ m: 2 }}>
        <Paper elevation={3} sx={{ m: 2, p: 2}}>
          <Typography variant="h5">
            おにんにん教公式グッズ売場
          </Typography>
          <Divider variant="middle" sx={{ m: 1 }}/>
          <Typography variant="body1" gutterBottom>
            イグニス牧師によりおにんにん教の公式グッズが販売されている。<br /><br />
            売上は主におにんにん教の神殿裏にある菜園の維持費に使用される。菜園ではハーブ等が栽培されており、このハーブを使ったハーブティーがイグニス牧師やミレイユによって来訪者に振る舞われている。<br /><br />
            ・<Link href="https://suzuri.jp/igboku">おにんにん教公式グッズ売場</Link>
          </Typography>
        </Paper>
      </Box>
    </div>
  );
};
