import React from "react";

import { 
  Paper,
  Box,
  Typography,
  Divider
} from "@mui/material";

import { Navigation } from "../common/navigation";

export const About: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Box sx={{ m: 2 }}>
        <Paper elevation={3} sx={{ m: 2, p: 2}}>
          <Typography variant="h5">
            おにんにん教とは
          </Typography>
          <Divider variant="middle" sx={{ m: 1 }}/>
          <Typography variant="body1" gutterBottom>
            おにんにん教とはおにんにん総帥を開祖とする宗教である。<br />
            正式な活動開始日は 2012/01/05 (日本時間) とされる。毎年同日には式典が開催され世界各国から信徒達が集まり、聖なる日として祝われる。<br />
            「おにんにん」とは人と人が並び合い、支え合って生きて行く姿を理想とした「お人人」を由来とする。<br />
            おにんにん教の神殿では日々敬虔な信徒の弟子たちが熱心に祈りを捧げ、議論し、修行に励んでいる。時にはおにんにん総帥自らが弟子たちの議論に参加し、その奥深い知識と幅広い経験、鋭い慧眼で弟子たちを導いている。<br /><br />
            本サイトはおにんにん教とその歴史、おにんにん総帥やその高弟達の紹介を行い、おにんにん教のライブラリーとなることを目的としている。
          </Typography>
        </Paper>
        <Paper elevation={3} sx={{ m: 2, p: 2}}>
          <Typography variant="h5">
            おにんにん教における「ヒト」のヒエラルキー
          </Typography>
          <Divider variant="middle" sx={{ m: 1 }}/>
          <Typography variant="body1" gutterBottom display="inline">
            【愚物】<br />
            もっとも愚かで価値の無いヒトに分類されるヒエラルキー。物事を損得で判断し、自分自身の利益の為なら他人に平気で危害を加える。<br />
            「愚物」に分類されるヒトは害虫よりも低いヒエラルキーと考えられている。おにんにん教では「愚物」を駆逐する事は世界をよくする“善行”とすら認識されている。<br /><br />

            【戯者】<br />
            子悪党。基本的な思考回路は「愚物」と変わらないが、「愚物」のように直接的に他人に対して大きな危害を加える事は余りない。<br />
            ただそれは大きな危害を加えると大きな処罰を受ける事に対しての恐怖であり、損得を考えて行動している「愚物」となんら大差ない。<br /><br />

            【凡庸】<br />
            凡人。法律を遵守して生活している。<br />
            一見まともに見えるが、法律に違反するかしないかを物事の判断の基準にしてるという事は<br />
            悪法があればそれに従う事を示している。<br />
            また法律が及ばない状況において、正しき行動が取れるかは疑問である。<br />
            「凡庸」が法律を遵守する理由も法律を破れば自分が“損”をするからであり、<br />
            損得を考えて行動している「愚物」「戯者」と根底は共通しているいえよう。<br /><br />

            【至情】<br />
            周りに対する深い思いやりと真心を持ったヒト。<br />
            おにんにん教では、この「至情」と更に高度のヒエラルキーである「純朴」に値する者たちを<br />
            救う事が大きな目的とされており、「至情」以上のヒエラルキーでなければ<br />
            おにんにん教への入信は許可されていない。<br /><br />

            【純朴】<br />
            正しき行いの為なら自らの犠牲を払う事も厭わない清きたる聖者。<br />
            この「純朴」に属するヒトは本当に僅かしかいない。<br />
            「純朴」のヒエラルキーにある者たちはおにんにん総帥の大きな加護を受ける事だろう。<br />
            おにんにん総帥に愛された幸福たる存在である。<br />
          </Typography>
        </Paper>
        <Paper elevation={3} sx={{ m: 2, p: 2}}>
          <Typography variant="h5">
            おにんにん総帥の賛美歌
          </Typography>
          <Divider variant="middle" sx={{ m: 1 }}/>
          <Typography variant="body1" gutterBottom>
            オリュンポスの麓から　我らを見下ろす丸い顔<br />
            慈悲と御心、厳しさを　我らの心に知らしめる<br />
            総帥が教えてくださる　『人間の9割9分は愚者である』と<br />
            『所詮我らは総帥の手のひらで踊っているに過ぎない』と<br /><br />
            ※ああ　おにんにん総帥　禁欲と節制の神である<br />
            　ああ　おにんにん総帥　ゼウスとは親しい囲碁仲間<br />
            　おにんにん　おにんにん　おにんにん　おにんにん<br />
            　我らのおにんにん総帥<br /><br />
            己の境遇を嘆きつつ　総帥の流す涙の美しさ<br />
            その美しさの尺度を　所詮我らは知る術もない<br />
            人と人が寄り添えば　それは即ち　 お『にんにん』だ<br />
            なんと素晴らしい名であるか　男性器は関係ない<br /><br />
            ※ああ　おにんにん総帥　汚れた世界に落とされた<br />
            　ああ　おにんにん総帥　邪淫者を炎で焼き尽くす<br />
            　ああ　おにんにん総帥　禁欲と節制の神である<br />
            　ああ　おにんにん総帥　ゼウスとは親しい囲碁仲間<br />
            　おにんにん　おにんにん　おにんにん　おにんにん<br />
            　我らのおにんにん総帥（※繰り返し）<br />
          </Typography>
        </Paper>
        <Paper elevation={3} sx={{ m: 2, p: 2}}>
          <Typography variant="h5">
            おにんにん教 Q&A
          </Typography>
          <Divider variant="middle" sx={{ m: 1 }}/>
          <Typography variant="body1" gutterBottom>
            Q: （　＾ω＾）おにんにん総帥っておちんちんの意味かお？<br /><br />

            　A: おにんにん総帥のご尊名の由来は、「お人人」です。<br />
            　人と人が並び合い、支え合って生きて行く姿を理想とした尊きものです。<br />
            　それを「おちんちん」などと低俗なものと一緒にする発言は万死に値します。<br />
            　おにんにん総帥の裁きが下る前に即刻立ち去りなさい。<br /><br />


            Q: （　＾ω＾）おにんにん教で禁止されている行為はありますかお？<br /><br />

            　A: おにんにん教では愛のないセックスと自慰行為を禁止しています。<br />
            　これらに違反した者は邪淫者と見做されます。<br />
            　特に愛のないセックスをした者に関しては規律の違反の中でも重罪に分類され、<br />
            　炎熱地獄で 5 京 4568 兆 9600 億年の苦痛を受けることになります。<br /><br />


            Q: （　＾ω＾）おにんにん教に入信したいんですけどお<br /><br />

            　A: 誰でも入信できるという訳ではありません。<br />
            　おにんにん教におけるヒトのヒエラルキーで<br />
            　「至情」「純朴」にあたる者のみ入信を許可されています。<br />
            　入信に特別な手続きは不要です。<br />
            　その者たちは生まれた瞬間におにんにん教信者なのですから…。<br />
            　ちなみに、「至情」「純朴」以外の者でおにんにん教徒を<br />
            　勝手に名乗る者が多々おりますがその者たちは非公式な信者です。<br />
            　おにんにん総帥からの加護は一切受けることはできません。<br />
          </Typography>
        </Paper>
      </Box>
    </div>
  );
};