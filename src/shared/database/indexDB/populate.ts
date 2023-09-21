import { db } from "./DBContext";
export async function populate() {
  await db.todo.bulkAdd([{ id: 1, value: "Hello world" }]);
}
