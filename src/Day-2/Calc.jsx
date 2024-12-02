import React, { useState } from "react";
import "./Calc.css";

const Calc = (props) => {
  let [data, setData] = useState("");

  let handleData = (e) => {
    setData(data + e.target.value);
    console.log(data);
  };

  let handleOperation = () => {
    let ans = eval(data);
    setData(ans);
  };

  let handleAllClear = () => {
    setData("");
  };

  let handleClear = () => {
    setData(data.slice(0,-1));
  };

  // return (
  //   <>
  //     <div className="outer">
  //       <table>
  //         <tr>
  //           <td colSpan={4}>
  //             <input type="text" className="display" />
  //           </td>
  //         </tr>
  //         <div className="keys">
  //           <tr>
  //             <td>
  //               <input
  //                 type="button"
  //                 onClick={handleData}
  //                 value={7}
  //                 className="numbers"
  //               />
  //             </td>
  //             <td>
  //               <input
  //                 type="button"
  //                 onClick={handleData}
  //                 value={8}
  //                 className="numbers"
  //               />
  //             </td>
  //             <td>
  //               <input
  //                 type="button"
  //                 onClick={handleData}
  //                 value={9}
  //                 className="numbers"
  //               />
  //             </td>
  //             <td>
  //               <input
  //                 type="button"
  //                 onClick={handleData}
  //                 value={"/"}
  //                 className="sign"
  //               />
  //             </td>
  //           </tr>
  //           <tr>
  //             <td>
  //               <input
  //                 type="button"
  //                 onClick={handleData}
  //                 value={4}
  //                 className="numbers"
  //               />
  //             </td>
  //             <td>
  //               <input
  //                 type="button"
  //                 onClick={handleData}
  //                 value={5}
  //                 className="numbers"
  //               />
  //             </td>
  //             <td>
  //               <input
  //                 type="button"
  //                 onClick={handleData}
  //                 value={6}
  //                 className="numbers"
  //               />
  //             </td>
  //             <td>
  //               <input
  //                 type="button"
  //                 onClick={handleData}
  //                 value={"*"}
  //                 className="sign"
  //               />
  //             </td>
  //           </tr>
  //           <tr>
  //             <td>
  //               <input
  //                 type="button"
  //                 onClick={handleData}
  //                 value={1}
  //                 className="numbers"
  //               />
  //             </td>
  //             <td>
  //               <input
  //                 type="button"
  //                 onClick={handleData}
  //                 value={2}
  //                 className="numbers"
  //               />
  //             </td>
  //             <td>
  //               <input
  //                 type="button"
  //                 onClick={handleData}
  //                 value={3}
  //                 className="numbers"
  //               />
  //             </td>
  //             <td>
  //               <input
  //                 type="button"
  //                 onClick={handleData}
  //                 value={"-"}
  //                 className="sign"
  //               />
  //             </td>
  //           </tr>
  //           <tr>
  //             <td>
  //               <input
  //                 type="button"
  //                 onClick={handleData}
  //                 value={0}
  //                 className="numbers"
  //               />
  //             </td>
  //             <td>
  //               <input
  //                 type="button"
  //                 onClick={handleData}
  //                 value={"."}
  //                 className="sign"
  //               />
  //             </td>
  //             <td>
  //               <input
  //                 type="button"
  //                 onClick={handleOperation}
  //                 value="="
  //                 className="sign"
  //               />
  //             </td>
  //             <td>
  //               <input
  //                 type="button"
  //                 onClick={handleData}
  //                 value={"+"}
  //                 className="sign"
  //               />
  //             </td>
  //           </tr>
  //         </div>
  //       </table>
  //     </div>
  //   </>
  // );

  const buttons = [
    ["AC", "C", "%", "/"],
    [7, 8, 9, "*"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];

  return (
    <>
      <div className="outer">
        <table>
          <tbody>
            {props.display && (
              <tr>
                <td colSpan={4}>
                  <input
                    type="text"
                    value={data}
                    className="display"
                    readOnly
                  />
                </td>
              </tr>
            )}
            {buttons.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((button, buttonIndex) => (
                  <td key={buttonIndex}>
                    <input
                      type="button"
                      value={button}
                      className={isNaN(button) ? "sign" : "numbers"}
                      onClick={() => {
                        if (button === "AC") handleAllClear();
                        else if (button === "C") handleClear();
                        else if (button === "=") handleOperation();
                        else handleData({ target: { value: button } });
                      }}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Calc;
