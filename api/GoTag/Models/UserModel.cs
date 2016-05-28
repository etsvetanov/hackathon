using GoTag.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GoTag.Models
{
    [Serializable]
    public class UserModel
    {
        public Guid Guid { get; set; }
        public string Username { get; set; }
        public string AvatarPath { get; set; }
        public TeamModel Team { get; set; }

        public static UserModel GetUserByGUID (Guid userGuid)
        {
            return DBContext.UsersList.FirstOrDefault(x => x.Guid == userGuid);
        }

        public static UserModel CreateUserByUserName(string requestedUsername)
        {
            string modifiedUsername = requestedUsername;
            for (int i = 0; i < 100; i++)
            {
                if (DBContext.UserNameAlreadyExists(modifiedUsername))
                {
                    modifiedUsername = requestedUsername + "#" + i;
                }
                else
                {
                    requestedUsername = modifiedUsername;
                    break;
                }
            }


            UserModel newUser = new UserModel();
            newUser.Guid = Guid.NewGuid();
            newUser.Username = requestedUsername;
            newUser.Team = new TeamModel();

            DBContext.AddNewUser(newUser);

            return newUser;
        }

        public static UserModel SelectTeamForUser(Guid userGuid, int teamId)
        {
            UserModel userFromDB = GetUserByGUID(userGuid);

            if (userFromDB != null)
            {
                if (teamId == 1) //todo dont like magic numbers
                {
                    userFromDB.AvatarPath = DBContext.PopMovieAvatar();
                    userFromDB.Team = DBContext.GetTeamByID(teamId);
                }
            }

            return userFromDB;
        }
    }
}