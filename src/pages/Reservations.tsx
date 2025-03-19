import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays, Clock, Users, Utensils } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { 
  Select,
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";

// Form schema
const reservationSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  date: z.date({ required_error: "Please select a date" }),
  time: z.string({ required_error: "Please select a time" }),
  guests: z.string({ required_error: "Please select number of guests" }),
  occasion: z.string().optional(),
  specialRequests: z.string().optional(),
});

type ReservationValues = z.infer<typeof reservationSchema>;

const ReservationsPage = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { toast } = useToast();

  // Initialize form
  const form = useForm<ReservationValues>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      specialRequests: "",
    },
  });

  // Available time slots
  const timeSlots = [
    "12:00 PM", "12:30 PM", 
    "1:00 PM", "1:30 PM", 
    "2:00 PM", "2:30 PM", 
    "5:00 PM", "5:30 PM", 
    "6:00 PM", "6:30 PM", 
    "7:00 PM", "7:30 PM", 
    "8:00 PM", "8:30 PM",
    "9:00 PM"
  ];

  // Guest count options
  const guestOptions = Array.from({ length: 10 }, (_, i) => (i + 1).toString());

  // Occasions
  const occasions = [
    "None", "Birthday", "Anniversary", "Business Meeting", 
    "Date Night", "Family Gathering", "Other"
  ];

  // Form submission handler
  function onSubmit(data: ReservationValues) {
    console.log(data);
    toast({
      title: "Reservation Request Received",
      description: `Thank you, ${data.name}. We'll confirm your reservation for ${format(data.date, "MMMM d, yyyy")} at ${data.time} shortly.`,
    });
    form.reset();
  }

  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar />
      
      {/* Hero section */}
      <div className="bg-charcoal-900 pt-24 pb-12">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-cream-100 mb-4">Make a Reservation</h1>
            <div className="w-24 h-1 bg-gold-400 mx-auto mb-6"></div>
            <p className="text-cream-300 max-w-2xl mx-auto">
              Reserve your table and enjoy an unforgettable dining experience at Food Feast.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Reservation form section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl font-serif font-bold text-charcoal-900 mb-6">Secure Your Table</h2>
              <div className="w-16 h-1 bg-gold-400 mb-8"></div>
              <p className="text-charcoal-700 mb-6">
                Make your dining plans with ease by reserving a table at Food Feast. Our online reservation system allows you to select your preferred date, time, and party size.
              </p>
              <p className="text-charcoal-700 mb-6">
                For special occasions or large groups of more than 10 people, please contact us directly at <a href="tel:+15551234567" className="text-burgundy-600 font-medium hover:underline">(555) 123-4567</a>.
              </p>
              <div className="bg-cream-100 p-6 rounded-lg border border-cream-200 mt-8">
                <h3 className="text-xl font-serif font-bold text-charcoal-900 mb-4">Reservation Guidelines</h3>
                <ul className="space-y-3 text-charcoal-700">
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-2">•</span>
                    Reservations can be made up to 30 days in advance
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-2">•</span>
                    We hold reservations for 15 minutes past the reserved time
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-2">•</span>
                    A credit card is not required to make a reservation
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-500 mr-2">•</span>
                    Please inform us of any dietary restrictions in the special requests field
                  </li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-lg shadow-xl p-6 md:p-8 border border-cream-200"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="(555) 123-4567" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="date"
                      render={({ field }) => (
                        <FormItem className="flex flex-col">
                          <FormLabel>Date</FormLabel>
                          <Popover>
                            <PopoverTrigger asChild>
                              <FormControl>
                                <Button
                                  variant={"outline"}
                                  className={`w-full pl-3 text-left font-normal ${
                                    !field.value && "text-muted-foreground"
                                  }`}
                                >
                                  <CalendarDays className="mr-2 h-4 w-4" />
                                  {field.value ? (
                                    format(field.value, "PPP")
                                  ) : (
                                    <span>Select date</span>
                                  )}
                                </Button>
                              </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                              <Calendar
                                mode="single"
                                selected={field.value}
                                onSelect={field.onChange}
                                disabled={(date) => {
                                  const today = new Date();
                                  today.setHours(0, 0, 0, 0);
                                  return date < today;
                                }}
                                initialFocus
                              />
                            </PopoverContent>
                          </Popover>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="time"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Time</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <div className="flex items-center">
                                  <Clock className="mr-2 h-4 w-4" />
                                  <SelectValue placeholder="Select time" />
                                </div>
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {timeSlots.map((time) => (
                                <SelectItem key={time} value={time}>
                                  {time}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="guests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Number of Guests</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <div className="flex items-center">
                                  <Users className="mr-2 h-4 w-4" />
                                  <SelectValue placeholder="Select guests" />
                                </div>
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {guestOptions.map((option) => (
                                <SelectItem key={option} value={option}>
                                  {option} {parseInt(option) === 1 ? "Person" : "People"}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="occasion"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Occasion (Optional)</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger>
                                <div className="flex items-center">
                                  <Utensils className="mr-2 h-4 w-4" />
                                  <SelectValue placeholder="Select occasion" />
                                </div>
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {occasions.map((occasion) => (
                                <SelectItem key={occasion} value={occasion}>
                                  {occasion}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="specialRequests"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Special Requests (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Any dietary restrictions or special needs..." 
                            className="min-h-[100px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-burgundy-500 hover:bg-burgundy-400 text-cream-50 py-6"
                    size="lg"
                  >
                    Reserve Table
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ReservationsPage;
