import React from "react";
import { QRCodeCanvas } from "qrcode.react";
const eventLink = "https://stoop-sale-pi.vercel.app/";
const Details = () => (
  <section id="details" className="details-container">
    <p>
      Join us for a charming stoop sale in the heart of Brooklyn, NY. We'll have
      a delightful array of items including clothes, home goods, shoes, and
      unique tchotchkes. You'll find us at the corner of 2nd Pl. and Court St.
    </p>
    <p>Date: July 15th, 2024 <br/>
    Time: 10:00 AM - 4:00 PM</p>
    <QRCodeCanvas value={eventLink} size={128} />
  </section>
);

export default Details;
