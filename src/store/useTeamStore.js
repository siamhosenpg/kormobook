import { create } from "zustand";

export const useTeamStore = create((set) => ({
  Teams: [],
  loading: true,

  // ✅ Fetch Data from JSON File (async/await)
  fetchTeam: async () => {
    try {
      const res = await fetch("/data/teams.json");
      const data = await res.json();
      set({ Teams: data, loading: false });
    } catch (error) {
      console.error("Failed to fetch Team:", error);
      set({ loading: false });
    }
  },

  // ✅ Create new team
  addTeam: (team) =>
    set((state) => ({
      Teams: [...state.Teams, team],
    })),

  // ✅ Update existing team
  updateTeam: (emp_id, updatedData) =>
    set((state) => ({
      Teams: state.Teams.map((emp) =>
        emp.emp_id === emp_id ? { ...emp, ...updatedData } : emp
      ),
    })),

  // ✅ Delete team
  deleteTeam: (emp_id) =>
    set((state) => ({
      Teams: state.Teams.filter((emp) => emp.emp_id !== emp_id),
    })),
}));
