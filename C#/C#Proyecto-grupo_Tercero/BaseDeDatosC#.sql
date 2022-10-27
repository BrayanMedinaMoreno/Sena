-- se borra la base de datos si existe BaseDeDatosProyectoC# --

drop database if exists BaseDeDatosProyectoC#;
go

-- crea la base de datos BaseDeDatosProyectoC# --

create database BaseDeDatosProyectoC#;
go

-- se selecciona la base de datos BaseDeDatosProyectoC# --

use BaseDeDatosProyectoC#;
go

-- se crea la tabla Empleado con sus campos --

create table Empleado (id_empleado varchar (10) primary key,
						nombre_empleado varchar (30) not null,
						apellido_empleado varchar (30) not null,
						telefono_empleado varchar (30) not null,
						edad_empleado varchar (14) not null,
						direccion_empleado varchar (150) not null,
						nacionalidad_empleado varchar (40) not null,
						estado bit default 1
						);
go

-- se crea la tabla Proveedor con sus campos --


create table Proveedor (id_proveedor varchar (10) primary key ,
						nombre_provedor varchar (30) not null,
						telefono varchar (30) not null,
						dirreccion_proveedor varchar (150) not null,
						estado bit default 1
						);
go

-- se crea la tabla categoria con sus campos --

create table Categoria (id_categoria varchar (10) primary key ,
						nombre varchar (30) not null,
						caracteristica varchar (30)not null
						);
go

-- se crea la tabla Cliente con sus campos --


create table Cliente (id_cliente varchar (10) primary key,
					  nombre_cliente varchar (30) not null,
					  apellido_cliente varchar (30) not null,
					  telefono_cliente varchar (30) not null,
					  edad_cliente varchar (14) not null,
					  direccion_cliente varchar (150) not null,
					  nacionalidad_cliente varchar (40) not null,
					  estado bit default 1
					  );
go

-- se crea la tabla Ventas con sus campos --

create table Ventas (numero_venta int identity primary key,
					fecha date not null,
					fk_empleado varchar (10) not null,
					fk_cliente varchar (10) not null,
					iva float not null,
					sub_total float not null,
					total float not null,
					foreign key (fk_cliente) references cliente(id_cliente),
					foreign key (fk_empleado) references empleado(id_empleado)
					);
go

-- se crea la tabla Compra con sus campos --


create table Compra (id_compra varchar (10) primary key,
					fk_empleado varchar (10) not null,
					iva float not null,
					fk_proveedor varchar (10) not null,
					total float not null,
					sub_total float not null,
					fecha date not null,
					foreign key (fk_empleado) references Empleado(id_empleado),
					foreign key (fk_proveedor) references proveedor(id_proveedor)
					);
go

-- se crea la tabla Producto con sus campos --

create table Producto (codigo_producto varchar (10) primary key,
						nombre_producto varchar (30) not null,
						valor float not null,
						fk_categoria varchar (10) not null,
						foreign key (fk_categoria) references Categoria(id_categoria)
						);
go

-- se crea la tabla Compra_Producto con sus campos --


create table Compra_Producto ( 
							   fk_num_compra varchar (10) not null,
							   fk_codigo_pr varchar (10) not null,
							   cantidad int not null,
							   costo float not null,
							   valor_total float null,
							   constraint fk1 foreign key (fk_num_compra) references Compra (id_compra),
							   constraint fk2 foreign key (fk_codigo_pr) references producto (codigo_producto),
							   primary key (fk_num_compra,fk_codigo_pr) 
							  );
go

-- se crea la tabla Ventas_Producto con sus campos --


create table Ventas_producto (fk_codigo_pr varchar (10) not null,
							  fk_num_venta int not null,
							  cantidad int not null,
							  valor_total float not null,
							  constraint fk3 foreign key (fk_num_venta) references ventas (numero_venta),
							  constraint fk4 foreign key (fk_codigo_pr) references producto (codigo_producto),
							  primary key (fk_num_venta,fk_codigo_pr)
							  );
go

-- ComboBox Categoria --

