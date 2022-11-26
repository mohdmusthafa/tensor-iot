/*
 * Author: Mohammed Musthafa
 * Created Date: Saturday November 26th 2022
 * Product : TensorIoT
 */

import { YoutubeOutlined } from "@ant-design/icons";
import { Modal, Typography } from "antd";
import crsLogo from "../assets/crs1.png";
import { DataLabel, Label, Title } from "../styles/tensor";
import styled from "styled-components";
import { SiNasa,SiWikipedia } from 'react-icons/si'
const { Text, Link } = Typography;

const LinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DetailDataContainer = styled.div`
  margin-top: 10px;
`;
const DetailDataItem = styled(LinkContainer)`
  margin: 0;
`;

const RenderLabel = ({ launch_status }) => {
  if (launch_status === "Failed")
    return <Label type="error">{launch_status}</Label>;
  if (launch_status === "Upcoming")
    return <Label type="warn">{launch_status}</Label>;
  return <Label shape="round">{launch_status}</Label>;
};

function LaunchDetails({ modalOpen = false, onCancel, missionData }) {
  return (
    <>
      <Modal open={modalOpen} onCancel={onCancel} footer={null} centered>
        {/* HEADER START */}
        <div style={{ display: "flex", width: "max-content" }}>
          <div style={{ width: 70, height: 70, marginRight: 10 }}>
            <img
              src={crsLogo}
              style={{ width: "100%", height: "100%" }}
              alt="Mission Logo"
            />
          </div>
          <div>
            <Title>{missionData.mission || ""}</Title>
            <Text>{missionData.rocket || ""}</Text>
            <LinkContainer>
              <SiNasa />
              <SiWikipedia />
              <YoutubeOutlined />
            </LinkContainer>
          </div>
          <div style={{ marginLeft: 10 }}>
            <RenderLabel launch_status={missionData.launch_status || ""} />
          </div>
        </div>
        {/* HEADER ENDS */}
        <div style={{ marginTop: 15 }}>
          <Text>
            {missionData?.description?.text || ""}
            <Link href={missionData?.description?.link?.href || ""}>
              {missionData?.description?.link?.label || ""}
            </Link>
          </Text>
        </div>
        <div>
          {missionData.mission_info && missionData.mission_info.map((item) => {
            return (
              <DetailDataContainer key={item.label}>
                <DetailDataItem>
                  <DataLabel>{item.label || ""}</DataLabel>
                  <Text>{item.value || ""}</Text>
                </DetailDataItem>
                <hr />
              </DetailDataContainer>
            );
          })}
        </div>
      </Modal>
    </>
  );
}

export default LaunchDetails;
