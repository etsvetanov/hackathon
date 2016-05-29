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
        public static bool _isEventStopped = false;
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
        public HttpResponseMessage SelectTeam(int teamId, string guid)
        {
            try
            {

                Guid userGuid = Guid.Parse(guid);

                UserModel updatedUser = UserModel.SelectTeamForUser(userGuid, teamId);

                //add user in leaderboard with 0 score
                string userLeaderboardDto = MapUserToUserLeaderBoardDTO(updatedUser);
                UpdateClientsWithUserScore(userLeaderboardDto);

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
        public HttpResponseMessage AddCorrectAnswer(string guid)
        {
            try
            {
                if (!_isEventStopped)
                {
                    Guid userGuid = Guid.Parse(guid);

                    UserModel userFromDB = UserModel.IncrementUserScoreByGuid(userGuid);
                    var userDtoJson = MapUserToUserLeaderBoardDTO(userFromDB);

                    //addOrUpdate user in leaderdashboard
                    UpdateClientsWithUserScore(userDtoJson);

                    var response = Request.CreateResponse(HttpStatusCode.OK);
                    response.Content = new StringContent(userDtoJson, Encoding.UTF8, "application/json");
                    return response;
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.Forbidden);
                }
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError);
            }
        }

        [HttpPost]
        [Route("api/stopEvent")]
        public HttpResponseMessage StopEvent()
        {
            try
            {
                _isEventStopped = true;

                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            catch
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }
        }
        [HttpPost]
        [Route("api/isEventFinished")]
        public HttpResponseMessage isEventFinished()
        {
            try
            {
                var response = Request.CreateResponse(HttpStatusCode.OK);
                response.Content = new StringContent(JsonConvert.SerializeObject(_isEventStopped), Encoding.UTF8, "application/json");
                return response;
            }
            catch (Exception)
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }

        }

        [HttpPost]
        [Route("api/restartEvent")]
        public HttpResponseMessage RestartEvent()
        {
            try
            {
                _isEventStopped = false;

                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            catch
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }

        }


        [HttpPost]
        [Route("api/hardRestartEvent")]
        public HttpResponseMessage HardRestartEvent()
        {
            try
            {
                _isEventStopped = false;
                DBContext.UsersList.Clear();
                return new HttpResponseMessage(HttpStatusCode.OK);
            }
            catch
            {
                return new HttpResponseMessage(HttpStatusCode.InternalServerError);
            }

        }

        [HttpPost]
        [Route("api/getEventResult")]
        public HttpResponseMessage GetEventResult()
        {
            try
            {
                TeamResultsDTO teamsResults = new TeamResultsDTO
                {
                    Team1score = CalculateResult(GetTeamResult(1)),
                    Team2score = CalculateResult(GetTeamResult(2)),
                    Team3score = CalculateResult(GetTeamResult(3)),
                };

                CalculateAndSetWinner(teamsResults);

                var response = Request.CreateResponse(HttpStatusCode.OK);
                response.Content = new StringContent(JsonConvert.SerializeObject(teamsResults), Encoding.UTF8, "application/json");
                return response;
            }
            catch (Exception)
            {
                //in case calculation fails return result hardcoded
                var response = Request.CreateResponse(HttpStatusCode.OK);
                TeamResultsDTO teamsResultsHardcoded = new TeamResultsDTO
                {
                    Team1score = 45,
                    Team2score = 24,
                    Team3score = 38,
                    Winner = 1
                };
                response.Content = new StringContent(JsonConvert.SerializeObject(teamsResultsHardcoded), Encoding.UTF8, "application/json");
                return response;
            }
        }

        private void CalculateAndSetWinner(TeamResultsDTO teamResultsDto)
        {
            if (teamResultsDto.Team1score >= teamResultsDto.Team2score
                && teamResultsDto.Team1score >= teamResultsDto.Team3score) { teamResultsDto.Winner = 1; }
            else if (teamResultsDto.Team2score >= teamResultsDto.Team1score
                && teamResultsDto.Team2score >= teamResultsDto.Team3score) { teamResultsDto.Winner = 2; }
            else { teamResultsDto.Winner = 3; }
        }
        private int CalculateResult(List<int> scores)
        {
            int score = 0;
            foreach (var scoreValue in scores)
            {
                score = score + scoreValue;
            }

            return score;
        }

        private List<int> GetTeamResult(int teamId)
        {
            return DBContext.UsersList.Where(x => x.Team.ID == teamId).Select(x => x.Score).ToList();
        }

        private void UpdateClientsWithUserScore(string userLeaderBoardDtoJson)
        {
            var hub = GlobalHost.ConnectionManager.GetHubContext<GoTagSignalRHub>();
            hub.Clients.All.newCorrectAnswer(userLeaderBoardDtoJson);
        }

        private string MapUserToUserLeaderBoardDTO(UserModel userFromDB)
        {
            return JsonConvert.SerializeObject(new UserLeaderBoardDTO
            {
                Guid = userFromDB.Guid.ToString(),
                AvatarPath = userFromDB.AvatarPath,
                Username = userFromDB.Username,
                TeamId = userFromDB.Team.ID,
                Score = userFromDB.Score
            });
        }
    }
}
