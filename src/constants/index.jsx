import {
  accountability,
  excellence,
  innovation,
  integrity,
  partnership,
  peopleCircle,
  // profileWoman,
  airplaneDesignFreight,
  amitabhaMohapatra,
  amitSharma,
  anilRajput,
  ankitSharma,
  babulalSharma,
  chairman,
  complianceDocument,
  crafting,
  creative,
  customer,
  customerSupport,
  customizedPackaging,
  foldableCratesImage1,
  foldableCratesImage2,
  foldableCratesImage3,
  foldableCratesImage4,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
  gallery21,
  gallery22,
  gallery23,
  gallery24,
  gallery25,
  // gallery26,
  gallery27,
  gallery28,
  gallery29,
  // gallery30,
  // gallery31,
  gallery32,
  gallery33,
  gallery34,
  gallery35,
  gallery36,
  gallery37,
  gallery38,
  // gallery39,
  // gallery40,
  gallery41,
  hub1,
  hub2,
  inventorySearch,
  // kushumSharma,
  lalitSharma,
  logistics,
  metalFoldableCratesImage1,
  metalFoldableCratesImage2,
  metalFoldableCratesImage3,
  metalFoldableCratesImage4,
  mohitVashist,
  palletsImage1,
  palletsImage2,
  palletsImage3,
  palletsImage4,
  plsImage1,
  plsImage2,
  plsImage3,
  plsImage4,
  ppBoxesImage1,
  ppBoxesImage2,
  ppBoxesImage3,
  ppBoxesImage4,
  productManagement,
  profileUser,
  railService,
  realTimeLocator,
  safeDelivery,
  serviceTransportation,
  supriyaDutt,
  tcSharma,
  techDriven,
  thermoFormingImage1,
  thermoFormingImage2,
  thermoFormingImage3,
  thermoFormingImage4,
  thinking,
  transportation,
  truckDrivingRoad,
  vimalSharma,
  vinsumCareer,
  warehouse,
  warehouse1,
  warehouse2,
  warehouseService,
  wireMeshImage1,
  wireMeshImage2,
  wireMeshImage3,
  wireMeshImage4,
  truckSpeedService,
  instagram,
  facebook,
  linkedin,
  // twitter,
  threads,
  youtube,
  airService,
  trainService,
  roadService,
  lastMileDelivery,
  lastMileDelivery2,
  ftl,
  amitShandilay,
  honored2020blog,
  multiModalTransportBlog,
  threePlBlog,
  threePlService,
  fourPlService,
  pp_box2,
  thermoTray,
  plasticPallet,
  steelPallet,
  woodenBox,
  woodenPallet,
  wiremess2,
  pls2,
  flc2,
  fsb2,
  mfc2,
  jyotiSharma,
  poonam,
  opVyas,
  janardan,
  mukeshGoyal,
  nareshPilania,
  parminderSingh
} from "@/assets/images";

import { multiModelTransportServiceIcon,
  threePlServiceIcon,
  fourPlServiceIcon,
  warehouseServiceIcon,
  packagingServiceIcon } from "@/assets/images";

import { ROUTES } from "@/lib/routes";
import { Package2Icon } from "lucide-react";
import {
  LuGlobe,
  LuBuilding2,
  LuUsersRound,
  LuBriefcaseBusiness,
  LuPackagePlus,
} from "react-icons/lu";

export const navLinks = [
  { label: "Home", href: ROUTES.HOME },
  {
    label: "About",
    href: ROUTES.ABOUT,
  },
  {
    label: "Service",
    href: ROUTES.SERVICE,
    submenu: [
      {
        label: "MultiModal Transportation",
        href: ROUTES.MULTIMODAL_TRANSPORTATION,
        icon: multiModelTransportServiceIcon
      },
      { label: "Warehousing Solution", href: ROUTES.WAREHOUSE_SOLUTION, icon: warehouseServiceIcon },
      { label: "Packaging Solution", href: ROUTES.PACKAGING_SOLUTION, icon: packagingServiceIcon },
      {
        label: "3PL & Inventory Solution",
        href: ROUTES.THREEPL_INVENTORY_MANAGEMENT,
        icon: threePlServiceIcon
      },
      {
        label: "4PL/Inplant Logistics/Project Management",
        href: ROUTES.FOURPL_INPLANT_LOGISTICS_PROJECT_MANAGEMENT,
        icon: fourPlServiceIcon
      },
    ],
  },
  {
    label: "Media Center",
    href: ROUTES.MEDIACENTER,
  },
  {
    label: "Career",
    href: ROUTES.CAREER,
  },
  { label: "Contact", href: ROUTES.CONTACT },
];

export const companyDetail = {
  contact: "1800-833-3513",
  email: "care@vinsumaxpress.com",
  website: "https://www.vinsumaxpress.com",
  location:
    "404- Electronic City, Udyog Vihar, Phase IV, Sector 18, Gurugram, 122015.",
  instagram:
    "https://www.instagram.com/vinsumaxpress/profilecard/?igsh=MWllMWlkZ3VrNnAzZA==",
  facebook: "https://www.facebook.com/vinsumaxpress?mibextid=ZbWKwL",
  twitter: "https://x.com/vinsum_axpress",
  linkedin: "https://www.linkedin.com/company/vinsum-axpress",
  youtube:
    "https://youtube.com/@vinsumaxpressindiapvtltd.8044?si=PnkQydw1y1Wa-aGw",
  thread:
    "https://www.threads.net/@vinsumaxpress?xmt=AQGzDAAjWD4mrASrnVqeBbOfmwtsda6Rwq99jaQj6TGSFzw",
};

export const socialsLinks = [
  {
    label: "Facebook",
    image: facebook,
    href: companyDetail.facebook,
  },
  {
    label: "Instagram",
    image: instagram,
    href: companyDetail.instagram,
  },
  {
    label: "LinkedIn",
    image: linkedin,
    href: companyDetail.linkedin,
  },
  {
    label: "Youtube",
    image: youtube,
    href: companyDetail.youtube,
  },
  {
    label: "Thread",
    image: threads,
    href: companyDetail.thread,
  },
];

// Home page constants

export const homePage = {
  title: "Vinsum Axpress",
  description:
    "Vinsum Axpress is a leading innovative and sustainable manufacturing company focused on developing and delivering high-quality products and services to the automotive industry.",
  heroBannerVideo:
    "https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&mute=1&loop=1&playlist=dQw4w9WgXcQ",
  heroBannerImage:
    "https://cdn.pixabay.com/photo/2018/01/15/14/08/car-3082829_1280.jpg",
  serviceTitle: "Services We Offer",
  serviceDescription:
    "At Vinsum Axpress, we strive to provide our customers with exceptional products and services, meeting their needs and expectations.",
};

export const homeOurValues = [
  {
    image: peopleCircle,
    title: "People First",
  },
  {
    image: integrity,
    title: "Integrity",
  },
  {
    image: partnership,
    title: "Partnerships",
  },
  {
    image: excellence,
    title: "Excellence",
  },
  {
    image: accountability,
    title: "Accountability",
  },
  {
    image: innovation,
    title: "Innovation",
  },
];

export const homeServices = [
  {
    image: transportation,
    title: "Multimodal Transportation",
    href: ROUTES.MULTIMODAL_TRANSPORTATION,
  },
  {
    image: warehouse,
    title: "Warehousing Solution",
    href: ROUTES.WAREHOUSE_SOLUTION,
  },
  {
    image: logistics,
    title: "3PL & Inventory Management",
    href: ROUTES.PACKAGING_SOLUTION,
  },
  {
    image: creative,
    title: "Packaging Solution",
    path: "#packaging-solution",
    href: ROUTES.THREEPL_INVENTORY_MANAGEMENT,
  },
  {
    image: complianceDocument,
    title: "4PL/In-plant Logistics Project Management",
    href: ROUTES.FOURPL_INPLANT_LOGISTICS_PROJECT_MANAGEMENT,
  },
];

export const packagingProducts = [
  {
    id: 0,
    image: pp_box2,
    description: "This is a small description about this thing",
    benefits: [
      "Can be Designed to suit Trucks sizes for all Regions PAN INDIA.",
      "Flat Packed to 1/5th the Assembled Size.",
      "Can with stand Payload of up to 20-25 kg and 5 High Stacking.",
    ],
    label: "PP BOX",
    href: `${ROUTES.PACKAGING_PRODUCTS}${ROUTES.PP_BOX}`,
  },
  {
    id: 1,
    image: fsb2,
    description: "This is a small description about this thing",
    benefits: [
      "Can be Designed to suit Trucks sizes for all Regions PAN INDIA.",
      "Flat Packed to 1/5th the Assembled Size.",
      "Can with stand Payload of up to 20-25 kg and 5 High Stacking.",
    ],
    label: "Foldable Crates Bin",
    href: `${ROUTES.PACKAGING_PRODUCTS}${ROUTES.FOLDABLE_CRATES_BIN}`,
  },
  {
    id: 2,
    image: pls2,
    description: "This is a small description about this thing",
    benefits: [
      "Can be Designed to suit Trucks sizes for all Regions PAN INDIA.",
      "Flat Packed to 1/5th the Assembled Size.",
      "Can with stand Payload of up to 20-25 kg and 5 High Stacking.",
    ],
    label: "PLS Foldable",
    href: `${ROUTES.PACKAGING_PRODUCTS}${ROUTES.PLS_FOLDABLE}`,
  },
  {
    id: 3,
    image: flc2,
    description: "This is a small description about this thing",
    benefits: [
      "Can be Designed to suit Trucks sizes for all Regions PAN INDIA.",
      "Flat Packed to 1/5th the Assembled Size.",
      "Can with stand Payload of up to 20-25 kg and 5 High Stacking.",
    ],
    label: "FLC Foldable",
    href: `${ROUTES.PACKAGING_PRODUCTS}${ROUTES.FLC_FOLDABLE}`,
  },
  {
    id: 4,
    image: wiremess2,
    description: "This is a small description about this thing",
    benefits: [
      "Can be Designed to suit Trucks sizes for all Regions PAN INDIA.",
      "Flat Packed to 1/5th the Assembled Size.",
      "Can with stand Payload of up to 20-25 kg and 5 High Stacking.",
    ],
    label: "Wire Mesh Container",
    href: `${ROUTES.PACKAGING_PRODUCTS}${ROUTES.WIRE_MESH_CONTAINER}`,
  },
  {
    id: 5,
    image: mfc2,
    description: "This is a small description about this thing",
    benefits: [
      "Can be Designed to suit Trucks sizes for all Regions PAN INDIA.",
      "Flat Packed to 1/5th the Assembled Size.",
      "Can with stand Payload of up to 20-25 kg and 5 High Stacking.",
    ],
    label: "Metal Foldable Bin",
    href: `${ROUTES.PACKAGING_PRODUCTS}${ROUTES.METAL_FOLDABLE_BIN}`,
  },
  // {
  //   id: 6,
  //   image: Package2Icon,
  //   description: "This is a small description about this thing",
  //   benefits: [
  //     "Can be Designed to suit Trucks sizes for all Regions PAN INDIA.",
  //     "Flat Packed to 1/5th the Assembled Size.",
  //     "Can with stand Payload of up to 20-25 kg and 5 High Stacking.",
  //   ],
  //   label: "Pallets",
  //   href: `${ROUTES.PACKAGING_PRODUCTS}${ROUTES.PALLETS}`,
  // },
  {
    id: 6,
    image: plasticPallet,
    description: "This is a small description about this thing",
    benefits: [
      "Can be Designed to suit Trucks sizes for all Regions PAN INDIA.",
      "Flat Packed to 1/5th the Assembled Size.",
      "Can with stand Payload of up to 20-25 kg and 5 High Stacking.",
    ],
    label: "Plastic Pallets",
    href: `${ROUTES.PACKAGING_PRODUCTS}${ROUTES.PLASTIC_PALLETS}`,
  },
  {
    id: 7,
    image: woodenPallet,
    description: "This is a small description about this thing",
    benefits: [
      "Can be Designed to suit Trucks sizes for all Regions PAN INDIA.",
      "Flat Packed to 1/5th the Assembled Size.",
      "Can with stand Payload of up to 20-25 kg and 5 High Stacking.",
    ],
    label: "Wooden Pallets",
    href: `${ROUTES.PACKAGING_PRODUCTS}${ROUTES.WOODEN_PALLETS}`,
  },
  {
    id: 8,
    image: steelPallet,
    description: "This is a small description about this thing",
    benefits: [
      "Can be Designed to suit Trucks sizes for all Regions PAN INDIA.",
      "Flat Packed to 1/5th the Assembled Size.",
      "Can with stand Payload of up to 20-25 kg and 5 High Stacking.",
    ],
    label: "Steel Pallets",
    href: `${ROUTES.PACKAGING_PRODUCTS}${ROUTES.STEEL_PALLETS}`,
  },
  {
    id: 9,
    image: thermoTray,
    description: "This is a small description about this thing",
    benefits: [
      "Can be Designed to suit Trucks sizes for all Regions PAN INDIA.",
      "Flat Packed to 1/5th the Assembled Size.",
      "Can with stand Payload of up to 20-25 kg and 5 High Stacking.",
    ],
    label: "Thermoforming Trays",
    href: `${ROUTES.PACKAGING_PRODUCTS}${ROUTES.THERMOFORMING_TRAYS}`,
  },
  {
    id: 10,
    image: woodenBox,
    description: "This is a small description about this thing",
    benefits: [
      "Can be Designed to suit Trucks sizes for all Regions PAN INDIA.",
      "Flat Packed to 1/5th the Assembled Size.",
      "Can with stand Payload of up to 20-25 kg and 5 High Stacking.",
    ],
    label: "Customized Wooden Packaging Box",
    href: `${ROUTES.PACKAGING_PRODUCTS}${ROUTES.CUSTOMIZE_WOODEN_PACKAGING_BOX}`,
  },
];

