
import { useState, useEffect } from 'react';
import { Menu, X, Plane, Calendar, MapPin, Users, Mail, Shield, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import BookingDemo from '@/components/BookingDemo';
import DestinationCarousel from '@/components/DestinationCarousel';
import CountdownTimer from '@/components/CountdownTimer';
import AITripPlanner from '@/components/AITripPlanner';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('email_signups')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Already on the list! 🎉",
            description: "This email is already signed up for early access.",
          });
        } else {
          throw error;
        }
      } else {
        setShowSuccess(true);
        toast({
          title: "Welcome to the journey! 🎉",
          description: "You're now on our exclusive early access list. We'll notify you when we launch!",
        });
        setTimeout(() => setShowSuccess(false), 3000);
      }
      
      setEmail('');
    } catch (error) {
      console.error('Error saving email:', error);
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openBlog = () => {
    window.open('https://blog.cheapfareways.com/blog', '_blank');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 font-inter">
      {/* Video Background with Enhanced Overlay */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover brightness-50"
          onError={(e) => {
            console.error('Video failed to load:', e);
            e.currentTarget.style.display = 'none';
          }}
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eed51c6c03c3f68dc6f3667a53c8b1b20c1d1&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
          <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Enhanced dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
      </div>

      {/* Fixed Logo - Top Center */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <button 
          onClick={scrollToTop}
          className="flex items-center justify-center p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/20 hover:bg-black/50 transition-all duration-300 shadow-2xl"
        >
          <img 
            src="/lovable-uploads/c74e2a9a-2433-42c4-825e-39a29dd2d05d.png" 
            alt="CheapFareways Logo" 
            className="h-10 w-auto max-w-[180px] md:h-12 md:max-w-[220px]"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          {/* Fallback text logo */}
          <div className="hidden">
            <div className="flex items-center space-x-2">
              <Plane className="h-8 w-8 text-blue-400" />
              <span className="text-xl md:text-2xl font-bold text-white">CheapFareways</span>
            </div>
          </div>
        </button>
      </div>

      {/* Enhanced Navigation - Top Right */}
      <nav className="fixed top-4 right-4 z-50">
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/20 px-6 py-3 shadow-2xl">
          <button 
            onClick={scrollToTop} 
            className="text-white hover:text-blue-400 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-white/10"
          >
            Home
          </button>
          <div className="w-px h-4 bg-white/30"></div>
          <button 
            onClick={openBlog} 
            className="text-white hover:text-blue-400 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-white/10"
          >
            Blog
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden bg-black/40 backdrop-blur-md rounded-2xl border border-white/20 p-3 text-white shadow-2xl"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full right-0 mt-2 bg-black/90 backdrop-blur-md rounded-2xl border border-white/20 p-4 min-w-[150px] shadow-2xl">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => {
                  scrollToTop();
                  setIsMenuOpen(false);
                }} 
                className="text-white text-left hover:text-blue-400 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-white/10"
              >
                Home
              </button>
              <button 
                onClick={() => {
                  openBlog();
                  setIsMenuOpen(false);
                }} 
                className="text-white text-left hover:text-blue-400 transition-colors font-medium px-3 py-2 rounded-lg hover:bg-white/10"
              >
                Blog
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 min-h-screen flex flex-col pt-28">
        <div className="flex-1 flex items-center justify-center px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              AI-Powered Travel
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mt-2">
                Coming Soon
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Hyperlocal, AI-powered flight and hotel deals for India's smart travelers
            </p>

            <CountdownTimer />

            {/* Enhanced Email Capture */}
            <Card className="max-w-md mx-auto bg-black/30 backdrop-blur-md border-white/20 animate-scale-in relative z-20 shadow-2xl">
              <CardContent className="p-6">
                {showSuccess ? (
                  <div className="text-center animate-fade-in">
                    <div className="text-green-400 text-6xl mb-4">✓</div>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      Welcome aboard!
                    </h3>
                    <p className="text-gray-300">
                      You'll be the first to know when we launch.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <h3 className="text-white font-semibold text-lg">
                      Be the first to unlock AI-powered travel deals
                    </h3>
                    <div className="flex gap-2">
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:border-blue-400 focus:ring-blue-400"
                        required
                      />
                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-6 shadow-lg"
                      >
                        {isSubmitting ? 'Joining...' : 'Join'}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Enhanced Booking Demo Section */}
      <section className="relative z-10 py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experience the Future of Travel Booking
            </h2>
            <p className="text-gray-300 text-lg">
              Demo Only - Full functionality available at launch
            </p>
          </div>
          <BookingDemo />
        </div>
      </section>

      {/* AI Trip Planner Teaser */}
      <section className="relative z-10 py-20 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <AITripPlanner />
        </div>
      </section>

      {/* Enhanced Destination Carousel */}
      <section className="relative z-10 py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Exclusive Deals Waiting for You
          </h2>
          <DestinationCarousel />
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative z-10 py-16 px-4 md:px-6 border-t border-white/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Plane className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold text-white">CheapFareways</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Revolutionizing travel booking with AI for Indian travelers. Get ready for smarter, faster, and more affordable travel deals.
              </p>
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="h-4 w-4" />
                <span>contact@cheapfareways.com</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <button 
                  onClick={scrollToTop}
                  className="block text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={openBlog}
                  className="block text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Blog
                </button>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <div className="space-y-2">
                <button className="block text-gray-400 hover:text-blue-400 transition-colors">
                  <Shield className="h-4 w-4 inline mr-2" />
                  Privacy Policy
                </button>
                <button className="block text-gray-400 hover:text-blue-400 transition-colors">
                  <FileText className="h-4 w-4 inline mr-2" />
                  Terms of Service
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-gray-500 text-sm">
              © 2024 CheapFareways. All rights reserved. | Launching soon for India's smart travelers.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
