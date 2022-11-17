using AppApi.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace AppApi.Data
{
    public class UsuarioData
    {
        public static bool RegistrarUsuario(Usuario oUsuario)
        {
            ConexionBD objEst = new ConexionBD();
            string sentencia;
            sentencia = "EXECUTE usp_registrar '" + oUsuario.Usuario_Booster + "','" +oUsuario.Discord_Booster + "','" + oUsuario.Correo_Booster + "','" +oUsuario.Pais_Booster + "','" +oUsuario.Rango_Booster+ "','" +oUsuario.Servidores_Booster +"','"+oUsuario.Metodo_de_pago_Booster +"','" + oUsuario.Posiciones_Booster + "','" + oUsuario.Tipo_de_Booster +"'";
            if (!objEst.EjecutarSentencia(sentencia, false))
            {
                objEst = null;
                return false;
            }
            else
            {
                objEst = null;
                return true;
            }

        }

        public static bool ActualizarUsuario(Usuario oUsuario)
        {
            ConexionBD objEst = new ConexionBD();
            string sentencia;
            sentencia = "EXECUTE usp_Actualizar '" + oUsuario.Usuario_Booster + "','" + oUsuario.Discord_Booster + "','" + oUsuario.Correo_Booster + "','" + oUsuario.Pais_Booster + "','" + oUsuario.Rango_Booster + "','" + oUsuario.Servidores_Booster + "','" + oUsuario.Metodo_de_pago_Booster + "','" + oUsuario.Posiciones_Booster + "','" + oUsuario.Tipo_de_Booster + "'";
            if (!objEst.EjecutarSentencia(sentencia, false))
            {
                objEst = null;
                return false;
            }
            else
            {
                objEst = null;
                return true;
            }
        }
        public static bool EliminarUsuario(int ID_Booster)
        {
            ConexionBD objEst = new ConexionBD();
            string sentencia;
            sentencia = "EXECUTE usp_eliminar '" + ID_Booster + "'";
            if (!objEst.EjecutarSentencia(sentencia, false))
            {
                objEst = null;
                return false;
            }
            else
            {
                objEst = null;
                return true;
            }
        }
        public static List<Usuario> Listar()
        {
            List<Usuario> oListaUsuario = new List<Usuario>();
            ConexionBD objEst = new ConexionBD();
            string sentencia;
            sentencia = "EXECUTE usp_Listar";
            if (objEst.Consultar(sentencia, false))
            {
                SqlDataReader dr = objEst.Reader;
                while (dr.Read())
                {
                    oListaUsuario.Add(new Usuario()
                    {
                        ID_Booster = Convert.ToInt32(dr["ID_Booster"]),
                        Usuario_Booster = dr["Usuario_Booster"].ToString(),
                        Discord_Booster = dr["Discord_Booster"].ToString(),
                        Correo_Booster = dr["Correo_Booster"].ToString(),
                        Pais_Booster = dr["Pais_Booster"].ToString(),
                        Rango_Booster = dr["Rango_Booster"].ToString(),
                        Servidores_Booster = dr["Servidores_Booster"].ToString(),
                        Metodo_de_pago_Booster = dr["Metodo_de_pago_Booster"].ToString(),
                        Posiciones_Booster = dr["Posiciones_Booster"].ToString(),
                        Tipo_de_Booster = dr["Tipo_de_Booster"].ToString(),
                        Fecha_de_Ingreso_Booster = dr["Fecha_de_Ingreso_Booster"].ToString()
                    });
                }
                return oListaUsuario;
            }
            else
            {
                return oListaUsuario;
            }
        }
        public static List<Usuario> Obtener(string ID_Booster)
        {
            List<Usuario> oListaUsuario = new List<Usuario>();
            ConexionBD objEst = new ConexionBD();
            string sentencia;
            sentencia = "EXECUTE usp_Obtener '" + ID_Booster + "'";
            if (objEst.Consultar(sentencia, false))
            {
                SqlDataReader dr = objEst.Reader;
                while (dr.Read())
                {
                    oListaUsuario.Add(new Usuario()
                    {
                        ID_Booster = Convert.ToInt32(dr["ID_Booster"]),
                        Usuario_Booster = dr["Usuario_Booster"].ToString(),
                        Discord_Booster = dr["Discord_Booster"].ToString(),
                        Correo_Booster = dr["Correo_Booster"].ToString(),
                        Pais_Booster = dr["Pais_Booster"].ToString(),
                        Rango_Booster = dr["Rango_Booster"].ToString(),
                        Servidores_Booster = dr["Servidores_Booster"].ToString(),
                        Metodo_de_pago_Booster = dr["Metodo_de_pago_Booster"].ToString(),
                        Posiciones_Booster = dr["Posiciones_Booster"].ToString(),
                        Tipo_de_Booster = dr["Tipo_de_Booster"].ToString(),
                        Fecha_de_Ingreso_Booster = dr["Fecha_de_Ingreso_Booster"].ToString()
                    });
                }
                return oListaUsuario;
            }
            else
            {
                return oListaUsuario;
            }
        }

    }
}