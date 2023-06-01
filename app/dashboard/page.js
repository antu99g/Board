"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Sidebar from "../components/Sidebar";
import "../globals.css";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  ArcElement,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";
// import { useSession } from "next-auth/react";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  ArcElement,
  Tooltip
);

function Dashboard() {
  // const { data: session } = useSession();

  // Active section in sidebar
  const [activeSection, setActiveSection] = useState("dashboard");

  // User data for line graph
  const [userData, setUserData] = useState({ guest: [], user: [] });

  // Items data for pie chart
  const [itemData, setItemData] = useState({ labels: [], qty: [], total: "" });

  // Colors for pie chart legends
  const pieChartColors = ["pie-green", "pie-yellow", "pie-pink"];

  // Dataset for line graph
  const lineData = {
    labels: ["", "Week 1", "Week 2", "Week 3", "Week 4", ""],
    datasets: [
      {
        data: userData.user,
        borderColor: "rgba(155, 221, 124, 1)",
        pointStyle: false,
        tension: 0.4,
      },
      {
        data: userData.guest,
        borderColor: "rgba(233, 160, 160, 1)",
        pointStyle: false,
        tension: 0.4,
      },
    ],
  };

  // Options for line graph
  const lineOptions = {
    responsive: true, // reshape grid by given dimentions
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false, // hide vertical grid lines
        },
        ticks: {
          color: "rgba(133, 133, 133, 1)", // Set the color of the x-axis labels
          font: {
            size: 11, // Set font-size of the x-axis labels
          },
        },
      },
      y: {
        grid: {
          drawTicks: false,
        },
        // min: 0,
        max: 500,
        stepSize: 1,
        ticks: {
          color: "rgba(133, 133, 133, 1)", // Set the color of the y-axis labels
          font: {
            size: 11, // Set font-size of the y-axis labels
          },
        },
      },
    },
  };

  // Dataset for pie chart
  const pieData = {
    datasets: [
      {
        labels: itemData.labels,
        data: itemData.qty,
        backgroundColor: [
          "rgba(152, 216, 158, 1)",
          "rgba(246, 220, 125, 1)",
          "rgba(238, 132, 132, 1)",
        ],
      },
    ],
  };

  // Options for pie chart
  const pieOptions = {
    elements: {
      arc: {
        borderWidth: 0, // Hide the border between blocks
      },
    },
  };

  // Fetching data for line-graph and pie-chart
  useEffect(() => {
    // Fetch user data
    const fetchUsers = fetch("http://localhost:3000/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUserData(() => {
          return { guest: data.guest, user: data.user };
        });
      })
      .catch((err) => {
        console.log(err);
      });

    // Fetch item data
    const fetchItems = fetch("http://localhost:3000/api/items")
      .then((res) => res.json())
      .then((data) => {
        let total = 0;
        const allLabels = data.map((item) => {
          return item.label;
        });
        const itemQty = data.map((item) => {
          total += item.qty;
          return item.qty;
        });
        setItemData(() => {
          return { labels: allLabels, qty: itemQty, total };
        });
      })
      .catch((err) => {
        console.log(err);
      });

    // Sending all fetch requests together
    Promise.all([fetchUsers, fetchItems]);
  }, []);

  // if (session) {
  return (
    <div className="h-full max-h-full p-6 flex">
      <Sidebar activeSection={activeSection} />

      <div className="py-3 px-10 lg:px-14 grow flex flex-col justify-between overflow-y-auto">
        <div className="flex items-center">
          <h3>Dashboard</h3>

          <span className="ml-auto px-3 py-1 flex items-center rounded-lg bg-white text-[rgba(176, 176, 176, 1)">
            <input
              type="text"
              placeholder="Search..."
              className="w-24 text-sm font-lato active:outline-none"
            />
            <img
              src="/search-icon.png"
              // height={5}
              // width={5}
              alt="Search icon"
              className="ml-3 h-2.5"
            />
          </span>

          {/* <Image src="/bell-icon.png" height={10} width={10} alt="Bell icon" /> */}
          <img src="/bell-icon.png" className="w-3 h-4 mx-5" alt="Bell icon" />

          <Image
            src="/dummy-user.png"
            height={25}
            width={25}
            alt="User Image"
            className="rounded-full"
          />
        </div>

        <div className="mt-5 flex justify-between">
          <span className="w-1/4 mr-[2.5vw] px-4 py-3 lg:py-4 bg-green flex flex-col rounded-2xl">
            <Image
              src="/revenue-icon.svg"
              height={20}
              width={20}
              alt="Revenue icon"
              className="ml-auto"
            />
            <p className="font-lato text-sm">Total Revenues</p>
            <h3 className="font-opensans">$2,129,430</h3>
          </span>

          <span className="w-1/4 mr-[2.5vw] px-4 py-3 lg:py-4 bg-peach flex flex-col rounded-2xl">
            <Image
              src="/transaction-icon.svg"
              height={17}
              width={17}
              alt="Transaction icon"
              className="ml-auto"
            />
            <p className="font-lato text-custom">Total Transactions</p>
            <h3 className="font-opensans">1,520</h3>
          </span>

          <span className="w-1/4 mr-[2.5vw] px-4 py-3 lg:py-4 bg-pink flex flex-col rounded-2xl">
            <Image
              src="/like-icon.svg"
              height={18}
              width={18}
              alt="Like icon"
              className="ml-auto"
            />
            <p className="font-lato text-custom">Total Likes</p>
            <h3 className="font-opensans">9,721</h3>
          </span>

          <span className="w-1/4 px-4 py-3 lg:py-4 bg-purple flex flex-col rounded-2xl">
            <Image
              src="/users-icon.svg"
              height={30}
              width={30}
              alt="User icon"
              className="ml-auto"
            />
            <p className="font-lato text-custom">Total Users</p>
            <h3 className="font-opensans">892</h3>
          </span>
        </div>

        <div className="my-5 pt-4 pb-2 md:pb-2 lg:pb-3 md:px-5 lg:px-8 grow flex flex-col bg-white rounded-xl">
          <h4>Activities</h4>
          <div className="mb-1 flex justify-between">
            <small className="flex items-center text-gray-400">
              May-June 2021
              <img src="/arrow-down.png" alt="Arrow down" className="ml-1" />
            </small>
            <span className="font-lato font-thin text-sm">
              <span className="legend-circle line-pink mr-6">Guest</span>
              <span className="legend-circle line-green mr-6">User</span>
            </span>
          </div>
          <div className="w-full h-36 mt-auto">
            <Line data={lineData} options={lineOptions} />
          </div>
        </div>

        <div className="w-full grid grid-cols-2 justify-between gap-x-24 md:gap-x-5 lg:gap-x-24">
          <div className="py-4 px-5 bg-white rounded-xl">
            <div className="mb-2 flex justify-between">
              <h4>Top products</h4>
              <small className="flex items-center text-gray-400">
                May-June 2021
                <img src="/arrow-down.png" alt="Arrow down" className="ml-1" />
              </small>
            </div>

            <div className="flex items-center">
              <div className="h-20 w-20 mx-7">
                <Pie data={pieData} options={pieOptions} />
              </div>

              {itemData.total && (
                <div className="flex flex-col justify-between">
                  {itemData.qty.map((qty, index) => {
                    return (
                      <div className="mb-1 flex flex-col" key={index}>
                        <h5
                          className={`m-0 legend-circle ${pieChartColors[index]}`}
                        >
                          {itemData.labels[index]}
                        </h5>
                        <small className="ml-3 font-lato font-thin text-gray-400">
                          {`${Math.round((qty * 100) / itemData.total)}%`}
                        </small>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="py-4 px-5 flex flex-col justify-around bg-white rounded-xl">
            <div className="mb-2 flex justify-between">
              <h4>Today's schedule</h4>
              <small className="flex items-center text-gray-400">
                See All
                <img
                  src="/arrow-right.png"
                  alt="Arrow right"
                  className="ml-1"
                />
              </small>
            </div>

            <div className="mb-3 pl-2 text-xs font-lato border-l-4 border-green">
              <h6 className="font-bold text-custom-gray">
                Meeting with suppliers from Kuta Bali
              </h6>
              <p className="font-thin text-gray-400">14:00-15:00</p>
              <p className="font-thin text-gray-400">
                at Sunset Road, Kuta, Bali
              </p>
            </div>

            <div className="pl-2 text-xs font-lato border-l-4 border-purple">
              <h6 className="font-bold text-custom-gray">
                Check operation at Giga Factory 1
              </h6>
              <p className="font-thin text-gray-400">18.00-20.00</p>
              <p className="font-thin text-gray-400">at Central Jakarta</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  // } else {
  // return (
  //   <h1 className="text-center mt-20">
  //     You are not Authorized to view this page!!
  //   </h1>
  // );
  // }
}

export default Dashboard;
