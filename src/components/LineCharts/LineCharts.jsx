import { BarChart, Bar, XAxis, YAxis } from 'recharts';

const LineCharts = () => {
     const MarthMarkes = [
          { "student": "Student 1", "marks": 85 },
          { "student": "Student 2", "marks": 78 },
          { "student": "Student 3", "marks": 92 },
          { "student": "Student 4", "marks": 88 },
          { "student": "Student 5", "marks": 76 },
          { "student": "Student 6", "marks": 95 },
          { "student": "Student 7", "marks": 89 },
          { "student": "Student 8", "marks": 84 },
          { "student": "Student 9", "marks": 91 },
          { "student": "Student 10", "marks": 73 },
          { "student": "Student 11", "marks": 100 }
     ]

     return (
          <div>
               <BarChart width={800} height={400} data={MarthMarkes} >
                    <Bar dataKey='marks' barSize={30} fill="blue"></Bar>
                    <XAxis dataKey="student" ></XAxis>
                    <YAxis></YAxis>

               </BarChart>
          </div>
     );
};

export default LineCharts;