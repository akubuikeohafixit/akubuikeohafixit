import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Edit, Save, X, Upload } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [profileData, setProfileData] = useState({
    name: 'AkubuikeOhafixit',
    title: 'Entrepreneur & Exchange Trader',
    email: 'akubuike@ohafixit.com',
    phone: '+234 812 345 6789',
    bio: 'Passionate entrepreneur and skilled exchange trader with over 8 years of experience in financial markets. Specializing in forex, cryptocurrency, and stock trading with a proven track record of consistent profits and risk management excellence.',
    achievements: [
      'Generated 200%+ ROI in forex trading over 3 years',
      'Successfully launched 5 profitable business ventures',
      'Mentored 500+ aspiring traders and entrepreneurs',
      'Featured speaker at major financial conferences'
    ],
    specialties: [
      'Forex Trading Strategies',
      'Cryptocurrency Investment',
      'Stock Market Analysis',
      'Risk Management',
      'Business Development',
      'Financial Education'
    ]
  });
  
  const [editData, setEditData] = useState(profileData);
  const { toast } = useToast();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
        toast({
          title: "Image Updated",
          description: "Your profile image has been updated successfully.",
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    });
  };

  const handleArrayChange = (field: 'achievements' | 'specialties', index: number, value: string) => {
    const newArray = [...editData[field]];
    newArray[index] = value;
    setEditData({
      ...editData,
      [field]: newArray
    });
  };

  const addArrayItem = (field: 'achievements' | 'specialties') => {
    setEditData({
      ...editData,
      [field]: [...editData[field], '']
    });
  };

  const removeArrayItem = (field: 'achievements' | 'specialties', index: number) => {
    const newArray = editData[field].filter((_, i) => i !== index);
    setEditData({
      ...editData,
      [field]: newArray
    });
  };

  const handleSave = () => {
    setProfileData(editData);
    setIsEditing(false);
    toast({
      title: "Profile Updated",
      description: "Your profile information has been successfully updated.",
    });
  };

  const handleCancel = () => {
    setEditData(profileData);
    setIsEditing(false);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Profile Management</h2>
          <p className="text-xl text-gray-600">
            Manage your professional profile and showcase your expertise.
          </p>
        </div>
        
        <Card className="hover-float">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
              <User className="mr-3" size={32} />
              Professional Profile
            </CardTitle>
            <Button
              onClick={() => setIsEditing(!isEditing)}
              variant={isEditing ? "destructive" : "outline"}
              size="sm"
            >
              {isEditing ? <X className="mr-2" size={16} /> : <Edit className="mr-2" size={16} />}
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </Button>
          </CardHeader>
          
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  {isEditing ? (
                    <Input
                      name="name"
                      value={editData.name}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  ) : (
                    <p className="text-lg font-semibold text-gray-800">{profileData.name}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  {isEditing ? (
                    <Input
                      name="title"
                      value={editData.title}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  ) : (
                    <p className="text-lg text-blue-600 font-medium">{profileData.title}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  {isEditing ? (
                    <Input
                      name="email"
                      type="email"
                      value={editData.email}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  ) : (
                    <p className="text-gray-600">{profileData.email}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  {isEditing ? (
                    <Input
                      name="phone"
                      value={editData.phone}
                      onChange={handleInputChange}
                      className="w-full"
                    />
                  ) : (
                    <p className="text-gray-600">{profileData.phone}</p>
                  )}
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-4">
                <img
                  src={profileImage}
                  alt="Profile"
                  className="w-64 h-64 rounded-2xl object-cover shadow-xl"
                />
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Upload size={16} />
                  Change Photo
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
              {isEditing ? (
                <Textarea
                  name="bio"
                  value={editData.bio}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full"
                />
              ) : (
                <p className="text-gray-600 leading-relaxed">{profileData.bio}</p>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Key Achievements</label>
              {isEditing ? (
                <div className="space-y-3">
                  {editData.achievements.map((achievement, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={achievement}
                        onChange={(e) => handleArrayChange('achievements', index, e.target.value)}
                        className="flex-1"
                        placeholder="Enter achievement"
                      />
                      <Button
                        onClick={() => removeArrayItem('achievements', index)}
                        variant="destructive"
                        size="sm"
                      >
                        <X size={16} />
                      </Button>
                    </div>
                  ))}
                  <Button
                    onClick={() => addArrayItem('achievements')}
                    variant="outline"
                    size="sm"
                  >
                    Add Achievement
                  </Button>
                </div>
              ) : (
                <ul className="grid md:grid-cols-2 gap-3">
                  {profileData.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-600">{achievement}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Specialties</label>
              {isEditing ? (
                <div className="space-y-3">
                  {editData.specialties.map((specialty, index) => (
                    <div key={index} className="flex gap-2">
                      <Input
                        value={specialty}
                        onChange={(e) => handleArrayChange('specialties', index, e.target.value)}
                        className="flex-1"
                        placeholder="Enter specialty"
                      />
                      <Button
                        onClick={() => removeArrayItem('specialties', index)}
                        variant="destructive"
                        size="sm"
                      >
                        <X size={16} />
                      </Button>
                    </div>
                  ))}
                  <Button
                    onClick={() => addArrayItem('specialties')}
                    variant="outline"
                    size="sm"
                  >
                    Add Specialty
                  </Button>
                </div>
              ) : (
                <div className="flex flex-wrap gap-3">
                  {profileData.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              )}
            </div>
            
            {isEditing && (
              <div className="flex gap-4 pt-6">
                <Button
                  onClick={handleSave}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  <Save className="mr-2" size={16} />
                  Save Changes
                </Button>
                <Button onClick={handleCancel} variant="outline">
                  Cancel
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Profile;
