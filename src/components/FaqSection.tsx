"use client";

import {
    Accordion,
} from "@relume_io/relume-ui";
import { motion } from 'framer-motion';
import { CustomAccordionItem } from "./UI/CustomAccordion";
import { HeadingSection } from "./UI/HeadingSection";

export function FaqSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.2,
                when: "beforeChildren",
                staggerChildren: 0.15
            }
        }
    };

    const categoryVariantsLeft = {
        hidden: {
            opacity: 0,
            x: -80,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const categoryVariantsRight = {
        hidden: {
            opacity: 0,
            x: 80,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const faqCategories = [
        {
            id: "general",
            title: "General",
            icon: "🌌",
            questions: [
                {
                    id: "faq-1",
                    question: "¿Qué significa 'desarrollo desde cero'?",
                    answer: "Significa que no utilizamos plantillas precompradas. Cada diseño y cada línea de código se escriben exclusivamente para tu proyecto. Esto resulta en un sitio web más rápido, seguro y único, optimizado al 100% para tus necesidades."
                },
                {
                    id: "faq-2",
                    question: "¿Por qué es mejor un desarrollo a medida que usar una plantilla de Wix o WordPress?",
                    answer: "Es la diferencia entre un traje a medida y uno de talla standard. Las plantillas son genéricas, lentas (por el código innecesario que llevan) y limitadas. Un desarrollo a medida es: Más rápido y eficiente: Código optimizado desde el inicio. Único y personalizado: Se adapta al 100% a tu marca, no al revés. Más seguro: Menos vulnerabilidades al no usar componentes públicos masivos. Escalable: Se puede modificar y ampliar sin restricciones."
                },
                {
                    id: "faq-3",
                    question: "¿Trabajan con empresas fuera de Argentina?",
                    answer: "¡Absolutamente! Trabajamos de forma remota con clientes de todo el mundo. Utilizamos herramientas de comunicación como Zoom y Slack para mantener un flujo de trabajo fluido y transparente, sin importar la distancia."
                }
            ],
            animation: "left" // Izquierda al centro
        },
        {
            id: "tecnico",
            title: "Técnico",
            icon: "🚀",
            questions: [
                {
                    id: "faq-4",
                    question: "¿Qué tecnologías utilizan para el desarrollo?",
                    answer: "Usamos las mejores herramientas modernas para garantizar calidad y rendimiento. Para el frontend (lo que ve el usuario), principalmente React.js. Para backend (la lógica del servidor) y bases de datos, utilizamos tecnologías como Node.js, Firebase o PostgreSQL, según las necesidades de cada proyecto."
                },
                {
                    id: "faq-5",
                    question: "¿Los sitios web que crean son responsive?",
                    answer: "¡Absolutamente! Todos nuestros proyectos son diseñados y desarrollados con un enfoque 'mobile-first'. Esto significa que tu sitio web se verá y funcionará a la perfección en cualquier dispositivo: computadoras, tablets y smartphones. Es un estándar no negociable en nuestro proceso."
                },
                {
                    id: "faq-6",
                    question: "Si ya tengo un logo, ¿pueden usarlo para el sitio web?",
                    answer: "Por supuesto. Si ya tienes una identidad visual, la integraremos perfectamente en el diseño web. Si no tienes, o quieres renovarla, ofrecemos nuestro servicio de Diseño de Branding y Manual de Marca como un complemento perfecto para tu nuevo sitio web."
                }
            ],
            animation: "right" // Derecha al centro
        },
        {
            id: "proceso",
            title: "Proceso",
            icon: "🛸",
            questions: [
                {
                    id: "faq-7",
                    question: "¿Cómo comienza un proyecto?",
                    answer: "Iniciamos con una reunión de consultoría gratuita donde entendemos tus necesidades, definimos objetivos, alcance y presupuesto. Luego creamos un plan personalizado antes de comenzar el desarrollo."
                },
                {
                    id: "faq-8",
                    question: "¿Cuánto tiempo toma desarrollar un sitio web?",
                    answer: "Los tiempos varían según la complejidad. Como referencia: Landing page básica: 2-3 semanas. Sitio web corporativo (5-6 páginas): 4-5 semanas. E-commerce o plataforma compleja: 6-8 semanas. Estos plazos incluyen diseño, desarrollo y revisiones."
                },
                {
                    id: "faq-9",
                    question: "¿Cómo es el proceso de revisiones y feedback?",
                    answer: "Es un proceso colaborativo. Cuando tengamos el prototipo o la primera versión del desarrollo, tendrás 3 rondas de revisiones incluidas para solicitar ajustes. Utilizamos herramientas como Figma (para diseño) y enlaces de prueba (para desarrollo) para que puedas ver el progreso y comentar de manera clara y organizada."
                }
            ],
            animation: "left" // Izquierda al centro
        },
        {
            id: "pagos-servicios",
            title: "Pagos y Servicios",
            icon: "⭐",
            questions: [
                {
                    id: "faq-10",
                    question: "¿Por qué no incluyen hosting y mantenimiento?",
                    answer: "Para ofrecerte la máxima flexibilidad. Algunos clientes ya tienen su hosting preferido. Sin embargo, podemos recomendarte las mejores opciones o gestionarlo por ti con un plan de mantenimiento mensual opcional que incluye copias de seguridad, actualizaciones y soporte técnico."
                },
                {
                    id: "faq-11",
                    question: "¿Qué métodos de pago aceptan?",
                    answer: "Aceptamos transferencias bancarias, PayPal, Mercado Pago y criptomonedas. Para proyectos grandes, podemos estructurar un plan de pagos fraccionado que se adapte a tu flujo de caja."
                },
                {
                    id: "faq-12",
                    question: "Si contrato un paquete y luego quiero agregar más páginas o funcionalidades, ¿es posible?",
                    answer: "¡Claro que sí! Nuestro desarrollo a medida permite escalar fácilmente. Podemos cotizar un add-on (adicional) para expandir el número de páginas o agregar funcionalidades complejas como un carrito de compras, un blog o un área privada para usuarios."
                }
            ],
            animation: "right" // Derecha al centro
        }
    ];

    return (
        <section id="faq" className="relative min-h-screen py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-black via-[#0A0A1A] to-black" />

                {/* Nebulosas animadas */}
                <motion.div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF8C00]/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#FFB90F]/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.05, 0.2, 0.05],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />

                {/* Estrellas animadas */}
                <div className="absolute inset-0 opacity-30">
                    {[...Array(40)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0.5, 1.2, 0.5],
                            }}
                            transition={{
                                duration: Math.random() * 3 + 2,
                                repeat: Infinity,
                                delay: Math.random() * 2,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Contenido principal */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-[5%]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {/* Header Section - Estilo coherente */}
                    <HeadingSection
                        pillText="PREGUNTAS FRECUENTES"
                        title="Resolvemos tus dudas"
                        subtitle={
                            <>
                                Encuentra respuestas a las preguntas más comunes sobre nuestros servicios y procesos{" "}<br />
                            </>
                        }
                    />

                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                    >
                        {faqCategories.map((category) => (
                            <motion.div
                                key={category.id}
                                variants={category.animation === "left" ? categoryVariantsLeft : categoryVariantsRight}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                className="relative"
                            >
                                <motion.div
                                    className="relative bg-transparent border border-white/10 backdrop-blur-sm rounded-2xl p-8 h-full"
                                    whileHover={{
                                        borderColor: "rgba(255, 140, 0, 0.3)",
                                        y: -8
                                    }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <motion.div
                                        className="flex items-center gap-4 mb-8"
                                        whileHover={{ x: 5 }}
                                    >
                                        <motion.h3
                                            className="text-2xl font-bold text-white"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            {category.title}
                                        </motion.h3>
                                    </motion.div>

                                    <Accordion
                                        type="multiple"
                                        className="space-y-4"
                                    >
                                        {category.questions.map((faq) => (
                                            <CustomAccordionItem
                                                question={faq.question}
                                                answer={faq.answer}
                                                value={faq.id}
                                            />
                                        ))}
                                    </Accordion>

                                    <motion.div
                                        className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-orange-400/40"
                                        animate={{
                                            opacity: [0.3, 0.8, 0.3],
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    />
                                    <motion.div
                                        className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-orange-400/40"
                                        animate={{
                                            opacity: [0.8, 0.3, 0.8],
                                        }}
                                        transition={{
                                            duration: 4,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                            delay: 1
                                        }}
                                    />
                                </motion.div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        className="mt-20 text-center"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <motion.div
                            className="relative bg-linear-to-r from-orange-500/10 to-orange-600/10 rounded-3xl p-12 border border-orange-500/20 backdrop-blur-sm overflow-hidden"
                            whileHover={{ borderColor: "rgba(255, 140, 0, 0.4)" }}
                        >
                            <motion.div
                                className="absolute top-0 left-0 w-32 h-32 bg-orange-500/5 rounded-full -translate-x-1/2 -translate-y-1/2"
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.1, 0.3, 0.1],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                            />

                            <div className="relative z-10">
                                <motion.h3
                                    className="text-2xl md:text-3xl font-bold text-white mb-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    ¿No encontraste tu respuesta?
                                </motion.h3>
                                <motion.p
                                    className="text-gray-300 mb-8 max-w-2xl mx-auto"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    Estamos aquí para ayudarte. Contáctanos y resolveremos todas tus dudas personalmente.
                                </motion.p>
                                <motion.button
                                    className="px-8 py-3 bg-orange-500 text-white rounded-xl font-semibold hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl"
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 20px 40px rgba(255, 140, 0, 0.3)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Contactar ahora
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}