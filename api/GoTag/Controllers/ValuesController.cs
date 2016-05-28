using GoTag.Data;
using GoTag.Models;
using Microsoft.AspNet.SignalR;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Web;
using System.Web.Http;
using System.Web.Script.Serialization;
//using System.Web.Mvc;

namespace GoTag.Controllers
{
    //[Authorize]
    public class ValuesController : ApiController
    {
        // GET api/values
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
        }

        [HttpPost]
        [Route("api/createUniqueUser")]
        public HttpResponseMessage CreateUniqueUser(string requestedUsername)
        {
            try
            {
                UserModel newUser = UserModel.CreateUserByUserName(requestedUsername);

                HttpCookie userIdentityCookie = new HttpCookie("UserIdentityCookie");
                userIdentityCookie.Expires = DateTime.Now.AddDays(1);
                userIdentityCookie.Value = newUser.Guid.ToString();
                HttpContext.Current.Response.Cookies.Add(userIdentityCookie);

                string newUserJson = JsonConvert.SerializeObject(newUser);
                var response = Request.CreateResponse(HttpStatusCode.OK);
                response.Content = new StringContent(newUserJson, Encoding.UTF8, "application/json");

                return response;
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError);
            }
            
        }

        [HttpPost]
        [Route("api/selectTeam")]
        public HttpResponseMessage SelectTeam(int teamId)
        {
            try
            {
                var userIdentityCookie = HttpContext.Current.Request.Cookies.Get("UserIdentityCookie");

                Guid userGuid;
                if (userIdentityCookie != null)
                {
                    userGuid = Guid.Parse(userIdentityCookie.Value);
                }
                else
                {
                    //todo are we sure this is the logic we want to execute
                    userGuid = DBContext.UsersList.Select(s => s.Guid).FirstOrDefault();
                }

                UserModel updatedUser = UserModel.SelectTeamForUser(userGuid, teamId);

                string userJson = JsonConvert.SerializeObject(updatedUser);
                var response = Request.CreateResponse(HttpStatusCode.OK);
                response.Content = new StringContent(userJson, Encoding.UTF8, "application/json");
                return response;
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError);
            }
        }

        [HttpPost]
        [Route("api/incrementUserScore")]
        public HttpResponseMessage AddCorrectAnswer()
        {
            try
            {
                var userIdentityCookie = HttpContext.Current.Request.Cookies.Get("UserIdentityCookie");

                Guid userGuid;
                if (userIdentityCookie != null)
                {
                    userGuid = Guid.Parse(userIdentityCookie.Value);
                }
                else
                {
                    //todo are we sure this is the logic we want to execute
                    userGuid = DBContext.UsersList.Select(s => s.Guid).FirstOrDefault();
                }

                UserModel userFromDB = UserModel.IncrementUserScoreByGuid(userGuid);
                var userJson = JsonConvert.SerializeObject(userFromDB);

                var hub = GlobalHost.ConnectionManager.GetHubContext<GoTagSignalRHub>();
                hub.Clients.All.newCorrectAnswer(userJson);

                var response = Request.CreateResponse(HttpStatusCode.OK);
                response.Content = new StringContent(userJson, Encoding.UTF8, "application/json");
                return response;
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError);
            }
        }
    }
}
