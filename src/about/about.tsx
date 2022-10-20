import React from "react";

import { 
  Paper,
  Box,
  Typography,
  Divider
} from "@mui/material";

import from_the_foot_of_Olympus from './media/From_the_foot_of_Olympus.mp3';

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
            From the foot of Olympus (ショートバージョン)<br /><br />
            <audio controls src={from_the_foot_of_Olympus} />
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
        <Paper elevation={3} sx={{ m: 2, p: 2}}>
          <Typography variant="h5">
            内藤ホライズンとの関わり
          </Typography>
          <Divider variant="middle" sx={{ m: 1 }}/>
          <Typography variant="body1" gutterBottom>
            ・シンボル説<br />
            おにんにん総帥は全内藤ホライズンを統一する存在と言われている。<br />
            なぜ、おにんにん教が'''内藤ホライズン'''に執着するのか詳しくはわかっていないが、<br />
            一説によると、内藤ホライズンをシンボルとして捉えている可能性がある。<br />
            ネット上でのやり取りに置いて、個々を同一のコミュニティとして理解できるシンボルの役割は大きい。<br />
            おにんにん教の場合、それが内藤ホライズンであり、'''内藤スレ'''という限られたコミュニティに限定する事で<br />
            おにんにん教との関わりをより親密にしているのではないかと考えられている。<br /><br />

            ・アバター説<br />
            ネット上のコミュニケーションにアバターの存在は大きい。<br />
            2ch掲示板に置いて、特徴的なのはその匿名性が挙げられるが、<br />
            おにんにん教のようにあるコミュニティを形成している場合に置いて、<br />
            匿名性が時に弊害となる場合がある。<br />
            また、表情、声のトーンを伴わない文字だけのやり取りは、時として書き手の意向が正しく伝わらない場合がある。<br />
            そこで内藤ホライズンというアバターを使用し、喜怒哀楽を顔文字で表現する手法を取っているのではないかと言われている。<br />
          </Typography>
        </Paper>
        <Paper elevation={3} sx={{ m: 2, p: 2}}>
          <Typography variant="h5">
            弟子入り制度について
          </Typography>
          <Divider variant="middle" sx={{ m: 1 }}/>
          <Typography variant="body1" gutterBottom>
            おにんにん教には弟子入り制度がある。聖人の素質ありと認められた信徒が、おにんにん総帥の弟子となり、より一層高みを目指すものである。<br />
            弟子入りの条件はクリマ騒動によっておにんにん総帥の発案で定められ、それに同意した牧師達によって決定された。<br /><br />
            壱. 弟子となりたい者は名前を名乗り、一ヶ月間の修行を行うこと。日々の素行や祈りの熱心さから、素質を見極められる。<br /><br />
            弐. 様子見の期間を終えた者は「諮問」を行う。二名の牧師から出題される難問に回答し、牧師達を納得させなければならない。仮におにんにん総帥を納得させられたとしても、牧師が納得できなければ合格できないという厳しいものである。<br /><br />
            <Box sx={{ whiteSpace: 'pre', overflow: 'auto' }}>
{`
　　　 　 　／　　　　　　　　　　　　　　　　　　　　　＼
　　　 　 /　　,r'"j　　　　　　　　　　　　　　　 i^'!、　　ヽ
　　　　/　　 </´　　　　　　　　　　　　　　　　｀ヾ>　　.:;i,
　　　 ,l　　　　　　　　_,._,.　　　　　　　 _,._,.　　　　　　 .:.:l,
　　　 |　　　　　　　< (ヅ,>　　　　　 < (ヅ,>　　　　　...:.::|　弟子入りの条件を今一度
　　　 !　　　　　　 　｀￣´ 　 　 　. 　 ｀￣´ 　 　 　 ..: :::::!　見直したい
　　　｜　　　　　　　　　　 ﾉ . : . :;i,　　 　 　 　　 ... ::::::.:::|　まず、最低１ヶ月間の様子見期間を
　 　　 !　　　　　　　　　　（.::.;人..;:::） 　　　　　...:.:::::.:::::::::!　設けるのはどうだろう
　　　　ヽ、　　　　　　　　　｀´　 ｀´　　　 ........::..::..::.::::::::/　 これで暇つぶしや荒らしかどうかふるいにかける
　　　　　 ＼......,,,,,,,_ 　　　　　　　　 　.....:::::::::::::::::::::::::／


　　　 　 　／　　　　　　　　　　　　　　　　　　　　　＼
　　　 　 /　　,r'"j　　　　　　　　　　　　　　　 i^'!、　　ヽ
　　　　/　　 </´　　　　　　　　　　　　　　　　｀ヾ>　　.:;i,
　　　 ,l　　　　　　　　_,._,.　　　　　　　 _,._,.　　　　　　 .:.:l,　様子見期間を終えた者に対しては
　　　 |　　　　　　　< (ヅ,>　　　　　 < (ヅ,>　　　　　...:.::|　次に「諮問」を行う
　　　 !　　　　　　 　｀￣´ 　 　 　. 　 ｀￣´ 　 　 　 ..: :::::!　この問答は、総帥である私と、牧師それぞれから
　　　｜　　　　　　　　　　 ﾉ . : . :;i,　　 　 　 　　 ... ::::::.:::|　出題され、それぞれを納得させる答えを
　 　　 !　　　　　　　　　　（.::.;人..;:::） 　　　　　...:.:::::.:::::::::!　出せた者に関してを、弟子と認める
　　　　ヽ、　　　　　　　　　｀´　 ｀´　　　 ........::..::..::.::::::::/　 私を納得させられても、牧師が納得できなければ弟子入りは
　　　　　 ＼......,,,,,,,_ 　　　　　　　　 　.....:::::::::::::::::::::::::／　　認められないという訳だ
`}
            </Box>
          </Typography>
        </Paper>
      </Box>
    </div>
  );
};