import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import api from "../axiosInstance";
import { useModal } from "../modal/ModalContext";

// Define interfaces for your data
interface Skill {
  skill_title: string;
  newSkill: string[];
}

interface Project {
  id: string;
  title: string;
  // add other project properties
}

// Define the structure for the context state
interface DataContextType {
  skills: Skill[];
  projects: Project[];
  isLoading: boolean;
  error: string | null;
  fetchSkills: () => Promise<void>;
  fetchProjects: () => Promise<void>;
}

// Define the props for DataProvider
interface DataProviderProps {
  children: ReactNode;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasFetchedSkills, setHasFetchedSkills] = useState(false);
  const [hasFetchedProjects, setHasFetchedProjects] = useState(false);
  const { openModal } = useModal();

  // Fetch skills
  const fetchSkills = async () => {
    if (hasFetchedSkills) return;

    setIsLoading(true);
    try {
      const response = await api.get<{ skills: Skill[] }>("/skills/get");
      setSkills(response.data.skills);
      setHasFetchedSkills(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch skills");
      openModal("Failed to fetch skills");
    } finally {
      setIsLoading(false);
    }
  };

  // Fetch projects
  const fetchProjects = async () => {
    if (hasFetchedProjects) return;

    setIsLoading(true);
    try {
      // const response = await api.get<{ projects: Project[] }>("/projects/get");
      // setProjects(response.data.projects);
      setProjects([]);
      setHasFetchedProjects(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch projects");
    } finally {
      setIsLoading(false);
    }
  };

  // Effect to fetch skills and projects on mount
  useEffect(() => {
    fetchSkills();
    fetchProjects();
  }, []);

  return (
    <DataContext.Provider
      value={{ skills, projects, isLoading, error, fetchSkills, fetchProjects }}
    >
      {children}
    </DataContext.Provider>
  );
};
