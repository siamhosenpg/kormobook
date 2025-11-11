import React, { useEffect } from "react";
import { useEmployeeStore } from "../store/employeeStore";
import Profilecard from "../components/ui/card/Profilecard";

const Members = () => {
  const { employees, loading, fetchEmployees, deleteEmployee } =
    useEmployeeStore();
  useEffect(() => {
    fetchEmployees();
  }, [fetchEmployees]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="Pagearea Toparea">
      <div className="memberbox grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {employees.map((employee) => (
          <Profilecard employee={employee} key={employee.emp_id} />
        ))}
      </div>
    </div>
  );
};

export default Members;
