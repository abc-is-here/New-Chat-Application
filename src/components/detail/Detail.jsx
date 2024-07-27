import React from "react";
import "./detail.css";

const Detail = () => {
  return (
    <div className="detail">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h1>Nirbhay</h1>
        <p>My brother is the best Idiot in the world!</p>
        <div className="info">
          <div className="option">
            <div className="title">
              <span>Chat settings</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Privacy % help</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Media</span>
              <img src="./arrowDown.png" alt="" />
            </div>
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetails">
                <img
                  src="https://images.pexels.com/photos/8617845/pexels-photo-8617845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <span>Photo_name_idk</span>
              </div>
              <img src="./download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetails">
                <img
                  src="https://images.pexels.com/photos/8617845/pexels-photo-8617845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <span>Photo_name_idk</span>
              </div>
              <img src="./download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetails">
                <img
                  src="https://images.pexels.com/photos/8617845/pexels-photo-8617845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <span>Photo_name_idk</span>
              </div>
              <img src="./download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetails">
                <img
                  src="https://images.pexels.com/photos/8617845/pexels-photo-8617845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <span>Photo_name_idk</span>
              </div>
              <img src="./download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetails">
                <img
                  src="https://images.pexels.com/photos/8617845/pexels-photo-8617845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <span>Photo_name_idk</span>
              </div>
              <img src="./download.png" alt="" />
            </div>
            <div className="photoItem">
              <div className="photoDetails">
                <img
                  src="https://images.pexels.com/photos/8617845/pexels-photo-8617845.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
                <span>Photo_name_idk</span>
              </div>
              <img src="./download.png" alt="" />
            </div>
          </div>
          <div className="option">
            <div className="title">
              <span>Shared Files</span>
              <img src="./arrowUp.png" alt="" />
            </div>
          </div>
          <button>Block user</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;
