import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { useState } from "react";

const MyPhotos = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");

  // State for modal
  const [selectedImage, setSelectedImage] = useState(null);

  // Define the images array with paths from assets folder
  const images = [
    "/assets/WhatsApp Image 2024-11-10 at 7.37.37 PM.jpeg",
    "/assets/WhatsApp Image 2024-11-10 at 7.37.37 PM (1).jpeg",
    "/assets/WhatsApp Image 2024-11-10 at 7.37.38 PM.jpeg",
    "/assets/WhatsApp Image 2024-11-10 at 7.37.39 PM.jpeg",
    "/assets/WhatsApp Image 2024-11-10 at 7.37.39 PM (1).jpeg",
    "/assets/WhatsApp Image 2024-11-10 at 7.37.39 PM (2).jpeg",
    "/assets/WhatsApp Image 2024-11-10 at 7.37.39 PM (3).jpeg",
    "/assets/WhatsApp Image 2024-11-10 at 7.37.40 PM.jpeg",
    "/assets/WhatsApp Image 2024-11-10 at 7.37.40 PM (1).jpeg",
    "/assets/WhatsApp Image 2024-11-10 at 7.37.41 PM.jpeg",
    "/assets/WhatsApp Image 2024-11-10 at 7.37.41 PM (1).jpeg",
    "/assets/WhatsApp Image 2024-11-10 at 7.37.58 PM.jpeg",
    "/assets/WhatsApp Image 2024-11-10 at 7.37.59 PM.jpeg",
    "/assets/WhatsApp Image 2024-11-10 at 7.37.59 PM (1).jpeg",
    "/assets/WhatsApp Image 2024-11-10 at 7.39.42 PM.jpeg",
    "/assets/WhatsApp Image 2024-11-10 at 7.39.43 PM.jpeg",
    "/assets/WhatsApp Image 2024-11-10 at 8.45.21 PM.jpeg",
    "/assets/WhatsApp Image 2024-11-10 at 8.45.22 PM.jpeg",
    "/assets/WhatsApp Image 2024-11-10 at 8.45.23 PM.jpeg",
    "/assets/WhatsApp Image 2024-11-10 at 9.10.47 PM.jpeg",
    "/assets/WhatsApp Image 2024-11-10 at 9.10.48 PM.jpeg",
    "/assets/WhatsApp Image 2024-11-10 at 9.10.48 PM (1).jpeg",
    "/assets/WhatsApp Image 2024-11-10 at 9.15.33 PM.jpeg",
   " assets/WhatsApp Image 2024-11-10 at 9.15.33 PM (1).jpeg",
   "/assets/WhatsApp Image 2024-11-10 at 9.15.34 PM.jpeg",
   "assets/WhatsApp Image 2024-11-10 at 9.15.34 PM (1).jpeg",
   "/assets/WhatsApp Image 2024-11-10 at 9.15.34 PM (2).jpeg",
   "assets/WhatsApp Image 2024-11-10 at 9.15.35 PM.jpeg",
   "/assets/WhatsApp Image 2024-11-10 at 9.15.35 PM (1).jpeg",
   "assets/WhatsApp Image 2024-11-10 at 9.15.36 PM.jpeg",
   "/assets/WhatsApp Image 2024-11-10 at 9.15.36 PM (1).jpeg"
    // Add more images as needed
  ];

  // Open Modal
  const openModal = (src) => {
    setSelectedImage(src);
  };

  // Close Modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="photos" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            <span className="text-red">Photos</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Explore our gallery to see Carpets and Beyond in action! From luxurious hand-tufted carpets and EPE foams to elegant bedsheets and artificial grass installations, each image showcases the quality and attention to detail that define our work.
          </p>
        </motion.div>
      </div>

      {/* Horizontal infinite scrolling image section */}
      <div className="overflow-hidden mt-16 relative">
        <motion.div
          className="flex gap-4"
          initial={{ x: 0 }}
          animate={{
            x: `-${images.length * 150}px`,  // Adjust x-axis based on number of images and their width
          }}
          transition={{
            repeat: Infinity,
            duration: images.length * 6,  // Adjust duration based on total images and width
            ease: "linear",
          }}
        >
          {images.concat(images).map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-40 bg-gray-200 cursor-pointer"  // Adjust width and height to fit more images
              onClick={() => openModal(src)}
            >
              <img src={src} alt={`Gallery image ${index + 1}`} className="object-cover w-full h-full" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Modal for Enlarged Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <img src={selectedImage} alt="Enlarged view" className="w-full h-auto max-w-lg max-h-screen rounded-md" />
            <button
              className="absolute top-2 right-2 bg-white rounded-full p-2 text-black"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default MyPhotos;
