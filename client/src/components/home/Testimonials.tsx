import { useState, useRef } from 'react';

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const reviewsScrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<{id: number, name: string, condition: string, videoId: string} | null>(null);

  const scrollToNext = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 320 + 16; // w-80 + gap-4
      const newIndex = Math.min(currentIndex + 1, videoTestimonials.length - 1);
      container.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(newIndex);
    }
  };

  const scrollToPrevious = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const cardWidth = 320 + 16; // w-80 + gap-4
      const newIndex = Math.max(currentIndex - 1, 0);
      container.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
      setCurrentIndex(newIndex);
    }
  };

  const scrollToNextReview = () => {
    if (reviewsScrollContainerRef.current) {
      const container = reviewsScrollContainerRef.current;
      const cardWidth = 320 + 16; // w-80 + gap-4
      const newIndex = Math.min(currentReviewIndex + 1, writtenTestimonials.length - 1);
      container.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
      setCurrentReviewIndex(newIndex);
    }
  };

  const scrollToPreviousReview = () => {
    if (reviewsScrollContainerRef.current) {
      const container = reviewsScrollContainerRef.current;
      const cardWidth = 320 + 16; // w-80 + gap-4
      const newIndex = Math.max(currentReviewIndex - 1, 0);
      container.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
      setCurrentReviewIndex(newIndex);
    }
  };

  const openVideoModal = (testimonial: {id: number, name: string, condition: string, videoId: string}) => {
    setSelectedVideo(testimonial);
  };

  const closeVideoModal = () => {
    setSelectedVideo(null);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeVideoModal();
    }
  };

  const videoTestimonials = [
    {
      id: 1,
      name: "Mr. Rajesh Kumar",
      condition: "Cataract Surgery",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      videoId: "dQw4w9WgXcQ" // Example YouTube video ID - replace with actual patient testimonial videos
    },
    {
      id: 2,
      name: "Ms. Priya Singh",
      condition: "Oculoplasty",
      image: "https://images.unsplash.com/photo-1594824373632-8b4b4b4b4b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      videoId: "jNQXAC9IVRw" // Example YouTube video ID - replace with actual patient testimonial videos
    },
    {
      id: 3,
      name: "Mrs. Sunita Devi",
      condition: "Depression Recovery",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      videoId: "M7lc1UVf-VE" // Example YouTube video ID - replace with actual patient testimonial videos
    },
    {
      id: 4,
      name: "Mr. Anil Sharma",
      condition: "Glaucoma Management",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      videoId: "dQw4w9WgXcQ" // Example YouTube video ID - replace with actual patient testimonial videos
    },
    {
      id: 5,
      name: "Dr. Kavita Jha",
      condition: "Anxiety Treatment",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      videoId: "jNQXAC9IVRw" // Example YouTube video ID - replace with actual patient testimonial videos
    },
    {
      id: 6,
      name: "Mrs. Meera Patel",
      condition: "Retinal Surgery",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      videoId: "M7lc1UVf-VE" // Example YouTube video ID - replace with actual patient testimonial videos
    }
  ];

  const writtenTestimonials = [
    {
      id: 1,
      name: "Mr. Anil Sharma",
      details: "Retired Government Officer",
      rating: 5,
      text: "Dr. Priyanka Sharma is an exceptional ophthalmologist. My cataract surgery was painless and the results are amazing. I can see clearly again!"
    },
    {
      id: 2,
      name: "Mrs. Kavita Singh",
      details: "Homemaker",
      rating: 5,
      text: "The staff at Sudiksha Hospital is very caring. Dr. Vinay Kumar helped me overcome my anxiety with patience and effective treatment."
    },
    {
      id: 3,
      name: "Dr. Mukesh Jha",
      details: "Medical Professional",
      rating: 5,
      text: "Advanced equipment and expert doctors. My retinal problem was diagnosed early and treated successfully. Highly recommended!"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
            Patient Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real experiences from patients who trust us with their healthcare
          </p>
        </div>
        
        {/* Video Testimonials */}
        <div className="mb-16">
          {/* Mobile Slider */}
          <div className="block sm:hidden">
            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={scrollToPrevious}
                disabled={currentIndex === 0}
                className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/95 hover:bg-white rounded-full shadow-md flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
              >
                <i className="fas fa-chevron-left text-gray-700 text-sm"></i>
              </button>
              
              <button
                onClick={scrollToNext}
                disabled={currentIndex === videoTestimonials.length - 1}
                className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/95 hover:bg-white rounded-full shadow-md flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
              >
                <i className="fas fa-chevron-right text-gray-700 text-sm"></i>
              </button>

              <div 
                ref={scrollContainerRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide scroll-smooth px-10"
              >
                {videoTestimonials.map((testimonial) => (
                  <div 
                    key={testimonial.id} 
                    className="relative rounded-xl shadow-lg overflow-hidden group cursor-pointer flex-shrink-0 w-80 snap-center"
                    onClick={() => openVideoModal(testimonial)}
                  >
                    <div className="aspect-video relative">
                      <img 
                        src={testimonial.image}
                        alt={`${testimonial.name} - ${testimonial.condition}`}
                        className="w-full h-full object-cover"
                      />
                      {/* Dark overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                      
                      {/* Play button */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                          <i className="fas fa-play text-primary text-xl ml-1"></i>
                        </div>
                      </div>
                      
                      {/* Text overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="text-white">
                          <h4 className="font-bold text-lg mb-1">{testimonial.condition}</h4>
                          <p className="text-sm opacity-90">{testimonial.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Slider indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {videoTestimonials.map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {videoTestimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="relative rounded-xl shadow-lg overflow-hidden group cursor-pointer"
                onClick={() => openVideoModal(testimonial)}
              >
                <div className="aspect-video relative">
                  <img 
                    src={testimonial.image}
                    alt={`${testimonial.name} - ${testimonial.condition}`}
                    className="w-full h-full object-cover"
                  />
                  {/* Dark overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                      <i className="fas fa-play text-primary text-xl ml-1"></i>
                    </div>
                  </div>
                  
                  {/* Text overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white">
                      <h4 className="font-bold text-lg mb-1">{testimonial.condition}</h4>
                      <p className="text-sm opacity-90">{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Written Testimonials */}
        <div>
          <h3 className="text-2xl font-heading font-semibold text-center mb-8">Patient Reviews</h3>
          
          {/* Mobile Slider */}
          <div className="block md:hidden">
            <div className="relative">
              {/* Navigation Arrows */}
              <button
                onClick={scrollToPreviousReview}
                disabled={currentReviewIndex === 0}
                className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/95 hover:bg-white rounded-full shadow-md flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
              >
                <i className="fas fa-chevron-left text-gray-700 text-sm"></i>
              </button>
              
              <button
                onClick={scrollToNextReview}
                disabled={currentReviewIndex === writtenTestimonials.length - 1}
                className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 bg-white/95 hover:bg-white rounded-full shadow-md flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200 hover:scale-105"
              >
                <i className="fas fa-chevron-right text-gray-700 text-sm"></i>
              </button>

              <div 
                ref={reviewsScrollContainerRef}
                className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 scrollbar-hide scroll-smooth px-10"
              >
                {writtenTestimonials.map((testimonial) => (
                  <div key={testimonial.id} className="bg-card p-6 rounded-xl shadow-lg flex-shrink-0 w-80 snap-center">
                    <div className="flex mb-4">
                      {Array(testimonial.rating).fill(0).map((_, i) => (
                        <i key={i} className="fas fa-star text-secondary text-sm"></i>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic text-sm leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.details}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Slider indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {writtenTestimonials.map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentReviewIndex ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {writtenTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-card p-6 rounded-xl shadow-lg">
                <div className="flex mb-4">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <i key={i} className="fas fa-star text-secondary text-sm"></i>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeVideoModal}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
        >
          <div 
            className="relative w-full max-w-4xl bg-white rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h3 className="text-lg font-semibold text-foreground">{selectedVideo.condition}</h3>
                <p className="text-sm text-muted-foreground">{selectedVideo.name}</p>
              </div>
              <button
                onClick={closeVideoModal}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close video"
              >
                <i className="fas fa-times text-gray-600"></i>
              </button>
            </div>

            {/* Video Player */}
            <div className="relative w-full aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={`${selectedVideo.name} - ${selectedVideo.condition}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