go
create procedure USP_combo_categoria
as
begin
	SELECT '0' as id, 'Seleccione una categoria' as categoria
	union
	SELECT id_categoria as id, nombre as categoria from Categoria
end
go

go 
create procedure USP_insert_categoria
	@id varchar(10),
	@nombre varchar(30),
	@caracteristica varchar(30)
as
begin 
 insert into Categoria (id_categoria, nombre, caracteristica) values (@id, @nombre, @caracteristica);
end
go 

--USP_insert_categoria '123456', 'comida', 'roja';

go 
create procedure USP_select_categoria_uno
	@id varchar(10)
as
begin
	select * from Categoria where id_categoria=@id;
end
go

--USP_select_categoria_uno '123456';

go
create procedure USP_update_categoria
	@id varchar(10),
	@nombre varchar(30),
	@caracteristica varchar(30)
as
begin
	update Categoria set nombre=@nombre, caracteristica=@caracteristica where id_categoria=@id;
end
go

--USP_update_categoria '123456', 'arroz', 'blanco';

go 
CREATE PROCEDURE USP_delete_categoria
  @id varchar(10)
as
begin
	 DELETE from Categoria where id_categoria = @id;
end
go

--USP_delete_categoria '123456';

go 
CREATE PROCEDURE USP_select_categoria_all
as
begin
	SELECT * from Categoria
end
go

--USP_select_categoria_all

go
create procedure USP_combo_producto
as
begin
	SELECT '0' as id, 'Seleccione un producto'  as producto
	union
	SELECT codigo_producto as id, nombre_producto as producto from Producto
end
go

go
CREATE PROCEDURE USP_insert_producto
		@codigo_producto varchar (10),
		@nombre_producto varchar (30),
		@valor float,
		@fk_categoria varchar(10)
AS
begin
	INSERT into Producto (codigo_producto, nombre_producto, valor, fk_categoria) VALUES (@codigo_producto, @nombre_producto, @valor, @fk_categoria);
end
go 

--USP_insert_producto '123', 'arroz blanco', 3000.500, '123456';

go
CREATE PROCEDURE USP_select_producto_uno
		@codigo_producto varchar (10)
as
begin
	select * from Producto where codigo_producto=@codigo_producto;
end
go

--USP_select_producto_uno '123';

go 
CREATE PROCEDURE USP_select_productos_all
as
begin
	select * from Producto;
end
go 

--USP_select_productos_all;

go
CREATE PROCEDURE USP_update_producto
@codigo_producto varchar (10),
		@nombre_producto varchar (30),
		@valor float,
		@fk_categoria varchar(10)
as
begin
		update Producto set nombre_producto=@nombre_producto, valor=@valor, fk_categoria=@fk_categoria where codigo_producto=@codigo_producto;
end
go

--USP_update_producto '123', 'carne roja', 9500.300, '123456';

go
CREATE PROCEDURE USP_delete_producto
		@codigo_producto varchar (10)
as
begin
		delete from Producto where codigo_producto=@codigo_producto;
end
go

USP_delete_producto '123';

go
CREATE PROCEDURE USP_insert_compraProducto
		@num_compra varchar (10),
		@codigo_pr varchar (10),
		@cantidad int,
		@costo float,
		@valor_total float
AS
begin 
	insert into Compra_Producto (fk_num_compra, fk_codigo_pr, cantidad, costo, valor_total) values (@num_compra, @codigo_pr, @cantidad, @costo, @valor_total);
end
go

--USP_insert_compraProducto '12345', '123', 50, 9000.300, 457000.300;

go
CREATE PROCEDURE USP_select_compraProducto_uno
		@fk_num_compra varchar (10),
		@codigo_pr varchar (10)
AS
begin
		select * from Compra_Producto where fk_num_compra=@fk_num_compra and fk_codigo_pr=@codigo_pr;
end
go 

--USP_select_compraProducto_uno '12345', '123';

go
CREATE PROCEDURE USP_select_compraProducto_all
AS
begin 
		select * from Compra_Producto;
end
go 

--USP_select_compraProducto_all;

go
CREATE PROCEDURE USP_update_compraProducto
		@fk_num_compra varchar (10),
		@codigo_pr varchar (30),
		@cantidad int,
		@costo float,
		@valor_total float
