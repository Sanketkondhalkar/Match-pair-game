import React, { useEffect, useState } from "react";
import "./App.css";
import wow from "./newdata";
import Confetti from "react-confetti";

const App = () => {
  const [data, setdata] = useState();
  const [index, setindex] = useState(0);
  const [buttonshow, setbuttonshow] = useState();
  console.log(data);
  const [selected, setselected] = useState({
    first: "",
    second: "",
  });
  const timeinterval = (item) => {
    setTimeout(() => {
      const samedata = data.map((src) => {
        if (src.id === item.id) {
          return { ...src, flag: false };
        } else if (src.id === selected.first.id) {
          return { ...src, flag: false };
        }
        return src;
      });
      setdata(samedata);
    }, 1200);
  };
  const getdata = (item) => {
    // console.log(item);
    setindex(index + 1);
    if (selected.first == "" && selected.second == "") {
      setselected({ ...selected, first: item });
    } else {
      setselected({ ...selected, second: item });

      if (selected.first.image === item.image) {
        const samedata = data.map((src) => {
          if (src.id === item.id) {
            return { ...src, flag: true };
          } else if (src.id === selected.first.id) {
            return { ...src, flag: true };
          }
          return src;
        });
        setdata(samedata);
        const flagdata = data.every((src) => {
          return src.flag;
        });
        setbuttonshow(flagdata);
        setselected({ first: "", second: "" });
      } else {
        timeinterval(item);
        clearTimeout(timeinterval());

        setselected({ first: "", second: "" });
      }
    }

    const flagchange = data.map((src) => {
      if (src.id === item.id) {
        return { ...src, flag: true };
      }
      return src;
    });

    setdata(flagchange);

    const flagdata = data.every((src) => {
      return src.flag;
    });
    setbuttonshow(flagdata);
    // console.log(data);
    // console.log(flagdata);
  };
  // console.log(buttonshow);

  useEffect(() => {
    const flagdata = data?.every((src) => {
      return src.flag;
    });
    setbuttonshow(flagdata);
  }, [selected]);

  useEffect(() => {
    console.log("wow useeffect");
    const data = wow();
    setdata(data);
  }, []);

  return (
    <div className="box_data">
      <div className="header">
        <h2>Match-pair</h2>
        <h2>Attempts:{index}</h2>
      </div>
      {/* <div className="round">
        <p className="count"> {index}</p>
      </div> */}
      <div className="center">
        <div className="body_container">
          {data?.map((item) => {
            return (
              <div
                className="box"
                key={item.id}
                onClick={() => getdata(item)}
                style={{
                  backgroundColor: item.flag ? "white" : "rgb(198, 111, 23)",
                }}
              >
                <div className="demo">
                  {item.flag ? (
                    <img src={item?.image} alt="" />
                  ) : (
                    <p className="question">?</p>
                  )}
                </div>
              </div>
            );
          })}
          <button
            className="buttondata"
            onClick={() => {
              const data = wow("sanket");
              setbuttonshow(false);
              setdata(data);
              setindex(0);
            }}
          >
            refresh
          </button>
        </div>
        {buttonshow ? (
          <button
            className="buttondata"
            onClick={() => {
              const data = wow("sanket");
              setbuttonshow(false);
              setdata(data);
              setindex(0);
            }}
          >
            refresh
          </button>
        ) : (
          ""
        )}

        {buttonshow && (
          <Confetti
            width={window.innerWidth - 20}
            height={window.innerHeight}
          />
        )}
      </div>
    </div>
  );
};

export default App;

// import React, { useEffect, useState } from "react";
// import newdata from "./Child";
// import "./App.css";
// import wow from "./Child";

// const App = () => {
//   const [data, setdata] = useState();
//   const [selected, setselected] = useState({
//     firstdata: "",
//     seconddata: "",
//   });

//   const [alltrue, setAlltrue] = useState();

//   useEffect(() => {
//     const dd = data?.every((value) => {
//       return value.flag;
//     });
//     setAlltrue(dd);
//   }, [selected]);

//   useEffect(() => {
//     const demo = wow();
//     setdata(demo);
//   }, []);
//   const getdata = (item) => {
//     if (selected.firstdata === "" && selected.seconddata === "") {
//       setselected({ ...selected, firstdata: item });
//     } else {
//       setselected({ ...selected, seconddata: item });

//       if (selected.firstdata.image === item.image) {
//         setselected({ firstdata: "", seconddata: "" });
//       } else {
//         setTimeout(() => {
//           const samedata = data.map((src) => {
//             if (src.id === selected.firstdata.id) {
//               return { ...src, flag: false };
//             } else if (src.id === item?.id) {
//               return { ...src, flag: false };
//             }
//             return src;
//           });
//           setdata(samedata);
//           setselected({ firstdata: "", seconddata: "" });
//         }, 1300);
//       }
//     }

//     const flagdata = data.map((src) => {
//       if (src.id === item.id) {
//         return { ...src, flag: true };
//       }
//       return src;
//     });
//     setdata(flagdata);
//   };
//   console.log(alltrue);

//   function refreshPage() {
//     // window.location.reload(true);
//   }
//   console.log(data);
//   return (
//     <div className="container">
//       {data?.map((item) => {
//         return (
//           <div className="box" onClick={() => getdata(item)} key={item?.id}>
//             {item.flag ? <img src={item?.image} alt="" /> : ""}
//           </div>
//         );
//       })}

//       {alltrue ? (
//         <button
//           onClick={() => {
//             const ww = wow("aadesh");
//             setdata(ww);
//           }}
//         >
//           Refresh
//         </button>
//       ) : (
//         ""
//       )}
//     </div>
//   );
// };

// export default App;
