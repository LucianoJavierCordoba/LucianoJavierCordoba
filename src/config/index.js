import config from "./config.json";

export const REDES = {...config.redes}

export const NAME = config.name;

export const COPYRIGHT = config.copyright;

export const SERVICES_PRICING = config['services-pricing'];

export const ADDRESS = {
    googlemaps: config['address_googlemaps'],
    label: config['address']
};

export const SEO = config.seo;