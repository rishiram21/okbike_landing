import React from 'react'
import { Phone, MessageCircle, Star, Calendar, Users, MapPin, Menu, X, Bike, Clock, Shield } from 'lucide-react';

const BikeCard = ({ bike }) => {
  const handleWhatsAppClick = () => {
    const message = `Hi! I'm interested in renting the ${bike.name}. Can you provide more details?`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+1234567890';
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl">
      <div className="relative">
        <img 
          src={bike.image} 
          alt={bike.name}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Available
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800">{bike.name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium text-gray-600">{bike.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">{bike.description}</p>
        
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Users className="h-4 w-4 text-blue-500" />
            <span>{bike.capacity}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock className="h-4 w-4 text-green-500" />
            <span>{bike.type}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-6">
          <div className="text-2xl font-bold text-gray-800">
            ₹{bike.price}
            <span className="text-sm font-normal text-gray-500">/day</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-gray-600">
            <Shield className="h-4 w-4 text-purple-500" />
            <span>Insured</span>
          </div>
        </div>
        
        <div className="flex space-x-3">
          <button 
            onClick={handleWhatsAppClick}
            className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp</span>
          </button>
          
          <button 
            onClick={handleCallClick}
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105"
          >
            <Phone className="h-4 w-4" />
            <span>Call</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BikeCard