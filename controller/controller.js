const Users = require("../model/model");


const userList = async (req, res) => {
  let data = await Users.find();

  // res.json(data);
  res.status(200).send({
    success: true,
    message: "All User Get Successfully",
    data: data,
  });
};

// userAdd
const userAdd = async (req, res) => {
  
  try {
   
    const user = new Users({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        });

   
    let response = await user.save();
    console.log("response", response);

    res.status(201).send({
      success: true,
      message: "User saved successfully",
      data: user,
    });

  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};



// userUpdate
const userUpdate = async (req, res) => {

  try {
    const user = await Users.findById(req.params.id);
    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User Not Found" });
    }
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
   
    const updatedUser = await user.save();
    res.status(200).send({
      success: true,
      message: "User Updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
};

// userDelete
const userDelete = async (req, res) => {
try{
    const user = await Users.findByIdAndDelete(req.params.id);
    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User Not Found" });
    }

    res.status(200).send({
      success: true,
      message: "User deleted succesfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      error: error.message,
    });
  }
};

// getSingleUser
const getSingleUser = async (req, res) => {
  try {
   
    const user = await Users.findById(req.params.id);
    if (!user) {
      return res
        .status(404)
        .send({ success: false, message: "User Not Found" });
    }

    res
      .status(200)
      .send({ success: true, message: "User saved successfully", data: user });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

// // userUpdate by Admin
// const userUpdateByAdmin = async (req, res) => {
//   try {
//     if (!ObjectID.isValid(req.params.id)) {
//       // console.log("Error", req.params.id);
//       return res.status(400).send(`No Record with given ID ${req.params.id}`);
//     }
//     const user = await Users.findByIdAndUpdate(req.params.id);
//     if (user) {
//       user.name = req.body.name || user.name;
//       user.email = req.body.email || user.email;
//       user.phoneNumber = req.body.phoneNumber || user.phoneNumber;
//       user.pic = req.body.pic || user.pic;
//       user.isAdmin = req.body.isAdmin || user.isAdmin;
//       if (req.body.password) {
//         user.password = req.body.password;
//       }
//       const updatedUser = await user.save();
//       res.status(200).send({
//         _id: updatedUser._id,
//         name: updatedUser.name,
//         email: updatedUser.email,
//         phoneNumber: updatedUser.phoneNumber,
//         pic: updatedUser.pic,
//         password: updatedUser.password,
//         isAdmin: updatedUser.isAdmin,
//       });
//     } else {
//       res.status(404);
//       throw new Error("User Not Found");
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({
//       error: error.message,
//     });
//   }
// };

module.exports = {
    userAdd,userList,userDelete,getSingleUser,userUpdate
};

