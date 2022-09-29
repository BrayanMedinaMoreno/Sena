drop database if exists ExamenOscar;
create database ExamenOscar;
use ExamenOscar;

create table membresia(
	id_membresia varchar(10) primary key not null,
    costo_membresia int not null
);

create table cliente (
	id_cliente varchar(10) primary key not null,
	nombre varchar(15) not null,
    direccion varchar(50)  not null,
    telefono varchar(10) not null, 
    id_membresia varchar(10) not null,
    estado bit default 1,
    foreign key (id_membresia) references membresia(id_membresia)
);



create table instructores (
	id_instructor varchar(10) primary key not null,
    nombre_instructor varchar(15) not null
);

create table horario(
	id_horario varchar(2) primary key not null,
    hora_comienzo datetime not null,
    hora_final datetime not null,
    horas_totales int as(hour(hora_final)-hour(hora_comienzo)) 
);


insert into horario (id_horario,hora_comienzo,hora_final,horas_totales) values ();

create table maquinas (
	id_maquina varchar(10) primary key not null,
    nombre_maquina varchar(30) not null
);

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


