import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  id?: string;
  name?: string;
  price?: number;
  image?: string;
  discount?: number;
  isNew?: boolean;
  category?: string;
}

const ProductCard = ({
  id = "1",
  name = "Nike Air Max 270",
  price = 150,
  image = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",
  discount = 0,
  isNew = false,
  category = "Running",
}: ProductCardProps) => {
  const discountedPrice =
    discount > 0 ? price - (price * discount) / 100 : price;

  return (
    <Card className="overflow-hidden h-full bg-white transition-all duration-200 hover:shadow-lg">
      <div className="relative">
        <div className="h-48 overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && (
            <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>
          )}
          {discount > 0 && (
            <Badge className="bg-red-500 hover:bg-red-600">-{discount}%</Badge>
          )}
        </div>
      </div>
      <CardContent className="p-4">
        <div className="text-sm text-muted-foreground mb-1">{category}</div>
        <h3 className="font-medium text-lg mb-1 line-clamp-1">{name}</h3>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            {discount > 0 && (
              <span className="text-sm text-muted-foreground line-through">
                ${price}
              </span>
            )}
            <span className="font-bold text-lg">${discountedPrice}</span>
          </div>
          <Button size="sm" className="rounded-full w-10 h-10 p-0">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
