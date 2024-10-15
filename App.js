import React from "react";
import ReactDOM from "react-dom/client";

/**Layout for a food ordering app:
 *    Header
 *      - Logo
 *      - Nav Items
 *    Body
 *      - Search
 *      - Restaurant container
 *        - Restaurant card
 *          - Image
 *          - Restaurant name, ratings, cuisines, delivery time
 *    Footer
 *      - Copyright
 *      - Links
 *      - Address
 *      - Contact us
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-red-chilli-food-logo-design-your-company-png-image_5263986.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="restaurant-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(" , ")}</h4>
      <h4>{avgRating} ⭐</h4>
      <h4>₹{costForTwo}</h4>
      <h4>⏱️: {deliveryTime} minutes</h4>
    </div>
  );
};

const resList = [
  {
    info: {
      id: "952001",
      name: "Burger Farm",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/83521b7b-d5ce-46e3-b699-e376cafe718d_952001.jpg",
      locality: "E4 ARERA COLONY",
      areaName: "E4 ARERA COLONY",
      costForTwo: "₹250 for two",
      cuisines: ["American"],
      avgRating: 4.5,
      parentId: "4660",
      avgRatingString: "4.5",
      totalRatingsString: "12",
      sla: {
        deliveryTime: 31,
        lastMileTravel: 7.2,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "7.2 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-15 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-226a2c15-2a52-455a-a393-fffc651f8da9",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhopal/burger-farm-e4-arera-colony-rest952001",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "523122",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/13/6ec425fd-ead0-42e3-93f9-dbc631f6f098_523122.JPG",
      locality: "Maharaja Complex",
      areaName: "Peer Gate Area",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.1,
      parentId: "2456",
      avgRatingString: "4.1",
      totalRatingsString: "461",
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "1.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-15 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
            description: "Delivery!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Pizza.png",
            description: "Delivery!",
          },
        ],
        textExtendedBadges: [
          {
            iconId: "Ratnesh_Badges/free%20del%20icon.png",
            shortDescription: "Free Delivery",
            fontColor: "#7E808C",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: "",
                  fontColor: "#7E808C",
                  iconId: "Ratnesh_Badges/free%20del%20icon.png",
                  shortDescription: "Free Delivery",
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹1199",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-226a2c15-2a52-455a-a393-fffc651f8da9",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhopal/dominos-pizza-maharaja-complex-peer-gate-area-rest523122",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "920945",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/19/e12aba9a-15de-411f-8b3d-993ee7612e79_920945.jpg",
      locality: "New Market",
      areaName: "TT Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.3,
      parentId: "721",
      avgRatingString: "4.3",
      totalRatingsString: "322",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-15 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-226a2c15-2a52-455a-a393-fffc651f8da9",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhopal/pizza-hut-new-market-tt-nagar-rest920945",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "118866",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/0a394524-ec41-4e42-9b44-a3e4dff3b623_118866.JPG",
      locality: "Maharana Pratap Nagar",
      areaName: "Maharana Pratap Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 4.2,
      parentId: "547",
      avgRatingString: "4.2",
      totalRatingsString: "3.8K+",
      sla: {
        deliveryTime: 42,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-15 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "3.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-226a2c15-2a52-455a-a393-fffc651f8da9",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhopal/kfc-maharana-pratap-nagar-rest118866",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "84400",
      name: "Burger King",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_84400.JPG",
      locality: "Maharana Pratap Nagar",
      areaName: "MP Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Burgers", "American"],
      avgRating: 4.2,
      parentId: "166",
      avgRatingString: "4.2",
      totalRatingsString: "24K+",
      sla: {
        deliveryTime: 47,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "45-50 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-15 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
            description: "Delivery!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "2.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-226a2c15-2a52-455a-a393-fffc651f8da9",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhopal/burger-king-maharana-pratap-nagar-mp-nagar-rest84400",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "253997",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/14/c54c1318-4e0d-4f68-8d90-75e6b368eb3d_253997.JPG",
      locality: "Arera Hills",
      areaName: "Maharana Pratap Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["American"],
      avgRating: 4.4,
      parentId: "630",
      avgRatingString: "4.4",
      totalRatingsString: "9.0K+",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 4.9,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "4.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-15 23:45:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
            description: "Delivery!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹249",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "3.7K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-226a2c15-2a52-455a-a393-fffc651f8da9",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhopal/mcdonalds-arera-hills-maharana-pratap-nagar-rest253997",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "101059",
      name: "Manohar Dairy and Restaurant",
      cloudinaryImageId: "yhnrql8wxgu8sgqjczos",
      locality: "Hamidia Road",
      areaName: "Hamidia Road",
      costForTwo: "₹300 for two",
      cuisines: [
        "Sweets",
        "Beverages",
        "Desserts",
        "Snacks",
        "Chaat",
        "Street Food",
        "Chinese",
        "Bakery",
        "North Indian",
        "South Indian",
      ],
      avgRating: 4.6,
      veg: true,
      parentId: "7052",
      avgRatingString: "4.6",
      totalRatingsString: "15K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 0.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "0.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-15 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Chole%20Bhature.png",
            description: "Delivery!",
          },
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Dosa.png",
            description: "Delivery!",
          },
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Mithai.png",
            description: "Delivery!",
          },
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png",
            description: "Delivery!",
          },
          {
            imageId: "Green%20Dot%20Awards/Best%20In%20Pav%20Bhaji.png",
            description: "Delivery!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Mithai.png",
            description: "Delivery!",
          },
          {
            imageId: "Rxawards/_CATEGORY-North%20Indian.png",
            description: "Delivery!",
          },
          {
            imageId: "Rxawards/_CATEGORY-Thali.png",
            description: "Delivery!",
          },
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId:
                    "Green%20Dot%20Awards/Best%20In%20Chole%20Bhature.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Dosa.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Mithai.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Green%20Dot%20Awards/Best%20In%20Pav%20Bhaji.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Mithai.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                },
              },
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Thali.png",
                },
              },
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-226a2c15-2a52-455a-a393-fffc651f8da9",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhopal/manohar-dairy-and-restaurant-hamidia-road-rest101059",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    info: {
      id: "263733",
      name: "Pure Veg Meals by Lunchbox",
      cloudinaryImageId: "qv2jbeieltor1lgurvg0",
      locality: "Chetak Bridge",
      areaName: "Maharana Pratap Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Biryani", "North Indian", "Desserts", "Beverages"],
      avgRating: 4.4,
      veg: true,
      parentId: "21938",
      avgRatingString: "4.4",
      totalRatingsString: "360",
      sla: {
        deliveryTime: 29,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-10-15 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1695133679/badges/Pure_Veg111.png",
            description: "pureveg",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "pureveg",
                  imageId: "v1695133679/badges/Pure_Veg111.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "UPTO ₹100",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-226a2c15-2a52-455a-a393-fffc651f8da9",
    },
    cta: {
      link: "https://www.swiggy.com/city/bhopal/pure-veg-meals-by-lunchbox-chetak-bridge-maharana-pratap-nagar-rest263733",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        {/* We need to use functional components for reusability  */}
        {resList.map((res) => (
          <RestaurantCard key={res?.info.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
