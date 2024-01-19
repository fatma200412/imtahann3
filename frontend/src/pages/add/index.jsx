import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "./../../redux/slices/dataSlice";
import { useEffect, useState } from "react";
import style from "./style.module.css";
import Button from "@mui/material/Button";

function Add() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.data);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    dispatch(fetchUserData());
  }, []);
  useEffect(() => {
    setFilteredData(data);
  }, [data]);
  useEffect(() => {
    setFilteredData(() =>
      data.filter((x) =>
        x.name.toLowerCase().trim().includes(search.toLowerCase().trim())
      )
    );
  }, [search]);

  useEffect(() => {
    const copyState = [...filteredData];
    if (sort == "name") {
      setFilteredData(() => {
        return [...copyState.sort((a, b) => a.name.localeCompare(b.name))];
      });
    } else if (sort == "price") {
      const res = [...copyState.sort((a, b) => a.price - b.price)];
      return res;
    }
  }, [sort]);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  // const sortedData =
  //   filteredData &&
  //   filteredData.sort((a, b) => {
  //     if (sortName === "asc") {
  //       return a.name.localeCompare(b.name);
  //     }
  //     if (sortName === "desc") {
  //       return b.name.localeCompare(a.name);
  //     }
  //     if (sortPrice === "asc") {
  //       return a.price - b.price;
  //     }
  //     if (sortPrice === "desc") {
  //       return b.price - a.price;
  //     }
  //   });

  return (
    <>
      <div className={style.tableData}>
        <div>
          <input
            type="text"
            placeholder="seach"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
          <Button
            onClick={() => {
              setSort("name");
            }}
            variant="outlined"
            color="error"
          >
            Sort by Name
          </Button>
          <Button
            onClick={() => {
              setSort("price");
            }}
            variant="outlined"
            color="error"
          >
            Sort by Price
          </Button>
        </div>
        <table className={style.table}>
          <thead className={style.thead}>
            <th>Name</th>
            <th>Des</th>
            <th>Price</th>
            <th>Delete</th>
          </thead>
          <tbody className={style.tbody}>
            {filteredData &&
              filteredData.map((elem, i) => {
                return (
                  <tr key={i} className={style.tr}>
                    <td>{elem.name}</td>
                    <td>{elem.des}</td>
                    <td>{elem.price}</td>
                    <td>
                      <Button variant="contained" color="error">
                        Delete
                      </Button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Add;
