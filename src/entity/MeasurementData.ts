import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { Devices } from './Devices';

@Entity()
export class MeasurementData extends BaseEntity {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ type: 'float', nullable: false })
    public temperature: number;

    @Column({ type: 'float', nullable: false })
    public pressure: number;

    @Column({ type: 'float', nullable: false })
    public humidity: number;

    @Column({ type: 'varchar', length: 254, nullable: false })
    public location: string;

    @Column({ type: 'varchar', length: 254, nullable: false })
    public place: string;

    @CreateDateColumn()
    public created_at: Date;

    @ManyToOne(type => Devices, device => device.measurementData)
    device: Devices;
}