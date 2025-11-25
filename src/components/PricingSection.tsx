import { motion } from 'framer-motion';
import { BiCheck, BiStar, BiRocket, BiCrown } from 'react-icons/bi';
import { Button } from './UI/Button';
import { HeadingSection } from './UI/HeadingSection';
import { openWhatsAppForPlan } from '../utils/linkWhattsapp';

export function PricingSection() {

    const cardVariants = {
        hidden: {
            opacity: 0,
            scale: 0.9,
            y: 30
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        },
        hover: {
            y: -8,
            scale: 1.02,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const plans = [
        {
            name: "Esencial",
            price: "$499",
            period: "one-time",
            description: "Ideal para emprendedores que necesitan una presencia web profesional y rápida.",
            icon: BiRocket,
            features: [
                "Landing page principal",
                "Hasta 3 páginas internas adicionales",
                "Diseño responsive",
                "Optimización básica SEO",
                "Formulario de contacto"
            ],
            popular: false
        },
        {
            name: "Profesional",
            price: "$699",
            period: "one-time",
            description: "Perfecto para pequeñas empresas que buscan un sitio más completo y optimizado.",
            icon: BiStar,
            features: [
                "Landing page avanzada",
                "5 páginas internas",
                "Diseño personalizado",
                "Diseño responsive",
                "Optimización SEO básica",
                "Formularios avanzados",
                "Integraciones básicas"
            ],
            popular: true
        },
        {
            name: "Premium",
            price: "$999",
            period: "one-time",
            description: "La solución definitiva para negocios que exigen máxima funcionalidad.",
            icon: BiCrown,
            features: [
                "Landing page + 5+ páginas internas",
                "Integraciones de datos externas (APIs)",
                "Panel de administración (CMS)",
                "Administración de base de datos",
                "Almacenamiento Cloud",
                "Soporte prioritario",
                "Analytics integrado"
            ],
            popular: false
        }
    ];

    return (
        <div id='pricing' className="w-full max-w-7xl mx-auto px-[5%] py-24">
            <HeadingSection
                pillText="PRECIOS TRANSPARENTES"
                title="Soluciones web para cada necesidad"
                subtitle={
                    <>
                        Diseño y desarrollo de software profesional adaptado a tu presupuesto{" "}
                        <span className="text-orange-400 font-semibold">Sin sorpresas, sin complicaciones.</span>
                    </>
                }
            />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                {plans.map((plan, index) => (
                    <motion.div
                        key={plan.name}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={cardVariants}
                        transition={{ delay: index * 0.2 }}
                        whileHover="hover"
                        className="group relative flex flex-col"
                    >
                        {plan.popular && (
                            <motion.div
                                className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 + 0.3 }}
                            >
                                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                                    MÁS POPULAR
                                </span>
                            </motion.div>
                        )}

                        <motion.div
                            className={`relative bg-transparent p-8 border backdrop-blur-sm rounded-2xl h-full flex flex-col ${plan.popular
                                ? 'border-orange-400/40 bg-orange-500/5'
                                : 'border-white/10'
                                }`}
                            whileHover={{
                                borderColor: plan.popular ? "rgba(255, 140, 0, 0.6)" : "rgba(255, 140, 0, 0.3)"
                            }}
                        >
                            <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
                            {plan.popular && (
                                <div className="absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-orange-400/30 to-transparent" />
                            )}

                            <div className="flex-1">
                                <div className="flex items-start justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <plan.icon className={`text-2xl ${plan.popular ? 'text-orange-400' : 'text-white/60'
                                            }`} />
                                        <h3 className={`text-xl font-bold ${plan.popular ? 'text-orange-400' : 'text-white'
                                            }`}>
                                            {plan.name}
                                        </h3>
                                    </div>
                                    {plan.popular && (
                                        <motion.div
                                            animate={{ rotate: [0, 10, -10, 0] }}
                                            transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                                        >
                                            <BiStar className="text-lg text-orange-400" />
                                        </motion.div>
                                    )}
                                </div>

                                <motion.div
                                    className="mb-4"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 + 0.1 }}
                                >
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-4xl md:text-5xl font-black text-white">
                                            {plan.price}
                                        </span>
                                        <span className="text-gray-400 text-sm">U$D</span>
                                    </div>
                                    <span className="text-gray-400 text-sm font-medium">pago único</span><br />
                                    <span className="text-gray-400 text-sm">No icluye mantenimiento</span>
                                </motion.div>

                                <motion.p
                                    className="text-gray-300 text-sm mb-6 leading-relaxed"
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 + 0.2 }}
                                >
                                    {plan.description}
                                </motion.p>

                                <motion.div
                                    className="h-px bg-linear-to-r from-transparent via-white/10 to-transparent mb-6"
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 + 0.3, duration: 0.8 }}
                                />

                                <motion.ul
                                    className="space-y-3 mb-8"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        hidden: {},
                                        visible: {
                                            transition: {
                                                staggerChildren: 0.1
                                            }
                                        }
                                    }}
                                >
                                    {plan.features.map((feature, featureIndex) => (
                                        <motion.li
                                            key={featureIndex}
                                            className="flex items-start gap-3"
                                            variants={{
                                                hidden: { opacity: 0, x: -10 },
                                                visible: { opacity: 1, x: 0 }
                                            }}
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <BiCheck className={`text-lg mt-0.5 shrink-0 ${plan.popular ? 'text-orange-400' : 'text-white/60'}`} />
                                            <span className="text-gray-300 text-sm">{feature}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>
                            </div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 + 0.5 }}
                                className="mt-auto"
                            >
                                <Button
                                    variant="secondary"
                                    size="lg"
                                    className="w-full"
                                    onClick={() => openWhatsAppForPlan(plan.name)}
                                >
                                    Contactar
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                className="text-center mt-12 pt-8 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
            >
                <p className="text-gray-400 text-sm">
                    ¿Necesitas algo personalizado?{" "}
                    <span className="text-orange-400 font-semibold cursor-pointer hover:underline">
                        Contáctanos para un presupuesto a medida
                    </span>
                </p>
            </motion.div>
        </div>
    );
}