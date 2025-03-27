import { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ProductCard from "../shared/ProductCard";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Slider } from "../ui/slider";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  discount: number;
  isNew: boolean;
  category: string;
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([
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
    {
      id: "9",
      name: "Brooks Ghost 14",
      price: 130,
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
      discount: 0,
      isNew: false,
      category: "Running",
    },
    {
      id: "10",
      name: "Saucony Ride 14",
      price: 130,
      image:
        "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
      discount: 5,
      isNew: false,
      category: "Running",
    },
    {
      id: "11",
      name: "Hoka One One Clifton 8",
      price: 140,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      discount: 0,
      isNew: true,
      category: "Running",
    },
    {
      id: "12",
      name: "On Cloud X",
      price: 140,
      image:
        "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500&q=80",
      discount: 0,
      isNew: true,
      category: "Training",
    },
  ]);

  const [priceRange, setPriceRange] = useState<number[]>([0, 200]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("featured");

  const categories = [...new Set(products.map((p) => p.category))];

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const filteredProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase()),
    )
    .filter(
      (product) =>
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category),
    )
    .filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1],
    )
    .sort((a, b) => {
      if (sortBy === "price-low-high") return a.price - b.price;
      if (sortBy === "price-high-low") return b.price - a.price;
      if (sortBy === "newest") return a.isNew ? -1 : 1;
      return 0; // featured
    });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <div className="bg-gray-100 py-8">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-2">All Products</h1>
            <p className="text-gray-600 mb-4">
              Discover our collection of high-quality footwear
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters */}
            <div className="w-full md:w-1/4 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">Search</h3>
                <Input
                  type="search"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center space-x-2">
                      <Checkbox
                        id={`category-${category}`}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={() => handleCategoryChange(category)}
                      />
                      <Label
                        htmlFor={`category-${category}`}
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Price Range</h3>
                <div className="px-2">
                  <Slider
                    defaultValue={[0, 200]}
                    max={200}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-4"
                  />
                  <div className="flex justify-between">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategories([]);
                    setPriceRange([0, 200]);
                    setSortBy("featured");
                  }}
                >
                  Reset Filters
                </Button>
              </div>
            </div>

            {/* Products */}
            <div className="w-full md:w-3/4">
              <div className="flex justify-between items-center mb-6">
                <p className="text-sm text-gray-500">
                  Showing {filteredProducts.length} products
                </p>
                <select
                  className="border rounded-md p-2 text-sm"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Featured</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="newest">Newest</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
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

              {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 mb-4">
                    No products match your filters
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategories([]);
                      setPriceRange([0, 200]);
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
