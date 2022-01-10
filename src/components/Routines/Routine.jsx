import React from "react";
import "./Routine.scss";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Routine = () => {
  return (
    <>
      <Navbar />
      <div className="routinePage">
        <h1 className="text-center">Find Your Routine Here</h1>
        <div className="routinePage__container">
          <div className="routine-class text-center">
            <h3>Select Your Class</h3>
            <button>Six</button>
            <button>Seven</button>
            <button>Eight</button>
            <button>Nine</button>
            <button>Ten</button>
          </div>
          <div className="routineTable text-center pt-5">
            <h2>Routine is here</h2>
            <table className="table table-striped ">
              <thead>
                <tr className="table-primary">
                  <th scope="col">Days</th>
                  <th scope="col">1st Hour</th>
                  <th scope="col">2nd Hour</th>
                  <th scope="col">3rd Hour</th>
                  <th scope="col">4th Hour</th>
                  <th scope="col">5th Hour</th>
                  <th scope="col">6th Hour</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Saturday</th>
                  <td>Bangla</td>
                  <td>Bangla</td>
                  <td>Bangla</td>
                  <td>Bangla</td>
                  <td>Bangla</td>
                  <td>Bangla</td>
                </tr>
                <tr>
                  <th scope="row">Sunday</th>
                  <td>English</td>
                  <td>English</td>
                  <td>English</td>
                  <td>English</td>
                  <td>English</td>
                  <td>English</td>
                </tr>
                <tr>
                  <th scope="row">Monday</th>
                  <td>Math</td>
                  <td>Math</td>
                  <td>Math</td>
                  <td>Math</td>
                  <td>Math</td>
                  <td>Math</td>
                </tr>
                <tr>
                  <th scope="row">Tuesday</th>
                  <td>ICT</td>
                  <td>ICT</td>
                  <td>ICT</td>
                  <td>ICT</td>
                  <td>ICT</td>
                  <td>ICT</td>
                </tr>
                <tr>
                  <th scope="row">Wednesday</th>
                  <td>Science</td>
                  <td>Science</td>
                  <td>Science</td>
                  <td>Science</td>
                  <td>Science</td>
                  <td>Science</td>
                </tr>
                <tr>
                  <th scope="row">Thursday</th>
                  <td>World</td>
                  <td>World</td>
                  <td>World</td>
                  <td>World</td>
                  <td>World</td>
                  <td>World</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Routine;
