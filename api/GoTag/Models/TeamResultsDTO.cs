using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GoTag.Models
{
    public class TeamResultsDTO
    {
        public int Team1score { get; set; }
        public int Team2score { get; set; }
        public int Team3score { get; set; }
        public int Winner { get; set; }
    }
}
