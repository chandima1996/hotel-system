import { useState } from "react";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { Search, Calendar, User, MapPin } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();

  // 1. Destination State
  const [destination, setDestination] = useState("");

  // 2. Date State
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  // 3. Options State (Guest Count)
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  // Search Button Click කළාම වෙන දේ
  const handleSearch = () => {
    // /hotels පිටුවට data ටික අරන් යන්න
    navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <div className="relative h-[600px] flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070")',
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-5xl px-4 flex flex-col gap-8 text-white">
        {/* Texts */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-100 to-gray-400 bg-clip-text text-transparent">
            Find Your Next <br />{" "}
            <span className="text-primary">Cyber-Stay</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Experience the future of hospitality. Book smart hotels, automated
            pods, and luxury villas instantly.
          </p>
        </div>

        {/* SEARCH BAR (The Magic Part) */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-2xl flex flex-col md:flex-row items-center gap-2 max-w-4xl mx-auto w-full shadow-2xl shadow-primary/10">
          {/* 1. Destination Input */}
          <div className="flex items-center gap-3 bg-black/40 px-4 py-3 rounded-xl flex-1 w-full border border-transparent focus-within:border-primary/50 transition-colors">
            <MapPin className="text-primary w-5 h-5" />
            <input
              type="text"
              placeholder="Where are you going?"
              className="bg-transparent outline-none text-white placeholder-gray-400 w-full"
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>

          {/* 2. Date Picker */}
          <div className="relative flex-1 w-full">
            <div
              onClick={() => setOpenDate(!openDate)}
              className="flex items-center gap-3 bg-black/40 px-4 py-3 rounded-xl w-full cursor-pointer border border-transparent hover:border-primary/30 transition-colors"
            >
              <Calendar className="text-primary w-5 h-5" />
              <span className="text-gray-300 text-sm">
                {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}
              </span>
            </div>

            {/* Calendar Popup */}
            {openDate && (
              <div className="absolute top-14 left-0 z-50 bg-background border border-border p-2 rounded-xl shadow-xl">
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDates([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dates}
                  className="rounded-lg"
                  minDate={new Date()} // පරණ දින තෝරන්න බැරි වෙන්න
                />
              </div>
            )}
          </div>

          {/* 3. Options (People Count) */}
          <div className="relative flex-1 w-full">
            <div
              onClick={() => setOpenOptions(!openOptions)}
              className="flex items-center gap-3 bg-black/40 px-4 py-3 rounded-xl w-full cursor-pointer border border-transparent hover:border-primary/30 transition-colors"
            >
              <User className="text-primary w-5 h-5" />
              <span className="text-gray-300 text-sm">
                {`${options.adult} Adult · ${options.children} Children · ${options.room} Room`}
              </span>
            </div>

            {/* Options Popup */}
            {openOptions && (
              <div className="absolute top-14 left-0 z-50 bg-[#0F172A] border border-gray-700 p-4 rounded-xl shadow-xl w-72 text-white">
                {/* Adult Option */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm">Adult</span>
                  <div className="flex items-center gap-3">
                    <button
                      disabled={options.adult <= 1}
                      className="w-8 h-8 rounded-full border border-primary text-primary disabled:opacity-30 hover:bg-primary hover:text-white"
                      onClick={() => handleOption("adult", "d")}
                    >
                      -
                    </button>
                    <span>{options.adult}</span>
                    <button
                      className="w-8 h-8 rounded-full border border-primary text-primary hover:bg-primary hover:text-white"
                      onClick={() => handleOption("adult", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children Option */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm">Children</span>
                  <div className="flex items-center gap-3">
                    <button
                      disabled={options.children <= 0}
                      className="w-8 h-8 rounded-full border border-primary text-primary disabled:opacity-30 hover:bg-primary hover:text-white"
                      onClick={() => handleOption("children", "d")}
                    >
                      -
                    </button>
                    <span>{options.children}</span>
                    <button
                      className="w-8 h-8 rounded-full border border-primary text-primary hover:bg-primary hover:text-white"
                      onClick={() => handleOption("children", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Room Option */}
                <div className="flex justify-between items-center">
                  <span className="text-sm">Room</span>
                  <div className="flex items-center gap-3">
                    <button
                      disabled={options.room <= 1}
                      className="w-8 h-8 rounded-full border border-primary text-primary disabled:opacity-30 hover:bg-primary hover:text-white"
                      onClick={() => handleOption("room", "d")}
                    >
                      -
                    </button>
                    <span>{options.room}</span>
                    <button
                      className="w-8 h-8 rounded-full border border-primary text-primary hover:bg-primary hover:text-white"
                      onClick={() => handleOption("room", "i")}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 4. Search Button */}
          <button
            className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] active:scale-95 w-full md:w-auto"
            onClick={handleSearch}
          >
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
