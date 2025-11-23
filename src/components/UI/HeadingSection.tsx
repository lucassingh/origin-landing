"use client";

import { motion } from 'framer-motion';

interface HeadingSectionProps {
    pillText: string;
    title: string;
    subtitle: string | React.ReactNode;
}

export const HeadingSection: React.FC<HeadingSectionProps> = ({
    pillText,
    title,
    subtitle
}) => {
    const titleVariants = {
        hidden: {
            opacity: 0,
            y: 40,
            filter: "blur(10px)"
        },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 1,
                delay: i * 0.08,
                ease: [0.25, 0.1, 0.25, 1]
            }
        })
    };

    return (
        <motion.div
            className="text-center mb-16 md:mb-20 lg:mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {/* Badge */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="inline-block mb-6"
            >
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs font-semibold backdrop-blur-sm">
                    <motion.span
                        className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"
                        animate={{ scale: [1, 1.5, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    {pillText}
                </span>
            </motion.div>

            {/* Título principal */}
            <motion.h2
                className="mb-6 text-3xl md:text-5xl lg:text-5xl font-black leading-tight"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {title.split(" ").map((word, index) => (
                    <motion.span
                        key={index}
                        custom={index}
                        variants={titleVariants}
                        className="inline-block mr-3 bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent"
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.h2>

            {/* Descripción */}
            <motion.p
                className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                viewport={{ once: true }}
            >
                {subtitle}
            </motion.p>
        </motion.div>
    );
};