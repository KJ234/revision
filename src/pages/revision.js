import React from "react";
import htmlImage from "../assets/images/html-tagst.jpg";
import cssImage from "../assets/images/images.jpeg";
import jsImage from "../assets/images/imagesjs.png";

function Revision() {
  return (
    <div className="blue">
      <h1>Learn ...</h1>
      <div class="row">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">HTML</h5>
              <img src={htmlImage} alt="htmlimg" className="htmlimg" />
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/html" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">CSS</h5>
              <img src={cssImage} alt="htmlimg" className="htmlimg" />

              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/css" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">JAVASCRIPT</h5>
              <img src={jsImage} alt="htmlimg" className="htmlimg" />

              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="/javascript" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
}

export default Revision;
