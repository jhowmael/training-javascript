/* Exercício 16: Crie uma classe Agenda.
Ela deve permitir adicionar, remover e listar contatos.*/

class Contact {
    name: string;
    phone: number;
    added: boolean = false;

    constructor(name: string, phone: number) {
        this.name = name;
        this.phone = phone;
    }

    toAdd(): void {
        if (!this.added) {
            this.added = true;
            console.log(`${this.name} has been to add.`);
            console.log(`${this.phone} has been to add.`);
        } else {
            console.log(`${this.name} is already to add.`);
            console.log(`${this.phone} is already to add.`);
        }
    }

    delete(): void {
        if (this.added) {
            this.added = false;
            console.log(`${this.name} has been deleted.`);
            console.log(`${this.phone} has been deleted.`);
        } else {
            console.log(`${this.name} was not deleted.`);
            console.log(`${this.phone} was not deleted.`);
        }
    }
}

class Agenda {
    contacts: Contact[] = [];

    addContact(contact: Contact): void {
        this.contacts.push(contact);
        console.log(`${contact.name} : added contact to agenda.`);
    }

    removeContact(contact: Contact): void {
        const index = this.contacts.indexOf(contact);
        this.contacts.splice(index, 1);
        console.log(`${contact.name} : removed contact to agenda.`);
    }

    listContacts(): void {
        console.log("Contacts:");
        this.contacts.forEach(contact => console.log(`- ${contact.name} : ${contact.phone}`));
    }
}

const agenda = new Agenda();

const contact1 = new Contact("Jonatan Ismael", 13996662857);
const contact2 = new Contact("Juliane Neves", 1399123123123);
console.log('-------------')
agenda.addContact(contact1);
agenda.addContact(contact2);
agenda.listContacts();
console.log('-------------')
agenda.removeContact(contact1);
agenda.listContacts();
console.log('-------------')
agenda.removeContact(contact2);
agenda.listContacts();
console.log('-------------')

