
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsAppContact = () => {
    const message = formData.name && formData.message 
      ? `Hello AkubuikeOhafixit! My name is ${formData.name}. ${formData.message}`
      : "Hello AkubuikeOhafixit! I'm interested in your trading and entrepreneurship services.";
    
    const whatsappUrl = `https://wa.me/2348123456789?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "You'll be connected to AkubuikeOhafixit's WhatsApp shortly.",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleWhatsAppContact();
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to transform your financial future? Let's discuss how I can help you succeed.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <Card className="hover-float">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">Send Me a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your trading goals or business ideas..."
                    rows={5}
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
                  size="lg"
                >
                  <MessageSquare className="mr-2" size={20} />
                  Contact via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="hover-float">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Phone className="text-blue-600 mr-4" size={32} />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">Direct WhatsApp</h3>
                    <p className="text-gray-600">Instant communication</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Get immediate responses to your trading and business inquiries through WhatsApp.
                </p>
                <Button 
                  onClick={handleWhatsAppContact}
                  variant="outline" 
                  className="w-full border-2 border-green-500 text-green-600 hover:bg-green-50 transition-all duration-300"
                  size="lg"
                >
                  <MessageSquare className="mr-2" size={20} />
                  Open WhatsApp Chat
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover-float bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Why Choose Me?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-2">•</span>
                    Proven track record in forex and crypto trading
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-2">•</span>
                    Personalized mentorship and guidance
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-2">•</span>
                    Risk management expertise
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-2">•</span>
                    Entrepreneurial business strategies
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-200 mr-2">•</span>
                    Continuous support and education
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
