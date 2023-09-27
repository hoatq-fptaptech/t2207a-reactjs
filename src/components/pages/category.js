import { useParams } from "react-router-dom";
import Sidebar from "../layouts/sidebar";
import { useState } from "react";

function Category(){
    const {id} = useParams();
    const [products,setProducts]= useState([]);
    const loadProducts = async ()=>{
        // call api get list product of this category
    }
    return (
        <div className="row">
            <div className="col-lg-3 col-md-5">
                <Sidebar/>
            </div>
            <div className="col-lg-9 col-md-7">
                <h1>Category Page: {id}</h1>
            </div>
        </div>
    )
}
export default Category;