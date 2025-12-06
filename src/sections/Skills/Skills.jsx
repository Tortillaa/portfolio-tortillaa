export default function Skills() {
  const skills = ["React", "JavaScript", "CSS", "Three.js", "Node.js"];

  return (
    <section id="skills" className="py-24 max-w-5xl mx-auto px-6 text-white">
      <h2 className="text-4xl font-bold mb-12">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((s) => (
          <div key={s} className="p-6 bg-white/10 rounded-xl shadow-lg backdrop-blur">
            <p className="text-center">{s}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
