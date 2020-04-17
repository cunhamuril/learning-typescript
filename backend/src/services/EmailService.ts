/**
 * Exemplo de tipagem de objetos em classes
 */

// Geralmente por padrão nome de interfaces começar com I
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

class EmailService {
  sendMail(to: IMailTo, message: IMailMessage) {
    console.log(`Email enviado para ${to.name}: ${message.subject}`);
  }
}

export default EmailService;
