/**
 * Title: Transportation.jsx
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 07, July 2023
 */

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHotel } from "../../../../../features/hotel/hotelSlice";

const Transportation = () => {
  const dispatch = useDispatch();
  const { hotel } = useSelector((state) => state.hotel);
  const [items, setItems] = useState(
    hotel?.transportationData || [{ id: Date.now() }]
  );
  const [transportationData, setTransportationData] = useState(
    hotel?.transportationData || [
      {
        id: Date.now(),
        beachName: "N/A",
        beachContent: "N/A",
        beachDistance: "N/A",
        beachCountry: "N/A",
      },
    ]
  );

  const addItem = () => {
    const newItem = { id: Date.now() };
    setItems([...items, newItem]);
    setTransportationData([...transportationData, newItem]);
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    const updatedTransportationData = transportationData.filter(
      (item) => item.id !== id
    );
    setTransportationData(updatedTransportationData);

    // Update redux state
    dispatch(addHotel({ transportationData: updatedTransportationData }));
  };

  const handleChange = (index, field, value) => {
    const updatedTransportationData = [...transportationData];
    const updatedItem = { ...updatedTransportationData[index] };
    updatedItem[field] = value;
    updatedTransportationData[index] = updatedItem;
    setTransportationData(updatedTransportationData);

    // Update redux state
    dispatch(addHotel({ transportationData: updatedTransportationData }));
  };

  return (
    <div className="mt-30">
      <div className="fw-500 mb-20">Transportation</div>
      <div className="overflow-scroll scroll-bar-1">
        <table className="table-5 -border-bottom col-12">
          <thead className="bg-light-2">
            <tr>
              <th>Name</th>
              <th>Content</th>
              <th>Distance</th>
              <th />
              <th />
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={item.id}>
                <td className="col-2">
                  <div className="form-input">
                    <input
                      type="text"
                      value={transportationData[index].beachName}
                      onChange={(e) =>
                        handleChange(index, "beachName", e.target.value)
                      }
                      required
                    />
                    <label className="lh-1 text-16 text-light-1">
                      Sunny beach
                    </label>
                  </div>
                </td>
                <td className="col-6">
                  <div className="form-input">
                    <textarea
                      value={transportationData[index].beachContent}
                      onChange={(e) =>
                        handleChange(index, "beachContent", e.target.value)
                      }
                      required
                      rows={5}
                      defaultValue={""}
                    />
                    <label className="lh-1 text-16 text-light-1">Content</label>
                  </div>
                </td>
                <td className="col-2">
                  <div className="form-input">
                    <input
                      type="text"
                      value={transportationData[index].beachDistance}
                      onChange={(e) =>
                        handleChange(index, "beachDistance", e.target.value)
                      }
                      required
                    />
                    <label className="lh-1 text-16 text-light-1">
                      Sunny beach
                    </label>
                  </div>
                </td>
                <td className="col-2">
                  <div className="form-input">
                    <input
                      type="text"
                      value={transportationData[index].beachCountry}
                      onChange={(e) =>
                        handleChange(index, "beachCountry", e.target.value)
                      }
                      required
                    />
                    <label className="lh-1 text-16 text-light-1">
                      Select Country
                    </label>
                  </div>
                </td>
                <td className="col-auto">
                  <button
                    className="flex-center bg-light-2 rounded-4 size-35"
                    onClick={() => deleteItem(item.id)}
                  >
                    <i className="icon-trash-2 text-16 text-light-1" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-end">
        <button
          className="button -md -blue-1 bg-blue-1-05 text-blue-1 mt-20"
          onClick={addItem}
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default Transportation;
