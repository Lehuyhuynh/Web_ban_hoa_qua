import React from "react";
import { useSelector } from "react-redux";
// import CartProduct from "../component/cartProduct";
// import emptyCartImage from "../assest/empty.gif";
// import { toast } from "react-hot-toast";
// import { loadStripe } from "@stripe/stripe-js";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();

  // const totalPrice = productCartItem.reduce(
  //   (acc, curr) => acc + parseInt(curr.total),
  //   0
  // );
  // const totalQty = productCartItem.reduce(
  //   (acc, curr) => acc + parseInt(curr.qty),
  //   0
  // );

  // const handlePayment = async () => {
  //   if (user.email) {
  //     const stripePromise = await loadStripe(
  //       process.env.REACT_APP_STRIPE_PUBLIC_KEY
  //     );
  //     const res = await fetch(
  //       `${process.env.REACT_APP_SERVER_DOMIN}/create-checkout-session`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         body: JSON.stringify(productCartItem),
  //       }
  //     );
  //     if (res.statusCode === 500) return;

  //     const data = await res.json();
  //     console.log(data);

  //     toast("Redirect to payment Gateway...!");
  //     stripePromise.redirectToCheckout({ sessionId: data });
  //   } else {
  //     toast("You have not Login!");
  //     setTimeout(() => {
  //       navigate("/login");
  //     }, 1000);
  //   }
  // };
  return (
    <>
      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600">
          Your Cart Items
        </h2>

        <div className="">
          {/* display cart items */}

          <div className=""></div>

          {/* total cart item */}
          <div className=""></div>
        </div>
      </div>
    </>
  );
};

export default Cart;
