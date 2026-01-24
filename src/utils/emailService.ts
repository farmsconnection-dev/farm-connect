// Email Service - Calls Supabase Edge Functions to send emails
import { supabase } from '../lib/supabase';

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

export const emailService = {
    /**
     * Send welcome email after farm/automaat registration
     */
    async sendWelcomeEmail(data: WelcomeEmailData): Promise<{ success: boolean; error?: string }> {
        try {
            const { data: response, error } = await supabase.functions.invoke('send-welcome-email', {
                body: data,
            });

            if (error) {
                console.error('Error sending welcome email:', error);
                return { success: false, error: error.message };
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
            const { data: response, error } = await supabase.functions.invoke('send-payment-confirmation', {
                body: data,
            });

            if (error) {
                console.error('Error sending payment confirmation:', error);
                return { success: false, error: error.message };
            }

            return { success: true };
        } catch (err) {
            console.error('Error sending payment confirmation:', err);
            return { success: false, error: 'Failed to send email' };
        }
    },
};
