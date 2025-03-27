import { Button } from "../ui/button";

interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
  link: string;
}

interface FeaturedCategoriesProps {
  title?: string;
  categories?: Category[];
}

const FeaturedCategories = ({
  title = "Shop By Category",
  categories = [
    {
      id: "1",
      name: "Running",
      image:
        "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&q=80",
      count: 42,
      link: "/category/running",
    },
    {
      id: "2",
      name: "Casual",
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80",
      count: 36,
      link: "/category/casual",
    },
    {
      id: "3",
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=500&q=80",
      count: 28,
      link: "/category/sports",
    },
    {
      id: "4",
      name: "Lifestyle",
      image:
        "https://images.unsplash.com/photo-1543508282-6319a3e2621f?w=500&q=80",
      count: 54,
      link: "/category/lifestyle",
    },
  ],
}: FeaturedCategoriesProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
          <div className="w-20 h-1 bg-primary mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative h-64 overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-4 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-bold mb-2">
                  {category.name}
                </h3>
                <p className="text-white mb-4">{category.count} Products</p>
                <Button
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors"
                  asChild
                >
                  <a href={category.link}>Shop Now</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
