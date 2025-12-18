import useFetch from "@/hooks/useFetch.js";
import { MapPin, Star } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

const Featured = () => {
  const { data, loading, error } = useFetch("/api/hotels?featured=true");

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Trending on <span className="text-primary">ORRIO</span>
          <p className="text-muted-foreground">
            Most loved futuristic stays by travelers.
          </p>
        </h2>
      </div>
      {loading ? (
        <div className="text-white text-center">Loading Data...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data &&
            data.map((item) => (
              <div
                key={item._id}
                className="group relative bg-card/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.photos[0]}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg flex items-center gap-1 text-xs font-bold text-yellow-400 border border-white/10">
                    <Star className="w-3 h-3 fill-yellow-400" />
                    {item.rating || 4.5}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-1 truncate">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                    <MapPin className="w-3 h-3 text-primary" />
                    {item.city}
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <span className="text-xs text-muted-foreground uppercase">
                        Starting from
                      </span>
                      <p className="text-lg font-bold text-primary">
                        LKR {item.cheapestPrice.toLocaleString()}
                      </p>
                    </div>
                    <button className="bg-primary/10 hover:bg-primary text-primary hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Featured;
