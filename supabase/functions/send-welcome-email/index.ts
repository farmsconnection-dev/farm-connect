// Supabase Edge Function: send-welcome-email
// Sends welcome email after farm/automaat registration

import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

interface EmailRequest {
    to: string;
    name: string;
    locationType: "boerderij" | "automaat";
    packageType: string;
    farmName: string;
}

const welcomeEmailHtml = (name: string, locationType: string, packageType: string, farmName: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welkom bij FarmConnect</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
  <div style="background: linear-gradient(135deg, #16a34a 0%, #166534 100%); padding: 30px; border-radius: 16px 16px 0 0; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 28px;">🚜 FarmConnect</h1>
    <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px;">Verbindt boeren met consumenten</p>
  </div>
  
  <div style="background: white; padding: 30px; border-radius: 0 0 16px 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <h2 style="color: #16a34a; margin-top: 0;">Welkom bij FarmConnect! 🎉</h2>
    
    <p>Beste ${name},</p>
    
    <p>Bedankt voor je registratie op FarmConnect! Je hebt de eerste stap gezet om je ${locationType} <strong>"${farmName}"</strong> beter vindbaar te maken voor lokale consumenten.</p>
    
    <div style="background: #f0fdf4; border-left: 4px solid #16a34a; padding: 15px; margin: 20px 0; border-radius: 0 8px 8px 0;">
      <h3 style="margin: 0 0 10px 0; color: #166534;">📋 Wat is de volgende stap?</h3>
      <p style="margin: 0;">Om je locatie officieel op onze kaart te activeren, vragen we je om je gekozen pakket te bevestigen en de betaling af te ronden. Zodra dit is gebeurd, ben je direct zichtbaar voor iedereen in jouw regio.</p>
    </div>
    
    <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
      <p style="margin: 0 0 5px 0; font-size: 12px; color: #92400e; text-transform: uppercase; letter-spacing: 1px;">Gekozen pakket</p>
      <p style="margin: 0; font-size: 20px; font-weight: bold; color: #78350f;">${packageType}</p>
    </div>
    
    <div style="text-align: center; margin: 30px 0;">
      <a href="https://farmconnect.be" style="display: inline-block; background: linear-gradient(135deg, #16a34a 0%, #166534 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(22, 163, 74, 0.3);">
        Ga naar betaling →
      </a>
    </div>
    
    <p style="color: #666; font-size: 14px;">Heb je vragen over de verschillende pakketten? We helpen je graag!</p>
    
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    
    <p style="margin: 0; color: #666;">Met vriendelijke groet,</p>
    <p style="margin: 5px 0 0 0; font-weight: bold; color: #16a34a;">Het FarmConnect Team</p>
    
    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
      <p style="color: #9ca3af; font-size: 12px; margin: 0;">
        <strong>Zonder de boer geen eten! 🌾</strong><br>
        <a href="https://farmconnect.be" style="color: #16a34a;">farmconnect.be</a>
      </p>
    </div>
  </div>
</body>
</html>
`;

serve(async (req) => {
    // Handle CORS
    if (req.method === "OPTIONS") {
        return new Response("ok", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST",
                "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
            },
        });
    }

    try {
        const { to, name, locationType, packageType, farmName }: EmailRequest = await req.json();

        if (!RESEND_API_KEY) {
            throw new Error("RESEND_API_KEY is not configured");
        }

        const res = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: "FarmConnect <noreply@farmconnect.be>",
                to: [to],
                subject: "Welkom bij FarmConnect – Je registratie is bijna voltooid! 🚜",
                html: welcomeEmailHtml(name, locationType, packageType, farmName),
            }),
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Failed to send email");
        }

        return new Response(JSON.stringify({ success: true, data }), {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error.message }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
            },
        });
    }
});
