const fs = require("fs").promises;
const path = require("path");
const contactsPath = path.join(__dirname, "contacts.json");

const contacts = require("./contacts.json");

function addContact()  {
  contacts.push(filed.value);
  const dataToAdd = JSON.stringify(contacts);
  const dataToAddString = `${dataToAdd}`;
  await fs.writeFile(contactsPath, dataToAddString);
  return body;
};
