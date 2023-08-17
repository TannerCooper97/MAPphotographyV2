import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetails";
import PortfolioPage from "./pages/Portfolio";
import ServicesPage from "./pages/Services";
import ContactPage from "./pages/Contact";
import ServiceRootLayout from "./pages/ServiceRoot";
import { AuthProvider } from "./components/GUI/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "services",
        element: <ServiceRootLayout />,
        children: [
          { path: "", element: <ServicesPage /> },
          { path: ":productId", element: <ProductDetailPage /> },
        ],
      },
      { path: "about", element: <AboutPage /> },
      { path: "portfolio", element: <PortfolioPage /> },
      { path: "contact", element: <ContactPage /> },
    ],
  },
]);

function App() {
  
  return(
    <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  ) ;
}

export default App;
