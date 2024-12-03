import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
// import Table from './Day-1/Task-1/Table';
// import Table from './Day-1/Task-2/Table';
import Table from "./Day-1/Task-4/Table";
// import Table from './Day-1/Task-3/Table';
// import Card from './Day-1/Task-1/Card';
import SPIMoreThan5 from "./Day-1/Task-1/SpiMoreThan5";
import SPILessThan5 from "./Day-1/Task-1/SpiLessThan5";
import Hindi from "./Day-1/Task-1/Hindi";
import Sindhi from "./Day-1/Task-1/Sindhi";
// import Card from './Day-1/Task-2/Card';
// import Card from './Day-1/Task-3/Card';
import Card from "./Day-1/Task-4/Card";
import FacultyA from "./Day-1/Task-2/FacultyA";
import DOB from "./Day-1/Task-2/DOB";
import RAM from "./Day-1/Task-3/RAM";
import Pending from "./Day-1/Task-4/Pending";
import Completed from "./Day-1/Task-4/Completed";
import Percentage from "./Day-1/Task-4/Percentage";
import Calc from "./Day-2/Calc";
import StateData from "./Day-4/StateData";
import CRUD from "./Day-4/CRUD/CRUD";
import Layout from "./Day-3/Parts/Layout";
import First from "./Day-3/Pages/First";
import Second from "./Day-3/Pages/Second";
import Third from "./Day-3/Pages/Third";
import Fourth from "./Day-3/Pages/Fourth";
import Fifth from "./Day-3/Pages/Fifth";
import Sixth from "./Day-3/Pages/Sixth";
import Seventh from "./Day-3/Pages/Seventh";
import Eighth from "./Day-3/Pages/Eighth";
import Ninth from "./Day-3/Pages/Ninth";
import Tenth from "./Day-3/Pages/Tenth";
import Eleventh from "./Day-3/Pages/Eleventh";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FacultyCard from "./Day-4/FacultyCard";
import FacultyDetail from "./Day-4/FacultyDetail";
import FacultyCardAPI from "./Day-5/Task-1/FacultyCard";
import FacultyDetailAPI from "./Day-5/Task-1/FacultyDetail";
import StudentCard from "./Day-5/Task-2/StudentCard";
import StudentDetail from "./Day-5/Task-2/StudentDetail";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Day - 1
  // <Table/>
  // <Card/>
  // <SPIMoreThan5/>
  // <SPILessThan5/>
  // <Hindi/>
  // <Sindhi/>
  // <FacultyA/>
  // <DOB/>
  // <RAM/>
  // <Pending/>
  // <Completed/>
  // <Percentage/>

  // Day - 2
  // <Calc display={true} />

  // Day - 3
  // <BrowserRouter>
  //   <Routes>
  //     <Route path='/' element={<Layout/>}>
  //       <Route index element={<First />}/>
  //       <Route path='/second' element={<Second/>}/>
  //       <Route path='/third' element={<Third/>}/>
  //       <Route path='/fourth' element={<Fourth/>}/>
  //       <Route path='/fifth' element={<Fifth/>}/>
  //       <Route path='/sixth' element={<Sixth/>}/>
  //       <Route path='/seventh' element={<Seventh/>}/>
  //       <Route path='/eighth' element={<Eighth/>}/>
  //       <Route path='/ninth' element={<Ninth/>}/>
  //       <Route path='/tenth' element={<Tenth/>}/>
  //       <Route path='/eleventh' element={<Eleventh/>}/>
  //     </Route>
  //   </Routes>
  // </BrowserRouter>

  // Day - 4
  // <CRUD/>
  // <StateData/>
  // <FacultyCard/>
  // <BrowserRouter>
  //   <Routes>
  //     <Route path="/" element={<FacultyCard />} />
  //     <Route path="/faculty/:id" element={<FacultyDetail />} />
  //   </Routes>
  // </BrowserRouter>

  // Day - 5
  <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<FacultyCardAPI />} />
      <Route path="/facultyapi/:id" element={<FacultyDetailAPI />} /> */}
      <Route path="/" element={<StudentCard />} />
      <Route path="/student/:id" element={<StudentDetail />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
