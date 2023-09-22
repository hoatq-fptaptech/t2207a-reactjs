import Sidebar from "../layouts/sidebar";

function Shop(){
    return (
        <div className="row">
            <div className="col-lg-3 col-md-5">
                <Sidebar/>
            </div>
            <div className="col-lg-9 col-md-7">
                <h1>Shop Page</h1>
            </div>
        </div>
    )
}
export default Shop;