import { describe, expect, it } from 'vitest';
import { database } from './database';
describe('bootstrap', () => {
  it('mantém o banco local nomeado', () => {
    expect(database.name).toBe('academia-aluno-bootstrap');
  });
});
