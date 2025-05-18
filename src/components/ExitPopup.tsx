
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Check, Phone } from "lucide-react";

const ExitPopup = () => {
  // Disable the popup completely by setting isOpen to false and never changing it
  const [isOpen, setIsOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  // Not attaching event listeners anymore
  
  const handleCall = () => {
    // Record that the user interacted with the call button
    sessionStorage.setItem("hasSeenExitPopup", "true");
    
    // Show toast notification
    toast({
      title: "Making a call",
      description: "Redirecting you to make a call to our support.",
    });
    
    // Attempt to make a phone call or copy number
    window.location.href = "tel:+971504948135";
    
    // Close dialog after interaction
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenExitPopup", "true");
  };

  // Return null instead of rendering the Dialog
  return null;
  
  /* Commented out original return
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px] border-cargo-green border-2 shadow-lg animate-fade-in">
        <DialogHeader className="border-b pb-3">
          <DialogTitle className="text-cargo-blue text-xl flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-cargo-green flex items-center justify-center text-white text-xs">
              40%
            </div>
            Wait! Don't Miss Out!
          </DialogTitle>
          <DialogDescription className="text-gray-700">
            Get upto 40% off discount if you are moving back to Pakistan after staying 2 years in UAE.
          </DialogDescription>
        </DialogHeader>

        {isSubscribed ? (
          <div className="py-6 flex flex-col items-center text-center">
            <div className="rounded-full bg-green-100 p-3 mb-4 animate-pulse-light">
              <Check className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Thank You!</h3>
            <p className="text-gray-500">
              Our team will assist you with your discount.
            </p>
          </div>
        ) : (
          <div>
            <div className="flex flex-col gap-4 py-4 animate-fade-in">
              <div className="flex items-center gap-3 bg-cargo-lightGreen p-3 rounded-lg">
                <div className="h-12 w-12 rounded-full bg-cargo-orange flex items-center justify-center text-white text-lg font-bold shadow-md">
                  40%
                </div>
                <div className="font-medium text-cargo-blue">Special Moving Discount</div>
              </div>
              <p className="text-gray-600 bg-cargo-gray p-3 rounded-md border-l-4 border-cargo-green">
                Contact us now to claim your exclusive discount for moving back to Pakistan!
              </p>
            </div>
            <DialogFooter className="gap-3 pt-3 border-t">
              <Button 
                variant="outline" 
                onClick={handleClose}
                className="tap-target hover:bg-gray-100 transition-all"
              >
                No Thanks
              </Button>
              <Button 
                onClick={handleCall} 
                className="bg-cargo-orange hover:bg-orange-600 tap-target flex items-center gap-2 shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              >
                <Phone size={16} strokeWidth={2.5} />
                Call us using +971504948135
              </Button>
            </DialogFooter>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
  */
};

export default ExitPopup;
