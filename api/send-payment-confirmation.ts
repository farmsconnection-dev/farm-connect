import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.BREVO_LOGIN,
        pass: process.env.BREVO_PASSWORD,
    },
});

const confirmationEmailHtml = (name: string, locationType: string, farmName: string, amount: string) => `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bevestiging - FarmConnect</title>
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
  <div style="background: linear-gradient(135deg, #16a34a 0%, #166534 100%); padding: 30px; border-radius: 16px 16px 0 0; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 28px;">🚜 FarmConnect</h1>
    <p style="color: rgba(255,255,255,0.9); margin: 10px 0 0 0; font-size: 14px;">Verbindt boeren met consumenten</p>
  </div>
  
  <div style="background: white; padding: 30px; border-radius: 0 0 16px 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
    <div style="text-align: center; margin-bottom: 20px;">
      <span style="font-size: 60px;">🎉</span>
    </div>
    
    <h2 style="color: #16a34a; margin-top: 0; text-align: center;">Hoera! Je staat nu live!</h2>
    
    <p>Beste ${name},</p>
    
    <p>Bedankt voor je betaling van <strong>${amount}</strong>! We hebben deze in goede orde ontvangen.</p>
    
    <div style="background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%); padding: 20px; border-radius: 12px; margin: 20px 0; text-align: center; border: 2px solid #16a34a;">
      <p style="margin: 0 0 5px 0; font-size: 14px; color: #166534;">Je ${locationType} is nu officieel zichtbaar!</p>
      <p style="margin: 0; font-size: 24px; font-weight: bold; color: #16a34a;">"${farmName}"</p>
    </div>
    
    <p>Consumenten in jouw regio kunnen je nu direct vinden en ontdekken welke verse producten je aanbiedt.</p>
    
    <h3 style="color: #166534; margin-top: 30px;">📋 Wat kun je nu doen?</h3>
    
    <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin: 15px 0;">
      <p style="margin: 0 0 10px 0;"><strong>✅ Controleer je profiel</strong></p>
      <p style="margin: 0; color: #666; font-size: 14px;">Log in op je dashboard om te zien hoe je locatie op de kaart wordt weergegeven.</p>
    </div>
    
    <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin: 15px 0;">
      <p style="margin: 0 0 10px 0;"><strong>📸 Voeg foto's toe</strong></p>
      <p style="margin: 0; color: #666; font-size: 14px;">Profielen met duidelijke foto's van de boerderij of automaat trekken meer bezoekers aan.</p>
    </div>
    
    <div style="background: #f9fafb; padding: 15px; border-radius: 8px; margin: 15px 0;">
      <p style="margin: 0 0 10px 0;"><strong>🥕 Houd je aanbod actueel</strong></p>
      <p style="margin: 0; color: #666; font-size: 14px;">Heb je nieuwe producten? Pas het direct aan zodat klanten altijd weten wat er op voorraad is.</p>
    </div>
    
    <div style="background: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
      <p style="margin: 0; font-size: 14px; color: #92400e;">
        <strong>📄 Je factuur:</strong> Je vindt de factuur van je betaling in je dashboard onder 'Betalingen'.
      </p>
    </div>
    
    <div style="text-align: center; margin: 30px 0;">
      <a href="https://farmconnect.be" style="display: inline-block; background: linear-gradient(135deg, #16a34a 0%, #166534 100%); color: white; padding: 15px 40px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 16px; box-shadow: 0 4px 15px rgba(22, 163, 74, 0.3);">
        Ga naar mijn dashboard →
      </a>
    </div>
    
    <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
    
    <p style="text-align: center; color: #666; font-style: italic;">Bedankt dat je deel uitmaakt van onze missie om de lokale landbouw te versterken. Samen maken we het verschil!</p>
    
    <p style="margin: 20px 0 0 0; color: #666;">Met vriendelijke groet,</p>
    <p style="margin: 5px 0 0 0; font-weight: bold; color: #16a34a;">Het FarmConnect Team</p>
    
    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
      <p style="color: #16a34a; font-size: 16px; font-weight: bold; margin: 0 0 10px 0;">
        🌾 Zonder de boer geen eten! 🌾
      </p>
      <p style="color: #9ca3af; font-size: 12px; margin: 0;">
        <a href="https://farmconnect.be" style="color: #16a34a;">farmconnect.be</a>
      </p>
    </div>
  </div>
</body>
</html>
`;

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // CORS headers
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { to, name, locationType, farmName, amount } = req.body;

        if (!to || !name || !locationType || !farmName || !amount) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        if (!process.env.BREVO_LOGIN || !process.env.BREVO_PASSWORD) {
            return res.status(500).json({ error: 'Email service not configured' });
        }

        await transporter.sendMail({
            from: '"FarmConnect" <noreply@farmconnect.be>',
            to: to,
            subject: 'Hoera! Uw locatie staat nu live op FarmConnect 🚜',
            html: confirmationEmailHtml(name, locationType, farmName, amount),
        });

        return res.status(200).json({ success: true });
    } catch (error: any) {
        console.error('Email error:', error);
        return res.status(500).json({ error: error.message || 'Failed to send email' });
    }
}
