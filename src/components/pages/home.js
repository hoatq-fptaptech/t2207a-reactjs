import { useEffect, useState } from "react";
import Sidebar from "../layouts/sidebar";
import api from "../../services/api";
import url from "../../services/url";
import Product from "../views/product";
function Home(){
    const [products,setProducts] = useState([]);
    const loadProducts = async ()=>{
        try {
            const rs = await api.get(url.PRODUCT.LIST);
            setProducts(rs.data);
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        loadProducts();
    },[]);
    return (
        <div className="row">
            <div className="col-lg-3 col-md-5">
                <Sidebar/>
            </div>
            <div className="col-lg-9 col-md-7">
                <div className="row">
                {
                    products.map((e,k)=>{
                        return (
                            <div key={k} className="col-lg-4 col-md-6 col-sm-6">
                                <Product product={e} />
                            </div>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
}
export default Home;