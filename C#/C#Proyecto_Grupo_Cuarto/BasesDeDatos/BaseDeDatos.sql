USE HOLI;
GO
DROP DATABASE if exists Boostlol;
GO
Create database Boostlol;
GO
Use Boostlol;
GO

Create table EloBooster (
	ID_Booster int identity(1,1) primary key,
	Usuario_Booster varchar (20),
	Discord_Booster varchar (20),
	Correo_Booster varchar (40),
	Pais_Booster varchar (30),
	Rango_Booster varchar (20),
	Servidores_Booster varchar (255),
	Metodo_de_pago_Booster varchar (50),
	Posiciones_Booster varchar (50),
	Tipo_de_Booster varchar (50),
	Fecha_de_Ingreso_Booster Datetime default getdate()
);
GO
--insert into EloBooster (Usuario_Booster,Discord_Booster,Correo_Booster,Pais_Booster,Rango_Booster,Servidores_Booster,Metodo_de_pago_Booster,Posiciones_Booster,Tipo_de_Booster) values ('Dios','UK/haru#3579','SoyUnEnano@hotmail.com','La Aldea Pitufa','plata','lan','Paypal','JunGler','Aram level');
GO

Create procedure usp_registrar (
	@Usuario_Booster varchar (20),
	@Discord_Booster varchar (20),
	@Correo_Booster varchar (40),
	@Pais_Booster varchar (30),
	@Rango_Booster varchar (20),
	@Servidores_Booster varchar (255),
	@Metodo_de_pago_Booster varchar (50),
	@Posiciones_Booster varchar (50),
	@Tipo_de_Booster varchar (50)
)
as
begin
Insert Into EloBooster(Usuario_Booster,Discord_Booster,Correo_Booster,Pais_Booster,Rango_Booster,Servidores_Booster,Metodo_de_pago_Booster,Posiciones_Booster,Tipo_de_Booster)Values(@Usuario_Booster,@Discord_Booster,@Correo_Booster,@Pais_Booster,@Rango_Booster,@Servidores_Booster,@Metodo_de_pago_Booster,@Posiciones_Booster,@Tipo_de_Booster)
end

GO
-- EXECUTE REGISTRO --
Execute usp_registrar 'Dios','UK/haru#3579','SoyUnEnano@hotmail.com','La Aldea Pitufa','plata','lan','Paypal','JunGler','Aram level'
GO

Create procedure usp_Actualizar (
	@ID_Booster int,
	@Usuario_Booster varchar (20),
	@Discord_Booster varchar (20),
	@Correo_Booster varchar (40),
	@Pais_Booster varchar (30),
	@Rango_Booster varchar (20),
	@Servidores_Booster varchar (255),
	@Metodo_de_pago_Booster varchar (50),
	@Posiciones_Booster varchar (50),
	@Tipo_de_Booster varchar (50)
)
as
begin
update EloBooster set @Usuario_Booster = Usuario_Booster,@Discord_Booster = Discord_Booster,@Correo_Booster = Correo_Booster,@Pais_Booster = Pais_Booster,@Rango_Booster = Rango_Booster,@Servidores_Booster = Servidores_Booster,@Metodo_de_pago_Booster = Metodo_de_pago_Booster,@Posiciones_Booster = Posiciones_Booster,@Tipo_de_Booster = Tipo_de_Booster where ID_Booster = @ID_Booster
end

GO
-- EXECUTE ACTUALIZAR --
Execute usp_Actualizar 1,'Dios','UK/haru#3579','SoyUnEnano@hotmail.com','La Aldea Pitufa','plata','lan','Paypal','JunGler','Aram level';

GO

Create procedure usp_eliminar (
@ID_Booster INT
)
as
begin

Delete from EloBooster where ID_Booster = @ID_Booster
end

GO

EXECUTE usp_eliminar 1;

GO

Create procedure usp_Obtener (
@ID_Booster int 
)
as
begin

Select * from EloBooster where ID_Booster = @ID_Booster
end

GO

Execute usp_Obtener 1234;

GO

go
Create procedure usp_Listar
as
begin
Select * from EloBooster;
end
go 

execute usp_Listar;

-- AKARI\SQLEXPRESS (AKARI\braya) --

-- ARMAPRRQDFSD318\SQLEXPRESS --