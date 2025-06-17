
import { useState } from 'react';
import { Plane, Hotel, Calendar, MapPin, Search, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const BookingDemo = () => {
  const [activeTab, setActiveTab] = useState('flights');

  const handleSearch = () => {
    // Non-functional demo search
    console.log('Demo search triggered');
  };

  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 animate-slide-in-up">
      <CardContent className="p-6">
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Experience the Future of Travel Search
          </h3>
          <p className="text-gray-300">AI-powered booking made simple (Demo)</p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-white/20 border border-white/30">
            <TabsTrigger 
              value="flights" 
              className="flex items-center space-x-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <Plane className="h-4 w-4" />
              <span>Flights</span>
            </TabsTrigger>
            <TabsTrigger 
              value="hotels"
              className="flex items-center space-x-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <Hotel className="h-4 w-4" />
              <span>Hotels</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="flights" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-white text-sm font-medium">From</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Delhi (DEL)"
                    className="pl-10 bg-white/20 border-white/30 text-white placeholder-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium">To</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Goa (GOI)"
                    className="pl-10 bg-white/20 border-white/30 text-white placeholder-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Departure</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="date"
                    className="pl-10 bg-white/20 border-white/30 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Return</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="date"
                    className="pl-10 bg-white/20 border-white/30 text-white"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="hotels" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Dubai, UAE"
                    className="pl-10 bg-white/20 border-white/30 text-white placeholder-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Check-in</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="date"
                    className="pl-10 bg-white/20 border-white/30 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Check-out</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    type="date"
                    className="pl-10 bg-white/20 border-white/30 text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Guests</label>
                <div className="relative">
                  <Users className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="2 guests"
                    className="pl-10 bg-white/20 border-white/30 text-white placeholder-gray-300"
                  />
                </div>
              </div>
            </div>
          </TabsContent>

          <div className="mt-6 text-center">
            <Button
              onClick={handleSearch}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              <Search className="h-5 w-5 mr-2" />
              Search Deals
            </Button>
            <p className="text-gray-400 text-sm mt-2">
              *Demo version - Search functionality coming soon!
            </p>
          </div>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default BookingDemo;
