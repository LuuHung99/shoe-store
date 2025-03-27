import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/features/cartSlice";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import {
  Heart,
  ShoppingBag,
  Star,
  Truck,
  RotateCcw,
  Shield,
} from "lucide-react";
import ProductCard from "../shared/ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  discount: number;
  isNew: boolean;
  category: string;
  description?: string;
  sizes?: number[];
  colors?: { name: string; value: string }[];
  rating?: number;
  reviews?: number;
  images?: string[];
}

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);

  // Mock product data
  const product: Product = {
    id: id || "1",
    name: "Nike Air Max 270",
    price: 150,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
    discount: 10,
    isNew: true,
    category: "Running",
    description:
      "The Nike Air Max 270 delivers a plush ride with a large Max Air unit in the heel and a lifestyle-focused design. The sleek, running-inspired look combines with a comfortable, supportive feel for all-day wear.",
    sizes: [7, 8, 9, 10, 11, 12],
    colors: [
      { name: "Black", value: "#000000" },
      { name: "White", value: "#FFFFFF" },
      { name: "Red", value: "#FF0000" },
      { name: "Blue", value: "#0000FF" },
    ],
    rating: 4.5,
    reviews: 128,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80",
      "https://images.unsplash.com/photo-1607522370275-f14206abe5d3?w=500&q=80",
    ],
  };

  // Mock related products
  const relatedProducts: Product[] = [
    {
      id: "2",
      name: "Adidas Ultraboost 21",
      price: 180,
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80",
      discount: 0,
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
  ];

  const discountedPrice =
    product.discount > 0
      ? product.price - (product.price * product.discount) / 100
      : product.price;

  const handleQuantityChange = (value: number) => {
    if (value >= 1) setQuantity(value);
  };

  const handleAddToCart = () => {};

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-6">
            <a href="/" className="hover:text-primary">
              Home
            </a>{" "}
            /{" "}
            <a href="/products" className="hover:text-primary">
              Products
            </a>{" "}
            /{" "}
            <a
              href={`/products/${product.category.toLowerCase()}`}
              className="hover:text-primary"
            >
              {product.category}
            </a>{" "}
            / <span className="text-gray-700">{product.name}</span>
          </div>

          {/* Product Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={product.images?.[activeImage] || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <div
                      key={index}
                      className={`aspect-square overflow-hidden rounded-md cursor-pointer ${
                        index === activeImage ? "ring-2 ring-primary" : ""
                      }`}
                      onClick={() => setActiveImage(index)}
                    >
                      <img
                        src={image}
                        alt={`${product.name} - View ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              {product.isNew && (
                <div className="inline-block bg-blue-500 text-white text-xs font-medium px-2.5 py-0.5 rounded-full mb-2">
                  New
                </div>
              )}
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating || 0)
                          ? "text-yellow-400 fill-yellow-400"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="mb-6">
                {product.discount > 0 ? (
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-gray-900 mr-2">
                      ${discountedPrice.toFixed(2)}
                    </span>
                    <span className="text-lg text-gray-500 line-through">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2.5 py-0.5 rounded">
                      {product.discount}% OFF
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                )}
              </div>

              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* Color Selection */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 mb-2">
                    Color
                  </h3>
                  <div className="flex space-x-2">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        type="button"
                        className={`w-8 h-8 rounded-full border ${
                          selectedColor === color.name
                            ? "ring-2 ring-primary ring-offset-2"
                            : "border-gray-300"
                        }`}
                        style={{ backgroundColor: color.value }}
                        onClick={() => setSelectedColor(color.name)}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-900">Size</h3>
                    <a
                      href="#"
                      className="text-sm font-medium text-primary hover:text-primary/80"
                    >
                      Size Guide
                    </a>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {product.sizes.map((size) => (
                      <Button
                        key={size}
                        variant="outline"
                        className={`py-2 px-3 text-sm font-medium rounded-md ${
                          selectedSize === size.toString()
                            ? "bg-primary text-white"
                            : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                        }`}
                        onClick={() => setSelectedSize(size.toString())}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quantity */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-900 mb-2">
                  Quantity
                </h3>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      handleQuantityChange(Math.max(1, quantity - 1))
                    }
                  >
                    -
                  </Button>
                  <span className="text-lg font-medium">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleQuantityChange(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="flex-1" size="lg" onClick={handleAddToCart}>
                  <ShoppingBag className="mr-2 h-5 w-5" /> Add to Cart
                </Button>
                <Button variant="outline" size="lg">
                  <Heart className="mr-2 h-5 w-5" /> Add to Wishlist
                </Button>
              </div>

              {/* Product Features */}
              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="flex items-center">
                  <Truck className="h-5 w-5 mr-2 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    Free shipping on orders over $100
                  </span>
                </div>
                <div className="flex items-center">
                  <RotateCcw className="h-5 w-5 mr-2 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    Free 30-day returns
                  </span>
                </div>
                <div className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-gray-500" />
                  <span className="text-sm text-gray-600">2-year warranty</span>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mb-16">
            <Tabs defaultValue="description">
              <TabsList className="w-full justify-start border-b mb-6">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="description" className="text-gray-600">
                <p className="mb-4">
                  The Nike Air Max 270 delivers a plush ride with a large Max
                  Air unit in the heel and a lifestyle-focused design. The
                  sleek, running-inspired look combines with a comfortable,
                  supportive feel for all-day wear.
                </p>
                <p className="mb-4">
                  The shoe's exaggerated heel and stretchy inner sleeve create a
                  secure, sock-like fit, while the lightweight mesh upper
                  provides breathability. The large Max Air unit—the first of
                  its kind—delivers enhanced cushioning with every step.
                </p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Mesh upper provides lightweight breathability</li>
                  <li>Stretchy inner sleeve creates a secure, sock-like fit</li>
                  <li>
                    Large Max Air unit delivers enhanced cushioning with every
                    step
                  </li>
                  <li>Rubber toe tip provides durability</li>
                  <li>Rubber outsole delivers excellent traction</li>
                </ul>
              </TabsContent>
              <TabsContent value="specifications" className="text-gray-600">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Product Details
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex">
                        <span className="font-medium w-32">Style:</span>
                        <span>AH8050-100</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-32">Color:</span>
                        <span>White/Black/Volt</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-32">Material:</span>
                        <span>Mesh, Synthetic</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-32">Closure:</span>
                        <span>Lace-up</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-32">Heel Height:</span>
                        <span>32mm</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-4">Size & Fit</h3>
                    <ul className="space-y-2">
                      <li className="flex">
                        <span className="font-medium w-32">Fit:</span>
                        <span>True to size</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-32">Width:</span>
                        <span>Medium</span>
                      </li>
                      <li className="flex">
                        <span className="font-medium w-32">Weight:</span>
                        <span>11.2 oz / 318 g</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews">
                <div className="space-y-8">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-medium">Customer Reviews</h3>
                      <div className="flex items-center mt-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating || 0)
                                  ? "text-yellow-400 fill-yellow-400"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">
                          Based on {product.reviews} reviews
                        </span>
                      </div>
                    </div>
                    <Button>Write a Review</Button>
                  </div>

                  {/* Sample Reviews */}
                  <div className="border-t border-gray-200 pt-6 space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Great comfort and style</h4>
                        <span className="text-sm text-gray-500">
                          2 days ago
                        </span>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < 5
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">
                        These shoes are incredibly comfortable and stylish. I've
                        been wearing them daily for two weeks now and they still
                        feel great. The cushioning is perfect for all-day wear.
                      </p>
                      <p className="text-sm text-gray-500">John D.</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Good but runs small</h4>
                        <span className="text-sm text-gray-500">
                          1 week ago
                        </span>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < 4
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">
                        I love the design and quality of these shoes, but they
                        run a bit small. I would recommend ordering a half size
                        up. Otherwise, they're great for casual wear.
                      </p>
                      <p className="text-sm text-gray-500">Sarah M.</p>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-medium">Perfect for running</h4>
                        <span className="text-sm text-gray-500">
                          2 weeks ago
                        </span>
                      </div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < 5
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">
                        I've been using these for my daily 5k runs and they
                        provide excellent support and cushioning. The
                        breathability is also great for longer runs. Highly
                        recommend!
                      </p>
                      <p className="text-sm text-gray-500">Mike T.</p>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    Load More Reviews
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          <div>
            <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
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
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
