
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Check } from "lucide-react";

const ExitPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const { toast } = useToast();

  // Handle exit intent
  useEffect(() => {
    const handleExitIntent = (e: MouseEvent) => {
      // Only trigger once and when mouse leaves the top of the page
      if (!hasTriggered && e.clientY <= 20) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    // Check if user has already seen the popup
    const hasSeenPopup = sessionStorage.getItem("hasSeenExitPopup");
    if (hasSeenPopup !== "true") {
      document.addEventListener("mouseleave", handleExitIntent);
    }

    return () => {
      document.removeEventListener("mouseleave", handleExitIntent);
    };
  }, [hasTriggered]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      sessionStorage.setItem("hasSeenExitPopup", "true");
      
      toast({
        title: "Subscribed Successfully!",
        description: "Thank you for subscribing to our newsletter.",
      });
      
      // Close dialog after success message
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    }, 1000);
  };

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenExitPopup", "true");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-cargo-blue text-xl">
            Wait! Don't Miss Out!
          </DialogTitle>
          <DialogDescription>
            Get 10% off your first shipment when you subscribe to our newsletter.
          </DialogDescription>
        </DialogHeader>

        {isSubscribed ? (
          <div className="py-6 flex flex-col items-center text-center">
            <div className="rounded-full bg-green-100 p-3 mb-4">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Thank You!</h3>
            <p className="text-gray-500">
              Your discount code has been sent to your email.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubscribe}>
            <div className="flex flex-col gap-4 py-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-cargo-orange flex items-center justify-center text-white">
                  10%
                </div>
                <div className="font-medium">Special Discount</div>
              </div>
              <Input
                type="email"
                placeholder="your-email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="tap-target"
              />
            </div>
            <DialogFooter>
              <Button 
                variant="outline" 
                onClick={handleClose}
                className="tap-target"
              >
                No Thanks
              </Button>
              <Button 
                type="submit" 
                className="bg-cargo-orange hover:bg-orange-600 tap-target"
              >
                Get My Discount
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ExitPopup;
