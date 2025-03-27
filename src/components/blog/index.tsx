import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Search } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  slug: string;
}

const Blog = () => {
  // Mock blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "The Evolution of Running Shoes: From Minimalist to Maximalist",
      excerpt:
        "Explore the journey of running shoe design over the decades and how technology has transformed performance and comfort.",
      date: "June 15, 2024",
      author: "Sarah Johnson",
      category: "Running",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
      slug: "evolution-of-running-shoes",
    },
    {
      id: "2",
      title:
        "How to Choose the Perfect Basketball Shoes for Your Playing Style",
      excerpt:
        "Different positions and playing styles require different features in basketball footwear. Learn how to select the right pair for your game.",
      date: "June 10, 2024",
      author: "Michael Chen",
      category: "Basketball",
      image:
        "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800&q=80",
      slug: "choose-basketball-shoes",
    },
    {
      id: "3",
      title: "Sustainable Footwear: Brands Leading the Eco-Friendly Revolution",
      excerpt:
        "Discover the innovative shoe brands that are prioritizing sustainability without compromising on style or performance.",
      date: "June 5, 2024",
      author: "Emma Roberts",
      category: "Sustainability",
      image:
        "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?w=800&q=80",
      slug: "sustainable-footwear-brands",
    },
    {
      id: "4",
      title: "The Psychology of Shoe Shopping: Why We Love New Kicks",
      excerpt:
        "Explore the psychological factors that make buying new shoes so satisfying and why footwear holds such a special place in fashion.",
      date: "May 28, 2024",
      author: "David Wilson",
      category: "Fashion",
      image:
        "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=800&q=80",
      slug: "psychology-of-shoe-shopping",
    },
    {
      id: "5",
      title: "Breaking In New Shoes: Tips to Avoid Blisters and Discomfort",
      excerpt:
        "Learn the best methods for breaking in different types of shoes to ensure comfort from day one and prevent painful blisters.",
      date: "May 20, 2024",
      author: "Lisa Thompson",
      category: "Care",
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
      slug: "breaking-in-new-shoes",
    },
    {
      id: "6",
      title: "The History of Iconic Sneakers That Changed the Industry",
      excerpt:
        "From Chuck Taylors to Air Jordans, discover the stories behind the legendary sneakers that revolutionized footwear and culture.",
      date: "May 15, 2024",
      author: "James Rodriguez",
      category: "History",
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
      slug: "history-of-iconic-sneakers",
    },
  ];

  // Mock categories with post counts
  const categories = [
    { name: "Running", count: 12 },
    { name: "Basketball", count: 8 },
    { name: "Lifestyle", count: 15 },
    { name: "Sustainability", count: 6 },
    { name: "Fashion", count: 10 },
    { name: "Care", count: 7 },
    { name: "History", count: 5 },
  ];

  // Mock recent posts
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay up to date with the latest trends, tips, and stories from the
              world of footwear.
            </p>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {blogPosts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white rounded-lg shadow-sm overflow-hidden"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <span>{post.date}</span>
                          <span className="mx-2">•</span>
                          <span>{post.category}</span>
                        </div>
                        <h2 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                          <a href={`/blog/${post.slug}`}>{post.title}</a>
                        </h2>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">
                            By {post.author}
                          </span>
                          <Button variant="link" asChild>
                            <a href={`/blog/${post.slug}`}>Read More</a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-12">
                  <nav className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="w-9 h-9"
                      disabled
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-9 h-9 bg-primary text-white hover:bg-primary/90"
                    >
                      1
                    </Button>
                    <Button variant="outline" size="sm" className="w-9 h-9">
                      2
                    </Button>
                    <Button variant="outline" size="sm" className="w-9 h-9">
                      3
                    </Button>
                    <Button variant="outline" size="icon" className="w-9 h-9">
                      <span className="sr-only">Next</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Button>
                  </nav>
                </div>
              </div>

              {/* Sidebar */}
              <div>
                {/* Search */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                  <h3 className="text-lg font-bold mb-4">Search</h3>
                  <div className="relative">
                    <Input
                      type="search"
                      placeholder="Search articles..."
                      className="pr-10"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                  <h3 className="text-lg font-bold mb-4">Categories</h3>
                  <ul className="space-y-2">
                    {categories.map((category) => (
                      <li key={category.name}>
                        <a
                          href={`/blog/category/${category.name.toLowerCase()}`}
                          className="flex items-center justify-between text-gray-600 hover:text-primary transition-colors"
                        >
                          <span>{category.name}</span>
                          <span className="text-sm text-gray-400">
                            ({category.count})
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recent Posts */}
                <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
                  <h3 className="text-lg font-bold mb-4">Recent Posts</h3>
                  <ul className="space-y-2">
                    {recentPosts.map((post) => (
                      <li key={post.id}>
                        <a
                          href={`/blog/${post.slug}`}
                          className="text-gray-600 hover:text-primary transition-colors"
                        >
                          {post.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
