/*importar da biblioteca lwc, o api 

o api permite que o atributo desejado
se torne publico, ou seja, receba dados de fora(pai)
propriedade publica

*/
import { LightningElement, api } from "lwc";

export default class Child extends LightningElement {
  //decorando o filho para receber dados do papis
  //@api nomeDaProp
  @api nome;
}
