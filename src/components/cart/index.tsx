import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { removeFromCart, updateQuantity } from "../../store/features/cartSlice";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "discount10") {
      setPromoApplied(true);
    } else {
      alert("Invalid promo code");
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal - discount + shipping;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="p-6">
                    <h2 className="text-lg font-medium mb-4">
                      Cart Items ({cartItems.length})
                    </h2>
                    <div className="divide-y">
                      {cartItems.map((item) => (
                        <div
                          key={item.product.id}
                          className="py-6 flex flex-wrap md:flex-nowrap"
                        >
                          <div className="w-full md:w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 md:ml-6 mt-4 md:mt-0">
                            <div className="flex justify-between">
                              <h3 className="text-base font-medium">
                                {item.product.name}
                              </h3>
                              <button
                                onClick={() =>
                                  handleRemoveItem(item.product.id)
                                }
                                className="text-gray-400 hover:text-gray-600"
                              >
                                <X className="h-5 w-5" />
                              </button>
                            </div>
                            <div className="mt-4 flex justify-between items-center">
                              <div className="flex items-center border rounded-md">
                                <button
                                  className="p-2"
                                  onClick={() =>
                                    handleUpdateQuantity(
                                      item.product.id,
                                      item.quantity - 1
                                    )
                                  }
                                >
                                  <Minus className="h-4 w-4" />
                                </button>
                                <span className="px-4">{item.quantity}</span>
                                <button
                                  className="p-2"
                                  onClick={() =>
                                    handleUpdateQuantity(
                                      item.product.id,
                                      item.quantity + 1
                                    )
                                  }
                                >
                                  <Plus className="h-4 w-4" />
                                </button>
                              </div>
                              <div className="font-medium">
                                $
                                {(item.product.price * item.quantity).toFixed(
                                  2
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm overflow-hidden sticky top-20">
                  <div className="p-6">
                    <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                      </div>
                      {promoApplied && (
                        <div className="flex justify-between text-green-600">
                          <span>Discount (10%)</span>
                          <span>-${discount.toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span className="text-gray-600">Shipping</span>
                        <span>
                          {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                        </span>
                      </div>
                      <div className="border-t pt-4 flex justify-between font-medium">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="flex space-x-2">
                        <Input
                          placeholder="Promo code"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          disabled={promoApplied}
                        />
                        <Button
                          variant="outline"
                          onClick={applyPromoCode}
                          disabled={promoApplied || !promoCode}
                        >
                          Apply
                        </Button>
                      </div>
                      {promoApplied && (
                        <p className="text-sm text-green-600 mt-2">
                          Promo code applied successfully!
                        </p>
                      )}
                    </div>

                    <Button className="w-full mt-6" size="lg" asChild>
                      <a href="/checkout">Proceed to Checkout</a>
                    </Button>

                    <div className="mt-4 text-center">
                      <a
                        href="/products"
                        className="text-sm text-primary hover:underline"
                      >
                        Continue Shopping
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4">
                <ShoppingBag className="h-8 w-8 text-gray-500" />
              </div>
              <h2 className="text-2xl font-medium mb-2">Your cart is empty</h2>
              <p className="text-gray-500 mb-6">
                Looks like you haven't added any products to your cart yet.
              </p>
              <Button asChild>
                <a href="/products">Start Shopping</a>
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
