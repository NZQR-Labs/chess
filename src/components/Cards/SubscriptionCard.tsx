import React from "react";

const SubscriptionCard = () => {
  return (
    <div className="card sm:w-72 md:w-72 lg:w-96 bg-neutral shadow-xl sm:my-2 md:my-2 lg:mx-2">
      <figure><img src="/test.jpg" alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionCard;