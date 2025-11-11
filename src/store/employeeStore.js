import { create } from "zustand";

export const useEmployeeStore = create((set) => ({
  employees: [],
  loading: true,

  // ✅ Fetch employees from JSON file
  fetchEmployees: async () => {
    try {
      const res = await fetch("/data/employee.json");
      const data = await res.json();
      set({ employees: data, loading: false });
    } catch (error) {
      console.error("Failed to fetch employees:", error);
      set({ loading: false });
    }
  },

  // ✅ Add new employee
  addEmployee: (employee) =>
    set((state) => ({
      employees: [...state.employees, employee],
    })),

  // ✅ Update employee
  updateEmployee: (emp_id, updatedData) =>
    set((state) => ({
      employees: state.employees.map((emp) =>
        emp.emp_id === emp_id ? { ...emp, ...updatedData } : emp
      ),
    })),

  // ✅ Delete employee
  deleteEmployee: (emp_id) =>
    set((state) => ({
      employees: state.employees.filter((emp) => emp.emp_id !== emp_id),
    })),
}));
