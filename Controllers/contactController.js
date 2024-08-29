const contacts = require('../Models/contactSchema');

exports.addDelivery = async (req, res) => {
    console.log("Inside add project");
    const userId = req.payload;
    console.log(userId);
    const { fullname, phonenumber, email, state, city, street, postal, country } = req.body;

    try {
        const newDoner = new contacts({
            fullname: fullname,
            phonenumber: phonenumber,
            email: email,
            state: state,
            city: city,
            street: street,
            postal: postal,
            country: country,
            userId: userId
        });

        await newDoner.save();
        res.status(200).json("Contact added successfully");
    } catch (err) {
        res.status(401).json({ message: "Unable to add contact due to an error", error: err });
    }
};
