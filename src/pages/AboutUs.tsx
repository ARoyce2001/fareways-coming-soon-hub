
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutUs = () => {
  const handleGoBack = () => {
    window.close();
  };

  return (
    <div className="min-h-screen bg-gray-900 font-inter">
      {/* Background with overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 py-6 px-4 md:px-6 border-b border-white/20">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/0d4fb254-658e-4908-b874-6cbe4908a7fc.png" 
              alt="CheapFareways Logo" 
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-white">CheapFareways.com</span>
          </div>
          <Button
            onClick={handleGoBack}
            variant="outline"
            size="sm"
            className="text-white border-white/30 hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Close
          </Button>
        </div>
      </header>

      {/* Content */}
      <main className="relative z-10 py-12 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            About Us
          </h1>
          
          <div className="prose prose-lg prose-invert max-w-none space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
              <p className="text-gray-200 leading-relaxed mb-6">
                <strong>CheapFareways Pvt. Ltd.</strong> is an ambitious and forward-thinking Online Travel Aggregator (OTA) created with a clear goal: to make travel more affordable, accessible, and trustworthy for India's rising class of domestic travelers. Our platform is built on the belief that every Indian—regardless of where they live—deserves simple, affordable, and enjoyable travel experiences.
              </p>
              
              <p className="text-gray-200 leading-relaxed mb-6">
                At the helm of CheapFareways is our Co-Founder and Director, <strong>Mr. Vishal Roy</strong>, a seasoned entrepreneur with a multi-sectoral background that spans civil engineering, mining, toll operations, and digital business ventures. With over six years of firsthand experience in infrastructure execution and business management across India, Mr. Roy brings a uniquely grounded, operationally-strong, and execution-driven leadership style to the company.
              </p>
              
              <p className="text-gray-200 leading-relaxed mb-6">
                Born and raised in Md. Bazar, Birbhum (West Bengal), Mr. Roy has been actively involved in both legacy and modern business domains. His work has spanned:
              </p>
              
              <ul className="text-gray-200 space-y-3 mb-6 ml-6">
                <li><strong>Large-scale civil works:</strong> From national highway road construction and embankment grading to government-awarded earthwork projects.</li>
                <li><strong>Mining operations:</strong> He is the proprietor and partner of black stone and limestone mining units in key zones such as Panchami and Rampurhat in West Bengal and limestone mining in Meghalaya.</li>
                <li><strong>NHAI toll management:</strong> Since 2013, Mr. Roy has handled toll fee collection contracts across India—Bihar, Maharashtra, Rajasthan, Meghalaya—generating multi-crore turnovers, including a ₹28+ crore contract with Skylark Infra Engineering.</li>
                <li><strong>Petroleum retail:</strong> Mr. Roy also runs a fully operational IOCL petrol pump, JIBASMA Filling Station, on SH-11 in Birbhum, highlighting his diverse portfolio and strong operational capabilities.</li>
              </ul>
              
              <p className="text-gray-200 leading-relaxed mb-6">
                Over the years, Mr. Roy has consistently demonstrated the ability to mobilize resources quickly, deliver complex projects on time, and adapt to changing business climates. With a strong team of engineers, supervisors, accountants, and a fleet of machinery—from hydraulic excavators to survey equipment—he is known for his ability to execute at scale with speed and precision.
              </p>
              
              <p className="text-gray-200 leading-relaxed mb-6">
                CheapFareways is the digital expression of Mr. Roy's broader entrepreneurial journey, combining his business acumen with a strong vision to serve emerging Indian travelers. The company has been formed with the objective of creating an OTA that isn't just another travel app—it's a high-value, vernacular-friendly, and AI-enhanced travel platform for Bharat's Tier 2 and Tier 3 cities.
              </p>
              
              <p className="text-gray-200 leading-relaxed">
                In a world dominated by legacy OTAs focused mostly on urban customers, we are building for those who are currently underserved—college students, families, small business owners, and first-time fliers from small towns and regional belts. Our platform is driven by a new generation of thinkers, designers, engineers, and marketers who believe that travel should not be a luxury, but a right for all Indians.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-200 leading-relaxed mb-6">
                At CheapFareways, our mission is deeply rooted in inclusion, innovation, and trust.
              </p>
              <blockquote className="text-xl text-blue-300 font-medium italic mb-6 border-l-4 border-blue-400 pl-6">
                "To make travel affordable, accessible, and empowering for every Indian by building a high-performance, user-first OTA platform that bridges the digital and regional divide."
              </blockquote>
              
              <p className="text-gray-200 leading-relaxed mb-6">
                We're on a journey to transform how India travels, one tier-2 and tier-3 customer at a time. Here's what drives us:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Affordability for All</h3>
                  <p className="text-gray-200">We negotiate the best fares, provide zero-commission models for select services, and pass savings directly to our customers. With innovative pricing and transparent breakdowns, CheapFareways makes sure you never overpay again.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Regional & Vernacular Support</h3>
                  <p className="text-gray-200">We believe language should never be a barrier to planning your dream vacation or booking your emergency ticket. That's why we are building interfaces and customer support in Bengali, Hindi, and other regional languages.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Hyperlocal Discovery</h3>
                  <p className="text-gray-200">From hidden gems in Northeast India to underrated holiday spots in Jharkhand and Odisha, our curated AI-powered travel planner helps users explore places beyond mainstream tourist circuits.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">AI & Automation for Everyone</h3>
                  <p className="text-gray-200">Our AI Trip Planner and intelligent search will simplify how travelers plan, modify, and personalize their journeys—whether it's booking a one-way train or designing a 5-day tour with hotel, taxi, and itinerary included.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Service You Can Trust</h3>
                  <p className="text-gray-200">Our foundation is built on reliability. We aim to provide 24/7 support, real human contact in local languages, and problem-solving that respects the urgency of travel—especially for emergencies, delays, or cancellations.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Built for Bharat</h3>
                  <p className="text-gray-200">While others look west, we look inward—to the real India. From the grassroots to the global, our dream is to help every Indian go farther, smarter, and happier with CheapFareways.</p>
                </div>
              </div>
              
              <p className="text-xl text-center text-blue-300 font-medium mt-8">
                Come travel the new India with us—where price meets trust, and where Bharat takes flight.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
