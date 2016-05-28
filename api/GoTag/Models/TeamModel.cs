using GoTag.Assets;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace GoTag.Models
{
    public class TeamModel
    {
        public int ID { get; set; }
        public string TeamName { get; set; }
        public int TeamCategoryId { get; set; }
        public string TeamCategoryName { get; set; }
        public string TeamPicturePath { get; set; }

        public static List<TeamModel> GenerateTeams()
        {
            string team1AvatarRelativePath = StaticResournces.Team1Logo;
            TeamModel Team1 = new TeamModel();
            Team1.ID = StaticResournces.Team1ID;
            Team1.TeamCategoryId = (int)Enums.TeamCategoryEnum.Movies;
            Team1.TeamCategoryName = Enums.TeamCategoryEnum.Movies.ToString();
            Team1.TeamName = StaticResournces.Team1Name;
            Team1.TeamPicturePath = team1AvatarRelativePath;

            string team2AvatarRelativePath = StaticResournces.Team2Logo;
            TeamModel Team2 = new TeamModel();
            Team2.ID = StaticResournces.Team2ID;
            Team2.TeamCategoryId = (int)Enums.TeamCategoryEnum.Programming;
            Team2.TeamCategoryName = Enums.TeamCategoryEnum.Programming.ToString();
            Team2.TeamName = StaticResournces.Team2Name;
            Team2.TeamPicturePath = team2AvatarRelativePath;

            string team3AvatarRelativePath = StaticResournces.Team3Logo;
            TeamModel Team3 = new TeamModel();
            Team3.ID = StaticResournces.Team3ID;
            Team3.TeamCategoryId = (int)Enums.TeamCategoryEnum.Gaming;
            Team3.TeamCategoryName = Enums.TeamCategoryEnum.Gaming.ToString();
            Team3.TeamName = StaticResournces.Team3Name;
            Team3.TeamPicturePath = team3AvatarRelativePath;

            List<TeamModel> allTeams = new List<TeamModel>();
            allTeams.Add(Team1);
            allTeams.Add(Team2);
            allTeams.Add(Team3);

            return allTeams;
        }

        
    }
}