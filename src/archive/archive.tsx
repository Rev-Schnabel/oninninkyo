import React from "react";

import { 
  Paper,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText
} from "@mui/material";

import { Navigation } from "../common/navigation";

type Archive = {
  title: string;
  url: string;
  description?: string;
};

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
                  <a style={{ textDecoration: "none" }} href={data.url}>{data.title}</a>
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
            現在の神殿は以下に建てられている。<br /><br />
            <a style={{ textDecoration: "none" }} href="https://jbbs.shitaraba.net/bbs/read.cgi/study/12015/1363951037/l50">（　＾ω＾）おにんにん教</a><br /><br />
            もし興味があれば、正式な神殿以外の資料も確認すると良い。もっとも、魑魅魍魎の作成したものも多数あるが…。<br /><br />
            <a style={{ textDecoration: "none" }} href="https://kakolog.jp/?q=%E3%81%8A%E3%81%AB%E3%82%93%E3%81%AB%E3%82%93%E6%95%99&d=2012">かころぐβ</a><br />
            <a style={{ textDecoration: "none" }} href="https://jbbs.shitaraba.net/study/12015/">聖おにんにん教したらば神殿</a><br />
            <a style={{ textDecoration: "none" }} href="https://jbbs.shitaraba.net/bbs/subject.cgi/study/12015/?q=%E3%81%8A%E3%81%AB%E3%82%93%E3%81%AB%E3%82%93%E6%95%99">したらば掲示板検索</a><br />
          </Typography>
        </Paper>
      </Box>
    </div>
  );
};

const archive: Archive[] = [
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教総合",
    url: "https://uni.5ch.net/test/read.cgi/psy/1325761010/",
  },
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教★２",
    url: "https://uni.5ch.net/test/read.cgi/psy/1327750781/",
  },
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教★３",
    url: "https://uni.5ch.net/test/read.cgi/psy/1328889186/",
  },
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教★４",
    url: "https://uni.5ch.net/test/read.cgi/psy/1330833067/",
  },
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教★5",
    url: "https://anago.5ch.net/test/read.cgi/neet4vip/1340527680/",
    description: "✖️ 魑魅魍魎によって建てられた偽りの神殿",
  },
  { 
    title: "【おにんにん総帥】シベリア小神殿【（　＾ω＾）人】",
    url: "https://toro.5ch.net/test/read.cgi/siberia/1333020386/",
    description: "👍 事実上のおにんにん教★5",
  },
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教★６",
    url: "https://toro.5ch.net/test/read.cgi/siberia/1336240072/",
  },
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教★7",
    url: "https://toro.5ch.net/test/read.cgi/siberia/1341038938/",
    description: "✖️ 魑魅魍魎によって建てられた偽りの神殿",
  },
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教★8",
    url: "https://toro.5ch.net/test/read.cgi/siberia/1341138609/",
  },
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教★9",
    url: "https://toro.5ch.net/test/read.cgi/siberia/1343089717/",
    description: "✖️ 魑魅魍魎によって建てられた偽りの神殿",
  },
  { 
    title: "【おにんにん総師】（　＾ω＾）おにんにん教★10",
    url: "https://toro.5ch.net/test/read.cgi/siberia/1343208178/",
  },
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教★11",
    url: "https://toro.5ch.net/test/read.cgi/siberia/1344859490/",
  },
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教★12",
    url: "https://toro.5ch.net/test/read.cgi/siberia/1346503392/",
    description: "✖️ 魑魅魍魎によって建てられた偽りの神殿",
  },
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教★13",
    url: "https://toro.5ch.net/test/read.cgi/siberia/1346823121/",
  },
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教★14",
    url: "https://toro.5ch.net/test/read.cgi/siberia/1348986282/",
    description: "✖️ 魑魅魍魎によって建てられた偽りの神殿",
  },
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教★15",
    url: "https://toro.5ch.net/test/read.cgi/siberia/1349027051/",
  },
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教★16",
    url: "https://toro.5ch.net/test/read.cgi/siberia/1351403560/",
  },
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教★17",
    url: "https://toro.5ch.net/test/read.cgi/siberia/1352723287/",
  },
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教★18",
    url: "https://toro.5ch.net/test/read.cgi/siberia/1354343934/",
  },
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教★19",
    url: "https://toro.5ch.net/test/read.cgi/siberia/1356692122",
  },
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教★20",
    url: "https://toro.5ch.net/test/read.cgi/siberia/1359776314/",
  },
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教★21",
    url: "https://toro.5ch.net/test/read.cgi/siberia/1362959934/",
  },
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教★22",
    url: "https://toro.5ch.net/test/read.cgi/siberia/1367344186/",
  },
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教★23",
    url: "https://toro.5ch.net/test/read.cgi/siberia/1373900023/",
  },
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教★24",
    url: "https://toro.5ch.net/test/read.cgi/siberia/1387686882/",
  },
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教★25",
    url: "https://mastiff.5ch.net/test/read.cgi/siberia/1395630708/",
  },
  { 
    title: "【おにんにん総帥】（　＾ω＾）おにんにん教★26",
    url: "https://mastiff.5ch.net/test/read.cgi/siberia/1411492634/",
  },
]
