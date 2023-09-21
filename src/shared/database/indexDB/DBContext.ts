import Dexie, { Table } from "dexie";
import { populate } from "./populate";
import getConfig from "next/config";

///this will act like a dbcontext
export class DbContext extends Dexie {
  todo!: Table<Domain.Todo, number>;

  constructor() {
    super("nextlaunch");
    this.version(1).stores({
      todo: "++id",
    });
  }
}

export const db = new DbContext();

db.on("populate", populate);

export function resetDatabase() {
  db.tables.map((table) => table.clear());
  populate();
}

export function deleteDatabase() {
  Dexie.delete("nextlaunch");
}
