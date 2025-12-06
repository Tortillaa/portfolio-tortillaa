export default function Projects() {
  const projects = [
    { title: "Proyecto 1", desc: "Descripción", url: "#" },
    { title: "Proyecto 2", desc: "Descripción", url: "#" },
  ];

  return (
    <section id="projects" className="py-24 max-w-5xl mx-auto px-6 text-white">
      <h2 className="text-4xl font-bold mb-12">Proyectos</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <div key={p.title} className="bg-white/10 p-6 rounded-xl backdrop-blur">
            <h3 className="text-2xl font-bold">{p.title}</h3>
            <p className="opacity-80 mt-2">{p.desc}</p>
            <a href={p.url} className="text-purple-400 mt-4 inline-block">Ver más →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
