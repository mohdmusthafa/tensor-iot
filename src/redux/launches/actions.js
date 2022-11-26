/*
 * Author: Mohammed Musthafa
 * Created Date: Saturday November 26th 2022
 * Product : TensorIoT
 */

import moment from "moment";
import { SET_LAUNCH_DATA, SET_LAUNCH_FETCH_STATUS } from "./types";

let data = [
  {
    no: "01",
    launch_at: new Date("2022-10-24 22:30"),
    location: "Kwajalein Atoll",
    mission: "FalconSat",
    orbit: "LEO",
    launch_status: "Success",
    rocket: "Falcon 9",
    description: {
      text: `CRS-1 successful, but the secondary payload was inserted into
      abnormally low orbit and due to Falcon 9 boost stage engine failure,
      ISS visiting vechicle safety rules, and the primary payload owner's
      contactual right to decline a second igniton of the second stange
      under some condition.`,
      link: {
        label: "Wikipedia",
        href: "https://wikipedia.com",
      },
    },
    mission_info: [
      { label: "Flight Number", value: "9" },
      { label: "Mission Name", value: "CRS-1" },
      { label: "Rocket Type", value: "v1.0" },
      { label: "Rocket Name", value: "Falcon 9" },
      { label: "Manufacturer", value: "SpaceX" },
      { label: "Nationality", value: "SpaceX" },
      { label: "Launch Date", value: "08 October 2012 00:35" },
      { label: "Payload Type", value: "Dragon 1.0" },
      { label: "Orbit", value: "ISS" },
      { label: "Launch Site", value: "CCAFS SLC 40" },
    ],
  },
  {
    no: "02",
    launch_at: new Date("2022-04-24 10:30"),
    location: "Kwajalein Atoll",
    mission: "FalconSat",
    orbit: "LEO",
    launch_status: "Failed",
    rocket: "Falcon 9",
    description: {
      text: `CRS-1 successful, but the secondary payload was inserted into
      abnormally low orbit and due to Falcon 9 boost stage engine failure,
      ISS visiting vechicle safety rules, and the primary payload owner's
      contactual right to decline a second igniton of the second stange
      under some condition.`,
      link: {
        label: "Wikipedia",
        href: "https://wikipedia.com",
      },
    },
    mission_info: [
      { label: "Flight Number", value: "9" },
      { label: "Mission Name", value: "CRS-1" },
      { label: "Rocket Type", value: "v1.0" },
      { label: "Rocket Name", value: "Falcon 9" },
      { label: "Manufacturer", value: "SpaceX" },
      { label: "Nationality", value: "SpaceX" },
      { label: "Launch Date", value: "08 October 2012 00:35" },
      { label: "Payload Type", value: "Dragon 1.0" },
      { label: "Orbit", value: "ISS" },
      { label: "Launch Site", value: "CCAFS SLC 40" },
    ],
  },
  {
    no: "03",
    launch_at: new Date("2022-10-28 1:30"),
    location: "Kwajalein Atoll",
    mission: "FalconSat",
    orbit: "LEO",
    launch_status: "Upcoming",
    rocket: "Falcon 9",
    description: {
      text: `CRS-1 successful, but the secondary payload was inserted into
      abnormally low orbit and due to Falcon 9 boost stage engine failure,
      ISS visiting vechicle safety rules, and the primary payload owner's
      contactual right to decline a second igniton of the second stange
      under some condition.`,
      link: {
        label: "Wikipedia",
        href: "https://wikipedia.com",
      },
    },
    mission_info: [
      { label: "Flight Number", value: "9" },
      { label: "Mission Name", value: "CRS-1" },
      { label: "Rocket Type", value: "v1.0" },
      { label: "Rocket Name", value: "Falcon 9" },
      { label: "Manufacturer", value: "SpaceX" },
      { label: "Nationality", value: "SpaceX" },
      { label: "Launch Date", value: "08 October 2012 00:35" },
      { label: "Payload Type", value: "Dragon 1.0" },
      { label: "Orbit", value: "ISS" },
      { label: "Launch Site", value: "CCAFS SLC 44" },
    ],
  },
];

export const applyFilter = (key) => async (dispatch) => {
  try {
    dispatch({ type: SET_LAUNCH_FETCH_STATUS, payload: true });
    await new Promise((resolve) => setTimeout(resolve, 3000));
    dispatch({ type: SET_LAUNCH_FETCH_STATUS, payload: false });

    let filteredData;
    switch (key) {
      case "1":
        filteredData = data;
        break;
      case "2":
        filteredData = data.filter((item) => item.launch_status == "Upcoming");
        break;
      case "3":
        filteredData = data.filter((item) => item.launch_status === "Success");
        break;
      case "4":
        filteredData = data.filter((item) => item.launch_status === "Failed");
        break;
      default:
        filteredData = data;
    }

    dispatch({
      type: SET_LAUNCH_DATA,
      payload: filteredData,
    });
  } catch (error) {
    dispatch({ type: SET_LAUNCH_FETCH_STATUS, payload: false });
  }
};

export const applyDateFilter = (key) => async (dispatch) => {
  try {
    dispatch({ type: SET_LAUNCH_FETCH_STATUS, payload: true });
    await new Promise((resolve) => setTimeout(resolve, 3000));
    dispatch({ type: SET_LAUNCH_FETCH_STATUS, payload: false });

    let filteredData;
    switch (key) {
      case "1":
        const lastMonth = moment().startOf("day").subtract(1, "month");
        filteredData = data.filter((item) =>
          moment(item.launch_at).isAfter(lastMonth)
        );
        break;
      case "2":
        const last6Month = moment().startOf("day").subtract(6, "month");
        filteredData = data.filter((item) =>
          moment(item.launch_at).isAfter(last6Month)
        );
        break;
      case "3":
        const lastYear = moment().startOf("day").subtract(1, "year");
        filteredData = data.filter((item) =>
          moment(item.launch_at).isAfter(lastYear)
        );
        break;
      default:
        filteredData = data;
    }

    dispatch({
      type: SET_LAUNCH_DATA,
      payload: filteredData,
    });
  } catch (error) {
    dispatch({ type: SET_LAUNCH_FETCH_STATUS, payload: false });
  }
};
