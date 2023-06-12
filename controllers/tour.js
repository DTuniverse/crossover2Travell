const Tour = require("../schemas/Tour");

const createTour = async (req, res) => {
  try {
    const { title, rating, price, description, url } = req.body;
    const tour = await Tour.create({ title, rating, price, description, url });
    res.status(201).json({ data: tour });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getAllTours = async (req, res) => {
  try {
    const tours = await Tour.find();
    if (!tours.length) {
      res.status(200).json({ msg: "No tours in the DB" });
    } else {
      res.status(200).json({ data: tours });
    }
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getOneTour = async (req, res) => {
  try {
    const { id } = req.params;
    const tour = await Tour.findById(id);
    if (tour) {
      return res.status(200).json({ data: tour });
    }
    res.status(404).json({ msg: "I don`t know this tour :(" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// const updateStudent = async (req, res) => {
//   try {
//     const { first_name, last_name, email } = req.body;
//     const { id } = req.params;
//     const student = await Student.findByIdAndUpdate(
//       id,
//       {
//         first_name,
//         last_name,
//         email,
//       },
//       { new: true }
//     );
//     if (!student) {
//       res.status(404).json({ msg: "I don`t know this student :(" });
//     } else {
//       res
//         .status(200)
//         .json({ msg: "Student updated successfully", data: student });
//     }
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// };

// const deleteOneStudent = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const student = await Student.findByIdAndDelete(id);
//     if (!student) {
//       res.status(404).json({ msg: "I don`t know this student :(" });
//     } else {
//       res
//         .status(200)
//         .json({ msg: "Student deleted successfully", data: student });
//     }
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// };

module.exports = {
  createTour,
  getAllTours,
  getOneTour,
  //   updateStudent,
  //   deleteOneStudent,
};
