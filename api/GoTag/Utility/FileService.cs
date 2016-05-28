using GoTag.Assets;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace GoTag.Utility
{
    public class FileService
    {

        public static List<string> GetFilePathsForFolder (string folderPath)
        {

            var fileNames = Directory.GetFiles(folderPath).ToList();
            var relativeFilePaths = fileNames.Select(x => RemoveServerString(x)).ToList();
            return relativeFilePaths;
        }

        public static string RemoveServerString (string absolutePath)
        {
            string staticAbsolutePath = System.Web.HttpContext.Current.Server.MapPath(StaticResournces.Team1Logo);
            string serverPath = staticAbsolutePath.Replace(StaticResournces.Team1Logo, "");
            return absolutePath.Replace(serverPath, "");
        }
    }
}