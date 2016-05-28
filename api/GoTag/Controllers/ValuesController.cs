using GoTag.Data;
using GoTag.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
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
            UserModel newUser = UserModel.CreateUserByUserName(requestedUsername);

            string yourJson = new JavaScriptSerializer().Serialize(newUser);
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(yourJson, Encoding.UTF8, "application/json");
            return response;
        }

        [HttpPost]
        [Route("api/selectTeam")]
        public HttpResponseMessage SelectTeam(int teamId)
        {
            //extract guid from cookie here

            Guid userGuid = DBContext.UsersList.Select(s => s.Guid).FirstOrDefault();
            UserModel updatedUser = UserModel.SelectTeamForUser(userGuid, teamId);

            //UserModel dummyUser = new UserModel();
            //dummyUser.Guid = Guid.NewGuid();
            //dummyUser.Username = "DummyUserName1";
            //dummyUser.AvatarPath = @"\Assets\Pictures\UserAvatarPictures\MovieAvatars\YodaAvatar.jpg";
            //dummyUser.Team = new TeamModel();
            //dummyUser.Team.ID = 1;
            //dummyUser.Team.TeamCategoryId = 1;
            //dummyUser.Team.TeamCategoryName = "Movies";
            //dummyUser.Team.TeamName = "Stormtroopers pee straight";
            //dummyUser.Team.TeamPicturePath = @"\Assets\Pictures\TeamAvatar\MoviesLogo.png";

            string yourJson = new JavaScriptSerializer().Serialize(updatedUser);
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(yourJson, Encoding.UTF8, "application/json");
            return response;
        }

    }
}