AS
begin
		update Compra_Producto set cantidad=@cantidad, costo=@costo, valor_total=@valor_total where fk_num_compra=@fk_num_compra and fk_codigo_pr=@codigo_pr;
end
go

--USP_update_compraProducto '12345', '123456', 30, 7500.00, 225000.00;

go
CREATE PROCEDURE USP_delete_compraProducto
		@fk_num_compra varchar (10),
		@codigo_pr varchar (30)
as
begin
		delete from Compra_Producto where fk_num_compra=@fk_num_compra and fk_codigo_pr=@codigo_pr;
end
go

--USP_delete_compraProducto '12345', '123456';

go

-- Creacion de procedimientos --


-- Procedimiento Agregar Empleado --
go 
create procedure USP_agregar_empleado
	@id varchar (10),
	@nombre varchar(30),
	@apellido varchar(30),					
	@telefono varchar(30),
	@edad varchar(14),
	@direccion varchar(150),
	@nacionalidad varchar(40)
as
begin 
	insert into Empleado values (@id,@nombre,@apellido,@telefono,@edad,@direccion,@nacionalidad)
end 
go
-- Procedimiento Actualizar Empleado --
go
create procedure USP_Actualizar_Empleado
	@id varchar(10),
	@nombre varchar(30),
	@apellido varchar(30),
	@telefono varchar(30),
	@direccion varchar(150)
as
begin 
	update Empleado set nombre_empleado=@nombre,apellido_empleado=@apellido,telefono_empleado=@telefono,direccion_empleado=@direccion where id_empleado=@id
end
go

-- Procedimiento Borrar Empleado --
go
create procedure USP_Borrar_Empleado
	@id varchar(10)
as
begin
	delete from Empleado where id_empleado=@id
end
go
-- Procedimiento Consultar Empleado --
go
create procedure USP_Consultar_Empleado
	@id	varchar(10)
as
begin
	select * from Empleado where id_empleado=@id
end
go

go
create procedure USP_Listar_Empleado
	@id	varchar(10)
as
begin
	select * from Empleado
end
go

go
create procedure USP_ComboBox_Empleado
as
begin
        SELECT '0' as id, 'Seleccione el nombre del Empleado ' as Nombre
        union
        SELECT id_empleado, Nombre_empleado FROM empleado
end
go

-- ComboBox

select * from Empleado

execute USP_ComboBox_Empleado
execute USP_Consultar_Empleado '1'
execute USP_Borrar_Empleado '1'
execute USP_Actualizar_Empleado '1','dx','da','123456789','das'
execute USP_agregar_empleado '1','xd','ad','123456789','15','asd','xd'


-- Procedimientos Ventas --



-- Procedimientos Agregar Ventas --
go
Create procedure USP_Agregar_Ventas
	@Numero varchar(10),
	@fecha date,
	@FkEmpleado Varchar(10),
	@FkCliente varchar (10),				
	@Iva float,
	@subTotal float,
	@Total float
as
begin
	insert into ventas values (@Numero,@fecha,@FkEmpleado,@FkCliente,@Iva,@subTotal,@Total)
end
go


-- Procedimientos Actualizar Ventas --
go
Create procedure USP_Actualizar_Ventas
	@Numero varchar(10),
	@fecha date,
	@FkEmpleado Varchar(10),
	@FkCliente varchar (10),				
	@Iva float,
	@subTotal float,
	@Total float
as
begin
	update Ventas set fecha=@fecha,fk_empleado=@FkEmpleado,fk_cliente=@FkCliente,iva=@Iva,sub_total=@subTotal,total=@Total where numero_venta=@Numero
end
go

-- Procedimiento Borrar Ventas --
go
create procedure USP_Borrar_Ventas
	@Numero varchar(10)
as
begin
	delete from ventas where numero_venta=@Numero
end
go


-- Procedimientos Consultar Ventas --
go
create procedure USP_Consultar_Ventas
	@Numero	varchar(10)
as
begin
	select * from  ventas where numero_venta=@Numero
end
go

-- Procedimientos Listar Ventas --
go
create procedure USP_Listar_Ventas
	@Numero	varchar(10)
