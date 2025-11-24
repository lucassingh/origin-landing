import { motion } from 'framer-motion';
import {
    BiLogoFacebookCircle,
    BiLogoInstagram,
    BiLogoLinkedinSquare,
    BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { LogoFooter } from './UI/LogoFooter';
import logoFooterMobile from '../assets/imgs/logos/logo-footer-mobile.svg'

export function FooterSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const socialIconVariants = {
        rest: {
            scale: 1,
            color: "#FFFFFF"
        },
        hover: {
            scale: 1.2,
            color: "#FF8C00",
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const linkVariants = {
        rest: {
            x: 0,
            color: "#FFFFFF"
        },
        hover: {
            x: 5,
            color: "#FF8C00",
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };

    const navigationLinks = {
        principales: [
            { name: "Inicio", href: "#home" },
            { name: "Nosotros", href: "#about" },
            { name: "Servicios", href: "#services" },
            { name: "Proyectos", href: "#projects" },
            { name: "Portafolio", href: "#portfolio" }
        ],
        secundarios: [
            { name: "Proceso", href: "#process" },
            { name: "Blog", href: "#blog" },
            { name: "Automatización", href: "#automation" },
            { name: "Contacto", href: "#contact" },
            { name: "Trabaja con nosotros", href: "#careers" }
        ]
    };

    const socialLinks = [
        { icon: BiLogoFacebookCircle, href: "#", label: "Facebook" },
        { icon: BiLogoInstagram, href: "#", label: "Instagram" },
        { icon: FaXTwitter, href: "#", label: "Twitter" },
        { icon: BiLogoLinkedinSquare, href: "#", label: "LinkedIn" },
        { icon: BiLogoYoutube, href: "#", label: "YouTube" }
    ];

    const legalLinks = [
        { name: "Política de privacidad", href: "#privacy" },
        { name: "Términos de servicio", href: "#terms" },
        { name: "Configuración de cookies", href: "#cookies" }
    ];

    return (
        <footer id='footer' className="relative text-white overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute -top-32 -left-32 w-64 h-64 bg-[#FF8C00]/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.3, 0.1],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#FFB90F]/5 rounded-full blur-3xl"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.05, 0.15, 0.05],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 2
                    }}
                />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 xl:px-16 py-16 md:py-20 lg:py-24">
                {/* LOGO PRIMERO - ESTRUCTURA MOBILE */}
                <motion.div
                    className="flex flex-col lg:grid lg:grid-cols-[1fr_0.6fr] lg:gap-x-8 lg:gap-y-8 lg:pb-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    {/* MOBILE: Logo primero */}
                    <motion.div
                        className="lg:hidden mb-12 text-left"
                        variants={itemVariants}
                    >
                        <img
                            src={logoFooterMobile}
                            alt="Origin Studio"
                            className="max-w-[280px]"
                        />
                    </motion.div>

                    <motion.div
                        className="hidden lg:block space-y-8"
                        variants={containerVariants}
                    >
                        <motion.div
                            className="space-y-6"
                            variants={containerVariants}
                        >
                            <motion.div variants={itemVariants}>
                                <p className="mb-2 text-sm font-semibold text-gray-300">Dirección</p>
                                <p className="text-white">Buenos Aires, Argentina</p>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <p className="mb-2 text-sm font-semibold text-gray-300">Contacto</p>
                                <div className="space-y-1">
                                    <motion.a
                                        href="tel:+5493462565888"
                                        className="block text-white hover:text-[#FF8C00] transition-colors duration-300"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        +54 9 (3462) 565888
                                    </motion.a>
                                    <motion.a
                                        href="mailto:info@originstudio.com"
                                        className="block text-white hover:text-[#FF8C00] transition-colors duration-300"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        info@originstudio.com
                                    </motion.a>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            className="pt-4"
                            variants={itemVariants}
                        >
                            <p className="mb-4 text-sm font-semibold text-gray-300">Síguenos</p>
                            <div className="flex items-center gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        className="text-white"
                                        variants={socialIconVariants}
                                        initial="rest"
                                        whileHover="hover"
                                        custom={index}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="size-6 md:size-7" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="mt-8 lg:mt-20"
                            variants={itemVariants}
                        >
                            <LogoFooter />
                        </motion.div>
                    </motion.div>

                    {/* CONTENIDO DESPUÉS DEL LOGO EN MOBILE */}
                    <div className="flex flex-col lg:contents">
                        {/* Información de contacto - MOBILE */}
                        <motion.div
                            className="lg:hidden space-y-8 mb-12"
                            variants={containerVariants}
                        >
                            <motion.div
                                className="space-y-6"
                                variants={containerVariants}
                            >
                                <motion.div variants={itemVariants}>
                                    <p className="mb-2 text-sm font-semibold text-gray-300">Dirección</p>
                                    <p className="text-white">Buenos Aires, Argentina</p>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <p className="mb-2 text-sm font-semibold text-gray-300">Contacto</p>
                                    <div className="space-y-1">
                                        <motion.a
                                            href="tel:+5493462565888"
                                            className="block text-white hover:text-[#FF8C00] transition-colors duration-300"
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            +54 9 (3462) 565888
                                        </motion.a>
                                        <motion.a
                                            href="mailto:info@originstudio.com"
                                            className="block text-white hover:text-[#FF8C00] transition-colors duration-300"
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            info@originstudio.com
                                        </motion.a>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                className="pt-4"
                                variants={itemVariants}
                            >
                                <p className="mb-4 text-sm font-semibold text-gray-300">Síguenos</p>
                                <div className="flex items-center gap-4">
                                    {socialLinks.map((social, index) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            className="text-white"
                                            variants={socialIconVariants}
                                            initial="rest"
                                            whileHover="hover"
                                            custom={index}
                                            aria-label={social.label}
                                        >
                                            <social.icon className="size-6 md:size-7" />
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Navegación - AMBAS VERSIONES */}
                        <motion.div
                            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12"
                            variants={containerVariants}
                        >
                            <motion.div variants={itemVariants}>
                                <h3 className="mb-6 text-lg font-semibold text-gray-300">Navegación</h3>
                                <ul className="space-y-3">
                                    {navigationLinks.principales.map((link) => (
                                        <motion.li key={link.name}>
                                            <motion.a
                                                href={link.href}
                                                className="text-white hover:text-[#FF8C00] transition-colors duration-300 block py-1"
                                                variants={linkVariants}
                                                initial="rest"
                                                whileHover="hover"
                                            >
                                                {link.name}
                                            </motion.a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <h3 className="mb-6 text-lg font-semibold text-gray-300">Más información</h3>
                                <ul className="space-y-3">
                                    {navigationLinks.secundarios.map((link) => (
                                        <motion.li key={link.name}>
                                            <motion.a
                                                href={link.href}
                                                className="text-white hover:text-[#FF8C00] transition-colors duration-300 block py-1"
                                                variants={linkVariants}
                                                initial="rest"
                                                whileHover="hover"
                                            >
                                                {link.name}
                                            </motion.a>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    className="h-px w-full bg-gray-700 mb-8"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                />

                <motion.div
                    className="flex flex-col-reverse items-start justify-between gap-6 md:flex-row md:items-center md:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <motion.p
                        className="text-gray-400 text-sm"
                        variants={itemVariants}
                    >
                        © 2025 Origin Studio. Todos los derechos reservados.
                    </motion.p>

                    <motion.ul
                        className="flex flex-wrap gap-6 text-sm"
                        variants={containerVariants}
                    >
                        {legalLinks.map((link) => (
                            <motion.li key={link.name} variants={itemVariants}>
                                <motion.a
                                    href={link.href}
                                    className="text-gray-400 hover:text-[#FF8C00] transition-colors duration-300"
                                    whileHover={{ x: 3 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {link.name}
                                </motion.a>
                            </motion.li>
                        ))}
                    </motion.ul>
                </motion.div>

                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    <p className="text-gray-400 text-sm mb-2">
                        ¿Listo para comenzar tu próximo proyecto?
                    </p>
                    <motion.a
                        href="#contact"
                        className="inline-block text-[#FF8C00] hover:text-[#FFB90F] font-semibold transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        Hablemos ahora →
                    </motion.a>
                </motion.div>
            </div>
        </footer>
    );
}