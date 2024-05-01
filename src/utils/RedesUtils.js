import { REDES } from "@/config/index.js";
import {parseTelephone} from "./ParseTelephone.js";



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