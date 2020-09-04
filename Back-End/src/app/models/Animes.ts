import {  Entity, Column, PrimaryGeneratedColumn  } from 'typeorm'

@Entity('Animes')
class Animes{
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column()
    mal_id: number;

    @Column()
    title: string;

    @Column()
    synopsis: string;

    @Column()
    image: string;

    @Column('uuid')
    user_id: string;
}

export default Animes