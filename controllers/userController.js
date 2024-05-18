const GuestDB = require("../models/usermodel");
const nodemailer = require("nodemailer");


const CreateGuest = async (req, res) => {
  try {
    const { FirstName, LastName, Email, Guest ,} = req.body;
    const GuestData = new GuestDB({ FirstName, LastName, Email, Guest });
    await SendmailTransport(Email,FirstName,Guest,);
    res.json({
      success:true,
      data: GuestData,
      message:"Your Booking is Confirmed"
    });
  } catch (error) {
  res.status(500).send({message:"Not booked",success:false,error})
  }
};


const GetGuest = async (req, res) => {
  try {
    const GData = req.params.id;
    const getGuestData = await GuestDB.findById({ _id: GData });

    res.json({
      Data: getGuestData,
    });
  } catch (error) {
    res.json({
      Error: error.message,
    });
  }
};

const SendmailTransport = async (Email,FirstName,Guest,) => {
  try {
  console.log("data",FirstName,Guest)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "psphealthcare96@gmail.com",
        pass: "xjaf oeas xnmh isav",
      },
    });
    const mailOption = {
      from: "prabupalni1999@gmail.com",
      to: [Email,"prabupsp000@gmail.com"],
      subject: "Wedding invitation ",
    
      text: `Dear ${FirstName},

      You have booked ${Guest} members for wedding function.
           "Joining Two Families as One",
           
           Thank you for your booking`

           
    };
    await transporter.sendMail(mailOption);
    console.log("Message send it");
  } catch (error) {
    console.log(`mail error:${error.message}`);
  }
};
module.exports = { CreateGuest, GetGuest };
