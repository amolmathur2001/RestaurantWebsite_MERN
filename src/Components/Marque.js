import React from "react";
import Marquee from 'react-fast-marquee'
function Marque() {
  return (
    <div>
      <div className="bg-dark" style={{ height: "50px" }}>
        <Marquee>
          <p style={{ color: "white" }}>
            *Announcement: New Opening Timings: Monday-Sunday(11AM-11PM)
          </p>
        </Marquee>
      </div>
    </div>
  );
}

export default Marque;
