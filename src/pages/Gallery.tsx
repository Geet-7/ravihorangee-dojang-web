import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom"; // <<< ADD THIS IMPORT
import { Card } from "@/components/ui/card";
import { Camera } from "lucide-react";
import Navigation from "@/components/Navigation";
import MobileNavigation from "@/components/MobileNavigation";
import Footer from "@/components/Footer";

/**
 * Gallery page
 * ... (component description)
 */

/* ---------------------------
   Internal SectionTabs component
   ---------------------------
   ... (all of your SectionTabs component code - NO CHANGES NEEDED HERE)
*/
const SectionTabs: React.FC<{
  sections: { id: string; title: string; icon?: React.ReactNode }[];
  value: string;
  onChange: (id: string) => void;
}> = ({ sections, value, onChange }) => {
  // ... (all the code for SectionTabs)
  const listRef = useRef<HTMLDivElement | null>(null);
  const buttonsRef = useRef<Array<HTMLButtonElement | null>>([]);

  // Keyboard navigation: move selection and focus
  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    const onKeyDown = (e: KeyboardEvent) => {
      const idx = sections.findIndex((s) => s.id === value);
      if (e.key === "ArrowRight") {
        e.preventDefault();
        const next = (idx + 1) % sections.length;
        onChange(sections[next].id);
        buttonsRef.current[next]?.focus();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        const prev = (idx - 1 + sections.length) % sections.length;
        onChange(sections[prev].id);
        buttonsRef.current[prev]?.focus();
      } else if (e.key === "Home") {
        e.preventDefault();
        onChange(sections[0].id);
        buttonsRef.current[0]?.focus();
      } else if (e.key === "End") {
        e.preventDefault();
        onChange(sections[sections.length - 1].id);
        buttonsRef.current[sections.length - 1]?.focus();
      }
    };
    el.addEventListener("keydown", onKeyDown);
    return () => el.removeEventListener("keydown", onKeyDown);
  }, [sections, value, onChange]);

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label="Gallery sections"
      className="mx-auto my-6 max-w-3xl px-4"
    >
      <div className="flex items-center justify-center gap-3 rounded-2xl bg-white/90 p-2 shadow-sm">
        {sections.map((sec, i) => {
          const isActive = sec.id === value;
          return (
            <button
              key={sec.id}
              ref={(el) => (buttonsRef.current[i] = el)}
              role="tab"
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              onClick={() => onChange(sec.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onChange(sec.id);
                }
              }}
              title={!isActive ? sec.title : undefined}
              className={[
                // Base styles with faster transitions
                "relative flex items-center justify-center",
                "transition-all duration-150 ease-in-out",
                // Mobile: Numbers for inactive, expanded for active
                "md:px-6 md:py-2.5",
                isActive
                  ? [
                      "min-h-[40px] flex-1 max-w-[70%] md:max-w-none md:flex-initial",
                      "rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10",
                      "border-2 border-primary/20 shadow-sm",
                      "px-4 py-2",
                    ].join(" ")
                  : [
                      "h-10 w-10 md:h-auto md:w-auto",
                      "rounded-lg border border-gray-200",
                      "bg-white hover:bg-gray-50",
                      "md:hover:bg-gradient-to-r md:hover:from-primary/5 md:hover:to-secondary/5",
                    ].join(" "),
                // Text styles
                "font-medium text-foreground",
                // Focus styles
                "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-1",
              ].join(" ")}
            >
              {/* Mobile: Numbers for inactive, title for active */}
              <span
                className={[
                  "block md:hidden",
                  "transition-opacity duration-150 ease-in-out",
                ].join(" ")}
              >
                {isActive ? (
                  <span className="px-1 text-sm">{sec.title}</span>
                ) : (
                  <span className="text-sm">{i + 1}</span>
                )}
              </span>

              {/* Desktop: Always show full titles with larger text */}
              <span
                className={[
                  "hidden md:block whitespace-nowrap",
                  "text-lg font-medium",
                  "transition-transform duration-150 ease-in-out",
                  isActive ? "scale-[1.02]" : "scale-100",
                ].join(" ")}
              >
                {sec.title}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};


/* ---------------------------
   Gallery component
   --------------------------- */
const Gallery: React.FC = () => {
  // <<< ADD THIS HOOK >>>
  const location = useLocation();

  // <<< UPDATE THIS STATE INITIALIZATION >>>
  const [activeSection, setActiveSection] = useState<string>(
    location.state?.defaultSection || "section1"
  );
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // ... (rest of your state and functions)
  // batching lazy-load state
  const [galleryImages, setGalleryImages] = useState<{ src: string; alt: string }[]>([]);
  const [allLoaded, setAllLoaded] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  // Track loaded state for each imageadd
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  // Add new state for tracking row loading
  const [loadingRows, setLoadingRows] = useState<Set<number>>(new Set());
  const [completeRows, setCompleteRows] = useState<Set<number>>(new Set());
  const [currentLoadingRow, setCurrentLoadingRow] = useState<number>(0);
  
  // Add state for tracking row sequence
  const [visibleRows, setVisibleRows] = useState<Set<number>>(new Set());
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  
  // batch size - reduced for faster initial load
  const BATCH_SIZE = 6;

  // *** Loaders ***
  // global loader (used by section3 logic) - keep as-is if you want section3 lazy loading behavior
  const loaders = import.meta.glob("../assets/gallery/section3/**/*.{jpg,jpeg,png,webp,svg,JPG,JPEG,PNG,WEBP}");
  const paths = Object.keys(loaders).sort();

  // Dedicated loader for section2 folder (synchronously loaded into state)
  const loadersSection2 = import.meta.glob("../assets/gallery/section2/**/*.{jpg,jpeg,png,webp,svg,JPG,JPEG,PNG,WEBP}");
  const section2Paths = Object.keys(loadersSection2).sort();

  // State to hold images for section2
  const [section2Images, setSection2Images] = useState<{ src: string; alt: string }[]>([]);

  // Load all section2 images once and cache them in state
  useEffect(() => {
    let mounted = true;
    (async () => {
      if (!mounted) return;
      if (section2Paths.length === 0) {
        setSection2Images([]);
        return;
      }
      try {
        // preload + mark loaded
        const imgs = await Promise.all(
          section2Paths.map(async (p) => {
            const mod = await (loadersSection2 as any)[p]();
            const src = (mod as any).default ?? mod;
            // preload image so we can mark it loaded immediately
            await new Promise<void>((resolve, reject) => {
              const img = new Image();
              img.onload = () => {
                // mark caches so render logic treats this as loaded
                loadedImagesCache.current.set(src, true);
                setLoadedImages(prev => new Set(prev).add(src));
                resolve();
              };
              img.onerror = () => {
                // still resolve so one broken file doesn't block others
                console.error("Failed to preload:", src);
                resolve();
              };
              img.src = src;
            });
            const filename = p.split("/").pop() ?? "";
            return { src, alt: filename.replace(/\.[^/.]+$/, "") };
          })
        );
        if (mounted) setSection2Images(imgs);
      } catch (e) {
        console.error("Failed to load section2 images:", e);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []); // run once on mount

  // --- SECTIONED PATHS: map files to section folders (expects folders named 'section1','section2','section3') ---
  const sectionPaths: Record<string, string[]> = {
    section1: paths.filter((p) => p.includes("/section1/")),
    section2: paths.filter((p) => p.includes("/section2/")),
    section3: paths.filter((p) => p.includes("/section3/")),
  };

  // Per-section gallery state (persist loaded images per section)
  const [galleryBySection, setGalleryBySection] = useState<
    Record<string, { src: string; alt: string }[]>
  >({
    section1: [],
    section2: [],
    section3: [],
  });

  // Helper to get row size based on viewport
  const getRowSize = () => {
    if (window.innerWidth >= 1024) return 3; // lg
    if (window.innerWidth >= 768) return 2;  // md
    return 1; // mobile
  };

  // Add persistent cache refs
  const loadedImagesCache = useRef<Map<string, boolean>>(new Map());
  const renderedRowsCache = useRef<Map<number, boolean>>(new Map());
  
  // load a single batch (startIndex)
  const loadBatch = async (startIndex: number) => {
    // ... (rest of your loadBatch function)
    const slice = paths.slice(startIndex, startIndex + BATCH_SIZE);
    if (slice.length === 0) {
      setAllLoaded(true);
      return;
    }

    const rowSize = getRowSize();
    const rows = new Map<number, string[]>();

    // Group by rows (keep existing logic)
    slice.forEach((path, i) => {
      const rowIndex = Math.floor((startIndex + i) / rowSize);
      const rowImages = rows.get(rowIndex) || [];
      rows.set(rowIndex, [...rowImages, path]);
    });

    // Load rows sequentially with persistence
    for (const [rowIndex, rowPaths] of rows) {
      // Skip if row is already rendered
      if (renderedRowsCache.current.get(rowIndex)) {
        continue;
      }

      setCurrentLoadingRow(rowIndex);
      setLoadingRows(prev => new Set([...prev, rowIndex]));

      try {
        // *** Use Promise.allSettled to prevent one bad image from breaking the row ***
        const results = await Promise.allSettled(
          rowPaths.map(async (path) => {
            const mod = await (loaders as any)[path]();
            const src = (mod as any).default ?? mod;
            
            // Check cache first
            if (!loadedImagesCache.current.get(src)) {
              await new Promise<void>((resolve, reject) => {
                const img = new Image();
                img.onload = () => {
                  loadedImagesCache.current.set(src, true);
                  setLoadedImages(prev => new Set(prev).add(src));
                  resolve();
                };
                img.onerror = reject;
                img.src = src;
              });
            }

            return { 
              src, 
              // *** Better default alt text ***
              alt: "Competition gallery image",
              row: rowIndex 
            };
          })
        );

        // Filter out only the successful images
        const rowImages = results
          .filter(res => res.status === 'fulfilled')
          .map(res => (res as PromiseFulfilledResult<any>).value);
        
        // Log any images that failed to load
        results.forEach(res => {
          if (res.status === 'rejected') {
            console.error("Failed to load an image:", res.reason);
          }
        });

        // Update gallery images without replacing existing ones
        setGalleryImages(prev => {
          const existing = prev.filter(img => 
            !rowImages.some(newImg => newImg.src === img.src)
          );
          return [...existing, ...rowImages];
        });
        
        // Mark row as permanently rendered
        renderedRowsCache.current.set(rowIndex, true);
        
        // *** Removed artificial 100ms delay ***
        setCompleteRows(prev => new Set([...prev, rowIndex]));
        setLoadingRows(prev => {
          const next = new Set(prev);
          next.delete(rowIndex);
          return next;
        });

      } catch (error) {
        console.error(`Error loading row ${rowIndex}:`, error);
        setLoadingRows(prev => {
          const next = new Set(prev);
          next.delete(rowIndex);
          return next;
        });
      }
    }
  };

  // *** REFACTORED IO LOGIC ***
  
  // Refs for the intersection observer logic
  const nextIndexRef = useRef<number>(BATCH_SIZE * 2); // Start from the 3rd batch (index 12)
  const isLoadingRef = useRef<boolean>(false);
  const ioRef = useRef<IntersectionObserver | null>(null);

  // This is the function that does the work
  const loadMoreImages = async () => {
    // ... (rest of your loadMoreImages function)
    // 1. Prevent double-loads
    if (isLoadingRef.current || allLoaded) return;
  
    // 2. Set loading flag
    isLoadingRef.current = true;
  
    // 3. Load the batch
    await loadBatch(nextIndexRef.current);
  
    // 4. Update the index
    nextIndexRef.current += BATCH_SIZE;
  
    // 5. Check if we're done
    if (nextIndexRef.current >= paths.length) {
      setAllLoaded(true);
      if (ioRef.current) {
        ioRef.current.disconnect();
      }
      isLoadingRef.current = false;
      return;
    }
  
    // 6. Unset loading flag
    isLoadingRef.current = false;
  
    // 7. *** THE FIX ***
    // After loading, check if the sentinel is *still* on screen.
    // If it is, manually call this function again to keep loading.
    if (sentinelRef.current) {
      const sentinelTop = sentinelRef.current.getBoundingClientRect().top;
      const viewportHeight = window.innerHeight;
      // If sentinel is still within the "trigger zone" (viewport + 400px margin)
      if (sentinelTop <= (viewportHeight + 400)) {
        // Use setTimeout to avoid a potential recursive stack overflow on fast loads
        setTimeout(loadMoreImages, 100); 
      }
    }
  };

  // initial batch load (Loads first 12 images)
  useEffect(() => {
    // ... (rest of your useEffect)
    let mounted = true;
    (async () => {
      if (!mounted) return;
      // Load the first 2 batches to fill the screen
      await loadBatch(0);
      await loadBatch(BATCH_SIZE);
    })();

    return () => {
      mounted = false;
    };
  }, []); // Empty array [] means this runs ONCE on mount

  // This new effect handles the "load more" on scroll
  useEffect(() => {
    // ... (rest of your useEffect)
    // If we're not on section3, or if all images are loaded, do nothing.
    if (activeSection !== 'section3' || allLoaded) {
      return;
    }
  
    const el = sentinelRef.current;
    if (!el) {
      return;
    }
  
    // Reset logic for when tabs change
    nextIndexRef.current = BATCH_SIZE * 2;
    isLoadingRef.current = false;
  
    const io = new IntersectionObserver(
      (entries) => {
        // If it's intersecting, call our aggressive loader
        if (entries[0].isIntersecting) {
          loadMoreImages(); 
        }
      },
      { rootMargin: "400px" } // load just before scrolling into view
    );
  
    io.observe(el);
    ioRef.current = io; // Save IO to ref
  
    // *** ALSO PART OF THE FIX ***
    // Manually check *once* on setup, in case it's already visible
    // This kick-starts the `loadMoreImages` loop
    setTimeout(() => {
      if (sentinelRef.current) {
        const sentinelTop = sentinelRef.current.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        if (sentinelTop <= (viewportHeight + 400)) {
          loadMoreImages();
        }
      }
    }, 200); // Give a slight delay for layout to settle
  
    // Cleanup
    return () => {
      io.disconnect();
      ioRef.current = null;
    };
    
  }, [activeSection, allLoaded]); // Dependencies are correct


  // gallery categories: section3 uses lazy-loaded images
  const galleryCategories = {
    section1: {
      id: "section1",
      name: "Class",
      images: [
        { src: "", alt: "Training 1" },
        { src: "", alt: "Training 2" },
        { src: "", alt: "Training 3" },
        { src: "", alt: "Training 4" },
        { src: "", alt: "Training 5" },
        { src: "", alt: "Training 6" },
      ],
    },
    section2: {
      id: "section2",
      name: "Newspaper clippings",
      // images populated from src/assets/gallery/section2 via loadersSection2
      images: section2Images,
    },
    section3: {
      id: "section3",
      name: "Competitions",
      images: galleryImages, // lazy-loaded batch images
    },
  };

  const sectionsMeta = [
    { id: "section1", title: galleryCategories.section1.name },
    { id: "section2", title: galleryCategories.section2.name },
    { id: "section3", title: galleryCategories.section3.name },
  ];

  // Modified renderGalleryGrid with better loading text positioning
  const renderGalleryGrid = (images: { src: string; alt: string }[]) => {
    // ... (rest of your renderGalleryGrid function)
    const rowSize = getRowSize();
    const rows = images.reduce((acc, img, i) => {
      const rowIndex = Math.floor(i / rowSize);
      const row = acc.get(rowIndex) || [];
      acc.set(rowIndex, [...row, img]);
      return acc;
    }, new Map<number, typeof images>());

    return (
      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from(rows.entries()).map(([rowIndex, rowImages]) => {
            // compute row completeness by checking each image's loaded flag
            const areAllImagesLoaded = rowImages.every(img => loadedImagesCache.current.get(img.src) || loadedImages.has(img.src));
            const isRowComplete = areAllImagesLoaded || completeRows.has(rowIndex) || renderedRowsCache.current.get(rowIndex);
            const isRowLoading = loadingRows.has(rowIndex);

            return (
              <React.Fragment key={`row-${rowIndex}`}>
                {rowImages.map((image, imageIndex) => {
                  const isImageLoaded = loadedImagesCache.current.get(image.src) || loadedImages.has(image.src);

                  return (
                    <Card
                      key={`${rowIndex}-${imageIndex}`}
                      className={[
                        "martial-card group cursor-pointer overflow-hidden p-0 rounded-xl border-0 shadow-none",
                        "transform transition-all duration-200 ease-out",
                        isRowComplete 
                          ? "opacity-100 translate-y-0" 
                          : "opacity-0 translate-y-4",
                      ].join(" ")}
                      style={{
                        transitionDelay: isRowComplete ? "0ms" : 
                          `${(imageIndex % rowSize) * 50}ms`
                      }}
                      onClick={() => image.src && setSelectedImage(image.src)}
                    >
                      <div className="relative w-full aspect-video overflow-hidden 
                                    bg-gradient-to-br from-primary/5 to-secondary/5">
                        {image.src ? (
                          isImageLoaded ? (
                            <img
                              src={image.src}
                              alt={image.alt}
                              loading="lazy"
                              decoding="async"
                              draggable={false}
                              className="absolute inset-0 w-full h-full object-cover 
                                       transition-all duration-300 group-hover:scale-105"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-8 h-8 border-2 border-primary/30 
                                            border-t-primary/80 rounded-full animate-spin" />
                            </div>
                          )
                        ) : (
                          <Camera className="w-12 h-12 text-primary/40" />
                        )}
                        <div className="absolute inset-0 bg-black/0 
                                      group-hover:bg-black/10 transition-colors duration-300" />
                      </div>
                    </Card>
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>

        {/* Loading indicator - align with grid gap */}
        {!allLoaded && (
          <div className="pt-6">
            <div className="inline-flex items-center gap-2 text-sm text-gray-500">
              <div className="w-4 h-4 border-2 border-primary/30 border-t-primary/80 
                            rounded-full animate-spin" />
              <span>Loading images...</span>
            </div>
          </div>
        )}

        <div 
          ref={sentinelRef} 
          className="w-full h-4" 
          aria-hidden="true" 
        />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <MobileNavigation />

      {/* Main content wrapper */}
      <main className="flex-1 flex flex-col">
        {/* Hero section */}
        <section className="pt-20 pb-10 bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-2">Gallery</h1>
            <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto">
              Capturing moments of growth, discipline, and excellence in our Taekwondo journey
            </p>
          </div>
        </section>

        {/* Section tabs */}
        <SectionTabs sections={sectionsMeta} value={activeSection} onChange={setActiveSection} />

        {/* Gallery section - use consistent gap spacing */}
        <section className="py-6"> {/* Match grid gap-6 */}
          {activeSection === "section1" && renderGalleryGrid(galleryCategories.section1.images)}
          {activeSection === "section2" && renderGalleryGrid(galleryCategories.section2.images)}
          {activeSection === "section3" && renderGalleryGrid(galleryCategories.section3.images)}
        </section>
      </main>

      {/* Footer - no margin/padding to keep consistent spacing */}
      <footer className="bg-foreground">
        <Footer />
      </footer>

      {/* Image modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Add a close button that's easier to hit */}
          <button 
            className="absolute top-4 right-4 text-white text-5xl z-20"
            aria-label="Close modal"
          >
            &times;
          </button>
          
          {/* Stop click propagation on the image itself */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img 
              src={selectedImage} 
              alt="Selected gallery" 
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
          </div>

        </div>
      )}
    </div>
  );
};

export default Gallery;