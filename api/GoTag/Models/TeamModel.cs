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
            string movieAvatarRelativePath = @"\Assets\Pictures\TeamAvatar\MoviesLogo.png";
            TeamModel movieTeam = new TeamModel();
            movieTeam.ID = 1;
            movieTeam.TeamCategoryId = (int)Enums.TeamCategoryEnum.Movies;
            movieTeam.TeamCategoryName = Enums.TeamCategoryEnum.Movies.ToString();
            movieTeam.TeamName = "Stormtroopers pee straight";
            movieTeam.TeamPicturePath = HttpContext.Current.Server.MapPath(movieAvatarRelativePath);

            string programmingAvatarRelativePath = @"\Assets\Pictures\TeamAvatar\ProgrammingLogo.jpg";
            TeamModel programmingTeam = new TeamModel();
            programmingTeam.ID = 1;
            programmingTeam.TeamCategoryId = (int)Enums.TeamCategoryEnum.Movies;
            programmingTeam.TeamCategoryName = Enums.TeamCategoryEnum.Movies.ToString();
            programmingTeam.TeamName = "Stormtroopers pee straight";
            programmingTeam.TeamPicturePath = HttpContext.Current.Server.MapPath(programmingAvatarRelativePath);

            string gamingAvatarRelativePath = @"\Assets\Pictures\TeamAvatar\GamingLogo.png";
            TeamModel gamingTeam = new TeamModel();
            gamingTeam.ID = 1;
            gamingTeam.TeamCategoryId = (int)Enums.TeamCategoryEnum.Movies;
            gamingTeam.TeamCategoryName = Enums.TeamCategoryEnum.Movies.ToString();
            gamingTeam.TeamName = "Stormtroopers pee straight";
            gamingTeam.TeamPicturePath = HttpContext.Current.Server.MapPath(gamingAvatarRelativePath);

            List<TeamModel> allTeams = new List<TeamModel>();
            allTeams.Add(movieTeam);
            allTeams.Add(programmingTeam);
            allTeams.Add(gamingTeam);

            return allTeams;
        }

        
    }
}