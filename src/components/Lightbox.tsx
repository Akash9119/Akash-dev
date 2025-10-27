import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  animation?: { initial: any; animate: any };
}

export function Lightbox({ isOpen, onClose, children, animation }: LightboxProps) {
  const defaultAnimation = { initial: { scale: 0.9, opacity: 0 }, animate: { scale: 1, opacity: 1 } };
  const contentAnimation = animation || defaultAnimation;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/95 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={contentAnimation.initial}
            animate={contentAnimation.animate}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-card rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4 z-10 rounded-full"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </Button>
            <div className="p-8">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
