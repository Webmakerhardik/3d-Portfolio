import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>Tata Forage</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              During the Tata Forage Data Analytics Virtual Internship, I worked on a simulated real-world project that involved analyzing business data to support decision-making. I learned how to use tools like Excel and Python to clean, visualize, and interpret data. I explored key concepts like data wrangling, creating dashboards, and drawing insights from datasets. The tasks helped me understand how data is used in business to improve performance, identify trends, and solve problems. It also improved my problem-solving, analytical thinking, and communication skills.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Google for Developer(Remote)</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Completed a virtual internship focused on front-end web development, gaining hands-on experience with HTML, CSS, JavaScript, and Git. Worked on building responsive, accessible web pages aligned with Google's performance and design standards. Participated in project-based learning, code reviews, and iterative development. Improved skills in UI design, problem-solving, and writing clean, maintainable code. Successfully completed all modules and tasks, demonstrating a strong foundation in web development and a commitment to continuous learning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer Engineer</h4>
                <h5>Zidio Development Company</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Contributed to the design, development, and deployment of scalable web applications using modern technologies such as JavaScript, React, and Node.js. Collaborated with cross-functional teams to gather requirements, debug issues, and implement new features. Focused on optimizing application performance and enhancing user experience through responsive design and clean code practices. Participated in Agile development cycles, code reviews, and version control using Git. Gained valuable experience in full-stack development and real-world software engineering practices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
