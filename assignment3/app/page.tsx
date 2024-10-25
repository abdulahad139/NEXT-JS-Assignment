// app/page.tsx
export default function HomePage() {
  return (
    <main style={{ paddingTop: '80px', textAlign: 'center' }}>
      <section id="about" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '20px' }}>
        <h1>Abdul Ahad</h1>
        <h3>Roll no: 00111645</h3>
        <h2>Aspiring Data Scientist</h2>
        <p>Hi, I'm Abdul Ahad! I'm studying Computer Engineering and have a strong focus on Data Science and Machine Learning. 
          I'm skilled in SQL, Python, advanced Excel, Power BI and Machine Learning. 
          I've gained a lot of experience working with data and love finding insights that help make better decisions. 
          I've created various dashboards to visualize data and make it more accessible. 
          I also have experience teaching, helping others learn how to work with data effectively. 
          I'm excited to bring my skills to a team where I can make a real difference.</p>
      </section>

      <section id="skills" style={{ textAlign: 'center' }}>
        <h2>Technical Skills</h2>
        
        <div style={{ display: 'flex', justifyContent: 'center', gap: '50px' }}>
          {/* Programming Languages */}
          <div>
            <h3>Programming Languages</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Python</li>
            </ul>
          </div>

          {/* Libraries and Frameworks */}
          <div>
            <h3>Libraries and Frameworks</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>Pandas</li>
              <li>Numpy</li>
              <li>Matplotlib</li>
              <li>Scikit-Learn</li>
              <li>Seaborn</li>
              <li>Streamlit</li>
            </ul>
          </div>

          {/* Data Analytics Tools */}
          <div>
            <h3>Data Analytics Tools</h3>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li>Power BI</li>
              <li>Advanced Excel</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
      </section>


      <section id="education">
        <h2>Education</h2>
        <p>Bachelor of Engineering in Computer and Information Systems - NED University</p>
      </section>

      <section id="Certifications">
        <h2>Certifications</h2>
        <p>Crash course on Python - Google</p>
        <p>Python for Data Analysis - Coursera</p>
        <p>Intermediate SQL Queries - Datacamp</p>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <p>Machine Learning Intern - NCL-NED</p>
        <p>Python Intern - Codsoft</p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>Email: abdulahad1821481@gmail.com</p>
        <p>
         <a href="https://github.com/abdulahad139" target="_blank">GitHub</a> | <a href="https://www.linkedin.com/in/abdulahad139/" target="_blank">Linkedin</a>
        </p>
      </section>
    </main>
  );
}
