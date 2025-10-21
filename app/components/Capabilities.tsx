export default function Capabilities() {
  const capabilities = [
    { title: 'AI Chatbots', description: 'Develop intelligent conversational interfaces' },
    { title: 'Building Knowledgebases', description: 'Create comprehensive, searchable information repositories' },
    { title: 'Process Automation', description: 'Streamline workflows with AI-powered automation' },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Key Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{capability.title}</h3>
              <p>{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
