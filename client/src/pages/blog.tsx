export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Cataract Surgery: What to Expect",
      excerpt: "Learn about the latest advancements in cataract surgery and what patients can expect during the procedure.",
      category: "Eye Care",
      readTime: "5 min read",
      date: "March 15, 2024",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 2,
      title: "Managing Depression: A Comprehensive Guide",
      excerpt: "Expert insights on recognizing symptoms and treatment options for depression from our neuropsychiatry team.",
      category: "Mental Health",
      readTime: "8 min read",
      date: "March 10, 2024",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 3,
      title: "LASIK vs PRK: Choosing the Right Vision Correction",
      excerpt: "Compare different laser vision correction procedures to find the best option for your lifestyle.",
      category: "Eye Care",
      readTime: "6 min read",
      date: "March 5, 2024",
      image: "https://images.unsplash.com/photo-1559757175-3aa0d0e4b4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 4,
      title: "Pediatric Eye Care: When to Start Eye Exams",
      excerpt: "Guidelines for parents on children's eye health and the importance of early vision screening.",
      category: "Pediatric Care",
      readTime: "4 min read",
      date: "February 28, 2024",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 5,
      title: "Anxiety Disorders: Symptoms and Treatment Options",
      excerpt: "Understanding different types of anxiety disorders and modern treatment approaches.",
      category: "Mental Health",
      readTime: "7 min read",
      date: "February 20, 2024",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    },
    {
      id: 6,
      title: "Diabetic Retinopathy: Prevention and Early Detection",
      excerpt: "How diabetes affects your eyes and steps to prevent diabetic retinopathy complications.",
      category: "Eye Care",
      readTime: "6 min read",
      date: "February 15, 2024",
      image: "https://images.unsplash.com/photo-1559757175-3aa0d0e4b4e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250"
    }
  ];

  const categories = ["All", "Eye Care", "Mental Health", "Pediatric Care"];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Health & Wellness Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Expert medical insights, health tips, and latest updates from Sudiksha Hospital's medical team
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-border hover:bg-primary hover:text-primary-foreground transition-colors"
              data-testid={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="mb-16">
          <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="aspect-video lg:aspect-auto">
                <img 
                  src={blogPosts[0].image} 
                  alt={blogPosts[0].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                  <span className="text-sm text-muted-foreground">{blogPosts[0].category}</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{blogPosts[0].readTime}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4">
                  {blogPosts[0].title}
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{blogPosts[0].date}</span>
                  <button className="text-primary font-medium hover:underline">
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <article key={post.id} className="bg-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm text-primary font-medium">{post.category}</span>
                  <span className="text-sm text-muted-foreground">•</span>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                  <button 
                    className="text-primary font-medium hover:underline text-sm"
                    data-testid={`read-more-${post.id}`}
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
              Stay Updated with Our Health Tips
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest health insights, medical updates, and wellness tips from our expert medical team.
            </p>
            <div className="max-w-md mx-auto flex gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
                data-testid="newsletter-email"
              />
              <button 
                className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                data-testid="newsletter-subscribe"
              >
                Subscribe
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="mt-12 p-6 bg-muted/50 rounded-xl">
          <h3 className="font-semibold text-foreground mb-2">Medical Disclaimer</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The information provided in these articles is for educational purposes only and should not be considered as medical advice. 
            Always consult with qualified healthcare professionals for proper diagnosis and treatment. The content does not replace 
            professional medical consultation, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </div>
  );
}
