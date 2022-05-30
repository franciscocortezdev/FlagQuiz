import React from "react";
import ContentLoader from "react-content-loader";

export function LoadOption() {
  return (
    <ContentLoader
      width={560}
      height={56}
      viewBox="0 0 560 46"
      backgroundColor="#045256"
      foregroundColor="#9ab8ba"
    >
      <rect x="0" y="0" rx="10" ry="10" width="560" height="46" />
    </ContentLoader>
  );
}
