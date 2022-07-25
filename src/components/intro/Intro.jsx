import "./intro.scss"

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="man"></img>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, I'm</h2>
          <h1>Marcel</h1>
          <h3><span>Freelancer</span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="down"></img>
        </a>
      </div>
    </div>
  )
}
