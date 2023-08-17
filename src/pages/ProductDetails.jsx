import React from "react";
import { useParams } from "react-router-dom";
import ServiceNavigation from "../components/GUI/ProductNav";
import "../styles/services-styles/service-details.scss";
import engage from "../assets/engage-img1.jpg";
import wedding from "../assets/wedding-img6.jpg";
import maternity from "../assets/maternity-services.jpg";
import bridals from "../assets/drinking-brides-below.jpg";
import elopements from "../assets/engage-img15.jpg";
import destination from "../assets/wedding-img13.jpg";

const productDetails = {
    p1: {
        title: "Couples & Engagements",
        price: 175,
        details: ["45 - 60 minute session at a location of your choice.", "One outfit change."],
        imgURL: engage
    },
    p2: {
        title: "Weddings",
        price: 875,
        details: ["Up to 8 hours of coverage.", "Engagement session.", "Additional hours of coverage is $125.", "Flexible budget."],
        imgURL: wedding
    },
    p3: {
        title: "Maternity",
        price: 150,
        details: ["45 - 60 minute session at a location of your choice.", "Two outfit changes."],
        imgURL: maternity
    },
    p4: {
        title: "Bridals",
        price: 225,
        details: ["90 - 120 minute session at a location of your choice.", "Two outfit changes."],
        imgURL: bridals
    },
    p5: {
        title: "Elopements",
        price: 500,
        details: ["Up to 8 hours of coverage.", "Engagement session.", "Additional hours of coverage is $125."],
        imgURL: elopements
    },
    p6: {
        title: "Destination Bridals",
        price: "Price Upon Request",
        details: ["Spend day or night with the photographer looking for places to take photographs", "Pricing may increase the further outside of the greater Salt Lake City area."],
        imgURL: destination
    }
}

function ProductDetailPage() {
    const params = useParams();
    const selectedProduct = productDetails[params.productId];

    return (
        <div className="product-details-container">
          {selectedProduct ? (
            <div className="two-column-layout">
              <div className="image-column">
                <img
                  src={selectedProduct.imgURL}
                  alt={selectedProduct.title}
                  className="product-image"
                />
              </div>
              <div className="content-column">
                <h2>{selectedProduct.title}</h2>
                <h5>Price: ${selectedProduct.price}</h5>
                <ul className="product-details-list">
                  {selectedProduct.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                  <li>Online digital gallery.</li>
                  <li>Albums available upon request.</li>
                  <li>Print release.</li>
                </ul>
                <ServiceNavigation />
              </div>
            </div>
          ) : (
            <p className="product-not-found">Product not found.</p>
          )}
          
        </div>
      );
}

export default ProductDetailPage;