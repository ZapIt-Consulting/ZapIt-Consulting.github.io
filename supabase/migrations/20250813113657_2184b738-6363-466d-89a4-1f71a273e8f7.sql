-- Fix the function search path security issue
CREATE OR REPLACE FUNCTION notify_new_contact()
RETURNS TRIGGER 
SET search_path = public
LANGUAGE plpgsql 
SECURITY DEFINER
AS $$
BEGIN
  -- Call the edge function to send email notification
  PERFORM
    net.http_post(
      url := 'https://wxvahctwjucwifchpbth.supabase.co/functions/v1/notify-new-contact',
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key', true)
      ),
      body := jsonb_build_object(
        'contact_id', NEW.id,
        'name', NEW.name,
        'email', NEW.email,
        'company', NEW.company,
        'industry', NEW.industry,
        'message', NEW.message,
        'created_at', NEW.created_at
      )
    );
  
  RETURN NEW;
END;
$$;