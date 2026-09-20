import avatar from "../../assets/avatar.jpg";
import { profile } from "../../data/profile";
import "./Grid.css";

function GridCell({
  title,
  col = 1,
  colMd,
  row = 1,
  variant = "quiet",
  className = "",
  children,
}) {
  const classes = ["grid-cell", `grid-cell-${variant}`, className]
    .filter(Boolean)
    .join(" ");

  return (
    <article
      className={classes}
      style={{
        "--col": col,
        "--col-md": colMd ?? col,
        "--row": row,
      }}
    >
      {title ? <h2 className="grid-label">{title}</h2> : null}
      {children}
    </article>
  );
}

export default function Grid() {
  return (
    <section className="portfolio-grid" aria-label="Portfolio">
      <GridCell col={8} colMd={6} variant="elevated" className="grid-cell-intro">
        <img src={avatar} alt={profile.name} className="grid-photo" />
        <div className="intro-copy">
          <h1 className="intro-name">{profile.name}</h1>
          <p className="intro-headline">{profile.headline}</p>
        </div>
      </GridCell>

      <GridCell title="Contacto" col={4} colMd={6} variant="elevated" className="grid-cell-contact">
        <p className="contact-cta">{profile.contact.cta}</p>
        <a className="contact-email" href={`mailto:${profile.contact.email}`}>
          {profile.contact.email}
        </a>
        <ul className="contact-pills">
          {profile.contact.links.map((link) => (
            <li key={link.href}>
              <a className="pill" href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </GridCell>

      <GridCell title="Sobre mí" col={12} variant="quiet" className="grid-cell-about">
        <p className="grid-body">{profile.about.intro}</p>
        <h3 className="grid-label">{profile.about.trajectoryLabel}</h3>
        <ul className="about-path">
          {profile.about.path.map((item) => (
            <li key={item.label} className="about-path-item">
              <p className="grid-label">{item.label}</p>
              <p className="grid-body">{item.text}</p>
            </li>
          ))}
        </ul>
      </GridCell>

      <GridCell title="Skills" col={12} variant="quiet">
        <div className="skill-groups">
          {profile.skillGroups.map((group) => (
            <div key={group.label} className="skill-group">
              <h3 className="skill-label">{group.label}</h3>
              <ul className="skill-chips">
                {group.items.map((item) => (
                  <li key={item} className="skill-chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </GridCell>

      {profile.projects.map((project) => (
        <GridCell
          key={project.title}
          title="Proyecto"
          col={6}
          colMd={6}
          variant="quiet"
          className={project.href ? "grid-cell-project" : "grid-cell-project grid-cell-soon"}
        >
          <p className="entry-title">{project.title}</p>
          <p className="grid-body">{project.description}</p>
          {project.href ? (
            <a
              className="pill"
              href={project.href}
              target="_blank"
              rel="noreferrer"
            >
              repo
            </a>
          ) : (
            <span className="pill pill-empty">coming soon</span>
          )}
        </GridCell>
      ))}

      <GridCell title="Experiencia" col={6} colMd={6} variant="quiet">
        <div className="entry">
          <p className="entry-title">
            {profile.experience.role} — {profile.experience.company}
          </p>
          <p className="entry-meta">
            {profile.experience.contract} · {profile.experience.meta}
          </p>
          <ul className="entry-bullets">
            {profile.experience.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        </div>
      </GridCell>

      <GridCell title="Formación" col={6} colMd={6} variant="quiet">
        <ul className="entry-list">
          {profile.education.map((item) => (
            <li key={item.title} className="entry">
              <p className="entry-title">{item.title}</p>
              <p className="entry-meta">
                {item.place}
                {item.extra ? ` · ${item.extra}` : ""}
              </p>
            </li>
          ))}
        </ul>
      </GridCell>
    </section>
  );
}
