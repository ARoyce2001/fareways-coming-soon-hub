
import { useState } from 'react';
import { Sparkles, MapPin, Calendar, DollarSign, Heart, Clock, Users, Plus, X } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const AITripPlanner = () => {
  const [destinations, setDestinations] = useState(['']);
  const [duration, setDuration] = useState('');
  const [budget, setBudget] = useState('');
  const [vibe, setVibe] = useState('');
  const [travelCompany, setTravelCompany] = useState('');
  const [showItinerary, setShowItinerary] = useState(false);

  const addDestination = () => {
    if (destinations.length < 3) {
      setDestinations([...destinations, '']);
    }
  };

  const removeDestination = (index: number) => {
    if (destinations.length > 1) {
      setDestinations(destinations.filter((_, i) => i !== index));
    }
  };

  const updateDestination = (index: number, value: string) => {
    const newDestinations = [...destinations];
    newDestinations[index] = value;
    setDestinations(newDestinations);
  };

  const handlePlanTrip = (e: React.FormEvent) => {
    e.preventDefault();
    if (destinations[0] && duration && budget && vibe) {
      setShowItinerary(true);
    }
  };

  const sampleItinerary = {
    destination: destinations[0] || "Goa & Mumbai",
    days: duration || "5",
    activities: [
      "Day 1: Arrive at Goa Airport → Check into beachfront resort → Sunset at Baga Beach → Welcome dinner at local seafood restaurant",
      "Day 2: Water sports at Calangute → Dolphin watching cruise → Explore Anjuna Flea Market → Evening at Tito's Lane",
      "Day 3: Spice plantation tour with traditional lunch → Visit Old Goa churches (UNESCO World Heritage) → River cruise on Mandovi",
      "Day 4: Transfer to Mumbai → Marine Drive walk → Gateway of India → Shopping at Colaba Causeway",
      "Day 5: Dharavi guided tour → Film City visit → Departure from Mumbai Airport"
    ],
    estimatedCost: budget || "₹25,000-35,000",
    bestTime: "November to March",
    travelTips: [
      "💡 Book flights 6-8 weeks in advance for best deals",
      "🏖️ Pack light cotton clothes and sunscreen",
      "💰 Carry cash as many beach shacks don't accept cards"
    ],
    visaNotes: "🛂 No visa required for Indian citizens. Valid government ID needed.",
    weatherNotes: "🌤️ Expect sunny weather with temperatures 22-32°C. Brief evening showers possible.",
    safetyTips: [
      "🚗 Use licensed taxis or ride-sharing apps",
      "🏊 Be cautious while swimming - check beach safety flags",
      "💊 Carry basic medicines and stay hydrated"
    ]
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
        {/* Enhanced Input Form */}
        <Card className="bg-black/30 backdrop-blur-md border-white/20 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-white text-xl">Plan Your Perfect Trip</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handlePlanTrip} className="space-y-4">
              <div className="space-y-2">
                <label className="text-white text-sm flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  Where to? (Add up to 3 destinations)
                </label>
                {destinations.map((destination, index) => (
                  <div key={index} className="flex gap-2">
                    <Input
                      placeholder={`Destination ${index + 1} (e.g., Goa, Kerala, Thailand...)`}
                      value={destination}
                      onChange={(e) => updateDestination(index, e.target.value)}
                      className="bg-white/20 border-white/30 text-white placeholder-gray-300 flex-1"
                    />
                    {destinations.length > 1 && (
                      <Button
                        type="button"
                        onClick={() => removeDestination(index)}
                        variant="outline"
                        size="icon"
                        className="bg-red-500/20 border-red-400/30 text-red-300 hover:bg-red-500/30"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                ))}
                {destinations.length < 3 && (
                  <Button
                    type="button"
                    onClick={addDestination}
                    variant="outline"
                    size="sm"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    Add Destination
                  </Button>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  Trip Duration
                </label>
                <Select value={duration} onValueChange={setDuration}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="How many days?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2">2 Days</SelectItem>
                    <SelectItem value="3">3 Days</SelectItem>
                    <SelectItem value="5">5 Days</SelectItem>
                    <SelectItem value="7">1 Week</SelectItem>
                    <SelectItem value="10">10 Days</SelectItem>
                    <SelectItem value="14">2 Weeks</SelectItem>
                  </SelectContent>
                </Select>
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
                  Budget per person?
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

              <div className="space-y-2">
                <label className="text-white text-sm flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Who are you traveling with?
                </label>
                <Select value={travelCompany} onValueChange={setTravelCompany}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="Travel company" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solo">Solo Travel</SelectItem>
                    <SelectItem value="friends">With Friends</SelectItem>
                    <SelectItem value="family">Family Trip</SelectItem>
                    <SelectItem value="honeymoon">Honeymoon</SelectItem>
                    <SelectItem value="business">Business Travel</SelectItem>
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

        {/* Enhanced Sample Output */}
        <Card className={`bg-black/30 backdrop-blur-md border-white/20 shadow-2xl transition-all duration-500 ${
          showItinerary ? 'animate-fade-in' : 'opacity-75'
        }`}>
          <CardHeader>
            <CardTitle className="text-white text-xl flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              Your AI-Generated Itinerary
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-left">
              <h3 className="text-white font-semibold text-lg mb-4">
                {sampleItinerary.destination} - {sampleItinerary.days} Days
              </h3>
              
              <div className="space-y-3 mb-6">
                <h4 className="text-blue-400 font-medium">📅 Day-by-Day Itinerary</h4>
                {sampleItinerary.activities.map((activity, index) => (
                  <div key={index} className="text-gray-300 text-sm bg-white/10 p-3 rounded-lg">
                    {activity}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="p-3 bg-blue-600/20 rounded-lg">
                  <h4 className="text-blue-400 font-medium mb-2">💰 Cost & Timing</h4>
                  <div className="text-white text-sm space-y-1">
                    <p><strong>Estimated Cost:</strong> {sampleItinerary.estimatedCost}</p>
                    <p><strong>Best Time:</strong> {sampleItinerary.bestTime}</p>
                  </div>
                </div>

                <div className="p-3 bg-green-600/20 rounded-lg">
                  <h4 className="text-green-400 font-medium mb-2">🛂 Travel Notes</h4>
                  <div className="text-white text-sm">
                    <p>{sampleItinerary.visaNotes}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-3 bg-yellow-600/20 rounded-lg">
                  <h4 className="text-yellow-400 font-medium mb-2">🌤️ Weather & Safety</h4>
                  <p className="text-white text-sm mb-2">{sampleItinerary.weatherNotes}</p>
                  <div className="space-y-1">
                    {sampleItinerary.safetyTips.map((tip, index) => (
                      <p key={index} className="text-gray-300 text-xs">{tip}</p>
                    ))}
                  </div>
                </div>

                <div className="p-3 bg-purple-600/20 rounded-lg">
                  <h4 className="text-purple-400 font-medium mb-2">💡 Pro Tips</h4>
                  <div className="space-y-1">
                    {sampleItinerary.travelTips.map((tip, index) => (
                      <p key={index} className="text-gray-300 text-xs">{tip}</p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-yellow-400 text-sm font-medium">
                  ✨ This is just a preview! Get detailed AI itineraries with real-time pricing when we launch.
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
