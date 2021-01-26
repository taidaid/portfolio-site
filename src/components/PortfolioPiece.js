import React from "react";
import { Row, Media } from "react-bootstrap";

const PortfolioPiece = ({
  imgSrc,
  imgAlt,
  websiteUrl,
  repoHref,
  title,
  description,
  repoLogoSrc,
}) => {
  return (
    <Row className="justify-content-center col-12 ">
      <Media className="project-block " id="project-1 ">
        <div className="media-image">
          <a href={websiteUrl}>
            <img src={imgSrc} alt={imgAlt} />
          </a>
        </div>
        <Media.Body className="project-body" id="project-1">
          <h2>{title}</h2>
          <p>{description}</p>
          <p>
            <a href={repoHref}>
              <img src={repoLogoSrc} alt="Source code" />
            </a>
          </p>
        </Media.Body>
      </Media>
    </Row>
  );
};

export default PortfolioPiece;
