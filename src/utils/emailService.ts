// Email Service - Calls Vercel Serverless Functions to send emails via Brevo SMTP

interface WelcomeEmailData {
    to: string;
    name: string;
    locationType: 'boerderij' | 'automaat';
    packageType: string;
    farmName: string;
}

interface PaymentConfirmationData {
    to: string;
    name: string;
    locationType: 'boerderij' | 'automaat';
    farmName: string;
    amount: string;
}

const API_BASE = typeof window !== 'undefined' ? window.location.origin : '';

export const emailService = {
    /**
     * Send welcome email after farm/automaat registration
     */
    async sendWelcomeEmail(data: WelcomeEmailData): Promise<{ success: boolean; error?: string }> {
        try {
            const response = await fetch(`${API_BASE}/api/send-welcome-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                console.error('Error sending welcome email:', result.error);
                return { success: false, error: result.error };
            }

            return { success: true };
        } catch (err) {
            console.error('Error sending welcome email:', err);
            return { success: false, error: 'Failed to send email' };
        }
    },

    /**
     * Send payment confirmation email after successful payment
     */
    async sendPaymentConfirmation(data: PaymentConfirmationData): Promise<{ success: boolean; error?: string }> {
        try {
            const response = await fetch(`${API_BASE}/api/send-payment-confirmation`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (!response.ok) {
                console.error('Error sending payment confirmation:', result.error);
                return { success: false, error: result.error };
            }

            return { success: true };
        } catch (err) {
            console.error('Error sending payment confirmation:', err);
            return { success: false, error: 'Failed to send email' };
        }
    },
};
