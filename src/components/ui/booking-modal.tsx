import { useState } from 'react';
import { Button } from './button';
import { Input } from './input';
import { Label } from './label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';
import { Textarea } from './textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './dialog';
import { Calendar, Clock, Users, MapPin, X } from 'lucide-react';
import { useToast } from '../../hooks/use-toast';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedLocation?: string;
}

export const BookingModal = ({ isOpen, onClose, selectedLocation }: BookingModalProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    location: selectedLocation || '',
    occasion: '',
    requests: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.date || !formData.time || !formData.guests || !formData.location) {
      toast({
        title: "Please fill in all required fields",
        description: "All fields marked with * are required to complete your reservation.",
        variant: "destructive",
      });
      return;
    }

    const base = 'https://wa.me/';
    const number = formData.location === 'bangalore' ? '918068507673' : '918045883769';
    const text = encodeURIComponent(
      `Reservation Request - Macaw ${formData.location === 'bangalore' ? 'Bangalore' : 'Chennai'}\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Date: ${formData.date}\n` +
      `Time: ${formData.time}\n` +
      `Guests: ${formData.guests}\n` +
      (formData.occasion ? `Occasion: ${formData.occasion}\n` : '') +
      (formData.requests ? `Requests: ${formData.requests}` : '')
    );
    window.open(`${base}${number}?text=${text}`, '_blank');

    // Reset form and close modal
    setFormData({
      name: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      location: selectedLocation || '',
      occasion: '',
      requests: '',
    });
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[95vw] max-w-lg max-h-[95vh] overflow-y-auto bg-card border-border mx-auto">
        <DialogHeader className="text-center pb-4">
          <DialogTitle className="font-cinzel text-2xl sm:text-3xl text-primary">
            Reserve Your Table
          </DialogTitle>
          <DialogDescription className="text-foreground text-sm sm:text-base">
            Experience tropical luxury at Macaw by Stories. Fill in your details to secure your reservation.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-foreground font-semibold text-sm sm:text-base">
                Full Name *
              </Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                placeholder="Enter your full name"
                className="mt-2 h-12 text-base"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
              <div>
                <Label htmlFor="phone" className="text-foreground font-semibold text-sm sm:text-base">
                  Phone *
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  className="mt-2 h-12 text-base"
                  required
                />
              </div>
            </div>
          </div>

          {/* Reservation Details */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="date" className="text-foreground font-semibold flex items-center text-sm sm:text-base">
                  <Calendar className="w-4 h-4 mr-2" />
                  Date *
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                  className="mt-2 h-12 text-base"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              <div>
                <Label htmlFor="time" className="text-foreground font-semibold flex items-center text-sm sm:text-base">
                  <Clock className="w-4 h-4 mr-2" />
                  Time *
                </Label>
                <Select value={formData.time} onValueChange={(value) => handleInputChange('time', value)}>
                  <SelectTrigger className="mt-2 h-12 text-base">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="12:00">12:00 PM</SelectItem>
                    <SelectItem value="12:30">12:30 PM</SelectItem>
                    <SelectItem value="13:00">1:00 PM</SelectItem>
                    <SelectItem value="13:30">1:30 PM</SelectItem>
                    <SelectItem value="14:00">2:00 PM</SelectItem>
                    <SelectItem value="14:30">2:30 PM</SelectItem>
                    <SelectItem value="15:00">3:00 PM</SelectItem>
                    <SelectItem value="19:00">7:00 PM</SelectItem>
                    <SelectItem value="19:30">7:30 PM</SelectItem>
                    <SelectItem value="20:00">8:00 PM</SelectItem>
                    <SelectItem value="20:30">8:30 PM</SelectItem>
                    <SelectItem value="21:00">9:00 PM</SelectItem>
                    <SelectItem value="21:30">9:30 PM</SelectItem>
                    <SelectItem value="22:00">10:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="guests" className="text-foreground font-semibold flex items-center text-sm sm:text-base">
                  <Users className="w-4 h-4 mr-2" />
                  Guests *
                </Label>
                <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                  <SelectTrigger className="mt-2 h-12 text-base">
                    <SelectValue placeholder="Number of guests" />
                  </SelectTrigger>
                  <SelectContent>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <SelectItem key={num} value={num.toString()}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </SelectItem>
                    ))}
                    <SelectItem value="10+">10+ Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="location" className="text-foreground font-semibold flex items-center text-sm sm:text-base">
                  <MapPin className="w-4 h-4 mr-2" />
                  Location *
                </Label>
                <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)}>
                  <SelectTrigger className="mt-2 h-12 text-base">
                    <SelectValue placeholder="Choose location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bangalore">Macaw Bangalore</SelectItem>
                    <SelectItem value="chennai">Macaw Chennai</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="occasion" className="text-foreground font-semibold text-sm sm:text-base">
                Special Occasion (Optional)
              </Label>
              <Select value={formData.occasion} onValueChange={(value) => handleInputChange('occasion', value)}>
                <SelectTrigger className="mt-2 h-12 text-base">
                  <SelectValue placeholder="Select occasion" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="birthday">Birthday Celebration</SelectItem>
                  <SelectItem value="anniversary">Anniversary</SelectItem>
                  <SelectItem value="business">Business Meeting</SelectItem>
                  <SelectItem value="date">Romantic Date</SelectItem>
                  <SelectItem value="celebration">General Celebration</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="requests" className="text-foreground font-semibold text-sm sm:text-base">
                Special Requests (Optional)
              </Label>
              <Textarea
                id="requests"
                value={formData.requests}
                onChange={(e) => handleInputChange('requests', e.target.value)}
                placeholder="Any dietary restrictions, seating preferences, or special arrangements..."
                className="mt-2 text-base min-h-[100px]"
                rows={4}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-border text-foreground h-12 text-base"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-gradient-gold text-charcoal font-semibold hover:shadow-luxury transition-smooth h-12 text-base"
            >
              Confirm Reservation
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};