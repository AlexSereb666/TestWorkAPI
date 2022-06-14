create database SofTrusTestBD

create table dbo.Contact(
ContactId int identity(1,1) primary key,
ContactName varchar(100),
ContactEmail varchar(100),
ContactPhone varchar(100)
)

insert into dbo.Contact values
('Alex', 'mail@softrust1.ru', '+7 (999) 999-99-91')

insert into dbo.Contact values
('Sam', 'mail@softrust2.ru', '+7 (999) 999-99-92')

insert into dbo.Contact values
('Jon', 'mail@softrust3.ru', '+7 (999) 999-99-93')

select * from dbo.Contact

create table dbo.Theme(
ThemeId int identity(1,1) primary key,
ThemeName varchar(100)
)

insert into dbo.Theme values
('Техподдержка')

insert into dbo.Theme values
('Продажи')

insert into dbo.Theme values
('Другое')

insert into dbo.Theme values
('Еще один пункт')

select * from dbo.Theme

select ThemeId, ThemeName from dbo.Theme

create table dbo.Comment(
CommentId int identity(1,1) primary key,
IdContact int foreign key references dbo.Contact(ContactId),
IdTheme int foreign key references dbo.Theme(ThemeId),
Content varchar(500) 
)

insert into dbo.Comment values
(1,1,'Возникла ошибка')

insert into dbo.Comment values
(1,2,'Продажа книг')

insert into dbo.Comment values
(2,3,'Ну видимо другое')

insert into dbo.Comment values
(3,4,'Еще один пункт:)')

select * from dbo.Comment

select ContactName,ThemeName,Content from dbo.Contact,dbo.Theme,dbo.Comment where ContactId = IdContact AND IdTheme = ThemeId