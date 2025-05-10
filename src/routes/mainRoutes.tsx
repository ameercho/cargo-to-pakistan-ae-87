
import Index from "@/pages/Index";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import ServiceAreas from "@/pages/ServiceAreas";
import NotFound from "@/pages/NotFound";

export const mainRoutes = [
  {
    index: true,
    element: <Index />,
  },
  {
    path: "services",
    element: <Services />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "faq",
    element: <FAQ />,
  },
  {
    path: "service-areas",
    element: <ServiceAreas />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
];
