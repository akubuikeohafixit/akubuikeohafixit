
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, ArrowUp, User } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <ArrowUp className="w-8 h-8 text-blue-600" />,
      title: "Exchange Trading Expertise",
      description: "Advanced trading strategies in forex, crypto, and stock markets with proven track record of consistent profits."
    },
    {
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      title: "Entrepreneurial Leadership",
      description: "Building sustainable businesses and mentoring the next generation of entrepreneurs and traders."
    },
    {
      icon: <User className="w-8 h-8 text-purple-600" />,
      title: "Financial Education",
      description: "Empowering individuals with knowledge and tools to achieve financial independence and wealth creation."
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">About AkubuikeOhafixit</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A visionary entrepreneur and skilled exchange trader dedicated to financial excellence and empowering others.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-in-left">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop&crop=face"
              alt="AkubuikeOhafixit"
              className="rounded-2xl shadow-2xl w-full h-[600px] object-cover hover-float"
            />
          </div>
          
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-3xl font-bold text-gray-800">My Story</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              As AkubuikeOhafixit, I've dedicated my career to mastering the art of exchange trading and entrepreneurship. 
              My journey began with a passion for financial markets and has evolved into a mission to help others achieve financial freedom.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Through years of experience in forex, cryptocurrency, and stock trading, I've developed sophisticated strategies 
              that consistently generate profits while managing risk effectively. My entrepreneurial ventures span multiple 
              industries, always with a focus on innovation and sustainable growth.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, I combine my trading expertise with mentorship, helping aspiring traders and entrepreneurs 
              build their own paths to success. My commitment is to provide value, share knowledge, and create 
              opportunities for financial empowerment.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover-float transition-all duration-300 hover:shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-4 text-gray-800">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
