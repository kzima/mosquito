export default function Benefits() {
  const benefits = [
    { title: 'On-Time Development', description: 'We deliver projects within agreed timelines' },
    { title: 'One-on-One Online Catchups', description: 'Regular personalized progress updates' },
    { title: 'Transparency', description: 'Clear communication throughout the project lifecycle' },
    { title: 'Fast Delivery', description: 'Leveraging 20 years of web development experience' },
  ]

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Benefits for Companies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
