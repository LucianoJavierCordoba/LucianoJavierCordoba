import {parseTelephone} from "./ParseTelephone.js";

export const REDES = {
    email: import.meta.env.PUBLIC_EMAIL,
    telephone: import.meta.env.PUBLIC_TELEPHONE,
    whatsapp: import.meta.env.PUBLIC_WHATSAPP,
    instagram: import.meta.env.PUBLIC_INSTAGRAM,
    facebook: import.meta.env.PUBLIC_FACEBOOK,
    linkedin: import.meta.env.PUBLIC_LINKEDIN,
    soporte: import.meta.env.PUBLIC_SOPORTE,
    contacto: import.meta.env.PUBLIC_CONTACTO,
    calendly: import.meta.env.PUBLIC_CALENDLY
}

export const LINKS = new Proxy(REDES, {

    get: (target, property) => {

        switch (true) {

            case ['email', 'soporte', 'contacto'].includes(property):
                return {
                    label: target[property],
                    link: `mailto:${target[property]}`
                };

            case property === 'telephone':
                return {
                    label: parseTelephone(target[property]),
                    link: `tel:${target[property]}`
                };

            case property === 'whatsapp':
                return {
                    label: 'Whatsapp',
                    link: `https://wa.me/${target[property]}`
                };

            default:
                return {
                    label: property,
                    link: target[property]
                }
        }
    }
})