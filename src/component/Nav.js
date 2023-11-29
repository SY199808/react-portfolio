export default function Nav(props) {
  return (
    <>
      <nav id="navbar">
        <div className="nav-wrapper">
          <p className="brand">SOTA Portfolio</p>
          <a
            onClick={props.toggleMenu}
            className={
              props.showMenu === "active" ? "menu-button active" : "menu-button"
            }
          >
            <span />
          </a>
        </div>
      </nav>
    </>
  );
}
