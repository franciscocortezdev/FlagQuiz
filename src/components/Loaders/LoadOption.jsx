import React from "react";
import ContentLoader from "react-content-loader";

export function LoadOption() {
  return (
    <ContentLoader
      width={'100%'}
      height={92}
 
      backgroundColor="#045256"
      foregroundColor="#9ab8ba"
    >
      <rect x="0" y="0" rx="10" ry="10" width="100%" height="92" />
    </ContentLoader>
  );
}
