import { useState } from "react";
import ProductCard from "../shared/ProductCard";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  discount: number;
  isNew: boolean;
  category: string;
}

interface BestSellersProps {
  title?: string;
  products?: Product[];
}

const BestSellers = ({
  title = "Best Sellers",
  products = [
    {
      id: "1",
      name: "Nike Air Max 270",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      discount: 0,
      isNew: true,
      category: "Running",
    },
    {
      id: "2",
      name: "Adidas Ultraboost 21",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
      discount: 10,
      isNew: false,
      category: "Running",
    },
    {
      id: "3",
      name: "Puma RS-X",
      price: 120,
      image:
        "https://images.unsplash.com/photo-1608379743498-91dbfdb24a5c?w=500&q=80",
      discount: 0,
      isNew: false,
      category: "Casual",
    },
    {
      id: "4",
      name: "New Balance 990v5",
      price: 175,
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
      discount: 15,
      isNew: false,
      category: "Lifestyle",
    },
    {
      id: "5",
      name: "Converse Chuck Taylor",
      price: 60,
      image:
        "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500&q=80",
      discount: 0,
      isNew: false,
      category: "Casual",
    },
    {
      id: "6",
      name: "Vans Old Skool",
      price: 70,
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&q=80",
      discount: 0,
      isNew: false,
      category: "Skateboarding",
    },
    {
      id: "7",
      name: "Reebok Classic Leather",
      price: 80,
      image:
        "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?w=500&q=80",
      discount: 20,
      isNew: true,
      category: "Lifestyle",
    },
    {
      id: "8",
      name: "ASICS Gel-Kayano 28",
      price: 160,
      image:
        "https://images.unsplash.com/photo-1539185441755-769473a23570?w=500&q=80",
      discount: 0,
      isNew: true,
      category: "Running",
    },
  ],
}: BestSellersProps) => {
  const categories = ["All", ...new Set(products.map((p) => p.category))];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-3xl font-bold text-center mb-4">{title}</h2>
          <div className="w-20 h-1 bg-primary mb-6"></div>
          <Tabs defaultValue="All" className="w-full max-w-3xl">
            <TabsList className="grid grid-flow-col auto-cols-fr">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.slice(0, 8).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              discount={product.discount}
              isNew={product.isNew}
              category={product.category}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" variant="outline">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
