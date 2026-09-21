interface DestinationInfo {
  city: string;
  description: string;
  areas: string[];
  heroImage?: string;
}

interface UAELocationInfo {
  city: string;
  description: string;
}

export const PAKISTAN_DESTINATIONS = {
  karachi: {
    city: "Karachi",
    description: "We provide comprehensive cargo solutions from UAE to Karachi, Pakistan's largest city and economic hub. Our services are designed to meet all your shipping needs with reliability and efficiency.",
    areas: [
      "Clifton", 
      "Defence", 
      "Gulshan-e-Iqbal",
      "North Nazimabad",
      "Saddar",
      "Korangi"
    ],
  },
  lahore: {
    city: "Lahore",
    description: "We provide comprehensive cargo solutions from UAE to Lahore, Pakistan's cultural capital. Our reliable services ensure your shipments reach Lahore safely with door-to-door delivery options throughout the city.",
    areas: [
      "Gulberg", 
      "Defence", 
      "Model Town",
      "Johar Town",
      "Cantt",
      "Garden Town"
    ],
  },
  islamabad: {
    city: "Islamabad",
    description: "We provide comprehensive cargo solutions from UAE to Islamabad, Pakistan's federal capital. Our professional services ensure secure delivery across all F-sectors and surrounding areas.",
    areas: [
      "F-6", 
      "F-7", 
      "F-8",
      "F-10",
      "F-11",
      "G-9"
    ],
  },
  peshawar: {
    city: "Peshawar",
    description: "We provide comprehensive cargo solutions from UAE to Peshawar, a historic city in Pakistan. Our services are designed to meet all your shipping needs with reliability and efficiency.",
    areas: [
      "Hayatabad", 
      "University Town", 
      "Saddar",
      "Gulbahar",
      "Cantt",
      "Warsak Road"
    ],
  },
  faisalabad: {
    city: "Faisalabad",
    description: "We provide comprehensive cargo solutions from UAE to Faisalabad, Pakistan's textile hub. Our reliable services ensure your shipments reach Faisalabad safely with door-to-door delivery options throughout the city.",
    areas: [
      "D Ground", 
      "Madina Town", 
      "People's Colony",
      "Gulberg",
      "Susan Road",
      "Ghulam Muhammad Abad"
    ],
    heroImage: "/images/faisalabad-hero.jpg"
  },
  multan: {
    city: "Multan",
    description: "We provide comprehensive cargo solutions from UAE to Multan, the City of Saints. Our reliable and efficient shipping services ensure your cargo reaches Multan safely with convenient door-to-door delivery options.",
    areas: [
      "Gulgasht Colony", 
      "Cantt", 
      "Model Town",
      "Shah Rukn-e-Alam",
      "Mumtazabad",
      "Garden Town"
    ],
    heroImage: "/images/multan-hero.jpg"
  },
  sialkot: {
    city: "Sialkot",
    description: "We provide comprehensive cargo solutions from UAE to Sialkot, Pakistan's industrial hub known for sports goods and surgical instruments. Our services ensure efficient, secure shipping with door-to-door delivery options throughout Sialkot.",
    areas: [
      "Cantt", 
      "Paris Road", 
      "Kashmir Road",
      "Model Town",
      "Small Industrial Estate",
      "Zafarwal Road"
    ],
    heroImage: "/images/sialkot-hero.jpg"
  },
  quetta: {
    city: "Quetta",
    description: "We provide comprehensive cargo solutions from UAE to Quetta, the provincial capital of Balochistan. Our reliable services ensure your cargo reaches Quetta safely with door-to-door delivery options.",
    areas: [
      "Cantt", 
      "Satellite Town", 
      "Jinnah Town",
      "Brewery Road",
      "Zarghoon Road",
      "Samungli Road"
    ],
  },
  sukkur: {
    city: "Sukkur",
    description: "We provide comprehensive cargo solutions from UAE to Sukkur, an important commercial center in Sindh. Our services ensure reliable delivery across the city and surrounding areas.",
    areas: [
      "Civil Lines", 
      "New Sukkur", 
      "Barrage Colony",
      "Labour Colony",
      "Station Road",
      "Minara Road"
    ],
  },
  larkana: {
    city: "Larkana",
    description: "We provide comprehensive cargo solutions from UAE to Larkana, a historic city in Sindh province. Our reliable services ensure secure delivery throughout the city.",
    areas: [
      "Station Road", 
      "Jinnah Bagh", 
      "Civil Hospital Road",
      "Naudero",
      "Bakrani",
      "Warrah"
    ],
  },
  sargodha: {
    city: "Sargodha",
    description: "We provide comprehensive cargo solutions from UAE to Sargodha, known as the City of Eagles. Our professional services ensure reliable delivery across all areas of the city.",
    areas: [
      "Satellite Town", 
      "Officers Colony", 
      "Civil Lines",
      "University Road",
      "Stadium Road",
      "Jail Road"
    ],
  },
  bahawalpur: {
    city: "Bahawalpur",
    description: "We provide comprehensive cargo solutions from UAE to Bahawalpur, a historic city in southern Punjab. Our services ensure efficient delivery across the city and surrounding areas.",
    areas: [
      "Model Town", 
      "Satellite Town", 
      "Civil Lines",
      "Farid Gate",
      "Ahmedpur East",
      "Baghdad ul Jadeed"
    ],
  },
  hyderabad: {
    city: "Hyderabad",
    description: "We provide comprehensive cargo solutions from UAE to Hyderabad, an important city in Sindh province. Our reliable services ensure secure delivery throughout the city.",
    areas: [
      "Latifabad", 
      "Qasimabad", 
      "Cantonment",
      "Hirabad",
      "Hussainabad",
      "Thandi Sarak"
    ],
  },
  rawalpindi: {
    city: "Rawalpindi",
    description: "We provide comprehensive cargo solutions from UAE to Rawalpindi, the twin city of Islamabad. Our professional services ensure reliable delivery across all areas of the city.",
    areas: [
      "Saddar", 
      "Cantt", 
      "Committee Chowk",
      "Commercial Market",
      "Westridge",
      "Chaklala"
    ],
  },
  gujranwala: {
    city: "Gujranwala",
    description: "We provide comprehensive cargo solutions from UAE to Gujranwala, an important industrial city in Punjab. Our services ensure efficient delivery across the city.",
    areas: [
      "Model Town", 
      "Satellite Town", 
      "Civil Lines",
      "Wapda Town",
      "People's Colony",
      "Rehman Pura"
    ],
  },
  sheikhupura: {
    city: "Sheikhupura",
    description: "We provide comprehensive cargo solutions from UAE to Sheikhupura, a historic city near Lahore. Our reliable services ensure secure delivery throughout the city.",
    areas: [
      "Civil Lines", 
      "Model Town", 
      "Satellite Town",
      "Railway Road",
      "GT Road",
      "Cantt"
    ],
  }
};

export const UAE_LOCATIONS: Record<string, UAELocationInfo> = {
  dubai: {
    city: "Dubai",
    description: "Our door-to-door cargo service from Dubai to Pakistan offers a seamless shipping experience with pickup from your location in Dubai and delivery directly to your recipient's doorstep in Pakistan."
  },
  "abu-dhabi": {
    city: "Abu Dhabi",
    description: "Our comprehensive cargo service from Abu Dhabi to Pakistan provides reliable and cost-effective shipping solutions with door-to-door pickup and delivery options."
  },
  sharjah: {
    city: "Sharjah",
    description: "Our efficient cargo service from Sharjah to Pakistan delivers your shipments reliably and on time, with convenient pickup from any location in Sharjah and delivery to destinations across Pakistan."
  },
  ajman: {
    city: "Ajman",
    description: "Our complete door-to-door cargo service from Ajman to Pakistan takes care of everything from collection at your location to delivery at your recipient's doorstep with professional handling throughout."
  }
};
