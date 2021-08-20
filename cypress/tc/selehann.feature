Feature: Selehann

Study test cases
    - Services
    - About
    - Work
    - Contact

@regression @services
Scenario Outline: Validate available services
    Given The user is on the main screen
    When Select the upper option Services
    Then Validate the service <"service">

    Examples:
    |service                |
    |UI/UX DESIGN           |   
    |MACHINE LEARNING       | 
    |MOBILE DEVELOPMENT     | 
    |WEB DEVELOPMENT        | 
    |CLOUD INFRASTRACTURE   | 
    |DATABASE ADMINISTRATION| 


@regression @about
Scenario Outline: Sobre nosotros
    Given The user is on the main screen
    When Select the upper option About
    Then Validate the texto <"text">

    Examples:
    |text                                  |
    |Professional web and mobile development|     

@regression @work
Scenario Outline: About Us
    Given The user is on the main screen
    When Select the upper option About
    Then validate recent work <"tr">

    Examples:
    |tr             |
    |NerdRabbit     |     
    |Network Capital|  
    |ChannelWorks   |      

@regression @contacto
Scenario Outline: Contacto formulario 
    Given The user is on the main screen
    When Select the upper option Contact
    And Insert <"name"> in the field name
    And Insert <"lastname"> in the field lastname
    And Insert <"email"> in the field email
    And Insert <"message"> in the field message

    Examples:
    |name     |lastname   |email   |message   |message                         |
    |Miguel   |Dalessio   |m@m.com |testing   |Sent                            |
    |Miguel   |           |m@m.com |testing   |Debe completar el campo lastname|
    |         |Dalessio   |        |testing   |Debe completar el campo name    |
    |Miguel   |Dalessio   |m@m.com |          |Debe completar el campo message |
    |         |           |        |          |Debe completar el formulario    |
    |Miguel   |Dalessio   | .com   |          |El formato email es invalido    |