import { motion } from 'framer-motion';
import { Button } from './UI/Button';
import { HeadingSection } from './UI/HeadingSection';
import video1 from '../assets/videos/services/video-1.mp4'
import img1 from '../assets/videos/services/img-1.jpg'
import video3 from '../assets/videos/services/video-3.mp4'

export function ServicesSection() {

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

    const services = [
        {
            category: "IDENTIDAD VISUAL",
            title: "Branding digital",
            description: "Desarrollamos la personalidad de tu marca desde cero. Creamos tu logo, paleta de colores, tipografía y un manual de marca que asegura coherencia en todos tus canales y construye una imagen memorable.",
            media: {
                type: "video",
                src: video1,
                alt: "Branding digital"
            },
            layout: "horizontal",
            featured: false,
            animation: "hiddenLeft"
        },
        {
            category: "DESARROLLO WEB",
            title: "Sitios web modernos",
            description: "Creamos experiencias digitales únicas con las últimas tecnologías. Diseños responsivos, optimizados para SEO y con excelente performance que reflejan la esencia de tu marca.",
            media: {
                type: "image",
                src: img1,
                alt: "Desarrollo web"
            },
            layout: "horizontal",
            featured: false,
            animation: "hiddenRight"
        },
        {
            category: "SITIOS WEBS, RÁPIDOS Y EFICIENTES",
            title: "Desarrollo web a medida",
            description: "Desarrollamos tu presencia web desde cero, sin plantillas. Creamos experiencias rápidas y optimizadas para SEO que capturan la esencia de tu marca y convierten visitantes en clientes.",
            media: {
                type: "video",
                src: video3,
                alt: "Desarrollo web a medida"
            },
            layout: "vertical",
            featured: true,
            animation: "hiddenBottom"
        }
    ];

    const MediaComponent = ({ media, className }: { media: typeof services[0]['media'], className?: string }) => {
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
        <div id='services' className="w-full max-w-7xl mx-auto px-[5%] py-24">
            <HeadingSection
                pillText="SERVICIOS"
                title="Lo que ofrecemos"
                subtitle={
                    <>
                        Soluciones digitales integrales para tu proyecto{" "}<br />
                        <span className="text-orange-400 font-semibold">Diseñamos y programamos lo que necesites</span>
                    </>
                }
            />

            <motion.div
                className="grid grid-cols-1 gap-6 md:gap-8 lg:grid-cols-2"
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
                {services.filter(service => !service.featured).map((service, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        initial={service.animation}
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover="hover"
                        className="group relative"
                    >
                        <motion.div
                            className="relative bg-transparent p-8 border border-white/10 backdrop-blur-sm rounded-2xl h-full"
                            whileHover={{
                                borderColor: "rgba(255, 140, 0, 0.3)"
                            }}
                        >
                            <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />

                            <div className="flex flex-col h-full">
                                <div className="flex-1">
                                    <motion.p
                                        className="mb-3 font-semibold text-orange-400 text-xs uppercase tracking-wide"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {service.category}
                                    </motion.p>
                                    <motion.h3
                                        className="mb-4 text-xl md:text-2xl font-bold text-white leading-tight"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {service.title}
                                    </motion.h3>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="flex flex-col">
                                    <motion.div
                                        className="overflow-hidden rounded-lg border border-white/10 mb-0"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <MediaComponent
                                            media={service.media}
                                            className="w-full h-50 object-cover"
                                        />
                                    </motion.div>
                                </div>
                            </div>

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

                {services.filter(service => service.featured).map((service, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        initial={service.animation}
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        whileHover="hover"
                        className="group relative lg:col-span-2"
                    >
                        <motion.div
                            className="relative bg-transparent p-8 lg:p-12 border border-white/10 backdrop-blur-sm rounded-2xl h-full"
                            whileHover={{
                                borderColor: "rgba(255, 140, 0, 0.4)"
                            }}
                        >
                            <div className="absolute top-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
                            <div className="absolute bottom-0 left-8 right-8 h-px bg-linear-to-r from-transparent via-orange-400/20 to-transparent" />

                            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 h-full">
                                <div className="flex flex-col justify-center">
                                    <motion.p
                                        className="mb-4 font-semibold text-orange-400 text-xs uppercase tracking-wide"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {service.category}
                                    </motion.p>
                                    <motion.h3
                                        className="mb-6 text-2xl md:text-3xl lg:text-4xl font-black text-white leading-tight"
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {service.title}
                                    </motion.h3>
                                    <p className="text-gray-300 leading-relaxed mb-8">
                                        {service.description}
                                    </p>

                                    <motion.div
                                        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.8 }}
                                    >
                                        <Button
                                            variant="secondary"
                                            size="lg"
                                            onClick={() => console.log("Comenzar proyecto")}
                                        >
                                            Comenzar proyecto
                                        </Button>
                                        <motion.div
                                            className="text-gray-400 group-hover:text-orange-400 transition-colors duration-300"
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            <span className="text-sm">+15 proyectos exitosos</span>
                                        </motion.div>
                                    </motion.div>
                                </div>

                                {/* Contenedor de media con padding uniforme */}
                                <div className="flex flex-col">
                                    <motion.div
                                        className="flex items-center justify-center overflow-hidden rounded-lg border border-white/10"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <MediaComponent
                                            media={service.media}
                                            className="w-full h-64 lg:h-80 object-cover"
                                        />
                                        <motion.div
                                            className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
                                            animate={{ scale: [1, 1.1, 1] }}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            Destacado
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>

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
        </div>
    );
}