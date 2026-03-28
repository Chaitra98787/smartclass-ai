import { useState } from "react";
import axios from "axios";
import "./ApplyLeave.css";
import StudentLayout from "./StudentLayout";
function ApplyLeave() {
  const [form, setForm] = useState({
    name: "",
    srn: "",
    class: "",
    type: "",
    reason: "",
    from: "",
    to: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!form.name || !form.srn || !form.class || !form.type || !form.from || !form.to) {
      alert("Please fill all required fields");
      return;
    }

    try {
      await axios.post("http://localhost:5000/apply-leave", form);
      alert("Leave submitted successfully ✅");

      setForm({
        name: "",
        srn: "",
        class: "",
        type: "",
        reason: "",
        from: "",
        to: ""
      });

    } catch {
      alert("Error submitting leave");
    }
  };

  return (
    <StudentLayout>

      <div className="leave-page">
        <div className="leave-container">

          <div className="leave-header">
            <h2>Apply for Leave</h2>
            <p>Submit your leave request</p>
          </div>

          <div className="leave-form">

            <input name="name" placeholder="Student Name" value={form.name} onChange={handleChange} />
            <input name="srn" placeholder="SRN (Student ID)" value={form.srn} onChange={handleChange} />
            <input name="class" placeholder="Class" value={form.class} onChange={handleChange} />

            <select name="type" value={form.type} onChange={handleChange}>
              <option value="">Select Leave Type</option>
              <option>Sick Leave</option>
              <option>Casual Leave</option>
              <option>Club Activity</option>
              <option>Hackathon</option>
            </select>

            <input name="reason" placeholder="Reason (optional)" value={form.reason} onChange={handleChange} />

            <div className="date-row">
              <div>
                <label>From</label>
                <input type="date" name="from" value={form.from} onChange={handleChange} />
              </div>

              <div>
                <label>To</label>
                <input type="date" name="to" value={form.to} onChange={handleChange} />
              </div>
            </div>

            <button onClick={handleSubmit}>
              Submit Leave →
            </button>

          </div>

        </div>
      </div>

    </StudentLayout>
  );
}

export default ApplyLeave;