import React, { useState } from "react";
import "./Styles/Navbar.css";
import ealers from "./Images/Group 3.png";
import smoke from "./Images/Group 2.png";
import brands from "./Images/Group 5.png";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react";
import { Loginpage } from "./Loginpage";

export const Navbar = () => {

  const OverlayOne = () => (
    <ModalOverlay
      bg="rgba(0, 0, 0, 0.64)"
      backdropFilter="blur(5px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  return (
    <div className="navbar-container">
      <div className="navbar-icons">
      <img src={ealers} alt="" />
      <img src={smoke} alt="" />
      <img src={brands} alt="" onClick={onOpen}/>
      </div>
      <div>
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
          {overlay}
          <ModalContent>
            <ModalCloseButton className="close-btn"/>
            <ModalBody>
              <Loginpage />
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </div>
    
  );
};
