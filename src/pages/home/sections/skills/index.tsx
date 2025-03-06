
export default function Skills() {
    return (
        <div className="skills-section">
            <p className="skills-title">My Skills</p>
            <div className="skills-group">
                <div className="skills-icon-container">
                    <img src="logo-js.png" alt="javascriptimage" className="skills-image"></img>
                    <p className="text-skills">Javascript</p>
                </div>
                <div className="skills-icon-container">
                    <img src="logo-html.png"alt="htmlcssimage" className="skills-image"></img>
                    <p className="text-skills">HTML</p>
                </div>
                <div className="skills-icon-container">
                    <img src="logo-css.png"alt="htmlcssimage" className="skills-image"></img>
                    <p className="text-skills">CSS</p>
                </div>
                <div className="skills-icon-container">
                    <img src="logo-tailwind.png" alt="tailwindimage" className="skills-image"></img>
                    <p className="text-skills">Tailwind</p>
                </div>
            </div>
      </div>
    )
}