import React from "react";
import ImageCard from './ImageCard';
import TextCard from './TextCard';

const HowToUse = () => {

  return (
    <div className="cont-help">
      <div className="row">
          <div className="col">

            <div className="row">
                <div className="col-sm-12 col-md-6">
                  <div className="card card-1">
                    <ImageCard number="0"/>
                  </div>
                </div>

                <div className="col-sm-12 col-md-6">
                  <div className="card card-step">
                    <TextCard number="0"/>
                  </div>
                </div>
            </div>

          </div>
          <div className="col">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="card card-2">
                  <ImageCard number="1"/>
                </div>
              </div>

              <div className="col-sm-12 col-md-6">
                <div className="card card-step">
                  <TextCard number="1"/>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div className="row">
          <div className="col">

            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="card card-3">
                  <ImageCard number="2"/>
                </div>
              </div>

              <div className="col-sm-12 col-md-6">
                <div className="card card-step">
                  <TextCard number="2"/>
                </div>
              </div>
            </div>

          </div>
          <div className="col">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="card card-4">
                  <ImageCard number="3"/>
                </div>
              </div>

              <div className="col-sm-12 col-md-6">
                <div className="card card-step">
                  <TextCard number="3"/>
                </div>
              </div>
            </div>
          </div>
      </div>

    </div>
  );

}

export default HowToUse;
