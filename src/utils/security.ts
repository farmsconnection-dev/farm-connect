/**
 * Security Utilities
 * Centralized security functions for input validation and sanitization
 * Following OWASP best practices
 */

import DOMPurify from 'dompurify';

// Maximum allowed lengths for user inputs
export const MAX_LENGTHS = {
    name: 100,
    address: 200,
    phone: 20,
    email: 100,
    message: 1000,
    statusUpdate: 200
} as const;

/**
 * Sanitizes user text input to prevent XSS attacks
 * Removes HTML tags and dangerous content while preserving safe text
 * 
 * @param input - The user input to sanitize
 * @param maxLength - Optional maximum length (will truncate if exceeded)
 * @returns Sanitized string safe for storage and display
 */
export const sanitizeInput = (input: string, maxLength?: number): string => {
    if (!input) return '';

    // Trim whitespace
    let sanitized = input.trim();

    // Remove HTML tags and dangerous content
    sanitized = DOMPurify.sanitize(sanitized, {
        ALLOWED_TAGS: [], // No HTML tags allowed
        ALLOWED_ATTR: [], // No attributes allowed
        KEEP_CONTENT: true // Keep text content
    });

    // Truncate if max length specified
    if (maxLength && sanitized.length > maxLength) {
        sanitized = sanitized.substring(0, maxLength);
    }

    return sanitized;
};

/**
 * Validates email format using RFC 5322 compliant regex
 * 
 * @param email - Email address to validate
 * @returns true if valid email format, false otherwise
 */
export const validateEmail = (email: string): boolean => {
    if (!email) return false;

    // RFC 5322 simplified regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
};

/**
 * Validates phone number format
 * Accepts various formats: +32 123 45 67 89, 0123456789, +32123456789
 * 
 * @param phone - Phone number to validate
 * @returns true if valid phone format, false otherwise
 */
export const validatePhone = (phone: string): boolean => {
    if (!phone) return true; // Phone is optional in most cases

    // Remove spaces, dashes, parentheses
    const cleaned = phone.replace(/[\s\-\(\)]/g, '');

    // Check if it's a valid phone number (7-15 digits, optional + prefix)
    const phoneRegex = /^\+?[0-9]{7,15}$/;
    return phoneRegex.test(cleaned);
};

/**
 * Validates that input doesn't exceed maximum length
 * 
 * @param input - Input to validate
 * @param maxLength - Maximum allowed length
 * @returns true if within limit, false otherwise
 */
export const validateLength = (input: string, maxLength: number): boolean => {
    return input.length <= maxLength;
};

/**
 * Sanitizes and validates form data
 * Returns sanitized data or throws error with validation message
 * 
 * @param data - Form data object to sanitize
 * @returns Sanitized data object
 * @throws Error if validation fails
 */
export const sanitizeFormData = (data: {
    name?: string;
    address?: string;
    phone?: string;
    email?: string;
    message?: string;
}): typeof data => {
    const sanitized: typeof data = {};

    // Sanitize name
    if (data.name !== undefined) {
        sanitized.name = sanitizeInput(data.name, MAX_LENGTHS.name);
        if (!sanitized.name) {
            throw new Error('Naam is verplicht');
        }
        if (!validateLength(data.name, MAX_LENGTHS.name)) {
            throw new Error(`Naam mag maximaal ${MAX_LENGTHS.name} tekens bevatten`);
        }
    }

    // Sanitize address
    if (data.address !== undefined) {
        sanitized.address = sanitizeInput(data.address, MAX_LENGTHS.address);
        if (!validateLength(data.address, MAX_LENGTHS.address)) {
            throw new Error(`Adres mag maximaal ${MAX_LENGTHS.address} tekens bevatten`);
        }
    }

    // Sanitize and validate phone
    if (data.phone !== undefined) {
        sanitized.phone = sanitizeInput(data.phone, MAX_LENGTHS.phone);
        if (sanitized.phone && !validatePhone(sanitized.phone)) {
            throw new Error('Ongeldig telefoonnummer formaat');
        }
    }

    // Sanitize and validate email
    if (data.email !== undefined) {
        sanitized.email = data.email.trim().toLowerCase();
        if (sanitized.email && !validateEmail(sanitized.email)) {
            throw new Error('Ongeldig e-mailadres');
        }
        if (!validateLength(sanitized.email, MAX_LENGTHS.email)) {
            throw new Error(`E-mailadres mag maximaal ${MAX_LENGTHS.email} tekens bevatten`);
        }
    }

    // Sanitize message
    if (data.message !== undefined) {
        sanitized.message = sanitizeInput(data.message, MAX_LENGTHS.message);
        if (!validateLength(data.message, MAX_LENGTHS.message)) {
            throw new Error(`Bericht mag maximaal ${MAX_LENGTHS.message} tekens bevatten`);
        }
    }

    return sanitized;
};
