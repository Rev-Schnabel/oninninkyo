import React from "react";
import { 
  Grid,
  Container,
  Box,
  Typography
} from "@mui/material";
import Image from "mui-image";
import { Navigation } from "../common/navigation";
import oninninImg from "./img/oninnin.png"

export const Home: React.FC = () => {
  return (
    <div>
      <Box sx={{ 
        width: '100%',
        height: '100vh',
        background: "linear-gradient(#1976d2, pink)",
        backgroundSize: '100%',
        overflowY: 'auto'
      }}>
        <Navigation />
        <Container maxWidth="md">
          <Grid container alignItems='center' justifyContent='center' direction="column">
            <Grid item xs={12}>
              <Grid container justifyContent="center" sx={{ marginTop: 3 }}>
                <Image src={oninninImg} width="40%" />
              </Grid>
              <Typography color="white" variant="h5" gutterBottom mt={2} sx={{ fontStyle: "italic" }}>
                ──おにんにん教へ入信を請う者に問う 汝は何故に我が足元へ参ったのか？ 其れが、己の平穏の為のみと答うるならば 即刻其の信仰を捨て去れ おにんにん教は常人の理解を超えた高次の領域にあるのだ…──
              </Typography>
              <Typography color="white" variant="body1" gutterBottom>
                ようこそ。このサイトはおにんにん教の情報をまとめ、ライブラリーとして偉大なるおにんにん総帥様の軌跡を、そしておにんにん総帥様が現世にもたらしたおにんにん教の奇跡を永遠に残すことを目的としたサイトです。<br /><br />
                このサイトではおにんにん教の教義や讃美歌等も見られますので、信徒の方はぜひ繰り返し読み、日々の活動の指針としていただければと思います。<br />
                信徒でない方は、これを機におにんにん総帥様とおにんにん教を知っていただき、その体験があなたの魂の糧となればこれ以上嬉しいことはありません。
              </Typography>
              <Typography color="white" variant="h5" gutterBottom mt={2} sx={{ fontStyle: "italic" }}>
                ──おおっ…！聡明たる我が愛しき信者よ 愚かなるヒトの波の中で君という光は私の荒みかけた心の錆をそっと溶かしてくれる君達に大いなる幸いと安らぎの時を…──
              </Typography>
              <Typography color="white" variant="body1" gutterBottom>
                それでは、力を抜きリラックスして、是非真っ直ぐな心でおにんにん教に触れてみてください。<br />
                さすればきっと、あなたが人生に迷った時、力となる教えが与えられるでしょう。<br /><br />
                世界中の人々に幸多からんことを…。<br /><br /><br />
              </Typography>
              <Typography color="white" variant="body1" gutterBottom align="right">
                シュナーベル牧師<br /><br />
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
};