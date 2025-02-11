import React from "react";
import { Table } from "antd";
import convertNumber from "../utils/convertNumberToWords";
import Data from "../Data/SampleData.json";

const RecentPlays = () => {
  const columns = [
    {
      title: "Song Name",
      dataIndex: "songName",
      key: "songName",
      filters: [
        ...new Set(Data.recentStreams.map((item) => item.songName)),
      ].map((name) => ({
        text: name,
        value: name,
      })),
      onFilter: (value, record) => record.songName.includes(value),
      render: (text) => <span style={{ color: "#FF6F61" }}>{text}</span>,
    },
    {
      title: "Artist",
      dataIndex: "artist",
      key: "artist",
      filters: [...new Set(Data.recentStreams.map((item) => item.artist))].map(
        (name) => ({
          text: name,
          value: name,
        })
      ),
      onFilter: (value, record) => record.artist.includes(value),
      render: (text) => <span style={{ color: "#6B5B95" }}>{text}</span>,
    },
    {
      title: "Date Streamed",
      dataIndex: "dateStreamed",
      key: "dateStreamed",
      sorter: (a, b) => new Date(a.dateStreamed) - new Date(b.dateStreamed),
      render: (text) => <span style={{ color: "#88B04B" }}>{text}</span>,
    },
    {
      title: "Stream Count",
      dataIndex: "streamCount",
      key: "streamCount",
      render: (text) => (
        <span style={{ color: "#FFA500" }}>{convertNumber(text)}</span>
      ),
      sorter: (a, b) => a.streamCount - b.streamCount,
    },
    {
      title: "User ID",
      dataIndex: "userId",
      key: "userId",
      render: (text) => <span style={{ color: "#92A8D1" }}>{text}</span>,
    },
  ];

  return (
    <div
      style={{ background: "#1f1f1f", padding: "20px", borderRadius: "10px" }}
    >
      <h2 style={{ color: "#fff", marginBottom: "20px" }}>Recent Streams</h2>
      <Table
        dataSource={Data.recentStreams}
        columns={columns}
        rowKey="userId"
        pagination={{ pageSize: 5, position: ["bottomCenter"] }}
        style={{ background: "#1f1f1f", color: "#fff" }}
        bordered
        scroll={{ x: true }}
      />
    </div>
  );
};

export default RecentPlays;
