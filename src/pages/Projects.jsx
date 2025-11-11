import React, { useEffect } from "react";
import ProjectBox from "../components/ui/card/ProjectBox";
import { useProjectStore } from "../store/useProjectStore";

const Projects = () => {
  const { Project, LoadingProject, fetchProject, deleteProject } =
    useProjectStore();
  useEffect(() => {
    fetchProject();
  }, [fetchProject]);

  if (LoadingProject) return <p>Loading Projects...</p>;

  return (
    <div className="Pagearea Toparea  z-0">
      <ul className="    w-[100%] bg-background flex items-center justify-between px-8 py-4 border-b border-border-secondary ">
        <li className="Bold w-2/12 ">Project ID</li>
        <li className="Bold w-3/12 ">Project Name</li>
        <li className="Bold w-2/12 ">Status</li>
        <li className="Bold w-3/12 ">Controbute Team</li>
        <li className="Bold w-2/12 ">Price</li>
        <li className="Bold w-2/12 ">Delivery</li>
        <li className="Bold w-[70px] shrink-0 text-right ">Action</li>
      </ul>
      <div className=" flex flex-col gap-3 mt-2">
        {Project.map((project) => (
          <ProjectBox project={project} key={project.projectId} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
