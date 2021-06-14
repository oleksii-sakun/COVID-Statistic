import React from "react";
import { Modal } from "semantic-ui-react";
import vector1 from "../images/Vector.png";
import vector2 from "../images/Vector2.png";
import vector3 from "../images/Vector3.png";

interface ModalProps {
  onClose: () => void;
  countryName: string;
  totalConfirmed: number;
  totalDeaths: number;
  totalRecovered: number;
}

export default function DetailedInformationModal({
  onClose,
  countryName,
  totalConfirmed,
  totalDeaths,
  totalRecovered,
}: ModalProps): JSX.Element {
  return (
    <Modal size="large" open={true} onClose={onClose}>
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
