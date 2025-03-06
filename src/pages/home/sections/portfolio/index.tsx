
export default function Portfolio() {
    return (
        <div className="portfolio-section">
        <p className="portfolio-title">Portfolio</p>
        <div className="portfolio-group">

          <div className="portfolio-image-container group">
            <img src="card-perfume.png" alt="perfume-image" className="portfolio-image"></img>
            <div className="portfolio-overlay">Perfume Card</div>
          </div>

          <div className="portfolio-image-container group">
            <img src="card-htmlcss.png" alt="htmlcss-image" className="portfolio-image"></img>
            <div className="portfolio-overlay">HTML & CSS Card</div>
          </div>

        </div>
          <p className="portfolio-text">Project Title: "Perfume Card Application for Desktop and Mobile"</p>
          <p className="portfolio-text">Technologies: Next.js, React.js, Tailwind CSS</p>
          
          <p className="portfolio-star-title">Situation:</p>
          <p className="portfolio-text">
            A premium fragrance retailer wanted a digital solution to help customers explore 
            and personalize perfume recommendations. They required a web-friendly application that allowed users to browse perfumes, 
            filter based on scent profiles, and generate customized perfume cards based on user preferences.
          </p>

          <p className="portfolio-star-title">Task:</p>
          <p className="portfolio-text">
          I was responsible for designing and developing the application that provided an interactive experience for users to explore
          and create digital perfume cards. The objective was to ensure seamless performance, fast loading times, and an intuitive UI 
          while maintaining scalability and responsiveness.
          </p>

          <p className="portfolio-star-title">Action:</p>
          <li className="portfolio-text-list">
            <p className="portfolio-text">Frontend Development: Built a responsive and aesthetically pleasing UI using Next.js and React.js, ensuring a smooth user experience.</p>
            <p className="portfolio-text">Design & UX: Employed Tailwind CSS to create a clean and elegant design that aligned with the brand's luxury aesthetic.</p>
            <p className="portfolio-text">Filtering & Recommendation System: Implemented an advanced filtering algorithm to allow users to search perfumes based on notes, brands, and occasions.</p>
            <p className="portfolio-text">Performance Optimization: Optimized loading times and API calls using caching strategies and lazy loading in Next.js.</p>
          </li>
          
          <p className="portfolio-star-title">Result:</p>
          <li className="portfolio-text-list">
            <p className="portfolio-text">Successfully launched the perfume card application, resulting in a 40% increase in user engagement.</p>
            <p className="portfolio-text">Reduced browsing time by 30% with an improved search and filtering mechanism.</p>
            <p className="portfolio-text">Achieved positive user feedback on the application's sleek design and ease of use.  </p>
            <p className="portfolio-text">Improved customer retention through personalized recommendations and saved preferences.</p>
            <p className="portfolio-text">The client reported a significant boost in online perfume sales and customer satisfaction.</p>
          </li>
      </div>
    )
}