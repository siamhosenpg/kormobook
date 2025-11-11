import { create } from "zustand";

export const useProjectStore = create((set) => ({
  Project: [],
  LoadingProject: true,

  // ✅ Fetch Project Data from JSON file
  fetchProject: async () => {
    try {
      const res = await fetch("/data/projects.json"); // note: leading slash important
      const data = await res.json();
      set({ Project: data, LoadingProject: false });
    } catch (error) {
      console.error("Failed to fetch Project:", error);
      set({ LoadingProject: false });
    }
  },

  // ✅ Add Project
  addProject: (project) =>
    set((state) => ({
      Project: [...state.Project, project],
    })),

  // ✅ Update Project
  updateProject: (emp_id, updatedData) =>
    set((state) => ({
      Project: state.Project.map((emp) =>
        emp.emp_id === emp_id ? { ...emp, ...updatedData } : emp
      ),
    })),

  // ✅ Delete Project
  deleteProject: (emp_id) =>
    set((state) => ({
      Project: state.Project.filter((emp) => emp.emp_id !== emp_id),
    })),
}));
