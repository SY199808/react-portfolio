export default function Project(props) {
  const link = props.link || "http://";
  const repo = props.repo || "http://";

  return (
    <div className="project">
      <a
        className="project-link"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="project-image"
          src={props.img}
          alt="ポートフォリオ写真"
        />
      </a>
      <div className="project-details">
        <div className="project-tile">{props.title} </div>
        {props.children}
        <div className="buttons">
          <a href={repo} target="_blank" rel="noopener noreferrer">
            View source <i className="fas fa-external-link-alt" />
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Try it <i className="fas fa-external-link-alt" />
          </a>
        </div>
      </div>
    </div>
  );
}