export const homeAboutCards = [
  {
    image: realTimeLocator,
    path: ROUTES.TRACK_SHIPMENT,
    title: "Real Time Tracking",
    description:
      "Stay informed with real-time updates and worry-free service. Step into the future of logistics—where efficiency meets unwavering reliability.",
  },
  {
    image: safeDelivery,
    path: ROUTES.DAMAGE_FREE_DELIVERY,
    title: "Damage-free Delivery",
    description:
      "Rely on us for safe, damage-free deliveries—setting the benchmark for quality and reliability in every shipment.",
  },
  {
    image: customizedPackaging,
    path: ROUTES.PACKAGING_SOLUTION,
    title: "Flexible Packaging Service",
    description:
      "We provide versatile packaging solutions designed to meet your organization's diverse and evolving needs seamlessly.",
  },
  {
    image: warehouseService,
    path: ROUTES.WAREHOUSE_SOLUTION,
    title: "Warehouse Services",
    description:
      "Optimize your warehouse and boost efficiency with ease. From storage to shipping, our smart solutions keep your operations running smoothly and at peak performance.",
  },
  {
    image: techDriven,
    path: ROUTES.TECH_DRIVEN_SOLUTION,
    title: "Tech-Driven Solutions",
    description:
      "Embrace the future with technology-driven solutions that transform challenges into opportunities. Let innovation drive smarter, faster, and more connected outcomes.",
  },
  {
    image: customerSupport,
    path: ROUTES.CONTACT,
    title: "24/7 Customer Support",
    description:
      "Our dedicated team is always just a call away, ready to support you anytime, day or night.",
  },
];

export const homeServiceQuestions = [
  {
    title: "Multimodal Transportation",
    description:
      "Multimodal transport can ease the journey by optimizing routes and using the most efficient modes for each leg of the journey.",
    path: "multimodal-transport",
  },
  {
    title: "Warehousing Solution",
    description:
      "We are offering wide range of services including consolidation & packaging of cargoes of various types & sizes.",
    path: "warehouse-solution",
  },
  {
    title: "Packaging Solutions",
    description:
      "Dedicated solution design team that can design solutions based on inputs provided by the customer about the component / part and produce feasibility reports for all your packaging needs consultation.",
    path: "packaging-solution",
  },
  {
    title: "3PL Management",
    description:
      "Our Services often extend beyond logistics to include value-added services related to the production or procurement of goods, such as services that integrate parts of the supply chain.",
    path: "3pl-inventory-management",
  },
  {
    title: "4PL Management",
    description:
      "Our Services often extend beyond logistics to include value-added services related to the production or procurement of goods, such as services that integrate parts of the supply chain.",
    path: "4pl-inplant-logistics-project-management",
  },
];

export const faqTrackShipment = [
  {
    title: "Tracking Number",
    question: "What is Tracking Number & Where can I find it?",
    answer:
      "A tracking number or ID is a combination of numbers and possibly letters that uniquely identifies your shipment for national or international tracking. <br><br> Usually, the shipper or online shop is able to provide the tracking number or ID. If you have ordered a product in an online shop, the confirmation email or shipment tracking notification often contains the tracking number or ID. If not, please contact your shipper or online shop.",
  },
  {
    title: "tracking information",
    question: "When will my tracking information appear?",
    answer:
      "Tracking events usually appear 24-48 hours after receiving the Track and Trace ID. In general, once the shipment has reached our facility, a tracking event will appear.",
  },
  {
    title: "tracking number/ID",
    question: "Why is my tracking number/ID not working?",
    answer:
      "Please make sure you entered the correct tracking number in the correct format: Check for the minimum length of 5 characters, and if there are any special characters in your input. Tab, comma, space, and semicolon are understood as separators between several tracking IDs. If your tracking ID is not working, please contact your shipper or online shop.",
  },
];

