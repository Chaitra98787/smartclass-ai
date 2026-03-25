function Attendance() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Attendance</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>John</td>
            <td>Present</td>
          </tr>

          <tr>
            <td>Emma</td>
            <td>Absent</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Attendance;