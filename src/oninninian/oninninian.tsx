import React from "react";

import { 
  Paper,
  Box,
  Typography,
  Divider
} from "@mui/material";

import { Navigation } from "../common/navigation";
import { Introducer } from "./introducer";

import { 
  people,
  otherPeople,
  evilSpirits
} from "./data";

export const Oninninian: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Box sx={{ m: 2 }}>
        <Paper elevation={3} sx={{ m: 2, p: 2}}>
          <Typography variant="h5">
            おにんにん教の関連人物
          </Typography>
          <Divider variant="middle" sx={{ m: 1 }}/>
          <Typography variant="body1" gutterBottom>
            おにんにん教は数多くの弟子や信徒達から成っている。<br />
            このページでは信徒の中でも弟子として洗礼名を与えられた者達や、弟子では無いものの熱心な者を記載する。<br /><br />
            また、おにんにん教に災いをもたらした確執のある魑魅魍魎達や、魑魅魍魎でありながらおにんにん総帥を唸らせた者、魑魅魍魎と疑われるが妙な存在感を纏っている者についても記録する。
          </Typography>
        </Paper>
        <Introducer title="おにんにん総帥の弟子達" people={people} />
        <Introducer title="熱心な信徒達" people={otherPeople} />
        <Introducer title="特別に警戒すべき魑魅魍魎達" people={evilSpirits} />
      </Box>
    </div>
  );
};