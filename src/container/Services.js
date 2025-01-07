import React from 'react';

const Services = () => {
  return (
    <div> {/* This applies the background image and styles the full background */}
      <section className="services">
        <h2 className="service-title">Empower yourself to meet 21st-century needs. We provide our services online all over the world.</h2>
        <img
          src="banner_image.jpg"
          alt="Laptop coding"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
        <div className="services-grid">
          {['Social Media Marketing', 'Web Development', 'App Design & Maintenance', 
            'Network Engineering', 'Software and Web Development', 'Application Design, Development, and Maintenance', 
            'Quality Assurance and Testing', 'Database Design and Development', 
            'Technical Business Analyst (Real-life Experience)', 'Migration and Deployment Help (AWS, GCP, Azure...)',
            'Technical Support (Hardware and Software)'].map(service => (
            <div className="service-card">
              <p>{service}</p>
            </div>
          ))}
        </div>
        <h2 className="service-title">We currently provide our services physically in Illinois, Georgia, Pennsylvania, North Carolina, South Carolina, Texas, and online all over the world.</h2>
      </section>
    </div>
  );
};

export default Services;
