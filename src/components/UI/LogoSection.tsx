import { motion } from 'framer-motion';

interface AnimatedLogoProps {
    className?: string;
}

export const AnimatedLogo = ({ className = "w-120 h-120 md:w-md md:h-112 lg:w-lg lg:h-150" }: AnimatedLogoProps) => {
    const pathVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        }
    };

    const whitePathVariants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: "easeInOut"
            }
        }
    };

    const pointVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "backOut"
            }
        }
    };

    return (
        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="642"
            height="490"
            fill="none"
            viewBox="0 0 642 490"
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
        >

            <motion.path
                stroke="#fff"
                d="M299.5 86V0"
                variants={whitePathVariants}
                strokeWidth="2"
                strokeLinecap="round"
            />

            <motion.path
                stroke="#fff"
                d="M343.5 131V45"
                variants={whitePathVariants}
                strokeWidth="2"
                strokeLinecap="round"
                transition={{ delay: 0.2 }}
            />

            <motion.path
                stroke="#fff"
                d="M300 85.5H0"
                variants={whitePathVariants}
                strokeWidth="2"
                strokeLinecap="round"
                transition={{ delay: 0.4 }}
            />

            <motion.path
                stroke="#fff"
                d="M642 131.5H343"
                variants={whitePathVariants}
                strokeWidth="2"
                strokeLinecap="round"
                transition={{ delay: 0.6 }}
            />

            <motion.path
                stroke="#fff"
                d="M300 359.5H0"
                variants={whitePathVariants}
                strokeWidth="2"
                strokeLinecap="round"
                transition={{ delay: 0.8 }}
            />

            <motion.path
                stroke="#fff"
                d="M642 404.5H343"
                variants={whitePathVariants}
                strokeWidth="2"
                strokeLinecap="round"
                transition={{ delay: 1.0 }}
            />

            <motion.path
                stroke="#fff"
                d="M342.5 490v-86"
                variants={whitePathVariants}
                strokeWidth="2"
                strokeLinecap="round"
                transition={{ delay: 1.2 }}
            />

            <motion.path
                stroke="#fff"
                d="M299.5 445v-86"
                variants={whitePathVariants}
                strokeWidth="2"
                strokeLinecap="round"
                transition={{ delay: 1.4 }}
            />
            <motion.path
                stroke="#FFBF00"
                strokeWidth="4"
                d="M342.905 132.353c76.626 2.432 137.94 62.203 137.94 135.593s-61.315 133.179-137.94 135.592v-87.222c25.939-2.297 46.267-23.052 46.267-48.352s-20.348-46.036-46.267-48.351z"
                variants={pathVariants}
                strokeLinecap="round"
                strokeLinejoin="round"
                transition={{ delay: 1.6 }}
            />

            <motion.path
                stroke="#FFBF00"
                strokeWidth="4"
                d="M299.247 174.009c-25.921 2.326-46.267 23.156-46.267 48.567 0 25.409 20.326 46.258 46.267 48.565v87.615c-76.623-2.423-137.939-62.479-137.939-136.2S222.624 88.817 299.247 86.394z"
                variants={pathVariants}
                strokeLinecap="round"
                strokeLinejoin="round"
                transition={{ delay: 1.8 }}
            />

            <motion.path
                stroke="#FFBF00"
                strokeWidth="2"
                d="M341.905 131.652v87.301l-41.657-44.511v-87.3z"
                variants={pathVariants}
                strokeLinecap="round"
                strokeLinejoin="round"
                transition={{ delay: 2.0 }}
            />
            <motion.path
                stroke="#FFBF00"
                strokeWidth="2"
                d="M341.905 316.27v86.527l-41.657-44.119v-86.529z"
                variants={pathVariants}
                strokeLinecap="round"
                strokeLinejoin="round"
                transition={{ delay: 2.2 }}
            />

            <motion.circle
                cx="342.905"
                cy="132.353"
                r="4"
                fill="#FFBF00"
                variants={pointVariants}
                transition={{ delay: 2.4 }}
            />
            <motion.circle
                cx="299.247"
                cy="174.009"
                r="4"
                fill="#FFBF00"
                variants={pointVariants}
                transition={{ delay: 2.6 }}
            />
            <motion.circle
                cx="341.905"
                cy="131.652"
                r="3"
                fill="#FFBF00"
                variants={pointVariants}
                transition={{ delay: 2.8 }}
            />
            <motion.circle
                cx="341.905"
                cy="316.27"
                r="3"
                fill="#FFBF00"
                variants={pointVariants}
                transition={{ delay: 3.0 }}
            />
        </motion.svg>
    );
};