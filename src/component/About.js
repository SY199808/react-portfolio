export default function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>About Me</h3>
            <p className="separator" />
          </div>
          <div className="desc full">
            <h4 className="subtitle">曽田 優佑について</h4>
            <p>生年月日：1998/08/25(25歳)</p>
            <p>出　　身：島根県出雲市</p>
            <p>
              初めまして!
              <br />
              ポートフォリオをご覧いただきありがとうございます。
              <br />
              福岡県福岡市在住で、職業訓練校で半年間プログラミング(HTML/CSS,JavaScript,React.js)を学びました。
              <br />
              未経験ではありますが、一人前を目指して毎日勉強に勤しんでいます:)
            </p>
            <p>座右の銘は、「他人に優しく、自分に厳しく」</p>
          </div>
          <div className="title">
            <h3>What I Like</h3>
            <p className="separator" />
          </div>
          <div className="desc">
            <h4 className="subtitle">Play Videogame</h4>
            <p>
              PCでゲームをすることが多く、好きなジャンルはサバイバルアクションとFPS、オープンワールドです。
              <br />
              私にとってゲームは単なる娯楽だけではなく、ストレス解消であり表現の場でもあります。
            </p>
            <p>
              1人でコツコツストーリーを進めることが多いですが、友達と一緒にワイワイ遊ぶのが1番好きです!
            </p>
          </div>
          <div className="desc">
            <h4 className="subtitle">Go for a Walk</h4>
            <p>
              散歩をすることが好きで、予定が無い日には普段通らない道を歩いてみたり、きれいな景色を見てリフレッシュしています。
              <br />
              散歩をすることは運動不足の改善にもなり、また頭の整理にもなるので健康や仕事面にもプラスになっています。
            </p>
            <p>好奇心が旺盛で、常に新しいコンテンツに目を光らせています👀</p>
          </div>
        </article>
      </div>
    </section>
  );
}
