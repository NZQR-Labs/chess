import Head from "next/head";
import React from "react"; 
import SubscriptionCard from "~/components/Cards/SubscriptionCard";
import SubscriptionTabs from "~/components/Tabs/SubscriptionTabs";

const Subscriptions = () => {

  return (
    <>
      <Head>
        <title>Settings</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-[90vh] flex-col items-center">
        <div className="container flex flex-col justify-center items-center content-center"> 
          <div className="flex sm:self-center md:self-end lg:self-end sm:mr-0 md:mr-[10%] sm:my-[10%] md:my-[2%]"> 
            <SubscriptionTabs />
          </div>
          <div className="flex sm:flex-col md:flex-col xl:flex-row justify-around"> 
            <SubscriptionCard />
            <SubscriptionCard />
            <SubscriptionCard />
          </div>
        </div>
      </main>
    </>
  );
};

export default Subscriptions; 