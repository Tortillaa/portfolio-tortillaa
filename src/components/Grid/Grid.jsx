import "./Grid.css";

const CELLS = [
  { id: "intro", title: "Intro", col: 6, row: 2 },
  { id: "about", title: "Sobre mí", col: 6, row: 1 },
  { id: "skills", title: "Skills", col: 4, row: 1 },
  { id: "projects", title: "Proyectos", col: 8, row: 2 },
  { id: "contact", title: "Contacto", col: 4, row: 1 },
  { id: "free-a", title: "Libre", col: 6, row: 1 },
  { id: "free-b", title: "Libre", col: 6, row: 1 },
];

function GridCell({ title, col = 1, row = 1, children }) {
  return (
    <article
      className="grid-cell"
      style={{ "--col": col, "--row": row }}
    >
      {title ? <h2 className="grid-cell-title">{title}</h2> : null}
      {children}
    </article>
  );
}

export default function Grid() {
  return (
    <section className="portfolio-grid" aria-label="Portfolio">
      {CELLS.map((cell) => (
        <GridCell key={cell.id} title={cell.title} col={cell.col} row={cell.row} />
      ))}
    </section>
  );
}
