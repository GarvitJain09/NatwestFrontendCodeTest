import React, { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { ApiData } from "./action/apiData.action";
import { STATUS } from "./app.const";

function PaymentDataTable() {
  const APIDataP = useSelector((state) => state);
  const dispatch = useDispatch();
  const [dataTrans, setDataTrans] = useState();
  const [filter, setFilter] = useState("All");
  useEffect(() => {
    setDataTrans(APIDataP.data);
    const onScroll = function () {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // if(ApiData.metaData.hasMoreElements)
        dispatch(ApiData(APIDataP.metaData.nextPageIndex, APIDataP.data));
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [APIDataP]);
  const onDDLChange = (e) => {
    setFilter(e);
  };
  return (
    <div>
      <div>
        <DropdownButton
          alignRight
          title="Filter"
          id="dropdown-menu-align-right"
          onSelect={onDDLChange}
        >
          <Dropdown.Item eventKey="A">Approved</Dropdown.Item>
          <Dropdown.Item eventKey="C">Cancelled</Dropdown.Item>
          <Dropdown.Item eventKey="P">Pending Approval</Dropdown.Item>
          <Dropdown.Item eventKey="All">All</Dropdown.Item>
        </DropdownButton>
      </div>
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>Payment Amount</th>
              <th>Payment Currency</th>
              <th>Payment Type</th>
              <th>Payment Date</th>
              <th>Payment Status</th>
              <th>To Account</th>
              <th>From Account</th>
            </tr>
          </thead>
          <tbody>
            {filter==='All'?dataTrans
              
              ?.map((data, index) => {
                return (
                  <tr key={index}>
                    {" "}
                    <td>{data.paymentAmount}</td>
                    <td>{data.paymentCurrency}</td>
                    <td>{data.paymentType}</td>
                    <td>{data.paymentDate}</td>
                    <td>{STATUS[data.paymentStatus]}</td>
                    <td>{data.toAccaunt.accountNumber}</td>
                    <td>{data.fromAccount.accountNumber}</td>
                  </tr>
                );
              }):dataTrans
              ?.filter((D) => D.paymentStatus === filter)
              ?.map((data, index) => {
                return (
                  <tr key={index}>
                    {" "}
                    <td>{data.paymentAmount}</td>
                    <td>{data.paymentCurrency}</td>
                    <td>{data.paymentType}</td>
                    <td>{data.paymentDate}</td>
                    <td>{STATUS[data.paymentStatus]}</td>
                    <td>{data.toAccaunt.accountNumber}</td>
                    <td>{data.fromAccount.accountNumber}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default PaymentDataTable;
