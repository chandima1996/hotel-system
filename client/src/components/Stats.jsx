import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { ShieldCheck, Zap, Wallet } from "lucide-react";
import { motion } from "framer-motion";

const Stats = () => {
  // මේ Section එක screen එකට ආවම තමයි count වෙන්න පටන් ගන්නේ
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div
      className="w-full dark:bg-black/20 border-y border-white/5 py-16"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* 1. Animated Counters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-20">
          {[
            { label: "Active Users", end: 12500 },
            { label: "Hotels Listed", end: 450 },
            { label: "Bookings", end: 85000 },
            { label: "Support", end: 24, suffix: "/7" },
          ].map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-2">
                {inView ? (
                  <CountUp
                    end={stat.end}
                    duration={2.5}
                    separator=","
                    suffix={stat.suffix || "+"}
                  />
                ) : (
                  "0"
                )}
              </h3>
              <p className="text-muted-foreground text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* 2. Features (Service Quality) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Wallet className="w-8 h-8 text-accent text-pink-500" />,
              title: "Best Price Guarantee",
              desc: "We ensure you get the most futuristic stays at the best market rates.",
            },
            {
              icon: <Zap className="w-8 h-8 text-yellow-400" />,
              title: "Instant Booking",
              desc: "AI-powered booking system confirms your reservation in milliseconds.",
            },
            {
              icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
              title: "100% Secure",
              desc: "Your data is protected with military-grade encryption protocols.",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="dark:bg-white/5 p-6 rounded-2xl border dark:border-white/10 hover:bg-white/10 transition-colors text-center md:text-left flex flex-col items-center md:items-start"
            >
              <div className="mb-4 bg-white/10 p-3 rounded-xl inline-block">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold dark:text-white mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
