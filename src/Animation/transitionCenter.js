import { motion } from "framer-motion";
import "./transitionCenter.scss";

const transitionCenter = (OgComponent) => {
    return () => (
        <>
            <OgComponent />
            <motion.div
                className="slide-in"
                initial={{ y: "-100%", x: 0 }}
                animate={{ y: "100%"}}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1.15] }}
            />
        </>
    );
};

export default (transitionCenter);
