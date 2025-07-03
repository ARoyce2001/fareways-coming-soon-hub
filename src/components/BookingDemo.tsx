
import { useState } from 'react';
import { Plane, Hotel, Calendar, MapPin, Search, Users, Palmtree } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

const BookingDemo = () => {
  const [activeTab, setActiveTab] = useState('flights');
  const [departureDate, setDepartureDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [checkInDate, setCheckInDate] = useState<Date>();
  const [checkOutDate, setCheckOutDate] = useState<Date>();
  const [tripStartDate, setTripStartDate] = useState<Date>();
  const [tripEndDate, setTripEndDate] = useState<Date>();

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
          <TabsList className="grid w-full grid-cols-3 bg-white/20 border border-white/30">
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
            <TabsTrigger 
              value="holidays"
              className="flex items-center space-x-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
            >
              <Palmtree className="h-4 w-4" />
              <span>Holidays</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="flights" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-white/20 border-white/30 text-white hover:bg-white/30",
                        !departureDate && "text-gray-300"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {departureDate ? format(departureDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white z-50" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={departureDate}
                      onSelect={setDepartureDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Return</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-white/20 border-white/30 text-white hover:bg-white/30",
                        !returnDate && "text-gray-300"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {returnDate ? format(returnDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white z-50" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={returnDate}
                      onSelect={setReturnDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Passengers</label>
                <Select>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <SelectValue placeholder="1 Adult" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-white z-50">
                    <SelectItem value="1">1 Adult</SelectItem>
                    <SelectItem value="2">2 Adults</SelectItem>
                    <SelectItem value="3">3 Adults</SelectItem>
                    <SelectItem value="4">4 Adults</SelectItem>
                    <SelectItem value="1-child">1 Adult, 1 Child</SelectItem>
                    <SelectItem value="2-child">2 Adults, 1 Child</SelectItem>
                    <SelectItem value="family">2 Adults, 2 Children</SelectItem>
                  </SelectContent>
                </Select>
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
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-white/20 border-white/30 text-white hover:bg-white/30",
                        !checkInDate && "text-gray-300"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {checkInDate ? format(checkInDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white z-50" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={checkInDate}
                      onSelect={setCheckInDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Check-out</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-white/20 border-white/30 text-white hover:bg-white/30",
                        !checkOutDate && "text-gray-300"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {checkOutDate ? format(checkOutDate, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white z-50" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={checkOutDate}
                      onSelect={setCheckOutDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
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

          <TabsContent value="holidays" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Kerala, India"
                    className="pl-10 bg-white/20 border-white/30 text-white placeholder-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Trip Start</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-white/20 border-white/30 text-white hover:bg-white/30",
                        !tripStartDate && "text-gray-300"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {tripStartDate ? format(tripStartDate, "PPP") : <span>Start date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white z-50" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={tripStartDate}
                      onSelect={setTripStartDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Trip End</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal bg-white/20 border-white/30 text-white hover:bg-white/30",
                        !tripEndDate && "text-gray-300"
                      )}
                    >
                      <Calendar className="mr-2 h-4 w-4" />
                      {tripEndDate ? format(tripEndDate, "PPP") : <span>End date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-white z-50" align="start">
                    <CalendarComponent
                      mode="single"
                      selected={tripEndDate}
                      onSelect={setTripEndDate}
                      initialFocus
                      className="p-3 pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Travelers</label>
                <Select>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-gray-400" />
                      <SelectValue placeholder="2 Adults" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-white z-50">
                    <SelectItem value="1">1 Person</SelectItem>
                    <SelectItem value="2">2 Adults</SelectItem>
                    <SelectItem value="3">3 Adults</SelectItem>
                    <SelectItem value="4">4 Adults</SelectItem>
                    <SelectItem value="couple">Couple</SelectItem>
                    <SelectItem value="family-small">Family (2+1)</SelectItem>
                    <SelectItem value="family-large">Family (2+2)</SelectItem>
                    <SelectItem value="group">Group (5+)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-white text-sm font-medium">Package Type</label>
                <Select>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <div className="flex items-center gap-2">
                      <Palmtree className="h-4 w-4 text-gray-400" />
                      <SelectValue placeholder="Adventure" />
                    </div>
                  </SelectTrigger>
                  <SelectContent className="bg-white z-50">
                    <SelectItem value="adventure">Adventure</SelectItem>
                    <SelectItem value="beach">Beach Holiday</SelectItem>
                    <SelectItem value="cultural">Cultural Tour</SelectItem>
                    <SelectItem value="romantic">Romantic Getaway</SelectItem>
                    <SelectItem value="family">Family Package</SelectItem>
                    <SelectItem value="luxury">Luxury Experience</SelectItem>
                    <SelectItem value="budget">Budget Trip</SelectItem>
                    <SelectItem value="wildlife">Wildlife Safari</SelectItem>
                  </SelectContent>
                </Select>
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
