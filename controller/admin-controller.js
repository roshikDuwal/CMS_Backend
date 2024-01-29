import { contactModel } from "../models/contact-model.js";
import { serviceModal } from "../models/service-modal.js";
import { UserModal } from "../models/user-model.js";


//Contact
export const getAllContact = async (req, res, next) => {
  try {
    const contacts = await contactModel.find();

    if (!contacts || contacts.length === 0) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.status(200).json({
      contacts,
    });
  } catch (error) {
    res.status(404).json({ error: "error found" });
    next(error);
  }
};


//Users
export const getAllUser = async (req, res, next) => {
  try {
    const users = await UserModal.find().select({ password: 0 });

    if (!users || users.length === 0) {
      return res.status(404).json({ message: "Data not found" });
    }

    res.status(200).json({
      users: users,
    });
  } catch (error) {
    res.status(401).json({ error: "error found" });
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    await UserModal.deleteOne({ _id: id });

    res.status(200).json({
      message: "User Deleted Successfully",
    });
  } catch (error) {
    res.status(404).json({ error: "error found" });
    next(error);
  }
};

export const getSingleUser = async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModal.findOne({ _id: id }).select({ password: 0 });

    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(404).json({ error: "error found" });
    next(error);
  }
};

export const updateSingleUser = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedUserData = req.body;

    const user = await UserModal.updateOne(
      { _id: id },
      {
        $set: updatedUserData,
      }
    );

    res.status(200).json({
      message: "User Updated Successfully",
    });
  } catch (error) {
    res.status(404).json({ error: "error found" });
    next(error);
  }
};


//Service
export const addservice=async(req,res,next)=>{
  try {
      const {service,description,price,provider}=req.body;

      const isService=await serviceModal.findOne({service});

      if(isService){
          return res.status(400).json({ message: "Service already exist" });
      }

      await serviceModal.create({
          service,
          description,
          price,
          provider
      })

      res.status(201).json({
          message: "Service created successfully",
        });

  } catch (error) {
      res.status(400).send({ msg: "Register failed" });
      next(error);
  }
}

export const deleteService = async (req, res, next) => {
  try {
    const { id } = req.params;
    await serviceModal.deleteOne({ _id: id });

    res.status(200).json({
      message: "User Deleted Successfully",
    });
  } catch (error) {
    res.status(404).json({ error: "error found" });
    next(error);
  }
};

export const serviceEdit=async(req,res,next)=>{
  try {
    const id = req.params.id;
    const updatedServiceData = req.body;

     await serviceModal.updateOne(
      { _id: id },
      {
        $set: updatedServiceData,
      }
    );

    res.status(200).json({
      message: "Service Updated Successfully",
    });
  } catch (error) {
    res.status(404).json({ error: "error found" });
    next(error);
  }
}

export const getSingleService = async (req, res) => {
  try {
    const id = req.params.id;

    const servicedata = await serviceModal.findOne({ _id: id });

    res.status(200).json({
      servicedata,
    });
  } catch (error) {
    res.status(404).json({ error: "error found" });
    next(error);
  }
};

