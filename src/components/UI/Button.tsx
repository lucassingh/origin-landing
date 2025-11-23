// components/Button.tsx
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface ButtonProps {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    magnetic?: boolean;
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    magnetic = true,
    children,
    className = '',
    onClick,
    type = 'button',
    disabled = false,
    ...props
}) => {
    const getClasses = () => {
        const base = "cursor-pointer font-semibold transition-all duration-300 focus:outline-none border"

        const variants = {
            primary: "bg-[#FF8C00] border-[#FF8C00] text-white hover:bg-[#E67E00]",
            secondary: "bg-white/10 backdrop-blur-sm border-[#FF8C00] text-white hover:bg-[#FF8C00] hover:text-gray-900",
            outline: "border-2 border-[#FF8C00] text-[#FF8C00] hover:bg-[#FF8C00] hover:bg-opacity-10",
            ghost: "border-transparent text-white hover:text-[#FF8C00]"
        }

        const sizes = {
            sm: "px-4 py-2 text-sm rounded-lg",
            md: "px-6 py-3 text-base rounded-xl",
            lg: "px-8 py-4 text-lg rounded-xl"
        }

        return clsx(
            base,
            variants[variant],
            sizes[size],
            disabled && "opacity-50 cursor-not-allowed",
            className
        )
    }

    const baseProps = {
        className: getClasses(),
        onClick,
        type,
        disabled,
        ...props
    }

    if (magnetic) {
        return (
            <motion.button
                whileHover={!disabled ? { scale: 1.05 } : {}}
                whileTap={!disabled ? { scale: 0.95 } : {}}
                {...baseProps}
            >
                {children}
            </motion.button>
        )
    }

    return (
        <button {...baseProps}>
            {children}
        </button>
    )
}