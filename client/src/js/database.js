import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const indexPwa = await openDB("PWA", 1);
  const tx = indexPwa.transaction("PWA", "readwrite");
  const store = tx.objectStore("PWA");
  const request = store.put ({
    id: 1,
    value: content
  })
  const result = await request
  console.log(result.value)
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const indexPwa = await openDB("PWA", 1);
  const tx = indexPwa.transaction("PWA", "readonly");
  const store = tx.objectStore("PWA");
  const request = store.get(1);
  const results = await request
  results? console.log(results.value): console.log("no data");
  return results?.value
};

initdb();
