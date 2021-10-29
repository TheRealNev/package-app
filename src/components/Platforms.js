import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Platforms = () => {
  // const { platform, name } = useParams();

  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    fetchPlatforms();
  }, []);

  const fetchPlatforms = () => {
    axios
      .get(
        " https://libraries.io/api/platforms?api_key=64e99839f0a8a5e0e7f2da195bbbce58"
      )
      .then((res) => {
        console.log(res);
        setPlatforms(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1 className="text-xl text-center">
        Enter a platform and name in the url to see its details
      </h1>
      <h2 className="text-lg text-center">Note: format (url/platform/name)</h2>
      <div className="flex flex-row flex-wrap">
        {platforms.map((platform) => (
          <div className="p-4 m-4 max-w-md mx-auto bg-gray-300 rounded-xl shadow-lg">
            <h2 style={{ color: `${platform.color}` }}>
              Package: {platform.name}
            </h2>
            <h3>License: {platform.default_language}</h3>
            <Link
              className="underline text-sm hover:no-underline"
              to={{ pathname: `${platform.homepage}` }}
              target="_blank"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Platforms;
