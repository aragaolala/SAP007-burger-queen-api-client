import React from 'react';
import { Background, CloseModalOfMenuOptions, ModalContent, ModalWrapper } from './ModalStyle';

// modal para sucesso do registro e pedido enviado para a cozinha
const ModalSucessRegister = ({showModal, setShowModal, children}) => {
    return (
    <>
    {showModal ? (
        <Background>
            <ModalWrapper showModal={showModal}>
            <ModalContent>
                {children}
            </ModalContent>
            <CloseModalOfMenuOptions aria-label='Close Modal' onClick={() => setShowModal(prev => !prev)} />
            </ModalWrapper>
        </Background>

    
    ): null}
        
    </>
    
    )
};

export default ModalSucessRegister;

