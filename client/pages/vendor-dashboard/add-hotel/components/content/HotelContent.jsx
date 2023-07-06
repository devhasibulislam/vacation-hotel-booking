import { useDispatch } from "react-redux";
import { addHotel } from "../../../../../features/hotel/hotelSlice";

const HotelContent = () => {
  const dispatch = useDispatch();

  return (
    <div className="row x-gap-20 y-gap-20">
      <div className="col-12">
        <div className="form-input ">
          <input
            type="text"
            onChange={(e) => dispatch(addHotel({ name: e.target.value }))}
            required
          />
          <label className="lh-1 text-16 text-light-1">Hotel Name</label>
        </div>
      </div>
      {/* End Name */}

      <div className="col-12">
        <div className="form-input ">
          <textarea
            required
            rows={5}
            onChange={(e) => dispatch(addHotel({ content: e.target.value }))}
            defaultValue={""}
          />
          <label className="lh-1 text-16 text-light-1">Content</label>
        </div>
      </div>
      {/* End Content */}

      <div className="col-12">
        <div className="form-input ">
          <input
            type="text"
            onChange={(e) =>
              dispatch(addHotel({ youTubeVideoURL: e.target.value }))
            }
            required
          />
          <label className="lh-1 text-16 text-light-1">Youtube Video</label>
        </div>
      </div>
      {/* End youtube Video */}
    </div>
  );
};

export default HotelContent;
