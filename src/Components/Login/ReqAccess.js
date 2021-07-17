import React from "react";
import "./ReqAccess.css";

function ReqAccess() {
  return (
    <div>
      <iframe
        id="typeform-full"
        width="100%"
        height="100%"
        frameborder="0"
        allow="camera; microphone; autoplay; encrypted-media;"
        src="https://form.typeform.com/to/dVbq0DLq?typeform-medium=embed-snippet"
      ></iframe>{" "}
      <script
        type="text/javascript"
        src="https://embed.typeform.com/embed.js"
      ></script>
    </div>
  );
}

export default ReqAccess;
