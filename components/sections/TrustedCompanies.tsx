const companies = [
  { name: 'Google', logo: 'G' },
  { name: 'Microsoft', logo: 'M' },
  { name: 'Amazon', logo: 'A' },
  { name: 'Meta', logo: 'F' },
  { name: 'Apple', logo: 'A' },
  { name: 'Netflix', logo: 'N' },
  { name: 'Tesla', logo: 'T' },
  { name: 'IBM', logo: 'IBM' },
]

export default function TrustedCompanies() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join top organizations that have transformed their workforce with our enterprise solutions
          </p>
        </div>

        {/* Company Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {companies.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center group-hover:from-primary-50 group-hover:to-primary-100 transition-all duration-200">
                <span className="text-2xl font-bold text-gray-700 group-hover:text-primary-600 transition-colors">
                  {company.logo}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: 'Industry-Certified',
              description: 'Accredited programs recognized globally',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              ),
              title: 'Expert Instructors',
              description: 'Learn from industry practitioners',
            },
            {
              icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
              title: 'Fast Implementation',
              description: 'Get started in under 2 weeks',
            },
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-lg border border-gray-200">
              <div className="flex-shrink-0 text-primary-600">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
