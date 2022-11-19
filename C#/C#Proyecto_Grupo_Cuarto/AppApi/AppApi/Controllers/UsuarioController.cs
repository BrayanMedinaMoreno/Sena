using AppApi.Data;
using AppApi.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Controllers;

namespace AppApi.Controllers
{
    public class UsuarioController : ApiController
    {
        // GET api/<controller>
        [HttpGet]
        public List<Usuario> Get()
        {
            return UsuarioData.Listar();
        }
        // GET api/<controller>/5
        [HttpGet]
        public List<Usuario> Get(string ID_Booster)
        {
            return UsuarioData.Obtener(ID_Booster);
        }
        // POST api/<controller>
        [HttpPost]
        public bool Post([FromBody] Usuario oUsuario)
        {
            return UsuarioData.RegistrarUsuario(oUsuario);
        }
        // PUT api/<controller>/5
        [HttpPut]
        public bool Put([FromBody] Usuario oUsuario)
        {
            return UsuarioData.ActualizarUsuario(oUsuario);
        }
        // DELETE api/<controller>/5
        
        [HttpDelete]
        public bool Delete(int ID_Booster)
        {
            return UsuarioData.EliminarUsuario(ID_Booster);
        }

    }
}
