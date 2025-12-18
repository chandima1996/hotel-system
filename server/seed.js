import mongoose from "mongoose";
import dotenv from "dotenv";
import Hotel from "./models/Hotel.js";

dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongDB for seeding...");
  } catch (error) {
    throw error;
  }
};

const hotels = [
  {
    name: "Orrio SkyLounge Colombo",
    type: "Hotel",
    city: "Colombo",
    address: "101 Lotus Tower Rd, Colombo 01",
    distance: "500m from center",
    photos: [
      "https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=898&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    title: "Experience the Skyline like never before",
    description:
      "Located in the heart of Colombo, Orrio SkyLounge offers AI-controlled climate suites and panoramic views of the Indian Ocean. Perfect for the modern business traveler.",
    rating: 4.8,
    rooms: [],
    cheapestPrice: 25000,
    featured: true,
  },
  {
    name: "Orrio SkyLounge Colombo",
    type: "Hotel",
    city: "Colombo",
    address: "101 Lotus Tower Rd, Colombo 01",
    distance: "500m from center",
    photos: [
      "https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=898&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    title: "Experience the Skyline like never before",
    description:
      "Located in the heart of Colombo, Orrio SkyLounge offers AI-controlled climate suites and panoramic views of the Indian Ocean. Perfect for the modern business traveler.",
    rating: 4.8,
    rooms: [],
    cheapestPrice: 25000,
    featured: true,
  },
  {
    name: "Orrio SkyLounge Colombo",
    type: "Hotel",
    city: "Colombo",
    address: "101 Lotus Tower Rd, Colombo 01",
    distance: "500m from center",
    photos: [
      "https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=898&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    title: "Experience the Skyline like never before",
    description:
      "Located in the heart of Colombo, Orrio SkyLounge offers AI-controlled climate suites and panoramic views of the Indian Ocean. Perfect for the modern business traveler.",
    rating: 4.8,
    rooms: [],
    cheapestPrice: 25000,
    featured: true,
  },
  {
    name: "Orrio Cyber-City Kandy",
    type: "Apartment",
    city: "Kandy",
    address: "Tech Park Avenue, Kandy",
    distance: "1km from Temple",
    photos: [
      "https://images.unsplash.com/photo-1561501900-3701fa6a0864?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=898&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    title: "Heritage meets Future",
    description:
      "Smart apartments overlooking the Kandy Lake. Features automated check-in and virtual concierge services.",
    rating: 4.6,
    rooms: [],
    cheapestPrice: 15000,
    featured: true,
  },
];

const seedDB = async () => {
  await connect();

  try {
    await Hotel.insertMany(hotels);
    console.log("Orrio database seeded successfully!");
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.connection.close();
    console.log("Connection closed");
  }
};

seedDB();
