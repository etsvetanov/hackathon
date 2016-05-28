using GoTag.Assets;
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
        private static object _lockObject = new object();
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



        private static List<string> _team1UserAvatarPaths;
        public static List<string> Team1UserAvatarPaths
        {
            get
            {
                if (_team1UserAvatarPaths == null || !_team1UserAvatarPaths.Any())
                {
                    _team1UserAvatarPaths = FileService.GetFilePathsForFolder(HttpContext.Current.Server.MapPath(StaticResournces.Team1UserAvatarLogoPaths));
                }
                return _team1UserAvatarPaths;
            }
        }
        public static string PopAvatarForTeam1()
        {
            lock (_lockObject)
            {
                string popedAvatarPath = Team1UserAvatarPaths.FirstOrDefault();
                _team1UserAvatarPaths.Remove(popedAvatarPath);
                return popedAvatarPath;
            }
        }

        private static List<string> _team2UserAvatarPaths;
        public static List<string> Team2UserAvatarPaths
        {
            get
            {
                if (_team2UserAvatarPaths == null || !_team2UserAvatarPaths.Any())
                {
                    _team2UserAvatarPaths = FileService.GetFilePathsForFolder(HttpContext.Current.Server.MapPath(StaticResournces.Team3UserAvatarLogoPaths));
                }
                return _team2UserAvatarPaths;
            }
        }
        public static string PopAvatarForTeam2()
        {
            lock (_lockObject)
            {
                string popedAvatarPath = Team2UserAvatarPaths.FirstOrDefault();
                _team2UserAvatarPaths.Remove(popedAvatarPath);
                return popedAvatarPath;
            }
        }

        private static List<string> _team3UserAvatarPaths;
        public static List<string> Team3UserAvatarPaths
        {
            get
            {
                if (_team3UserAvatarPaths == null || !_team3UserAvatarPaths.Any())
                {
                    _team3UserAvatarPaths = FileService.GetFilePathsForFolder(HttpContext.Current.Server.MapPath(StaticResournces.Team2UserAvatarLogoPaths));
                }
                return _team3UserAvatarPaths;
            }
        }
        public static string PopAvatarForTeam3()
        {
            lock (_lockObject)
            {
                string popedAvatarPath = Team3UserAvatarPaths.FirstOrDefault();
                _team3UserAvatarPaths.Remove(popedAvatarPath);
                return popedAvatarPath;
            }
        }


    }
}