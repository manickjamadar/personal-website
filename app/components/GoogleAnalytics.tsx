import React from "react";
import Script from "next/script";
interface Props {
  trackingId?: string;
}
const GoogleAnalytics: React.FC<Props> = ({ trackingId }) => {
  if (!trackingId) {
    return null;
  }
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
        strategy="afterInteractive"
      ></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', '${trackingId}');
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
