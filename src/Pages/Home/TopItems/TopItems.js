import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../../Function/url";
import Spinner from "../../SmallComponents/Spinner/Spinner";
import Item from "../Item/Item";
import Summery from "../Summery/Summery";

const TopItems = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const c = async () => {
      try {
        const data = await axios.get("/products?size=6");

        setItems(data.data);
        setLoading(false);
      } catch (error) {}
    };
    c();
  }, [setItems, setLoading]);

  return (
    <div>
      {!isLoading ? (
        <>
          {items?.length ? (
            <div
              className="container mx-auto py-12"
              style={{ minHeight: "80vh" }}
            >
              <h2 className="text-left pb-8 font-bold uppercase text-lg sm:text-2xl pl-12">
                Top items
              </h2>

              <div className="px-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto">
                {items.map((item) => (
                  <Item key={item._id} item={item} />
                ))}
              </div>

              <div className="flex justify-end pt-6 mr-5">
                <Link
                  to={"/manageitems"}
                  className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-lg leading-tight uppercase rounded hover:underline  focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out cursor-pointer"
                >
                  Manage Inventories{" "}
                  <FontAwesomeIcon className="ml-2" icon={faArrowRightLong} />
                </Link>
              </div>
              <Summery />
            </div>
          ) : (
            <p className="text-center text-lg text-red-500">
              No Product item found
            </p>
          )}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default TopItems;
