import React, { useState } from 'react';
import { MapPin, Clock, Star, Battery, Zap, Users, CheckCircle } from 'lucide-react';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const vehicles = [
    {
      id: 1,
      name: "Urban Cruiser",
      type: "bike",
      category: "electric",
      image: "🚴‍♂️",
      price: 15,
      rating: 4.8,
      battery: 85,
      range: "25km",
      available: true,
      features: ["GPS Tracking", "LED Lights", "Phone Holder"]
    },
    {
      id: 2,
      name: "City Commuter",
      type: "bike",
      category: "standard", 
      image: "🚲",
      price: 8,
      rating: 4.5,
      battery: null,
      range: "Unlimited",
      available: true,
      features: ["Basket", "Bell", "Reflectors"]
    },
    {
      id: 3,
      name: "Speed Demon",
      type: "scooter",
      category: "electric",
      image: "🛴",
      price: 20,
      rating: 4.9,
      battery: 92,
      range: "35km",
      available: true,
      features: ["Fast Charging", "Digital Display", "Anti-theft"]
    },
    {
      id: 4,
      name: "Eco Rider",
      type: "scooter",
      category: "electric",
      image: "🛵",
      price: 18,
      rating: 4.7,
      battery: 78,
      range: "30km",
      available: false,
      features: ["Eco Mode", "USB Charging", "Storage Box"]
    },
    {
      id: 5,
      name: "Mountain Explorer",
      type: "bike",
      category: "mountain",
      image: "🚵‍♀️",
      price: 25,
      rating: 4.6,
      battery: null,
      range: "Adventure",
      available: true,
      features: ["All-terrain", "Shock Absorber", "Water Bottle"]
    },
    {
      id: 6,
      name: "Quick Zip",
      type: "scooter",
      category: "electric",
      image: "🛴",
      price: 12,
      rating: 4.4,
      battery: 65,
      range: "20km",
      available: true,
      features: ["Lightweight", "Foldable", "LED Screen"]
    }
  ];

  const stats = [
    { icon: Users, value: "50K+", label: "Happy Riders" },
    { icon: MapPin, value: "200+", label: "Locations" },
    { icon: Clock, value: "24/7", label: "Available" },
    { icon: CheckCircle, value: "99%", label: "Uptime" }
  ];

  const filteredVehicles = selectedCategory === 'all' 
    ? vehicles 
    : vehicles.filter(v => v.type === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent animate-pulse">
              RideEasy
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Your Perfect Ride Awaits - Bikes & Scooters for Every Journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 hover:scale-105 transition-all duration-300 shadow-lg">
                Start Riding Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300">
                Download App
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mb-4 group-hover:shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vehicle Selection */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Choose Your Ride</h2>
            <p className="text-xl text-gray-600">Premium vehicles for every adventure</p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-2 shadow-lg">
              {['all', 'bike', 'scooter'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-orange-600'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                  {category === 'all' ? ' Vehicles' : category === 'bike' ? 's' : 's'}
                </button>
              ))}
            </div>
          </div>

          {/* Vehicle Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <div key={vehicle.id} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="relative p-8 bg-gradient-to-br from-orange-50 to-orange-100">
                  <div className="text-6xl mb-4 text-center">{vehicle.image}</div>
                  {vehicle.battery && (
                    <div className="absolute top-4 right-4 flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      <Battery className="w-4 h-4 mr-1" />
                      {vehicle.battery}%
                    </div>
                  )}
                  {!vehicle.available && (
                    <div className="absolute top-4 left-4 bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-semibold">
                      Unavailable
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{vehicle.name}</h3>
                      <div className="flex items-center text-yellow-500">
                        <Star className="w-4 h-4 fill-current mr-1" />
                        <span className="text-gray-600">{vehicle.rating}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-orange-600">₹{vehicle.price}</div>
                      <div className="text-sm text-gray-500">per hour</div>
                    </div>
                  </div>

                  <div className="flex items-center mb-4 text-gray-600">
                    <Zap className="w-4 h-4 mr-2" />
                    <span>Range: {vehicle.range}</span>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm text-gray-600 mb-2">Features:</div>
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature, index) => (
                        <span key={index} className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    disabled={!vehicle.available}
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                      vehicle.available
                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:shadow-lg hover:scale-102'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {vehicle.available ? 'Book Now' : 'Currently Unavailable'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-orange-600 to-orange-500 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-orange-100">Join thousands of riders who choose RideEasy for their daily commute and adventures</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-50 hover:scale-105 transition-all duration-300 shadow-lg">
              <MapPin className="w-5 h-5 inline mr-2" />
              Find Nearby Rides
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-orange-600 transition-all duration-300">
              <Clock className="w-5 h-5 inline mr-2" />
              Book for Later
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-orange-300 bg-clip-text text-transparent">
            RideEasy
          </div>
          <p className="text-gray-400 mb-4">Sustainable mobility for everyone, everywhere</p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <span className="hover:text-white cursor-pointer transition-colors">About</span>
            <span className="hover:text-white cursor-pointer transition-colors">Support</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;