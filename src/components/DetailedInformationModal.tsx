import React from "react";
import { Modal } from "semantic-ui-react";
import vector1 from "../images/Vector.png";
import vector2 from "../images/Vector2.png";
import vector3 from "../images/Vector3.png";
import { ModalProps } from "./interfaces";

export default function DetailedInformationModal({
  onClose,
  countryName,
  totalConfirmed,
  totalDeaths,
  totalRecovered,
}: ModalProps): JSX.Element {
  const windowWidth = window.innerWidth;
  return (
    <Modal
      size={windowWidth < 813 ? "tiny" : "large"}
      open={true}
      onClose={onClose}
    >
      <Modal.Header>
        <p className="modal__country-name">{countryName}</p>
      </Modal.Header>
      <Modal.Content>
        <div className="modal-items">
          <div className="modal-item">
            <div>
              <img src={vector1}></img>
              <p>Total Confirmed</p>
            </div>
            <p>{totalConfirmed}</p>
          </div>
          <div className="modal-item">
            <div>
              <img src={vector2}></img>
              <p>Total Deaths</p>
            </div>
            <p>{totalDeaths}</p>
          </div>
          <div className="modal-item">
            <div>
              <img src={vector3}></img>
              <p>Total Recovered</p>
            </div>
            <p>{totalRecovered}</p>
          </div>
        </div>
      </Modal.Content>
      <Modal.Actions>
        <div className="modal-actions">
          <button color="blue" className="modal__btn" onClick={onClose}>
            OK
          </button>
        </div>
      </Modal.Actions>
    </Modal>
  );
}
