import "./projectModal.css";
import { Project } from "./ProjectCard";

interface Prop {
  open: boolean;
  onClose: () => void;
  content: Project;
}
const ProjectModal: React.FC<Prop> = ({ open, onClose, content }) => {
  if (!open) return null;

  return (
    <>
      <div className="modal-backdrop ">
        <div className="modal-container text-2xl">
          <div className="modal-header">
            <h2 className="text-3xl">
              I was engaged at {content.client} through{" "}
              <b className="text-white"> {content.company}</b>.
            </h2>
          </div>
          <h2 className="px-8 ">Roles & Responsibilities</h2>
          <div className="modal-body" id="scrlbr">
            <ul>
              {content.responsibilities.map((res, i) => (
                <li
                  className="text-2xl leading-relaxed list-disc text-[#99a1ac]"
                  key={i}
                >
                  {res}
                </li>
              ))}
            </ul>
            <small className="mt-4 block leading-tight">
              Tools/Technologies: {content.tools.join(", ")}
            </small>
          </div>

          <div className="modal-footer">
            <button
              onClick={onClose}
              className="rounded px-5 py-2  bg-slate-400 hover:bg-slate-500 text-gray-900"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
