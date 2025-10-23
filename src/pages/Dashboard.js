import React from "react";
import { FaHeartbeat, FaWalking, FaBell, FaFileAlt, FaClipboardList, FaStar } from "react-icons/fa";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">

      {/* Tracking */}
      <section className="dashboard-section tracking">
        <h3>Health Tracking</h3>
        <div className="cards">
          <div className="card">
            <FaWalking size={30} color="#007bff"/>
            <h4>Steps Today</h4>
            <p>3,500</p>
          </div>
          <div className="card">
            <FaHeartbeat size={30} color="#ff4d4d"/>
            <h4>Heart Rate</h4>
            <p>78 bpm</p>
          </div>
        </div>
      </section>

      {/* Emergency Alerts */}
      <section className="dashboard-section alerts">
        <h3>Emergency Alerts</h3>
        <div className="cards">
          <div className="card alert">
            <FaBell size={30} color="#a10000"/>
            <h4>Alert 1</h4>
            <p>Patient John Doe had abnormal heart rate!</p>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="dashboard-section resources">
        <h3>Resources</h3>
        <div className="cards">
          <div className="card">
            <FaFileAlt size={30} color="#007bff"/>
            <h4>Guide: Managing Diabetes</h4>
            <a href="#">View PDF</a>
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="dashboard-section reports">
        <h3>Reports</h3>
        <div className="cards">
          <div className="card">
            <FaClipboardList size={30} color="#ff9800"/>
            <h4>Blood Test - John Doe</h4>
            <p>Date: 2025-10-18</p>
            <a href="#">View Report</a>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="dashboard-section plans">
        <h3>Plans</h3>
        <div className="cards">
          <div className="card">
            <FaClipboardList size={30} color="#4caf50"/>
            <h4>Exercise Plan - John Doe</h4>
            <p>Duration: 4 weeks</p>
            <a href="#">View Plan</a>
          </div>
        </div>
      </section>

      {/* Points */}
      <section className="dashboard-section points">
        <h3>Points</h3>
        <div className="cards">
          <div className="card">
            <FaStar size={30} color="#ffc107"/>
            <h4>John Doe</h4>
            <p>Points: 120</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Dashboard;

