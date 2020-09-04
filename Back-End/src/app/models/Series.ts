import {  Entity, Column, PrimaryGeneratedColumn  } from 'typeorm'

@Entity('series')
class Series{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    image_thumbnail_path: string

    @Column('uuid')
    user_id: string
}

export default Series