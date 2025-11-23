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
}

export function ProjectsSection() {
    const [activeProject, setActiveProject] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

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

    return (
        <section id='projects' ref={containerRef} className="relative min-h-screen overflow-hidden">
            <div className="relative z-10 container mx-auto px-4 py-32">
                <HeadingSection
                    pillText="PORTAFOLIO DE PROYECTOS"
                    title="Proyectos que inspiran"
                    subtitle={
                        <>
                            Experiencias digitales transformadoras que redefinen estándares
                        </>
                    }
                />

                <div className="relative h-[80vh]">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            activeProject={activeProject}
                            totalProjects={projects.length}
                        />
                    ))}

                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="bg-gray-900/80 backdrop-blur-xl border border-white/20 rounded-full px-6 py-1">
                            <div className="text-white text-lg font-semibold">
                                <span className="text-orange-400">{activeProject + 1}</span>
                                <span className="mx-2 text-gray-400">/</span>
                                <span className="text-gray-300">{projects.length}</span>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={prevProject}
                        className="absolute left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 group"
                    >
                        <div className="w-14 h-14 bg-gray-900/80 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 group-hover:scale-110">
                            <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </div>
                    </button>

                    <button
                        onClick={nextProject}
                        className="absolute right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 group"
                    >
                        <div className="w-14 h-14 bg-gray-900/80 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-orange-500 hover:border-orange-500 transition-all duration-300 group-hover:scale-110">
                            <svg className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, activeProject, totalProjects }) => {
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
            x.set(130);
            rotateY.set(-15);
            scale.set(0.9);
            opacity.set(0.5);
            zIndex.set(10);
        } else if (position === totalProjects - 1) {
            x.set(-130);
            rotateY.set(15);
            scale.set(0.9);
            opacity.set(0.5);
            zIndex.set(10);
        } else {
            x.set(0);
            rotateY.set(0);
            scale.set(0.8);
            opacity.set(0);
            zIndex.set(0);
        }
    }, [isActive, position, totalProjects, x, rotateY, scale, opacity, zIndex]);

    const springConfig = { damping: 25, stiffness: 150 };
    const springX = useSpring(x, springConfig);
    const springRotateY = useSpring(rotateY, springConfig);
    const springScale = useSpring(scale, springConfig);
    const springOpacity = useSpring(opacity, springConfig);

    return (
        <motion.div
            ref={cardRef}
            className="absolute inset-0 flex items-center justify-center"
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
                className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden border border-white/20 backdrop-blur-xl bg-gray-900/90" // AUMENTADA opacidad del fondo
                whileHover={{ scale: isActive ? 1.02 : 1 }}
                transition={{ duration: 0.3 }}
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[550px]">
                    <div className="relative overflow-hidden">
                        <motion.img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                            whileHover={{ scale: isActive ? 1.05 : 1 }}
                            transition={{ duration: 0.6 }}
                        />
                        <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent lg:bg-linear-to-r lg:from-black/60 lg:to-transparent" />

                        <motion.div
                            className="absolute top-6 left-6"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <span className="inline-block px-3 py-1 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 text-orange-300 rounded-full text-xs font-semibold">
                                {project.category}
                            </span>
                        </motion.div>
                    </div>

                    <div className="flex flex-col justify-center p-6 lg:p-8 space-y-4">
                        <div>
                            <motion.h3
                                className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-3"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                            >
                                {project.title}
                            </motion.h3>

                            <motion.p
                                className="text-base text-gray-300 leading-relaxed mb-4"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                            >
                                {project.description}
                            </motion.p>
                        </div>

                        <motion.div
                            className="grid grid-cols-2 gap-3 mb-4"
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
                            className="flex flex-wrap gap-1.5 mb-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            {project.technologies.map((tech, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 bg-white/10 border border-white/20 rounded-full text-gray-300 text-xs backdrop-blur-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>

                        <motion.div
                            className="flex flex-wrap gap-2 mb-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.9, duration: 0.6 }}
                        >
                            {project.features.map((feature, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 text-orange-300 rounded-full text-xs font-semibold backdrop-blur-sm"
                                >
                                    {feature}
                                </span>
                            ))}
                        </motion.div>

                        <motion.div
                            className="flex"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                        >
                            <Button
                                variant="secondary"
                                onClick={() => window.open(project.liveUrl, '_blank')}
                                className="w-auto"
                            >
                                Ver Proyecto
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};