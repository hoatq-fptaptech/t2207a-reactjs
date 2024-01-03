import { PayPalScriptProvider,PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
const initialOptions = {
    clientId: "AZFEOYBfFE-wy0qQI2cwemlCTeSwUM0PoadhQ23nJbHoFSxQQzW7w3OsHROlaS9nnYOg87jDxBVilTht",
    currency: "USD",
    intent: "capture",
  };
function PayPalBox(){
    const createOrder =  () => { // hàm gửi api để tạo order
        return  axios.post("/api/create-order", {
            cart: []
        });
    }
    const onApprove =   (data)=> { // gọi khi thanh toán thành công
        return axios.post("/api/update-order",{
            order_id: data.order_id
        });
          
    }
    const onCancel = (data)=>{ // gọi api khi huỷ thanh toán
        return axios.post("/api/cancel-order",{
            order_id:data.order_id
        })
    }
    return (
        <PayPalScriptProvider options={initialOptions}>
            <PayPalButtons createOrder={createOrder} onApprove={onApprove} 
            onCancel={onCancel}  style={{ layout: "horizontal" }} />
        </PayPalScriptProvider>
    );
}
export default PayPalBox;