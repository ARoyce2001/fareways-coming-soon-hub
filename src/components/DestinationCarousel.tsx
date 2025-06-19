
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const destinations = [
  {
    id: 1,
    title: "Fly to Bangkok",
    subtitle: "Direct from ₹5,999",
    description: "Explore Thailand's vibrant capital",
    image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&h=500&fit=crop&crop=center",
    gradient: "from-orange-500/80 to-red-600/80"
  },
  {
    id: 2,
    title: "Stay in Dubai",
    subtitle: "Burj Khalifa views",
    description: "Luxury meets innovation",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=500&fit=crop&crop=center",
    gradient: "from-blue-500/80 to-purple-600/80"
  },
  {
    id: 3,
    title: "Discover Paris",
    subtitle: "From ₹45,999",
    description: "City of lights awaits",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=800&h=500&fit=crop&crop=center",
    gradient: "from-pink-500/80 to-rose-600/80"
  },
  {
    id: 4,
    title: "Explore Tokyo",
    subtitle: "Starting ₹42,999",
    description: "Where tradition meets future",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=800&h=500&fit=crop&crop=center",
    gradient: "from-indigo-500/80 to-blue-600/80"
  },
  {
    id: 5,
    title: "Experience Santorini",
    subtitle: "From ₹38,999",
    description: "Greek island paradise",
    image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=500&fit=crop&crop=center",
    gradient: "from-blue-400/80 to-cyan-600/80"
  }
];

const DestinationCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [imageLoadErrors, setImageLoadErrors] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % destinations.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % destinations.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const handleImageError = (destinationId: number) => {
    setImageLoadErrors(prev => ({ ...prev, [destinationId]: true }));
  };

  return (
    <div className="relative">
      {/* Main Carousel */}
      <div className="overflow-hidden rounded-2xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {destinations.map((destination, index) => (
            <div key={destination.id} className="w-full flex-shrink-0">
              <Card className="bg-transparent border-none">
                <CardContent className="p-0">
                  <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden rounded-2xl">
                    {!imageLoadErrors[destination.id] ? (
                      <img
                        src={destination.image}
                        alt={destination.title}
                        className="w-full h-full object-cover"
                        onError={() => handleImageError(destination.id)}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                        <div className="text-center text-white">
                          <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                          <p className="text-sm opacity-75">Loading destination image...</p>
                        </div>
                      </div>
                    )}
                    <div className={`absolute inset-0 bg-gradient-to-r ${destination.gradient}`}></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
                      <div className="space-y-4">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                          <MapPin className="h-5 w-5" />
                          <span className="text-sm font-medium opacity-90">Featured Destination</span>
                        </div>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                          {destination.title}
                        </h3>
                        <p className="text-xl md:text-2xl font-semibold">
                          {destination.subtitle}
                        </p>
                        <p className="text-lg opacity-90 max-w-md mx-auto">
                          {destination.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        onClick={goToPrevious}
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        onClick={goToNext}
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white/30"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Mini Cards Preview */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-8">
        {destinations.map((destination, index) => (
          <button
            key={destination.id}
            onClick={() => goToSlide(index)}
            className={`relative rounded-lg overflow-hidden transition-all duration-300 h-20 ${
              index === currentIndex
                ? 'ring-2 ring-white scale-105'
                : 'hover:scale-105'
            }`}
          >
            {!imageLoadErrors[destination.id] ? (
              <img
                src={destination.image}
                alt={destination.title}
                className="w-full h-full object-cover"
                onError={() => handleImageError(destination.id)}
                loading="lazy"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-600 to-gray-800"></div>
            )}
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <span className="text-white text-xs font-semibold text-center px-2">
                {destination.title.split(' ').slice(-1)[0]}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DestinationCarousel;
