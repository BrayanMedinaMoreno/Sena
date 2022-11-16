using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AppApi.Models
{
    public class Usuario
    {
        public int ID_Booster { get; set; }
        public string Usuario_Booster { get; set; }
        public string Discord_Booster { get; set; }
        public string Correo_Booster { get; set; }
        public string Pais_Booster { get; set; }
        public string Rango_Booster { get; set; }
        public string Servidores_Booster { get; set; }
        public string Metodo_de_pago_Booster { get; set; }
        public string posiciones_Booster { get; set; }
        public string Tipo_de_Booster { get; set; }
        public DateTime FechaIngreso { get; set; }
        
}