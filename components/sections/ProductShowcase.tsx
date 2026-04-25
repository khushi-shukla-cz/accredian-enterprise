const products = [
  {
    title: 'AI & Machine Learning',
    description: 'Master cutting-edge AI/ML techniques with hands-on projects in deep learning, NLP, computer vision, and reinforcement learning.',
    features: [
      'Neural Networks & Deep Learning',
      'Natural Language Processing',
      'Computer Vision Applications',
      'Model Deployment & MLOps',
    ],
    color: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Data Science & Analytics',
    description: 'Transform raw data into actionable insights. Learn statistical analysis, data visualization, and predictive modeling.',
    features: [
      'Statistical Analysis & Modeling',
      'Advanced Data Visualization',
      'Predictive Analytics',
      'Business Intelligence Tools',
    ],
    color: 'from-purple-500 to-purple-600',
  },
  {
    title: 'Cloud & Big Data',
    description: 'Build scalable data pipelines and cloud-native applications. Master AWS, Azure, Spark, and modern data engineering.',
    features: [
      'Cloud Architecture (AWS/Azure/GCP)',
      'Apache Spark & Hadoop',
      'Data Pipeline Engineering',
      'Distributed Systems',
    ],
    color: 'from-green-500 to-green-600',
  },
]

const workflow = [
  {
    step: '01',
    title: 'Assess',
    description: 'We analyze your current skill gaps and business objectives to design a customized learning roadmap.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
  },
  {
    step: '02',
    title: 'Design',
    description: 'Our experts create a tailored curriculum with relevant projects and milestones aligned to your industry.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
      </svg>
    ),
  },
  {
    step: '03',
    title: 'Deploy',
    description: 'Launch programs with flexible delivery options and seamless LMS integration for your organization.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    step: '04',
    title: 'Measure',
    description: 'Track progress with comprehensive analytics and reports. Demonstrate ROI and continuous improvement.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

export default function ProductShowcase() {
  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-custom">
        {/* Products Grid */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            Our Programs
          </div>
          <h2 className="heading-lg text-gray-900 mb-6">
            Enterprise-Grade Learning Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive programs designed for working professionals and enterprise teams
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
            >
              <div className={`h-2 bg-gradient-to-r ${product.color}`} />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-accent-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="heading-md text-gray-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A proven 4-step methodology to ensure successful learning outcomes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workflow.map((item, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < workflow.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-transparent -z-10" />
                )}
                
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg mr-4">
                      {item.step}
                    </div>
                    <div className="text-primary-600">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
