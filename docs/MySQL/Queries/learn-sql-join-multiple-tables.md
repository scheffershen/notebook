---
slug: earn-sql-join-multiple-tables
---

learn-sql-join-multiple-tables
==============================

https://www.sqlshack.com/learn-sql-join-multiple-tables/

## Join multiple tables using INNER JOIN

Employee (OneToMany Call)
    - id
    - firtname
    - lastname
Call (ManyToOne Employee and Call_outcome)
    - id
    - employee_id
    - customer_id
    - start_time
    - end_time
    - call_outcome_id
Call_outcome (OneToMany Call)
    - id
    - outcome_text

1. We need to list all calls with their start time and end time. For each call, we want to display what was the outcome as well the first and the last name of the employee who made that call. We’ll sort our calls by start time ascending.    

The query that does the job is given below

    SELECT employee.first_name, employee.last_name, call.start_time, call.end_time, call_outcome.outcome_text
    FROM employee
    INNER JOIN call ON call.employee_id = employee.id
    INNER JOIN call_outcome ON call.call_outcome_id = call_outcome.id
    ORDER BY call.start_time ASC;  

## Join multiple tables using LEFT JOIN

Country (OneToMany City)
    - id
    - country_name
    - country_name_eng
    - country_code
City (OneToMany Customer)
    - id
    - city_name
    - lat
    - long
    - country_id
Customer
    - id
    - customer_name
    - city_id
    - customer_address
    - next-call_date (date)
    - ts_inserted (datetime)

    SELECT country.country_name_eng, city.city_name, customer.customer_name
    FROM country
    LEFT JOIN city ON city.country_id = country.id
    LEFT JOIN customer ON customer.city_id = city.id;
