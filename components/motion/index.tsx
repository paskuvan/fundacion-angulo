"use client";
import { motion, Variants, HTMLMotionProps } from "framer-motion";

const vp = { once: true, amount: 0.1 } as const;

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
export const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
export const fadeRight: Variants = {
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.05 } },
};
export const staggerItem: Variants = {
  hidden:  { opacity: 0, y: 28, scale: 0.95 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

type P = HTMLMotionProps<"div"> & { delay?: number };

export function FadeUp({ delay = 0, children, ...r }: P) {
  return <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={vp} transition={{ duration: 0.7, ease: [0.22,1,0.36,1], delay }} {...r}>{children}</motion.div>;
}
export function FadeLeft({ delay = 0, children, ...r }: P) {
  return <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={vp} transition={{ duration: 0.7, ease: [0.22,1,0.36,1], delay }} {...r}>{children}</motion.div>;
}
export function FadeRight({ delay = 0, children, ...r }: P) {
  return <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={vp} transition={{ duration: 0.7, ease: [0.22,1,0.36,1], delay }} {...r}>{children}</motion.div>;
}
export function Stagger({ children, ...r }: P) {
  return <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={vp} {...r}>{children}</motion.div>;
}
export function StaggerItem({ children, ...r }: P) {
  return <motion.div variants={staggerItem} {...r}>{children}</motion.div>;
}
