import express from "express";
import Stripe from "stripe";
import cors from "cors";
require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json());

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY); 


app.post("/create-checkout-session", async (req, res) => {
  try {
    const { amount } = req.body;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: 'inr',
            product_data: { name: "Order Payment" },
            unit_amount: amount , 
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/order",
      cancel_url: "http://localhost:3000/review-order",
    });

    res.json({ id: session.id }); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(4000, () => console.log("Server running on http://localhost:4000"));
