-- Create contacts table
CREATE TABLE public.contacts (
  id BIGSERIAL PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  industry TEXT NOT NULL,
  message TEXT NOT NULL
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert contacts (public form)
CREATE POLICY "Anyone can insert contacts" 
ON public.contacts 
FOR INSERT 
WITH CHECK (true);

-- Create policy to allow reading contacts (for admin purposes)
CREATE POLICY "Anyone can read contacts" 
ON public.contacts 
FOR SELECT 
USING (true);