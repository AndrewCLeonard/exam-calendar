import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import {GET_QUERY_CLASS} from "../utils/queries";

function GetCLass() {
const {error,loading,data} = useQuery (GET_QUERY_CLASS)
useEffect(()=>{

},[data])

return
<div></div>

}
export default GetCLass;