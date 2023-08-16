import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/gui-styles/package-card.scss'; 

function PackageCard() {
  const packages = [
    {
      title: 'Engagements',
      priceRange: '$175 - $275',
      features: ['45-60 Min session', 'One outfit change', 'Print release', 'Online digital gallery', 'Albums upon request'],
    },
    {
      title: 'Weddings',
      priceRange: '$875 - $2200',
      features: ['Engagement session', '2 - 8 hrs. wedding day', 'Print release', 'Online digital gallery', 'Albums upon request', 'Prices may vary'],
    },
    {
      title: 'Maternity',
      priceRange: '$150 - $275',
      features: ['Two outfit changes', 'Print release', 'Online digital gallery', 'Albums upon request'],
    },
  ];

  return (
    <div className="package-section">
      <h2>Popular Packages</h2>
      <div className="popular-packages-section">
        {packages.map((packageInfo, index) => (
          <div className="package-card" key={index}>
            <div className="package-item-header">
              <h3>{packageInfo.title}</h3>
            </div>
            <h5>{packageInfo.priceRange}</h5>
            <ul>
              {packageInfo.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <Link to="/services" className='package-button'>
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PackageCard;
