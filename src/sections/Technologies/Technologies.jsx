import LogoLoop from '../../components/UI/LogoLoop/LogoLoop'
import { SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiNodedotjs, SiMysql, SiDocker, SiGit } from 'react-icons/si';
import Java from '../../assets/icons/java.png'

export default function Skills() {
  const techLogos = [
    // Front-end / UI
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiJavascript />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    // Back-end / Database
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org/es" },
    { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com/" },
    { node: <img src={Java} alt="Java" style={{ height: '48px' }} />, title: "Java", href: "https://www.java.com" },
    // DevOps / Tools
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com/" },
    // Version control
    { node: <SiGit />, title: "Git", href: "https://git-scm.com/" },
  ];
  return (
    <section id="skills" className="py-24 max-w-5xl mx-auto px-6 text-white">
      <div className='page-container'>
        <h2 className="text-4xl font-bold mb-6">Technologies:</h2>
        <br />
        <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: '500px', margin: '0 auto' }}>
            <LogoLoop
              logos={techLogos}
              speed={120}
              direction="left"
              logoHeight={48}
              gap={100}
              hoverSpeed={0}
              scaleOnHover
              fadeOut
              fadeOutColor="#ffffff"
              ariaLabel="Technology partners"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
