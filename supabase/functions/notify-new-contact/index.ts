import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

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
    const { contact_id, name, email, company, industry, message, created_at } = await req.json()

    // Create structured email content
    const emailBody = `
🎉 New Contact Form Submission Received!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 CONTACT DETAILS:
• Name: ${name}
• Email: ${email}
• Company: ${company || 'Not provided'}
• Industry: ${industry}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💬 MESSAGE:
${message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 SUBMISSION INFO:
• Contact ID: ${contact_id}
• Submitted: ${new Date(created_at).toLocaleString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  timeZoneName: 'short'
})}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🚀 Next Steps: Follow up with the lead within 24 hours for best conversion rates!
    `.trim()

    // Create HTML version of the email
    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e1e1e1; }
        .section { margin-bottom: 25px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-left: 10px; }
        .message-box { background: white; padding: 20px; border-left: 4px solid #667eea; margin: 15px 0; border-radius: 4px; }
        .footer { text-align: center; margin-top: 20px; padding: 15px; background: #667eea; color: white; border-radius: 8px; }
        .divider { border-top: 2px solid #e1e1e1; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="header">
        <h1>🎉 New Contact Form Submission!</h1>
    </div>
    <div class="content">
        <div class="section">
            <h3>📝 Contact Details</h3>
            <p><span class="label">Name:</span><span class="value">${name}</span></p>
            <p><span class="label">Email:</span><span class="value">${email}</span></p>
            <p><span class="label">Company:</span><span class="value">${company || 'Not provided'}</span></p>
            <p><span class="label">Industry:</span><span class="value">${industry}</span></p>
        </div>
        
        <div class="divider"></div>
        
        <div class="section">
            <h3>💬 Message</h3>
            <div class="message-box">
                ${message.replace(/\n/g, '<br>')}
            </div>
        </div>
        
        <div class="divider"></div>
        
        <div class="section">
            <h3>📊 Submission Info</h3>
            <p><span class="label">Contact ID:</span><span class="value">${contact_id}</span></p>
            <p><span class="label">Submitted:</span><span class="value">${new Date(created_at).toLocaleString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              timeZoneName: 'short'
            })}</span></p>
        </div>
    </div>
    <div class="footer">
        <p>🚀 <strong>Next Steps:</strong> Follow up with this lead within 24 hours for best conversion rates!</p>
    </div>
</body>
</html>
    `

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
        from: 'ZapitLabs Notifications <notifications@zapitlabs.com>',
        to: ['team@zapitlabs.com'],
        subject: `🎯 New Lead: ${name} from ${company || industry}`,
        text: emailBody,
        html: emailHtml,
      }),
    })

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text()
      console.error('Resend API error:', errorText)
      throw new Error(`Resend API error: ${errorText}`)
    }

    const result = await emailResponse.json()
    console.log('Email sent successfully:', result)

    return new Response(
      JSON.stringify({ success: true, message: 'Email notification sent successfully', emailId: result.id }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    )

  } catch (error) {
    console.error('Error sending notification email:', error)
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    )
  }
})