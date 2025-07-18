import React, { useState } from 'react'
import '../styles/about.css'
import { SiJavascript, SiPython, SiC, SiHtml5, SiCss3, SiReact, SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress, SiDjango, SiMongodb, SiSqlite, SiMysql, SiGit, SiGithub } from 'react-icons/si'

const skillData = [
  {
    label: 'Languages',
    items: [
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'C', icon: <SiC /> }
    ]
  },
  {
    label: 'Frontend',
    items: [
      { name: 'HTML', icon: <SiHtml5 /> },
      { name: 'CSS', icon: <SiCss3 /> },
      { name: 'React', icon: <SiReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'Bootstrap', icon: <SiBootstrap /> }
    ]
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js', icon: <SiNodedotjs /> },
      { name: 'Express.js', icon: <SiExpress /> },
    ]
  },
  {
    label: 'Databases',
    items: [
      { name: 'MongoDB', icon: <SiMongodb /> },
    ]
  },
  {
    label: 'Tools',
    items: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> },
      // { name: 'VS Code', icon: <SiVisualstudiocode /> },
      // { name: 'Terminal', icon: <SiWindowsterminal /> }
    ]
  }
]

const About = () => {
  const [hovered, setHovered] = useState({ group: null, idx: null })

  return (
    <div>
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I’m Raj Kishor, a self-motivated and versatile <strong>full-stack MERN developer</strong> from Rudraprayag, Uttarakhand, currently pursuing a B.Tech in Computer Science Engineering. With a passion for building impactful web applications, I specialize in <strong>JavaScript, Python, and modern frameworks</strong> like React and Node.js. My development journey spans across projects involving secure image encryption, quiz platforms, and guide booking systems, each reflecting my drive for both innovation and problem-solving.
        </p>
        <p>
          My experience includes working internationally as a <strong>Computational Thinking Intern at Marge’ah Ltd, New Zealand</strong>, where I led prototype development and contributed to workflow automation. I've also actively contributed to multiple hackathons, technical fests, and code challenges like bug hunting and blind coding — often serving as a technical coordinator in college-level events.
        </p>
        <p>
          I bring not just technical expertise, but also strong soft skills in <strong>team collaboration, documentation, communication, and leadership</strong>. My foundation in data structures and algorithms complements my full-stack capabilities, making me confident in building both frontend and backend systems that are robust, scalable, and user-friendly.
        </p>

        <h3>Tech Stack & Skills</h3>
        <div className="skill-groups">
          {skillData.map((group, gIdx) => (
            <div className="skill-group" key={group.label}>
              <div className="skill-group-label">{group.label}</div>
              <div className="skill-items">
                {group.items.map((item, idx) => (
                  <div
                    className="skill-item"
                    key={item.name}
                    onMouseEnter={() => setHovered({ group: gIdx, idx })}
                    onMouseLeave={() => setHovered({ group: null, idx: null })}
                  >
                    {hovered.group === gIdx && hovered.idx === idx
                      ? <span className="skill-icon">{item.icon}</span>
                      : <span>{item.name}</span>
                    }
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About