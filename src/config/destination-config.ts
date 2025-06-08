
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

export const PAKISTAN_DESTINATIONS: Record<string, DestinationInfo> = {
  islamabad: {
    city: "Islamabad",
    description: "We provide comprehensive cargo solutions from UAE to Islamabad, Pakistan's capital city. Our services are designed to meet all your shipping needs with reliability and efficiency.",
    areas: ["F-6", "F-7", "F-8", "E-11", "G-10", "DHA"]
  },
  lahore: {
    city: "Lahore", 
    description: "We provide comprehensive cargo solutions from UAE to Lahore, Pakistan's cultural capital. Our services are designed to meet all your shipping needs with reliability and efficiency.",
    areas: ["Gulberg", "Defence", "Johar Town", "Model Town", "Cantt", "Bahria Town"]
  },
  karachi: {
    city: "Karachi",
    description: "We provide comprehensive cargo solutions from UAE to Karachi, Pakistan's largest port city and commercial hub. Our reliable shipping services ensure efficient delivery with door-to-door options throughout Karachi.",
    areas: ["Defence", "Gulshan", "Clifton", "North Nazimabad", "Malir", "Korangi"]
  },
  peshawar: {
    city: "Peshawar",
    description: "We provide comprehensive cargo solutions from UAE to Peshawar, the historic gateway to the Khyber Pass. Our reliable shipping services ensure your cargo reaches Peshawar safely with convenient door-to-door delivery options throughout the city.",
    areas: ["University Town", "Hayatabad", "Board Bazaar", "Saddar", "Canal Road", "Ring Road"]
  },
  quetta: {
    city: "Quetta",
    description: "We provide comprehensive cargo solutions from UAE to Quetta, the capital city of Balochistan province. Our services are designed for efficient, secure shipping with door-to-door delivery options throughout Quetta.",
    areas: ["Jinnah Road", "Satelite Town", "Samungli Housing Scheme", "Chiltan Housing Scheme", "Shahbaz Town", "Marriabad"]
  },
  faisalabad: {
    city: "Faisalabad",
    description: "We provide comprehensive cargo solutions from UAE to Faisalabad, Pakistan's textile capital. Our reliable shipping services ensure your cargo reaches Faisalabad safely with convenient door-to-door delivery options throughout the city.",
    areas: ["People's Colony", "Madina Town", "Susan Road", "Kotwali Road", "Civil Lines", "Millat Town"]
  },
  multan: {
    city: "Multan",
    description: "We provide comprehensive cargo solutions from UAE to Multan, the city of saints in southern Punjab. Our reliable shipping services ensure efficient and secure delivery with door-to-door options throughout Multan.",
    areas: ["Cantt", "Shah Rukn-e-Alam Colony", "Gulgasht Colony", "Bosan Road", "MDA", "New Multan"]
  },
  sialkot: {
    city: "Sialkot",
    description: "We provide comprehensive cargo solutions from UAE to Sialkot, Pakistan's export-oriented industrial city. Our reliable shipping services ensure your cargo reaches Sialkot safely with convenient door-to-door delivery options throughout the city.",
    areas: ["Cantt", "Allama Iqbal Town", "Paris Road", "Kashmir Road", "Rang Mahal", "Circular Road"]
  },
  rawalpindi: {
    city: "Rawalpindi",
    description: "We provide comprehensive cargo solutions from UAE to Rawalpindi, the twin city of Pakistan's capital. Our reliable shipping services ensure your cargo reaches Rawalpindi safely with convenient door-to-door delivery options throughout the city.",
    areas: ["Saddar", "Chaklala", "Bahria Town", "DHA", "Satellite Town", "Commercial Market"]
  },
  gujranwala: {
    city: "Gujranwala",
    description: "We provide comprehensive cargo solutions from UAE to Gujranwala, Pakistan's industrial city known for its ceramics and metalwork. Our reliable services ensure efficient shipping with door-to-door delivery options throughout Gujranwala.",
    areas: ["Satellite Town", "Model Town", "Peoples Colony", "DHA", "Civil Lines", "Khayaban-e-Green"]
  },
  hyderabad: {
    city: "Hyderabad",
    description: "We provide comprehensive cargo solutions from UAE to Hyderabad, the second largest city in Sindh province. Our reliable shipping services ensure your cargo reaches Hyderabad safely with convenient door-to-door delivery options throughout the city.",
    areas: ["Latifabad", "Qasimabad", "Saddar", "Market Area", "Citizen Colony", "Heerabad"]
  },
  bahawalpur: {
    city: "Bahawalpur",
    description: "We provide comprehensive cargo solutions from UAE to Bahawalpur, a historic city in Punjab province. Our reliable shipping services ensure efficient and secure delivery with door-to-door options throughout Bahawalpur.",
    areas: ["Model Town", "Satellite Town", "Yazman Road", "One Unit Colony", "Islami Colony", "Baghdad ul Jadeed"]
  },
  sargoda: {
    city: "Sargoda",
    description: "We provide comprehensive cargo solutions from UAE to Sargoda, an important commercial center in Punjab province. Our reliable shipping services ensure your cargo reaches Sargoda safely with convenient door-to-door delivery options throughout the city.",
    areas: ["Satellite Town", "Canel Colony", "Block 6", "Block 9", "Muslim Bazar", "Shaheen Abad"]
  },
  sukkur: {
    city: "Sukkur",
    description: "We provide comprehensive cargo solutions from UAE to Sukkur, a key commercial center in Sindh province. Our reliable shipping services ensure efficient and secure delivery with door-to-door options throughout Sukkur.",
    areas: ["Minara Road", "Military Road", "Barrage Colony", "Queens Road", "Station Road", "Civil Lines"]
  },
  larkana: {
    city: "Larkana",
    description: "We provide comprehensive cargo solutions from UAE to Larkana, a historic city in Sindh province. Our reliable shipping services ensure your cargo reaches Larkana safely with convenient door-to-door delivery options throughout the city.",
    areas: ["Sachal Colony", "Dari Colony", "Murad Colony", "Allahabad", "Station Road", "Bakrani Road"]
  },
  sheikhupura: {
    city: "Sheikhupura",
    description: "We provide comprehensive cargo solutions from UAE to Sheikhupura, an industrial city in Punjab province. Our reliable shipping services ensure efficient and secure delivery with door-to-door options throughout Sheikhupura.",
    areas: ["Model Town", "Faisalabad Road", "Sargodha Road", "Factory Area", "Civil Lines", "Gulshan Colony"]
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
