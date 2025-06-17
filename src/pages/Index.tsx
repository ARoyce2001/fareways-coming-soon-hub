
import { useState, useEffect } from 'react';
import { Menu, X, Plane, Calendar, MapPin, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import BookingDemo from '@/components/BookingDemo';
import DestinationCarousel from '@/components/DestinationCarousel';
import CountdownTimer from '@/components/CountdownTimer';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('email_signups')
        .insert([{ email }]);

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "Already on the list! 🎉",
            description: "This email is already signed up for early access.",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Welcome to the journey! 🎉",
          description: "You're now on our exclusive early access list. We'll notify you when we launch!",
        });
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
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          onError={(e) => {
            console.error('Video failed to load:', e);
            // Fallback to a gradient background if video fails
            e.currentTarget.style.display = 'none';
          }}
        >
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Plane className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">CheapFareways</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={scrollToTop} className="text-white hover:text-blue-400 transition-colors">
              Home
            </button>
            <button onClick={openBlog} className="text-white hover:text-blue-400 transition-colors">
              Blog
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md p-4">
            <div className="flex flex-col space-y-4">
              <button onClick={scrollToTop} className="text-white text-left hover:text-blue-400 transition-colors">
                Home
              </button>
              <button onClick={openBlog} className="text-white text-left hover:text-blue-400 transition-colors">
                Blog
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 min-h-screen flex flex-col">
        <div 
          className="flex-1 flex items-center justify-center px-4 md:px-6"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              AI-Powered Travel
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Coming Soon
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
              Hyperlocal, AI-powered flight and hotel deals for India's smart travelers
            </p>

            <CountdownTimer />

            {/* Email Capture */}
            <Card className="max-w-md mx-auto bg-white/10 backdrop-blur-md border-white/20 animate-scale-in">
              <CardContent className="p-6">
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
                      className="bg-white/20 border-white/30 text-white placeholder-gray-300"
                      required
                    />
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                    >
                      {isSubmitting ? 'Joining...' : 'Join'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Booking Demo Section */}
      <section 
        className="relative z-10 py-20 px-4 md:px-6"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`
        }}
      >
        <div className="max-w-4xl mx-auto">
          <BookingDemo />
        </div>
      </section>

      {/* Destination Carousel */}
      <section className="relative z-10 py-20 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Exclusive Deals Waiting for You
          </h2>
          <DestinationCarousel />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 md:px-6 border-t border-white/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Plane className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold text-white">CheapFareways</span>
          </div>
          <p className="text-gray-400 mb-4">
            Revolutionizing travel booking with AI for Indian travelers
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <span>© 2024 CheapFareways</span>
            <span>•</span>
            <button onClick={openBlog} className="hover:text-blue-400 transition-colors">
              Blog
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
