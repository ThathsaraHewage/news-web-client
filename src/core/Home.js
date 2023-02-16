import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import { Link } from "react-router-dom";
import Base from "./Base";
import { getAllNews } from "../Admin/helper/admin-api-calls";
import NewsHomeImageHelper from "./helper/NewsHomeImageHelper";

export default function Home() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getAllNews().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setNews(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, [])

  return (
    <Base title="The News" description="Truth First">
      <div className="row text-center">
        <h1 className="text-white">Hot News</h1>

        <div className="container p-3">
          {news.map((news, index) => {
            return (
              <>
                <div class="card mb-3">
                  <div class="card-body">
                    <NewsHomeImageHelper className="mr-3" news={news} /><br /><br />
                    <h5 class="card-title" style={{ color: "black", fontWeight: "bold" }}>{news.name}</h5>
                    {/* <p class="card-text" style={{ color: "black" }}>{news.description}</p> */}
                    <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>

                    <button
                      type="submit"
                      className="btn btn-outline-success rounded-pill"
                    >
                      Read More
                    </button>
                  </div>
                </div>
                <tr><br /></tr>
              </>

            );
          })}


        </div>
      </div>
    </Base>
  );
}


{/* <td>
<Link
  className="btn btn-success"
  to={`/update/news/${news._id}`}
>
  <span className="">Read More</span>
</Link>
</td> */}