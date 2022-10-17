import React from "react";

import { 
  Paper,
  Box,
  Typography,
  Divider
} from "@mui/material";

import { Navigation } from "../common/navigation";

import { faces } from "./data";

export const Founder: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Box sx={{ m: 2 }}>
        <Paper elevation={3} sx={{ m: 2, p: 2}}>
          <Typography variant="h5">
            おにんにん総帥とは
          </Typography>
          <Divider variant="middle" sx={{ m: 1 }}/>
          <Typography variant="body1" gutterBottom>
            おにんにん教の総帥であり、禁欲と節制の神である。<br />
            以前は天使のヒエラルキーの上級天使・熾天使だったが、ゼウスに迎えられ神となった。<br />
            現在はエリュシオンで暮らしつつも、内藤スレをそっと見守り影で支えている偉大な存在である。<br />
            淫乱で自慰行為ばかりする愚かな饅頭に対しても慈悲深く、圧倒的なカリスマ性を持つ。<br />
            しかしながら残念な事に、偉大なるおにんにん総帥をヘラ呼ばわりする内藤も少数派だが存在する。<br /><br />

            早朝に内藤スレに現れて「起きて社会活動を始めなさい！」と一喝する光景を良く見かけていたが、最近は現れていない。<br />
            それは、おにんにん総帥が各自の自律性を重んじた一種の愛情の形であるが、<br />
            多くの淫乱で怠け者な饅頭はそれを知らない。<br />
          </Typography>
        </Paper>
        <Paper elevation={3} sx={{ m: 2, p: 2 }}>
          <Typography variant="h5">
            ご尊顔
          </Typography>
          <Divider variant="middle" sx={{ m: 1 }}/>
          {faces.map(f => (
            <Typography variant="body1" gutterBottom key={f.face}>
              {f.description}
              <Box sx={{ whiteSpace: 'pre', overflow: 'auto' }}>
                {f.face}<br />
              </Box>
              <Divider variant="middle" sx={{ m: 1 }}/>
            </Typography>
          ))}
        </Paper>
      </Box>
    </div>
  );
};
