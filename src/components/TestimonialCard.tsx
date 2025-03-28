
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  position?: string;
  testimonial: string;
  rating: number;
  imageUrl?: string;
}

const TestimonialCard = ({
  name,
  position,
  testimonial,
  rating,
  imageUrl,
}: TestimonialCardProps) => {
  return (
    <Card className="card-hover h-full">
      <CardContent className="pt-6 flex flex-col h-full">
        {/* Rating Stars */}
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${
                i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              }`}
            />
          ))}
        </div>
        
        {/* Testimonial Text */}
        <p className="text-gray-600 mb-6 flex-grow">"{testimonial}"</p>
        
        {/* Customer Info */}
        <div className="flex items-center mt-auto">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={imageUrl} alt={name} />
            <AvatarFallback className="bg-cargo-blue text-white">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium text-cargo-blue">{name}</h4>
            {position && <p className="text-sm text-gray-500">{position}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
