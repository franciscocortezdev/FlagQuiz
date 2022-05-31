import React from "react";
import ContentLoader from "react-content-loader";



export function LoadPicture() {

  return (
    <ContentLoader
      width={'100%'}
      height={240}
      viewBox="0 0 100% 240"
      backgroundColor="#045256"
      foregroundColor="#9ab8ba"
    >
      <rect x="0" y="210" rx="4" ry="4" width="70%" height="10" />
      <rect x="0" y="230" rx="3" ry="3" width="50%" height="10" />
      <rect x="0" y="0" rx="10" ry="10" width="100%" height="200" />
    </ContentLoader>
  );
}
