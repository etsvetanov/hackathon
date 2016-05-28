using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace GoTag.Utility
{
    public class FileService
    {

        public static List<string> GetFilePathsForFolder (string folderPath)
        { 
            var fileNames = Directory.GetFiles(folderPath).ToList();

            return fileNames;
        }

        
    }
}