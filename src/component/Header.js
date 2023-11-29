export default function Header() {
  return (
    <header id="welcome-section">
      <div className="forest" />
      <div className="wolf" />
      <div className="moon" />
      <div className="container">
        <h1>
          <span className="line">My</span>
          <span className="line">Portfolio Site</span>
          <span className="line">
            <span className="color">&</span> About Me.
          </span>
        </h1>
        <div className="buttons">
          <a href="https://github.com/SY199808/portfolio.git" className="cta">
            See the Code
          </a>
        </div>
      </div>
    </header>
  );
}
