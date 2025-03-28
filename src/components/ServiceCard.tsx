
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  className?: string;
}

const ServiceCard = ({
  title,
  description,
  icon: Icon,
  iconColor = "text-cargo-green",
  className,
}: ServiceCardProps) => {
  return (
    <Card className={cn("card-hover h-full flex flex-col", className)}>
      <CardHeader>
        <div className={cn("rounded-full w-12 h-12 flex items-center justify-center mb-4", 
          iconColor === "text-cargo-green" ? "bg-cargo-lightGreen" : 
          iconColor === "text-cargo-black" ? "bg-gray-100" :
          "bg-gray-100"
        )}>
          <Icon className={cn("h-6 w-6", iconColor)} />
        </div>
        <CardTitle className="text-lg font-semibold text-black">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full hover:bg-cargo-lightGreen hover:text-cargo-green transition-colors tap-target">
          Learn More
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
