import React, { useEffect } from "react";
import {useDispatch} from 'react-redux';

import "bootstrap/dist/css/bootstrap.min.css";
import "./app.scss";
import { ApiData } from "./action/apiData.action";
import PaymentDataTable from "./PaymentDataTable";

const App = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
   dispatch(ApiData())
  },[])
  return <PaymentDataTable/>;
};

export default App;
