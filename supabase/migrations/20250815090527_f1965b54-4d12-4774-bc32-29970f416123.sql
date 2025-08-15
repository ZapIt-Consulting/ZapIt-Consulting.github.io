-- Fix RLS policies for contacts table to allow anonymous submissions
DROP POLICY IF EXISTS "Anyone can insert contacts" ON public.contacts;
DROP POLICY IF EXISTS "Only authenticated users can read contacts" ON public.contacts;

-- Allow anyone (including anonymous users) to insert contact form submissions
CREATE POLICY "Allow public contact form submissions" 
ON public.contacts 
FOR INSERT 
TO public
WITH CHECK (true);

-- Only allow authenticated users (like admins) to read contact submissions
CREATE POLICY "Only authenticated users can read contacts" 
ON public.contacts 
FOR SELECT 
TO authenticated
USING (true);