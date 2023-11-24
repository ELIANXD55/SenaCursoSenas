import React from "react";
import { Card, CardBody, Link, Button } from "@nextui-org/react";
import { AiFillEdit } from "react-icons/ai";
import { FormUpdate } from "./FormUpdate";
import { FormAditionalInfo } from "./AditionalInfo";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@nextui-org/react";
import { FormChangePassword } from "./FormChangePassword";

export const ProfileINFO = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");
  const [activeForm, setActiveForm] = React.useState(null);
  const [formTitle, setFormTitle] = React.useState("");

  const sizes = ["4xl"];

  const handleOpen = (size, formId, title) => {
    setSize(size);
    setActiveForm(formId);
    setFormTitle(title);
    onOpen();
  };

  return (
    <div>
      <Card className="max-w-[200px] ml-20">
        <CardBody className="">
          <p>Rol</p>
          <div className="flex justify-start">
            <div className="flex flex-wrap gap-3">
              {sizes.map((size) => (
                <Link href="#" key={size} onPress={() => handleOpen(size, "form1", "Actualizar Información")}>
                  Editar
                </Link>
              ))}
            </div>
            <Modal size={size} isOpen={isOpen} onClose={onClose}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1 text-center">{formTitle}</ModalHeader>
                    <ModalBody>
                      {activeForm === "form1" ? <FormUpdate /> : null}
                      {activeForm === "form2" ? <FormChangePassword /> : null}
                      {activeForm === "form3" ? <FormAditionalInfo /> : null}
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Cerrar
                      </Button>
                      <Button color="primary" onPress={onClose}>
                        Actualizar
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
            <div className="pt-1">
              <AiFillEdit />
            </div>
          </div>
          <div className="flex justify-start">
            <div className="flex flex-wrap gap-3">
              {sizes.map((size) => (
                <Link href="#" key={size} onPress={() => handleOpen(size, "form2", "Actualizar Contraseña")}>
                  Editar Contraseña
                </Link>
              ))}
            </div>
            <div className="pt-1">
              <AiFillEdit />
            </div>
          </div>
        </CardBody>
      </Card>
      <div className="ml-20 mt-5">
        <Button onClick={() => handleOpen(size, "form3", "Agregar Información")} className='w-[200px] text-white text-center' color='success'>
          + Agregar Informacion
        </Button>
      </div>
    </div>
  );
};
