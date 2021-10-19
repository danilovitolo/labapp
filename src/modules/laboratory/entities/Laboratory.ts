import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("laboratories")
class Laboratory {
  @PrimaryColumn()
  id?: string;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column({ name: "zipcode" })
  zipCode: string;

  @Column()
  neighborhood: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  active: boolean;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Laboratory };
