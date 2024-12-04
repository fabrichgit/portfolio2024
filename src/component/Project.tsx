import { RiArrowRightUpLine } from "react-icons/ri";

export default function Project() {
  return (
    <div className="flex flex-col gap-12 w-full h-max">
      <Flow />
    </div>
  );
}

function Flow() {
  return (
    <section
      id="projects"
      className="container mx-auto relative z-10"
    >
      <h2 className="text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Card 1 */}
        <div className="project-card group rounded-xl border border-transparent">
          <div className="relative bg-blue-900/15 inset-0 backdrop-blur-sm rounded-xl overflow-hidden">
            <div className="project-particles absolute inset-0 pointer-events-none" />
            <div className="absolute h-full inset-0 bg-gradient-to-r from-purple-600/35 to-pink-600/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="p-6 relative z-10">
              <div className="tech-stack-pills flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 backdrop-blur-sm">
                  React TS
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 backdrop-blur-sm">
                  Golang
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-green-500/20 text-emerald-300 backdrop-blur-sm">
                  MongoDB
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                 Onirtech | Compta
              </h3>
              <p className="text-gray-300 mb-4">
                <span className="mr-2">💸</span> App to manage and watch, the turnover of <a target="_blank" href="https://onirtech.com" className="hover:underline">Oniretch</a> 
              </p>
              <a
                href="https://compta.onirtech.com"
                target="_blank"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                View Project
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
            <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-purple-600/35 to-pink-600/35 transform rotate-45 translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300" />
          </div>
        </div>
        {/* Project Card 2 */}
        <div className="project-card group rounded-xl border border-transparent">
          <div className="relative bg-blue-900/15 inset-0 backdrop-blur-sm rounded-xl overflow-hidden">
            <div className="project-particles absolute inset-0 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/35 to-pink-600/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="p-6 relative z-10">
              <div className="tech-stack-pills flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-300 backdrop-blur-sm">
                  Express
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-cyan-500/20 text-cyan-300 backdrop-blur-sm">
                  Postgresql
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 backdrop-blur-sm">
                  React
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Rudi
              </h3>
              <p className="text-gray-300 mb-4">
              <span className="mr-2">🌐</span>Managing and
                sharing link or your website, to see how many click and
                visite
              </p>
              <a
                href="https://github.com/fabrich/rudi"
                target="_blank"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                View Project
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
            <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-purple-600/35 to-pink-600/35 transform rotate-45 translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300" />
          </div>
        </div>
        {/* Project Card 3 */}
        <div className="project-card group rounded-xl border border-transparent">
          <div className="relative h-max bg-blue-900/15 inset-0 backdrop-blur-sm rounded-xl overflow-hidden">
            <div className="project-particles absolute inset-0 pointer-events-none" />
            <div className="absolute h-full inset-0 bg-gradient-to-r from-purple-600/35 to-pink-600/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="p-6 relative z-10">
              <div className="tech-stack-pills flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 backdrop-blur-sm">
                  React
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300 backdrop-blur-sm">
                  TypeScript
                </span>
                <span className="px-3 py-1 text-xs rounded-full bg-green-500/20 text-green-300 backdrop-blur-sm">
                  Nest.js
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                Juma
              </h3>
              <p className="text-gray-300 mb-4">
                <span className="mr-2">📱</span>Social media, and chat app for
                family gathering.
              </p>
              <a
                target="_blank"
                href="https://github.com/Juma-fabrich"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
              >
                View Project
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
            <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-br from-purple-600/35 to-pink-600/35 transform rotate-45 translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-300" />
          </div>
        </div>
      </div>
      <a href="https://github.com/fabrichgit" className="block w-full font-bold font-mono text-center mt-7 text-purple-400 hover:text-fuchsia-400 transition-colors">
        see more
        <RiArrowRightUpLine className="inline ml-1"/>
      </a>
    </section>
  );
}
