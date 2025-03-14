export default function Skills() {
  return (
    <div className="skills-section">
      <p className="skills-title">My Skills</p>
      <div className="skills-group-container">
        <div className="skills-group">
          <div className="skills-icon-container">
            <img
              src="logo-js.png"
              alt="javascriptimage"
              className="skills-image"
            ></img>
            <p className="text-skills">Javascript</p>
          </div>
          <div className="skills-icon-container">
            <img
              src="logo-html.png"
              alt="htmlcssimage"
              className="skills-image"
            ></img>
            <p className="text-skills">HTML</p>
          </div>
          <div className="skills-icon-container">
            <img
              src="logo-css.png"
              alt="htmlcssimage"
              className="skills-image"
            ></img>
            <p className="text-skills">CSS</p>
          </div>
          <div className="skills-icon-container">
            <img
              src="logo-tailwind.png"
              alt="tailwindimage"
              className="skills-image"
            ></img>
            <p className="text-skills">Tailwind</p>
          </div>
        </div>
        <div className="skills-group">
          <div className="skills-icon-container">
            <img
              src="logo-react.png"
              alt="javascriptimage"
              className="skills-image"
            ></img>
            <p className="text-skills">React</p>
          </div>
          <div className="skills-icon-container">
            <img
              src="logo-redux.png"
              alt="htmlcssimage"
              className="skills-image"
            ></img>
            <p className="text-skills">Redux</p>
          </div>
          <div className="skills-icon-container">
            <img
              src="logo-git.png"
              alt="htmlcssimage"
              className="skills-image"
            ></img>
            <p className="text-skills">Git</p>
          </div>
        </div>
      </div>
    </div>
  );
}
