-- Create a function to call the edge function when a new contact is inserted
CREATE OR REPLACE FUNCTION notify_new_contact()
RETURNS TRIGGER AS $$
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
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically send email when new contact is inserted
CREATE TRIGGER trigger_notify_new_contact
  AFTER INSERT ON contacts
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_contact();