as
begin
	select * from  Ventas
end
go


-- Procedimientos Agregar ProductosVentas --
go
create procedure USP_agregar_ProductosVentas
	@Numero varchar(30),
	@Num_venta varchar(10),
	@cantidad int,
	@ValorTotal float
as
begin
	insert into Ventas_producto values (@Numero,@Num_venta,@cantidad,@ValorTotal)
end
go

-- Procedimientos Actualizar ProductosVentas --
go
create procedure USP_Actualizar_ProductosVentas
	@Numero varchar(30),
	@Num_venta varchar(10),
	@cantidad int,
	@ValorTotal float
as
begin
	update Ventas_producto set cantidad=@cantidad,valor_total=@ValorTotal where fk_codigo_pr=@Numero and fk_num_venta=@Num_venta
end
go

-- Procedimiento Borrar ProductosVentas --
go
create procedure USP_Borrar_ProductosVentas
	@Numero varchar(10),
	@Num_Pro varchar(30)
as
begin
	delete from Ventas_producto where fk_num_venta=@Numero and fk_codigo_pr=@Num_Pro
end
go

-- Procedimientos Consultar ProductosVentas --
go
create procedure USP_Consultar_ProductosVentas
	@Numero	varchar(10),
	@Numero_pro varchar(30)
as
begin
	select * from  Ventas_producto where fk_num_venta=@Numero and fk_codigo_pr=@Numero_pro
end
go

-- Procedimientos Listar ProductosVentas --
go
create procedure USP_Listar_ProductosVentas
as
begin
	select * from  Ventas_producto
end
go

/* CRUD + Listar de Cliente */

go
create procedure USP_COMBO_CLIENTE
as
begin
	SELECT '0' as id, 'Seleccione un Cliente' as cliente
	union
	SELECT id_cliente as id, nombre_cliente as cliente from Cliente
end
go

go
create procedure USP_CREATE_CLIENTE
	@id_cliente varchar (10),
	@nombre_cliente varchar (30),
	@apellido_cliente varchar (30),
	@telefono_cliente varchar (30),
	@edad_cliente varchar (14),
	@direccion_cliente varchar (150),
	@nacionalidad_cliente varchar (40)
as
begin
	INSERT INTO Cliente(id_cliente, nombre_cliente, apellido_cliente, telefono_cliente, edad_cliente, direccion_cliente, nacionalidad_cliente) values (@id_cliente, @nombre_cliente, @apellido_cliente, @telefono_cliente, @edad_cliente,  @direccion_cliente, @nacionalidad_cliente);
end
go

execute USP_CREATE_CLIENTE '1234567890', 'Moises', 'Pineda', '3053326008', '17', 'Direccion', 'Colombia' /* Work */

go
create procedure USP_READ_CLIENTE
	@id varchar(10)
as
begin
	SELECT * FROM Cliente where id_cliente = @id
end
go

execute USP_READ_CLIENTE '1234567890' /* Work */

go
create procedure USP_UPDATE_CLIENTE
	@id_cliente varchar (10),
	@nombre_cliente varchar (30),
	@apellido_cliente varchar (30),
	@telefono_cliente varchar (30),
	@edad_cliente varchar (14),
	@direccion_cliente varchar (150),
	@nacionalidad_cliente varchar (40)
as
begin
	UPDATE Cliente set id_cliente = @id_cliente, nombre_cliente = @nacionalidad_cliente, apellido_cliente = @apellido_cliente, telefono_cliente = @telefono_cliente, edad_cliente = @edad_cliente, direccion_cliente = @direccion_cliente, nacionalidad_cliente = @nacionalidad_cliente
end
go

execute USP_UPDATE_CLIENTE '1234567890', 'Moises', 'Pineda', '3053326008', '17', 'Direccion 2', 'Colombia' /* Work */

go 
create procedure USP_DELETE_CLIENTE
	@id varchar(10)
as
begin
	DELETE FROM Cliente where id_cliente = @id
end
go

execute USP_DELETE_CLIENTE '1234567890' /* Work */


