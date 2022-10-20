import React from "react";

import { 
  Paper,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Link
} from "@mui/material";

import { Navigation } from "../common/navigation";

import { archive } from "./data";

export const Archive: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Box sx={{ m: 2 }}>
        <Paper elevation={3} sx={{ m: 2, p: 2}}>
          <Typography variant="h5">
            おにんにん教書庫
          </Typography>
          <Divider variant="middle" sx={{ m: 1 }}/>
          <Typography variant="body1" gutterBottom>
            このページではおにんにん教の過去の記録をまとめる。<br />
            著作権上の問題が起きうるか現時点では不明なため、過去スレのリンク集という形を取る。<br />
            問題が無いようであれば、記録を永久に残すために過去スレの内容を別途本ページのリポジトリへ保管したい。
          </Typography>
          <Divider variant="middle" sx={{ m: 1 }}/>
          <List sx={{ p: 0, whiteSpace: 'pre', overflow: 'auto' }}>
            {archive.map((data) => (
              <ListItem key={data.url}>
                <ListItemText secondary={data.description && "    " + data.description}>
                  <Link style={{ textDecoration: "none" }} href={data.url}>{data.title}</Link>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Paper>
        <Paper elevation={3} sx={{ m: 2, p: 2}}>
          <Typography variant="h5">
            現在の神殿
          </Typography>
          <Divider variant="middle" sx={{ m: 1 }}/>
          <Typography variant="body1" gutterBottom>
            現在の神殿は以下に建てられている。<br />
            ・<Link style={{ textDecoration: "none" }} href="https://jbbs.shitaraba.net/bbs/read.cgi/study/12015/1363951037/l50">（　＾ω＾）おにんにん教</Link><br /><br />
            もし興味があれば、正式な神殿以外の資料も確認すると良い。もっとも、魑魅魍魎の作成したものも多数あるが…。<br />
            ・<Link style={{ textDecoration: "none" }} href="https://kakolog.jp/?q=%E3%81%8A%E3%81%AB%E3%82%93%E3%81%AB%E3%82%93%E6%95%99&d=2012">かころぐβ</Link><br />
            ・<Link style={{ textDecoration: "none" }} href="https://jbbs.shitaraba.net/study/12015/">聖おにんにん教したらば神殿</Link><br />
            ・<Link style={{ textDecoration: "none" }} href="https://jbbs.shitaraba.net/bbs/subject.cgi/study/12015/?q=%E3%81%8A%E3%81%AB%E3%82%93%E3%81%AB%E3%82%93%E6%95%99">したらば掲示板検索</Link><br />
            ・<Link style={{ textDecoration: "none" }} href="https://jbbs.shitaraba.net/internet/17864/">アラスカ</Link><br /><br />
            協議の結果現在は鍵垢となったが、おにんにん総帥や弟子達の名言を呟く Twitter アカウントがある。正式な弟子では無いものの、アスース、ディオトドスの両名によって管理されていた。両名の尽力に感謝！<br />
            ・<Link style={{ textDecoration: "none" }} href="https://twitter.com/oninninkyo">おにんにん教</Link><br /><br />
          </Typography>
        </Paper>
      </Box>
    </div>
  );
};
