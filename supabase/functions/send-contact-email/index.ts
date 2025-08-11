import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { firstName, lastName, email, company, industry, message } = await req.json()

    // Create email content
    const emailBody = `
New Contact Form Submission

Name: ${firstName} ${lastName}
Email: ${email}
Company: ${company}
Industry: ${industry}

Message:
${message}

Submitted at: ${new Date().toISOString()}
    `.trim()

    // Use Resend API to send email
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    
    if (!resendApiKey) {
      throw new Error('RESEND_API_KEY not configured')
    }

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'ZapitLabs Contact <noreply@zapitlabs.com>',
        to: ['team@zapitlabs.com'],
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        text: emailBody,
        html: emailBody.replace(/\n/g, '<br>'),
      }),
    })

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text()
      throw new Error(`Resend API error: ${errorText}`)
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Email sent successfully' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})