export const multimodalTransPortationServices = [
  {
    title: "Air Cargo Services – Vinsum Axpress",
    description:
      `<p class="text-base">At <strong>VINSUM</strong>, we understand that in today’s fast-moving world, businesses require <strong>swift, secure, and reliable air cargo solutions</strong> to keep up with their time-critical delivery needs. Our dedicated <strong>Air Services division</strong> specializes in organizing both <strong>domestic and international air cargo</strong> shipping across a wide range of industries and cargo types. Backed by an experienced team and robust partnerships with leading airlines, we ensure your shipments are handled with precision, care, and urgency.</p> <br>
       <p class="text-base"> Our team works closely with clients to select the <strong>most efficient air routes</strong>, taking into consideration cargo sensitivity, delivery deadlines, and budgetary goals. Whether you're shipping urgent business documents, high-value goods, or bulk freight, we provide <strong>customized air cargo logistics</strong> that match your individual needs. From airport-to-airport to fully integrated <strong>door-to-door delivery</strong>, our services are designed to offer maximum speed, flexibility, and reach. <br><br>
        With access to <strong>dedicated cargo flights</strong> and specialized handling options like <strong>GCR (General Cargo Rate), Fast Track, and Hand Carry</strong>, VINSUM ensures a seamless experience from pickup to final delivery—backed by <strong>24/7 customer support</strong> and real-time tracking. </p>`,
    image: airService,
    offers: [
      `<strong>⏱️ Time-Sensitive Express Deliveries</strong><br>
       Tailored air solutions for <strong>urgent, high-priority cargo</strong>, ensuring the fastest possible delivery timelines across metro and non-metro cities. <br>`,

      `<strong>🌍 Domestic & International Reach</strong><br>
       Our network extends across <strong>India and global destinations</strong>, enabling you to ship goods almost anywhere in the world with ease and confidence.`,

      `<strong>💸 Cost-Effective Routing Solutions</strong><br>
       Smart cargo planning and route optimization to provide the <strong>best value for air freight</strong>, without compromising on speed or safety.`,

      `<strong>🕐 24/7 Operations & Support</strong><br>
       Round-the-clock monitoring and assistance to ensure <strong>real-time updates</strong>, proactive response, and complete peace of mind for time-bound shipments.`,

      `<strong>✈️ Dedicated Air Cargo Services</strong><br>
       We offer multiple service models, including: <br>
       <ul style="padding-left: 3rem; list-style-type: disc;">
          <li>
            <strong>GCR (General Cargo Rate) –</strong> Economic option for general freight<br>
          </li>
          <li>
            <strong>Fast Track –</strong> Prioritized handling for time-critical shipments<br>
          </li>
          <li>
            <strong>Hand Carry / On-Board Courier –</strong> A dedicated personnel member accompanies your cargo for maximum speed and security<br>
          </li>
       </ul>    
      `,

      `<strong>🏠 Flexible Delivery Options</strong><br>
       <ul style="padding-left: 3rem; list-style-type: disc;">
          <li>
            <strong>Door-to-Door:</strong> Pickup from your location and delivery to the final destination<br>
          </li>
          <li>
            <strong>Airport-to-Airport:</strong> Efficient transfers for clients who manage the first/last mile<br>
          </li>
       </ul>    
      `,

      `<strong>🏙️ Fast Transit Times</strong><br>
       <ul style="padding-left: 3rem; list-style-type: disc;">
          <li>
            <strong>18–24 hours delivery across major metro cities</strong><br>
          </li>
          <li>
            <strong>24–48 hours delivery in non-metro destinations,</strong> depending on the airline and location<br>
          </li>
       </ul>    
      `,
    ],
    path: ROUTES.AIR_SERVICE,
    secondaryText: `
      <hr class="my-4 border-t border-gray-300" /><br>
        <span class="text-2xl font-semibold">📦 Ideal For:</span><br><br>        
        <ul style="padding-left: 3rem; list-style-type: disc;">
          <li>
            Urgent medical and pharmaceutical shipments<br>
          </li>
          <li>
            High-value electronics and spare parts<br>
          </li>
          <li>
            Automotive, aerospace, and industrial goods<br>
          </li>
          <li>
            Retail and e-commerce express cargo<br>
          </li>
          <li>
            Documents, prototypes, and time-sensitive packages<br>  
          </li>
        </ul><br>
        <hr class="my-4 border-t border-gray-300" /><br>
        <span class="text-2xl font-semibold">🚀 Why Choose VINSUM for Air Freight?</span><br><br>        
        <ul style="padding-left: 3rem; list-style-type: disc;">
          <li>
            Decades of cargo expertise and reliable airline partnerships<br>
          </li>
          <li>
            Real-time tracking and proactive communication<br>
          </li>
          <li>
            Custom solutions for all types of industries<br>
          </li>
          <li>
            24/7 operations for global and national shipments<br>
          </li>
          <li>
            Commitment to speed, reliability, and safety<br>
          </li>
        </ul><br>
    `
  },
  {
    title: "Rail Cargo Services",
    description:
      ` <strong>Rail Cargo Services</strong> As part of our commitment to building a more sustainable and efficient cargo ecosystem in India, <strong>VINSUM proudly offers Rail Cargo Services in collaboration with Dedicated Freight Corridors (DFC), Indian Railways, and the Ministry of Railways</strong>, under the transformative <strong>PM Gati Shakti National Master Plan</strong>. This initiative is aligned with India’s goal of developing <strong>green, multi-modal logistics infrastructure</strong>, and we are proud to contribute to this mission by promoting <strong>eco-friendly and high-capacity rail transportation</strong> for goods movement.<br><br>
        Currently, VINSUM operates <strong>six key freight rail routes</strong> that connect <strong>North India with major commercial and industrial centers</strong>, including <strong>Bangalore, Chennai, Kolkata, Guwahati, and Gujarat</strong>. These services use a mix of dedicated <strong>freight trains, VPU (Vans Parcel Units) wagons</strong>, and other specialized rolling stock to ensure safe, reliable, and high-volume movement of cargo across long distances. Our rail-based logistics offer not only <strong>cost-effective transportation</strong> but also a <strong>significantly reduced carbon footprint</strong>, making them ideal for businesses looking to meet both operational and environmental goals.<br><br>
        We offer a diverse portfolio of rail cargo services that cater to different types of cargo and loading needs, including <strong>Truck-on-Train (TOT), RORO (Roll-On/Roll-Off)</strong>, and <strong>SLR (Seating-cum-Luggage Rake)</strong> services, as well as <strong>NMG CBU (Car Carrier) transportation</strong> for automotive sector clients.`,
    image: trainService,
    offers: [
      `<strong>Truck on Train (TOT) / RORO Services</strong><br>
       Transport entire loaded trucks directly on freight trains for faster, greener, and congestion-free movement—ideal for long-haul logistics and highway bypassing. <br>`,

      `<strong>VPU (Vans Parcel Unit) Services via Dedicated Freight Trains</strong><br>
       Leveraging dedicated freight trains fitted with VPUs to ensure the safe and timely transport of general and parcel cargo over vast distances.`,

      `<strong>SLR (Seating-cum-Luggage Rake) Services</strong><br>
       Specialized small-lot cargo solutions for mixed loads and regional deliveries, suited for lightweight goods and FMCG industries.`,

      `<strong>NMG (New Modified Goods) CBU Transportation</strong><br>
       A specialized service for the automotive industry, enabling the transport of Completely Built Units (CBUs) such as cars and two-wheelers across India using NMG rail wagons.`,
    ],
    path: ROUTES.RAIL_SERVICE,
    secondaryText: `
        <hr class="my-4 border-t border-gray-300" /><br>
        <span class="text-2xl font-semibold">Our Active Rail Routes Connect:</span><br><br>        
        <ul style="padding-left: 3rem; list-style-type: disc;">
          <li>
            North India ↔ <strong>Bangalore</strong><br>
          </li>
          <li>
            North India ↔ <strong>Chennai</strong><br>
          </li>
          <li>
            North India ↔ <strong>Kolkata</strong><br>
          </li>
          <li>
            North India ↔ <strong>Guwahati</strong><br>
          </li>
          <li>
            North India ↔ <strong>Gujarat</strong><br>  
          </li>
          <li>
            Other strategic rail corridors as per client demand<br>
          </li>
        </ul><br>
        <hr class="my-4 border-t border-gray-300" /><br>
        <span class="text-2xl font-semibold">Why Choose VINSUM's Rail Services?</span><br><br>        
        <ul style="padding-left: 3rem; list-style-type: disc;">
          <li>
            Alignment with <strong>PM Gati Shakti</strong> for national logistics development<br>
          </li>
          <li>
            Reduced fuel consumption & <strong>lower carbon emissions</strong><br>
          </li>
          <li>
            Reliable long-haul transport with <strong>fewer transit delays</strong><br>
          </li>
          <li>
            Flexible load types: trucks, parcels, cargo units, and automobiles<br>
          </li>
          <li>
            Collaboration with Indian Railways ensures <strong>priority movement</strong><br>
          </li>
          <li>
            Ideal for <strong>B2B, industrial, and large-volume logistics</strong><br>
          </li>
        </ul><br>
    `
  },
  {
    title: "Road Transportation Services",
    description:
      `At <strong>VINSUM</strong>, we take pride in being one of the most dependable providers of high-volume <strong>road freight transportation</strong> in India. With a strong understanding of the diverse and dynamic needs of our clients across industries, our <strong>Road Services</strong> are designed to provide <strong>flexibility, coverage, and reliability</strong>. Whether it's Full Truck Load (FTL), Part Truck Load (PTL), or specialized cargo, we deliver customized road transport solutions that ensure timely and secure deliveries across the country. <br><br>
       Our road network is powered by a robust fleet of <strong>920+ GPS-enabled vehicles</strong>, capable of covering over <strong>3 lakh kilometers every day</strong>, offering pan-India connectivity through a well-organized and technology-driven approach. From temperature-sensitive and weather-proof shipments to over-dimensional cargo (ODC) and milk run logistics, VINSUM handles a wide variety of freight requirements with precision and care. With strong compliance standards, real-time tracking, and experienced logistics personnel, we offer our clients peace of mind and operational efficiency on every mile of the journey. <br><br>
       <hr class="my-4 border-t border-gray-300" /><br>
      `,
    image: roadService,
    offers: [
      `<strong>Flexible Routing & Real-Time GPS Monitoring</strong><br>
       All vehicles are <strong>equipped with GPS tracking</strong>, enabling route optimization, visibility, and timely updates for clients throughout the cargo movement cycle. <br>`,

      `<strong>FTL / PTL Management (Full & Part Truck Load)</strong><br>
       Whether you require an entire truckload for high-volume goods or shared truck space to optimize costs, we provide scalable and flexible load options to suit your cargo volume.`,

      `<strong>ODC (Over-Dimensional Cargo) Transportation</strong><br>
       Specialized handling and route planning for <strong>over-sized and heavy cargo,</strong> using suitable trailers, escorts, and infrastructure to ensure compliance and safety.`,

      `<strong>920+ Fleet Size Covering 3+ Lakh Km/Day</strong><br>
       A large, modern, and well-maintained fleet that services <strong>thousands of kilometers daily</strong>, ensuring <strong>nationwide coverage</strong> with consistent delivery performance.`,

      `<strong>Milk Run Transportation Services</strong><br>
       Efficient distribution systems where a single vehicle makes <strong>multiple pickups or deliveries</strong> along a route, helping reduce costs and streamline supply chain operations.`,

      `<strong>Weather-Proof, Containerized Vehicles</strong><br>
       We use containerized trucks designed to protect goods from <strong>rain, dust, and temperature fluctuations</strong>, making them ideal for sensitive cargo such as pharmaceuticals, electronics, and perishables.`,
    ],
    path: ROUTES.ROAD_SERVICE,
    secondaryText: `
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      
      <!-- Why Choose Section -->
      <div class="order-1">
        <span class="text-base font-semibold">Why Choose VINSUM’s Road Cargo Solutions?</span><br><br>
        <ul style="padding-left: 3rem; list-style-type: disc;">
          <li>Wide geographical coverage with end-to-end service<br></li>
          <li>High-load capacity for industrial and commercial cargo<br></li>
          <li>GPS-enabled real-time visibility and monitoring<br></li>
          <li>24/7 operations with proactive customer support<br></li>
          <li>Cost-effective and scalable for all business sizes<br></li>
          <li>Compliance with safety and environmental standards<br></li>
        </ul>
      </div>

      <!-- Industries We Serve Section -->
      <div class="order-2">
        <span class="text-base font-semibold">Industries We Serve:</span><br><br>        
        <ul style="padding-left: 3rem; list-style-type: disc;">
          <li>FMCG & Retail Distribution<br></li>
          <li>Automotive & Spare Parts<br></li>
          <li>Industrial Equipment & Machinery<br></li>
          <li>Pharmaceuticals, Healthcare & Chemicals<br></li>
          <li>Consumer Electronics<br></li>
          <li>E-Commerce & Warehousing<br></li>
        </ul>
      </div>

    </div>`,
    speedTruck: `
      <strong>VINSUM</strong> is a leading name in the Indian cargo and logistics industry, renowned for delivering <strong>fast, efficient, and customer-centric transportation solutions</strong>. As part of our commitment to meet the evolving needs of modern businesses, we proudly offer our specialized <strong>Speed Truck Services</strong>—a same-day and time-sensitive delivery solution designed to help clients move cargo swiftly and reliably across key locations in India. In today's fast-paced and demand-driven economy, timely delivery is not just an expectation—it's a necessity. That’s why VINSUM has developed a dedicated logistics model focused on speed, reliability, and operational excellence. <br><br>
      <p class="text-sm">Our Speed Truck Services are tailored to serve manufacturers, suppliers, and businesses that require <strong>quick turnaround times</strong> without compromising on the safety or quality of the goods being transported. With a strategic presence in major industrial cities, we can facilitate direct and secure transportation routes, ensuring goods reach their destination on the <strong>same day or within a guaranteed 24–96 hour window</strong>, depending on the location. Our operations are backed by a disciplined scheduling system, a trained fleet, and an experienced logistics team that monitors each delivery closely. <br><br>
      Whether it's urgent production materials, retail distribution, or high-value industrial shipments, VINSUM’s Speed Truck Services are built to provide peace of mind and business continuity. </p> <br>
      <hr class="my-4 border-t border-gray-300" /><br>
    `,
    offersSpeedTruck: [
      `<strong>Same-Day & Time-Definite Delivery</strong><br>
       VINSUM specializes in <strong>same-day delivery services</strong> that are aligned with the urgency of customer requirements. This service is perfect for industries where time-sensitive logistics are crucial, such as automotive, electronics, pharmaceuticals, and retail. <br>`,

      `<strong>Dedicated Route Network Covering Major Indian Cities</strong><br>
       We have carefully designed and optimized transport routes connecting <strong>key industrial and commercial hubs</strong> across India.`,

      `<strong>Guaranteed Turnaround Time (TAT) of 24–96 Hours</strong><br>
       Depending on the origin and destination, we commit to a <strong>Turnaround Time (TAT)</strong> of anywhere between 24 to 96 hours, ensuring that cargo reaches its destination efficiently without unnecessary delays.`,

      `<strong>Pan-India Operational Capability</strong><br>
       With our growing network and fleet capacity, we offer services that span across the country, providing businesses with a <strong>single-window solution for nationwide cargo movement.</strong>`,

      `<strong>Designed for Modern Business Needs</strong><br>
       Our services are especially suitable for industries that demand precision and punctuality. We support businesses in <strong>supply chain optimization, inventory management</strong>, and <strong>customer fulfillment</strong>.`,

      `<strong>Flexible, Scalable & Customer-First Approach</strong><br>
       At VINSUM, we understand that no two clients are the same. That’s why we offer <strong>customizable solutions</strong> based on delivery urgency, type of cargo, and specific location requirements.`,

      `<strong>Safety & Reliability</strong><br>
      All cargo is handled by trained professionals and transported via secure routes with real-time tracking, ensuring that goods are delivered safely and on time.`,
    ],
    secondaryTextSpeedTruck: `
      <hr class="my-4 border-t border-gray-300" /><br><br>
      <span class="text-4xl font-semibold">Why Choose VINSUM for Speed Truck Services?</span><br><br>        
      <ul class="text-2xl" style="padding-left: 3rem; list-style-type: disc;">
          <li>
            Industry experience and operational expertise<br>
          </li>
          <li>
            Strategic delivery hubs for optimal reach<br>
          </li>
          <li>
            Scalable for both SME and large enterprises<br>
          </li>
          <li>
            Transparent and competitive pricing models<br>
          </li>
          <li>
            Commitment to service excellence<br>
          </li>
        </ul><br>
    `
  },
];

export const clients = [
  {
    logo: "/clients/tata.png",
  },
  {
    logo: "/clients/tafe.png",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Fiat_logo23.png",
  },
  // {
  //   logo: "https://upload.wikimedia.org/wikipedia/en/3/34/Logo_for_Maruti_Suzuki.svg",
  // },
  {
    logo: "https://vinsumaxpress.com/assets/img/clients/sonalika-international-logo.png",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/JCB-Logo.jpg",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/NBC_logo.png",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/Suzuki_Motor_Corporation_logo.svg",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Yazaki_company_logo.svg",
  },
  // {
  //   logo: "https://www.jtekt.co.in/Images/logo.png",
  // },
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/d/df/Ashok_Leyland_logo.svg",
  },
  // {
  //   logo: "/clients/moonlight.png",
  // },
  {
    logo: "https://musashi.co.in/images/logo.png",
  },
  {
    logo: "https://cnhi-p-001-delivery.sitecorecontenthub.cloud/api/public/content/f68ff49b2cb542afb061e36729b1da2a?v=80d468ad&t=Size200",
  },
  // {
  //   logo: "https://media.licdn.com/dms/image/v2/D4E0BAQFIU2-8eAR2Kw/company-logo_200_200/company-logo_200_200/0/1728074552776/carraro_technologies_india_pvt_ltd_logo?e=2147483647&v=beta&t=vwUAM0nkeBHKLmzAWHGSnF266rT84NEsBud-sGqcmvk",
  // },
  {
    logo: "https://www.surinauto.com/wp-content/uploads/2023/09/logo.webp",
  },
  {
    logo: "/clients/tennecco.svg",
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Escorts_Kubota_Limited.jpg",
  },
];

// Service page
export const multimodalTransPortations = [
  {
    image: truckDrivingRoad,
    title: "Road Services",
    description:
      "Catering to the needs of our clients, we offer high volume of freight transportation by roads.",
    offers: [
      "Flexible routing & GPS enabled fleet",
      "FTL/PTL Management",
      "OOC cargo movement",
      "With 920+ Fleet size covering more than 3 lakh km per day",
      "Milk run transportation",
      "Weather proof containerized vehicle",
    ],
  },
  {
    image: truckSpeedService,
    title: "Speed Truck Services",
    description:
      "VINSUM is an organization which provides same day delivery to Customers at their Specified Locations considering the Customer Requirement in Current Scenario.",
    offers: [
      "Well defined routes (Dharuhera, Pune, Jamshedpur, Chennai, Ahmadabad, Nagpur, Nashik, Pantnagar & Bangalore)",
      "24-96 hrs TAT in pan India",
      "Cut off time at 2 a.m every day",
    ],
  },
  {
    image: railService,
    title: "Rail Services",
    description:
      "We collaborate with DFC, Indian Railways, and the Ministry of Railways under the PM Gati Shakti plan for greener logistics. We currently operate 6 routes with dedicated freight trains and VPU wagons, connecting North India with Bangalore, Chennai, Kolkata, Guwahati, and Gujarat.",
    offers: [
      "Truck On train (TOT)/RORO services",
      "VPU services through dedicated freight trains",
      "SLR services",
      "NMG CBU Transportation",
    ],
  },
  {
    image: airplaneDesignFreight,
    title: "Air Services",
    description:
      "Our experienced staff organize national and international air cargo shipping for a wide range of cargoes by selecting optimal routes based on your individual needs",
    offers: [
      "Time-sensitive express deliveries",
      "Wide geographical reach",
      "Dedicated cargo flights (GCR, Fast Track, Hand Carry)",
      "Door-to-door & airport-to-airport services",
      "18-24 hrs in metro cities",
      "24-48 hrs in non-metro cities airlines",
    ],
  },
];

