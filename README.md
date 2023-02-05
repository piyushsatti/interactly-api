# CRM-MySQL Basic CRUD Project
![Fun Stuff.](https://images.squarespace-cdn.com/content/v1/58d20c79725e25b221549193/1608020490393-RBHFYWZAECA6UCJMX7FK/Integrate+CI+CD.gif?format=1000w)

> Built with Express.js and Node.js


The core API for the CRM was non-responsive and would not work. So the project was built using mysql with postgres.

- [x] Understanding Requirements
- [ ] Testing provided APIs - APIs non-responsive
- [x] Creating DB
    - [x] Testing Schema
    - [x] Setting Up Details
- [x] Setting Up PostMan Routes
- [x] Saving Routes
- [x] Sending Email
- [ ] Awaiting Res :3

## Table Creation
```sql
create table contacts(
    contact_id serial primary key, 
    first_name varchar(255), 
    last_name varchar(255), 
    email varchar(255), 
    mobile_number varchar(255)
);
```

## Running the Code
```js
npm run devstart
```