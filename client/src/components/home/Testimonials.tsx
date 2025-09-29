export default function Testimonials() {
  const videoTestimonials = [
    {
      id: 1,
      name: "Mrs. Sunita Devi",
      details: "Age 67, Patna",
      topic: "Cataract Surgery Success Story"
    },
    {
      id: 2,
      name: "Mr. Rajesh Kumar",
      details: "Age 32, Software Engineer",
      topic: "LASIK Experience"
    },
    {
      id: 3,
      name: "Ms. Priya Singh",
      details: "Age 28, Teacher",
      topic: "Depression Recovery"
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
            What Our Patients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real experiences from patients who trust us with their healthcare
          </p>
        </div>
        
        {/* Video Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-semibold text-center mb-8">Video Testimonials</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-card rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <i className="fas fa-play-circle text-primary text-4xl mb-2"></i>
                    <p className="text-sm text-muted-foreground">{testimonial.topic}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Written Testimonials */}
        <div>
          <h3 className="text-2xl font-heading font-semibold text-center mb-8">Patient Reviews</h3>
          <div className="grid md:grid-cols-3 gap-8">
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
    </section>
  );
}
