import { motion } from 'framer-motion';
import { Button } from './UI/Button';
import { HeadingSection } from './UI/HeadingSection';
import video1 from '../assets/videos/advanced-work/video-1.mp4';
import img1 from '../assets/videos/advanced-work/img-2.jpg';
import video3 from '../assets/videos/advanced-work/video-3.mp4';
import { openCalendly } from '../utils/linkWhattsapp';

export function AdvancedWorkSection() {
    const cardVariants = {
        hiddenLeft: {
            opacity: 0,
            x: -60,
            scale: 0.9
        },
        hiddenRight: {
            opacity: 0,
            x: 60,
            scale: 0.9
        },
        hiddenBottom: {
            opacity: 0,
            y: 60,
            scale: 0.9
        },
        visible: {
            opacity: 1,
            x: 0,
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

    const projects = [
        {
            title: "Aplicaciones web y Mobile",
            category: "SOFTWARE A MEDIDA",
            description: "¿Necesitas una herramienta específica para tu negocio? Desarrollamos aplicaciones web complejas con React y Python, incluyendo autenticación de usuarios, bases de datos, paneles de administración y funcionalidades a medida.",
            media: {
                type: "video",
                src: video1,
                alt: "Aplicaciones web y Mobile"
            },
            features: ["React & Python", "Bases de datos", "Paneles admin", "APIs integradas"],
            colSpan: "lg:col-span-5",
            animation: "hiddenLeft"
        },
        {
            title: "Tiendas Online y E-commerce",
            category: "PLATAFORMAS ESCALABLES",
            description: "Configuramos y diseñamos tu tienda online en plataformas como Tiendanube o Shopify, o desarrollamos una solución personalizada. Integramos carritos de compra, pasarelas de pago para que solo te preocupes por vender.",
            media: {
                type: "image",
                src: img1,
                alt: "Tiendas Online y E-commerce"
            },
            features: ["Tiendanube/Shopify", "Pasarelas de pago", "Carritos avanzados", "Analytics"],
            colSpan: "lg:col-span-7",
            animation: "hiddenRight"
        },
        {
            title: "UX/UI: Prototipado Digital",
            category: "VALIDA TU IDEA",
            description: "¿Tienes una idea para una app o web? Creamos un prototipo interactivo y de alta fidelidad en Figma. Podrás probar la usabilidad, el flujo y el diseño con usuarios reales, ahorrando tiempo y dinero en desarrollo.",
            media: {
                type: "video",
                src: video3,
                alt: "UX/UI: Prototipado Digital"
            },
            features: ["Prototipos Figma", "Testing de usabilidad", "Flujos interactivos", "Feedback real"],
            colSpan: "lg:col-span-12",
            fullWidth: true,
            animation: "hiddenBottom"
        }
    ];

    const MediaComponent = ({ media, className }: { media: typeof projects[0]['media'], className?: string }) => {
        if (media.type === "video") {
            return (
                <motion.video
                    className={className}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                >
                    <source src={media.src} type="video/mp4" />
                    Tu navegador no soporta el elemento video.
                </motion.video>
            );
        }

        return (
            <motion.img
                src={media.src}
                alt={media.alt}
                className={className}
            />
        );
    };

    return (
        <div id='hero-works' className="w-full max-w-7xl mx-auto px-[5%] py-24">
            <HeadingSection
                pillText="SOLUCIONES AVANZADAS"
                title="Proyectos especializados"
                subtitle={
                    <>
                        Desarrollamos soluciones tecnológicas a medida para tu negocio{" "}<br />
                        <span className="text-orange-400 font-semibold">Servicios full stack, almacenamiento en la nube, desarrollo de productos digitales</span>
                    </>
                }
            />

            <motion.div
                className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}
            >
                {projects.map((project) => (
                    <motion.div
                        key={project.title}
                        variants={cardVariants}
                        initial={project.animation}
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover="hover"
                        className={`group relative flex flex-col ${project.colSpan}`}
                    >
                        <motion.div
                            className={`relative bg-transparent border border-white/10 backdrop-blur-sm rounded-2xl overflow-hidden h-full flex flex-col ${project.fullWidth ? 'p-8 lg:p-12' : 'p-8'
                                }`}
                            whileHover={{
                                borderColor: "rgba(255, 140, 0, 0.4)"
                            }}
                        >
                            <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

                            {project.fullWidth ? (
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full">
                                    {/* Media Component */}
                                    <motion.div
                                        className="flex flex-col h-full"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <motion.div
                                            className="overflow-hidden rounded-xl border border-white/10 h-full"
                                        >
                                            <MediaComponent
                                                media={project.media}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                    </motion.div>

                                    {/* Content */}
                                    <motion.div
                                        className="flex flex-col justify-center space-y-6"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        <div className="space-y-4">
                                            <motion.span
                                                className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs font-semibold"
                                                whileHover={{ x: 5 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {project.category}
                                            </motion.span>
                                            <motion.h3
                                                className="text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight"
                                                whileHover={{ scale: 1.02 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {project.title}
                                            </motion.h3>
                                            <motion.p
                                                className="text-gray-300 leading-relaxed text-lg"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.4 }}
                                            >
                                                {project.description}
                                            </motion.p>
                                        </div>

                                        {/* Features */}
                                        <motion.div
                                            className="flex flex-wrap gap-2"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            {project.features.map((feature, i) => (
                                                <motion.span
                                                    key={i}
                                                    className="px-3 py-2 bg-white/5 rounded-lg text-gray-300 text-sm border border-white/10"
                                                    whileHover={{
                                                        scale: 1.05,
                                                        backgroundColor: "rgba(255, 140, 0, 0.1)"
                                                    }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {feature}
                                                </motion.span>
                                            ))}
                                        </motion.div>

                                        {/* CTA Button */}
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.6 }}
                                        >
                                            <Button
                                                variant="secondary"
                                                size="lg"
                                                onClick={() => openCalendly(project.title)}
                                            >
                                                Quiero una reunión
                                            </Button>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            ) : (
                                <div className="flex flex-col h-full">
                                    <div className="space-y-4">
                                        <motion.span
                                            className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs font-semibold"
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {project.category}
                                        </motion.span>
                                        <motion.h3
                                            className="text-xl md:text-2xl font-bold text-white leading-tight"
                                            whileHover={{ scale: 1.02 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            {project.title}
                                        </motion.h3>
                                        <motion.p
                                            className="text-gray-300 text-sm leading-relaxed"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 }}
                                        >
                                            {project.description}
                                        </motion.p>
                                    </div>

                                    {/* Media Component - ocupa espacio restante */}
                                    <motion.div
                                        className="flex-1 min-h-0 flex flex-col mt-4"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <motion.div
                                            className="overflow-hidden rounded-lg border border-white/10 h-full"
                                        >
                                            <MediaComponent
                                                media={project.media}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                    </motion.div>

                                    {/* Features and CTA - altura fija */}
                                    <div className="mt-4 space-y-4">
                                        <motion.div
                                            className="flex flex-wrap gap-2"
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            {project.features.map((feature, i) => (
                                                <motion.span
                                                    key={i}
                                                    className="px-2 py-1 bg-white/5 rounded-full text-gray-400 text-xs border border-white/5"
                                                    whileHover={{
                                                        scale: 1.1,
                                                        backgroundColor: "rgba(255, 140, 0, 0.1)"
                                                    }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    {feature}
                                                </motion.span>
                                            ))}
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            <Button
                                                variant="secondary"
                                                className="w-full"
                                                onClick={() => openCalendly(project.title)}
                                            >
                                                Quiero una reunión
                                            </Button>
                                        </motion.div>
                                    </div>
                                </div>
                            )}

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
                    </motion.div>
                ))}
            </motion.div>
        </div >
    );
}