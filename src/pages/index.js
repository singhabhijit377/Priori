import React, { useState, useMemo } from "react";
import { AppBar, SearchBar, Table } from "components";
import useGetAssetDetails from "queries";

import { useQuery } from "react-query";
// import { axios } from "utils";
import axios from "axios";

const Home = () => {
  const [id, setId] = useState("demo.eth");
  const {
    data: AssetDetails,
    dataUpdatedAt,
    isLoading,
  } = useGetAssetDetails(id);

  console.log("AssetDetails are : ", AssetDetails);

  const columns = [
    {
      field: "logo_url",
      headerName: "",
      width: 32,
      renderCell: (params) => {
        const { formattedValue } = params;
        console.log("Params : ", params);
        return formattedValue ? (
          <div>
            <img src={formattedValue} alt="" />
          </div>
        ) : null;
      },
    },
    { field: "contract_name", headerName: "Name", width: 70, flex: 1 },
    { field: "contract_ticker_symbol", headerName: "Symbol", flex: 1 },
    {
      field: "balance",
      headerName: "Balance",
      type: "number",
      width: 250,
      flex: 1,
    },
    {
      field: "quote",
      headerName: "Quote",
      type: "number",
      width: 250,
      flex: 1,
    },
    {
      field: "quote_rate",
      headerName: "Rate",
      type: "number",
      width: 250,
      flex: 1,
    },
  ];

  const DataList = useMemo(
    () =>
      (dataUpdatedAt &&
        AssetDetails &&
        AssetDetails.data?.items.map((item, index) => ({
          ...item,
          id: index + 1,
        }))) ||
      [],
    [dataUpdatedAt]
  );

  return (
    <div>
      <AppBar />

      <div className="w-full flex justify-center mt-4">
        <SearchBar setSearch={setId} />
      </div>
      <div className="mt-8"></div>
      <div className="px-4 mt-6">
        <Table
          columns={columns}
          data={DataList}
          fetchingData={isLoading}
          emptyText={`No Data to display for this address (${id})`}
        />
      </div>
    </div>
  );
};

export default Home;
