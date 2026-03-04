import React, { createContext, useContext, useState, useEffect } from "react";

// Define what information is available to the rest of the app
interface ContactContextType {
  handleContact: (type: "whatsapp" | "call") => void;
  customerName: string;
}

const ContactContext = createContext<ContactContextType | undefined>(undefined);

export const ContactProvider = ({ children }: { children: React.ReactNode }) => {
  const [customerName, setCustomerName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [pendingAction, setPendingAction] = useState<"whatsapp" | "call" | null>(null);
  const [tempName, setTempName] = useState("");

  // Load name from cookie on startup
  useEffect(() => {
    const nameCookie = document.cookie.split("; ").find(row => row.startsWith("customer_name="));
    if (nameCookie) {
      setCustomerName(decodeURIComponent(nameCookie.split("=")[1]));
    }
  }, []);

  // The main function used by every button on your site
  const handleContact = (type: "whatsapp" | "call") => {
    if (customerName) {
      // If we already know them, go straight to the action
      executeAction(type, customerName);
    } else {
      // If new, save the intent and show the Urdu popup
      setPendingAction(type);
      setShowModal(true);
    }
  };

  const executeAction = (type: "whatsapp" | "call", name?: string) => {
    const phone = "971504948135";
    if (type === "whatsapp") {
      const msg = name 
        ? `Hi, I am ${name}. I need a cargo quote to Pakistan.` 
        : "Hi, I need a cargo quote to Pakistan.";
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
    } else {
      window.location.href = `tel:+${phone}`;
    }
  };

  const submitName = () => {
    const cleanName = tempName.trim();
    if (cleanName) {
      // Save name for 90 days
      const expiry = new Date();
      expiry.setDate(expiry.getDate() + 90);
      document.cookie = `customer_name=${encodeURIComponent(cleanName)}; expires=${expiry.toUTCString()}; path=/; SameSite=Lax; Secure`;
      
      setCustomerName(cleanName);
      if (pendingAction) executeAction(pendingAction, cleanName);
    } else if (pendingAction) {
      // If they leave it blank and hit continue, just proceed
      executeAction(pendingAction);
    }
    setShowModal(false);
    setTempName("");
  };

  return (
    <ContactContext.Provider value={{ handleContact, customerName }}>
      {children}

      {/* --- GLOBAL URDU NAME CAPTURE MODAL --- */}
      {showModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full overflow-hidden animate-in zoom-in duration-300">
            
            {/* Header: Respectful Urdu Greeting */}
            <div className="bg-cargo-blue p-6 text-white text-center">
              <h3 className="text-2xl font-bold mb-2 leading-relaxed" dir="rtl">
                اپنی پہچان بتائیں، بہترین رہنمائی پائیں
              </h3>
              <p className="text-blue-100 text-sm font-medium italic">
                Share your name for the best guidance
              </p>
            </div>
            
            <div className="p-6">
              <label className="block text-gray-700 font-bold mb-3">What is your name</label>
              
              <input 
                type="text" 
                placeholder="نام یہاں لکھیں (Enter Name)..."
                className="w-full border-2 border-gray-100 rounded-xl px-4 py-4 outline-none focus:border-cargo-orange transition-all text-cargo-blue font-bold text-lg shadow-inner"
                dir="auto"
                value={tempName}
                onChange={(e) => setTempName(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && submitName()}
                autoFocus
              />
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <button 
                  onClick={() => { setShowModal(false); if(pendingAction) executeAction(pendingAction); }} 
                  className="text-gray-400 font-bold hover:text-gray-600 transition-colors py-2 text-sm"
                >
                  Skip
                </button>
                <button 
                  onClick={submitName} 
                  className="bg-cargo-orange text-white font-black py-4 rounded-xl hover:bg-orange-600 shadow-lg transition-all active:scale-95 text-lg"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </ContactContext.Provider>
  );
};

// Custom hook to use this context easily in any component
export const useContact = () => {
  const context = useContext(ContactContext);
  if (context === undefined) {
    throw new Error("useContact must be used within a ContactProvider");
  }
  return context;
};