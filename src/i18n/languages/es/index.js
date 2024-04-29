import testimonials from "./home/testimonials.es.json";
import about_me from "./about-me.es.json";
import banner_home from "./home/banner-home.es.json";
import expirience from "./home/expirience.es.json";
import footer from "./footer.es.json";
import about_service from "./about-service.es.json";
import contact from "./contact.es.json";
import questions from "./preguntas-frecuentes/questions.json";
import questions_banner from "./preguntas-frecuentes/banner.json";

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
    }
}