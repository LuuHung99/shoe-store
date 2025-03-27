import { useState } from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Button } from "../ui/button";
import { Heart, ShoppingBag, X } from "lucide-react";

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
  discount: number;
  isNew: boolean;
  category: string;
  inStock: boolean;
}

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: "1",
      name: "Nike Air Max 270",
      price: 150,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
      discount: 0,
      isNew: true,
      category: "Running",
      inStock: true,
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
      inStock: true,
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
      inStock: false,
    },
  ]);

  const removeItem = (id: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== id));
  };

  const moveAllToCart = () => {
    // In a real app, this would add all items to the cart
    alert("All items moved to cart!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <h1 className="text-3xl font-bold">My Wishlist</h1>
            {wishlistItems.length > 0 && (
              <div className="mt-4 md:mt-0">
                <Button onClick={moveAllToCart}>
                  <ShoppingBag className="mr-2 h-4 w-4" /> Move All to Cart
                </Button>
              </div>
            )}
          </div>

          {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden relative group"
                >
                  <button
                    onClick={() => removeItem(item.id)}
                    className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-sm z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <div className="aspect-square bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg mb-1 line-clamp-1">
                      {item.name}
                    </h3>
                    <div className="text-sm text-muted-foreground mb-2">
                      {item.category}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {item.discount > 0 ? (
                          <>
                            <span className="text-sm text-muted-foreground line-through">
                              ${item.price}
                            </span>
                            <span className="font-bold">
                              $
                              {(
                                item.price -
                                (item.price * item.discount) / 100
                              ).toFixed(2)}
                            </span>
                          </>
                        ) : (
                          <span className="font-bold">${item.price}</span>
                        )}
                      </div>
                      <div>
                        {item.inStock ? (
                          <span className="text-sm text-green-600">
                            In Stock
                          </span>
                        ) : (
                          <span className="text-sm text-red-600">
                            Out of Stock
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mt-4">
                      <Button className="w-full" disabled={!item.inStock}>
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        {item.inStock ? "Add to Cart" : "Out of Stock"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <Heart className="h-8 w-8 text-gray-500" />
              </div>
              <h2 className="text-2xl font-medium mb-2">
                Your wishlist is empty
              </h2>
              <p className="text-gray-500 mb-6">
                Save your favorite items to your wishlist to purchase them
                later.
              </p>
              <Button asChild>
                <a href="/products">Explore Products</a>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Wishlist;
