import Project from "./Project";

export default function Projects() {
  return (
    <section id="projects">
      <div className="projects-container">
        <div className="heading">
          <h3 className="title">My Portfolio</h3>
          <p className="separator" />
          <p className="subtitle">
            今ご覧になっているサイトは<u>HTML,CSS,React.js</u>で作成しました。
            <br />
            私が職業訓練校在学中の半年間で作成したポートフォリオをご紹介します。
          </p>
        </div>
        <div className="projects-wrapper">
          <Project
            title="About Me"
            img={"../images/bgimage5.jpg"}
            link="https://portfolio-seven-mu-92.vercel.app/about.html"
            repo="https://github.com/SY199808/portfolio.git"
          >
            <small>使用言語:HTML,CSS,JavaScript</small>
            <p>
              scrollイベントの代わりにIntersection
              ObserverAPIを使用し、ウィンドウの下端位置と要素が交わった瞬間に発火します。
            </p>
          </Project>
          <Project
            title="My Hometown"
            img={"../images/taisya.jpg"}
            link="https://portfolio-seven-mu-92.vercel.app/izumo.html"
            repo="https://github.com/SY199808/portfolio.git"
          >
            <small>使用言語:HTML,CSS,JavaScript(swiper.js,gsap)</small>
            <p>
              swiper.jsでスライドショーを、gsapでオープニングイベント、フッターのスクロールイベントを作成しました。
              <br />
              私の地元
              出雲をピックアップし、すこしニッチですが欠かせない観光情報も載せています。
            </p>
          </Project>
          <Project
            title="Index Page"
            img={"../images/bgimage3.jpg"}
            link="https://portfolio-seven-mu-92.vercel.app/"
            repo="https://github.com/SY199808/portfolio.git"
          >
            <small>使用言語:HTML,CSS,JavaScript</small>
            <p>
              私が初めて作ったポートフォリオサイトで、「おしゃれかっこいい」をモチーフにしたモノトーンでシンプルなインデックスページです。
            </p>
          </Project>
        </div>
      </div>
    </section>
  );
}
