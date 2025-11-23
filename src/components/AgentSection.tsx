import { motion } from 'framer-motion';
import { Button } from "@relume_io/relume-ui";
import { RxChevronRight } from "react-icons/rx";

export function AgentsSection() {
    // Animaciones
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    const imageHoverVariants = {
        rest: {
            scale: 1,
        },
        hover: {
            scale: 1.05,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };

    // Datos de agentes de IA
    const agents = [
        {
            id: 1,
            category: "AUTOMATIZACIÓN COMERCIAL",
            title: "Agente de Ventas Inteligente",
            description: "Asistente virtual que cualifica leads 24/7, agenda reuniones automáticamente y personaliza propuestas comerciales. Incrementa la conversión hasta en un 45% mientras tu equipo se enfoca en cierres estratégicos.",
            image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
            features: ["Qualificación automática", "Agendamiento inteligente", "Personalización en tiempo real", "Integración CRM"],
            metrics: ["+45% conversión", "24/7 operación", "-70% tiempo qualificación"]
        },
        {
            id: 2,
            category: "INDUSTRIA 4.0",
            title: "Agente de Mantenimiento Predictivo",
            description: "Sistema de IA que monitorea equipos industriales en tiempo real, predice fallas antes de que ocurran y genera órdenes de trabajo automáticas. Reduce paradas no planificadas en un 85%.",
            image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
            features: ["Monitoreo continuo", "Predicción de fallas", "Órdenes automáticas", "Análisis de tendencias"],
            metrics: ["-85% paradas", "90% precisión", "ROI 6 meses"]
        },
        {
            id: 3,
            category: "ATENCIÓN AL CLIENTE",
            title: "Agente Recepcionista Virtual",
            description: "Asistente que gestiona llamadas, resuelve consultas frecuentes y deriva casos complejos al equipo humano. Mejora la experiencia del cliente mientras optimiza costos operativos.",
            image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
            features: ["Gestión de llamadas", "Resolución automática", "Derivación inteligente", "Análisis de sentimiento"],
            metrics: ["80% resolución automática", "30s tiempo respuesta", "-60% costos operativos"]
        },
        {
            id: 4,
            category: "LOGÍSTICA AVANZADA",
            title: "Agente de Optimización Logística",
            description: "IA que optimiza rutas de distribución, gestiona inventarios y predice demandas. Reduce costos logísticos y mejora la eficiencia operativa en toda la cadena de suministro.",
            image: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg",
            features: ["Optimización de rutas", "Gestión de inventario", "Predicción de demanda", "Alertas proactivas"],
            metrics: ["-25% costos logísticos", "+40% eficiencia", "99.8% precisión"]
        }
    ];

    return (
        <section id="agents" className="relative py-16 md:py-24 lg:py-28 overflow-hidden">
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-20 left-10% w-80 h-80 bg-[#FF8C00]/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10% w-96 h-96 bg-[#FFB90F]/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.05, 0.1, 0.05],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
                {/* Líneas decorativas sutiles */}
                <div className="absolute inset-0 bg-size-[60px_60px] opacity-[0.02]"
                    style={{
                        backgroundImage: 'linear-gradient(45deg, transparent 49%, #FF8C00 50%, transparent 51%)'
                    }} />
            </div>

            {/* Container centrado */}
            <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16">
                <motion.div
                    className="relative z-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {/* Header Section */}
                    <motion.div
                        className="mb-16 md:mb-20 lg:mb-24"
                        variants={itemVariants}
                    >
                        <div className="mx-auto max-w-2xl text-center">
                            <motion.span
                                className="inline-block bg-[#FFD700]/20 text-[#FF8C00] px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-[#FFD700]/30"
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                AUTOMATIZACIÓN CON IA
                            </motion.span>
                            <motion.h2
                                className="mb-6 text-4xl md:text-6xl lg:text-7xl font-black text-[#181818] leading-tight"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                Agentes Inteligentes
                            </motion.h2>
                            <motion.p
                                className="text-lg md:text-xl text-gray-700"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                Soluciones de IA que transforman procesos empresariales e industriales
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Grid de Agentes */}
                    <motion.div
                        className="space-y-8 md:space-y-12"
                        variants={containerVariants}
                    >
                        {agents.map((agent, index) => (
                            <motion.article
                                key={agent.id}
                                className="grid grid-cols-1 items-center gap-x-12 gap-y-8 border-t border-gray-200 py-8 md:grid-cols-2 md:gap-y-0 lg:gap-x-16 lg:py-12"
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {/* Contenido textual */}
                                <div className="order-2 md:order-1">
                                    <p className="mb-3 font-semibold md:mb-4 text-[#FF8C00] text-sm uppercase tracking-wide">
                                        {agent.category}
                                    </p>
                                    <h3 className="mb-4 text-2xl font-bold md:text-3xl md:leading-[1.3] lg:text-4xl text-[#181818]">
                                        {agent.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {agent.description}
                                    </p>

                                    {/* Características */}
                                    <div className="mb-6">
                                        <h4 className="text-sm font-semibold text-gray-700 mb-3">Características principales:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {agent.features.map((feature, featureIndex) => (
                                                <span
                                                    key={featureIndex}
                                                    className="bg-[#FF8C00]/10 text-[#FF8C00] px-3 py-1 rounded-full text-xs font-medium border border-[#FF8C00]/20"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Métricas */}
                                    <div className="mb-8">
                                        <h4 className="text-sm font-semibold text-gray-700 mb-3">Resultados comprobados:</h4>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                            {agent.metrics.map((metric, metricIndex) => (
                                                <div
                                                    key={metricIndex}
                                                    className="bg-gradient-to-r from-[#FF8C00]/5 to-[#FFB90F]/5 rounded-lg p-3 text-center border border-[#FF8C00]/10"
                                                >
                                                    <span className="text-sm font-semibold text-[#181818]">
                                                        {metric}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA */}
                                    <Button
                                        title="Ver demostración"
                                        variant="link"
                                        size="link"
                                        iconRight={<RxChevronRight />}
                                        className="text-[#FF8C00] hover:text-[#e67e00] group mt-6 md:mt-8"
                                    >
                                        <span className="group-hover:underline">Ver demostración</span>
                                    </Button>
                                </div>

                                {/* Imagen */}
                                <motion.div
                                    className="order-1 md:order-2"
                                    variants={imageHoverVariants}
                                    initial="rest"
                                    whileHover="hover"
                                >
                                    <div className="flex aspect-[4/3] w-full overflow-hidden rounded-2xl">
                                        <img
                                            src={agent.image}
                                            alt={agent.title}
                                            className="w-full object-cover"
                                        />
                                    </div>
                                </motion.div>
                            </motion.article>
                        ))}
                    </motion.div>

                    {/* CTA Final */}
                    <motion.div
                        className="mt-16 text-center md:mt-20"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <p className="text-gray-600 mb-6">
                            ¿Necesitas un agente de IA personalizado para tu industria?
                        </p>
                        <Button
                            title="Solicitar consultoría"
                            variant="secondary"
                            className="bg-[#FF8C00] text-white hover:bg-[#e67e00] transition-colors"
                        >
                            Solicitar consultoría gratuita
                        </Button>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}