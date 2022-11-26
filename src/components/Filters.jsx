/*
 * Author: Mohammed Musthafa
 * Created Date: Saturday November 26th 2022
 * Product : TensorIoT
 */
import { useState } from "react";
import {
  CalendarOutlined,
  FilterOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Space } from "antd";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { applyDateFilter, applyFilter } from "../redux/launches/actions";

const FilterContainer = styled.div`
  margin: 100px 25% 0 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FlexibleSpace = styled(Space)`
  font-size: ${(props) => props.size + "px" || 1 + "em"};
`;

const launchFilterItems = [
  {
    label: "All Launches",
    key: "1",
  },
  {
    label: "Upcoming Launches",
    key: "2",
  },
  {
    label: "Successful Launches",
    key: "3",
  },
  {
    label: "Failed Launches",
    key: "4",
  },
];

const dateFilterItems = [
  {
    label: "Past 1 Month",
    key: "1",
  },
  {
    label: "Past 6 Month",
    key: "2",
  },
  {
    label: "Past 1 Year",
    key: "3",
  },
];

function Filters() {
  const dispatch = useDispatch();
  const [currentDateFilter, setCurrentDateFilter] = useState("Past 6 Months");
  const [currentStatusFilter, setCurrentStatusFilter] =
    useState("All Launches");

  const dateFilterProps = {
    items: dateFilterItems,
    onClick: ({ key }) => {
      dispatch(applyDateFilter(key));
      setCurrentDateFilter(
        dateFilterItems.find((item) => item.key === key).label
      );
    },
  };

  const launchFilterProps = {
    items: launchFilterItems,
    onClick: ({ key }) => {
      dispatch(applyFilter(key));
      setCurrentStatusFilter(
        launchFilterItems.find((item) => item.key === key).label
      );
    },
  };
  return (
    <FilterContainer>
      <div>
        <Dropdown menu={dateFilterProps} trigger={["click"]}>
          <Button type="text">
            <FlexibleSpace size={16}>
              <CalendarOutlined />
              {currentDateFilter}
              <DownOutlined />
            </FlexibleSpace>
          </Button>
        </Dropdown>
      </div>
      <div>
        <Dropdown menu={launchFilterProps} trigger={["click"]}>
          <Button type="text">
            <FlexibleSpace size={16}>
              <FilterOutlined />
              {currentStatusFilter}
              <DownOutlined />
            </FlexibleSpace>
          </Button>
        </Dropdown>
      </div>
    </FilterContainer>
  );
}

export default Filters;
