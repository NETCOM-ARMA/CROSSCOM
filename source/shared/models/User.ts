import { Table, Column, PrimaryGeneratedColumn } from "typeorm"

@Table()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    
    steam_id: number

}