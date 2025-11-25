export const openWhatsApp = () => {
    const message = "Hola! Estoy interesado en comenzar un proyecto con ustedes.";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5493462549129?text=${encodedMessage}`, '_blank');
};

export const openWhatsAppForPlan = (plan: any) => {
    let message = "";

    if (plan.name === "Esencial") {
        message = "Hola! Me interesa el plan Esencial. Quiero una web profesional para mi emprendimiento.";
    } else if (plan.name === "Profesional") {
        message = "Hola! Estoy interesado en el plan Profesional para mi pequeña empresa. ¿Podrían contarme más detalles?";
    } else if (plan.name === "Premium") {
        message = "Hola! Necesito información sobre el plan Premium. Tengo un proyecto que requiere funcionalidades avanzadas.";
    } else {
        message = `Hola! Estoy interesado en el plan ${plan.name}. ¿Podrían darme más información?`;
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5493462549129?text=${encodedMessage}`, '_blank');
};

export const openCalendly = (serviceType?: string) => {
    let calendlyUrl = 'https://calendly.com/lucas-singh10/new-meeting/';

    if (serviceType === "Aplicaciones web y Mobile") {
        calendlyUrl += 'consulta-desarrollo-app';
    } else if (serviceType === "Tiendas Online y E-commerce") {
        calendlyUrl += 'consulta-ecommerce';
    } else if (serviceType === "UX/UI: Prototipado Digital") {
        calendlyUrl += 'consulta-ux-ui';
    } else {
        calendlyUrl += '30min';
    }

    window.open(calendlyUrl, '_blank');
};