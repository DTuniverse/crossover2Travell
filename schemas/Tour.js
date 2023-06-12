const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Tour", tourSchema);

// // const tour = [
//   {
//     title: "Immerse into Falls",
//     rating: 4.5,
//     price: 500,
//     description:
//       "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
//     url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
//   },
//   {
//     title: "2",
//     rating: 4.5,
//     price: 500,
//     description:
//       "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
//     url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
//   },
//   {
//     title: "3",
//     rating: 4.5,
//     price: 500,
//     description:
//       "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
//     url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
//   },
//   {
//     title: "4",
//     rating: 4.5,
//     price: 500,
//     description:
//       "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
//     url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
//   },
//   {
//     title: "Immerse into Falls",
//     rating: 4.5,
//     price: 500,
//     description:
//       "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
//     url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
//   },
//   {
//     title: "Immerse into Falls",
//     rating: 4.5,
//     price: 500,
//     description:
//       "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
//     url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
//   },
//   {
//     title: "5",
//     rating: 4.5,
//     price: 500,
//     description:
//       "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
//     url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
//   },
//   {
//     title: "6",
//     rating: 4.5,
//     price: 500,
//     description:
//       "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
//     url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
//   },
//   {
//     title: "7",
//     rating: 4.5,
//     price: 500,
//     description:
//       "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
//     url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
//   },
//   {
//     title: "8",
//     rating: 4.5,
//     price: 500,
//     description:
//       "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
//     url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
//   },
// ];

// // const tour = [
//   {
//     title: "Immerse into Falls",
//     rating: 4.5,
//     price: 500,
//     description:
//       "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
//     url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
//   },
//   {
//     title: "2",
//     rating: 4.5,
//     price: 500,
//     description:
//       "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
//     url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
//   },
//   {
//     title: "3",
//     rating: 4.5,
//     price: 500,
//     description:
//       "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
//     url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
//   },
//   {
//     title: "4",
//     rating: 4.5,
//     price: 500,
//     description:
//       "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
//     url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
//   },
//   {
//     title: "Immerse into Falls",
//     rating: 4.5,
//     price: 500,
//     description:
//       "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
//     url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
//   },
//   {
//     title: "Immerse into Falls",
//     rating: 4.5,
//     price: 500,
//     description:
//       "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
//     url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
//   },
//   {
//     title: "5",
//     rating: 4.5,
//     price: 500,
//     description:
//       "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
//     url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
//   },
//   {
//     title: "6",
//     rating: 4.5,
//     price: 500,
//     description:
//       "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
//     url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
//   },
//   {
//     title: "7",
//     rating: 4.5,
//     price: 500,
//     description:
//       "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
//     url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
//   },
//   {
//     title: "8",
//     rating: 4.5,
//     price: 500,
//     description:
//       "Enjoy a guided tour of the Canadian side of Niagara Falls. Experience the mighty waterfalls with stunning views of both the American Falls and the Horseshoe Falls. See the power of Niagara up close, onboard the Hornblower Niagara Cruises boat ride Voyage to the Falls.",
//     url: "https://www.niagarafallslive.com/wp-content/uploads/2021/02/beautiful-niagara-falls.jpg",
//   },
// ];
