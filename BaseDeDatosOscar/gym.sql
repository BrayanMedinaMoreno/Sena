-- se dropea si existe la base de datos ExamenOscar
drop database if exists ExamenOscar;
-- Se crea la base de datos ExamenOscar 
create database ExamenOscar;
-- se usa la base de datos ExamenOscar
use ExamenOscar;

-- se crea la tabla membresia y sus columnas --

create table membresia(
	id_membresia varchar(10) primary key not null,
    costo_membresia int not null
);

-- se crea la tabla cliente y sus columnas + foreing key --

create table cliente (
	id_cliente varchar(10) primary key not null,
	nombre varchar(15) not null,
    direccion varchar(50)  not null,
    telefono varchar(10) not null, 
    id_membresia varchar(10) not null,
    estado bit default 1,
    foreign key (id_membresia) references membresia(id_membresia)
);

-- se crea la tabla instructores y sus columnas --

create table instructores (
	id_instructor varchar(10) primary key not null,
    nombre_instructor varchar(15) not null
);

-- se crea la tabla horario y sus columnas --

create table horario(
	id_horario varchar(2) primary key not null,
    hora_comienzo time not null,
    hora_final time not null,
    horas_totales int as(hour(hora_final)-hour(hora_comienzo)) 
    -- horas_diferentes int as(hour(hora_final)!=hour(hora_comienzo)) -- intentar solucionar esta wea 
);

 -- select * from horario;
-- select * from horario; -- prueba la wea del tiempo porque aja 

-- se crea la tabla maquinas y sus columnas --

CREATE TABLE maquinas (
    id_maquina VARCHAR(10) PRIMARY KEY NOT NULL,
    nombre_maquina VARCHAR(30) NOT NULL,
    disponible time default "8:00:00",
    estado BOOL as (round(rand(1))) 
);

-- SELECT * from maquinas;  -- probar la wea random
-- se crea la tabla reserva y sus columnas + las foreign key --

create table reserva (
	id_reserva varchar(10) primary key not null,
    costo int not null,
    id_cliente varchar(10) not null,
    id_instructor varchar(10) not null,
    id_maquina varchar(10) not null,
    id_horario varchar(2) not null,
    foreign key (id_cliente) references cliente(id_cliente),
    foreign key (id_instructor) references instructores(id_instructor),
    foreign key (id_maquina) references maquinas(id_maquina),
    foreign key (id_horario) references horario(id_horario)
);

-- se crean los insert en la tabla membresia y se agregan sus valores --

insert into membresia (id_membresia,costo_membresia) values ("1",50000);
insert into membresia (id_membresia,costo_membresia) values ("2",50000);
insert into membresia (id_membresia,costo_membresia) values ("3",50000);
insert into membresia (id_membresia,costo_membresia) values ("4",50000);
insert into membresia (id_membresia,costo_membresia) values ("5",50000);
insert into membresia (id_membresia,costo_membresia) values ("6",50000);
insert into membresia (id_membresia,costo_membresia) values ("7",50000);
insert into membresia (id_membresia,costo_membresia) values ("8",50000);
insert into membresia (id_membresia,costo_membresia) values ("9",50000);
insert into membresia (id_membresia,costo_membresia) values ("10",50000);

-- se crean los insert en la tabla cliente y se agregan sus valores --

insert into cliente (id_cliente,nombre,direccion,telefono,id_membresia) values ("1","moises","calle 1 A xd ","3053326008","1");
insert into cliente (id_cliente,nombre,direccion,telefono,id_membresia) values ("2","gian","calle 13 numero 5","3103058580","2");
insert into cliente (id_cliente,nombre,direccion,telefono,id_membresia) values ("3","daniel","calle 12 del genshi 14-1","3235789592","3");
insert into cliente (id_cliente,nombre,direccion,telefono,id_membresia) values ("4","alexander","calle 45 #12","3104435166","4");
insert into cliente (id_cliente,nombre,direccion,telefono,id_membresia) values ("5","sebastian","calle 123 A ignite12 ","3107465499","5");
insert into cliente (id_cliente,nombre,direccion,telefono,id_membresia) values ("6","yordan","calle 1 A xd ","3147027566","6");
insert into cliente (id_cliente,nombre,direccion,telefono,id_membresia) values ("7","Daniela","calle 13 numero 54 genshi mundo","3135542979","7");
insert into cliente (id_cliente,nombre,direccion,telefono,id_membresia) values ("8","jessica","calle 32 A 5 lolplayer","2094964678","8");
insert into cliente (id_cliente,nombre,direccion,telefono,id_membresia) values ("9","sergio","calle 1 A disco y al piso","3023520307","9");
insert into cliente (id_cliente,nombre,direccion,telefono,id_membresia) values ("10","Oscar","calle 1 Axd","3217197792","10");

-- se crean los insert en la tabla instructores y se agregan sus valores --

