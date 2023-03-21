import Modal from 'react-modal';
import { Button } from '../Form/Button';
import { Input } from '../Form/Input';


export const RedefinedPasswordModal = ({isOpen, onRequestClose}) => {

  return (
      <Modal
          isOpen={isOpen}
          onRequestClose={onRequestClose}
          className='redefinedPasswordModal'
          overlayClassName='overlay_redefinedPasswordModal'

      >
          <div className="header">
            <h4>Resetar Senha</h4>
            <p>Insira seu e-mail cadastrado, vamos enviar instruções para redefinir sua senha.</p>
          </div>

            <form  className="pass-reset">
              <Input 
                label='E-mail cadastrado'
                type='email'
                id='pass-reset'
                placeholder='Seu e-mail'
              />
              <Button type='submit' name='Resetar senha' />
            </form>
      </Modal>
  );

};