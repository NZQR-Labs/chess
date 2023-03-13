import React from "react";

const SubscriptionTabs = () => {
  return (
    <div className="tabs tabs-boxed">
      <a className="tab sm:tab-xs md:tab-md lg:tab-lg xl:tab-lg">Tab 1</a> 
      <a className="tab sm:tab-xs md:tab-md lg:tab-lg xl:tab-lg tab-active">Tab 2</a> 
      <a className="tab sm:tab-xs md:tab-md lg:tab-lg xl:tab-lg">Tab 3</a>
    </div>
  );
};

export default SubscriptionTabs;