export const endToEndSupplyChains = [
  {
    title: "Supplier",
    image: customer,
  },
  {
    title: "Warehouse-1",
    image: warehouse1,
  },
  {
    title: "Hub 1",
    image: hub1,
  },
  {
    title: "Hub 2",
    image: hub2,
  },
  {
    title: "Warehouse-2",
    image: warehouse2,
  },
  {
    title: "End Mile Delivery",
    image: customer,
  },
];

export const integratedSupplyChains = [
  {
    image: thinking,
    title: "Layered securely",
    text: "Packaging Solutions Green returnable & Customized Packaging Solution",
  },
  {
    image: serviceTransportation,
    title: "Quality control of each part",
    text: "Multi-modal Transportation Surface Train & Air",
  },
  {
    image: warehouse1,
    title: "Reliable customer service",
    text: "Warehouse Management Dashboard Enables WMS",
  },
  {
    image: inventorySearch,
    title: "Maintenance",
    text: "Inventory Control Customized App For Accurate & Real Time Visibility",
  },
  {
    image: productManagement,
    title: "Delivered safely",
    text: "Value Added Services Ownership of Quality People & Processes",
  },
  {
    image: crafting,
    title: "Based on integrated",
    text: "Consultancy Design & Implement Integrated Solution",
  },
  // {
  //   image: "/images/",
  //   text: "Last Mile",
  // },
  // {
  //   image: "/images/",
  //   text: "Packaging Solutions Green returnable & Customized Packaging Solution",
  // },
  // {
  //   image: "/images/",
  //   text: "Consultancy Design & implement integrated Solution",
  // },
];

export const packagingServices = [
  {
    title: "Visual Packaging Solution Design",

    description:
      "We have a dedicated solution design team that specializes in material-level knowledge and can design solutions based on inputs provided by the customers about the component/part. Produce feasibility reports for all your packaging needs consultation.",
  },
  {
    title: "Packaging Product Manufacturing & Development",
    description:
      "The range of products and services by VINSUM AXPRESS are designed keeping in mind the flexible and customized needs of a customer as per their demand. We offer customized solutions in various materials i.e. PP, Plastic (HDP/LDP), Metal (Iron, Steel, Wire mesh), Wood & Paper Corrugated etc.",
  },
  {
    title: "OPEX Modal - Product Rent (Per Trip Basis)",
    description:
      "The returnable packaging/Pooling Concept Services in a way that VINSUM AXPRESS owned product provided on Rental as a Service. A nominal rent is charged for the use of product on a per-trip basis with Reverse logistics facilities. It is a growing service to reduce capital expenditures and improve Day to Day Supply Chain Operations for Customers.",
  },
  {
    title: "CAPEX Modal - Product on Sale",
    description:
      "In the CAPEX Modal, we design and develop customized packaging products for their specific needs. The ownership of the packaging product lies with the customer as it is a one-time sale by VINSUM AXPRESS, and the services for reverse logistics to keep the supply chain moving can be managed by VINSUM AXPRESS.",
  },
  {
    title: "Product on Fix Rental",
    description:
      "The returnable packaging/Pooling Concept Services, VINSUM AXPRESS owned product provided on rental as a Service. A fixed rent is charged for the use of the product on a monthly basis with Non-Reverse facilities. It is a growing service method to reduce capital expenditures and improve Day to Day Supply Chain Operations for Customers.",
  },
];

export const serviceData = [
  {
    name: "Medtronic",
    label: "Electric car charging",
    image: truckDrivingRoad,
    path: ROUTES.PACKAGING,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi error recusandae animi, est velit officia alias inventore modi soluta, molestiae exercitationem reiciendis commodi deserunt temporibus illo harum. Voluptate, optio!",
  },
  {
    name: "Medtronic XYZ",
    label: "Residental solar panels",
    image: airplaneDesignFreight,
    path: ROUTES.FRANCHISE,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi error recusandae animi, est velit officia alias inventore modi soluta, molestiae exercitationem reiciendis commodi deserunt temporibus illo harum. Voluptate, optio!",
  },
  // {
  //   name: "Medtronic ABC",
  //   label: "Wind power industry",
  //   image: "/images/back-closeup-view-delivery-truck-driving-road.jpg",
  //   description:
  //     "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis nisi error recusandae animi, est velit officia alias inventore modi soluta, molestiae exercitationem reiciendis commodi deserunt temporibus illo harum. Voluptate, optio!",
  // },
];

export const visnumNetwork = {
  title: "Vinsum Axpress Network",
  description:
    "Headquartered in Gurugram, a prominent area of the NCR, and empowered with a powerful and integrated distribution chain capability enabled by a massive network of numerous distribution-hubs and branches across the country, we have grown as a strong national logistics brand over the years.",
  networks: [
    {
      name: "Owned Space",
      total: "30M Sqft",
    },
    {
      name: "Branches",
      total: "75+",
    },
    {
      name: "Warehouses",
      total: "53+",
    },
    {
      name: "Routes",
      total: "30+",
    },
    {
      name: "Serviceable PinCode",
      total: "15000+",
    },
    {
      name: "Regional Offices",
      total: "7",
    },
  ],
};

