import { motion } from 'framer-motion';
import { AnimatedLogo } from './UI/LogoSection';

export function HeaderAdvancedWorkSection() {
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    return (
        <div id='hero-work' className="w-full max-w-7xl mx-auto px-[5%] py-32 relative">
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }} // once: false para que se repita
                transition={{ duration: 0.8 }}
            >
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-semibold backdrop-blur-sm">
                    <motion.span
                        className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    EL ORIGEN DE LA INNOVACIÓN
                </span>
            </motion.div>

            {/* Título principal */}
            <motion.div
                className="text-center mb-20"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }} // once: false para que se repita
                transition={{ duration: 1, delay: 0.3 }}
            >
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6">
                    <span className="bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        Desde el origen
                    </span>
                    <br />
                    <span className="bg-linear-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                        hasta el universo digital
                    </span>
                </h2>
                <motion.p
                    className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                >
                    Cada proyecto inicia como una idea y con Origin la expandimos hasta un ecosistema completo.
                    <span className="text-orange-400 font-semibold"> Tu visión, nuestro código y un universo de posibilidades.</span>
                </motion.p>
            </motion.div>

            <div className="relative h-96 mb-20 flex items-center justify-center">
                <motion.div
                    className="relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <AnimatedLogo />

                    {[...Array(12)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-orange-400 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{
                                opacity: [0, 0.8, 0],
                                scale: [0, 1.5, 0],
                            }}
                            viewport={{ once: false }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                delay: 3 + i * 0.2,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                    ))}
                </motion.div>
            </div>

            <motion.div
                className="text-center space-y-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <div className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-orange-500/5 border border-orange-500/20">
                    <motion.div
                        className="flex gap-1"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="w-1 h-1 bg-orange-400 rounded-full" />
                        ))}
                    </motion.div>
                    <span className="text-orange-300 font-semibold text-sm">
                        Descubrí cómo expandimos tu visión digital
                    </span>
                </div>
            </motion.div>
        </div>
    );
}