import React, { useState } from "react";
import makeData from "../makeData";

import Table from "../components/Table";

export default function({ infinite }) {
  const [data] = useState(() => makeData(100));
  const [columns] = useState([
    { Header: "Row Index", accessor: (row, index) => index, width: 100 },
    {
      Header: "First Name",
      accessor: "firstName",
      minWidth: 140,
      maxWidth: 200
    },

    {
      Header: "Last Name",
      id: "lastName",
      accessor: d => d.lastName,
      minWidth: 140,
      maxWidth: 200
    },

    {
      Header: "Age",
      accessor: "age",
      width: 100
    },
    {
      Header: "Visits",
      accessor: "visits",
      width: 100
    }
  ]);

  return (
    <Table
      {...{
        data,
        columns,
        infinite,
        debug: true
      }}
    />
  );
}
