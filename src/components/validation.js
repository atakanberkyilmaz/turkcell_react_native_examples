import  {object, string, number, date , InferType} from "yup";

const messages = {
    required: "Bu alan zorunludur.",
    email: 'Geçerli bir email girin.',
    min: "En az  5 karakter giriniz.",

};

const validations = object({
     username: string().required(messages.required),
     email: string().email().required(messages.required),
     password: string().min(5).required(messages.required),
     passwordConfirm: string().oneOf([ref("")],"Parolalar eşleşmiyor").required(messages.required),

})

export default validations;