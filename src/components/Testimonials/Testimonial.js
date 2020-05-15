import React, { useState } from "react";
import { Media } from "react-bootstrap";

const Testimonial = ({
  name,
  title,
  expandTextLink,
  firstSnippet,
  secondSnippet,
  thirdSnippet,
}) => {
  const [expand, setExpand] = useState(false);
  return (
    <Media className="testimonial">
      <div className="testimonial-header">
        <p>{name}</p>
        <p>
          <em>{title}</em>
        </p>
      </div>
      <Media.Body className="testimonial-body">
        <div
          onClick={() => setExpand(!expand)}
          className={expandTextLink && "read-more"}
        >
          <p>
            {firstSnippet}
            <em>{expand ? "" : expandTextLink}</em>
          </p>
          <p>{expand && secondSnippet}</p>

          <p>{expand && thirdSnippet}</p>
        </div>
      </Media.Body>
    </Media>
  );
};

export default Testimonial;
