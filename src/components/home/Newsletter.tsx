import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface NewsletterProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  placeholder?: string;
  bgColor?: string;
}

const Newsletter = ({
  title = "Subscribe to Our Newsletter",
  subtitle = "Get the latest updates on new products and upcoming sales",
  buttonText = "Subscribe",
  placeholder = "Your email address",
  bgColor = "bg-primary",
}: NewsletterProps) => {
  return (
    <section className={`${bgColor} py-16`}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
          <p className="text-white/80 mb-8">{subtitle}</p>

          <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder={placeholder}
              className="flex-grow bg-white/10 text-white placeholder:text-white/60 border-white/20 focus-visible:ring-white"
              required
            />
            <Button
              type="submit"
              className="bg-white text-primary hover:bg-white/90"
            >
              {buttonText}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
