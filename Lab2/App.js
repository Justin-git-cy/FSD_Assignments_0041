import "./App.css";
import profileImage from "./assets/myphoto.jpg";
import resume from "./assets/resume.pdf";

const contactDetails = [
  { emoji: "📧", value: "justin@email.com" },
  { emoji: "📱", value: "+91 9876543210" },
  { emoji: "📍", value: "Bangalore, India" },
  { emoji: "💻", value: "github.com/justin" },
  { emoji: "🔗", value: "linkedin.com/in/justin" },
];

const skills = ["HTML", "CSS", "JavaScript", "React", "Unity", "C#", "Git", "Node.js"];

const projects = [
  {
    title: "Price Hawk",
    description: "Price comparison platform with analytics, alerts, and a responsive dashboard.",
    tags: ["React", "JavaScript"],
  },
  {
    title: "Room Loop",
    description: "Unity psychological puzzle game using Cinemachine and a third-person controller.",
    tags: ["Unity", "C#"],
  },
  {
    title: "Movie Recommendation",
    description: "Cross-platform mobile application built with React Native.",
    tags: ["React Native", "Firebase"],
  },
];

const technologies = [
  { icon: "⚛️", label: "React" },
  { icon: "🌐", label: "HTML" },
  { icon: "🎨", label: "CSS" },
  { icon: "🟨", label: "JavaScript" },
  { icon: "🎮", label: "Unity" },
  { icon: "💻", label: "C#" },
  { icon: "🛢️", label: "SQL" },
  { icon: "🔧", label: "Git" },
];

function App() {
  return (
    <div className="container">

      {/* Sidebar */}

      <aside className="sidebar">

        <img src={profileImage} alt="Justin" className="profile" />

        <h1>Justin</h1>

        <p className="role">
          React Developer
          <br />
          Unity Developer
          <br />
          AR Enthusiast
        </p>

        <div className="line" />

        <h3>Contact</h3>

        <div className="contact">
          {contactDetails.map(({ emoji, value }) => (
            <p key={value}>
              {emoji} {value}
            </p>
          ))}
        </div>

        <div className="line" />

        <h3>Skills</h3>

        <div className="skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>

        <a href={resume} download>
          <button className="resume">Download Resume</button>
        </a>

      </aside>

      {/* Main Content */}

      <main className="content">

        <section className="card">

          <h2>About Me</h2>

          <p>
            Passionate Software Developer pursuing a Bachelor of Computer
            Applications with experience in React, Unity, Augmented Reality,
            and Web Development. I enjoy building responsive web applications,
            immersive Unity experiences, and solving real-world problems through
            technology.
          </p>

        </section>

        <section className="card education">

          <h2>Education</h2>

          <h3>Bachelor of Computer Applications</h3>

          <span>RV University • 2023 - Present</span>

          <br /><br />

          <p>
            Focused on Web Development, Game Development,
            Database Systems, Artificial Intelligence and Software Engineering.
          </p>

        </section>

        <section className="card">

          <h2>Projects</h2>

          <div className="projects">
          {projects.map(({ title, description, tags }) => (
            <div className="project" key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="tags">
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        </section>

        <section className="card">

          <h2>Experience</h2>

          <h3>Unity AR Intern</h3>

          <p>
            Developed Augmented Reality applications using Unity,
            integrated 3D assets, optimized interactions,
            and improved overall application performance.
          </p>

        </section>

        <section className="card">
          <h2>Technologies</h2>
          <div className="tech">
            {technologies.map(({ icon, label }) => (
              <div key={label}>
                {icon}
                <br />
                {label}
              </div>
            ))}
          </div>
        </section>

      </main>

    </div>
  );
}

export default App;