go
create procedure USP_LIST_CLIENTE
as
begin
	SELECT * FROM CLIENTE
end
go


execute USP_LIST_CLIENTE /* Work */



/* CRUD + Listar de Proveedor */

go
create procedure USP_COMBO_PROVEEDOR
as
begin
	SELECT '0' as id, 'Seleccione un proveedor' as proveedor
	union
	SELECT id_proveedor as id, nombre_provedor as proveedor from Proveedor
end
go

go
create procedure USP_CREATE_PROVEEDOR
	@id_proveedor varchar (10),
	@nombre_proveedor varchar (30),
	@telefono_proveedor varchar (30),
	@direccion_proveedor varchar (150)
as
begin
	INSERT INTO Proveedor(id_proveedor, nombre_provedor, telefono, dirreccion_proveedor) values (@id_proveedor, @nombre_proveedor, @telefono_proveedor,  @direccion_proveedor);
end
go

execute USP_CREATE_PROVEEDOR '1234567890', 'Proveedor 1', '5432154', 'Direccion Proveedor' /* Work */

go
create procedure USP_READ_PROVEEDOR
	@id varchar(10)
as
begin
	SELECT * FROM Proveedor where id_proveedor = @id
end
go

execute USP_READ_PROVEEDOR '1234567890' /* Work */

go
create procedure USP_UPDATE_PROVEEDOR
	@id_proveedor varchar (10),
	@nombre_proveedor varchar (30),
	@telefono_proveedor varchar (30),
	@direccion_proveedor varchar (150)
as
begin
	UPDATE Proveedor set id_proveedor = @id_proveedor, nombre_provedor = @nombre_proveedor, telefono = @telefono_proveedor, dirreccion_proveedor = @direccion_proveedor;
end
go

execute USP_UPDATE_PROVEEDOR '1234567890', 'Proveedor 1', '5432154', 'Direccion Proveedor 2' /* Work */

go 
create procedure USP_DELETE_PROVEEDOR
	@id varchar(10)
as
begin
	DELETE FROM Proveedor where id_proveedor = @id
end
go

execute USP_DELETE_PROVEEDOR '1234567890' /* Work */


go
create procedure USP_LIST_PROVEEDOR
as
begin
	SELECT * FROM Proveedor
end
go


execute USP_LIST_PROVEEDOR /* Work */



/* CRUD + Listar de Compras */

go
create procedure USP_CREATE_COMPRAS
	@id_proveedor varchar (10),
	@nombre_proveedor varchar (30),
	@telefono_proveedor varchar (30),
	@direccion_proveedor varchar (150)
as
begin
	INSERT INTO Proveedor(id_proveedor, nombre_provedor, telefono, dirreccion_proveedor) values (@id_proveedor, @nombre_proveedor, @telefono_proveedor,  @direccion_proveedor);
end
go

execute USP_CREATE_COMPRAS '1234567890', 'Proveedor 1', '5432154', 'Direccion Proveedor' /* Work */

go
create procedure USP_READ_COMPRAS
	@id varchar(10)
as
begin
	SELECT * FROM Proveedor where id_proveedor = @id
end
go

execute USP_READ_COMPRAS '1234567890' /* Work */

go
create procedure USP_UPDATE_COMPRAS
	@id_proveedor varchar (10),
	@nombre_proveedor varchar (30),
	@telefono_proveedor varchar (30),
	@direccion_proveedor varchar (150)
as
begin
	UPDATE Proveedor set id_proveedor = @id_proveedor, nombre_provedor = @nombre_proveedor, telefono = @telefono_proveedor, dirreccion_proveedor = @direccion_proveedor;
end
go

execute USP_UPDATE_COMPRAS '1234567890', 'Proveedor 1', '5432154', 'Direccion Proveedor 2' /* Work */

go 
create procedure USP_DELETE_COMPRAS
	@id varchar(10)
as
begin
	DELETE FROM Proveedor where id_proveedor = @id
end
go

execute USP_DELETE_COMPRAS '1234567890' /* Work */


go
create procedure USP_LIST_COMPRAS
as
begin
	SELECT * FROM Proveedor
end
go


execute USP_LIST_COMPRAS 

