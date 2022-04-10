import React from "react";
import data from "./restaurant.json";
import "bootstrap/dist/css/bootstrap.min.css";

const STYLE = {
  size: {
    width: "40%",
  },
};

export const OrderApp = () => {
  return (
    <>
      {data.map((post) => {
        return (
          <>
            <div class="row row-cols-1 row-cols-md-2 g-4">
              <div
                className="card text-white bg-secondary mb-3"
                style={STYLE.size}
              >
                <div className="card-header">{post.cuisine}</div>
                <div className="card-body">
                  <h5 className="card-title">{post.restaurantName}</h5>
                  <p className="card-text">{post.address}</p>
                  <button type="button" class="btn btn-warning">
                    Order Now!
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default OrderApp;
