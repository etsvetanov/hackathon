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
    }
}