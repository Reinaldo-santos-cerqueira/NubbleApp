import {z} from 'zod';
import { stringUtils } from '../../../utils/stringFunctions';

const userNameRegex = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/gim;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/;
export const signUpSchema = z.object({
	username: z.string().regex(userNameRegex, 'Username invalid').min(5,'Deve possuir no minimo 5'),
	fullName: z.string().min(5, 'Muito pequeno mínimo 5').max(50, 'Muito grande no máximo 50').transform(stringUtils.capitalizeFirstLetter),
	email: z.string().email('E-mail invalido '),
	password: z.string().regex(passwordRegex,'Senha deverá ser forte')
});

export type SignUpSchema = z.infer<typeof signUpSchema>