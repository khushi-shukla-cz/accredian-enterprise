'use client'

const features = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Custom Learning Paths',
    description: 'Tailored curriculum designed for your organization\'s specific needs and skill gaps. Build the exact competencies your business requires.',
    highlights: ['Role-based tracks', 'Skill assessments', 'Progress tracking'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Real-World Projects',
    description: 'Hands-on experience with actual business problems. Learn by doing with projects that mirror your industry challenges.',
    highlights: ['Industry case studies', 'Live datasets', 'Capstone projects'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
    title: 'Flexible Delivery',
    description: 'Choose from live online sessions, self-paced modules, or hybrid learning. Fits seamlessly into your team\'s schedule.',
    highlights: ['Live workshops', 'On-demand content', 'Hybrid options'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Industry Certification',
    description: 'Recognized credentials that validate your team\'s expertise. Boost credibility and career advancement opportunities.',
    highlights: ['Globally recognized', 'Skill verification', 'Career advancement'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Expert Mentorship',
    description: '1-on-1 guidance from industry veterans. Get personalized support to overcome challenges and accelerate learning.',
    highlights: ['Personal mentors', 'Office hours', 'Code reviews'],
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Analytics Dashboard',
    description: 'Track progress, engagement, and skill development in real-time. Make data-driven decisions about your L&D initiatives.',
    highlights: ['Real-time metrics', 'Skill mapping', 'ROI tracking'],
  },
]

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  highlights: string[]
}

function FeatureCard({ icon, title, description, highlights }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary-200 group">
      <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {highlights.map((highlight, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <svg className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Features() {
  return (
    <section id="features" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            Why Choose Us
          </div>
          <h2 className="heading-lg text-gray-900 mb-6">
            Comprehensive Enterprise Learning Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build a world-class AI and Data Science capability within your organization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Ready to transform your team's capabilities?
          </p>
          <button
            onClick={() => {
              const element = document.querySelector('#contact')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="btn-primary"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  )
}
