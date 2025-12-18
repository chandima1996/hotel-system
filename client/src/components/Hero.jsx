import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen px-4 overflow-hidden text-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070')] bg-cover bg-center">
        <div className="absolute inset-0 bg-background/80 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-6">
        <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl drop-shadow-2xl">
          Experience the <span className="text-primary">Future</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          AI-powered hotel booking for the modern traveler. Luxury, comfort, and
          technology combined.
        </p>

        {/* shadcn UI Search Card */}
        <div className="flex flex-col max-w-5xl gap-4 p-4 mx-auto mt-10 border shadow-2xl bg-background/10 backdrop-blur-xl border-white/10 rounded-2xl md:flex-row">
          {/* Location Input */}
          <div className="w-full md:w-1/3">
            <Input
              type="text"
              placeholder="Where are you going?"
              className="h-12 text-white bg-background/50 border-white/10 placeholder:text-gray-400"
            />
          </div>

          {/* Date Input */}
          <div className="w-full md:w-1/3">
            <Input
              type="date"
              className="h-12 bg-background/50 border-white/10 text-white dark:[color-scheme:dark]"
            />
          </div>

          {/* Guests Select (shadcn Select Component) */}
          <div className="w-full md:w-1/4">
            <Select>
              <SelectTrigger className="h-12 text-white bg-background/50 border-white/10">
                <SelectValue placeholder="Guests" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Guest</SelectItem>
                <SelectItem value="2">2 Guests</SelectItem>
                <SelectItem value="4">Family</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            size="lg"
            className="h-12 px-8 font-bold bg-primary hover:bg-primary/80 text-primary-foreground"
          >
            <Search className="w-4 h-4 mr-2" /> Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
