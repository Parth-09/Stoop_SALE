import '../styles.css'
const Map = () => {
  return (
    <div className='map-container'>
      <iframe
        className='map'
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12102.99147509983!2d-74.01573477900041!3d40.679524004073265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a585c181957%3A0x50e694b8c1ef75b2!2s2nd%20Pl%20%26%20Court%20St%2C%20Brooklyn%2C%20NY%2011231!5e0!3m2!1sen!2sus!4v1720743506406!5m2!1sen!2sus"
        // width="100%"
        // height="100%"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
