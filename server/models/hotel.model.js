/**
 * Title: hotel.model.js
 * Author: Hasibul Islam
 * Portfolio: https://developer-hasibulislam.vercel.app
 * Linkedin: https://www.linkedin.com/in/developer-hasibulislam
 * Date: 04, July 2023
 */

const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    // 1. Content Part • required
    name: String,
    content: String,
    youTubeVideoURL: String,
    bannerImages: [String],
    galleryImages: [String],
    featuredImages: [String],

    // 2. Location Part
    location: String, // required
    mapLatitude: {
      type: String,
      default: "N/A",
    },
    mapLongitude: {
      type: String,
      default: "N/A",
    },
    educationData: [
      {
        beachName: {
          type: String,
          default: "N/A",
        },
        beachContent: {
          type: String,
          default: "N/A",
        },
        beachDistance: {
          type: String,
          default: "N/A",
        },
        beachCountry: {
          type: String,
          default: "N/A",
        },
      },
    ],
    healthData: [
      {
        beachName: {
          type: String,
          default: "N/A",
        },
        beachContent: {
          type: String,
          default: "N/A",
        },
        beachDistance: {
          type: String,
          default: "N/A",
        },
        beachCountry: {
          type: String,
          default: "N/A",
        },
      },
    ],
    transportationData: [
      {
        beachName: {
          type: String,
          default: "N/A",
        },
        beachContent: {
          type: String,
          default: "N/A",
        },
        beachDistance: {
          type: String,
          default: "N/A",
        },
        beachCountry: {
          type: String,
          default: "N/A",
        },
      },
    ],

    // 3. Price Part
    price: {
      regularPrice: Number, // required
      extraPrice: {
        type: Boolean,
        default: false,
      },
      serviceFee: {
        type: Boolean,
        default: false,
      },
    },
    checkInTime: {
      type: String,
      default: "N/A",
    },
    checkOutTime: {
      type: String,
      default: "N/A",
    },
    minimumAdvanceReservation: {
      type: Number,
      default: 0,
    },
    minimumDaysStay: {
      type: Number,
      default: 0,
    },

    // 4. Attributes Part

    attributes: [
      {
        title: {
          type: String,
          default: "N/A",
        },
        items: {
          type: [String],
          default: ["N/A"],
        },
      },
    ],

    // 5. Requiring State/Status
    status: {
      type: String,
      enum: ["pending", "confirmed", "rejected"],
      default: "pending",
    },
    state: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },

    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    // 6. Number of people to stay
    room: {
      guests: {
        type: Number,
        default: 0,
      },
      bedrooms: {
        type: Number,
        default: 0,
      },
      beds: {
        type: Number,
        default: 0,
      },
      bathrooms: {
        type: Number,
        default: 0,
      },
    },

    // 7. hotel types
    type: {
      type: String,
      enum: [
        "House",
        "Apartment",
        "Barn",
        "Bed & Breakfast",
        "Boat",
        "Cabin",
        "Camper/RV",
        "Casa Particular",
        "Castle",
        "Cave",
        "Container",
        "Cycladic Home",
        "Dammuso",
        "Dome",
        "Earth Home",
        "Farm",
        "Guesthouse",
        "Hotel",
        "Houseboat",
        "Kezhan",
        "Minsu",
        "Riad",
        "Ryokan",
        "Sepherd's Hut",
        "Tent",
        "Tiny Home",
        "Tower",
        "Treehouse",
        "Trullo",
        "Windmill",
        "Yurt",
      ],
      default: "N/A",
    },
  },

  { timestamps: true }
);

const Hotel = mongoose.models.Hotel || mongoose.model("Hotel", hotelSchema);

module.exports = Hotel;
