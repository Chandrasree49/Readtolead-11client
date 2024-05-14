import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import his2 from "../assets/his2.jpg";
import his3_ from "../assets/his3_.jpg";
import his4 from "../assets/his4.jpg";

const TabCat = () => {
  return (
    <Tabs>
      <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-center">
          <TabList>
            <Tab>History</Tab>
            <Tab>Mysteries</Tab>
            <Tab>Science & Math</Tab>

            <Tab>Horror</Tab>
          </TabList>
          <button className="btn btn-outline btn-primary">Primary</button>
        </div>

        <TabPanel>
          <div className="d-flex">
            <div className="tabcard w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
              <img
                className="tabimage object-cover w-full h-56"
                alt="avatar"
                style={{ backgroundImage: `url(${his2})` }}
              ></img>
              <div className="tabinfo py-5 text-center">
                <a
                  href="#"
                  className="block text-xl font-bold text-gray-800 dark:text-black"
                  tabindex="0"
                  role="link"
                >
                  African-American & Black
                </a>
                <span className="text-sm text-gray-700 dark:text-black-200">
                  {" "}
                  African-american identifies a group with an extensive cultural
                  tradition, whereas the term "black" in principle denotes
                  nothing more than dark skin.{" "}
                </span>
              </div>
              <div className="tabbtn">
                <button className="btn btn-info text-center">Info</button>
              </div>
            </div>
            <div className="tabcard w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
              <img
                className="tabimage object-cover w-full h-56"
                style={{
                  backgroundImage: `url(${his3_})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></img>
              <div className="tabinfo py-5 text-center">
                <a
                  href="#"
                  className="block text-xl font-bold text-gray-800 dark:text-black"
                  tabindex="0"
                  role="link"
                >
                  Asian History Books
                </a>
                <span className="text-sm text-gray-700 dark:text-black-200">
                  The history of Asia can be seen as the collective history of
                  several distinct peripheral coastal regions such as East Asia,
                  South Asia, Southeast Asia and the Middle East linked by the
                  interior mass of the Eurasian steppe.
                </span>
              </div>
              <div className="tabbtn">
                <button className="btn btn-info text-center">Info</button>
              </div>
            </div>
            <div className="tabcard w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
              <img
                className="tabimage object-cover w-full h-56"
                alt="avatar"
                style={{ backgroundImage: `url(${his4})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"}}
              ></img>
              <div className="tabinfo py-5 text-center">
                <a
                  href="#"
                  className="block text-xl font-bold text-gray-800 dark:text-black"
                  tabindex="0"
                  role="link"
                >
                  Russian History Books
                </a>
                <span className="text-sm text-gray-700 dark:text-black-200">
                  Russia is known all over the world for its thinkers and
                  artists, including writers like Leo Tolstoy and Fyodor
                  Dostoevsky, composers such as Pyotr Ilyich Tchaikovsky, and
                  ballet dancers like Rudolf Nureyev.
                </span>
              </div>
              <div className="tabbtn">
                <button className="btn btn-info text-center">Info</button>
              </div>
            </div>
            <div className="tabcard w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
              <img
                className="tabimage object-cover w-full h-56"
                alt="avatar"
                style={{ backgroundImage: `url(${his2})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center" }}
              ></img>
              <div className="tabinfo py-5 text-center">
                <a
                  href="#"
                  className="block text-xl font-bold text-gray-800 dark:text-black"
                  tabindex="0"
                  role="link"
                >
                  African-American & Black
                </a>
                <span className="text-sm text-gray-700 dark:text-black-200">
                  {" "}
                  African-american identifies a group with an extensive cultural
                  tradition, whereas the term "black" in principle denotes
                  nothing more than dark skin.{" "}
                </span>
              </div>
              <div className="tabbtn">
                <button className="btn btn-info text-center">Info</button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="d-flex">
            <div className="tabcard w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
              <img
                className="tabimage object-cover w-full h-56"
                alt="avatar"
                style={{ backgroundImage: `url(${his2})`,  backgroundRepeat: "no-repeat",
                backgroundPosition: "center" }}
              ></img>
              <div className="tabinfo py-5 text-center">
                <a
                  href="#"
                  className="block text-xl font-bold text-gray-800 dark:text-black"
                  tabindex="0"
                  role="link"
                >
                  African-American & Black
                </a>
                <span className="text-sm text-gray-700 dark:text-black-200">
                  {" "}
                  African-american identifies a group with an extensive cultural
                  tradition, whereas the term "black" in principle denotes
                  nothing more than dark skin.{" "}
                </span>
              </div>
              <div className="tabbtn">
                <button className="btn btn-info text-center">Info</button>
              </div>
            </div>
            <div className="tabcard w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
            <img
                className="tabimage object-cover w-full h-56"
                alt="avatar"
                style={{ backgroundImage: `url(${his2})`,  backgroundRepeat: "no-repeat",
                backgroundPosition: "center" }}
              ></img>
              <div className="tabinfo py-5 text-center">
                <a
                  href="#"
                  className="block text-xl font-bold text-gray-800 dark:text-black"
                  tabindex="0"
                  role="link"
                >
                  African-American & Black
                </a>
                <span className="text-sm text-gray-700 dark:text-black-200">
                  {" "}
                  African-american identifies a group with an extensive cultural
                  tradition, whereas the term "black" in principle denotes
                  nothing more than dark skin.{" "}
                </span>
              </div>
              <div className="tabbtn">
                <button className="btn btn-info text-center">Info</button>
              </div>
            </div>
            <div className="tabcard w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
            <img
                className="tabimage object-cover w-full h-56"
                alt="avatar"
                style={{ backgroundImage: `url(${his2})`,  backgroundRepeat: "no-repeat",
                backgroundPosition: "center" }}
              ></img>
              <div className="tabinfo py-5 text-center">
                <a
                  href="#"
                  className="block text-xl font-bold text-gray-800 dark:text-black"
                  tabindex="0"
                  role="link"
                >
                  African-American & Black
                </a>
                <span className="text-sm text-gray-700 dark:text-black-200">
                  {" "}
                  African-american identifies a group with an extensive cultural
                  tradition, whereas the term "black" in principle denotes
                  nothing more than dark skin.{" "}
                </span>
              </div>
              <div className="tabbtn">
                <button className="btn btn-info text-center">Info</button>
              </div>
            </div>
            <div className="tabcard w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
            <img
                className="tabimage object-cover w-full h-56"
                alt="avatar"
                style={{ backgroundImage: `url(${his2})`,  backgroundRepeat: "no-repeat",
                backgroundPosition: "center" }}
              ></img>
              <div className="tabinfo py-5 text-center">
                <a
                  href="#"
                  className="block text-xl font-bold text-gray-800 dark:text-black"
                  tabindex="0"
                  role="link"
                >
                  African-American & Black
                </a>
                <span className="text-sm text-gray-700 dark:text-black-200">
                  {" "}
                  African-american identifies a group with an extensive cultural
                  tradition, whereas the term "black" in principle denotes
                  nothing more than dark skin.{" "}
                </span>
              </div>
              <div className="tabbtn">
                <button className="btn btn-info text-center">Info</button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="d-flex">
            <div className="tabcard w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
            <img
                className="tabimage object-cover w-full h-56"
                alt="avatar"
                style={{ backgroundImage: `url(${his2})`,  backgroundRepeat: "no-repeat",
                backgroundPosition: "center" }}
              ></img>
              <div className="tabinfo py-5 text-center">
                <a
                  href="#"
                  className="block text-xl font-bold text-gray-800 dark:text-black"
                  tabindex="0"
                  role="link"
                >
                  African-American & Black
                </a>
                <span className="text-sm text-gray-700 dark:text-black-200">
                  {" "}
                  African-american identifies a group with an extensive cultural
                  tradition, whereas the term "black" in principle denotes
                  nothing more than dark skin.{" "}
                </span>
              </div>
              <div className="tabbtn">
                <button className="btn btn-info text-center">Info</button>
              </div>
            </div>
            <div className="tabcard w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
            <img
                className="tabimage object-cover w-full h-56"
                alt="avatar"
                style={{ backgroundImage: `url(${his2})`,  backgroundRepeat: "no-repeat",
                backgroundPosition: "center" }}
              ></img>
              <div className="tabinfo py-5 text-center">
                <a
                  href="#"
                  className="block text-xl font-bold text-gray-800 dark:text-black"
                  tabindex="0"
                  role="link"
                >
                  African-American & Black
                </a>
                <span className="text-sm text-gray-700 dark:text-black-200">
                  {" "}
                  African-american identifies a group with an extensive cultural
                  tradition, whereas the term "black" in principle denotes
                  nothing more than dark skin.{" "}
                </span>
              </div>
              <div className="tabbtn">
                <button className="btn btn-info text-center">Info</button>
              </div>
            </div>
            <div className="tabcard w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
            <img
                className="tabimage object-cover w-full h-56"
                alt="avatar"
                style={{ backgroundImage: `url(${his2})`,  backgroundRepeat: "no-repeat",
                backgroundPosition: "center" }}
              ></img>
              <div className="tabinfo py-5 text-center">
                <a
                  href="#"
                  className="block text-xl font-bold text-gray-800 dark:text-black"
                  tabindex="0"
                  role="link"
                >
                  African-American & Black
                </a>
                <span className="text-sm text-gray-700 dark:text-black-200">
                  {" "}
                  African-american identifies a group with an extensive cultural
                  tradition, whereas the term "black" in principle denotes
                  nothing more than dark skin.{" "}
                </span>
              </div>
              <div className="tabbtn">
                <button className="btn btn-info text-center">Info</button>
              </div>
            </div>
            <div className="tabcard w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
            <img
                className="tabimage object-cover w-full h-56"
                alt="avatar"
                style={{ backgroundImage: `url(${his2})`,  backgroundRepeat: "no-repeat",
                backgroundPosition: "center" }}
              ></img>
              <div className="tabinfo py-5 text-center">
                <a
                  href="#"
                  className="block text-xl font-bold text-gray-800 dark:text-black"
                  tabindex="0"
                  role="link"
                >
                  African-American & Black
                </a>
                <span className="text-sm text-gray-700 dark:text-black-200">
                  {" "}
                  African-american identifies a group with an extensive cultural
                  tradition, whereas the term "black" in principle denotes
                  nothing more than dark skin.{" "}
                </span>
              </div>
              <div className="tabbtn">
                <button className="btn btn-info text-center">Info</button>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="d-flex">
            <div className="tabcard w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
            <img
                className="tabimage object-cover w-full h-56"
                alt="avatar"
                style={{ backgroundImage: `url(${his2})`,  backgroundRepeat: "no-repeat",
                backgroundPosition: "center" }}
              ></img>
              <div className="tabinfo py-5 text-center">
                <a
                  href="#"
                  className="block text-xl font-bold text-gray-800 dark:text-black"
                  tabindex="0"
                  role="link"
                >
                  African-American & Black
                </a>
                <span className="text-sm text-gray-700 dark:text-black-200">
                  {" "}
                  African-american identifies a group with an extensive cultural
                  tradition, whereas the term "black" in principle denotes
                  nothing more than dark skin.{" "}
                </span>
              </div>
              <div className="tabbtn">
                <button className="btn btn-info text-center">Info</button>
              </div>
            </div>
            <div className="tabcard w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
            <img
                className="tabimage object-cover w-full h-56"
                alt="avatar"
                style={{ backgroundImage: `url(${his2})`,  backgroundRepeat: "no-repeat",
                backgroundPosition: "center" }}
              ></img>
              <div className="tabinfo py-5 text-center">
                <a
                  href="#"
                  className="block text-xl font-bold text-gray-800 dark:text-black"
                  tabindex="0"
                  role="link"
                >
                  African-American & Black
                </a>
                <span className="text-sm text-gray-700 dark:text-black-200">
                  {" "}
                  African-american identifies a group with an extensive cultural
                  tradition, whereas the term "black" in principle denotes
                  nothing more than dark skin.{" "}
                </span>
              </div>
              <div className="tabbtn">
                <button className="btn btn-info text-center">Info</button>
              </div>
            </div>
            <div className="tabcard w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
            <img
                className="tabimage object-cover w-full h-56"
                alt="avatar"
                style={{ backgroundImage: `url(${his2})`,  backgroundRepeat: "no-repeat",
                backgroundPosition: "center" }}
              ></img>
              <div className="tabinfo py-5 text-center">
                <a
                  href="#"
                  className="block text-xl font-bold text-gray-800 dark:text-black"
                  tabindex="0"
                  role="link"
                >
                  African-American & Black
                </a>
                <span className="text-sm text-gray-700 dark:text-black-200">
                  {" "}
                  African-american identifies a group with an extensive cultural
                  tradition, whereas the term "black" in principle denotes
                  nothing more than dark skin.{" "}
                </span>
              </div>
              <div className="tabbtn">
                <button className="btn btn-info text-center">Info</button>
              </div>
            </div>
            <div className="tabcard w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
            <img
                className="tabimage object-cover w-full h-56"
                alt="avatar"
                style={{ backgroundImage: `url(${his2})`,  backgroundRepeat: "no-repeat",
                backgroundPosition: "center" }}
              ></img>
              <div className="tabinfo py-5 text-center">
                <a
                  href="#"
                  className="block text-xl font-bold text-gray-800 dark:text-black"
                  tabindex="0"
                  role="link"
                >
                  African-American & Black
                </a>
                <span className="text-sm text-gray-700 dark:text-black-200">
                  {" "}
                  African-american identifies a group with an extensive cultural
                  tradition, whereas the term "black" in principle denotes
                  nothing more than dark skin.{" "}
                </span>
              </div>
              <div className="tabbtn">
                <button className="btn btn-info text-center">Info</button>
              </div>
            </div>
          </div>
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default TabCat;
