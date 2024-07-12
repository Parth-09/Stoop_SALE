import React, { useRef } from 'react';
import { FaCopy } from 'react-icons/fa'; // Import Font Awesome Copy icon

const ShareButton = () => {
  const shareLinkRef = useRef(null);

  const copyLink = async () => {
    try {
      if (shareLinkRef.current) {
        // await navigator.clipboard.writeText(shareLinkRef.current.value);
        await navigator.clipboard.writeText(shareLinkRef.current.value);
        alert('Link copied to clipboard');
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
      alert('Failed to copy the link');
    }
  };

  const shareEvent = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Brooklyn Stoop Sale',
        text: 'Join us for a fun and fabulous stoop sale!',
        url: window.location.href,
      })
      .then(() => console.log('Successful share'))
      .catch((error) => console.log('Error sharing', error));
    } else {
      alert('Share feature not supported in your browser.');
    }
  };

  return (
    <div className="share-container">
      <div className="share-input-container">
        <input
          type="text"
          value={window.location.href}
          readOnly
          ref={shareLinkRef}
          className="share-link"
        />
        <FaCopy className="copy-icon" onClick={copyLink} />
      </div>
      <button onClick={shareEvent} className="share-button">Share this Event</button>
    </div>
  );
};

export default ShareButton;
