import React from 'react'
import './portfolio.css'

const portfolio = () => {
  return (
    <div className='portfolio-contain'> <div className="portfolio">
      {/* LEFT COLUMN */}
      <div className="column">
        <Section title="SKILLS">
          <Skill name="Software Development & Programming" level="90%" />
          <Skill name="Cybersecurity & IT" level="80%" />
          <Skill name="Technical & Analytical Skills" level="85%" />
          <Skill name="Web & App Projects Experience" level="90%" />
          <Skill name="Productivity & Office Tools" level="95%" />
          <Skill name="Digital & Online Work Tools" level="95%" />
          <Skill name="Teaching & Communication" level="95%" />
        </Section>

        <Section title="LANGUAGES">
          <Skill name="English" level="98%" />
          <Skill name="Igbo" level="95%" />
          <Skill name="Japanese" level="15%" />
        </Section>

        <Section title="PERSONAL SKILLS">
          <p className="text">Creativity · Team Work · Organisation</p>
        </Section>
      </div>

      {/* MIDDLE COLUMN */}
      <div className="column center">
        <Section title="EXPERIENCE">
          <Timeline
            year="2025"
            title="NDA"
            role="Programer"
          />
          <Timeline
            year="2025"
            title="NDA"
            role="Web Developer"
          />
          <Timeline
            year="2025"
            title="Eagles"
            role="Chat Support"          />
          <Timeline
            year="2024 - 2025"
            title="Remote"
            role="Online Tutor"
          />
          <Timeline
            year="2021 - 2022"
            title="St. Patrick's Secondary School Ichi"
            role="Student Support"
          />
        </Section>

        <Section title="EDUCATION">
          <p className="text">
            BSc. in Computer Science <br />
            Chukwuemeka Odumegwu Ojukwu University Uli
          </p>
        </Section>
      </div>

      {/* RIGHT COLUMN */}
      <div className="column">
        <Section title="WHAT CAN I DO ?">
          <ul className="list">
            <li>Websites · Web Apps · Dashboards · Portfolios</li>
            <li>React Components · Responsive Layouts · UI Implementation · Landing Pages</li>
            <li>REST APIs · Authentication Systems · Database Integration · Server Logic</li>
            <li>JavaScript · Python · API Development · Automation Scripts</li>
            <li>Penetration Testing Basics · Vulnerability Analysis · Security Labs · Linux Security</li>
            <li>PC Repair · System Troubleshooting · Software Installation · OS Configuration</li>
            <li>Database Design · CRUD Operations · Data Modeling · Query Optimization</li>
            <li>Git · GitHub Collaboration · Pull Requests · Code Management</li>
            <li>Customer Support · Technical Documentation · Live Chat Support · User Guidance</li>
            <li>English Instruction · Technical Explanations · Learning Content · Live Sessions</li>
          </ul>
        </Section>

        {/* <Section title="DESIGN SKILLS">
          <ul className="list">
            <li>Creativity · Planning · Strategy</li>
            <li>Sketch & Typography · Layout</li>
            <li>Grid · Color Sense · Inspiration</li>
          </ul>
        </Section> */}

        <Section title="HOBBIES & INTERESTS">
          <div className="icons">
          <div>  
            <p>Games</p>
            <p>Movies</p>
          </div>
          <div>
            <p>Anime</p>
            <p>Music</p>
          </div>
          </div>
        </Section>
      </div>
    </div></div>   
  );
}

/* COMPONENTS */
function Section({ title, children }) {
  return (
    <div className="section">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

function Skill({ name, level }) {
  return (
    <div className="skill">
      <span>{name}</span>
      <div className="bar">
        <div className="fill" style={{ width: level }}></div>
      </div>
    </div>
  );
}

function Timeline({ year, title, role }) {
  return (
    <div className="timeline">
      <span className="year">{year}</span>
      <div>
        <h4>{title}</h4>
        <p>{role}</p>
      </div>
    </div>
  );
}

export default portfolio
