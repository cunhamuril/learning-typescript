/**
 * Tipagem de objetos em classes
 */

// Geralmente por padrão nome de interfaces deve começar com I
interface IMailTo {
  name: string;
  email: string;
}

interface IMailMessage {
  subject: string;
  body: string;

  /**
   * ?: Significa que é opcional, pode ter ou não
   * Existem duas formas de definir array em TS: Array<string> ou string[]
   */
  attachment?: string[];
}

interface IMessageDTO {
  // DTO: Data Transfer Object
  to: IMailTo;
  message: IMailMessage;
}

/**
 * Tipar classe
 */
interface IEmailService {
  sendMail(request: IMessageDTO): void; // void é o retorno
}

class EmailService implements IEmailService {
  sendMail({ to, message }: IMessageDTO) {
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
}

export default EmailService;
