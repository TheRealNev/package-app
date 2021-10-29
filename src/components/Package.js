import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const Package = ({ match }) => {
  const { platform, name } = useParams();

  const [packages, setPackage] = useState([]);

  useEffect(() => {
    fetchPackage();
  }, []);

  const fetchPackage = () => {
    axios
      .get(
        `https://libraries.io/api/${match.params.platform}/${match.params.name}?api_key=64e99839f0a8a5e0e7f2da195bbbce58`,
        {
          params: {
            limit: 10,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setPackage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const versions = packages.versions.slice(-10).reverse();

  return (
    <div>
      <h1 className="text-xl text-left">Package: {packages.name}</h1>
      <div className="m-4 p-4 max-w-md bg-gray-200 rounded-xl shadow-lg">
        <h2 className="text-lg text-center">Version</h2>
        {versions.map((item) => {
          return (
            <div className="p-2 flex flex-row flex-wrap">
              <div className="flex-auto">version #: {item.number}</div>
              <div className="flex-auto">release date: {item.published_at}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Package;
