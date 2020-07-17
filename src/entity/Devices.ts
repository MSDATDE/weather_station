import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, Index, OneToMany, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { MeasurementData } from './MeasurementData';


@Entity()
export class Devices extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Index('device_name', { unique: true })
    @Column({ type: 'varchar', length: 191, nullable: false })
    public device_name: string

    @Index('api_token', { unique: true })
    @Column({ type: 'varchar', length: 191 })
    public api_token: string

    @CreateDateColumn()
    public created_at: Date;

    @UpdateDateColumn()
    public updated_at: Date;

    @OneToMany(type => MeasurementData, measurementData => measurementData.device)
    measurementData: MeasurementData[];
}