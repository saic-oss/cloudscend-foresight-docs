import React from "react";

const ApiRequest = ({ httpMethod, url }) => (
  <div>
    <span className="api-method">{httpMethod}</span>
    <span className="api-url">{url}</span>
  </div>
);

export default ApiRequest;
