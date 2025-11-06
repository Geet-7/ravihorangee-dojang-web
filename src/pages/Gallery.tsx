import Navigation from "@/components/Navigation";
import MobileNavigation from "@/components/MobileNavigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Camera } from "lucide-react";
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Placeholder images - replace with actual imports once you add images
  const galleryCategories = {
    section1: {
      name: "Class Training",
      images: [
        // Add your images here like: { src: import_path, alt: "description" }
        { src: "", alt: "Gallery Image 1" },
        { src: "", alt: "Gallery Image 2" },
        { src: "", alt: "Gallery Image 3" },
        { src: "", alt: "Gallery Image 4" },
        { src: "", alt: "Gallery Image 5" },
        { src: "", alt: "Gallery Image 6" },
      ]
    },
    section2: {
      name: "Newspaper clippings",
      images: [
        { src: "", alt: "Gallery Image 1" },
        { src: "", alt: "Gallery Image 2" },
        { src: "", alt: "Gallery Image 3" },
        { src: "", alt: "Gallery Image 4" },
        { src: "", alt: "Gallery Image 5" },
        { src: "", alt: "Gallery Image 6" },
      ]
    },
    section3: {
      name: "Competitions hosted",
      images: [
        { src: "", alt: "Gallery Image 1" },
        { src: "", alt: "Gallery Image 2" },
        { src: "", alt: "Gallery Image 3" },
        { src: "", alt: "Gallery Image 4" },
        { src: "", alt: "Gallery Image 5" },
        { src: "", alt: "Gallery Image 6" },
      ]
    },
    section4: {
      name: "Competitions played",
      images: [
        { src: " @/assets/gallery/gal_comp_host (1).jpg", alt: "Gallery Image 1" },
        { src: "", alt: "Gallery Image 2" },
        { src: "", alt: "Gallery Image 3" },
        { src: "", alt: "Gallery Image 4" },
        { src: "", alt: "Gallery Image 5" },
        { src: "", alt: "Gallery Image 6" },
      ]
    }
  };

  const renderGalleryGrid = (images: { src: string; alt: string }[]) => (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => (
        <Card
          key={index}
          className="martial-card group cursor-pointer overflow-hidden p-0"
          onClick={() => setSelectedImage(image.src)}
        >
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            {image.src ? (
              <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                <Camera className="w-12 h-12 text-primary/60" />
              </div>
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
          </div>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <MobileNavigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing moments of growth, discipline, and excellence in our Taekwondo journey
          </p>
        </div>
      </section>

      {/* Gallery Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="section1" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12">
              <TabsTrigger value="section1">{galleryCategories.section1.name}</TabsTrigger>
              <TabsTrigger value="section2">{galleryCategories.section2.name}</TabsTrigger>
              <TabsTrigger value="section3">{galleryCategories.section3.name}</TabsTrigger>
              <TabsTrigger value="section4">{galleryCategories.section4.name}</TabsTrigger>
            </TabsList>

            {/* Section 1 Tab */}
            <TabsContent value="section1" className="space-y-8">
              {renderGalleryGrid(galleryCategories.section1.images)}
            </TabsContent>

            {/* Section 2 Tab */}
            <TabsContent value="section2" className="space-y-8">
              {renderGalleryGrid(galleryCategories.section2.images)}
            </TabsContent>

            {/* Section 3 Tab */}
            <TabsContent value="section3" className="space-y-8">
              {renderGalleryGrid(galleryCategories.section3.images)}
            </TabsContent>

            {/* Section 4 Tab */}
            <TabsContent value="section4" className="space-y-8">
              {renderGalleryGrid(galleryCategories.section4.images)}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Image Modal for full-size view */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
            >
              <span className="text-4xl">&times;</span>
            </button>
            <img
              src={selectedImage}
              alt="Gallery full view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Gallery;
