
import { useState } from 'react';
import { Sparkles, MapPin, Calendar, DollarSign, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AITripPlanner = () => {
  const [destination, setDestination] = useState('');
  const [budget, setBudget] = useState('');
  const [vibe, setVibe] = useState('');
  const [showItinerary, setShowItinerary] = useState(false);

  const handlePlanTrip = (e: React.FormEvent) => {
    e.preventDefault();
    if (destination && budget && vibe) {
      setShowItinerary(true);
    }
  };

  const sampleItinerary = {
    destination: destination || "Goa",
    days: 3,
    activities: [
      "Day 1: Arrive at Goa Airport → Check into beachfront resort → Sunset at Baga Beach",
      "Day 2: Water sports at Calangute → Local seafood lunch → Explore Old Goa churches",
      "Day 3: Spice plantation tour → Beach hopping → Departure"
    ],
    estimatedCost: budget || "₹15,000-20,000",
    bestTime: "November to March"
  };

  return (
    <div className="text-center">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
          <Sparkles className="h-8 w-8 text-yellow-400" />
          AI Trip Planner
          <span className="text-sm bg-yellow-400 text-black px-2 py-1 rounded-full font-medium">
            Preview
          </span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Get a taste of our AI-powered trip planning. Tell us your preferences and see magic happen!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Form */}
        <Card className="bg-black/30 backdrop-blur-md border-white/20 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-white text-xl">Plan Your Perfect Trip</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePlanTrip} className="space-y-4">
              <div className="space-y-2">
                <label className="text-white text-sm flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Where to?
                </label>
                <Input
                  placeholder="e.g., Goa, Kerala, Thailand..."
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder-gray-300"
                />
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  When?
                </label>
                <Select>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="Select travel dates" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="next-month">Next Month</SelectItem>
                    <SelectItem value="in-3-months">In 3 Months</SelectItem>
                    <SelectItem value="in-6-months">In 6 Months</SelectItem>
                    <SelectItem value="flexible">I'm Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm flex items-center gap-2">
                  <DollarSign className="h-4 w-4" />
                  Budget?
                </label>
                <Select value={budget} onValueChange={setBudget}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="Select your budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="₹10,000-25,000">₹10,000 - ₹25,000</SelectItem>
                    <SelectItem value="₹25,000-50,000">₹25,000 - ₹50,000</SelectItem>
                    <SelectItem value="₹50,000-1,00,000">₹50,000 - ₹1,00,000</SelectItem>
                    <SelectItem value="₹1,00,000+">₹1,00,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm flex items-center gap-2">
                  <Heart className="h-4 w-4" />
                  Travel vibe?
                </label>
                <Select value={vibe} onValueChange={setVibe}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="What's your vibe?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="adventure">Adventure & Thrill</SelectItem>
                    <SelectItem value="relaxation">Relaxation & Wellness</SelectItem>
                    <SelectItem value="culture">Culture & Heritage</SelectItem>
                    <SelectItem value="luxury">Luxury & Comfort</SelectItem>
                    <SelectItem value="budget">Budget Backpacking</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3"
              >
                <Sparkles className="h-4 w-4 mr-2" />
                Generate AI Itinerary
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Sample Output */}
        <Card className={`bg-black/30 backdrop-blur-md border-white/20 shadow-2xl transition-all duration-500 ${
          showItinerary ? 'animate-fade-in' : 'opacity-50'
        }`}>
          <CardHeader>
            <CardTitle className="text-white text-xl flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              Your AI-Generated Itinerary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-left">
              <h3 className="text-white font-semibold text-lg mb-2">
                {sampleItinerary.destination} - {sampleItinerary.days} Days
              </h3>
              
              <div className="space-y-3">
                {sampleItinerary.activities.map((activity, index) => (
                  <div key={index} className="text-gray-300 text-sm bg-white/10 p-3 rounded-lg">
                    {activity}
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-blue-600/20 rounded-lg">
                <div className="text-white text-sm">
                  <p><strong>Estimated Cost:</strong> {sampleItinerary.estimatedCost}</p>
                  <p><strong>Best Time:</strong> {sampleItinerary.bestTime}</p>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="text-yellow-400 text-sm font-medium">
                  ✨ This is just a preview! Get detailed AI itineraries when we launch.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AITripPlanner;