export const leadershipTeams = [
  // {
  //   image: chairman,
  //   name: "Mr. Vinod Sharma",
  //   position: "Chairman & Managing Director",
  //   twitter: "",
  //   instagram: "",
  //   linkedin: "",
  // },
  {
    image: profileUser,
    name: "Mrs. Kusum Sharma",
    position: "Chair Person",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    image: lalitSharma,
    name: "Mr. Lalit Sharma",
    position: "Managing Director",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    image: amitSharma,
    name: "Mr. Amit Sharma",
    position: "Executive Director",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    image: ankitSharma,
    name: "Mr. Ankit Sharma",
    position: "Executive Director",
    twitter: "",
    instagram: "",
    linkedin: "https://linkedin.com/in/ankit-sharma-5587a2108/",
  },
  {
    image: opVyas,
    name: "Mr. OP Vyas",
    position: "Associate Director",
    twitter: "",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/om-prakash-vyas-6b071b15/",
  },
  {
    image: janardan,
    name: "Mr. Janaradan Singh",
    position: "Senior VP - Support Functions",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    image: tcSharma,
    name: "Mr. T.C Sharma",
    position: "President — Operations",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    image: parminderSingh,
    name: "Mr. Parminder Singh",
    position: "President — Business Excellence & Corp Affairs",
    twitter: "",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/parminder-singh-13935615?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  },
  {
    image: vimalSharma,
    name: "Mr. Vimal Sharma",
    position: "AVP — Admin, Audit & Credit Control",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    image: jyotiSharma,
    name: "Mrs. Jyoti Sharma",
    position: "Operations",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    image: anilRajput,
    name: "Mr. Anil Rajput",
    position: "AVP — IT, Branding & Billing",
    twitter: "",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/ak-rajput-701792145/",
  },
  {
    image: supriyaDutt,
    name: "Mrs. Supriya Dutt",
    position: "HEAD — HR Department",
    twitter: "",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/supriya-dutt-001aaa44/",
  },
  {
    image: amitShandilay,
    name: "Amit Shandilay",
    position: "GM — Information Technology (IT)",
    twitter: "",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/amit-kumar-shandilay-28851219/",
  },
  {
    image: mohitVashist,
    name: "Mr. Mohit Vashisht",
    position: "Manager — Packaging Manufacturing Plant",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  {
    image: mukeshGoyal,
    name: "Mr. Mukesh Goyal",
    position: "GM — Sales",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  // {
  //   image: profileUser,
  //   name: "Mr. Ritesh Sharma",
  //   position: "-----",
  //   twitter: "",
  //   instagram: "",
  //   linkedin: "",
  // },
  // {
  //   image: profileUser,
  //   name: "Mr. Ghyanshyam",
  //   position: "----------",
  //   twitter: "",
  //   instagram: "",
  //   linkedin: "",
  // },
  {
    image: poonam,
    name: "Mrs. Poonam Chhabra",
    position: "Senior Manager — HR",
    twitter: "",
    instagram: "",
    linkedin: "",
  },
  // {
  //   image: profileUser,
  //   name: "Mr. Ramandeep Singh",
  //   position: "National Head — Sales & Operations",
  //   twitter: "",
  //   instagram: "",
  //   linkedin: "",
  // },
  {
    image: nareshPilania,
    name: "Mr. Naresh Pilania",
    position: "VP — Sales & Operations",
    twitter: "",
    instagram: "",
    linkedin: "https://www.linkedin.com/in/naresh-pilania-a2524637/",
  },
  // {
  //   image: profileUser,
  //   name: "Mr. Mahender Sharma",
  //   position: "AVP — Sales & Operations",
  //   twitter: "",
  //   instagram: "",
  //   linkedin: "",
  // },
];

// Career
export const careerPage = {
  title: "Find a job that suits your interest and skills.",
  description:
    "We believe that our people are our greatest asset. We are committed to fostering a collaborative and innovative work environment where every team member can thrive.",
  image: vinsumCareer,
  careerStats: [
    {
      icon: <LuGlobe />,
      value: "75+",
      label: "Total Branches",
    },
    {
      icon: <LuBuilding2 />,
      value: "Gurgaon",
      label: "Headquarters",
    },
    {
      icon: <LuUsersRound />,
      value: "600+",
      label: "Total Employees",
    },
    {
      icon: <LuBriefcaseBusiness />,
      value: "15+",
      label: "Job Openings",
    },
  ],

  careerCategories: [
    {
      icon: LuGlobe,
      name: "Marketing",
      position: 5,
    },
    {
      icon: LuBuilding2,
      name: "Development",
      position: 10,
    },
    {
      icon: LuUsersRound,
      name: "Design",
      position: 3,
    },
    {
      icon: LuBriefcaseBusiness,
      name: "Operations",
      position: 8,
    },
    {
      icon: LuGlobe,
      name: "Sales",
      position: 7,
    },
    {
      icon: LuBuilding2,
      name: "HR",
      position: 4,
    },
  ],

  openings: [
    {
      position: "IT Development Head-GM/AGM",
      experience: "12+ Year's",
      vacancy: 1,
      location: "Gurgaon Corporate-Udyog Vihar ph4",
      role: "Full Time",
    },
    {
      position: "Jr. Developer",
      experience: "2-5 Year's",
      vacancy: 3,
      location: "GGCO",
      role: "Full Time",
    },
    {
      position: "Sr. Developer",
      experience: "4-7 Year's",
      vacancy: 1,
      location: "GGCO",
      role: "Full Time",
    },
    {
      position: "Web Developer",
      experience: "4-7 Year's",
      vacancy: 1,
      location: "GGCO",
      role: "Full Time",
    },
    {
      position: "Desktop Support H & N",
      experience: "2-5 Year's",
      vacancy: 1,
      location: "GGCO",
      role: "Full Time",
    },
    {
      position: "BA-Documentation / Training",
      experience: "4-7 Year's",
      vacancy: 1,
      location: "GGCO",
      role: "Full Time",
    },
    {
      position: "SR. Manager (Female) - Sales & Operations",
      experience: "5-12 Year's",
      vacancy: 2,
      location: "GGCO",
      role: "Full Time",
    },
    {
      position: "Corporate Trainer",
      experience: "4-8 Year's",
      vacancy: 2,
      location: "GGCO",
      role: "Full Time",
    },
    {
      position: "Territory Head",
      experience: "10 to 15 Year's in Logistics",
      vacancy: 1,
      location: "Chennai",
      role: "Full Time",
    },
    {
      position: "Key Account Manager",
      experience: "3-7 Year's in logistics",
      vacancy: 1,
      location: "Kandivili (MBY)",
      role: "Full Time",
    },
    {
      position: "Key Account Manager",
      experience: "3-7 Year's in logistics",
      vacancy: 1,
      location: "JNPT (MBY)",
      role: "Full Time",
    },
  ],
};

export const blogs = [
  {
    id: 1,
    title: "Champion of Supply Chain Management 2020",
    featuredImage: "https://vinsumaxpress.com/assets/img/blog/ET_01.png",
    image1: null,
    image2: null,
    description1:
      'It is very pleasure and also a proud moment for us that The Economic Times has recognized our Company "VINSUM AXPRESS INDIA PVT LTD" as a Champion of Supply Chain Management 2020.',
    description2:
      'It is very pleasure and also a proud moment for us that The Economic Times has recognized our Company "VINSUM AXPRESS INDIA PVT LTD" as a Champion of Supply Chain Management 2020.',
    description3:
      'It is very pleasure and also a proud moment for us that The Economic Times has recognized our Company "VINSUM AXPRESS INDIA PVT LTD" as a Champion of Supply Chain Management 2020.',
    isExternal: false,
    externalLink: null,
    author: "Vinsum Axpress",
    createdAt: "Jan 21, 2021",
  },
  {
    id: 2,
    title: "Honored as the 2020 Supply Chain Management Champion",
    featuredImage: honored2020blog,
    description1:
      `Trucks come in a wide range of shapes and sizes, each designed to handle specific types of cargo. These specialized vehicles are built for particular tasks, and their dimensions and configurations make transporting goods more efficient. However, many people often need help choosing the right truck for their cargo needs. This article will explore the different types of trucks available and the kinds of loads each is best suited to carry.
       <br><br><span class="text-xl font-semibold">Temperature-controlled truck</span><br><br>
       These trucks are equipped with refrigeration systems and are used to transport perishable goods that require cold storage to prevent spoilage. Items such as milk, eggs, food products, and medicines are commonly carried in these vehicles. Since lower temperatures help preserve these goods, refrigerated trucks are ideal for maintaining their quality during transit. Transportation is often carried out overnight to ensure freshness and efficiency.<br><br>
       <span class="text-xl font-semibold">Flatbed trucks</span><br><br>
       A flatbed truck features a driver's cabin at the front and an open, flat platform at the back. This design makes it ideal for transporting items like lumber, concrete, or plastic pipes, and similar bulky materials. The open structure allows for easy loading and unloading from all sides. A standard flatbed trailer can typically handle a load of up to 48,000 pounds with ease.<br><br>
       <span class="text-xl font-semibold">Box trucks</span><br><br>
       These are basic trucks, commonly referred to as cube trucks. They are compact, fully enclosed, and well-sealed, making them ideal for transporting household furniture, especially during residential moves. Due to their smaller size, they are easier to drive and manage, often requiring minimal licensing. This ease of use contributes to their consistent demand.<br><br>
       <span class="text-xl font-semibold">Liftgate</span><br><br>   
       "Liftgate" is a commonly used term in American English, while in British English, the equivalent term is "tail lift." These trucks are equipped with a rear platform that can lift goods from ground level into the truck, significantly reducing the need for manual lifting and enhancing efficiency. The lifting mechanism can be hydraulic, mechanical, or vary based on the truck's design and technology.<br><br> 
        <span class="text-xl font-semibold">Semi-trailer truck</span><br><br> 
        Semi-trailer trucks are also commonly used. They feature open sides, roofs, or rear sections that make loading freight easier. With a capacity of up to 24,000 kg, they are ideal for transporting items that can be stacked.<br><br>
        <span class="text-xl font-semibold">Jumbo trailer truck</span><br><br>
        These trailers offer greater capacity than semi-trailer trucks, thanks to their lower wheel diameter and G-shaped floor. They are ideal for carrying large, capacitive items due to their spacious and lightweight design. Like semi-trailers, they allow loading from the sides, top, or rear.<br>
        In the logistics industry, these trucks are commonly used, with their capabilities making it easy to choose the right one for different goods. It's important to select wisely, as different truck types affect freight costs.<br><br>
        <span class="text-xl font-semibold">List of truck types</span><br><br>
        The purpose of this list is to categorize various truck types and provide links to articles about each. Road trucks are primarily classified by weight into three main categories: light trucks, medium trucks, and heavy trucks. Additionally, there are specialized trucks, such as extremely heavy vehicles used for oversized shipments, off-road trucks, and large trucks designed for mining and highway use, which may require special permits.<br><br>
       `,
    author: "Vinsum Axpress",
    createdAt: "May 20, 2020",
    isExternal: false,
    externalLink: null,
  },
  {
    id: 3,
    image1: lastMileDelivery2,
    title: "What is Last Mile Delivery? A Step-by-Step Guide",
    featuredImage: lastMileDelivery,
    isExternal: false,
    externalLink: null,
    description1:
      `Imagine the final over of a nail-biting cricket match—the team needs just a few runs, but every delivery counts. One mistake could cost the entire game. In logistics, <strong>last-mile delivery</strong> is much the same—high-stakes, high-pressure, and critical. It’s the final stretch where timing, precision, and performance matter most. Last-mile delivery can account for over <strong>53% of total shipping costs</strong> (Source: Chain Store Age), making it one of the most complex and costly parts of the supply chain. <br><br>
       Today, the logistics industry stands at a crucial juncture. The rapid rise of quick commerce and e-commerce has intensified the demands placed on last-mile operations. Consider this: in 2023 alone, India recorded <strong>345 million online shoppers</strong> (Source: Statista), resulting in the shipment of more than <strong>300 million packages</strong>. The scale is staggering—and only set to grow. <br><br>
       So, what does this mean for businesses? The message is clear: the pressure on last-mile delivery will continue to escalate, and <strong>mastering this final leg of the journey is essential to staying competitive</strong> in a dynamic market. <br><br>
       At <strong>Vinsum Axpress</strong>, we understand the critical importance of last-mile delivery. That’s why we’re focused on building efficient, agile, and tech-driven last-mile solutions that help businesses meet rising customer expectations—on time, every time. Because in this game, <strong>every delivery is a winning run</strong>.<br><br>`,
    description2: 
      `<br> <span class="text-xl font-bold">Winning the last-mile delivery race</span><br><br> The key to thriving under the growing demands of modern logistics lies in partnering with experts who specialize in last-mile delivery. <strong>Vinsum Axpress</strong> empowers businesses to achieve precision, speed, and reliability right where it matters most—at the customer’s doorstep. With last-mile delivery coverage spanning <strong>19,000+ pin codes</strong> and backed by a solid logistics infrastructure, Vinsum Axpress is built to handle the pressure. <br><br>
       But what exactly does last-mile delivery involve? <br>
       The term refers to the <strong>final phase of the supply chain—</strong>moving goods from a distribution hub, fulfillment center, warehouse, or retail outlet directly to the end customer. This stage is not just the last link in the chain; it’s the most crucial. It significantly shapes the customer’s overall experience, making it a critical focus area for any business aiming to excel in today’s competitive market. <br><br>
       <span class="text-base font-semibold">With Vinsum Axpress, the last mile isn’t just the end—it’s where excellence is delivered.</span><br><br>
       <span class="text-lg font-semibold">Why is last-mile delivery so challenging?</span><br>
       Now, let’s address the million-dollar question—<strong>why is last-mile delivery considered the most complex and costly phase of the logistics chain?</strong> The answer lies in customer expectations: for <strong>98% of consumers</strong>, delivery experience directly impacts their brand loyalty (Source: Meteor Space). That’s a high-stakes game for any business.<br><br>
       &emsp;Here are some of the key challenges that make last-mile delivery so demanding:<br><br>
       <ul style="padding-left: 3rem; list-style-type: disc;">
          <li>
            <span class="text-base font-semibold">Cost Pressures:</span><br>
            Last-mile delivery is expensive. Rising fuel prices, labor costs, vehicle maintenance, and other operational expenses can significantly impact profit margins and cost-efficiency. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Urban Traffic & Congestion:</span><br>
            Navigating traffic in densely populated cities and dealing with poor road infrastructure can delay deliveries and reduce route efficiency. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Inaccurate Delivery Addresses:</span><br>
            Incomplete or incorrect addresses lead to failed delivery attempts, causing delays, added costs, and customer dissatisfaction. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Customer Unavailability:</span><br>
            When recipients aren’t available to receive packages, re-delivery attempts are often necessary—further increasing operational costs and resource usage. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Delivery Delays:</span><br>
            Time-sensitive deliveries are vulnerable to unpredictable disruptions such as weather, traffic, or unforeseen logistics hurdles. These delays not only impact delivery schedules but can trigger a domino effect, affecting customer trust and incurring financial losses. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Parcel Size & Special Handling:</span><br>
            Delivering oversized, fragile, or temperature-sensitive items often requires extra packaging, specialized vehicles, or trained personnel—adding complexity to the last-mile process. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Labor Shortages:</span><br>
            A lack of trained delivery staff, particularly during high-demand seasons, can impact delivery timelines and overall service reliability. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Regulatory Challenges:</span><br>
            Varying regional laws, taxes, permits, and regulations—especially for cross-border deliveries—can introduce additional layers of complexity. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Returns Management:</span><br>
            Efficiently handling returned items is another major challenge. Reverse logistics can disrupt forward delivery operations and inflate operational costs. <br><br>
          </li>
        </ul>
        <br>
        At <strong>Vinsum Axpress</strong>, we understand these pain points and are committed to solving them through tailored last-mile solutions that balance speed, accuracy, and cost-effectiveness—helping your business stay ahead in a rapidly evolving delivery landscape. <br><br><br>
        <span class="text-lg font-semibold">What are the key elements of a successful last-mile delivery process?</span><br><br>
        The final stage of delivery is often the deciding factor for customer satisfaction. However, last-mile delivery is much more than simply moving a package from point A to point B—it requires careful planning and precise execution. Each step plays a critical role from when the order is processed, sorted, dispatched, tracked, and finally delivered. Managing all these stages effectively is essential to ensuring efficiency and reliability, but it can become a daunting task without the right support.
        <br><br>This is where partnering with top-tier last-mile delivery services, such as <strong>Vinsum Axpress</strong>, becomes essential. With over 4,500 pick-up and delivery centers across India, <strong>Vinsum Axpress</strong> covers every part of the delivery process, ensuring smooth and timely operations. <br><br>
        But we don’t stop at simply delivering packages. At <strong>Vinsum Axpress</strong>, we go above and beyond the basics to offer additional features that enhance the entire logistics experience. Let’s explore how we ensure your logistics operations run at their best, making last-mile delivery seamless and efficient for your business.<br><br><br>
        <span class="text-lg font-semibold">How does Vinsum Axpress transform challenges into opportunities?</span>
        <br><br>Did you know that 84% of consumers would avoid shopping from a retailer after a poor delivery experience (Source: Meteor Space)? This is why Vinsum Axpress places a strong emphasis on last-mile delivery, ensuring that shipments are delivered promptly, efficiently, and without delay. Let’s explore how Vinsum Axpress, one of India’s top last-mile delivery providers, rises to the challenge and delivers excellence.<br><br>
        <ul style="padding-left: 3rem; list-style-type: disc;">
          <li>
            <span class="text-base font-semibold">Extensive Reach:</span><br>
            Vinsum Axpress has a comprehensive last-mile delivery network covering over 19,000+ pin codes, ensuring that businesses can reach customers in even the most remote areas of the country. This wide coverage enables businesses to expand their service footprint seamlessly. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Expert Workforce:</span><br>
            With a dedicated team of over 28,000 field service representatives, Vinsum Axpress ensures reliable, efficient service. The expertise of their personnel minimizes errors and maximizes customer satisfaction, delivering consistent and professional service across all operations. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Strategic Infrastructure:</span><br>
            Vinsum Axpress is equipped with a network of warehouses across 40+ cities, streamlining operations and enabling faster deliveries. This strong infrastructure helps reduce transit times, increase operational efficiency, and keep businesses competitive in the logistics market. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Advanced Technology:</span><br>
            With over 10 automated sorters in use, Vinsum Axpress handles large volumes of shipments with precision. The integration of automation not only speeds up the sorting process but also reduces manual handling, ensuring greater accuracy and faster dispatch. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">High Efficiency:</span><br>
            Maintaining an on-time delivery rate of 90%+, Vinsum Axpress sets a high standard for reliability within the logistics sector. By consistently meeting delivery deadlines, they help businesses build trust and loyalty with customers. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Real-Time Tracking:</span><br>
            Vinsum Axpress offers cutting-edge tracking systems that provide businesses and customers with full visibility throughout the last-mile delivery journey. This transparency helps manage expectations, ensuring a smooth and predictable delivery experience. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Rapid Delivery Solutions:</span><br>
            With same-day delivery in 50+ cities and 1,700+ pin codes, along with next-day delivery in 7,000+ pin codes, Vinsum Axpress caters to the increasing demand for speed and convenience in the marketplace. These flexible delivery options enable businesses to stay competitive in today’s fast-paced e-commerce world. <br><br>
          </li>
        </ul>
        The global last-mile delivery market is expected to reach a staggering USD 10,552.72 million by 2032 (Credence Research), highlighting its critical importance in shaping the future of logistics. As consumer expectations continue to rise, Vinsum Axpress isn’t just keeping up; it's setting the industry standard. With innovations like automated sorting technology and an ever-expanding network, Vinsum Axpress ensures that businesses stay ahead in the fast-evolving logistics landscape. <br><br><br><br>
        <span class="text-4xl font-semibold">Frequently Asked Questions</span><br><br><br>
        <ol style="padding-left: 3rem; list-style-type: decimal;">
          <li>
            <span class="text-base font-semibold">Why is last-mile delivery considered the most challenging and costly phase of logistics?</span><br><br>
            Last-mile delivery is widely regarded as the most complex and expensive stage of logistics, driven by challenges such as traffic congestion, incorrect delivery addresses, and the need for precise and on-time deliveries. These factors can lead to delays and increased operational costs. As the demand for faster delivery services grows, so does the complexity, especially with the need to handle a variety of parcel sizes, including large or fragile items. Furthermore, rising customer expectations for reliable and timely service place additional pressure on businesses to balance cost efficiency with a smooth, hassle-free delivery experience. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Why do businesses need last-mile delivery solutions?</span><br><br>
            Last-mile delivery solutions are essential for businesses to meet customer expectations of fast, reliable, and hassle-free deliveries. They play a significant role in enhancing customer satisfaction, building brand loyalty, and staying competitive in a rapidly evolving e-commerce landscape. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">How does XpressBees ensure reliable last-mile delivery?</span><br><br>
            <strong>Vinsum Axpress</strong> leverages a vast network covering over <strong>19,000+ pin codes</strong>, a dedicated team of <strong>28,000+ field service representatives</strong>, and advanced technologies like automated sorters to ensure exceptional service. With an impressive on-time delivery rate of <strong>90%+, Vinsum Axpress</strong> demonstrates its commitment to reliability and operational efficiency. <br><br>
          </li>
        </ol><br>
      `,
    author: "Vinsum Axpress",
    createdAt: "Jan 17, 2025",
  },
  {
    id: 4,
    isExternal: false,
    externalLink: null,
    title: "Full Truckload (FTL) Shipping: Meaning and Advantages",
    featuredImage: ftl,
    description1:
      `Think back to the last time you saw a massive truck speeding down the highway, fully loaded with goods. Ever wondered where it’s headed or what it’s carrying? It’s not just a random mix of cargo—it’s a carefully planned shipment, possibly moving products from different regions across the country, all packed into one organized load. This is the essence of Full Truckload (FTL) shipping: optimizing large shipments into a streamlined, cost-efficient transport solution.<br><br>
       Just how significant is this sector? The global Full Truckload (FTL) market is expected to hit a staggering US$3.7 trillion by 2030 (source: Research and Markets). This impressive projection clearly shows how businesses are increasingly depending on FTL service providers to deliver large volumes quickly, economically, and reliably across vast distances.<br><br>
       So, what’s fueling this growing demand? Take India, for example—home to approximately 250 million online shoppers in 2023, a number forecasted to rise to 427 million by 2027 (source: Statista). That’s nearly double in just two years!<br><br>
       This explosive growth in e-commerce signals an urgent need for scalable, high-performance logistics solutions that can keep up with rising consumer expectations. The volume of goods that will need to move seamlessly, securely, and swiftly is enormous. That’s where a dependable logistics partner like Vinsum Axpress comes in. With its strong infrastructure, cutting-edge technology, and customer-centric approach, Vinsum Axpress is well-positioned to deliver excellence in FTL shipping—helping businesses scale and succeed in today’s fast-paced market.<br><br>
       <span class="text-xl font-semibold">What is a Full Truck Load?</span><br><br>
       Full Truckload (FTL) shipping refers to the use of an entire truck exclusively for transporting a large shipment from one business to a specific destination. Unlike less-than-truckload (LTL) options, where space is shared with cargo from multiple shippers, FTL offers dedicated use of the vehicle. This results in quicker delivery, less handling, and a lower risk of damage. It’s a preferred solution for companies dealing with bulk freight or requiring prompt, time-critical deliveries. <br><br>Although full truckload (FTL) shipping is renowned for its efficiency and cost advantages, it comes with its own set of operational challenges. Logistics providers must navigate a complex landscape that requires strategic foresight and flawless execution. So, what are the key obstacles? <br><br>
       <strong>Capacity Management:</strong> Balancing truck availability—especially during peak seasons or sudden demand surges—can be difficult. Providers must accurately forecast needs to avoid both shortages and underutilized fleets.<br><br>
       <strong>Regulatory Hurdles:</strong> Complying with ever-changing government policies, such as GST regulations, customs protocols, and local transportation laws, adds layers of complexity to daily operations.<br><br>
       <strong>Labour Shortages:</strong> The industry continues to face a lack of skilled personnel, particularly for specialized roles like handling hazardous materials or managing cold chain logistics. Retaining experienced drivers and warehouse staff is also a growing concern due to increasing attrition rates.<br><br>
       <strong>Limited Shipment Visibility:</strong> Today’s businesses expect real-time insights into their deliveries to streamline inventory and operations. When tracking systems fail to provide timely or accurate data, it disrupts planning and can lead to delivery delays.<br><br>
       <strong>Security Risks:</strong> High-value shipments are vulnerable to theft, making cargo security a top priority for logistics providers.<br><br>
       <strong>Technology Challenges:</strong> While advanced tools like automation and real-time tracking are essential for competitiveness, implementing and integrating them can be both costly and complex. Ensuring these technologies work seamlessly within existing systems is vital.<br><br>
       At Vinsum Axpress, we recognize the intricate challenges involved in full truckload logistics across India and the day-to-day obstacles businesses encounter. That’s why we’ve developed a solutions-focused strategy—powered by cutting-edge technology, a scalable infrastructure, and a strong nationwide network—to tackle these issues directly and deliver smooth, efficient, and dependable service every time. <br><br><br>
       The Indian Full Truck Load (FTL) market is expected to reach $123.8 billion by 2025 (source: Mordor Intelligence), highlighting the surging demand for efficient, large-scale transportation solutions across the country. <br><br>
       In today’s competitive landscape, businesses are under constant pressure to meet rising customer expectations while navigating increasingly complex supply chains. With such rapid growth on the horizon, companies cannot afford to compromise—they need reliable, forward-thinking logistics partners. This is where Vinsum Axpress steps in to deliver. <br><br>
       <span class="text-xl font-semibold">How Vinsum Axpress is Driving FTL Excellence:</span><br><br>
       <ul style="padding-left: 3rem; list-style-type: disc;">
          <li>
            <span class="text-base font-semibold">Optimized Delivery Routes:</span><br>
             With an expansive route network, Vinsum Axpress streamlines full truckload transportation by minimizing delays and maximizing delivery speed, ensuring efficient movement of goods nationwide. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Advanced Fleet Management:</span><br>
            Regular investments in fleet expansion and maintenance ensure timely deliveries while reducing operational downtimes and enhancing overall efficiency. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Reliable Heavy Shipment Deliveries:</span><br>
            Serving over 19,000 pin codes across India, Vinsum Axpress ensures dependable delivery of bulky shipments—even to remote and hard-to-reach areas—broadening your business’s reach. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Strategically Located Hubs:</span><br>
            A widespread network of 260+ hubs across key urban and industrial centers enables fast and seamless handling of FTL shipments, cutting down delays and optimizing turnaround times. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Real-Time Shipment Tracking:</span><br>
            With GPS-enabled vehicles, Vinsum Axpress provides end-to-end visibility, allowing clients to monitor their shipments in real time for greater transparency and reliability. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Technology Integration:</span><br>
             Leveraging AI and Machine Learning for load optimization, demand forecasting, and smarter route planning enhances operational efficiency and service predictability. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Dedicated Customer Support:</span><br>
            Tailored assistance for FTL clients ensures quick resolution of queries, smooth communication, and seamless logistics management. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Enhanced Security Infrastructure:</span><br>
            <ul style="padding-left: 2rem; list-style-type: decimal;">
              <li><i>Cargo Safety:</i> GPS tracking, anti-theft systems, and secure handling protect high-value goods throughout the journey.</li>
              <li><i>Cybersecurity:</i> Robust digital safeguards protect customer data and logistics platforms from threats.</li><br>
            </ul>
          </li>
          <li>
            <span class="text-base font-semibold">Scaling for the Future:</span><br>
            <ul style="padding-left: 2rem; list-style-type: decimal;">
              <li><i>Strategic Collaborations:</i> Partnering with key industry players to strengthen service offerings and expand logistics capabilities.</li>
              <li><i>Network Expansion:</i>  Constantly growing presence across India and developing global reach to support cross-border shipments.</li><br>
            </ul>
          </li>
        </ul> <br><br>
        Maximizing capacity with Full Truck Load services is no longer just an option—it’s a strategic move for businesses looking to enhance efficiency, reduce costs, and elevate customer satisfaction. With its unmatched service coverage, reliable fleet, and tech-enabled operations, <strong>Vinsum Axpress</strong> offers the FTL solutions you can count on—whether you're scaling up or streamlining. <br><br>
        <strong>Ready to move smarter?</strong> Connect with <strong>Vinsum Axpress</strong> to discover the right FTL strategy for your business growth. <br><br><br><br>
        <span class="text-4xl font-semibold">Frequently Asked Questions</span><br><br><br>
        <ol style="padding-left: 3rem; list-style-type: decimal;">
          <li>
            <span class="text-base font-semibold">What types of goods are best suited for Full Truck Load shipping?</span><br><br>
            FTL shipping is ideal for large, heavy, or bulky items and high-value or time-sensitive goods requiring dedicated space and direct transport. It’s also well-suited for shipments with a single origin and destination, ensuring minimal handling and faster delivery. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">How does FTL shipping ensure faster delivery times?</span><br><br>
            Full truckload shipments use a single truck dedicated to one shipment, minimizing stops and transfers, which significantly reduces transit times compared to LTL (Less-than-Truckload) shipments. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Are there specific industries that rely heavily on Full TruckLoad freight?</span><br><br>
            Yes, industries like retail, manufacturing, e-commerce, and FMCG often rely on full truckload freight to move bulk orders, raw materials, and finished goods quickly and efficiently. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">What is the maximum weight or volume limit for FTL shipments?</span><br><br>
            The maximum weight and volume for Full Truckload (FTL) shipments typically depends on the type of truck being used. Generally: <br><br>
            <ol style="padding-left: 2rem; list-style-type: disc">
              <li>
                <span class="text-base font-semibold"><u>Weight Limit</u></span><br>
                The weight limit for FTL shipments is governed by the Central Motor Vehicles Rules (CMVR) and varies depending on the truck’s axle configuration. Standard Trucks: Typically range from 16 tons to 49 tons, including the weight of the vehicle (Gross Vehicle Weight or GVW). Multi-Axle Trucks: These can carry up to 55 tons or more, depending on the number of axles and the type of truck. The permissible weight also depends on the truck's registration and load capacity. Overloading is strictly prohibited as it can lead to penalties. <br><br>
              </li>
              <li>
                <span class="text-base font-semibold"><u>Volume Limit</u></span><br>
                Volume capacity depends on the truck type and size. Here are common truck types used in FTL: 12-14 ft Trucks: ~550-750 cubic feet. 17-19 ft Trucks: ~1,200-1,400 cubic feet. 22-24 ft Trucks: ~1,600-1,800 cubic feet. 32 ft Multi-Axle Trucks: ~2,200-2,400 cubic feet. The volume limit is affected by the type of cargo, whether it is lightweight but bulky or dense and heavy. <br><br>
              </li>
            </ol>  
          </li>
          <li>
            <span class="text-base font-semibold">What safety measures are in place for Full Truck Load freight?</span><br><br>
            FTL shipping includes measures like GPS tracking, tamper-proof seals, and compliance with safety regulations to ensure cargo remains secure throughout transit. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Can FTL shipments include multiple stops or destinations?</span><br><br>
            While FTL is generally dedicated to one shipment and destination, it can accommodate multiple stops if arranged beforehand, although this might increase costs and delivery time. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold"> How can businesses optimize costs with FTL shipping?</span><br><br>
            Businesses can optimize costs by consolidating shipments, leveraging return loads, and working with experienced logistics providers to ensure efficient routing and scheduling. <br><br>
          </li>
        </ol><br>
       `,
    author: "Vinsum Axpress",
    createdAt: "Feb 21, 2025",
  },
  {
    id: 5,
    title: "In a first, trucks with auto parts take train from Haryana to Gujarat",
    featuredImage: "https://static.toiimg.com/thumb/msid-107922803,imgsize-110860,width-400,resizemode-4/107922803.jpg",
    image1: null,
    image2: null,
    description1:
      'GURGAON: The \'truck on train\' service for the auto parts was rolled out on the western freight corridor fror the first time on Wednesday, opening a direct and much shorter line between the two largest Indian manufacturing hubs...',
    description2: '',
    description3: '',
    isExternal: true,
    externalLink: "https://timesofindia.indiatimes.com/india/in-a-first-trucks-with-auto-parts-take-train-from-haryana-to-gujarat/articleshow/107922826.cms",
    author: "Times Of India",
    createdAt: "Feb 22, 2024",
  },
  {
    id: 6,
    title: "गुरुग्राम की विनसम एक्सप्रेस रेलवे के साथ मिलकर गति शक्ति योजना को देगी गति",
    featuredImage: "https://www.totaltv.in/wp-content/uploads/2024/02/IMG-20240225-WA0021.jpg",
    image1: null,
    image2: null,
    description1:
      'भारतीय रेलवे एनसीआर बेस्ड लोजिस्टिक कंपनी विनसम से मिलकर प्रधानमंत्री नरेन्द्र मोदी की गति शक्ति योजना को गति देगी। सड़कों से ट्रकों के ट्रैफिक और टायरों से उत्पन्न कार्बन व ईंधन की खपत कम करने के उद्देश्य से रेलवे द्वारा विनसम लोजिस्टिक से मिलकर शुरू की गई “ट्रक ऑन ट्रेन” सेवा का पहला ट्रायल पूरा कर लिया गया है। इसके कुल आठ ट्रायल होंगे और इसके बाद भारतीय रेलवे विनसम से मिलकर पूरे देश में इस योजना का विस्तार करेगा। पहला ट्रायल हरियाणा के रेवाड़ी जंक्शन से गुजरात के पालनपुर तक हुआ...',
    description2: '',
    description3: '',
    isExternal: true,
    externalLink: "https://www.totaltv.in/gurugram-winsome-express-railway/",
    author: "Totaltv.in",
    createdAt: "Feb 25, 2024",
  },
  {
    id: 7,
    title: "समाज कल्याण में योगदान के लिए गुरुग्राम की विनसम एक्सप्रेस अटल सम्मान से सम्मानित",
    featuredImage: "https://www.khaskhabar.com/s3-storage/khaskhabar/khaskhabarimages/img500/16-74-1734779140-691291-khaskhabar.jpg",
    image1: null,
    image2: null,
    description1:
      'गुरुग्राम। - समाज कल्याण में महत्वपूर्ण योगदान देने के लिए एनसीआर बेस्ड विनसम एक्सप्रेस को प्रतिष्ठित अटल सम्मान समारोह 2024 में अटल सम्मान देकर सम्मानित किया गया। विनसम एक्सप्रेस को उनके उत्कृष्ट सेवाओं और समाज कल्याण के क्षेत्र में योगदान के लिए सम्मानित किया गया। विनसम एक्सप्रेस के निदेशक सुमित शर्मा ने समारोह में पहुंचकर यह सम्मान ग्रहण किया। नई दिल्ली के प्रधानमंत्री संग्रहालय में अटल फाउंडेशन द्वारा आयोजित समारोह में देश भर के अनेक उधमियों और समाज कल्याण में अपना योगदान देने वाली विभूतियों को अटल पुरस्कार देकर सम्मानित किया गया। विनसम एक्सप्रेस के निदेशक सुमित शर्मा ने यह पुरस्कार मिलने पर खुशी जाहिर की है।...',
    description2: '',
    description3: '',
    isExternal: true,
    externalLink: "https://www.khaskhabar.com/local/haryana/gurugram-news/news-gurugram-winsome-express-honoured-with-atal-samman-for-contribution-to-social-welfare-news-hindi-1-691291-KKN.html",
    author: "KhasKhabar - Haryana",
    createdAt: "Dec 21, 2024",
  },
  {
    id: 8,
    title: "रेवाड़ी से गुजरात तक ट्रेन में ट्रक सेवा का ट्रायल",
    featuredImage: "https://www.khaskhabar.com/s3-storage/khaskhabar/khaskhabarimages/img500/16-74-1734779140-691291-khaskhabar.jpg",
    image1: null,
    image2: null,
    description1:
      'रेवाड़ी। - भारतीय रेलवे और विनसम एक्सप्रेस के साझा प्रयास से ट्रेन में ट्रक सेवा का पहला ट्रायल सफलतापूर्वक किया गया। ट्रायल रेवाड़ी जंक्शन से गुजरात के पालनपुर तक किया। इसमें ऑटोमोबाइल पार्ट्स से भरे चार ट्रक को पालनपुर पहुंचाया गया।...',
    description2: '',
    description3: '',
    isExternal: true,
    externalLink: "https://www.livehindustan.com/ncr/gurgaon/story-trial-of-truck-service-in-train-from-rewari-to-gujarat-9388870.html",
    author: "Live Hinudstan",
    createdAt: "Feb 24, 2024",
  },
  {
    id: 9,
    isExternal: false,
    externalLink: null,
    title: "Multimodal Transportation: Integrated Logistics Solutions by Vinsum Axpress",
    featuredImage: multiModalTransportBlog,
    description1:
      `In an era where efficiency, flexibility, and reliability define supply chain success, businesses increasingly turn to <strong>multimodal transportation</strong> as a strategic logistics solution. By intelligently combining various modes of transport—such as <strong>road, rail, and air</strong>—under a unified system, <strong>multimodal logistics</strong> enables faster deliveries, optimized costs, and extended reach..<br><br>
       At <strong>Vinsum Axpress</strong>, we specialize in <strong>end-to-end multimodal transportation services</strong> that help companies build resilient, scalable, and future-ready supply chains across India.<br><br>
       <span class="text-xl font-semibold">What is Multimodal Transportation?</span><br><br>
       Multimodal transportation is the movement of goods using two or more modes of transport under a <strong>single contract and centralized control system.</strong> This differs from intermodal logistics, where each leg is managed independently. With multimodal solutions from Vinsum Axpress, your cargo travels seamlessly across road, rail, and air routes—all managed by one logistics partner, with one point of accountability. <br><br>
       <span class="text-xl font-semibold">Our Approach to Multimodal Logistics</span><br><br>
       <strong>Vinsum Axpress</strong> designs bespoke multimodal transport plans tailored to the nature of your cargo, delivery timelines, and regional demands. Whether you’re shipping time-sensitive goods or bulk freight, we engineer a route that balances <strong>speed, reliability, and cost-efficiency.</strong><br><br>
       Our multimodal strategy leverages:<br><br>
       <ul style="padding-left: 3rem; list-style-type: disc;">
          <li>
            <span class="text-base font-semibold">Rail for long-haul efficiency</span><br>
          </li>
          <li>
            <span class="text-base font-semibold">Road for flexible reach and last-mile delivery</span><br>
          </li>
          <li>
            <span class="text-base font-semibold">Air for critical express shipments</span><br>
          </li>
        </ul><br>  
       <span class="text-xl font-semibold">Key Benefits of Multimodal Transportation with Vinsum Axpress</span><br><br>  
       <ul style="padding-left: 3rem; list-style-type: decimal;">
          <li>
            <span class="text-base font-semibold">End-to-End Visibility</span><br>
             We provide real-time tracking and centralized oversight across all transport modes. You get a single dashboard to monitor the journey from origin to destination. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Optimized Transit Times</span><br>
            Our experts dynamically select the most efficient route and mode mix, reducing delivery lead times without escalating costs. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Cost Control</span><br>
            Multimodal logistics helps minimize fuel, labor, and handling costs by using the right mode for each leg of the journey. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Pan-India Reach</span><br>
            Our national network of logistics hubs and transport corridors connects metros, tier-2/3 cities, and remote industrial clusters. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Reduced Risk and Improved Security</span><br>
            Fewer handovers and a unified tracking system reduce the chances of cargo damage, theft, or loss. <br><br>
          </li>
        </ul> <br><br>
        <span class="text-4xl font-semibold">Why Choose Vinsum Axpress?</span><br><br><br>
        With over two decades of industry experience, <strong>Vinsum Axpress</strong> combines <strong>operational excellence</strong> with <strong>technology-driven logistics solutions.</strong> Our integrated multimodal network, skilled logistics planners, and digital control towers ensure that every shipment moves efficiently—regardless of complexity or destination.
        <br><br>We offer:<br><br>
        <ol style="padding-left: 3rem; list-style-type: decimal;">
          <li>
            A single point of contact for multimodal coordination <br><br>
          </li>
          <li>
            Smart mode-switching strategies for better agility <br><br>
          </li>
          <li>
            Technology integration with client systems (ERP, WMS, TMS) <br><br>
          </li>
          <li>
            Sustainable transport planning with reduced carbon footprint <br><br>             
          </li>
        </ol><br>
        <hr class="my-4 border-t border-gray-300" /><br>
        <span class="text-xl font-semibold">Let's Move Forward—Together</span><br><br>
        Whether you’re looking to reduce shipping costs, accelerate delivery times, or expand distribution, multimodal transportation from Vinsum Axpress is built to elevate your logistics strategy. <br><br>
        📩 Contact us today to explore a customized multimodal solution tailored to your business goals. <br><br>
        🌐 Visit <a href="https://www.vinsumaxpress.com" target="_blank" rel="noopener noreferrer"><u>www.vinsumaxpress.com</u></a> for more.<br>
       `,
    author: "Vinsum Axpress",
    createdAt: "Mar 08, 2025",
  },
  {
    id: 10,
    isExternal: false,
    externalLink: null,
    title: "3PL Inventory Management: Streamlining Your Supply Chain with Vinsum Axpress",
    featuredImage: threePlService,
    description1:
      `Inventory management can be the difference between operational efficiency and missed opportunities in today's fast-paced and hyper-competitive market. As businesses scale, the complexity of managing inventory in real-time across multiple locations becomes a significant challenge. This is where a reliable <strong>Third-Party Logistics (3PL)</strong> provider like <strong>Vinsum Axpress</strong> becomes your strategic advantage. <br><br><br>
       <span class="text-xl font-semibold">What is 3PL Inventory Management?</span><br><br>
       <strong>3PL inventory management</strong> refers to outsourcing the storage, tracking, and movement of goods to a third-party logistics provider. It’s more than just warehousing—it’s about real-time visibility, demand forecasting, order accuracy, and seamless integration with your supply chain. <br><br>
       At <strong>Vinsum Axpress</strong>, we offer an integrated inventory management solution that ties into our robust multimodal logistics network, giving our clients real-time control without the overhead. <br><br> 
       <span class="text-xl font-semibold">Key Benefits of Vinsum Axpress 3PL Inventory Management</span><br><br>  
       <ul style="padding-left: 3rem; list-style-type: decimal;">
          <li>
            <span class="text-base font-semibold">Real-Time Inventory Visibility</span><br>
            Gain 24/7 access to inventory levels across all locations with our cloud-based tracking systems. We eliminate guesswork and enable data-driven decisions. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Optimized Storage & Space Utilization</span><br>
            Our strategically located warehouses across India ensure faster delivery and efficient storage solutions—reducing lead times and last-mile delays. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Reduced Operational Costs</span><br>
            Cut down on fixed infrastructure costs. We manage staffing, equipment, and technology—so you can focus on your core business. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Scalable to Your Growth</span><br>
            Whether you're managing seasonal surges or launching in new markets, our 3PL model scales with your needs—offering flexibility without compromising service quality. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Accurate Order Fulfillment</span><br>
            Our systems ensure high accuracy in order picking, packing, and dispatch, minimizing returns and boosting customer satisfaction. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Integrated Technology Solutions</span><br>
            Our inventory management tools integrate with your ERP and order platforms, offering smooth, end-to-end visibility from order to delivery. <br><br>
          </li>
        </ul> <br><br>
        <span class="text-4xl font-semibold">Why Choose Vinsum Axpress?</span><br><br><br>
        With a pan-India presence, multimodal transport expertise, and a commitment to performance-driven logistics, <strong>Vinsum Axpress</strong> is not just a service provider—we are your logistics partner. Our approach to 3PL inventory management blends <strongtechnology, strategy, and execution</strong> to empower your business to operate leaner, smarter, and faster.<br><br>
        <hr class="my-4 border-t border-gray-300" /><br>
        <span class="text-xl font-semibold">📞 Ready to Upgrade Your Inventory Management?</span><br><br>
        Let’s discuss how we can streamline your supply chain. <br>
        Contact Vinsum Axpress today for a customized 3PL solution.
       `,
    author: "Vinsum Axpress",
    createdAt: "Apr 03, 2025",
  },
  {
    id: 11,
    isExternal: false,
    externalLink: null,
    title: "4PL, In-Plant Logistics & Project Management: Integrated Solutions by Vinsum Axpress",
    featuredImage: fourPlService,
    description1:
      `In the age of smart manufacturing and complex supply chains, businesses are looking for <strong>end-to-end logistics partners—</strong>not just service providers. That’s where <strong>Vinsum Axpress</strong> steps in, offering a comprehensive blend of <strong>Fourth-Party Logistics (4PL), In-Plant Logistics</strong, and <strong>Project Management</strong> services tailored to streamline operations, reduce costs, and increase operational control. <br><br><br>
       <span class="text-xl font-semibold">What is 4PL (Fourth-Party Logistics)?</span><br><br>
       Unlike traditional 3PL providers who manage transportation and warehousing, <strong>4PL providers</strong> oversee the <strong>entire supply chain</strong> as a single point of contact. Vinsum Axpress acts as your <strong>logistics integrator</strong>, managing multiple vendors, systems, and operations with a focus on <strong>strategic control</strong> and <strong>optimization</strong>. <br><br> 
       <span class="text-base font-semibold">Key Functions of 4PL:</span><br><br>
       <ul style="padding-left: 3rem; list-style-type: disc;">
          <li>
            Centralized supply chain management<br>
          </li>
          <li>
            Data-driven decision-making and analytics<br>
          </li>
          <li>
            Vendor coordination and performance oversight<br>
          </li>
          <li>
            Strategic sourcing and optimization<br>
          </li>
        </ul><br>
       <span class="text-xl font-semibold">What is In-Plant Logistics?</span><br><br>
       <strong>In-Plant Logistics</strong> refers to the management of material flow within the premises of a manufacturing facility. Vinsum Axpress ensures <strong>real-time inventory control, line feeding, material handling</strong>, and <strong>returns management</strong>, allowing your production team to focus on core manufacturing without bottlenecks. <br><br> 
       <span class="text-base font-semibold">Our In-Plant Services Include:</span><br><br>
       <ul style="padding-left: 3rem; list-style-type: disc;">
          <li>
            Line-side delivery of components<br>
          </li>
          <li>
            Material movement within the plant<br>
          </li>
        </ul><br>
       <span class="text-xl font-semibold">What is Logistics Project Management?</span><br><br>
       From setting up a new warehouse to executing high-value, time-bound shipments, <strong>logistics project management</strong> ensures that complex logistics needs are planned, coordinated, and delivered efficiently. Vinsum Axpress brings <strong>domain expertise, planning tools</strong>, and <strong>execution excellence</strong> to your logistics projects <br><br> 
       <ul style="padding-left: 3rem; list-style-type: disc;">
          <li>
            Just-in-Time (JIT) supply to assembly lines<br>
          </li>
          <li>
            Empty packaging return and recycling<br>
          </li>
          <li>
            On-site manpower and equipment management<br>
          </li>
        </ul><br>
       <span class="text-base font-semibold">What We Deliver:</span><br><br>
       <ul style="padding-left: 3rem; list-style-type: disc;">
          <li>
            Site analysis and operational planning<br>
          </li>
          <li>
            Route mapping and risk mitigation<br>
          </li>
          <li>
            Equipment mobilization and coordination<br>
          </li>
          <li>
            Real-time monitoring of milestones<br>
          </li>
          <li>
            End-to-end documentation and compliance<br>
          </li>
        </ul><br>     
        <span class="text-xl font-semibold">Benefits of Partnering with Vinsum Axpress</span><br><br>  
        <ul style="padding-left: 0rem; list-style-type: none;">
          <li>
            <span class="text-base font-semibold">One-Stop Supply Chain Partner</span><br>
            Reduce the complexity of managing multiple vendors. We consolidate planning, execution, and optimization under one roof. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Real-Time Visibility & Control</span><br>
            Track performance, inventory, and movement with integrated dashboards and advanced reporting tools. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Customized Solutions</span><br>
            Every operation is unique—our services are tailored to your processes, plant layout, and business goals. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Increased Productivity</span><br>
            With smoother in-plant flows and well-managed supply lines, your teams can focus on production and innovation. <br><br>
          </li>
          <li>
            <span class="text-base font-semibold">Cost Optimization</span><br>
            Reduce waste, improve resource utilization, and lower overall logistics costs through strategic planning and execution. <br><br>
          </li>
        </ul> <br><br>
        <span class="text-4xl font-semibold">Why Vinsum Axpress?</span><br><br><br>
        With a legacy in <strong>multimodal logistics, pan-India reach</strong>, and <strong>industry-grade execution</strong>, Vinsum Axpress stands out as a <strong>4PL and project logistics expert</strong>. Our solutions are trusted by businesses across the <strong>automotive, FMCG, manufacturing, pharma, and infrastructure sectors.</strong> <br><br>
        <hr class="my-4 border-t border-gray-300" /><br>
        <span class="text-xl font-semibold">Ready to Transform Your Supply Chain?</span><br><br>
        Whether you're planning an expansion, optimizing your factory logistics, or need a strategic 4PL partner—Vinsum Axpress has the expertise to deliver. <br><br>
        Contact us today to explore customized 4PL, in-plant, or project logistics solutions. <br>
        Visit: www.vinsumaxpress.com
       `,
    author: "Vinsum Axpress",
    createdAt: "Apr 29, 2025",
  },
];

export const youtubeVideos = [
  {
    id: 1,
    title: "Vinsum celebrated its 21st Foundation Day. Mr. Vinod Sharma (CMD)",
    description:
      'VINSUM AXPRESS PVT. LTD. is committed to offer logistics solutions and services to the Indian industry, designed to customer\'s satisfaction in order to grow together in a win-win situation. On this glorious occasion, let’s chase a few of the faces Behind The #Success of #Deftsoft with some interesting theme and candid shots. 😃😄',
    link: "nfgJHecqKgw",
  },
  {
    id: 2,
    title: "Vinsum Axpress Acquires 140 New Trucks | Driving Logistics Excellence Across India",
    description:
      'Driving Progress, One Truck at a Time! 🚛. We\’re thrilled to share a significant milestone at Vinsum Axpress — the acquisition of 140 new trucks! \nThis expansion not only boosts our operational capacity but also reaffirms our commitment to delivering seamless logistics solutions across India.',
    link: "0edQVCO4tBQ",
  },
  {
    id: 3,
    title: "Vinsum Axpress x Toyota: Pioneering Green Logistics with Indian Railways! 🚆🌱",
    description:
      'We are thrilled to announce a significant milestone at Vinsum Axpress—the rollout of our first consignment of automobile parts via the VAN Parcel Train from Bangalore to Delhi, in collaboration with Toyota and Indian Railways.',
    link: "wT6tQX5eT9A",
  },
  {
      id: 4,
      title: "📦 How Efficient Warehousing Transforms Supply Chain Success! 🚛 | VINSUM AXPRESS 🌍",
      description:
        'Efficient warehousing is the backbone of a successful supply chain! It ensures smooth operations, cost savings, and happy customers—but how exactly does warehousing improve supply chain efficiency? 🤔',
      link: "PXrPv1vrm2s",
    },
    {
      id: 5,
      title: "Warehouse Safety Standards - essential guidelines for a safe workplace | VINSUM AXPRESS",
      description:
        'Warehouses are the backbone of any supply chain, and ensuring safety is crucial for maintaining efficiency and productivity. In this video, we cover essential warehouse safety standards that every worker, manager, and visitor must follow to create a safe working environment.',
      link: "oxzWBEKlpx8",
    },
];

export const galleries = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
  gallery21,
  gallery22,
  gallery23,
  gallery24,
  gallery25,
  // gallery26,
  gallery27,
  gallery28,
  gallery29,
  // gallery31,
  gallery32,
  gallery33,
  gallery34,
  gallery35,
  gallery36,
  gallery37,
  gallery38,
  // gallery40,
  gallery41,
];

export const galleriessh = [
  "https://vinsumaxpress.com/assets/img/gallery/994A0886.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/994A0511.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/994A0785.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/994A0855.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/994A0579.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/994A0707.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/AJY06544.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/994A0502.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/994A0789.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/994A0503.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/994A0834.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/994A0805.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/AJY06519.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/new-vinsum-axpress-images12.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/new-vinsum-axpress-images16.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/AJY06540.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/AJY06536.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/AJY06501.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/AJY06454.JPG",
  "https://vinsumaxpress.com/assets/img/gallery/new-vinsum-axpress-images15.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/vinsum-axpress-corporate-office.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/new-vinsum-axpress-images17.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/new-vinsum-axpress-images18.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/vinsum-axpress-warehouse-image-27.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/vinsum-axpress-warehouse-image-28.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/vinsum-axpress-warehouse-image-29.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/vinsum-axpress-warehouse-image-30.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/vinsum-axpress-warehouse-image-31.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/new-vinsum-axpress-images19.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/new-vinsum-axpress-images20.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/new-vinsum-axpress-images13.jpg",
  "https://vinsumaxpress.com/assets/img/gallery/new-vinsum-axpress-images14.jpg",
];

export const packagingPage = {
  ppBox: {
    title: "PP BOX & TOTES",
    benefits: [
      "Can be Designed to suit Trucks sizes for all Regions PAN INDIA.",
      "Flat Packed to 1/5th the Assembled Size.",
      "Can with stand Payload of up to 20-25 kg and 5 High Stacking.",
    ],
    images: [ppBoxesImage1, ppBoxesImage2, ppBoxesImage3, ppBoxesImage4],
  },

  foldableCrates: {
    title: "FOLDABLE CRATES/BINS",
    benefits: [
      "Designed to suit Trucks sizes for all Regions PAN INDIA.",
      "Can be Deployed Directly on - Process line.",
      "Can with stand payload of up to 15-35 kg",
      "Flat Packed to 1/5th the Assembled size to save reverse logistics up to 80%.",
      "Detachable side walls-top LID.",
    ],
    images: [
      foldableCratesImage1,
      foldableCratesImage2,
      foldableCratesImage3,
      foldableCratesImage4,
    ],
  },

  plsBoxes: {
    title: "PLS & FLC BOXES",
    benefits: [
      "Life span 36 months in appropriate condition.",
      "Designed to suit Trucks sizes for all regions PAN INDIA.",
      "Suitable for wooden Boxes/Crates.",
      "Can with stand Payload of up to 500-750 kg.",
      "Flat Packed to 1/3th the assembled size to save reverse logistics up to 67%.",
    ],
    images: [plsImage1, plsImage2, plsImage3, plsImage4],
  },

  wireMeshContainer: {
    title: "WIRE-MESH CONTAINER",
    benefits: [
      "Designed to suit Trucks sizes for all regions PAN INDIA and around the world.",
      "Suitable for wooden Boxes/Crates in light auto part industry for Transport & for online process as well.",
      "Can with stand Payload of up to 750-1200 kg.",
      "Flat Packed to 1/3th the assembled size to save reverse logistics up to 67%.",
      "Light weight as compared to Tabular structures.",
    ],
    images: [wireMeshImage1, wireMeshImage2, wireMeshImage3, wireMeshImage4],
  },

  metalFoldableCrates: {
    title: "METAL FOLDABLE CRATES (MFC)",
    benefits: [
      "Designed to suit Trucks sizes for all Regions PAN INDIA & around the World.",
      "Suitable for wooden Boxes/Crates in heavy auto part industry for Transport & for online process as well.",
      "Flat Packed to 1/3th the assembled size to save reverse logistics up to 60%.",
      "Customizable to light-heavy weight structure.",
    ],
    images: [
      metalFoldableCratesImage1,
      metalFoldableCratesImage2,
      metalFoldableCratesImage3,
      metalFoldableCratesImage4,
    ],
  },

  pallets: {
    title: "PALLETS (PLASTIC/WOODEN/STEEL)",
    benefits: [
      "Light Weight.",
      "High physical Durability.",
      "Rotomoulded, injection Moulded.",
      "Plastic Pallets.",
      "Wooden Pallets.",
      "Steel Pallets.",
    ],
    images: [palletsImage1, palletsImage2, palletsImage3, palletsImage4],
  },

  thermoFormingTray: {
    title: "THERMO_FORMING TRAY",
    benefits: [
      "Vacuum-formed plastic trays.",
      "Thermoforming plastic trays.",
      "Designed for sensitive components.",
      "Ideal for high-value components.",
    ],
    images: [
      thermoFormingImage1,
      thermoFormingImage2,
      thermoFormingImage3,
      thermoFormingImage4,
    ],
  },
};
