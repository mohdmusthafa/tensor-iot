/*
 * Author: Mohammed Musthafa
 * Created Date: Saturday November 26th 2022
 * Product : TensorIoT
 */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Table, ConfigProvider } from "antd";
import { Label } from "../styles/tensor";
import LaunchDetails from "./LaunchDetails";
import { applyFilter } from "../redux/launches/actions";
import moment from "moment";


const columns = [
  { title: "No", dataIndex: "no", key: "no" },
  { title: "Launched (UTC)", dataIndex: "launch_at", key: "launch_at", width: "250px",
    render: (_, { launch_at }) => {
      return moment(launch_at).format("DD MMMM YYYY h:m")
    }
  },
  { title: "Location", dataIndex: "location", key: "location", width: "250px" },
  { title: "Mission", dataIndex: "mission", key: "mission", width: "200px" },
  { title: "Orbit", dataIndex: "orbit", key: "orbit" },
  { title: "Launch Status", key: "launch_status", dataIndex: "launch_status", width: "150px",
    render: (_, { launch_status }) => {
      if (launch_status === "Failed")
        return <Label type="error">{launch_status}</Label>;
      if (launch_status === "Upcoming")
        return <Label type="warn">{launch_status}</Label>;
      return <Label shape="round">{launch_status}</Label>;
    },
  },
  { title: "Rocket", dataIndex: "rocket", key: "rocket" },
];

const RenderEmpty = () => (
  <div style={{ textAlign: "center" }}>
    <p style={{ color: "black" }}>No results found for the specified filter</p>
  </div>
);

function LaunchData() {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const data = useSelector(state => state.launches.launches);
  const isLoading = useSelector(state => state.launches.launchesFetching);
  
  useEffect(() => {
    dispatch(applyFilter('1'));
    // eslint-disable-next-line
  }, []);

  const handleModalClose = () => {
    setModal(false);
  };

  const handleRowClick = (record) => {
    setModalData(record);
    setModal(true);
  };

  return (
    <ConfigProvider renderEmpty={isLoading ? () => {} : RenderEmpty}>
      <Table
        columns={columns}
        bordered
        pagination={{ defaultPageSize: 12, showSizeChanger: false }}
        dataSource={data}
        loading={{ spinning: isLoading, size: 'large' }}
        style={{ width: "1200px" }}
        rowKey={(record) => record.no}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => handleRowClick(record),
          };
        }}
        
      />
      <LaunchDetails
        modalOpen={modal}
        missionData={modalData}
        onCancel={handleModalClose}
      />
    </ConfigProvider>
  );
}
export default LaunchData;
