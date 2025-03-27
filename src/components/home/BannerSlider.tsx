import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { Button } from "../ui/button";

interface BannerSlide {
  id: string;
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  image: string;
}

interface BannerSliderProps {
  slides?: BannerSlide[];
}

const BannerSlider = ({
  slides = [
    {
      id: "1",
      title: "New Collection 2024",
      subtitle: "Discover the latest trends in footwear",
      buttonText: "Shop Now",
      buttonLink: "/products",
      image:
        "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=1400&q=80",
    },
    {
      id: "2",
      title: "Summer Sale",
      subtitle: "Up to 50% off on selected items",
      buttonText: "View Offers",
      buttonLink: "/sale",
      image:
        "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1400&q=80",
    },
    {
      id: "3",
      title: "Premium Comfort",
      subtitle: "Experience the ultimate comfort with our new line",
      buttonText: "Explore",
      buttonLink: "/premium",
      image:
        "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=1400&q=80",
    },
  ],
}: BannerSliderProps) => {
  return (
    <div className="relative w-full bg-background">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div className="relative h-[600px] w-full overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center">
                  <div className="container mx-auto px-4 md:px-6 lg:px-8">
                    <div className="max-w-lg text-white">
                      <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                      <p className="text-xl mb-6">{slide.subtitle}</p>
                      <Button
                        size="lg"
                        className="bg-white text-black hover:bg-gray-200"
                        asChild
                      >
                        <a href={slide.buttonLink}>{slide.buttonText}</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-4" />
      </Carousel>
    </div>
  );
};

export default BannerSlider;
