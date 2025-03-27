import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Input } from "../ui/input";
import { ShoppingBag, Search, Menu, X, User, Heart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const categories = [
  {
    title: "Men",
    featured: [
      { name: "Running", href: "/men/running" },
      { name: "Training & Gym", href: "/men/training" },
      { name: "Basketball", href: "/men/basketball" },
      { name: "Casual", href: "/men/casual" },
      { name: "Sandals & Slides", href: "/men/sandals" },
    ],
  },
  {
    title: "Women",
    featured: [
      { name: "Running", href: "/women/running" },
      { name: "Training & Gym", href: "/women/training" },
      { name: "Walking", href: "/women/walking" },
      { name: "Casual", href: "/women/casual" },
      { name: "Sandals & Slides", href: "/women/sandals" },
    ],
  },
  {
    title: "Kids",
    featured: [
      { name: "Boys Shoes", href: "/kids/boys" },
      { name: "Girls Shoes", href: "/kids/girls" },
      { name: "Baby & Toddler", href: "/kids/toddler" },
    ],
  },
];

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold">
              ShoeStore
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {categories.map((category) => (
                  <NavigationMenuItem key={category.title}>
                    <NavigationMenuTrigger>
                      {category.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                        {category.featured.map((item) => (
                          <li key={item.name}>
                            <NavigationMenuLink asChild>
                              <Link
                                to={item.href}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {item.name}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <Link
                    to="/sale"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                    Sale
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:flex items-center ml-auto mr-4">
            {showSearch ? (
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search for products..."
                  className="w-64"
                  autoFocus
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0"
                  onClick={() => setShowSearch(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSearch(true)}
              >
                <Search className="h-5 w-5" />
              </Button>
            )}
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/wishlist">
                <Heart className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/account">
                <User className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/cart">
                <div className="relative">
                  <ShoppingBag className="h-5 w-5" />
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
                    3
                  </span>
                </div>
              </Link>
            </Button>

            {/* Mobile Menu */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col h-full">
                    <div className="py-4">
                      <Input
                        type="search"
                        placeholder="Search for products..."
                        className="w-full"
                      />
                    </div>
                    <nav className="flex flex-col space-y-4">
                      {categories.map((category) => (
                        <div key={category.title} className="space-y-2">
                          <h3 className="font-medium">{category.title}</h3>
                          <ul className="pl-4 space-y-2">
                            {category.featured.map((item) => (
                              <li key={item.name}>
                                <Link
                                  to={item.href}
                                  className="text-sm text-muted-foreground hover:text-foreground"
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <Link
                        to="/sale"
                        className="font-medium text-red-500 hover:text-red-600"
                      >
                        Sale
                      </Link>
                    </nav>
                    <div className="mt-auto pt-4 border-t space-y-4">
                      <Link
                        to="/account"
                        className="flex items-center space-x-2 text-sm"
                      >
                        <User className="h-4 w-4" />
                        <span>My Account</span>
                      </Link>
                      <Link
                        to="/wishlist"
                        className="flex items-center space-x-2 text-sm"
                      >
                        <Heart className="h-4 w-4" />
                        <span>Wishlist</span>
                      </Link>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
