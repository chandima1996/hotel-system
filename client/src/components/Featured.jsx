import { useState, useEffect, useContext } from "react";
import useFetch from "../hooks/useFetch";
import { CurrencyContext } from "../context/CurrencyContext";
import {
  MapPin,
  Star,
  Wifi,
  Car,
  Utensils,
  Waves,
  Wind,
  Coffee,
} from "lucide-react"; // Icons import කළා

// Amenities වලට අදාල Icon තෝරන function එක
const getAmenityIcon = (amenity) => {
  switch (amenity) {
    case "wifi":
      return <Wifi className="w-3 h-3" />;
    case "parking":
      return <Car className="w-3 h-3" />;
    case "restaurant":
      return <Utensils className="w-3 h-3" />;
    case "pool":
      return <Waves className="w-3 h-3" />;
    case "ac":
      return <Wind className="w-3 h-3" />;
    case "cafe":
      return <Coffee className="w-3 h-3" />;
    default:
      return <Star className="w-3 h-3" />;
  }
};

const HotelCard = ({ item }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const { currency } = useContext(CurrencyContext);

  // Database එකේ Amenities නැත්නම්, ලස්සනට පේන්න මම මේවා Hardcode කළා (Demo එකට විතරයි)
  const amenities =
    item.amenities && item.amenities.length > 0
      ? item.amenities
      : ["wifi", "pool", "parking", "ac"];

  useEffect(() => {
    if (item.photos.length > 1) {
      const interval = setInterval(() => {
        setCurrentImgIndex((prev) => (prev + 1) % item.photos.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [item.photos]);

  return (
    <div className="group relative bg-white dark:bg-card/5 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] flex flex-col h-full">
      {/* Image Slider Section */}
      <div className="relative h-60 overflow-hidden shrink-0">
        {item.photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={item.name}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImgIndex ? "opacity-100 scale-110" : "opacity-0"
            }`}
          />
        ))}

        {/* Rating Badge */}
        <div className="absolute top-3 right-3 z-10 bg-white/90 dark:bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-bold text-yellow-500 dark:text-yellow-400 border border-gray-200 dark:border-white/10 shadow-sm">
          <Star className="w-3 h-3 fill-yellow-500 dark:fill-yellow-400" />
          {item.rating || 4.5}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 truncate">
            {item.name}
          </h3>
          <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-muted-foreground mb-3">
            <MapPin className="w-3 h-3 text-blue-600 dark:text-primary" />
            {item.city}
          </div>

          {/* AMENITIES ICONS SECTION (New) */}
          <div className="flex gap-2 mb-4">
            {amenities.slice(0, 5).map((am, i) => (
              <div
                key={i}
                className="p-1.5 bg-gray-100 dark:bg-white/10 rounded-md text-gray-600 dark:text-gray-300"
                title={am}
              >
                {getAmenityIcon(am)}
              </div>
            ))}
          </div>
        </div>

        {/* Price & Action Section */}
        <div className="flex items-end justify-between mt-2 pt-3 border-t border-gray-100 dark:border-white/5">
          <div>
            <span className="text-xs text-gray-400 uppercase font-medium">
              Starting from
            </span>
            <div className="flex items-baseline gap-1">
              <p className="text-xl font-bold text-blue-600 dark:text-primary">
                {currency === "LKR"
                  ? `LKR ${item.cheapestPrice.toLocaleString()}`
                  : `USD ${Math.round(item.cheapestPrice / 300)}`}
              </p>
              {/* PER NIGHT Text (New) */}
              <span className="text-xs text-gray-500 dark:text-gray-400 font-normal">
                / per night
              </span>
            </div>
          </div>
          <button className="bg-blue-50 dark:bg-primary/10 hover:bg-blue-600 dark:hover:bg-primary text-blue-600 dark:text-primary hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

const Featured = () => {
  const { data, loading, error } = useFetch("/api/hotels?featured=true");

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Trending on{" "}
          <span className="text-blue-600 dark:text-primary">ORRIO</span>
        </h2>
        <p className="text-gray-500 dark:text-muted-foreground">
          Most loved futuristic stays by travelers.
        </p>
      </div>

      {loading ? (
        <div className="text-center text-gray-500">Loading Data...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data && data.map((item) => <HotelCard key={item._id} item={item} />)}
        </div>
      )}
    </div>
  );
};

export default Featured;
