import {
  Wifi,
  Coffee,
  Car,
  Dumbbell,
  Utensils,
  MonitorSmartphone,
  Shield,
  Headphones,
} from "lucide-react";

const services = [
  { icon: <Wifi />, name: "Ultra-High Speed 5G" },
  { icon: <MonitorSmartphone />, name: "Smart Room Control" },
  { icon: <Shield />, name: "24/7 AI Security" },
  { icon: <Utensils />, name: "Robot Chef Dining" },
  { icon: <Car />, name: "Luxury Shuttle Pods" },
  { icon: <Dumbbell />, name: "Virtual Gym" },
  { icon: <Coffee />, name: "Smart Cafe" },
  { icon: <Headphones />, name: "Virtual Concierge" },
];

const ServiceMarquee = () => {
  return (
    <div className="w-full dark:bg-[#0F172A] border-y border-white/5 py-10 overflow-hidden relative">
      {/* Side Fade Effect (වම් සහ දකුණු පැති බොඳ වෙන්න) */}
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r dark:from-[#0F172A] to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l dark:from-[#0F172A] to-transparent z-10"></div>

      <div className="flex w-max">
        {/* Infinite Loop එකක් හදන්න අපි මේ ලිස්ට් එක දෙපාරක් map කරනවා */}
        <div className="flex gap-16 animate-scroll px-8">
          {/* Set 1 */}
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-center gap-3 dark:text-gray-400 hover:text-primary transition-colors cursor-default whitespace-nowrap"
            >
              <div className="p-3 dark:bg-white/5 rounded-full border dark:border-white/10">
                {service.icon}
              </div>
              <span className="text-lg font-medium tracking-wide">
                {service.name}
              </span>
            </div>
          ))}

          {/* Set 2 (Duplicate for smooth loop) */}
          {services.map((service, index) => (
            <div
              key={`dup-${index}`}
              className="flex items-center gap-3 dark:text-gray-400 hover:text-primary transition-colors cursor-default whitespace-nowrap"
            >
              <div className="p-3 dark:bg-white/5 rounded-full border dark:border-white/10">
                {service.icon}
              </div>
              <span className="text-lg font-medium tracking-wide">
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceMarquee;
