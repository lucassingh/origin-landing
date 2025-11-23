import { motion } from 'framer-motion';
import { useState } from 'react';
import { FiSend, FiUser, FiMail, FiMessageSquare, FiArrowRight } from 'react-icons/fi';
import { HeadingSection } from './UI/HeadingSection';

export function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        terms: false
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 2000));

        console.log('Formulario enviado:', formData);
        setFormData({
            name: '',
            email: '',
            message: '',
            terms: false
        });
        setIsSubmitting(false);
    };

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

    const inputVariants = {
        focus: {
            scale: 1.02,
            borderColor: "rgba(255, 140, 0, 0.5)",
            boxShadow: "0 0 0 3px rgba(255, 140, 0, 0.1), 0 10px 30px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.3 }
        }
    };

    const floatingElements = {
        animate: {
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section id="contact" className="relative min-h-screen py-24 md:py-32 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-black via-[#0A0A1A] to-black" />

                <motion.div
                    className="absolute top-20 left-10% w-96 h-96 bg-[#FF8C00]/15 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.1, 0.4, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-15% w-80 h-80 bg-[#FFB90F]/10 rounded-full blur-3xl"
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

                <div className="absolute inset-0 opacity-40">
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0.5, 1.5, 0.5],
                            }}
                            transition={{
                                duration: Math.random() * 4 + 3,
                                repeat: Infinity,
                                delay: Math.random() * 5,
                            }}
                        />
                    ))}
                </div>

                <motion.div
                    className="absolute top-1/4 right-20 w-6 h-6 border-2 border-orange-400/40 rounded-lg"
                    variants={floatingElements}
                    animate="animate"
                />
                <motion.div
                    className="absolute bottom-1/3 left-15% w-4 h-4 bg-orange-500/30 rounded-full"
                    variants={floatingElements}
                    animate="animate"
                    transition={{ delay: 1 }}
                />
                <motion.div
                    className="absolute top-40 right-1/3 w-3 h-3 border border-orange-300/50 rounded-full"
                    variants={floatingElements}
                    animate="animate"
                    transition={{ delay: 2 }}
                />
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-[5%]">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <HeadingSection
                        pillText="Contacto"
                        title="Estamos para ayudarte"
                        subtitle={
                            <>
                                No esperes más para impulsar tu negocio
                            </>
                        }
                    />

                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.2
                                }
                            }
                        }}
                    >
                        <motion.div
                            variants={itemVariants}
                            className="space-y-8"
                        >
                            <motion.div
                                className="relative bg-transparent border border-white/10 backdrop-blur-sm rounded-2xl p-8"
                                whileHover="hover"
                                variants={itemVariants}
                            >
                                <div className="space-y-6">
                                    <motion.div
                                        className="flex items-center gap-4 p-4  rounded-xl border border-white/10 hover:border-orange-500/30 transition-all duration-300"
                                        whileHover={{ x: 8 }}
                                    >
                                        <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500/30">
                                            <FiUser className="text-orange-400 text-xl" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">Consulta Estratégica</h4>
                                            <p className="text-gray-400 text-sm">Análisis profundo de tu proyecto</p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="flex items-center gap-4 p-4  rounded-xl border border-white/10 hover:border-orange-500/30 transition-all duration-300"
                                        whileHover={{ x: 8 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500/30">
                                            <FiSend className="text-orange-400 text-xl" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">Respuesta en 24h</h4>
                                            <p className="text-gray-400 text-sm">Comunicación ágil y directa</p>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        className="flex items-center gap-4 p-4  rounded-xl border border-white/10 hover:border-orange-500/30 transition-all duration-300"
                                        whileHover={{ x: 8 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center border border-orange-500/30">
                                            <span className="text-orange-400 text-xl">🚀</span>
                                        </div>
                                        <div>
                                            <h4 className="text-white font-semibold">Propuesta Personalizada</h4>
                                            <p className="text-gray-400 text-sm">Solución a medida para tus objetivos</p>
                                        </div>
                                    </motion.div>
                                </div>

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

                            <motion.div
                                className="grid grid-cols-2 gap-4"
                                variants={itemVariants}
                            >
                                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                                    <div className="text-2xl font-bold text-orange-400">24h</div>
                                    <div className="text-gray-400 text-sm">Respuesta</div>
                                </div>
                                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                                    <div className="text-2xl font-bold text-orange-400">100%</div>
                                    <div className="text-gray-400 text-sm">Personalizado</div>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div
                            variants={itemVariants}
                            className="relative"
                        >
                            <motion.form
                                className="relative bg-transparent border border-white/10 backdrop-blur-sm rounded-2xl p-8"
                                onSubmit={handleSubmit}
                                whileHover="hover"
                                variants={itemVariants}
                            >
                                <motion.h3
                                    className="text-2xl font-bold text-white mb-8"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                >
                                    Iniciar <span className="text-orange-400">comunicación</span>
                                </motion.h3>

                                <div className="space-y-6">
                                    <motion.div
                                        className="relative"
                                        variants={itemVariants}
                                    >
                                        <motion.div
                                            whileFocus="focus"
                                            variants={inputVariants}
                                            className="relative"
                                        >
                                            <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-all duration-300"
                                                placeholder="Tu nombre completo"
                                                required
                                            />
                                        </motion.div>
                                    </motion.div>

                                    <motion.div
                                        className="relative"
                                        variants={itemVariants}
                                    >
                                        <motion.div
                                            whileFocus="focus"
                                            variants={inputVariants}
                                            className="relative"
                                        >
                                            <FiMail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-all duration-300"
                                                placeholder="tu@email.com"
                                                required
                                            />
                                        </motion.div>
                                    </motion.div>

                                    <motion.div
                                        className="relative"
                                        variants={itemVariants}
                                    >
                                        <motion.div
                                            whileFocus="focus"
                                            variants={inputVariants}
                                            className="relative"
                                        >
                                            <FiMessageSquare className="absolute left-4 top-4 text-gray-400 z-10" />
                                            <textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-all duration-300 min-h-[140px] resize-none"
                                                placeholder="Contános de tu proyecto"
                                                required
                                            />
                                        </motion.div>
                                    </motion.div>

                                    <motion.div
                                        className="flex items-center space-x-3"
                                        variants={itemVariants}
                                    >
                                        <input
                                            type="checkbox"
                                            id="terms"
                                            checked={formData.terms}
                                            onChange={(e) => setFormData(prev => ({ ...prev, terms: e.target.checked }))}
                                            className="w-4 h-4 text-orange-500 bg-white/5 border-white/10 rounded focus:ring-orange-500 focus:ring-2"
                                        />
                                        <label htmlFor="terms" className="text-sm text-gray-300 cursor-pointer">
                                            Acepto los términos y la política de privacidad
                                        </label>
                                    </motion.div>

                                    <motion.div variants={itemVariants}>
                                        <motion.button
                                            type="submit"
                                            disabled={!formData.terms || isSubmitting}
                                            className="w-full bg-orange-500 text-white py-4 rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 relative overflow-hidden group"
                                            whileHover={{
                                                scale: formData.terms && !isSubmitting ? 1.02 : 1,
                                                boxShadow: formData.terms && !isSubmitting ? "0 20px 40px rgba(255, 140, 0, 0.3)" : "none"
                                            }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <motion.span
                                                animate={isSubmitting ? { opacity: [1, 0.5, 1] } : {}}
                                                transition={{ duration: 1.5, repeat: isSubmitting ? Infinity : 0 }}
                                            >
                                                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
                                            </motion.span>
                                            <motion.div
                                                animate={isSubmitting ? { rotate: 360 } : {}}
                                                transition={{ duration: 2, repeat: isSubmitting ? Infinity : 0, ease: "linear" }}
                                            >
                                                {isSubmitting ? "⏳" : <FiArrowRight className="text-xl" />}
                                            </motion.div>

                                            <motion.div
                                                className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform 
                                                translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                                                whileHover={{ transition: { duration: 0.8 } }}
                                            />
                                        </motion.button>
                                    </motion.div>
                                </div>

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
                            </motion.form>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}