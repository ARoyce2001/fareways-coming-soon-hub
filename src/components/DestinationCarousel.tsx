
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const destinations = [
  {
    id: 1,
    title: "Fly to Bangkok",
    subtitle: "Direct from ₹15,999",
    description: "Explore Thailand's vibrant capital",
    image: "https://images.unsplash.com/photo-1552550018-5253c1b171e1?w=800&h=600&fit=crop&crop=center",
    gradient: "from-orange-500/80 to-red-600/80"
  },
  {
    id: 2,
    title: "Stay in Dubai",
    subtitle: "From ₹8,999/night",
    description: "Luxury meets innovation",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop&crop=center",
    gradient: "from-blue-500/80 to-purple-600/80"
  },
  {
    id: 3,
    title: "Discover Paris",
    subtitle: "From ₹45,999",
    description: "City of lights awaits",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800&h=600&fit=crop&crop=center",
    gradient: "from-pink-500/80 to-rose-600/80"
  },
  {
    id: 4,
    title: "Explore Tokyo",
    subtitle: "Starting ₹42,999",
    description: "Where tradition meets future",
    image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=600&fit=crop&crop=center",
    gradient: "from-indigo-500/80 to-blue-600/80"
  },
  {
    id: 5,
    title: "Experience Santorini",
    subtitle: "From ₹38,999",
    description: "Greek island paradise",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&h=600&fit=crop&crop=center",
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
    }, 5000);

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
      {/* Main Carousel with Enhanced UI */}
      <div className="overflow-hidden rounded-3xl shadow-2xl">
        <div 
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {destinations.map((destination, index) => (
            <div key={destination.id} className="w-full flex-shrink-0">
              <Card className="bg-transparent border-none">
                <CardContent className="p-0">
                  <div className="relative h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-3xl">
                    {!imageLoadErrors[destination.id] ? (
                      <img
                        src={destination.image}
                        alt={destination.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        onError={() => handleImageError(destination.id)}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                        <div className="text-center text-white">
                          <MapPin className="h-16 w-16 mx-auto mb-4 opacity-50" />
                          <p className="text-lg opacity-75">Loading destination image...</p>
                        </div>
                      </div>
                    )}
                    <div className={`absolute inset-0 bg-gradient-to-r ${destination.gradient}`}></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center text-center text-white p-8">
                      <div className="space-y-6">
                        <div className="flex items-center justify-center space-x-2 mb-4">
                          <MapPin className="h-6 w-6" />
                          <span className="text-sm font-medium opacity-90 bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">
                            Featured Destination
                          </span>
                        </div>
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg">
                          {destination.title}
                        </h3>
                        <p className="text-2xl md:text-3xl font-semibold drop-shadow-lg">
                          {destination.subtitle}
                        </p>
                        <p className="text-xl opacity-90 max-w-md mx-auto drop-shadow-lg">
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

      {/* Enhanced Navigation Buttons */}
      <Button
        onClick={goToPrevious}
        variant="outline"
        size="icon"
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/40 backdrop-blur-md border-white/30 text-white hover:bg-black/60 w-12 h-12 shadow-2xl"
      >
        <ChevronLeft className="h-7 w-7" />
      </Button>

      <Button
        onClick={goToNext}
        variant="outline"
        size="icon"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/40 backdrop-blur-md border-white/30 text-white hover:bg-black/60 w-12 h-12 shadow-2xl"
      >
        <ChevronRight className="h-7 w-7" />
      </Button>

      {/* Enhanced Dots Indicator */}
      <div className="flex justify-center space-x-3 mt-8">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white scale-125 shadow-lg'
                : 'bg-white/50 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Enhanced Preview Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
        {destinations.map((destination, index) => (
          <button
            key={destination.id}
            onClick={() => goToSlide(index)}
            className={`relative rounded-2xl overflow-hidden transition-all duration-300 h-24 shadow-lg ${
              index === currentIndex
                ? 'ring-2 ring-white scale-105 shadow-2xl'
                : 'hover:scale-105 hover:shadow-xl'
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
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center backdrop-blur-sm">
              <span className="text-white text-sm font-semibold text-center px-2">
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
