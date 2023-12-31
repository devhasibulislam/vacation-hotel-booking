/**
 * Title: index.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 08, July 2023
 */

import Seo from "../../../components/common/Seo";
import Sidebar from "../common/Sidebar";
import Header from "../../../components/header/dashboard-header";
import Footer from "../common/Footer";
import BookingTable from "./components/BookingTable";
import React from "react";
import DynamicAttribute from "./components/DynamicAttribute";

const index = () => {
  return (
    <>
      <Seo pageTitle="Vendor Hotels" />
      {/* End Page Title */}

      <div className="header-margin"></div>

      <Header />
      {/* End dashboard-header */}

      <div className="dashboard">
        <div className="dashboard__sidebar bg-white scroll-bar-1">
          <Sidebar />
          {/* End sidebar */}
        </div>
        {/* End dashboard__sidebar */}

        <div className="dashboard__main">
          <div className="dashboard__content bg-light-2">
            {/* Header Part Start */}
            {/* <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
              <div className="col-auto">
                <h1 className="text-30 lh-14 fw-600">All Hotels</h1>
                <div className="text-15 text-light-1">
                  Lorem ipsum dolor sit amet, consectetur.
                </div>
              </div> */}
            {/* End .col-auto */}

            {/* <div className="col-auto">
                <Link
                  href="#"
                  className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                >
                  Add Hotels <div className="icon-arrow-top-right ml-15"></div>
                </Link>
              </div>
            </div> */}
            {/* Header Part End */}
            {/* End .row */}

            {/* Dynamic Attributes Starts */}
            <DynamicAttribute />
            {/* Dynamic Attributes Stops */}

            <div className="my-5"></div>

            <div className="py-30 px-30 rounded-4 bg-white shadow-3">
              <BookingTable />
              {/* End tabs */}
            </div>

            <Footer />
          </div>
          {/* End .dashboard__content */}
        </div>
        {/* End dashbaord content */}
      </div>
      {/* End dashbaord content */}
    </>
  );
};

export default index;
