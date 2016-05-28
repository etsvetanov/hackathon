using GoTag.Models;
using GoTag.Utility;
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



        private static List<TeamModel> _teams;
        public static List<TeamModel> Teams
        {
            get
            {
                if (_teams == null || _teams.Count == 0)
                {
                    _teams = TeamModel.GenerateTeams();
                }
                return _teams;
            }
        }

        public static TeamModel GetTeamByID(int teamID)
        {
            return Teams.FirstOrDefault(t => t.ID == teamID);
        }



        private static List<string> _movieUserAvatarPaths;
        public static List<string> MovieUserAvatarPaths
        {
            get
            {
                if (_movieUserAvatarPaths == null || _movieUserAvatarPaths.Count == 0)
                {
                    _movieUserAvatarPaths = FileService.GetFilePathsForFolder(HttpContext.Current.Server.MapPath(@"\Assets\Pictures\UserAvatarPictures\MovieAvatars\YodaAvatar.jpg"));
                }
                return _movieUserAvatarPaths;
            }
        }

        public static string PopMovieAvatar()
        {
            string popedAvatarPath = _movieUserAvatarPaths.FirstOrDefault();
            _movieUserAvatarPaths.Remove(popedAvatarPath);

            return popedAvatarPath;
        }
        



    }
}