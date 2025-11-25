import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Button } from './UI/Button';
import { HeadingSection } from './UI/HeadingSection';

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    image: string;
    technologies: string[];
    features: string[];
    client: string;
    duration: string;
    liveUrl: string;
    caseStudyUrl: string;
}

interface ProjectCardProps {
    project: Project;
    index: number;
    activeProject: number;
    totalProjects: number;
    isMobile: boolean;
}

export function ProjectsSection() {
    const [activeProject, setActiveProject] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const projects: Project[] = [
        {
            id: 1,
            title: "Nexus Platform",
            category: "ECOMMERCE ENTERPRISE",
            description: "Plataforma de e-commerce escalable para retail masivo con sistema de IA predictiva y gestión de inventario en tiempo real.",
            image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&h=800&fit=crop",
            technologies: ["React", "Node.js", "MongoDB", "AWS", "TensorFlow"],
            features: ["IA Predictiva", "Escalabilidad", "Tiempo Real", "Multi-tenant"],
            client: "Retail Global Corp",
            duration: "6 meses",
            liveUrl: "#",
            caseStudyUrl: "#"
        },
        {
            id: 2,
            title: "Quantum Dashboard",
            category: "DATA ANALYTICS",
            description: "Dashboard de analytics con visualización 3D para análisis de big data en empresas financieras.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
            technologies: ["Vue.js", "Python", "D3.js", "WebGL", "PostgreSQL"],
            features: ["3D Visualization", "Big Data", "Real-time", "Custom Charts"],
            client: "FinTech Solutions",
            duration: "4 meses",
            liveUrl: "#",
            caseStudyUrl: "#"
        },
        {
            id: 3,
            title: "Aurora Mobile",
            category: "MOBILE APP",
            description: "Aplicación móvil de bienestar con seguimiento de hábitos, IA coach personal y comunidad social integrada.",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop",
            technologies: ["React Native", "Firebase", "ML Kit", "Stripe", "WebRTC"],
            features: ["AI Coach", "Social Features", "Real-time", "Payments"],
            client: "Wellness Startup",
            duration: "5 meses",
            liveUrl: "#",
            caseStudyUrl: "#"
        },
        {
            id: 4,
            title: "Orbit CMS",
            category: "CONTENT MANAGEMENT",
            description: "Sistema de gestión de contenido headless con editor visual drag-and-drop y multi-idioma nativo.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
            technologies: ["Next.js", "GraphQL", "Prisma", "Cloudinary", "Redis"],
            features: ["Headless", "Visual Editor", "Multi-language", "CDN"],
            client: "Media Group International",
            duration: "7 meses",
            liveUrl: "#",
            caseStudyUrl: "#"
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveProject((prev) => (prev + 1) % projects.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [projects.length]);

    const nextProject = () => {
        setActiveProject((prev) => (prev + 1) % projects.length);
    };

    const prevProject = () => {
        setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextProject();
        }
        if (isRightSwipe) {
            prevProject();
        }
    };

    return (
        <section
            id='projects'
            ref={containerRef}
            className="relative min-h-screen overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
                <HeadingSection
                    pillText="PORTAFOLIO DE PROYECTOS"
                    title="Proyectos que inspiran"
                    subtitle={
                        <>
                            Experiencias digitales transformadoras que redefinen estándares
                        </>
                    }
                />

                <div className="relative h-[70vh] md:h-[80vh]">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            activeProject={activeProject}
                            totalProjects={projects.length}
                            isMobile={isMobile}
                        />
                    ))}

                    {!isMobile && (
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                            <div className="bg-gray-900/80 backdrop-blur-xl border border-white/20 rounded-full px-6 py-1">
                                <div className="text-white text-lg font-semibold">
                                    <span className="text-orange-400">{activeProject + 1}</span>
                                    <span className="mx-2 text-gray-400">/</span>
                                    <span className="text-gray-300">{projects.length}</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {isMobile && (
                        <motion.div
                            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-10"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.5 }}
                        >
                            <div className="flex items-center gap-2 text-gray-400 text-xs">
                                <motion.div
                                    animate={{ x: [-5, 5, -5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="flex items-center"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                    </svg>
                                </motion.div>
                                <span>Desliza para navegar</span>
                                <motion.div
                                    animate={{ x: [5, -5, 5] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="flex items-center"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}

                    {/* FLECHAS - Solo en desktop */}
                    {!isMobile && (
                        <>
                            <button
                                onClick={prevProject}
                                className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 group"
                            >
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-900/80 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 group-hover:scale-110">
                                    <svg className="w-5 h-5 md:w-6 md:h-6 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                    </svg>
                                </div>
                            </button>

                            <button
                                onClick={nextProject}
                                className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 group"
                            >
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-900/80 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 group-hover:scale-110">
                                    <svg className="w-5 h-5 md:w-6 md:h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </button>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    project,
    index,
    activeProject,
    totalProjects,
    isMobile
}) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const isActive = index === activeProject;
    const position = (index - activeProject + totalProjects) % totalProjects;

    const x = useMotionValue(0);
    const rotateY = useMotionValue(0);
    const scale = useMotionValue(1);
    const opacity = useMotionValue(0);
    const zIndex = useMotionValue(0);

    useEffect(() => {
        if (isActive) {
            x.set(0);
            rotateY.set(0);
            scale.set(1);
            opacity.set(1);
            zIndex.set(20);
        } else if (position === 1) {
            x.set(isMobile ? 50 : 130);
            rotateY.set(isMobile ? -5 : -15);
            scale.set(isMobile ? 0.95 : 0.9);
            opacity.set(0.3);
            zIndex.set(10);
        } else if (position === totalProjects - 1) {
            x.set(isMobile ? -50 : -130);
            rotateY.set(isMobile ? 5 : 15);
            scale.set(isMobile ? 0.95 : 0.9);
            opacity.set(0.3);
            zIndex.set(10);
        } else {
            x.set(0);
            rotateY.set(0);
            scale.set(0.8);
            opacity.set(0);
            zIndex.set(0);
        }
    }, [isActive, position, totalProjects, isMobile, x, rotateY, scale, opacity, zIndex]);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springRotateY = useSpring(rotateY, springConfig);
    const springScale = useSpring(scale, springConfig);
    const springOpacity = useSpring(opacity, springConfig);

    return (
        <motion.div
            ref={cardRef}
            className="absolute inset-0 flex items-center justify-center px-2 md:px-0"
            style={{
                x: springX,
                rotateY: springRotateY,
                scale: springScale,
                opacity: springOpacity,
                zIndex: zIndex,
            }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 25,
                duration: 0.8
            }}
        >
            <motion.div
                className="relative w-full max-w-4xl lg:max-w-6xl mx-auto rounded-2xl lg:rounded-3xl overflow-hidden border border-white/20 backdrop-blur-xl bg-gray-900/90"
                whileHover={{ scale: isActive && !isMobile ? 1.02 : 1 }}
                transition={{ duration: 0.3 }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] lg:min-h-[550px]">
                    <div className="relative overflow-hidden h-64 lg:h-auto">
                        <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: isActive && !isMobile ? 1.05 : 1 }}
                            transition={{ duration: 0.6 }}
                        />
                        <div className="absolute inset-0 bg-linear-to-b from-black/40 to-transparent lg:bg-linear-to-r lg:from-black/60 lg:to-transparent" />

                        <motion.div
                            className="absolute top-4 left-4 lg:top-6 lg:left-6"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <span className="inline-block px-2 py-1 lg:px-3 lg:py-1 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-300 rounded-full text-xs font-semibold">
                                {project.category}
                            </span>
                        </motion.div>
                    </div>

                    <div className="flex flex-col justify-center p-4 lg:p-8 space-y-3 lg:space-y-4">
                        <div>
                            <motion.h3
                                className="text-xl md:text-2xl lg:text-4xl font-black text-white mb-2 lg:mb-3"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                {project.title}
                            </motion.h3>

                            <motion.p
                                className="text-sm lg:text-base text-gray-300 leading-relaxed mb-3 lg:mb-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                {project.description}
                            </motion.p>
                        </div>

                        <motion.div
                            className="grid grid-cols-2 gap-3 mb-3 lg:mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7, duration: 0.6 }}
                        >
                            <div>
                                <span className="text-gray-400 text-xs">Cliente</span>
                                <p className="text-white font-semibold text-sm">{project.client}</p>
                            </div>
                            <div>
                                <span className="text-gray-400 text-xs">Duración</span>
                                <p className="text-white font-semibold text-sm">{project.duration}</p>
                            </div>
                        </motion.div>

                        <motion.div
                            className="flex flex-wrap gap-1 mb-3 lg:mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            {project.technologies.slice(0, isMobile ? 3 : project.technologies.length).map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 bg-white/10 border border-white/20 rounded-full text-gray-300 text-xs backdrop-blur-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                            {isMobile && project.technologies.length > 3 && (
                                <span className="px-2 py-1 bg-white/10 border border-white/20 rounded-full text-gray-400 text-xs">
                                    +{project.technologies.length - 3}
                                </span>
                            )}
                        </motion.div>

                        <motion.div
                            className="flex flex-wrap gap-1 mb-4 lg:mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                        >
                            {project.features.slice(0, isMobile ? 2 : project.features.length).map((feature, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 lg:px-3 lg:py-1 bg-orange-500/20 border border-orange-500/30 text-orange-300 rounded-full text-xs font-semibold backdrop-blur-sm"
                                >
                                    {feature}
                                </span>
                            ))}
                            {isMobile && project.features.length > 2 && (
                                <span className="px-2 py-1 bg-orange-500/20 border border-orange-500/30 text-orange-300 rounded-full text-xs font-semibold">
                                    +{project.features.length - 2}
                                </span>
                            )}
                        </motion.div>

                        {/* BOTÓN Y CONTADOR - MODIFICADO */}
                        <motion.div
                            className="flex justify-between items-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                        >
                            <Button
                                variant="secondary"
                                onClick={() => window.open(project.liveUrl, '_blank')}
                                className="w-auto text-sm lg:text-base"
                            >
                                Ver Proyecto
                            </Button>

                            {/* Contador dentro del card - Solo en mobile */}
                            {isMobile && (
                                <div className="bg-gray-900/80 backdrop-blur-xl border border-white/20 rounded-full px-3 py-1">
                                    <div className="text-white text-sm font-semibold">
                                        <span className="text-orange-400">{index + 1}</span>
                                        <span className="mx-1 text-gray-400">/</span>
                                        <span className="text-gray-300">{totalProjects}</span>
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};