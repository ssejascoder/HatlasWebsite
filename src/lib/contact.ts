/**
 * Central contact config. Swap the WhatsApp number in ONE place.
 *
 * TODO: replace WHATSAPP_NUMBER with Hatlas's real Bolivia (+591) number.
 * Format: country code + number, digits only, no "+" (wa.me requirement).
 */
export const WHATSAPP_NUMBER = '59170000000' // placeholder — replace with real number
export const CONTACT_EMAIL = 'hola@hatlas.bo'

const WHATSAPP_MSG = 'Hola, quiero ver una demo de Hatlas para mi negocio.'

export const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MSG)}`
export const emailUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Demo Hatlas')}`
