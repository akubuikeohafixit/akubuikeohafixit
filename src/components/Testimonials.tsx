
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Forex Trader",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b637?w=150&h=150&fit=crop&crop=face",
      content: "AkubuikeOhafixit's trading strategies completely transformed my approach to forex. I've seen consistent profits and learned invaluable risk management techniques."
    },
    {
      name: "Michael Chen",
      role: "Crypto Investor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: "The mentorship I received was exceptional. His insights into cryptocurrency markets helped me navigate volatility and build a profitable portfolio."
    },
    {
      name: "Emma Rodriguez",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      content: "Working with AkubuikeOhafixit gave me the entrepreneurial mindset I needed. His business strategies and financial guidance were game-changing."
    },
    {
      name: "David Thompson",
      role: "Stock Trader",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
      content: "His technical analysis skills are outstanding. I've learned to read market patterns and make informed decisions that consistently yield profits."
    },
    {
      name: "Lisa Park",
      role: "Financial Advisor",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=150&h=150&fit=crop&crop=face",
      content: "The financial education provided was comprehensive and practical. It's rare to find someone who combines theory with real-world success so effectively."
    },
    {
      name: "James Wilson",
      role: "Day Trader",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      content: "AkubuikeOhafixit's approach to day trading is methodical and profitable. His risk management strategies have saved me from significant losses."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      visible.push(testimonials[index]);
    }
    return visible;
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">What People Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from those who have transformed their financial futures with my guidance.
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out">
            {getVisibleTestimonials().map((testimonial, index) => (
              <div key={`${currentIndex}-${index}`} className="w-full md:w-1/3 flex-shrink-0 px-4">
                <Card className="h-full hover-float transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-8 text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                    />
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed italic">
                      "{testimonial.content}"
                    </p>
                    <h4 className="font-bold text-xl text-gray-800 mb-2">{testimonial.name}</h4>
                    <p className="text-blue-600 font-medium">{testimonial.role}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
