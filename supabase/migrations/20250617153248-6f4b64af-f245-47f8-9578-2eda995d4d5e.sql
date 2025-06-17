
-- Create a table to store email signups
CREATE TABLE public.email_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) 
ALTER TABLE public.email_signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert their email (public signup)
CREATE POLICY "Anyone can sign up for email list" 
  ON public.email_signups 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy for viewing signups (admin only - you can modify this later)
CREATE POLICY "Only authenticated users can view signups" 
  ON public.email_signups 
  FOR SELECT 
  USING (auth.role() = 'authenticated');
