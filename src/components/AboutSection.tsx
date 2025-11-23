import { motion } from 'framer-motion';
const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.8,
            ease: "easeOut"
        }
    })
};

export const AboutSection = () => {
    const features = [
        {
            title: "Diseño centrado en el usuario",
            description: "Experiencias que conectan emocionalmente"
        },
        {
            title: "Tecnología de última generación",
            description: "Stack moderno y optimizado"
        },
        {
            title: "Desarrollo ágil y transparente",
            description: "Procesos claros y eficientes"
        },
        {
            title: "Soporte continuo post-lanzamiento",
            description: "Acompañamiento constante"
        },
        {
            title: "Optimización para resultados",
            description: "Enfoque en métricas y conversión"
        }
    ];

    return (
        <div id='about' className="w-full max-w-7xl mx-auto px-[5%] py-24">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                <motion.div
                    className="space-y-8"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {/* Badge con efecto glow */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block"
                    >
                        <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs font-semibold backdrop-blur-sm">
                            <motion.span
                                className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                            SOBRE NOSOTROS
                        </span>
                    </motion.div>

                    <h1 className="text-3xl md:text-5xl lg:text-5xl font-black leading-tight">
                        {"Más que código, soluciones con estrategia.".split(" ").map((word, index) => (
                            <motion.span
                                key={index}
                                custom={index}
                                variants={titleVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="inline-block mr-2 bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h1>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                            hidden: {},
                            visible: {
                                transition: {
                                    staggerChildren: 0.15
                                }
                            }
                        }}
                        className="space-y-6"
                    >
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.6, ease: "easeOut" }
                                }
                            }}
                            className="text-base md:text-lg leading-relaxed text-gray-300 font-light"
                        >
                            En <span className="font-semibold text-orange-400">Origin Studio</span>, fusionamos el arte del diseño con la precisión de la ingeniería. Somos la alternativa a las plataformas limitadas como Wix o los generadores por IA.
                        </motion.p>
                        <motion.p
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.6, ease: "easeOut", delay: 0.1 }
                                }
                            }}
                            className="text-sm md:text-base leading-relaxed text-gray-400 font-light"
                        >
                            Cada proyecto nace de una idea única y se desarrolla con tecnologías de vanguardia como <span className="font-semibold text-orange-400">React</span>, garantizando un resultado robusto, escalable y 100% personalizado para tus objetivos.
                        </motion.p>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="relative bg-transparent p-8 border border-white/10 backdrop-blur-sm rounded-2xl"
                    >
                        <motion.h3
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-2xl font-bold text-white mb-8"
                        >
                            Nuestro <span className="text-orange-400">diferencial</span>
                        </motion.h3>

                        <div className="space-y-1">
                            {features.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.08 + 0.5 }}
                                    whileHover={{
                                        x: 8,
                                        borderLeftColor: "rgba(255, 140, 0, 0.3)"
                                    }}
                                    className="p-3 cursor-pointer border-l-2 border-white/5 hover:bg-white/5 transition-all duration-300 group"
                                >
                                    <div className="flex items-start gap-4">
                                        <motion.div
                                            className="shrink-0 w-2 h-2 bg-white/0 rounded-full mt-2 group-hover:bg-orange-400 transition-colors duration-300"
                                            whileHover={{ scale: 1.5 }}
                                        />
                                        <div className="flex-1">
                                            <h4 className="text-white font-semibold text-base group-hover:text-orange-300 transition-colors duration-300">
                                                {item.title}
                                            </h4>
                                            <p className="text-gray-400 text-sm mt-1 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-orange-400/30"
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
                        className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-orange-400/30"
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
            </div>
        </div>
    );
};