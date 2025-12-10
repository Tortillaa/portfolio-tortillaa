export default function Projects() {
  const projects = [
    { title: "Silly Gallery", desc: "Just a silly program to practice React Native", url: "https://github.com/Tortillaa/silly-gallery-practice.git" },
    // No more projects by the moment :(
  ];

  return (
    <section id="projects" className="py-24 max-w-5xl mx-auto px-6 text-white">
      <div className="page-container">
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p) => (
            <div key={p.title} className="bg-white/10 p-6 rounded-xl backdrop-blur">
              <h3 className="text-2xl font-bold">{p.title}</h3>
              <p className="opacity-80 mt-2">{p.desc}</p>
              <a href={p.url} className="text-purple-400 mt-4 inline-block">Link to repo →</a>
            </div>
          ))}
          <br />
          <br />
          <h4 className="text-2xl font-bold">More coming soon...</h4>
        </div>
      </div>
    </section>
  );
}
