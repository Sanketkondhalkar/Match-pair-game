const data = [
  "/match-pair/bananas.png",
  "/match-pair/clown.png",
  "/match-pair/grape.png",
  "/match-pair/ice-cream.png",
  "/match-pair/leaf.png",
  "/match-pair/mango.png",
  "/match-pair/monkey.png",
  "/match-pair/strawberry.png",
];

var newdata = [];

const randomindex = () => {
  const index = Math.floor(Math.random() * data.length);
  return index;
};
const skipdata = (id) => {
  datainsert(id, data[randomindex()]);
};
const datainsert = (id, image) => {
  const filterdata = newdata.filter((item) => {
    return item.image === image;
  });
  if (filterdata.length <= 1) {
    newdata.push({
      id,
      image,
      flag: false,
    });
  } else {
    skipdata(id);
  }
};

const wow = (value) => {
  if (value === "aadesh") {
    newdata = [];
  }
  for (let i = 0; i <= 3; i++) {
    //   console.log(i);
    datainsert(i, data[randomindex()]);
  }
  return newdata;
};

export default wow;
