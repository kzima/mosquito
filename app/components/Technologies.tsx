export default function Technologies() {
  const technologies = [
    'LangChain (code)',
    'n8n Automations (low code)',
    'AI model integrations',
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Technologies</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
