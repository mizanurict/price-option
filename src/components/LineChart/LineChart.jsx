/** @format */

import { LineChart as LChart, Line, XAxis, YAxis, PieChart, Pie } from "recharts";

const LineChart = () => {
  const studentData = [
    { name: "John", mathmarks: 85, physicsmarks: 86, chemistrymarks: 82 },
    { name: "Alice", mathmarks: 92, physicsmarks: 88, chemistrymarks: 90 },
    { name: "Bob", mathmarks: 78, physicsmarks: 72, chemistrymarks: 75 },
    { name: "Emily", mathmarks: 90, physicsmarks: 85, chemistrymarks: 88 },
    { name: "Michael", mathmarks: 80, physicsmarks: 75, chemistrymarks: 78 },
    { name: "Sophia", mathmarks: 88, physicsmarks: 80, chemistrymarks: 85 },
    { name: "David", mathmarks: 82, physicsmarks: 78, chemistrymarks: 80 },
    { name: "Emma", mathmarks: 95, physicsmarks: 90, chemistrymarks: 92 },
    { name: "James", mathmarks: 75, physicsmarks: 68, chemistrymarks: 72 },
    { name: "Olivia", mathmarks: 87, physicsmarks: 82, chemistrymarks: 85 },
  ];

  return (
    <div>
      <LChart width={700} height={300} data={studentData}>
        <Line dataKey={"mathmarks"}></Line>
        <Line dataKey="physicsmarks" stroke="red"></Line>
        <XAxis dataKey={"name"}></XAxis>
        <YAxis></YAxis>
      </LChart>
          <PieChart width={300} height={300}>
              <Pie data={studentData} dataKey={'mathmarks'}></Pie>
      </PieChart>
    </div>
  );
};

export default LineChart;
