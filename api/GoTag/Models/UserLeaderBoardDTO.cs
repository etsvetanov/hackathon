using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoTag.Models
{
    //do not change
    public class UserLeaderBoardDTO
    {
        public string Guid { get; set; }
        public string AvatarPath { get; set; }
        public string Username { get; set; }
        public int TeamId { get; set; }
        public int Score { get; set; }
    }
}
