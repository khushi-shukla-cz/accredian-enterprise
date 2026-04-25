const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'VP of Engineering',
    company: 'TechCorp Solutions',
    image: 'SJ',
    content: 'Accredian transformed our team\'s capabilities in just 6 months. The customized AI/ML program aligned perfectly with our business needs, and we saw immediate ROI in project delivery quality.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Chief Data Officer',
    company: 'DataDrive Analytics',
    image: 'MC',
    content: 'The hands-on approach and real-world projects made all the difference. Our data science team now confidently tackles complex problems that were previously outsourced.',
    rating: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Head of Learning & Development',
    company: 'Global Finance Inc',
    image: 'PS',
    content: 'Exceptional program design and execution. The flexibility in delivery and comprehensive analytics dashboard helped us track progress and demonstrate value to leadership.',
    rating: 5,
  },
  {
    name: 'David Martinez',
    role: 'Director of Technology',
    company: 'Innovation Labs',
    image: 'DM',
    content: 'Best investment in our team\'s development. The mentorship quality and industry-relevant curriculum exceeded our expectations. Highly recommend for any enterprise.',
    rating: 5,
  },
  {
    name: 'Emily Wong',
    role: 'Product Manager',
    company: 'CloudScale Systems',
    image: 'EW',
    content: 'The program helped us build internal AI capabilities from scratch. The instructors are industry experts who bring practical insights, not just theory.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Senior Manager IT',
    company: 'Enterprise Solutions Ltd',
    image: 'RK',
    content: 'Comprehensive curriculum and excellent support throughout. Our team completed the program with confidence and immediately applied their new skills to ongoing projects.',
    rating: 5,
  },
]

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  image: string
  content: string
  rating: number
}

function TestimonialCard({ name, role, company, image, content, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 h-full flex flex-col">
      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-700 leading-relaxed mb-6 flex-grow italic">
        "{content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white font-semibold">
          {image}
        </div>
        <div>
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-sm text-gray-600">{role}</div>
          <div className="text-sm text-gray-500">{company}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold mb-4">
            Success Stories
          </div>
          <h2 className="heading-lg text-gray-900 mb-6">
            Trusted by Enterprise Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See what organizations say about their transformation journey with Accredian
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '95%', label: 'Completion Rate', sublabel: 'Industry-leading engagement' },
              { number: '4.8/5', label: 'Average Rating', sublabel: 'From 1000+ reviews' },
              { number: '85%', label: 'Promotion Rate', sublabel: 'Within 12 months' },
              { number: '100+', label: 'Enterprise Clients', sublabel: 'Across industries' },
            ].map((stat, index) => (
              <div key={index} className="border-b md:border-b-0 md:border-r border-white/20 last:border-0 pb-6 md:pb-0">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm text-primary-200">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
