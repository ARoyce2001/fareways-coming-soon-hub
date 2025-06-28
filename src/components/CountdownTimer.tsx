
import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set launch date to August 15th, 2025
    const launchDate = new Date('August 15, 2025 00:00:00');

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // If launch date has passed, set all to 0
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Update immediately
    updateTimer();

    // Set up interval to update every second
    const timer = setInterval(updateTimer, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center">
      <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/30">
        <div className="text-3xl md:text-4xl font-bold text-white">
          {value.toString().padStart(2, '0')}
        </div>
        <div className="text-sm text-gray-300 mt-1">{label}</div>
      </div>
    </div>
  );

  return (
    <div className="animate-slide-in-up">
      <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
        Launching on August 15th, 2025
      </h2>
      <div className="grid grid-cols-4 gap-4 max-w-md mx-auto">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Min" />
        <TimeUnit value={timeLeft.seconds} label="Sec" />
      </div>
    </div>
  );
};

export default CountdownTimer;
