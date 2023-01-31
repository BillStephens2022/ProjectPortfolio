import React from "react";
import Modal from "react-bootstrap/Modal";
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";

export default function ProjectCard({ project }) {
  console.log(project);
  return (
    <div className="col-2 card m-2 text-black bg-light" dataToggle="modal" dataTarget=".modal-profile-lg">
      <div className="card-image bg-danger">
      <img
        src={`${process.env.PUBLIC_URL}/images/${project.image1}`}
        className="card-img-top"
        alt="project pic"
      />
      </div>
      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>
        <p className="card-text">{project.desc}</p>
      </div>
      <div className="card-body">
      {project.deployedUrl !== "N/A" 
        ?
        <a href={project.deployedUrl} class="card-link text-white">
          Deployed App
        </a>
        :
        null
      }
        
        <a href={project.deployedUrl} class="card-link text-white">
          Github Repo
        </a>
        

      </div>

    	{/* <!-- .modal-profile --> */}
      <Modal show={false}>
      <ModalHeader>
        <ModalTitle>{project.title}</ModalTitle>
      </ModalHeader>
      <ModalBody>{project.image2}</ModalBody>
      <ModalFooter>This is the footer</ModalFooter>
    </Modal>
	{/* <!-- //.modal-profile --> */}
    </div>
  );
}
