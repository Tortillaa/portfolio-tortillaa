import logoDark from '../../assets/images/logo-dark-component.png';

export default function About() {
  return (
    <section id="about" className="py-24 max-w-4xl mx-auto px-6 text-white bg-gray-900 rounded-xl shadow-lg">
      <div className="page-container flex flex-col md:flex-row items-center gap-10">
        {/* Texto */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold mb-6 border-b-2 border-purple-500 inline-block pb-2">
            About Me
          </h2>
          <p className="opacity-90 leading-relaxed mb-6 text-lg">
            I am a <span className="font-semibold text-purple-400">Full Stack Developer</span> currently studying a High Vocational Training in Cross-Platform Application Development.
            I enjoy building end-to-end applications that are both <span className="italic">functional</span> and <span className="italic">user-friendly</span>.
            In the next section, you can see the technologies and tools I work with, which I use to deliver clean, efficient, and scalable code.
          </p>
        </div>

        {/* Imagen */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={logoDark}
            alt="Logo"
            className="w-64 h-64 object-contain rounded-xl shadow-lg transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
}
