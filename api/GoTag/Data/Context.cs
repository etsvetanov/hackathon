using GoTag.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GoTag.Data
{
    public static class DBContext
    {
        private static List<UserModel> _usersList;

        public static List<UserModel> UsersList
        {
            get
            {
                if (_usersList == null)
                {
                    _usersList = new List<UserModel>();
                }
                return _usersList;
            }
        }
        
        public static bool UserNameAlreadyExists(string username)
        {
            if (UsersList.Any(x=>x.Username == username))
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        public static void AddNewUser (UserModel newLoginResult)
        {
            UsersList.Add(newLoginResult);
        }

        private static List<string> _teams;
        public static List<string> Teams
        {
            get
            {
                if (_teams == null)
                {
                    _teams = new List<string>();
                    _teams.Add("Stormtroopers pee straight");
                    _teams.Add("VIM >>> EMCS");
                    _teams.Add("Starcraft 1");
                }
                return _teams;
            }
        }

        public static void SetTeamForUser(Guid userGuid, string teamName)
        {
            var user = UsersList.Where(u => u.Guid == userGuid);
            if (user.Count() == 1)
            {
                //user.FirstOrDefault().Team = teamName;
            }
        }
    }
}