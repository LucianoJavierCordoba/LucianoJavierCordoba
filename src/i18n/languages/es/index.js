import testimonials from "./home/testimonials.es.json";
import about_me from "./sobre-mi.es.json";
import banner_home from "./home/banner-home.es.json";
import expirience from "./home/expirience.es.json";
import footer from "./footer.es.json";
import about_service from "./about-service.es.json";
import contact from "./contact.es.json";
import questions from "./preguntas-frecuentes/questions.json";
import questions_banner from "./preguntas-frecuentes/banner.json";
import servicios_home from "./servicios/home.json";

export default {
    testimonials,
    about_me,
    banner_home,
    expirience,
    footer,
    about_service,
    contact,

    preguntas_frecuentes: {
        questions: questions,
        banner: questions_banner
    },

    servicios: {
        home: servicios_home,
        'asistente-administrativo': (await import('./servicios/asistente-administrativo.json')).default,
        'atencion-al-cliente': (await import('./servicios/atencion-al-cliente.json')).default,
        'prospeccion-b2b': (await import('./servicios/prospeccion-b2b.json')).default,
        'supervisor-de-ventas': (await import('./servicios/supervisor-de-ventas.json')).default,
        'vendedor-telefonico': (await import('./servicios/vendedor-telefonico.json')).default,
        'gestion': (await import('./servicios/gestion.json')).default,
        'pay-methods': (await import('./servicios/pay-methods.json')).default
    }
}