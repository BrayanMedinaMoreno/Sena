using AppApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AppApi.Data
{
    public class UsuarioData
    {
        public static bool registrarUsuario(Usuario oUsuario)
        {
            ConexionBD objEst = new ConexionBD();
            string sentencia;
            sentencia = "EXECUTE usp_registrar '" +
            oUsuario.IdU + "','" + oUsuario.Nombres + "',’” +oUsuario.Telefono + "','" + oUsuario.Correo + "','" + Usuario.Ciudad + "'";
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

    }
}