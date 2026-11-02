import Dexie from 'dexie';
// Banco local reservado para funcionalidades futuras; não armazene dados pessoais sem política de segurança.
export const database = new Dexie('academia-aluno-bootstrap');