insert into instructores (id_instructor,nombre_instructor) values ("1","oscar");
insert into instructores (id_instructor,nombre_instructor) values ("2","EdwinR");
insert into instructores (id_instructor,nombre_instructor) values ("3","EdwonN");
insert into instructores (id_instructor,nombre_instructor) values ("4","Hugo");
insert into instructores (id_instructor,nombre_instructor) values ("5","Alvaro");
insert into instructores (id_instructor,nombre_instructor) values ("6","angarita");
insert into instructores (id_instructor,nombre_instructor) values ("7","luisa");
insert into instructores (id_instructor,nombre_instructor) values ("8","aldemar");
insert into instructores (id_instructor,nombre_instructor) values ("9","alberto");
insert into instructores (id_instructor,nombre_instructor) values ("10","pedro");

-- se crean los insert en la tabla horario y se agregan sus valores --

insert into horario(id_horario, hora_comienzo, hora_final) values ('1', '08:00:00', '12:00:00');
insert into horario(id_horario, hora_comienzo, hora_final) values ('2', '09:00:00', '13:00:00');
insert into horario(id_horario, hora_comienzo, hora_final) values ('3', '10:00:00', '14:00:00');
insert into horario(id_horario, hora_comienzo, hora_final) values ('4', '11:00:00', '15:00:00');
insert into horario(id_horario, hora_comienzo, hora_final) values ('5', '12:00:00', '16:00:00');
insert into horario(id_horario, hora_comienzo, hora_final) values ('6', '13:00:00', '17:00:00');
insert into horario(id_horario, hora_comienzo, hora_final) values ('7', '14:00:00', '18:00:00');
insert into horario(id_horario, hora_comienzo, hora_final) values ('8', '15:00:00', '19:00:00');
insert into horario(id_horario, hora_comienzo, hora_final) values ('9', '16:00:00', '19:00:00');
insert into horario(id_horario, hora_comienzo, hora_final) values ('10', '17:00:00', '19:00:00');

-- se crean los insert en la tabla maquinas y se agregan sus valores --

insert into maquinas (id_maquina,nombre_maquina) values ("1","caminadora");
insert into maquinas (id_maquina,nombre_maquina) values ("2","cinta de correr");
insert into maquinas (id_maquina,nombre_maquina) values ("3","bicicleta vertical");
insert into maquinas (id_maquina,nombre_maquina) values ("4","eliptica");
insert into maquinas (id_maquina,nombre_maquina) values ("5","remo");
insert into maquinas (id_maquina,nombre_maquina) values ("6","banco olimpico");
insert into maquinas (id_maquina,nombre_maquina) values ("7","maquina de poleas");
insert into maquinas (id_maquina,nombre_maquina) values ("8","press banca");
insert into maquinas (id_maquina,nombre_maquina) values ("9","maquina de remo");
insert into maquinas (id_maquina,nombre_maquina) values ("10","maquina para pierna");

-- se crean los insert en la tabla reserva y se agregan sus valores --

insert into reserva (id_reserva,costo,id_cliente,id_instructor,id_maquina,id_horario) values ("1","13000","1","1","1","1");
insert into reserva (id_reserva,costo,id_cliente,id_instructor,id_maquina,id_horario) values ("2","13000","2","2","2","2");
insert into reserva (id_reserva,costo,id_cliente,id_instructor,id_maquina,id_horario) values ("3","13000","3","3","3","3");
insert into reserva (id_reserva,costo,id_cliente,id_instructor,id_maquina,id_horario) values ("4","13000","4","4","4","4");
insert into reserva (id_reserva,costo,id_cliente,id_instructor,id_maquina,id_horario) values ("5","13000","5","5","5","5");
insert into reserva (id_reserva,costo,id_cliente,id_instructor,id_maquina,id_horario) values ("6","13000","6","6","6","6");
insert into reserva (id_reserva,costo,id_cliente,id_instructor,id_maquina,id_horario) values ("7","13000","7","7","7","7");
insert into reserva (id_reserva,costo,id_cliente,id_instructor,id_maquina,id_horario) values ("8","13000","8","8","8","8");
insert into reserva (id_reserva,costo,id_cliente,id_instructor,id_maquina,id_horario) values ("9","13000","9","9","9","9");
insert into reserva (id_reserva,costo,id_cliente,id_instructor,id_maquina,id_horario) values ("10","13000","10","10","10","10");


-- 1 --
-- elaborar un listado de las maquinas disponibles en el gym --
select * from maquinas where estado=1;

-- 2 --
-- elaborar una consulta que permita identificar los horarios en que una maquina se encuentra disponible --
select nombre_maquina,disponible from maquinas where estado = 1;

-- 3 --
-- elaborar un consulta que permita identificar las maquinas usadas por un cliente, el instructor a cargo y los horarios reservados --
select cliente.nombre, maquinas.nombre_maquina, instructores.nombre_instructor, horario.hora_comienzo, horario.hora_final from cliente inner join maquinas inner join instructores inner join horario inner join reserva where reserva.id_cliente=cliente.id_cliente and reserva.id_instructor=instructores.id_instructor and reserva.id_maquina=maquinas.id_maquina and reserva.id_horario=horario.id_horario; 

-- 4 --
-- elaborar una consulta que permita identificar los clientes que trabajan con instructor especifico --
select cliente.nombre, instructores.nombre_instructor from cliente inner join instructores inner join reserva where reserva.id_cliente=cliente.id_cliente and reserva.id_instructor=instructores.id_instructor;