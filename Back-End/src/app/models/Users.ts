import {  Entity, PrimaryGeneratedColumn, Column, BeforeInsert  } from 'typeorm'
import bcrypt from 'bcryptjs'

@Entity('users')
class Users {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    //Decoretor que é executado antes de inserir os dados no Banco de Dados
    @BeforeInsert()
    // Cria o Hash da senha do usuário
    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8)
    }
}

export default Users
