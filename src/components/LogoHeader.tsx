
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function LogoHeader() {
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex items-center justify-center py-4">
      <h1 className="text-3xl font-bold text-blue-700 tracking-tight">🎉 EventoGestor</h1>
    </motion.div>
  );
}
