import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Phone, Clock, Calculator, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectType: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactInquiry) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      content: (
        <div className="space-y-1">
          <a href="tel:6304446003" className="text-soft-stone hover:text-warm-accent transition-colors block">
            6304446003
          </a>
          <a href="tel:9955998865" className="text-soft-stone hover:text-warm-accent transition-colors block">
            9955998865
          </a>
        </div>
      )
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: <p className="text-deep-charcoal/70">Mon - Sat: 9:00 AM - 7:00 PM</p>
    },
    {
      icon: Calculator,
      title: "Free Quotation",
      content: <p className="text-deep-charcoal/70">Detailed estimates with no hidden costs</p>
    }
  ];

  const quotationBenefits = [
    "Transparent pricing breakdown",
    "Professional consultation included",
    "No obligation to proceed"
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-bold text-4xl text-deep-charcoal mb-4">Get Your Free Quotation</h2>
          <p className="text-xl text-deep-charcoal/80 max-w-3xl mx-auto">
            Ready to transform your space? Contact us today for a comprehensive consultation and detailed quotation.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="font-semibold text-2xl text-deep-charcoal">Get In Touch</h3>
              <p className="text-deep-charcoal/70">
                Contact our team for personalized consultation and free quotation. We're here to bring your vision to life.
              </p>
            </div>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-soft-stone rounded-xl flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-pure-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-deep-charcoal">{info.title}</h4>
                    {info.content}
                  </div>
                </div>
              ))}
            </div>
            
            <Card className="bg-soft-stone/10">
              <CardContent className="p-6">
                <h4 className="font-semibold text-deep-charcoal mb-2">Why Choose Our Free Quotation?</h4>
                <ul className="space-y-2 text-deep-charcoal/70">
                  {quotationBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <Check className="w-4 h-4 text-soft-stone" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Card className="shadow-lg">
            <CardContent className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your first name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your last name" {...field} />
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
                          <Input placeholder="Enter your phone number" {...field} />
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
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="Enter your email address" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="residential">Residential Design</SelectItem>
                            <SelectItem value="modular">Modular Solutions</SelectItem>
                            <SelectItem value="commercial">Commercial Space</SelectItem>
                            <SelectItem value="renovation">Renovation</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Details</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project requirements..."
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
                    className="w-full bg-soft-stone text-pure-white px-8 py-4 rounded-lg font-semibold hover:bg-warm-accent transition-colors duration-300"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Submitting..." : "Request Free Quotation"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
