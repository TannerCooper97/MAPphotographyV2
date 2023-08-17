import ServiceHero from "../components/services-components/ServiceHero";
import { Link } from "react-router-dom";
import "../styles/services-styles/service-products.scss";
import {useState} from "react";

const PRODUCTS = [
  {
    id: "p1",
    title: "Couples & Engagments",
    price: 175,
    btnQ: "Lets do this!",
  },
  { id: "p2", title: "Weddings", price: 875, btnQ: "I do!" },
  { id: "p3", title: "Maternity", price: 150, btnQ: "Oh, baby!" },
  { id: "p4", title: "Bridals", price: 225, btnQ: "Lets go!" },
  { id: "p5", title: "Elopements", price: 500, btnQ: "Lets go!" },
  {
    id: "p6",
    title: "Destination Bridals",
    price: "Price Upon Request",
    btnQ: "Travel away!",
  },
];

function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <ul className="service-products">
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            <h2>{prod.title}</h2>
            <h4>Starting at {prod.price}</h4>
            <Link to={prod.id}>{prod.btnQ}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default ServicesPage;
