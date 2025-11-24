import clsx from "clsx";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Button, Input, Textarea } from "@relume_io/relume-ui";
import { type ButtonProps } from "@relume_io/relume-ui";
import { useState } from "react";
import {
    BiLogoInstagram,
    BiLogoLinkedinSquare,
} from "react-icons/bi";
import { RxChevronDown } from "react-icons/rx";
import logo from "../assets/imgs/logos/logo.svg"
import { smoothScrollTo } from "../utils/smoothScroll";

type ImageProps = {
    url?: string;
    src: string;
    alt?: string;
};

type SocialMediaLink = {
    url: string;
    icon: React.ReactNode;
};

type NavLink = {
    url: string;
    title: string;
    subMenuLinks?: NavLink[];
};

type GetInTouch = {
    phone: {
        url: string;
        number: string;
    };
    email: {
        url: string;
        contact: string;
    };
    address: string;
};

type Props = {
    logo: ImageProps;
    navLinks: NavLink[];
    menuLinks: NavLink[];
    getInTouch: GetInTouch;
    subtitle: string;
    socialMediaLinks: SocialMediaLink[];
    contactHeading: string;
    contactDescription: string;
    inputPlaceholder?: string;
    messagePlaceholder?: string;
    button: ButtonProps;
};

export type Navbar20Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Navbar = (props: Navbar20Props) => {
    const {
        logo,
        navLinks,
        menuLinks,
        getInTouch,
        subtitle,
        socialMediaLinks,
        contactHeading,
        contactDescription,
        inputPlaceholder,
        messagePlaceholder,
        button,
    } = {
        ...Navbar20Defaults,
        ...props,
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();

    const navbarBackground = useTransform(
        scrollYProgress,
        [0, 0.1],
        ["rgba(7, 11, 22, 0.1)", "rgba(7, 11, 22, 0.95)"]
    );

    const navbarBlur = useTransform(
        scrollYProgress,
        [0, 0.1],
        ["blur(0px)", "blur(12px)"]
    );

    return (
        <>
            <motion.section
                id="relume"
                className="fixed top-4 left-4 right-4 z-40 flex min-h-16 items-center px-8 md:min-h-18 mx-auto max-w-7xl rounded-2xl border border-white/10"
                style={{
                    backgroundColor: navbarBackground,
                    backdropFilter: navbarBlur,
                }}
            >
                <div className="flex size-full items-center justify-between w-full">
                    <a href={logo.url}>
                        <img src={logo.src} alt={logo.alt} className="w-10 h-10 brightness-0 invert" />
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center justify-center overflow-hidden px-0 text-center">
                        {navLinks.map((navLink, index) => (
                            <div key={index}>
                                {navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
                                    <SubMenu navLink={navLink} />
                                ) : (
                                    <motion.button
                                        onClick={() => smoothScrollTo(navLink.url)}
                                        className="group relative cursor-pointer px-4 py-2 text-base text-white/80 transition-all duration-300"
                                        whileHover={{ color: "#FFFFFF" }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        {navLink.title}
                                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#FF8C00] rounded-full transform -translate-x-1/2 opacity-0 transition-all duration-300 group-hover:w-4/5 group-hover:opacity-100" />
                                    </motion.button>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Hamburguer Menu - Siempre visible */}
                    <button
                        className="flex size-12 flex-col items-center justify-center cursor-pointer group lg:mr-0"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                    >
                        <span className="relative flex size-6 flex-col items-center justify-center">
                            <motion.span
                                className="absolute top-[3px] h-0.5 w-full bg-white group-hover:bg-[#FF8C00] transition-colors duration-200"
                                animate={isMenuOpen ? "open" : "close"}
                                variants={topLineVariants}
                            />
                            <motion.span
                                className="absolute h-0.5 w-full bg-white group-hover:bg-[#FF8C00] transition-colors duration-200"
                                animate={isMenuOpen ? "open" : "close"}
                                variants={middleLineVariants}
                            />
                            <motion.span
                                className="absolute h-0.5 w-full bg-white group-hover:bg-[#FF8C00] transition-colors duration-200"
                                animate={isMenuOpen ? "openSecond" : "closeSecond"}
                                variants={middleLineVariants}
                            />
                            <motion.span
                                className="absolute bottom-[3px] h-0.5 w-full bg-white group-hover:bg-[#FF8C00] transition-colors duration-200"
                                animate={isMenuOpen ? "open" : "close"}
                                variants={bottomLineVariants}
                            />
                        </span>
                    </button>
                </div>
            </motion.section>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <Menu
                        menuLinks={menuLinks}
                        getInTouch={getInTouch}
                        subtitle={subtitle}
                        socialMediaLinks={socialMediaLinks}
                        contactHeading={contactHeading}
                        contactDescription={contactDescription}
                        inputPlaceholder={inputPlaceholder}
                        messagePlaceholder={messagePlaceholder}
                        button={button}
                        isMenuOpen={isMenuOpen}
                        setIsMenuOpen={setIsMenuOpen}
                    />
                )}
            </AnimatePresence>
        </>
    );
};

const SubMenu = ({ navLink }: { navLink: NavLink }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <section
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            className="relative"
        >
            <button
                className="flex items-center justify-center gap-2 px-4 py-2 text-base text-white/80 hover:text-white transition-colors duration-200"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
                <span>{navLink.title}</span>
                <motion.span
                    animate={isDropdownOpen ? "rotated" : "initial"}
                    variants={{
                        rotated: { rotate: 180 },
                        initial: { rotate: 0 },
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-white/60"
                >
                    <RxChevronDown />
                </motion.span>
            </button>

            {isDropdownOpen && (
                <AnimatePresence>
                    <motion.nav
                        animate={isDropdownOpen ? "open" : "close"}
                        initial="close"
                        exit="close"
                        variants={{
                            open: {
                                visibility: "visible",
                                opacity: "var(--opacity-open, 100%)",
                                y: 0,
                            },
                            close: {
                                visibility: "hidden",
                                opacity: "var(--opacity-close, 0)",
                                y: "var(--y-close, 25%)",
                            },
                        }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 z-50 bg-[#070b16]/95 backdrop-blur-xl p-4 shadow-2xl border border-white/10 rounded-xl min-w-48"
                    >
                        {navLink.subMenuLinks?.map((subMenuLink, index) => (
                            <a
                                key={index}
                                href={subMenuLink.url}
                                className="block px-4 py-2 text-white/80 hover:text-white hover:bg-white/5 transition-all duration-200 rounded-lg text-left"
                            >
                                {subMenuLink.title}
                            </a>
                        ))}
                    </motion.nav>
                </AnimatePresence>
            )}
        </section>
    );
};

const Menu = ({
    menuLinks,
    getInTouch,
    socialMediaLinks,
    contactHeading,
    contactDescription,
    inputPlaceholder,
    messagePlaceholder,
    button,
    isMenuOpen,
    setIsMenuOpen,
}: {
    menuLinks: NavLink[];
    getInTouch: GetInTouch;
    subtitle: string;
    socialMediaLinks: SocialMediaLink[];
    contactHeading: string;
    contactDescription: string;
    inputPlaceholder?: string;
    messagePlaceholder?: string;
    button: ButtonProps;
    isMenuOpen: boolean;
    setIsMenuOpen: (open: boolean) => void;
}) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Datos del formulario de contacto:", formData);
        alert("Mensaje enviado! Te contactaremos pronto.");
        setFormData({ name: "", email: "", message: "" });
    };

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    return (
        <motion.div
            className="fixed inset-0 z-30 h-screen w-full overflow-hidden bg-[#070b16]/80 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <motion.div
                variants={{
                    open: { opacity: 1 },
                    close: { opacity: 0 },
                }}
                animate={isMenuOpen ? "open" : "close"}
                initial="close"
                exit="close"
                transition={{ duration: 0.2 }}
                className="flex h-full flex-col overflow-auto px-[5%] pt-24"
            >
                <div className="grid grid-cols-1 gap-y-6 py-4 md:gap-y-16 md:py-6 lg:my-auto lg:grid-cols-[1.2fr_1fr] lg:gap-x-16 lg:gap-y-0 lg:py-12 max-w-6xl mx-auto w-full">
                    {/* Menu Links - Más grandes en mobile */}
                    <div className="flex flex-col items-start space-y-6">
                        {menuLinks.map((menuLink, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    smoothScrollTo(menuLink.url);
                                    setIsMenuOpen(false);
                                }}
                                className="group relative py-4 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-3xl hover:text-white/90 transition-all duration-300 text-left cursor-pointer"
                            >
                                {menuLink.title}
                                <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#FF8C00] transition-all duration-300 group-hover:w-full" />
                            </button>
                        ))}
                    </div>

                    {/* Contact Form - Solo en desktop */}
                    <div className="my-auto lg:pl-8 lg:border-l lg:border-white/10 hidden lg:block">
                        <div className="space-y-1">
                            <div>
                                <h5 className="mb-3 font-semibold text-lg text-white/80">{contactHeading}</h5>
                                <p className="text-base text-white/60 leading-relaxed mb-6">{contactDescription}</p>
                                <div className="max-w-sm">
                                    <form className="grid grid-cols-1 gap-3" onSubmit={handleSubmit}>
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="Tu nombre"
                                            value={formData.name}
                                            onChange={(e) => handleInputChange("name", e.target.value)}
                                            className="text-white bg-white/10 border-white/20 placeholder:text-white/40 rounded-lg h-12"
                                            required
                                        />
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder={inputPlaceholder}
                                            value={formData.email}
                                            onChange={(e) => handleInputChange("email", e.target.value)}
                                            className="text-white bg-white/10 border-white/20 placeholder:text-white/40 rounded-lg h-12"
                                            required
                                        />
                                        <Textarea
                                            id="message"
                                            placeholder={messagePlaceholder}
                                            value={formData.message}
                                            onChange={(e) => handleInputChange("message", e.target.value)}
                                            className="text-white bg-white/10 border-white/20 placeholder:text-white/40 rounded-lg min-h-24 resize-none"
                                            required
                                        />
                                        <Button
                                            {...button}
                                            type="submit"
                                            className="bg-white/10 backdrop-blur-sm cursor-pointer border border-[#FF8C00] text-white rounded-lg hover:bg-[#FF8C00] hover:text-gray-900 transition-all duration-300 h-12 mt-2"
                                        >
                                            {button.title}
                                        </Button>
                                    </form>
                                </div>
                            </div>

                            <div className="pt-6 flex flex-row gap-8">
                                <div className="space-y-2">
                                    <a href={getInTouch.phone.url} className="block text-sm text-white/60 underline hover:text-[#FF8C00] transition-colors duration-200">
                                        {getInTouch.phone.number}
                                    </a>
                                    <a href={getInTouch.email.url} className="block text-sm text-white/60 underline hover:text-[#FF8C00] transition-colors duration-200">
                                        {getInTouch.email.contact}
                                    </a>
                                    <p className="text-sm text-white/60">{getInTouch.address}</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    {socialMediaLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            className="text-white/60 hover:text-[#FF8C00] transition-colors duration-200"
                                        >
                                            {link.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export const Navbar20Defaults: Props = {
    logo: {
        url: "#",
        src: logo,
        alt: "Origin Studio logo",
    },
    navLinks: [
        { title: "Inicio", url: "home" },
        { title: "Nosotros", url: "about" },
        { title: "Servicios", url: "services" },
        { title: "Proyectos", url: "projects" },
        { title: "Contacto", url: "contact" }
    ],
    menuLinks: [
        { title: "Inicio", url: "home" },
        { title: "Nosotros", url: "about" },
        { title: "Servicios", url: "services" },
        { title: "Proyectos", url: "projects" },
        { title: "Contacto", url: "contact" }
    ],
    subtitle: "Estamos en contacto",
    getInTouch: {
        phone: {
            url: "#",
            number: "+54 9 3462565888",
        },
        email: {
            url: "#",
            contact: "origin@gmail.com",
        },
        address: "",
    },
    socialMediaLinks: [
        { url: "#", icon: <BiLogoInstagram className="size-6" /> },
        { url: "#", icon: <BiLogoLinkedinSquare className="size-6" /> },
    ],
    contactHeading: "Hablemos",
    contactDescription: "¿Tienes un proyecto en mente? Contáctanos!",
    inputPlaceholder: "Tu email",
    messagePlaceholder: "Contános sobre tu proyecto...",
    button: {
        title: "Enviar mensaje",
        variant: "secondary",
    },
};

const topLineVariants = {
    open: {
        width: 0,
        transition: { duration: 0.1, ease: "easeIn" },
    },
    close: {
        width: "100%",
        transition: { duration: 0.1, delay: 0.3, ease: "linear" },
    },
};

const middleLineVariants = {
    open: {
        rotate: 135,
        transition: { duration: 0.3, delay: 0.1, ease: "easeInOut" },
    },
    close: {
        rotate: 0,
        transition: { duration: 0.3, ease: "easeInOut" },
    },
    openSecond: {
        rotate: 45,
        transition: { duration: 0.3, delay: 0.1, ease: "easeInOut" },
    },
    closeSecond: {
        rotate: 0,
        transition: { duration: 0.3, ease: "easeInOut" },
    },
};

const bottomLineVariants = {
    open: {
        width: 0,
        transition: { duration: 0.1, ease: "easeIn" },
    },
    close: {
        width: "100%",
        transition: { duration: 0.1, delay: 0.3, ease: "linear" },
    },
};