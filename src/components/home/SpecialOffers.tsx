import { Button } from "../ui/button";

interface Offer {
  id: string;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  alignment: "left" | "right";
}

interface SpecialOffersProps {
  offers?: Offer[];
}

const SpecialOffers = ({
  offers = [
    {
      id: "1",
      title: "Summer Collection 2024",
      description:
        "Discover our new summer collection with breathable and stylish shoes perfect for the hot season. Up to 30% off on selected items.",
      image:
        "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800&q=80",
      buttonText: "Shop Collection",
      buttonLink: "/summer-collection",
      alignment: "left" as const,
    },
    {
      id: "2",
      title: "Limited Edition Series",
      description:
        "Exclusive designs available for a limited time only. Don't miss the chance to own these unique pieces crafted with premium materials.",
      image:
        "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80",
      buttonText: "Explore Limited Edition",
      buttonLink: "/limited-edition",
      alignment: "right" as const,
    },
  ],
}: SpecialOffersProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {offers.map((offer, index) => (
          <div
            key={offer.id}
            className={`flex flex-col ${index !== offers.length - 1 ? "mb-16" : ""} ${offer.alignment === "right" ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-center`}
          >
            <div className="w-full md:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">{offer.title}</h2>
              <p className="text-gray-600 mb-6">{offer.description}</p>
              <Button size="lg" asChild>
                <a href={offer.buttonLink}>{offer.buttonText}</a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
